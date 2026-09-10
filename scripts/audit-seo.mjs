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

/* Link text Google's SEO starter guide names as unhelpful: it describes the act
   of clicking rather than the page being linked to, so neither a crawler nor
   somebody tabbing through links learns anything from it. */
const VAGUE_LINK_TEXT =
  /^(click here|here|read more|learn more|more|this|link|read|see more|find out more|continue|details|view|go|start)$/i;

const problems = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();
/* Every internal path any page links to, accumulated across the whole crawl so
   orphan pages can be found once the loop finishes. */
const linkedPaths = new Set();

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
  /* Scripts are dropped up front: everything below reads the rendered markup,
     and a string inside the bundle that happens to look like a tag would
     otherwise be audited as if it were one. */
  const markup = body ? body[1].replace(/<script[\s\S]*?<\/script>/g, ' ') : '';
  const text = markup
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length < 500) {
    note(problems, url, `only ${text.length} characters of rendered text — page did not prerender`);
  }

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').trim()
  );
  if (h1s.length === 0) note(problems, url, 'no H1');
  if (h1s.length > 1) note(warnings, url, `${h1s.length} H1 elements — there should be one`);

  /* Heading levels must not skip. Google is explicit that out-of-order headings
     do not affect Search — this check exists for the screen reader, which
     announces the outline and gives no way to tell a skipped level from a
     missing section. Reported once per page; the first jump is always the one
     worth fixing, and a shared component tends to produce the rest. */
  const levels = [...markup.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] > levels[i - 1] + 1) {
      note(warnings, url, `heading level jumps h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

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

  /* Structured data: parsed, not just present.
     A JSON-LD block with a syntax error is worse than none at all — Google
     discards the whole block silently, so the page looks fine in the HTML and
     wins nothing. Checking only that the string "ld+json" appears (which is
     what this did before) would not have caught that. */
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!ldBlocks.length) {
    note(problems, url, 'no structured data');
  } else {
    for (const block of ldBlocks) {
      let parsed;
      try {
        parsed = JSON.parse(block[1]);
      } catch (e) {
        note(problems, url, `structured data is not valid JSON: ${e.message}`);
        continue;
      }
      const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
      for (const node of nodes) {
        const types = [].concat(node['@type'] || []);
        /* Only the properties Google documents as required for the rich
           result. Anything beyond that is a matter of taste, and a warning
           nobody can action is a warning everybody learns to ignore. */
        const required = {
          Article: ['headline', 'author', 'datePublished', 'image'],
          Course: ['name', 'description', 'provider'],
          VideoObject: ['name', 'description', 'thumbnailUrl', 'uploadDate'],
          FAQPage: ['mainEntity'],
          BreadcrumbList: ['itemListElement'],
        };
        for (const type of types) {
          for (const prop of required[type] || []) {
            if (!node[prop] || (Array.isArray(node[prop]) && !node[prop].length)) {
              note(problems, url, `${type} structured data is missing ${prop}`);
            }
          }
        }
        /* A Course with no instance and no offer is ineligible for the course
           rich result, which is the only reason to emit Course at all. */
        if (types.includes('Course') && !node.hasCourseInstance && !node.offers) {
          note(warnings, url, 'Course has neither hasCourseInstance nor offers');
        }
      }
    }
  }

  /* Share cards. Enquiries for this business arrive over WhatsApp, so a link
     that previews as a blank rectangle is a real lost enquiry, not a cosmetic
     problem. */
  if (!/property="og:title"/.test(html)) note(problems, url, 'no og:title');
  if (!/property="og:image"/.test(html)) note(problems, url, 'no og:image');
  if (!/name="twitter:card"/.test(html)) note(warnings, url, 'no twitter:card');

  /* Images without alt text are both an accessibility failure and a lost
     ranking signal on a site whose illustrations carry real meaning. An empty
     alt="" is counted separately: it is the correct markup for a purely
     decorative image, but every illustration on this site is doing explanatory
     work, so an empty one here means the text was forgotten rather than
     deliberately omitted. */
  const imgsWithoutAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  if (imgsWithoutAlt) note(warnings, url, `${imgsWithoutAlt} image(s) with no alt attribute`);

  /* An empty alt paired with aria-hidden="true" is the standard, deliberate way
     to mark an image as decorative, and it is not the same mistake. The app
     launcher icon is the case that forced the distinction: it sits immediately
     beside the app's name, so giving it alt text makes a screen reader announce
     the name twice. A bare alt="" with no aria-hidden is still flagged, because
     that is what a forgotten alt looks like. */
  const imgsEmptyAlt = [...markup.matchAll(/<img[^>]*\balt=""[^>]*>/g)].filter(
    (m) => !/aria-hidden="true"/.test(m[0]),
  ).length;
  if (imgsEmptyAlt) note(warnings, url, `${imgsEmptyAlt} image(s) with an empty alt=""`);

  /* Link text, and the internal link graph.
     Anchor text is the description Google is given of the destination page, and
     the only description a screen reader user gets when listing links. */
  for (const m of markup.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attrs = m[1];
    const href = (attrs.match(/href="([^"]*)"/) || [])[1] || '';
    /* An aria-label replaces the visible text for assistive tech, so an icon-only
       link that carries one is described perfectly well. */
    const label = (
      (attrs.match(/aria-label="([^"]*)"/) || [])[1] ||
      m[2].replace(/<[^>]+>/g, ' ')
    )
      .replace(/\s+/g, ' ')
      .trim();

    if (!label) note(warnings, url, `link to ${href || '(no href)'} has no text or aria-label`);
    else if (VAGUE_LINK_TEXT.test(label)) note(warnings, url, `link text "${label}" describes nothing (-> ${href})`);

    if (href.startsWith('/')) linkedPaths.add(href.split(/[?#]/)[0].replace(/\/$/, '') || '/');
  }
}

/* ---------------------------------------------------------------------------
 * Does every internal link actually go somewhere?
 *
 * The crawl above collected every internal href but never checked that any of
 * them resolve. A link to a route that was renamed costs a real visitor a 404
 * and hands the crawler a dead end, and nothing in the build fails when it
 * happens — the page still renders, the link is still blue.
 *
 * "Resolves" means one of: a prerendered page, a real file in dist/, or one of
 * the deliberate non-indexable pages below.
 * ------------------------------------------------------------------------- */

/* Reachable but intentionally kept out of the sitemap. /my-progress is
   personalised and Disallow'd in robots.txt; it is linked on purpose. */
const INTENTIONALLY_UNLISTED = new Set(['/my-progress']);

const sitemapRoutes = new Set(
  urls.map((u) => u.replace('https://brollyjuniors.com', '').replace(/\/$/, '') || '/')
);

/** A path resolves if it is a known route or a real file shipped in dist/. */
function resolves(p) {
  if (sitemapRoutes.has(p) || INTENTIONALLY_UNLISTED.has(p)) return true;
  if (existsSync(path.join(distDir, p, 'index.html'))) return true;
  if (p !== '/' && existsSync(path.join(distDir, p))) return true;
  return false;
}

for (const p of linkedPaths) {
  if (!resolves(p)) problems.push(`${p} — linked from the site but no such page or file exists`);
}

/* ---------------------------------------------------------------------------
 * Server routing config.
 *
 * This site is served by nginx (see nginx.conf); public/.htaccess is kept for
 * an Apache host. Both files carry the legacy 301s that preserve the authority
 * of URLs indexed under the old site, and both are invisible to every other
 * check here — a redirect pointing at a route that no longer exists produces a
 * 301 into a 404, which is worse than the 200 it replaced.
 *
 * Checked statically rather than by running a server, so it works in CI and on
 * a machine with no container runtime.
 * ------------------------------------------------------------------------- */
async function auditRedirectTargets(file, label, extract) {
  const full = path.join(root, file);
  if (!existsSync(full)) {
    warnings.push(`${label} — ${file} is missing`);
    return;
  }
  const text = await readFile(full, 'utf8');
  for (const target of extract(text)) {
    /* Targets with a capture group ($1) depend on the matched URL, so the
       literal string is not a path that can be checked. */
    if (target.includes('$')) continue;
    const clean = target.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (!resolves(clean)) {
      problems.push(`${label} — redirects to ${target}, which is not a page on this site`);
    }
  }
}

await auditRedirectTargets('nginx.conf', 'nginx.conf', (text) =>
  [...text.matchAll(/^\s*rewrite\s+\S+\s+(\/\S*)\s+permanent;/gm)].map((m) => m[1])
);
/* Targets built from a back-reference (/%1, /$1) are only known at request
   time, so there is no literal path to look up in the sitemap. */
await auditRedirectTargets('public/.htaccess', '.htaccess', (text) =>
  [...text.matchAll(/^\s*RewriteRule\s+\S+\s+(\/\S*)\s+\[[^\]]*R=301[^\]]*\]/gm)]
    .map((m) => m[1])
    .filter((t) => !/[%$]\d/.test(t))
);

/* ---------------------------------------------------------------------------
 * The reverse check: no redirect may shadow a page that exists.
 *
 * `auditRedirectTargets` above asks whether each redirect points somewhere
 * real. It cannot see the more expensive failure, which is a redirect whose
 * *source pattern* matches a live URL. The legacy rules match on a keyword
 * prefix (`^/programs/ai[^/]*$`) because the retired slugs were inconsistent,
 * and a prefix broad enough to catch every old slug is broad enough to catch a
 * new page. When the programme catalogue was added, all 24 of its pages —
 * prerendered, in the sitemap, in the mega menu — answered 301 in production,
 * and every check in this repository still passed, because none of them
 * compared the route manifest against the redirect rules.
 *
 * nginx applies a server-level `rewrite` before try_files, so those shadow.
 * A rewrite inside a `location` reached only through a try_files fallback does
 * not, and neither does an Apache rule guarded by !-f/!-d — a real file wins
 * in both cases. So the parse has to track context, or it reports the very
 * arrangement that fixes the bug.
 * ------------------------------------------------------------------------- */

/* Translates the subset of regex the redirect rules use into a JS RegExp.
   Returns null for a pattern with anything this cannot faithfully model, so an
   unparsed rule is skipped rather than silently mis-reported. */
function toRegExp(pattern) {
  if (/[(?][?]|\\d|\{|\[\^\/\]\*\*/.test(pattern)) return null;
  try {
    return new RegExp(pattern);
  } catch {
    return null;
  }
}

/* nginx rewrites that run in the server block, i.e. before try_files. Tracks
   brace depth so a rewrite inside any `location` block is excluded. */
function serverLevelNginxRewrites(text) {
  const out = [];
  let inLocation = 0;
  let depth = 0;
  for (const raw of text.split('\n')) {
    const line = raw.replace(/#.*$/, '');
    const isLocation = /^\s*location\b/.test(line);
    if (isLocation) inLocation = depth + 1;

    const m = line.match(/^\s*rewrite\s+(\S+)\s+(\S+)\s+permanent;/);
    if (m && !inLocation) out.push({ pattern: m[1], target: m[2] });

    depth += (line.match(/\{/g) || []).length;
    depth -= (line.match(/\}/g) || []).length;
    if (inLocation && depth < inLocation) inLocation = 0;
  }
  return out;
}

/* Apache rules with no preceding !-f / !-d guard. RewriteCond lines apply to
   the next RewriteRule only, so the guard state resets after each rule.

   A RewriteCond on %{THE_REQUEST} counts as a guard too. Such a rule is not
   selected by the path at all — it matches the original request line, which is
   what makes it safe against the internal rewrite in rule 5 — so its
   RewriteRule pattern is usually the catch-all `^`. Shadow-checking that
   pattern against every route says only that `^` matches everything, which is
   true and meaningless. */
function unguardedHtaccessRules(text) {
  const out = [];
  let guarded = false;
  for (const raw of text.split('\n')) {
    const line = raw.replace(/#.*$/, '');
    if (/^\s*RewriteCond\s+%\{REQUEST_FILENAME\}\s+!-[fd]/.test(line)) {
      guarded = true;
      continue;
    }
    if (/^\s*RewriteCond\s+%\{THE_REQUEST\}/.test(line)) {
      guarded = true;
      continue;
    }
    const m = line.match(/^\s*RewriteRule\s+(\S+)\s+(\S+)\s+\[[^\]]*R=301[^\]]*\]/);
    if (m) {
      if (!guarded) out.push({ pattern: m[1], target: m[2] });
      guarded = false;
    }
  }
  return out;
}

/* Routes are compared in both the slash-free form the sitemap uses and the
   Apache form with no leading slash, since .htaccess patterns match the latter. */
const liveRoutes = urls.map((u) => u.replace('https://brollyjuniors.com', '') || '/');

async function auditRedirectShadowing(file, label, extract, strip) {
  const full = path.join(root, file);
  if (!existsSync(full)) return;
  const rules = extract(await readFile(full, 'utf8'));
  for (const { pattern, target } of rules) {
    const re = toRegExp(pattern);
    if (!re) {
      warnings.push(`${label} — could not parse redirect pattern ${pattern}; not checked for shadowing`);
      continue;
    }
    for (const route of liveRoutes) {
      const subject = strip ? route.replace(/^\//, '') : route;
      if (re.test(subject)) {
        problems.push(
          `${label} — redirect ${pattern} -> ${target} shadows ${route}, which is a real page in the sitemap`
        );
      }
    }
  }
}

await auditRedirectShadowing('nginx.conf', 'nginx.conf', serverLevelNginxRewrites, false);
await auditRedirectShadowing('public/.htaccess', '.htaccess', unguardedHtaccessRules, true);

/* The nginx config and the .htaccess must agree about the legacy URLs, or the
   site behaves differently depending on which host it is deployed to — which
   is precisely how the redirect layer came to be silently missing in
   production after the move from Apache to nginx. */
if (existsSync(path.join(root, 'nginx.conf')) && existsSync(path.join(root, 'public/.htaccess'))) {
  const nginxText = await readFile(path.join(root, 'nginx.conf'), 'utf8');
  const htaccessText = await readFile(path.join(root, 'public/.htaccess'), 'utf8');
  const legacyHtml = new Set(
    [...htaccessText.matchAll(/^\s*RewriteRule\s+\^([a-z0-9-]+\\?\.html)\$/gm)].map((m) =>
      m[1].replace('\\', '')
    )
  );
  for (const page of legacyHtml) {
    if (!nginxText.includes(page.replace('.', '\\.'))) {
      warnings.push(`nginx.conf — has no redirect for legacy URL /${page}, but .htaccess does`);
    }
  }
}

/* Orphan pages. Links are how Google finds most new pages, and a page reachable
   only from the sitemap is one the crawler has no reason to think matters. */
for (const url of urls) {
  const route = url.replace('https://brollyjuniors.com', '') || '/';
  if (route !== '/' && !linkedPaths.has(route.replace(/\/$/, ''))) {
    note(warnings, url, 'in the sitemap but no other page links to it');
  }
}

/* The 404 must never be indexable — the Apache fallback serves it for every
   unknown URL, so a missing noindex would expose unlimited duplicate pages. */
const notFound = await readFile(path.join(distDir, '404.html'), 'utf8');
if (!/<meta name="robots" content="noindex/.test(notFound)) {
  problems.push('404.html — is not marked noindex');
}

/* ---------------------------------------------------------------------------
 * JavaScript budget.
 *
 * Every page is prerendered and the bundle is `type="module"`, so this is not
 * blocking LCP — it is hydration cost and mobile data, which is why it is a
 * warning and not a failure.
 *
 * It is checked at all because it grew silently. The September audit measured
 * the content-data chunk at 915 KB and recorded route-level code splitting as
 * the fix; by the next audit it was 1,421 KB, because nothing looked. A budget
 * does not make the bundle smaller, but it means the next 500 KB arrives as a
 * line in this report rather than as a surprise.
 *
 * Raise these deliberately, with a note, or fix the cause. Do not nudge them.
 * ------------------------------------------------------------------------- */
const JS_BUDGET_KB = { total: 2600, largestChunk: 1500 };

{
  const assetsDir = path.join(distDir, 'assets');
  if (existsSync(assetsDir)) {
    const { readdir, stat } = await import('node:fs/promises');
    const files = (await readdir(assetsDir)).filter((f) => f.endsWith('.js'));
    const sizes = await Promise.all(
      files.map(async (f) => ({ f, kb: (await stat(path.join(assetsDir, f))).size / 1024 }))
    );
    const total = sizes.reduce((n, s) => n + s.kb, 0);
    const largest = sizes.sort((a, b) => b.kb - a.kb)[0];

    if (total > JS_BUDGET_KB.total) {
      warnings.push(
        `JavaScript budget — ${Math.round(total)} KB of JS across ${files.length} chunks, over the ${JS_BUDGET_KB.total} KB budget`
      );
    }
    if (largest && largest.kb > JS_BUDGET_KB.largestChunk) {
      warnings.push(
        `JavaScript budget — largest chunk ${largest.f} is ${Math.round(largest.kb)} KB, over the ${JS_BUDGET_KB.largestChunk} KB budget`
      );
    }
  }
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
