import { getModuleDetail, moduleIndexFromSlug, moduleHref, subjects } from '../data/moduleDetail.js';
import { getLocation, isCentreArea } from '../data/locations.js';
import { getArticle } from '../data/articles.js';
import { getApp } from '../data/apps.js';
import { getCatalogSeo } from '../data/catalog/index.js';
import { routes } from './routes.js';

/* Per-route search metadata.
 *
 * Every route needs its own title and description: a single shared title across
 * the whole site means Google has no keyword to rank any individual page on.
 * Titles are keyword-first ("Abacus Classes in Hyderabad | ...") because the
 * opening words carry the most weight and are what a parent scans in the
 * results list.
 *
 * Kept as data, in the same spirit as src/data/ — adding a page is an edit here,
 * not a component change. Titles aim for <= 60 characters and descriptions for
 * ~155, which is roughly what Google renders before truncating.
 *
 * `keyword` is the one search this page is trying to win. It is not emitted as
 * a meta tag — Google ignored meta keywords two decades ago — but it is the
 * contract the page is held to: the keyword must also appear in the H1 and the
 * first hundred words, and docs/KEYWORD_MAP.md audits that.
 */

export const SITE_URL = 'https://brollyjuniors.com';

/* Share cards.
 *
 * These must be raster. The illustrations in public/images are SVG, and no
 * major Open Graph consumer renders SVG — WhatsApp, Facebook, LinkedIn and X
 * all show a blank preview instead, which for a business whose enquiries
 * arrive over WhatsApp is a link that looks broken.
 *
 * One card per section rather than one per route: a preview needs to be
 * instantly recognisable as Brolly Juniors, not unique. Every card is
 * 1200x630, the size Facebook and LinkedIn both crop from cleanly.
 */
const og = (name) => `${SITE_URL}/images/og/${name}.png`;

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const DEFAULT_OG_IMAGE = og('default');

/* Longest prefix wins, so /junior-skills/abacus is matched before a bare
   /junior-skills would be. Order accordingly. */
const OG_BY_PREFIX = [
  ['/ai-for-kids', 'ai'],
  ['/python-for-kids', 'python'],
  ['/junior-skills/phonics', 'phonics'],
  ['/junior-skills/abacus', 'abacus'],
  ['/junior-skills/vedic-maths', 'vedic-maths'],
  ['/junior-skills/public-speaking', 'public-speaking'],
  ['/junior-skills/digital-literacy', 'digital-literacy'],
  ['/schools', 'schools'],
  ['/resources', 'resources'],
];

/** The share card for a route, falling back to the site-wide card. */
export function ogImageFor(pathname) {
  const path = pathname || '/';
  for (const [prefix, name] of OG_BY_PREFIX) {
    if (path === prefix || path.startsWith(`${prefix}/`)) return og(name);
  }
  return DEFAULT_OG_IMAGE;
}

const DEFAULT = {
  title: 'Brolly Juniors | Kids Learning Classes in Hyderabad',
  description:
    "Hyderabad's joyful learning home for Abacus, Phonics, Vedic Maths, AI, Python and Public Speaking. Batches capped at 8 children. Book a free trial class.",
};

