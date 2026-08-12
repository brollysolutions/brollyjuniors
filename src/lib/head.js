import { getSeo, SITE_URL, ogImageFor, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from './seo.js';
import { buildJsonLd } from './schema.js';
import { getFaqs } from './faqs.js';
import { articles } from '../data/articles.js';
import { site, address } from '../data/site.js';

/* One description of what belongs in <head> for a given route.
 *
 * Both consumers read from here: components/Seo.jsx applies it to the live DOM
 * on navigation, and the prerenderer serialises it into the static HTML file.
 * Keeping one source means the crawler and the browser can never disagree,
 * which is the failure mode that makes head management quietly rot.
 */

export function buildHead(pathname) {
  const seo = getSeo(pathname);
  const image = seo.ogImage || ogImageFor(seo.path);
  const isArticle = Boolean(seo.article);

  const meta = [
    ['name', 'description', seo.description],
    ['name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow'],
    ['name', 'googlebot', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'],

    ['property', 'og:title', seo.title],
    ['property', 'og:description', seo.description],
    ['property', 'og:url', seo.canonical],
    ['property', 'og:type', isArticle ? 'article' : 'website'],
    ['property', 'og:site_name', site.name],
    ['property', 'og:locale', 'en_IN'],
    ['property', 'og:image', image],
    /* Without explicit dimensions the first scrape has to fetch the image
       before it can decide on a layout, and WhatsApp in particular falls back
       to a small thumbnail rather than the large card. */
    ['property', 'og:image:width', String(OG_IMAGE_WIDTH)],
    ['property', 'og:image:height', String(OG_IMAGE_HEIGHT)],
    ['property', 'og:image:type', 'image/png'],
    /* Titles already end in "| Brolly Juniors", so appending the site name
       again just reads as a stutter to a screen reader. */
    ['property', 'og:image:alt', seo.title],

    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', seo.title],
    ['name', 'twitter:description', seo.description],
    ['name', 'twitter:image', image],

    /* Geo meta is not a ranking factor on its own, but it is one more
       consistent signal that this business is in Hyderabad. */
    ['name', 'geo.region', address.regionCode],
    ['name', 'geo.placename', seo.location ? `${seo.location.name}, ${address.locality}` : address.locality],
  ];

  if (address.latitude != null && address.longitude != null) {
    meta.push(['name', 'geo.position', `${address.latitude};${address.longitude}`]);
    meta.push(['name', 'ICBM', `${address.latitude}, ${address.longitude}`]);
  }

  if (isArticle) {
    meta.push(['property', 'article:published_time', seo.article.published]);
    meta.push(['property', 'article:modified_time', seo.article.updated || seo.article.published]);
    meta.push(['property', 'article:section', seo.article.category]);
  }

  const jsonLd = buildJsonLd(seo, {
    faqs: getFaqs(pathname),
    articles,
  });

  return {
    title: seo.title,
    canonical: seo.canonical,
    meta: meta.filter(([, , content]) => Boolean(content)),
    jsonLd,
    seo,
  };
}

export { SITE_URL };
