/* Checks the DEPLOYED site, not the build.
 *
 * Everything else in scripts/ reads dist/. That is why the most damaging SEO
 * fault this site has had went unnoticed for the whole of its time on nginx:
 * the build was perfect and the server threw the result away. public/.htaccess
 * carried the canonical host, the legacy 301s and the real 404s, and nginx
 * does not read .htaccess, so when the deployment moved into a container all
 * of it silently stopped applying. Measured on the live site:
 *
 *   /junior-skills/abacus              301 -> /junior-skills/abacus/   (every
 *                                      canonical URL in the sitemap redirected)
 *   /abacus-classes-in-hyderabad.html  200, serving the home page
 *   /any-mistyped-url                  200, serving the home page, indexable
 *   www.brollyjuniors.com              200, a duplicate of all 204 pages
 *
 * No amount of care in the repository detects that. This does.
 *
 * Usage:
 *   node scripts/verify-deployment.mjs                     # the live site
 *   node scripts/verify-deployment.mjs http://localhost:8080
 *
 * Exits non-zero if any check fails, so it can gate a deploy.
 */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const base = (process.argv[2] || 'https://brollyjuniors.com').replace(/\/$/, '');

const failures = [];
const warnings = [];
const passes = [];

function record(ok, label, detail) {
  if (ok === 'warn') warnings.push(`${label} — ${detail}`);
  else if (ok) passes.push(label);
  else failures.push(`${label} — ${detail}`);
}

/** Fetch without following redirects, so the redirect itself can be asserted. */
async function head(url) {
  try {
    const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'brolly-deploy-check' } });
    return { status: res.status, location: res.headers.get('location'), headers: res.headers, res };
  } catch (error) {
    return { status: 0, error: error.message, headers: new Headers() };
  }
}

console.log(`\n  Verifying ${base}\n`);

/* ---------------------------------------------------------------------------
 * 1. Canonical URLs must answer 200, not a redirect.
 *
 * The sitemap and every canonical tag name the slashless form. If the server
 * adds a trailing slash, then the URL Google is told is canonical is a URL
 * that never returns the page — the single most expensive of these faults.
 * ------------------------------------------------------------------------- */
const sitemapPath = path.join(root, 'dist', 'sitemap.xml');
let allRoutes = [];
if (existsSync(sitemapPath)) {
  const xml = await readFile(sitemapPath, 'utf8');
  allRoutes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''))
    .filter((r) => r && r !== '/');
}
if (!allRoutes.length) allRoutes = ['/programs', '/junior-skills/abacus', '/ai-for-kids', '/contact'];

/* Every sitemap URL, not a spread across route types.
 *
 * This used to sample four, on the reasoning that 204 requests to prove one
 * server rule is rude. It is not rude — they are HEADs against a static nginx —
 * and the sample is how 24 broken pages sat in production unnoticed. A legacy
 * redirect written when nothing lived under /programs/ began shadowing the
 * whole programme catalogue the moment it was added: /programs/coding and 23
 * siblings answered 301 while all four sampled URLs answered 200.
 *
 * A rule that applies per-URL-pattern has to be checked per URL.
 * Pass --sample for the old four-URL spot check. */
const sampleMode = process.argv.includes('--sample');
const canonicalRoutes = sampleMode
  ? [allRoutes[0], allRoutes[Math.floor(allRoutes.length / 3)],
     allRoutes[Math.floor((allRoutes.length * 2) / 3)], allRoutes.at(-1)].filter(Boolean)
  : allRoutes;

/** Runs `fn` over `items` with a bounded number of requests in flight. */
async function pool(items, limit, fn) {
  const queue = [...items];
  await Promise.all(Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) await fn(queue.shift());
  }));
}

{
  const broken = [];
  await pool(canonicalRoutes, 8, async (route) => {
    const { status, location } = await head(`${base}${route}`);
    if (status !== 200) broken.push({ route, status, location });
  });
  broken.sort((a, b) => a.route.localeCompare(b.route));

  const label = `all ${canonicalRoutes.length} sitemap URLs return 200`;
  if (!broken.length) {
    record(true, label);
  } else {
    /* Listed in full rather than summarised: the pattern in which URLs broke is
       what identifies the rule at fault. */
    const shown = broken.slice(0, 12)
      .map((b) => `${b.route} -> ${b.status}${b.location ? ` ${b.location}` : ''}`)
      .join('; ');
    record(
      false,
      label,
      `${broken.length} do not: ${shown}${broken.length > 12 ? `; and ${broken.length - 12} more` : ''}` +
        ' — a sitemap URL that redirects is a URL Google is told is canonical but never serves the page'
    );
  }
}

