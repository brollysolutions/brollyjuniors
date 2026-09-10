import { subjects, moduleHref } from '../data/moduleDetail.js';
import { infoPages } from '../data/infoPages.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { articles, articlePath } from '../data/articles.js';
import { apps, appPath } from '../data/apps.js';
import { catalogRoutes } from '../data/catalog/index.js';
import { legalPagePaths } from '../data/legalPages.js';

/* Every URL the site can serve, in one list.
 *
 * The prerenderer walks this to decide which HTML files to write, and the
 * sitemap is generated from it. Both used to be maintained by hand, which is
 * how a site ends up with pages Google never hears about and sitemap entries
 * that 404. Adding a route now means adding it here, once.
 */

export const CLASSES = [6, 7, 8, 9, 10];

const CORE = [
  '/',
  '/programs',
  '/book-free-demo',
  '/ai-for-kids',
  '/python-for-kids',
  '/junior-skills',
  '/schools',
  '/contact',
  '/faqs',
  '/resources',
  '/abacus-worksheet-generator',
  '/my-progress',
  '/apps',
];

/* /junior-skills/*, /schools/*, /resources, /student-projects,
   /teaching-methodology — all rendered by pages/InfoPage.jsx. */
const INFO = infoPages.map((p) => p.path);

const CLASS_ROUTES = Object.values(subjects).flatMap((s) =>
  CLASSES.map((n) => `${s.base}/class-${n}`)
);

/* One page per module: 2 subjects × 5 classes × 9 modules. This is the 70KB+ of
   curriculum detail that no local competitor has, and it is the largest source
   of genuinely unique content on the site. */
const MODULE_ROUTES = Object.values(subjects).flatMap((s) =>
  CLASSES.flatMap((n) => {
    const data = s.curriculum[n];
    if (!data) return [];
    return data.modules.map((m, i) => moduleHref(s.key, n, i, m));
  })
);

const LOCATION_ROUTES = publishedLocations.map((l) => locationPath(l.slug));

const ARTICLE_ROUTES = articles.map((a) => articlePath(a.slug));

/* One page per app. These are the only pages on the site that answer a national
   query rather than a Hyderabad one — see the note in src/data/apps.js. */
const APP_ROUTES = apps.map((a) => appPath(a.slug));

/* Tuitions, workshops, age groups and the wider programme catalogue — the
   hubs plus one page per topic. These come straight from data/catalog/, which
   is the same structure the mega menu is built from, so a link in the navbar
   and a URL in the sitemap cannot drift apart. */
const CATALOG_ROUTES = catalogRoutes;

/* Privacy policy and terms. Indexable on purpose: they were 404ing, and a
   business taking bookings is expected to have both — their absence is
   something a cautious parent notices. */
const LEGAL_ROUTES = legalPagePaths;

export const routes = [
  ...CORE,
  ...INFO,
  ...LEGAL_ROUTES,
  ...CLASS_ROUTES,
  ...MODULE_ROUTES,
  ...LOCATION_ROUTES,
  ...ARTICLE_ROUTES,
  ...APP_ROUTES,
  ...CATALOG_ROUTES,
];

/* Sanity check: a duplicate route would silently overwrite a prerendered file
   and put a duplicate <loc> in the sitemap. Cheap to catch here. */
const seen = new Set();
for (const r of routes) {
  if (seen.has(r)) throw new Error(`Duplicate route in manifest: ${r}`);
  seen.add(r);
}
