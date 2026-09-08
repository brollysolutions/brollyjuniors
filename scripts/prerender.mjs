import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/* Build-time prerender.
 *
 * Turns the single-page app into one real HTML file per route. This is the fix
 * for Blocker 1 in SEO_STRATEGY.md: before it, fetching any URL returned an
 * empty <div id="root"></div> with no heading, no copy, no phone number and no
 * address, and every crawler that does not execute JavaScript — Bing, and
 * every AI search engine — saw nothing at all.
 *
 * Deliberately written with no extra dependencies. react-snap and
 * vite-plugin-prerender both drive a headless Chrome, which is ~300MB of
 * install, breaks on CI images without system libraries, and is unnecessary
 * here: the content is entirely static, so renderToString produces exactly the
 * same HTML that a browser would, in about a second for the whole site.
 *
 * Output is plain files. Nothing runs on the server in production.
 *
 * Usage: node scripts/prerender.mjs   (after `vite build` and the SSR build)
 */

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const templatePath = path.join(distDir, 'index.html');

const HEAD_MARKER = '<!--head-->';
const ROOT_MARKER = '<div id="root"></div>';

function fail(message) {
  console.error(`\n  prerender: ${message}\n`);
  process.exit(1);
}

if (!existsSync(templatePath)) fail('dist/index.html not found — run `vite build` first.');
if (!existsSync(ssrEntry)) fail('dist-ssr/entry-server.js not found — run the SSR build first.');

const template = await readFile(templatePath, 'utf8');
if (!template.includes(HEAD_MARKER)) fail(`index.html is missing the ${HEAD_MARKER} marker.`);
if (!template.includes(ROOT_MARKER)) fail(`index.html is missing ${ROOT_MARKER}.`);

const { render, routes, getSeo, site, address, openingHours, areasServed, formattedAddress } =
  await import(pathToFileURL(ssrEntry).href);

/* '/' writes dist/index.html; '/about' writes dist/about/index.html.
   Apache serves the directory form without a trailing-slash redirect thanks to
   the rewrite in public/.htaccess. */
function outputPath(route) {
  if (route === '/') return templatePath;
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

let written = 0;
let indexable = 0;
const failures = [];

for (const route of routes) {
  try {
    const { html, head } = render(route);

    const page = template
      .replace(HEAD_MARKER, head)
      .replace(ROOT_MARKER, `<div id="root">${html}</div>`);

    const file = outputPath(route);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, page, 'utf8');

    written += 1;
    if (!getSeo(route).noindex) indexable += 1;
  } catch (error) {
    failures.push({ route, error });
  }
}

/* A route that throws would otherwise be silently deployed as the empty shell
   it used to be, which is the exact bug this script exists to fix. */
if (failures.length) {
  console.error(`\n  prerender: ${failures.length} route(s) failed to render:`);
  for (const f of failures) console.error(`    ${f.route}\n      ${f.error.message}`);
  process.exit(1);
}

/* The SPA fallback and ErrorDocument both point here. Rendering an unknown URL
   gives the real 404 page, which carries noindex — so a mistyped URL can never
   be indexed as a duplicate of the home page. */
const notFound = render('/__not-found__');
await writeFile(
  path.join(distDir, '404.html'),
  template
    .replace(HEAD_MARKER, notFound.head)
    .replace(ROOT_MARKER, `<div id="root">${notFound.html}</div>`),
  'utf8'
);

/* ---------------------------------------------------------------------------
 * sitemap.xml, generated from the same route list.
 *
 * It was previously maintained by hand, which is how a sitemap ends up listing
 * pages that no longer exist and omitting ones that do. Anything marked
 * noindex is left out: telling Google to crawl a page and then telling it not
 * to index the page is a contradiction it resolves by trusting neither.
 * ------------------------------------------------------------------------- */

const SITE_URL = 'https://brollyjuniors.com';
const today = new Date().toISOString().slice(0, 10);

function priorityFor(route, seo) {
  if (route === '/') return '1.0';
  if (seo.course) return '0.9'; // the program pages searches actually land on
  if (seo.location) return '0.8';
  if (seo.app) return '0.8'; // national reach, and the pages most likely to be linked to
  if (seo.module) return '0.5';
  if (seo.article) return '0.7';
  if (route === '/book-free-demo' || route === '/contact') return '0.8';
  return '0.6';
}

const entries = [];
for (const route of routes) {
  const seo = getSeo(route);
  if (seo.noindex) continue;
  entries.push(
    [
      '  <url>',
      `    <loc>${seo.canonical}</loc>`,
      `    <lastmod>${seo.article?.updated || seo.article?.published || today}</lastmod>`,
      `    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>`,
      `    <priority>${priorityFor(route, seo)}</priority>`,
      '  </url>',
    ].join('\n')
  );
}