/* ---------------------------------------------------------------------------
 * 1b. One URL per page: the trailing-slash form must redirect, not answer 200.
 *
 * Serving both /programs and /programs/ gives every page two working URLs.
 * The canonical tag names the slashless one, but a canonical is a hint —
 * Google had indexed the slashed variant of the CBSE article in preference.
 * ------------------------------------------------------------------------- */
{
  const probes = sampleMode ? canonicalRoutes.slice(0, 4) : canonicalRoutes.slice(0, 25);
  const dupes = [];
  await pool(probes, 8, async (route) => {
    const { status } = await head(`${base}${route}/`);
    if (status === 200) dupes.push(route);
  });
  record(
    dupes.length === 0,
    `trailing-slash URLs redirect (${probes.length} sampled)`,
    `${dupes.length} answer 200 at both /path and /path/, e.g. ${dupes.slice(0, 3).join(', ')} — every page is reachable at two URLs`
  );
}

/* ---------------------------------------------------------------------------
 * 1c. The same, for the /<path>/index.html twin.
 *
 * Rule 5 resolves a clean URL by appending /index.html, so the file also
 * answered 200 under its own name — a third URL for every page, on top of the
 * slashed form. Search Console filed 34 of them as "Alternate page with proper
 * canonical tag": the canonical was obeyed, the duplicate still cost crawl
 * budget.
 *
 * Worth a live check rather than trusting the config, because the rule that
 * fixes it cannot be written against $uri. nginx re-runs the server rewrite
 * phase after an internal redirect, so a $uri-based rule also matches the SPA
 * fallback's own try_files target and 301s unknown module URLs to the home
 * page. Only $request_uri distinguishes the two, and only a request proves it.
 * ------------------------------------------------------------------------- */
{
  const probes = sampleMode ? canonicalRoutes.slice(0, 4) : canonicalRoutes.slice(0, 25);
  const dupes = [];
  await pool(probes, 8, async (route) => {
    const { status } = await head(`${base}${route === '/' ? '' : route}/index.html`);
    if (status === 200) dupes.push(route);
  });
  record(
    dupes.length === 0,
    `/index.html twins redirect (${probes.length} sampled)`,
    `${dupes.length} answer 200 at both /path and /path/index.html, e.g. ${dupes.slice(0, 3).join(', ')} — a duplicate of every page`
  );
}

/* ---------------------------------------------------------------------------
 * 1d. The SPA fallback must still reach the app, not redirect.
 *
 * The guard for the rule above: an unknown module URL has no prerendered file
 * and is resolved client-side by React Router, so it must answer 200 with the
 * app shell. A 301 to / here means an index.html rule was written against $uri
 * and is firing on the internal redirect.
 * ------------------------------------------------------------------------- */
{
  const probe = '/ai-for-kids/class-6/module-3-old-slug-that-does-not-exist';
  const { status, location } = await head(`${base}${probe}`);
  record(
    status === 200,
    'unknown module URL reaches the app shell',
    `${probe} answered ${status}${location ? ` -> ${location}` : ''} — the client-side fallback is being redirected away`
  );
}

/* ---------------------------------------------------------------------------
 * 2. An unknown URL must be a real 404.
 *
 * Answering 200 with the home page is a soft 404. Google names it explicitly
 * as a quality problem, and a catch-all fallback creates unlimited ones.
 * ------------------------------------------------------------------------- */
{
  const url = `${base}/this-url-does-not-exist-${Date.now()}`;
  const { status, res } = await head(url);
  record(status === 404, 'unknown URL returns 404', `returned ${status} (a soft 404)`);
  if (status === 200 && res) {
    const body = await res.text();
    if (!/name="robots" content="noindex/.test(body)) {
      record(false, 'unknown URL is not indexable', 'served an indexable page for a URL that does not exist');
    }
  }
}