/* Static routes. */
const PAGES = {
  /* The title carries the target phrase intact, because it is the one place
     exact wording is worth a little awkwardness — it is what a parent scans in
     the results list, and docs/KEYWORD_MAP.md holds the title (only the title)
     to the exact phrase. "Classes" moves into the description, where it still
     counts and reads better; /programs and /junior-skills carry the
     class-worded searches as their own targets. */
  '/': {
    title: 'Kids Activities in Hyderabad | Brolly Juniors',
    description:
      'Kids activities in Hyderabad that make learning fun: AI, Python, Abacus, Phonics, Vedic Maths, chess and public speaking. Batches of 8. Book a free trial.',
    keyword: 'kids activities in hyderabad',
    crumb: 'Home',
  },
  '/programs': {
    title: 'Learning Programs for Kids in Hyderabad | Brolly Juniors',
    description:
      'Seven programs for ages 4 to Class 10 in Hyderabad: AI, Python, Abacus, Phonics, Vedic Maths, Public Speaking and Digital Skills. All under one roof.',
    keyword: 'learning programs for kids in hyderabad',
    crumb: 'Programs',
  },
  '/book-free-demo': {
    title: 'Book a Free Trial Class in Hyderabad | Brolly Juniors',
    description:
      'Book one free trial class at Brolly Juniors Hyderabad. Meet the educator, see the teaching approach, and decide without obligation. Call +91 70360 44555.',
    keyword: 'free trial class in hyderabad',
    crumb: 'Book a free trial',
  },

  /* --- Technology pathways --- */
  '/ai-for-kids': {
    title: 'AI Classes for Kids in Hyderabad (Class 6-10) | Brolly Juniors',
    description:
      'Artificial Intelligence classes for children in Hyderabad. A separate 72-session annual curriculum for every class from 6 to 10. No coding needed. Free trial.',
    keyword: 'ai classes for kids in hyderabad',
    crumb: 'AI for Kids',
    course: {
      name: 'Artificial Intelligence for Kids',
      workload: 'PT2H',
      weeks: 36,
      level: 'Beginner to Intermediate',
      ages: 'Class 6 to Class 10',
    },
  },
  '/python-for-kids': {
    title: 'Coding Classes for Kids in Hyderabad | Python | Brolly Juniors',
    description:
      'Coding classes for kids in Hyderabad, Class 6-10. Real typed Python, 72 sessions a year, a project every module. Batches of 8. Book a free trial class.',
    keyword: 'coding classes for kids in hyderabad',
    crumb: 'Python for Kids',
    course: {
      name: 'Python & Coding for Kids',
      workload: 'PT2H',
      weeks: 36,
      level: 'Beginner to Intermediate',
      ages: 'Class 6 to Class 10',
    },
  },

  /* --- Junior skills: the primary local-search money pages --- */
  '/junior-skills': {
    title: 'Classes for Kids in Hyderabad, Ages 4-11 | Brolly Juniors',
    description:
      'Phonics, Abacus, Vedic Maths, Public Speaking and Digital Skills classes for young children in Hyderabad. Small batches of 8. Book a free trial class today.',
    keyword: 'classes for kids in hyderabad',
    crumb: 'Junior Skills',
  },
  '/junior-skills/phonics': {
    title: 'Phonics Classes in Hyderabad for Kids | Brolly Juniors',
    description:
      'Synthetic phonics classes in Hyderabad for ages 4-9. Six levels from letter sounds to fluent reading. Batches of 8 so every child reads aloud. Free trial class.',
    keyword: 'phonics classes in hyderabad',
    crumb: 'Phonics',
    course: { name: 'Phonics & Early Reading', workload: 'PT1H', weeks: 44, level: 'Beginner', ages: 'Ages 4 to 9' },
  },
  '/junior-skills/abacus': {
    title: 'Abacus Classes in Hyderabad for Kids | Brolly Juniors',
    description:
      'Abacus classes in Hyderabad for ages 5-11. A 10-level Soroban pathway building focus, memory and mental maths. Batches capped at 8. Book a free trial class.',
    keyword: 'abacus classes in hyderabad',
    crumb: 'Abacus',
    course: { name: 'Abacus Mastery', workload: 'PT1H', weeks: 104, level: 'Beginner to Advanced', ages: 'Ages 5 to 11' },
  },
  '/junior-skills/vedic-maths': {
    title: 'Vedic Maths Classes in Hyderabad for Kids | Brolly Juniors',
    description:
      'Vedic Maths classes in Hyderabad for ages 7-13. Pattern-based mental calculation taught with real understanding, not rote tricks. Book a free trial class.',
    keyword: 'vedic maths classes in hyderabad',
    crumb: 'Vedic Maths',
    course: { name: 'Vedic Maths', workload: 'PT1H', weeks: 12, level: 'Beginner', ages: 'Ages 7 to 13' },
  },
  '/junior-skills/public-speaking': {
    title: 'Public Speaking Classes for Kids in Hyderabad | Brolly Juniors',
    description:
      'Public speaking classes for children in Hyderabad, Class 1-5. A five-stage confidence ladder from show-and-tell to presentations. Batches of 8. Free trial.',
    keyword: 'public speaking classes for kids in hyderabad',
    crumb: 'Public Speaking',
    course: { name: 'Public Speaking', workload: 'PT1H', weeks: 24, level: 'Beginner', ages: 'Class 1 to Class 5' },
  },
  '/junior-skills/digital-literacy': {
    title: 'Digital Literacy Classes for Kids in Hyderabad | Brolly Juniors',
    description:
      'Creative and digital skills classes for children in Hyderabad, Class 1-5. Art, storytelling, logical thinking and safe digital creation. Book a free trial.',
    keyword: 'digital literacy classes for kids in hyderabad',
    crumb: 'Digital Literacy',
    course: { name: 'Creative & Digital Skills', workload: 'PT1H', weeks: 24, level: 'Beginner', ages: 'Class 1 to Class 5' },
  },

  /* --- Schools (B2B: precise and credential-led, not "joyful") --- */
  '/schools': {
    title: 'AI & Coding Curriculum for Schools in Hyderabad | Brolly Juniors',
    description:
      'Brolly Juniors partners with Hyderabad schools to deliver annual AI and Python curricula, coding clubs, innovation labs and teacher training. Request a proposal.',
    keyword: 'coding curriculum for schools in hyderabad',
    crumb: 'For Schools',
  },
  '/schools/school-partnership-program': {
    title: 'School Partnership Program in Hyderabad | Brolly Juniors',
    description:
      'Partner with Brolly Juniors to bring structured AI and coding programs into your Hyderabad school. Curriculum, delivery and teacher support included.',
    keyword: 'school partnership program in hyderabad',
    crumb: 'Partnership Program',
  },
  '/schools/annual-academic-program': {
    title: 'Annual Academic Program for Schools | Brolly Juniors Hyderabad',
    description:
      'A full-year academic program for schools: 72 sessions across 36 instructional weeks, with a distinct curriculum for every class from 6 to 10.',
    keyword: 'annual academic program for schools',
    crumb: 'Annual Program',
  },
  '/schools/request-proposal': {
    title: 'Request a School Proposal | Brolly Juniors Hyderabad',
    description:
      'Request a curriculum outline and partnership proposal for your school. Brolly Juniors delivers AI and coding programs across Hyderabad schools.',
    keyword: 'request a school proposal',
    crumb: 'Request a Proposal',
  },
  '/schools/ai-curriculum': {
    title: 'AI Curriculum for Schools (Class 6-10) | Brolly Juniors',
    description:
      'A structured, class-wise Artificial Intelligence curriculum for schools. 72 sessions per year, practical AI literacy, safety and responsible use embedded.',
    keyword: 'ai curriculum for schools',
    crumb: 'AI Curriculum',
  },
  '/schools/python-curriculum': {
    title: 'Python Coding Curriculum for Schools | Brolly Juniors',
    description:
      'A class-wise Python programming curriculum for Classes 6-10. 72 guided sessions, a working artefact every module, and a class-appropriate annual capstone.',
    keyword: 'python coding curriculum for schools',
    crumb: 'Python Curriculum',
  },
  '/schools/ai-and-coding-clubs': {
    title: 'AI & Coding Clubs for Schools in Hyderabad | Brolly Juniors',
    description:
      'Set up an AI and coding club at your Hyderabad school. Structured sessions, student projects and showcase events, run with your existing timetable.',
    keyword: 'coding clubs for schools in hyderabad',
    crumb: 'Clubs',
  },
  '/schools/teacher-training': {
    title: 'AI & Coding Teacher Training in Hyderabad | Brolly Juniors',
    description:
      'Practical AI and coding training for school teachers in Hyderabad. Build in-house capability to deliver technology curricula with confidence.',
    keyword: 'coding teacher training in hyderabad',
    crumb: 'Teacher Training',
  },

  /* --- Trust & information --- */
  '/contact': {
    title: 'Contact Brolly Juniors | Kids Classes in Hyderabad',
    description:
      'Contact Brolly Juniors, Hyderabad. Call +91 70360 44555 or message us on WhatsApp for batch timings, centre directions and free trial class bookings.',
    keyword: 'contact brolly juniors',
    intent: 'navigational',
    crumb: 'Contact',
  },
  '/faqs': {
    title: 'Kids Classes in Hyderabad: FAQs | Brolly Juniors',
    description:
      'Answers on batch sizes, ages, fees, free trial classes, curriculum structure and school partnerships at Brolly Juniors, Hyderabad.',
    keyword: 'kids classes in hyderabad faqs',
    intent: 'navigational',
    crumb: 'FAQs',
  },
  '/teaching-methodology': {
    title: 'Our Teaching Methodology | Brolly Juniors Hyderabad',
    description:
      'Understand, Practise, Create — how Brolly Juniors teaches. Small batches of 8, guided activities and a visible outcome from every module.',
    keyword: 'teaching methodology',
    intent: 'navigational',
    crumb: 'Teaching Methodology',
  },
  '/student-projects': {
    title: 'Student Projects | Brolly Juniors Hyderabad',
    description:
      'Real projects built by Brolly Juniors students in Hyderabad — AI tools, Python games, data projects and presentations from Classes 6 to 10.',
    keyword: 'student projects',
    intent: 'navigational',
    crumb: 'Student Projects',
  },
  /* A free tool rather than a sales page, and deliberately so. The site's
     largest structural weakness is referring domains; class pages do not
     attract links and utilities do. "abacus worksheets" is 1,600 searches a
     month at difficulty 14 — the lowest-competition worthwhile term in this
     market, and the one the strongest competitor built its traffic on. */
  '/abacus-worksheet-generator': {
    title: 'Free Printable Abacus Worksheets Generator | Brolly Juniors',
    description:
      'Generate printable abacus practice worksheets in your browser. Choose digits, rows and operations, with an optional answer key. Free, no sign-up, no download.',
    keyword: 'abacus worksheets',
    crumb: 'Abacus Worksheets',
  },
  '/resources': {
    title: 'Learning Guides for Parents | Phonics, Abacus, AI & Coding',
    description:
      'Free, honest guides for parents on phonics readiness, abacus, Vedic Maths, AI safety and coding for children — written by the people who teach them.',
    keyword: 'learning guides for parents',
    crumb: 'Resources',
  },
  '/my-progress': {
    title: 'My Progress | Brolly Juniors',
    description: 'Track your module scores, badges and learning progress at Brolly Juniors.',
    crumb: 'My Progress',
    noindex: true,
  },
  /* The apps hub. Note the keyword carries no city: this is the one part of the
     site aimed at a national query rather than a Hyderabad one, because an app
     is not something a parent needs to travel to. See src/data/apps.js. */
  '/apps': {
    title: 'Learning Apps for Kids | Brolly Juniors',
    description:
      'Free learning apps for kids built by the educators who teach our classes. Starting with Spark Phonics — an offline phonics app for ages 3 to 7, with no ads.',
    keyword: 'learning apps for kids',
    crumb: 'Apps',
  },
};

