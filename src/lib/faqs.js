import { familyFaqs, phonicsFaqs, abacusFaqs, aiFaqs, pythonFaqs } from '../data/site.js';
import { infoPages } from '../data/infoPages.js';
import { catalogPages } from '../data/catalog/index.js';
import { getArticle } from '../data/articles.js';
import { getLocation } from '../data/locations.js';
import { getApp } from '../data/apps.js';

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
  {
    q: 'What are the best kids activities in Hyderabad?',
    a: 'It depends on the child. The most requested categories are coding, robotics and AI, abacus and Vedic Maths, chess and brain games, public speaking and communication, and creative activities such as drawing, dance and music. A free trial class in two different categories is the fastest way to find out which one your child actually enjoys.',
  },
  {
    q: 'Are Brolly Juniors classes suitable for beginners?',
    a: 'Yes. Every program starts from a beginner level and assumes no prior experience. Children are placed by age and current level rather than dropped into an ongoing batch, and the free trial class is used to judge the right starting point.',
  },
  {
    q: 'Do you offer online classes for kids?',
    a: 'Yes, several programs run as live online batches, which suits families with long travel times or tight weekday schedules. Hands-on programs such as robotics work best in the classroom, so not every program is available online — ask us about the specific class you want.',
  },
  {
    q: 'Are weekend classes available?',
    a: 'Yes. Weekend batches run alongside weekday after-school slots. Available days and timings vary by program and term, so contact us for the current weekend schedule.',
  },
  {
    q: 'What are the fees for kids classes at Brolly Juniors?',
    a: 'Fees depend on the program, level, duration and whether you choose classroom or online sessions. We share exact figures on enquiry, so you get the price for your child’s actual plan rather than an average. Call or message us for current fee details.',
  },
  {
    q: 'How do I book a trial class?',
    a: 'Use the Book a free trial page with your child’s age and the program you are interested in, or message us on WhatsApp or call. We will confirm a slot and let you know whether it will be a classroom or online session.',
  },
  {
    q: 'Where are Brolly Juniors classes available in Hyderabad?',
    a: 'Classroom sessions run from the centre at Nizampet X Roads, and online batches are open to families across the city — including Kukatpally, Miyapur, Kondapur, Madhapur, Gachibowli, Hitech City, Manikonda and Nallagandla. Contact us to confirm the nearest option for your area.',
  },
  {
    q: 'How can parents track their child’s progress?',
    a: 'Educators share what improved, attendance and activity completion, the areas to work on and the recommended next step. You can also ask for a review at any point to check whether the current program is still the right fit.',
  },
  {
    q: 'Can my child join more than one program?',
    a: 'Yes, and many children take one skill-focused program and one creative or physical activity. We usually suggest starting with one, settling into the routine, and adding a second only once the first is comfortable.',
  },
  {
    q: 'Do you run programs for apartments and residential societies?',
    a: 'Yes. When a group of children in one community wants the same class, we can run weekend batches or holiday camps inside the community’s own activity space. Get in touch with the group size and the age range.',
  },
];

export const allFaqs = [
  ...familyFaqs,
  ...phonicsFaqs.slice(0, 3), // start age, method, duration
  ...abacusFaqs.slice(1, 4), // start age, beginners, what they learn
  ...aiFaqs(6).slice(1), // tools, sessions, safety
  /* The first four only. The Python set now carries a further ten questions
     for the programme page itself, and repeating all of them here would push
     everything else off the /faqs page. */
  ...pythonFaqs(6).slice(1, 4), // sessions, projects, laptop
];

const INFO_FAQS = Object.fromEntries(
  infoPages.map((p) => [p.path, p.faqs || familyFaqs])
);

/* Catalogue topics that carry their own questions. Unlike infoPages these do
   not fall back to the family set: most catalogue pages have no FAQ block of
   their own, and emitting the generic questions as this page's FAQPage schema
   would be markup that is not on the page. */
const CATALOG_FAQS = Object.fromEntries(
  catalogPages.filter((p) => p.faqs).map((p) => [p.path, p.faqs])
);