/* ---------------------------------------------------------------------------
 * 3. Legacy URLs must still 301 to their successor.
 *
 * These are the URLs indexed under the previous site. A 200 here means the
 * accumulated authority is being thrown away and a duplicate is being served.
 * Read from the config so the list cannot drift from what is deployed.
 * ------------------------------------------------------------------------- */
const nginxPath = path.join(root, 'nginx.conf');
if (existsSync(nginxPath)) {
  const conf = await readFile(nginxPath, 'utf8');
  const rules = [...conf.matchAll(/^\s*rewrite\s+\^(\/[a-z0-9\\.-]+)\$\s+(\/\S*)\s+permanent;/gm)]
    .map((m) => ({ from: m[1].replace(/\\/g, ''), to: m[2] }))
    .filter((r) => !r.to.includes('$'))
    .slice(0, 5);

  for (const rule of rules) {
    const { status, location } = await head(`${base}${rule.from}`);
    const target = (location || '').replace(/^https?:\/\/[^/]+/, '');
    record(
      status === 301 && target === rule.to,
      `legacy ${rule.from} redirects to ${rule.to}`,
      status === 200
        ? 'returns 200 — the redirect is not deployed, so this URL is a duplicate'
        : `returned ${status}${location ? ` -> ${target}` : ''}`
    );
  }
}

/* ---------------------------------------------------------------------------
 * 4. One canonical host, one scheme.
 * ------------------------------------------------------------------------- */
{
  const host = new URL(base).host;
  if (!host.startsWith('www.') && !host.startsWith('localhost') && !/^\d/.test(host)) {
    const { status, location } = await head(`https://www.${host}/`);
    record(
      status === 301 || status === 308,
      'www redirects to the canonical host',
      status === 200
        ? 'www answers 200 — the site is duplicated on a second hostname'
        : `returned ${status}${location ? ` -> ${location}` : ''}`
    );

    const http = await head(`http://${host}/`);
    record(
      http.status === 301 || http.status === 308,
      'http redirects to https',
      `returned ${http.status}`
    );
  }
}

/* ---------------------------------------------------------------------------
 * 5. Crawler files, compression and caching.
 * ------------------------------------------------------------------------- */
for (const file of ['/robots.txt', '/sitemap.xml']) {
  const { status } = await head(`${base}${file}`);
  record(status === 200, `${file} is served`, `returned ${status}`);
}

{
  const res = await fetch(`${base}/`, { headers: { 'Accept-Encoding': 'gzip, br' } }).catch(() => null);
  if (res) {
    record(
      Boolean(res.headers.get('content-encoding')),
      'HTML is compressed',
      'no content-encoding header — pages are being sent uncompressed'
    );
    const cache = res.headers.get('cache-control') || '';
    record(
      /no-cache|no-store|must-revalidate|max-age=0/.test(cache) ? true : 'warn',
      'HTML is not cached long-term',
      `cache-control is "${cache || 'unset'}" — a stale page can outlive a deploy`
    );
  }
}

/* ---------------------------------------------------------------------------
 * 6. The served HTML is prerendered, not an empty shell.
 * ------------------------------------------------------------------------- */
{
  const route = canonicalRoutes[0] || '/';
  const res = await fetch(`${base}${route}`).catch(() => null);
  if (res && res.ok) {
    const body = await res.text();
    const rendered = body.match(/<div id="root">([\s\S]*?)<\/body>/)?.[1] || '';
    const text = rendered.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').trim();
    record(text.length > 500, `${route} is prerendered`, `only ${text.length} characters of text in the HTML`);
    record(/<h1/.test(body), `${route} has an H1 in the HTML`, 'no H1 in the served markup');
  }
}

/* ------------------------------------------------------------------------ */
console.log(`  ${passes.length} check(s) passed`);
for (const p of passes) console.log(`    ✓ ${p}`);

if (warnings.length) {
  console.log(`\n  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`    · ${w}`);
}

if (failures.length) {
  console.error(`\n  ${failures.length} failure(s):`);
  for (const f of failures) console.error(`    ✗ ${f}`);
  console.error('');
  process.exit(1);
}

console.log('\n  Deployment looks correct.\n');
