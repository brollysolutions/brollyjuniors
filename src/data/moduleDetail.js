import { aiCurriculum } from './aiCurriculum.js';
import { pythonCurriculum } from './pythonCurriculum.js';
import { aiModuleSeeds } from './aiModuleDetails.js';
import { pythonModuleSeeds } from './pythonModuleDetails.js';
import { getModuleArt } from './moduleArt.js';

/* The two course tracks. Both share the same 9 × 8 shape, so one detail
   page can serve either subject. */
export const subjects = {
  ai: {
    key: 'ai',
    label: 'AI for Kids',
    course: 'Artificial Intelligence',
    icon: '🤖',
    base: '/ai-for-kids',
    image: '/images/ai.svg',
    imageAlt: 'A friendly AI robot beside a chat window and an idea spark',
    curriculum: aiCurriculum,
    seeds: aiModuleSeeds,
  },
  python: {
    key: 'python',
    label: 'Python for Kids',
    course: 'Python & Coding',
    icon: '🐍',
    base: '/python-for-kids',
    image: '/images/python.svg',
    imageAlt: 'A code editor window with a friendly python snake',
    curriculum: pythonCurriculum,
    seeds: pythonModuleSeeds,
  },
};

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[’'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* Canonical URL for a module: /python-for-kids/class-6/module-3-decisions-with-conditions */
export function moduleHref(subjectKey, klass, index, module) {
  const s = subjects[subjectKey];
  return `${s.base}/class-${klass}/module-${index + 1}-${slugify(module.title)}`;
}

/* Accept any slug that starts with module-N so older or shortened links keep working. */
export function moduleIndexFromSlug(slug) {
  const match = /^module-(\d+)/.exec(String(slug || ''));
  if (!match) return -1;
  return Number(match[1]) - 1;
}

/* Eight sessions per module, mapped onto the module's three topics.
   Teach → practise for each topic, then build, then present. */
function sessionPlan(module) {
  const [a, b, c] = module.topics;
  return [
    { n: 1, title: 'Warm-up and big picture', text: `Where this module fits, what you will build, and a hands-on starter that gets everyone curious about ${a.toLowerCase()}.` },
    { n: 2, title: a, text: `Guided teaching on ${a.toLowerCase()}, worked through together with the teacher.` },
    { n: 3, title: `${a} — practice lab`, text: `Independent practice, small challenges and one deliberate mistake to diagnose.` },
    { n: 4, title: b, text: `Guided teaching on ${b.toLowerCase()}, building directly on the previous two sessions.` },
    { n: 5, title: `${b} — practice lab`, text: `Applied tasks that combine ${a.toLowerCase()} and ${b.toLowerCase()} in one piece of work.` },
    { n: 6, title: c, text: `${c} introduced and practised, completing the toolkit needed for the project.` },
    { n: 7, title: 'Project build', text: `Guided build session for the module project: ${module.project}.` },
    { n: 8, title: 'Test, present and reflect', text: 'Finish, test against the checklist, present the work and explain the decisions behind it.' },
  ];
}

function outcomes(module) {
  return [
    ...module.topics.map((t) => `Explain and use ${t.toLowerCase()} without prompting`),
    `Build and finish ${module.project.toLowerCase()}`,
    'Test your own work and correct what you find',
    'Talk an adult through what you made and why',
  ];
}

const successChecklist = [
  'It works from start to finish without breaking',
  'You can explain every part of it in your own words',
  'You tested it and improved at least one thing afterwards',
  'Someone else used or understood it without your help',
];

/* Assembles everything the module page needs. Returns null for unknown routes. */
export function getModuleDetail(subjectKey, klass, index) {
  const subject = subjects[subjectKey];
  if (!subject) return null;

  const data = subject.curriculum[klass];
  if (!data) return null;

  const module = data.modules[index];
  if (!module) return null;

  const seed = (subject.seeds[klass] || [])[index] || {};
  const total = data.modules.length;

  const concepts = module.topics.map((topic, i) => ({
    topic,
    text: (seed.concepts || [])[i] || `Taught step by step with worked examples, then practised until it is comfortable.`,
  }));

  const neighbour = (i) => {
    const m = data.modules[i];
    if (!m) return null;
    return { title: m.title, number: i + 1, href: moduleHref(subjectKey, klass, i, m) };
  };

  /* Module-specific artwork, falling back to the course illustration. */
  const art = getModuleArt(subjectKey, klass, index) || {
    image: subject.image,
    imageAlt: subject.imageAlt,
  };

  return {
    subject,
    image: art.image,
    imageAlt: art.imageAlt,
    klass,
    level: data.level,
    index,
    number: index + 1,
    total,
    module,
    sessionsFrom: index * 8 + 1,
    sessionsTo: (index + 1) * 8,
    hook: seed.hook,
    bigIdea: seed.bigIdea,
    why: seed.why,
    funFact: seed.funFact,
    misconception: seed.misconception,
    tryThis: seed.tryThis,
    vocab: seed.vocab || [],
    concepts,
    sessions: sessionPlan(module),
    outcomes: outcomes(module),
    successChecklist,
    classHref: `${subject.base}/class-${klass}`,
    prev: neighbour(index - 1),
    next: neighbour(index + 1),
  };
}