/* ---------------------------------------------------------------------------
 * Quick answers that are not already an FAQ on the same page.
 *
 * Programme pages render a "Quick answers" band directly below the FAQ list.
 * Measured across the built site, 195 of 346 quick answers (56%, on 43 pages)
 * restated a question answered a few hundred pixels above — "What age is best
 * to start abacus?" against "What is the best age to start abacus?" — and on
 * eleven pages, including /junior-skills/abacus, every single one did.
 *
 * That is the repetitive-fragment pattern Google's helpful-content guidance
 * calls out: it pads the page, gives a reader the same answer twice in two
 * lengths, and gives a retrieval system two competing passages to cite for one
 * question. The FAQ copy is the fuller of the two and is what the FAQPage
 * schema emits, so the FAQ wins and the duplicate quick answer is dropped.
 *
 * Filtered at render rather than edited out of the data files: the same
 * question is worded differently in each of 19 hand-written page components,
 * and a rule that runs every build also covers whatever is written next.
 * ------------------------------------------------------------------------- */

/* Content words only. Two questions asking the same thing rarely share word
   order, so comparison is on the set of words that carry meaning. */
const STOPWORDS = new Set(
  ['a','an','the','is','are','do','does','did','my','your','for','of','in','on','to','and','or','can','could','what','how','when','where','which','who','why','i','it','be','at','as','with','there','they','you','we','if','any','some','that','this','from','get','have','has']
);

function contentWords(question) {
  return new Set(
    String(question)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w && !STOPWORDS.has(w))
  );
}

/* Overlap as a share of the shorter question, so the deliberately terse quick
   answer still matches the longer FAQ it duplicates.
 *
 * 0.7 was measured, not guessed. Across the 230 quick answers on catalogue
 * pages the scores cluster, and the band immediately below 0.7 sits almost
 * entirely at 0.67 — where real duplicates ("Why is Biology important for
 * children?" / "Why should children learn Biology?") are mixed in with pairs
 * that only look alike ("Do children need to be good at drawing to join?" /
 * "How can drawing help children?", "What do children learn in yoga?" /
 * "What age can children start yoga?").
 *
 * Dropping to 0.65 would remove 27 more, including those. Deleting a question
 * a parent actually asked is a worse outcome than leaving a near-duplicate, so
 * the threshold stays where the two classes separate cleanly. Roughly a dozen
 * 0.67-scoring duplicates survive site-wide; they are better edited in the
 * source data than caught by loosening this. */
const DUPLICATE_THRESHOLD = 0.7;

function overlaps(a, b) {
  const A = contentWords(a);
  const B = contentWords(b);
  if (!A.size || !B.size) return false;
  let shared = 0;
  for (const w of A) if (B.has(w)) shared += 1;
  return shared / Math.min(A.size, B.size) >= DUPLICATE_THRESHOLD;
}

export function distinctQuickAnswers(quickAnswers, faqs) {
  if (!Array.isArray(quickAnswers)) return [];
  if (!Array.isArray(faqs) || !faqs.length) return quickAnswers;
  return quickAnswers.filter((qa) => !faqs.some((faq) => overlaps(qa.q, faq.q)));
}

export function getFaqs(pathname) {
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (path === '/') return homeFaqs;
  if (path === '/faqs') return allFaqs;
  if (INFO_FAQS[path]) return INFO_FAQS[path];
  if (CATALOG_FAQS[path]) return CATALOG_FAQS[path];

  const cls = path.match(/^\/(ai|python)-for-kids\/class-(\d+)$/);
  if (cls) return cls[1] === 'ai' ? aiFaqs(Number(cls[2])) : pythonFaqs(Number(cls[2]));

  if (path === '/ai-for-kids') return aiFaqs(6);
  if (path === '/python-for-kids') return pythonFaqs(6);

  const art = path.match(/^\/resources\/([a-z0-9-]+)$/);
  if (art) return getArticle(art[1])?.faqs || null;

  const app = path.match(/^\/apps\/([a-z0-9-]+)$/);
  if (app) return getApp(app[1])?.faqs || null;

  const loc = path.match(/^\/kids-classes-in-([a-z0-9-]+)$/);
  if (loc) {
    const location = getLocation(loc[1]);
    return location ? [...location.faqs, ...familyFaqs] : null;
  }

  if (['/contact', '/book-free-demo', '/programs', '/junior-skills'].includes(path)) {
    return familyFaqs;
  }

  return null;
}