/* Class pages are generated: 10 routes that would otherwise share a title. */
const CLASS_PAGES = {
  ai: (n) => ({
    title: `AI Course for Class ${n} in Hyderabad | Brolly Juniors`,
    description: `Artificial Intelligence classes for Class ${n} students in Hyderabad. 72 sessions across 36 weeks, built specifically for Class ${n}. No coding required. Free trial.`,
    keyword: `ai course for class ${n}`,
    crumb: `Class ${n}`,
    course: { name: `AI for Class ${n}`, workload: 'PT2H', weeks: 36, level: 'Class-specific', ages: `Class ${n}` },
  }),
  python: (n) => ({
    title: `Python Course for Class ${n} in Hyderabad | Brolly Juniors`,
    description: `Python coding classes for Class ${n} students in Hyderabad. 72 guided sessions, a working project every module and a Class ${n} capstone. Book a free trial.`,
    keyword: `python course for class ${n}`,
    crumb: `Class ${n}`,
    course: { name: `Python for Class ${n}`, workload: 'PT2H', weeks: 36, level: 'Class-specific', ages: `Class ${n}` },
  }),
};

/* Breadcrumb ancestry for the generated route families. Static pages get theirs
   from the path itself, since /schools/teacher-training sits under /schools. */
function crumbLabel(path) {
  return PAGES[path]?.crumb || null;
}