await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`,
  'utf8'
);

/* ---------------------------------------------------------------------------
 * llms.txt — https://llmstxt.org
 *
 * A curated, plain-text map of the site for language models. An LLM answering
 * "where can my child learn abacus in Hyderabad" has a token budget, and left
 * to itself it will spend it on whichever pages it happened to crawl. This file
 * states the facts once, in the order that matters, with a link for each claim.
 *
 * Be clear about what this is worth: it is a proposed convention, not a
 * ranking mechanism, and no major assistant has committed to reading it. It
 * costs one generated file. The reason AI engines can read this site at all is
 * the prerendering above — none of them execute JavaScript.
 *
 * Generated from the same route list as the sitemap so the two cannot drift.
 * ------------------------------------------------------------------------- */

const isModule = (r) => /^\/(ai|python)-for-kids\/class-\d+\/./.test(r);
const isClassPage = (r) => /^\/(ai|python)-for-kids\/class-\d+$/.test(r);

/* First matching section wins, so the specific patterns precede the general. */
const SECTIONS = [
  ['Programs', (r) => /^\/programs/.test(r) || /^\/(ai|python)-for-kids$/.test(r) || /^\/junior-skills/.test(r)],
  ['Class-wise curricula', isClassPage],
  ['Academic tuitions', (r) => /^\/tuitions/.test(r)],
  ['Workshops', (r) => /^\/workshops/.test(r)],
  ['Classes by age', (r) => /^\/age-groups/.test(r)],
  ['For schools', (r) => /^\/schools/.test(r)],
  ['Apps', (r) => /^\/apps/.test(r)],
  ['Guides for parents', (r) => /^\/resources/.test(r)],
  ['Areas we serve', (r) => /^\/kids-classes-in-/.test(r)],
  ['About and contact', () => true],
];

function sectionFor(route) {
  if (isModule(route)) return 'Optional';
  for (const [name, test] of SECTIONS) if (test(route)) return name;
  return 'About and contact';
}

const grouped = new Map();
for (const route of routes) {
  const seo = getSeo(route);
  if (seo.noindex) continue;
  const key = sectionFor(route);
  if (!grouped.has(key)) grouped.set(key, []);
  /* The title carries a " | Brolly Juniors" suffix for the SERP; inside a file
     that is already headed "Brolly Juniors" it is just noise. */
  grouped.get(key).push({
    title: seo.title.replace(/\s*\|\s*Brolly Juniors\s*$/, ''),
    url: seo.canonical,
    description: seo.description,
  });
}

const facts = [
  `- **Location:** ${formattedAddress()}`,
  address.landmarks ? `- **Landmarks:** ${address.landmarks}` : null,
  openingHours.length ? `- **Open:** ${openingHours.map((h) => `${h.days}, ${h.time}`).join('; ')}` : null,
  `- **Phone / WhatsApp:** ${site.phone}`,
  `- **Email:** ${site.email}`,
  '- **Ages taught:** 4 years to Class 10',
  '- **Batch size:** capped at 8 children',
  '- **Trial:** one free trial class before enrolling',
  `- **Areas served:** ${areasServed.join(', ')} — and online across India`,
].filter(Boolean);

/* Section order for llms.txt, with any unlisted section slotted in before
   Optional so adding a SECTIONS entry cannot quietly drop pages. */
const LLMS_ORDER = [
  'Programs',
  'Academic tuitions',
  'Workshops',
  'Classes by age',
  'Class-wise curricula',
  'For schools',
  'Apps',
  'Guides for parents',
  'Areas we serve',
  'About and contact',
];

function llmsOrder() {
  const known = new Set([...LLMS_ORDER, 'Optional']);
  const extra = [...grouped.keys()].filter((name) => !known.has(name));
  return [...LLMS_ORDER, ...extra, 'Optional'].filter((name) => grouped.has(name));
}

const llms = [
  '# Brolly Juniors',
  '',
  '> A learning centre in Hyderabad, India, teaching Abacus, Phonics, Vedic Maths and',
  '> Public Speaking to younger children, and Artificial Intelligence, Python coding and',
  '> digital skills to Classes 6 to 10. Batches are capped at 8 children. Classes run at',
  '> the Nizampet centre and online.',
  '',
  ...facts,
  '',
  /* Ordered by what a model should read first, not by route order. "Optional"
     is the spec's name for a section that can be dropped when context is
     tight, so the 90 module pages go there and go last.
     LLMS_ORDER is a preference, not a whitelist: anything grouped but not
     named here is appended before Optional rather than dropped. This used to
     be a plain filter, which silently omitted every page in a section that had
     been added to SECTIONS but not to this list. */
  ...llmsOrder()
    .flatMap((name) => [
      `## ${name}`,
      '',
      ...grouped.get(name).map((i) => `- [${i.title}](${i.url}): ${i.description}`),
      '',
    ]),
].join('\n');

await writeFile(path.join(distDir, 'llms.txt'), `${llms.trimEnd()}\n`, 'utf8');
const llmsCount = [...grouped.values()].reduce((n, v) => n + v.length, 0);

await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(
  `  prerender: ${written} pages written (${indexable} indexable) + 404.html\n` +
    `  sitemap:   ${entries.length} URLs -> dist/sitemap.xml\n` +
    `  llms.txt:  ${llmsCount} pages in ${grouped.size} sections -> dist/llms.txt`
);
