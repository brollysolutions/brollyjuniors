import { useSyncExternalStore } from 'react';

/* Learner progress, kept on the child's own device.
   Nothing is uploaded — this is a local-only encouragement layer. */

const KEY = 'brolly-progress-v1';

const EMPTY = { xp: 0, modules: {}, streak: { count: 0, lastDay: null } };

export const XP_PER_CORRECT = 10;
export const XP_PERFECT_BONUS = 20;

export const LEVELS = [
  { min: 0, name: 'Curious Beginner', icon: '🌱' },
  { min: 150, name: 'Explorer', icon: '🧭' },
  { min: 400, name: 'Builder', icon: '🔧' },
  { min: 800, name: 'Problem Solver', icon: '🧩' },
  { min: 1400, name: 'Maker', icon: '🛠️' },
  { min: 2200, name: 'Innovator', icon: '💡' },
  { min: 3200, name: 'Trailblazer', icon: '🚀' },
  { min: 4500, name: 'Brolly Champion', icon: '🏆' },
];

export function moduleKey(subject, klass, index) {
  return `${subject}:${klass}:${index}`;
}

function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysBetween(a, b) {
  const parse = (s) => {
    const [y, m, d] = s.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((parse(b) - parse(a)) / 86400000);
}

function load() {
  if (typeof window === 'undefined') return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    return {
      xp: Number(parsed.xp) || 0,
      modules: parsed.modules && typeof parsed.modules === 'object' ? parsed.modules : {},
      streak: parsed.streak && typeof parsed.streak === 'object'
        ? { count: Number(parsed.streak.count) || 0, lastDay: parsed.streak.lastDay || null }
        : { count: 0, lastDay: null },
    };
  } catch {
    /* Corrupt or unavailable storage should never break the page. */
    return EMPTY;
  }
}

let state = load();
const listeners = new Set();

function commit(next) {
  state = next;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* Private browsing / quota — keep the in-memory copy and carry on. */
    }
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

const getSnapshot = () => state;
const getServerSnapshot = () => EMPTY;

export function useProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function getProgress() {
  return state;
}

/* Records a finished quiz. XP is only awarded for beating your previous best,
   so replaying to learn is encouraged but farming the same module is not. */
export function recordQuiz(subject, klass, index, correct, total) {
  const key = moduleKey(subject, klass, index);
  const prev = state.modules[key] || { best: 0, total, bestXp: 0, attempts: 0 };

  const scoreXp = correct * XP_PER_CORRECT + (correct === total ? XP_PERFECT_BONUS : 0);
  const earned = Math.max(0, scoreXp - (prev.bestXp || 0));

  const day = todayKey();
  let streak = state.streak;
  if (streak.lastDay !== day) {
    const gap = streak.lastDay ? daysBetween(streak.lastDay, day) : null;
    streak = { count: gap === 1 ? streak.count + 1 : 1, lastDay: day };
  }

  commit({
    xp: state.xp + earned,
    modules: {
      ...state.modules,
      [key]: {
        best: Math.max(prev.best || 0, correct),
        total,
        bestXp: Math.max(prev.bestXp || 0, scoreXp),
        attempts: (prev.attempts || 0) + 1,
      },
    },
    streak,
  });

  return { earned, isBest: correct > (prev.best || 0), previousBest: prev.best || 0 };
}

export function resetProgress() {
  commit({ ...EMPTY, modules: {}, streak: { count: 0, lastDay: null } });
}

export function getModuleScore(stateOrNull, subject, klass, index) {
  const s = stateOrNull || state;
  return s.modules[moduleKey(subject, klass, index)] || null;
}

export function getLevel(xp) {
  let i = 0;
  for (let n = 0; n < LEVELS.length; n += 1) if (xp >= LEVELS[n].min) i = n;
  const current = LEVELS[i];
  const next = LEVELS[i + 1] || null;
  const span = next ? next.min - current.min : 1;
  const into = next ? xp - current.min : 1;
  return {
    index: i,
    number: i + 1,
    name: current.name,
    icon: current.icon,
    next,
    toNext: next ? next.min - xp : 0,
    percent: next ? Math.max(0, Math.min(100, Math.round((into / span) * 100))) : 100,
  };
}
