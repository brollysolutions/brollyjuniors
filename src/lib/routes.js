import { subjects, moduleHref } from '../data/moduleDetail.js';
import { infoPages } from '../data/infoPages.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { articles, articlePath } from '../data/articles.js';

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
  '/about',
  '/contact',
  '/faqs',
  '/resources',
  '/abacus-worksheet-generator',
  '/my-progress',
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

export const routes = [
  ...CORE,
  ...INFO,
  ...CLASS_ROUTES,
  ...MODULE_ROUTES,
  ...LOCATION_ROUTES,
  ...ARTICLE_ROUTES,
];

/* Sanity check: a duplicate route would silently overwrite a prerendered file
   and put a duplicate <loc> in the sitemap. Cheap to catch here. */
const seen = new Set();
for (const r of routes) {
  if (seen.has(r)) throw new Error(`Duplicate route in manifest: ${r}`);
  seen.add(r);
}
