/* The shape every catalogue topic shares.
 *
 * A "topic" is one leaf in the mega menu — Chess, Physics tuition, a creative
 * workshop, an age band. Two kinds exist:
 *
 *   linked  — { href } points at a page that already existed before the
 *             catalogue did (/ai-for-kids, /junior-skills/abacus, /schools/*).
 *             The menu links to it; nothing new is generated.
 *
 *   owned   — { slug, page } means this file is the page. `page` is shaped
 *             exactly like an entry in data/infoPages.js so pages/InfoPage.jsx
 *             renders it with no new component, and lib/seo.js reads `seo` for
 *             the title, description and keyword.
 *
 * Keeping both kinds in one list is the point: the navbar, the section hubs,
 * the route manifest and the sitemap all read this one structure, so a topic
 * can never appear in the menu without also existing as a URL.
 */

/** Full path for an owned topic. */
export function topicPath(section, slug) {
  return `${section.base}/${slug}`;
}

/** Where a menu entry should link, whichever kind it is. */
export function topicHref(section, topic) {
  return topic.href || topicPath(section, topic.slug);
}

/** Every owned topic in a section, flattened out of its groups. */
export function ownedTopics(section) {
  return section.groups.flatMap((g) => g.items.filter((t) => !t.href));
}

/** Turn an owned topic into the object pages/InfoPage.jsx expects. */
export function topicAsPage(section, topic) {
  return { path: topicPath(section, topic.slug), ...topic.page };
}
