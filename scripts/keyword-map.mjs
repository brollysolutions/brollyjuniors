import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/* Generates docs/KEYWORD_MAP.md from the built site.
 *
 * A keyword map written by hand goes stale the first time someone edits a
 * heading. This one reads the actual HTML in dist/ and reports, per page,
 * whether the target keyword really does appear in the title, the H1 and the
 * opening copy — which is the specific claim SEO_STRATEGY.md §6 item 9 makes.
 *
 * Run:  node scripts/keyword-map.mjs   (needs a build, and dist-ssr present)
 *
 * The build deletes dist-ssr when it finishes, so this reads dist/ HTML only
 * and pulls the keyword list from src/lib/seo.js via the SSR bundle if it is
 * there, falling back to parsing the source.
 */

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const docsDir = path.join(root, 'docs');

if (!existsSync(distDir)) {
  console.error('\n  keyword-map: dist/ not found — run `npm run build` first.\n');
  process.exit(1);
}

/* seo.js is plain JavaScript with no JSX, so Node can import it directly. */
const { getSeo } = await import(pathToFileURL(path.join(root, 'src/lib/seo.js')).href);
const { routes } = await import(pathToFileURL(path.join(root, 'src/lib/routes.js')).href);

/* Turning tags into text, the way a browser would.
 *
 * Replacing every tag with a space is wrong for inline elements: a heading
 * built from per-letter <span>s — the jumbled H1 on the home page — came back
 * as "K i d s   a c t i v i t i e s" and failed a keyword check that the
 * rendered page passes. Chrome reports the H1's textContent as the plain
 * sentence, because inline elements introduce no whitespace of their own.
 *
 * So: inline tags close up, everything else becomes a space, which is what
 * separates two block elements whose text would otherwise run together. */
const INLINE = /^<\/?(?:span|a|b|strong|i|em|small|sup|sub|mark|abbr|code|u|s|q|cite|time|bdi|bdo|wbr)\b/i;

const strip = (html) =>
  html
    .replace(/<[^>]+>/g, (tag) => (INLINE.test(tag) ? '' : ' '))
    .replace(/\s+/g, ' ')
    .trim();
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

/* The title is held to the exact phrase — it is the one place where matching
   the search wording precisely is worth the slight awkwardness, because it is
   what the parent scans in the results list. */
function containsPhrase(haystack, needle) {
  return norm(haystack).includes(norm(needle));
}

/* Headings and body copy are held to word coverage instead. Forcing an exact
   phrase into an H1 produces the stilted "Abacus Classes In Hyderabad For Kids
   In Hyderabad" writing that reads as spam to a person and, these days, to
   Google. Eighty per cent of the meaningful words is the real requirement:
   the page is unambiguously about that thing. */
const STOPWORDS = new Set(['a', 'an', 'the', 'in', 'for', 'of', 'to', 'and', 'my', 'is', 'at', 'on', 'or', 'should', 'what', 'how']);

function coverage(haystack, needle) {
  const words = norm(needle).split(' ').filter((w) => w && !STOPWORDS.has(w));
  if (!words.length) return 1;
  const hay = norm(haystack);
  const hits = words.filter((w) => hay.includes(w)).length;
  return hits / words.length;
}

const COVERAGE_THRESHOLD = 0.8;

const rows = [];

for (const route of routes) {
  const seo = getSeo(route);
  if (!seo.keyword || seo.noindex) continue;

  /* Navigational pages — /about, /contact, /faqs — are found by people who
     already know the name. Holding them to a keyword contract would mean
     writing worse headings for no gain. */
  const navigational = seo.intent === 'navigational';

  const file = path.join(distDir, route === '/' ? '' : route, 'index.html');
  if (!existsSync(file)) continue;

  const html = await readFile(file, 'utf8');
  const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
  /* Measured from the H1 onward. Counting from the top of <body> would spend
     the whole budget on the navigation menu, which is identical on every page
     and tells you nothing about this one. */
  const body = (html.match(/<div id="root">([\s\S]*?)<\/body>/) || [])[1] || '';
  const fromH1 = body.slice(Math.max(0, body.indexOf('<h1')));
  const opening = strip(fromH1.replace(/<script[\s\S]*?<\/script>/g, ' '))
    .split(' ')
    .slice(0, 120)
    .join(' ');

  rows.push({
    route,
    keyword: seo.keyword,
    navigational,
    title: (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '',
    h1,
    inTitle: navigational || containsPhrase(seo.title, seo.keyword),
    inH1: coverage(h1, seo.keyword) >= COVERAGE_THRESHOLD,
    inOpening: coverage(opening, seo.keyword) >= COVERAGE_THRESHOLD,
  });
}

const tick = (b, skip) => (skip ? '–' : b ? '✅' : '⚠️');

/* Module pages get their keyword from the module title and there are ninety of
   them, so they are summarised rather than listed line by line. */
const primary = rows.filter((r) => !/^\/(ai|python)-for-kids\/class-\d+\//.test(r.route));
const modules = rows.filter((r) => /^\/(ai|python)-for-kids\/class-\d+\//.test(r.route));

const lines = [
  '# Keyword map',
  '',
  '**Generated by `node scripts/keyword-map.mjs` — do not edit by hand.**',
  'It reads the built HTML in `dist/`, so it reflects what is actually deployed.',
  '',
  'Each page targets one search. For that page to be able to win it, the keyword',
  'has to appear in the title, in the H1 and in the opening copy. This table',
  'checks all three. A ⚠️ is not automatically wrong — sometimes the natural',
  'phrasing differs from the search phrasing — but it is worth a look.',
  '',
  `Checked ${rows.length} indexable pages with a declared target keyword.`,
  '',
  '## Primary pages',
  '',
  '| Page | Target keyword | Title | H1 | Opening copy |',
  '|---|---|:-:|:-:|:-:|',
  ...primary.map(
    (r) =>
      `| \`${r.route}\` | ${r.keyword} | ${tick(r.inTitle, r.navigational)} | ${tick(r.inH1, r.navigational)} | ${tick(r.inOpening, r.navigational)} |`
  ),
  '',
  'A `–` marks a navigational page: people reach /about and /contact by name,',
  'so its heading is not held to the keyword.',
  '',
  '## Module pages',
  '',
  `${modules.length} curriculum module pages, each targeting its own module topic.`,
  `Keyword present in H1: ${modules.filter((m) => m.inH1).length}/${modules.length}.`,
  'These are long-tail by nature — they exist to carry unique curriculum depth',
  'and to be cited by AI search, not to win a commercial search on their own.',
  '',
  '## Titles as they will appear in results',
  '',
  ...primary.map((r) => `- \`${r.route}\` → ${r.title}`),
  '',
];

await mkdir(docsDir, { recursive: true });
await writeFile(path.join(docsDir, 'KEYWORD_MAP.md'), lines.join('\n'), 'utf8');

const gaps = primary.filter((r) => !r.inTitle || (!r.navigational && !r.inH1));
console.log(`  keyword-map: ${rows.length} pages -> docs/KEYWORD_MAP.md`);
if (gaps.length) {
  console.log(`  ${gaps.length} primary page(s) missing the keyword in title or H1:`);
  for (const g of gaps) console.log(`    · ${g.route} — "${g.keyword}"`);
}