function breadcrumbsFor(path, extra = []) {
  const trail = [{ name: 'Home', path: '/' }];
  const segments = path.split('/').filter(Boolean);
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    const label = crumbLabel(acc);
    if (label) trail.push({ name: label, path: acc });
  }
  return [...trail, ...extra];
}

function clamp(text, max = 158) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/[\s,;.]+\S*$/, '')}…`;
}

/**
 * Resolve search metadata for a pathname.
 * Falls back to a sensible default so a new route is never left blank.
 */
export function getSeo(pathname) {
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const canonical = SITE_URL + (path === '/' ? '/' : path);

  if (PAGES[path]) {
    return {
      ...DEFAULT,
      ...PAGES[path],
      canonical,
      path,
      breadcrumbs: path === '/' ? [] : breadcrumbsFor(path),
    };
  }

  /* --- Class pages: /ai-for-kids/class-8 --- */
  const cls = path.match(/^\/(ai|python)-for-kids\/class-(\d+)$/);
  if (cls) {
    const meta = CLASS_PAGES[cls[1]](cls[2]);
    return {
      ...meta,
      canonical,
      path,
      breadcrumbs: breadcrumbsFor(path, []),
    };
  }

  /* --- Module pages: /python-for-kids/class-8/module-3-... ---
     These carry the deepest unique content on the site — the hook, the big
     idea, the misconception and the word bank are all written per module and
     exist nowhere else in this market. They are indexed for exactly that
     reason. A module without seed detail has nothing unique to offer, so it
     stays out of the index rather than diluting the ones that do. */
  const mod = path.match(/^\/(ai|python)-for-kids\/class-(\d+)\/(.+)$/);
  if (mod) {
    const subjectKey = mod[1];
    const klass = Number(mod[2]);
    const index = moduleIndexFromSlug(mod[3]);
    const d = getModuleDetail(subjectKey, klass, index);
    const label = subjectKey === 'ai' ? 'AI' : 'Python';

    if (!d) {
      return { ...DEFAULT, canonical, path, noindex: true, breadcrumbs: breadcrumbsFor(path) };
    }

    const thin = !d.bigIdea;
    /* Any slug beginning "module-3" resolves to module 3, so several URLs can
       reach the same page. The canonical always points at the full one. */
    const canonicalModule = SITE_URL + moduleHref(subjectKey, klass, index, d.module);
    return {
      title: `${d.module.title} | Class ${klass} ${label} | Brolly Juniors`,
      description: clamp(
        d.hook
          ? `${d.hook} Module ${d.number} of the Class ${klass} ${label} year: ${d.module.topics.join(', ')}. Project: ${d.module.project}.`
          : `Module ${d.number} of the Class ${klass} ${label} curriculum. Topics: ${d.module.topics.join(', ')}. Project: ${d.module.project}.`
      ),
      keyword: `class ${klass} ${label.toLowerCase()} ${d.module.title.toLowerCase()}`,
      canonical: canonicalModule,
      path,
      noindex: thin,
      module: d,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: subjects[subjectKey].label, path: subjects[subjectKey].base },
        { name: `Class ${klass}`, path: d.classHref },
        { name: `Module ${d.number}`, path },
      ],
    };
  }

  /* --- Catalogue pages: /tuitions/physics, /workshops/ai-workshop,
         /age-groups/ages-6-8, /programs/chess ---
     Title, description and keyword are declared next to the page content in
     data/catalog/, for the same reason the rest of this file exists: the
     person writing the page is the person who knows what it should rank for. */
  const catalog = getCatalogSeo(path);
  if (catalog) {
    const { crumbTrail, crumb, ...meta } = catalog;
    return {
      ...DEFAULT,
      ...meta,
      canonical,
      path,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        ...crumbTrail,
        ...(crumb ? [{ name: crumb, path }] : []),
      ],
    };
  }

  /* --- Neighbourhood pages: /kids-classes-in-kondapur --- */
  const loc = path.match(/^\/kids-classes-in-([a-z0-9-]+)$/);
  if (loc) {
    const location = getLocation(loc[1]);
    if (location) {
      const centre = isCentreArea(location);
      return {
        title: `Kids Classes in ${location.name}, Hyderabad | Brolly Juniors`,
        description: clamp(location.summary),
        keyword: `kids classes in ${location.name.toLowerCase()}`,
        canonical,
        path,
        location,
        centre,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Areas we serve', path: '/contact' },
          { name: location.name, path },
        ],
      };
    }
  }

  /* --- Articles: /resources/is-abacus-good-for-kids --- */
  const art = path.match(/^\/resources\/([a-z0-9-]+)$/);
  if (art) {
    const article = getArticle(art[1]);
    if (article) {
      return {
        title: article.seoTitle,
        description: clamp(article.description),
        keyword: article.keyword,
        canonical,
        path,
        article,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
          { name: article.title, path },
        ],
      };
    }
  }

  /* --- Apps: /apps/spark-phonics --- */
  const appMatch = path.match(/^\/apps\/([a-z0-9-]+)$/);
  if (appMatch) {
    const app = getApp(appMatch[1]);
    if (app) {
      return {
        title: app.seoTitle,
        description: clamp(app.seoDescription),
        keyword: app.keyword,
        canonical,
        path,
        app,
        ogImage: og(app.ogImage),
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Apps', path: '/apps' },
          { name: app.name, path },
        ],
      };
    }
  }

  /* Nothing matched and the path is not a route we publish, so this is the
     404 page. It must carry noindex: the Apache fallback serves this file for
     every unknown URL, and without it a mistyped address would be indexable as
     a duplicate of the site. */
  if (!ROUTE_SET.has(path)) {
    return {
      title: 'Page Not Found | Brolly Juniors',
      description:
        'This page does not exist. Browse Brolly Juniors programs for children in Hyderabad, or book a free trial class.',
      canonical,
      path,
      noindex: true,
      breadcrumbs: [],
    };
  }

  return { ...DEFAULT, canonical, path, breadcrumbs: breadcrumbsFor(path) };
}

const ROUTE_SET = new Set(routes);

/* Exported for docs/KEYWORD_MAP.md generation and for tests. */
export { PAGES as STATIC_PAGES };
