import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* Checks the built output against the promises made in SEO_STRATEGY.md.
 *
 * The two blockers in that document were invisible for months because nothing
 * looked at the built HTML — the site worked perfectly in a browser while
 * serving an empty shell to every crawler. This script reads what is actually
 * in dist/ and fails loudly when a guarantee breaks.
 *
 * Run after a build:  npm run audit:seo
 */

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const distDir = path.join(root, 'dist');

if (!existsSync(distDir)) {
  console.error('\n  audit: dist/ not found — run `npm run build` first.\n');
  process.exit(1);
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const TITLE_MAX = 65;
const DESC_MIN = 70;
const DESC_MAX = 165;

const problems = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

/* Titles are measured after decoding entities: "&amp;" is four characters in
   the file and one on the results page, and it is the results page that
   decides whether the title is truncated. */
const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" };
const decode = (s) => s.replace(/&(amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m]);

function note(list, url, message) {
  list.push(`${url.replace('https://brollyjuniors.com', '') || '/'} — ${message}`);
}

for (const url of urls) {
  const route = url.replace('https://brollyjuniors.com', '');
  const file = path.join(distDir, route === '' || route === '/' ? '' : route, 'index.html');

  if (!existsSync(file)) {
    note(problems, url, 'in sitemap but no HTML file was generated');
    continue;
  }

  const html = await readFile(file, 'utf8');

  /* Blocker 1: is there real content in the raw HTML, or just the shell? */
  const body = html.match(/<div id="root">([\s\S]*?)<\/body>/);
  const text = body
    ? body[1]
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    : '';
  if (text.length < 500) {
    note(problems, url, `only ${text.length} characters of rendered text — page did not prerender`);
  }

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').trim()
  );
  if (h1s.length === 0) note(problems, url, 'no H1');
  if (h1s.length > 1) note(warnings, url, `${h1s.length} H1 elements — there should be one`);

  /* Blocker 2: a title and description of its own. */
  const rawTitle = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const title = rawTitle ? decode(rawTitle) : rawTitle;
  if (!title) {
    note(problems, url, 'no <title>');
  } else {
    if (titles.has(title)) note(problems, url, `duplicate title, shared with ${titles.get(title)}`);
    else titles.set(title, route || '/');
    if (title.length > TITLE_MAX) note(warnings, url, `title is ${title.length} chars, will truncate`);
  }

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) {
    note(problems, url, 'no meta description');
  } else {
    if (descriptions.has(desc)) {
      note(problems, url, `duplicate description, shared with ${descriptions.get(desc)}`);
    } else descriptions.set(desc, route || '/');
    if (desc.length < DESC_MIN) note(warnings, url, `description is only ${desc.length} chars`);
    if (desc.length > DESC_MAX) note(warnings, url, `description is ${desc.length} chars, will truncate`);
  }

  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canonical) note(problems, url, 'no canonical link');
  else if (canonical !== url) note(problems, url, `canonical points elsewhere: ${canonical}`);

  if (/<meta name="robots" content="noindex/.test(html)) {
    note(problems, url, 'is noindex but appears in the sitemap');
  }

  if (!/application\/ld\+json/.test(html)) note(problems, url, 'no structured data');

  /* Images without alt text are both an accessibility failure and a lost
     ranking signal on a site whose illustrations carry real meaning. */
  const imgsWithoutAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  if (imgsWithoutAlt) note(warnings, url, `${imgsWithoutAlt} image(s) with no alt attribute`);
}

/* The 404 must never be indexable — the Apache fallback serves it for every
   unknown URL, so a missing noindex would expose unlimited duplicate pages. */
const notFound = await readFile(path.join(distDir, '404.html'), 'utf8');
if (!/<meta name="robots" content="noindex/.test(notFound)) {
  problems.push('404.html — is not marked noindex');
}

if (!existsSync(path.join(distDir, 'robots.txt'))) problems.push('robots.txt is missing from dist/');
if (!existsSync(path.join(distDir, '.htaccess'))) {
  warnings.push('.htaccess is missing from dist/ — routing and redirects will not work when deployed');
}

console.log(`\n  audit: ${urls.length} indexable pages checked`);
console.log(`  unique titles: ${titles.size}   unique descriptions: ${descriptions.size}`);

if (warnings.length) {
  console.log(`\n  ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 40)) console.log(`    · ${w}`);
  if (warnings.length > 40) console.log(`    … and ${warnings.length - 40} more`);
}

if (problems.length) {
  console.error(`\n  ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 40)) console.error(`    ✗ ${p}`);
  if (problems.length > 40) console.error(`    … and ${problems.length - 40} more`);
  console.error('');
  process.exit(1);
}

console.log('\n  No problems found.\n');
