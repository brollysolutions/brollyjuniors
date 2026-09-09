/* The catalogue: one structure behind the mega menu, the section hubs, the
 * route manifest, the sitemap and the per-page search metadata.
 *
 * Before this existed the navbar was hand-written JSX and the routes were a
 * separate list, which is the arrangement that lets a menu item quietly point
 * at a URL nobody ever built. Now a topic cannot appear in the menu without
 * also appearing in routes.js and in the sitemap, because all three read this.
 *
 * Sections come in two kinds. Programmes, Tuitions, Workshops and Age Groups
 * own pages and generate routes. Schools owns nothing — every item links to a
 * page that data/infoPages.js already renders — and exists here only so the
 * menu can be built from one list rather than two.
 */

import { programmes } from './programmes.js';
import { tuitions } from './tuitions.js';
import { workshops } from './workshops.js';
import { ageGroups } from './ageGroups.js';
import { ownedTopics, topicAsPage, topicPath, topicHref } from './shape.js';
import { programmeDetails } from '../programmeDetails.js';

export { topicPath, topicHref, ownedTopics } from './shape.js';

/* Schools: menu structure only. Every destination predates the catalogue. */
export const schools = {
  key: 'schools',
  label: 'Schools',
  base: '/schools',
  hubPath: '/schools',
  menuTitle: 'School Partnerships',
  groups: [
    {
      id: 'partner',
      title: 'Partner With Us',
      icon: '🤝',
      blurb: 'How a Brolly Juniors programme runs inside a school.',
      items: [
        { name: 'School overview', href: '/schools' },
        { name: 'Partnership model', href: '/schools/school-partnership-program' },
        { name: 'Annual program', href: '/schools/annual-academic-program' },
        { name: 'Request a proposal', href: '/schools/request-proposal' },
      ],
    },
    {
      id: 'solutions',
      title: 'School Solutions',
      icon: '🚀',
      blurb: 'Curriculum, clubs and training we deliver for students and staff.',
      items: [
        { name: 'AI curriculum', href: '/schools/ai-curriculum' },
        { name: 'Python curriculum', href: '/schools/python-curriculum' },
        { name: 'AI & coding clubs', href: '/schools/ai-and-coding-clubs' },
        { name: 'Teacher training', href: '/schools/teacher-training' },
      ],
    },
  ],
};

/* Menu order. Programmes first because it is what most visitors arrive for. */
export const menuSections = [programmes, tuitions, schools, ageGroups, workshops];

/* Only these four generate pages. /programs already existed as a hand-written
   page, so it is not in the hub list even though Programmes is a section. */
export const catalogSections = [programmes, tuitions, workshops, ageGroups];

/* Hubs that this data has to create. /programs and /schools already exist as
   their own components, so they are absent here on purpose. */
