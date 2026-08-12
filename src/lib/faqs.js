import { familyFaqs, phonicsFaqs, aiFaqs, pythonFaqs } from '../data/site.js';
import { infoPages } from '../data/infoPages.js';
import { getArticle } from '../data/articles.js';
import { getLocation } from '../data/locations.js';

/* Which questions and answers a given route shows.
 *
 * This used to live inside the page components, which meant the FAQ structured
 * data could not see it — the markup said one thing and the schema said
 * nothing. Resolving it by route instead means the visible FAQ and the
 * FAQPage JSON-LD are guaranteed to be the same content, which is the whole
 * requirement: Google discards FAQ markup that is not visible on the page.
 */

export const homeFaqs = [
  {
    q: 'What ages and classes are Brolly Juniors programs for?',
    a: 'Programs serve children from age 5 through Class 10. Abacus begins from age 5, foundation skills focus mainly on Classes 1–5, and annual AI and Python pathways are designed separately for Classes 6–10.',
  },
  {
    q: 'Are AI and Python taught as one combined course?',
    a: 'No. AI and Python are separate annual pathways. Each includes 72 one-hour sessions across 36 instructional weeks, and each class has its own curriculum.',
  },
  {
    q: 'Do you partner with schools?',
    a: 'Yes. Schools can discuss annual curricula, AI and coding clubs, innovation labs, workshops and teacher training.',
  },
  {
    q: 'How large are centre batches?',
    a: 'Regular Brolly Juniors centre batches are capped at eight children so instructors can provide meaningful attention and feedback.',
  },
  {
    q: 'Can my child attend a free trial?',
    a: 'Yes. Every new family can book one free trial class before deciding whether to enrol.',
  },
];

export const allFaqs = [
  ...familyFaqs,
  ...phonicsFaqs.slice(0, 3), // start age, method, duration
  ...aiFaqs(6).slice(1), // tools, sessions, safety
  ...pythonFaqs(6).slice(1), // sessions, projects, laptop
];

const INFO_FAQS = Object.fromEntries(
  infoPages.map((p) => [p.path, p.faqs || familyFaqs])
);

export function getFaqs(pathname) {
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (path === '/') return homeFaqs;
  if (path === '/faqs') return allFaqs;
  if (INFO_FAQS[path]) return INFO_FAQS[path];

  const cls = path.match(/^\/(ai|python)-for-kids\/class-(\d+)$/);
  if (cls) return cls[1] === 'ai' ? aiFaqs(Number(cls[2])) : pythonFaqs(Number(cls[2]));

  if (path === '/ai-for-kids') return aiFaqs(6);
  if (path === '/python-for-kids') return pythonFaqs(6);

  const art = path.match(/^\/resources\/([a-z0-9-]+)$/);
  if (art) return getArticle(art[1])?.faqs || null;

  const loc = path.match(/^\/kids-classes-in-([a-z0-9-]+)$/);
  if (loc) {
    const location = getLocation(loc[1]);
    return location ? [...location.faqs, ...familyFaqs] : null;
  }

  if (['/contact', '/book-free-demo', '/programs', '/junior-skills', '/about'].includes(path)) {
    return familyFaqs;
  }

  return null;
}
