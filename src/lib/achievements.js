import { subjects } from '../data/moduleDetail.js';
import { moduleKey } from './progress.js';

/* Badges are derived from progress rather than stored, so they can never
   drift out of sync with the underlying scores. */

export function getStats(state) {
  const perSubject = {};
  const perClass = [];
  let completed = 0;
  let perfect = 0;
  let totalModules = 0;

  Object.keys(subjects).forEach((key) => {
    const s = subjects[key];
    perSubject[key] = { label: s.label, icon: s.icon, base: s.base, done: 0, perfect: 0, total: 0, classes: [] };

    Object.keys(s.curriculum)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((klass) => {
        const modules = s.curriculum[klass].modules;
        let done = 0;
        let classPerfect = 0;
        modules.forEach((m, i) => {
          const rec = state.modules[moduleKey(key, klass, i)];
          if (rec && rec.best > 0) done += 1;
          if (rec && rec.total && rec.best === rec.total) classPerfect += 1;
        });
        const entry = {
          subject: key,
          subjectLabel: s.label,
          icon: s.icon,
          klass,
          done,
          perfect: classPerfect,
          total: modules.length,
          href: `${s.base}/class-${klass}`,
          complete: done === modules.length,
        };
        perClass.push(entry);
        perSubject[key].classes.push(entry);
        perSubject[key].done += done;
        perSubject[key].perfect += classPerfect;
        perSubject[key].total += modules.length;
        completed += done;
        perfect += classPerfect;
        totalModules += modules.length;
      });
  });

  return {
    completed,
    perfect,
    totalModules,
    perSubject,
    perClass,
    classesComplete: perClass.filter((c) => c.complete).length,
    streak: state.streak?.count || 0,
  };
}

export const BADGES = [
  {
    id: 'first-steps',
    icon: '👣',
    title: 'First Steps',
    text: 'Finish your first module challenge.',
    earned: (st) => st.completed >= 1,
  },
  {
    id: 'sharp-shooter',
    icon: '🎯',
    title: 'Sharp Shooter',
    text: 'Get every question right in a module.',
    earned: (st) => st.perfect >= 1,
  },
  {
    id: 'curious-five',
    icon: '🔍',
    title: 'Curious Five',
    text: 'Complete five module challenges.',
    earned: (st) => st.completed >= 5,
  },
  {
    id: 'word-wizard',
    icon: '📚',
    title: 'Word Wizard',
    text: 'Complete ten module challenges.',
    earned: (st) => st.completed >= 10,
  },
  {
    id: 'on-a-roll',
    icon: '🔥',
    title: 'On a Roll',
    text: 'Practise three days in a row.',
    earned: (st) => st.streak >= 3,
  },
  {
    id: 'perfectionist',
    icon: '💎',
    title: 'Perfectionist',
    text: 'Score full marks on ten modules.',
    earned: (st) => st.perfect >= 10,
  },
  {
    id: 'python-pathfinder',
    icon: '🐍',
    title: 'Python Pathfinder',
    text: 'Finish every module in a Python class.',
    earned: (st) => st.perClass.some((c) => c.subject === 'python' && c.complete),
  },
  {
    id: 'ai-navigator',
    icon: '🤖',
    title: 'AI Navigator',
    text: 'Finish every module in an AI class.',
    earned: (st) => st.perClass.some((c) => c.subject === 'ai' && c.complete),
  },
  {
    id: 'halfway-hero',
    icon: '⭐',
    title: 'Halfway Hero',
    text: 'Complete half of all modules on the site.',
    earned: (st) => st.completed >= Math.ceil(st.totalModules / 2),
  },
  {
    id: 'grand-explorer',
    icon: '🏆',
    title: 'Grand Explorer',
    text: 'Complete every module challenge.',
    earned: (st) => st.completed >= st.totalModules && st.totalModules > 0,
  },
];

export function getBadges(state) {
  const stats = getStats(state);
  return BADGES.map((b) => ({ ...b, unlocked: b.earned(stats) }));
}

export function earnedBadgeIds(state) {
  const stats = getStats(state);
  return BADGES.filter((b) => b.earned(stats)).map((b) => b.id);
}