export const catalogHubs = [
  {
    section: tuitions,
    path: '/tuitions',
    eyebrow: 'Academic tuitions · Classes 4–10',
    title: 'Tuition classes in Hyderabad for Classes 4 to 10.',
    subtitle:
      'Languages, mathematics, the three sciences, social studies and foundation courses — taught in batches of eight, from the concept up.',
    quickAnswer:
      'Brolly Juniors offers academic tuition in Hyderabad for Classes 4 to 10 across CBSE, ICSE and State boards: Telugu, English and Hindi, mathematics and advanced maths, physics, chemistry, biology and general science, history, geography, civics and economics, and IIT, JEE, NEET and Olympiad foundation courses. Every batch is capped at eight students.',
    lead: 'Every subject follows the same discipline: find the real gap first, teach the concept before the method, then practise against the board’s own marking scheme.',
    seo: {
      title: 'Tuition Classes in Hyderabad for Class 4-10 | Brolly Juniors',
      description:
        'Academic tuition in Hyderabad for Classes 4 to 10 — maths, science, social studies, languages and IIT, JEE, NEET and Olympiad foundation. Batches of 8.',
      keyword: 'tuition classes in hyderabad',
      crumb: 'Tuitions',
    },
    closing: {
      title: 'How tuition works here',
      text: 'Every student sits a short diagnostic before enrolling, because a Class 8 student struggling with algebra usually has an unfinished problem two years back. Batches are capped at eight, written work is marked against the board pattern with the breakdown shown, and families get a progress note each month.',
      bullets: [
        'Diagnostic before enrolment, in every subject',
        'CBSE, ICSE and State board patterns',
        'Weekly marked written work with the mark breakdown',
        'Monthly progress note to families',
      ],
    },
  },
  {
    section: workshops,
    path: '/workshops',
    eyebrow: 'Workshops · One weekend each',
    title: 'Holiday and weekend workshops for kids in Hyderabad.',
    subtitle:
      'Three sessions of three hours, one finished thing at the end — a trained model, a playable game, a framed painting, a speech delivered.',
    quickAnswer:
      'Brolly Juniors runs short workshops for kids in Hyderabad across technology, maths and brain skills, creative arts and communication. Each workshop is three sessions of three hours across a weekend or a holiday week, capped at ten children, with all materials provided and one finished piece of work at the end.',
    lead: 'A workshop is not a shortened programme. It is nine hours built around finishing one real thing, which is a genuinely different — and for many children, a better first — experience.',
    seo: {
      title: 'Holiday Workshops for Kids in Hyderabad | Brolly Juniors',
      description:
        'Weekend and holiday workshops for children in Hyderabad — AI, Python, robotics, abacus, chess, art, dance, drama and public speaking. Three sessions each.',
      keyword: 'holiday workshops for kids in hyderabad',
      crumb: 'Workshops',
    },
    closing: {
      title: 'How every workshop runs',
      text: 'Three sessions of three hours across one weekend or a holiday week. Batches are capped at ten, all materials and equipment are provided, and families are invited to the last half hour of the final session to see what was made.',
      bullets: [
        'Three sessions × three hours, one weekend or holiday week',
        'Maximum ten children, materials provided',
        'Everybody finishes something real',
        'A genuine way to try a subject before a year-long commitment',
      ],
    },
  },
  {
    section: ageGroups,
    path: '/age-groups',
    eyebrow: 'Learning by age · 3 to 16',
    title: 'Classes by age in Hyderabad, from 3 to 16.',
    subtitle:
      'Start from your child’s age rather than from a subject list — what each stage actually needs, and which programmes fit it.',
    quickAnswer:
      'Brolly Juniors groups its classes into four stages: ages 3 to 5 explore and discover, ages 6 to 8 build foundations, ages 9 to 12 develop new skills, and ages 13 to 16 prepare for the future. Each stage page sets out what that age genuinely needs and which programmes and tuitions are open at it.',
    lead: 'A parent who knows their child is seven does not necessarily know whether they want abacus or phonics. These four pages answer that question first.',
    seo: {
      title: 'Kids Classes by Age in Hyderabad (3-16) | Brolly Juniors',
      description:
        'Find classes by age in Hyderabad. What children aged 3–5, 6–8, 9–12 and 13–16 actually need at each stage, and which Brolly Juniors programmes fit.',
      keyword: 'kids classes by age in hyderabad',
      crumb: 'Age Groups',
    },
    closing: {
      title: 'Not sure which stage fits?',
      text: 'Age bands are a guide, not a rule. A precocious seven-year-old may belong in a nine-plus batch and a child new to a subject may be better placed a band down. Every enrolment starts with a short conversation and, where it matters, a placement check.',
      bullets: [
        'Bands are guidance; placement is decided per child',
        'A free trial class in the batch we suggest',
        'Honest advice when a child is not ready yet',
        'Siblings are usually placed to share one visit',
      ],
    },
  },
];

/* Every owned topic, as an InfoPage-shaped object with its path attached.
 *
 * A topic that also has an entry in data/programmeDetails.js gets it merged in
 * as `detail`, which is what makes App.jsx render it through the long-form
 * ProgrammePage instead of the short InfoPage. The FAQ set comes with it, so
 * lib/faqs.js keeps emitting the same questions the page actually shows. */
export const catalogPages = catalogSections.flatMap((section) =>
  ownedTopics(section).map((topic) => {
    const page = topicAsPage(section, topic);
    const detail = programmeDetails[page.path];
    if (!detail) return page;
    return {
      ...page,
      detail,
      faqs: detail.faqs || page.faqs,
      faqTitle: detail.faqTitle || page.faqTitle,
    };
  })
);

/* Path -> the section and topic that own it, for lib/seo.js. */
const BY_PATH = new Map();
for (const section of catalogSections) {
  for (const topic of ownedTopics(section)) {
    BY_PATH.set(topicPath(section, topic.slug), { section, topic });
  }
}
for (const hub of catalogHubs) BY_PATH.set(hub.path, { hub });

/** Search metadata for a catalogue URL, or null if the path is not one. */
export function getCatalogSeo(path) {
  const entry = BY_PATH.get(path);
  if (!entry) return null;
  if (entry.hub) return { ...entry.hub.seo, crumbTrail: [] };
  return {
    ...entry.topic.seo,
    crumbTrail: [{ name: entry.section.label, path: entry.section.hubPath }],
  };
}

/** The hub definition for a path, if it is one of the generated hubs. */
export function getCatalogHub(path) {
  return catalogHubs.find((h) => h.path === path) || null;
}

/** Every URL the catalogue is responsible for. */
export const catalogRoutes = [
  ...catalogHubs.map((h) => h.path),
  ...catalogPages.map((p) => p.path),
];

/* A menu entry with a resolved destination, for components that only need to
   render links and do not care which kind of topic they are looking at. */
export function menuItems(section, group) {
  return group.items.map((item) => ({
    name: item.name,
    note: item.note,
    icon: item.icon,
    stage: item.stage,
    summary: item.summary,
    to: topicHref(section, item),
  }));
}
