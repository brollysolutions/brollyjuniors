import { subjects } from './moduleDetail.js';

/* Builds a six-question challenge for any module.
   Every question — and every wrong option — is real authored curriculum text.
   Nothing here is invented at runtime.

   The shuffle is seeded from the module's identity, so a given module always
   produces the same quiz in the same order (stable across renders and reloads). */

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(list, rand) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* Flat pools of every vocabulary term and every project in a subject,
   used to source plausible wrong answers. */
const pools = {};
function getPool(subjectKey) {
  if (pools[subjectKey]) return pools[subjectKey];
  const s = subjects[subjectKey];
  const vocab = [];
  const projects = [];
  Object.keys(s.curriculum).forEach((klass) => {
    s.curriculum[klass].modules.forEach((m, i) => {
      projects.push(m.project);
      const seed = (s.seeds[klass] || [])[i];
      (seed?.vocab || []).forEach(([word, meaning]) => vocab.push({ word, meaning }));
    });
  });
  pools[subjectKey] = { vocab, projects };
  return pools[subjectKey];
}

/* Splits an authored misconception into the myth and the correction.
   Format throughout the curriculum is: “the myth” followed by the reality. */
const MYTH_RE = /^“([^”]+)”\s*(.+)$/s;

function pickDistractors(candidates, isBad, count, rand) {
  const seen = new Set();
  const out = [];
  for (const c of shuffled(candidates, rand)) {
    if (out.length >= count) break;
    const text = typeof c === 'string' ? c : c.meaning;
    if (isBad(c) || seen.has(text)) continue;
    seen.add(text);
    out.push(text);
  }
  return out;
}

export function buildQuiz(subjectKey, klass, index) {
  const s = subjects[subjectKey];
  if (!s) return null;
  const data = s.curriculum[klass];
  const module = data?.modules[index];
  const seed = (s.seeds[klass] || [])[index];
  if (!module || !seed) return null;

  const rand = mulberry32(hashSeed(`${subjectKey}:${klass}:${index}`));
  const pool = getPool(subjectKey);
  const questions = [];

  /* 1–3. What does this word mean? */
  (seed.vocab || []).forEach(([word, meaning]) => {
    const wrong = pickDistractors(
      pool.vocab,
      (v) => v.word === word || v.meaning === meaning,
      3,
      rand,
    );
    if (wrong.length < 3) return;
    questions.push({
      type: 'vocab',
      tag: 'Word bank',
      prompt: `In this module, what does “${word}” mean?`,
      options: shuffled([meaning, ...wrong], rand),
      answer: meaning,
      explain: `${word} — ${meaning}`,
    });
  });

  /* 4. Which project belongs to this module? */
  const wrongProjects = pickDistractors(pool.projects, (p) => p === module.project, 3, rand);
  if (wrongProjects.length === 3) {
    questions.push({
      type: 'project',
      tag: 'Project lab',
      prompt: 'Which project do you build in this module?',
      options: shuffled([module.project, ...wrongProjects], rand),
      answer: module.project,
      explain: `Module ${index + 1} builds: ${module.project}`,
    });
  }

  /* 5–6. Myth or fact? One of each, so the answer is never predictable. */
  const mythMatch = MYTH_RE.exec(seed.misconception || '');
  if (mythMatch) {
    questions.push({
      type: 'myth',
      tag: 'Myth or fact',
      prompt: `“${mythMatch[1]}”`,
      options: ['Fact', 'Myth'],
      answer: 'Myth',
      explain: mythMatch[2],
    });
  }
  if (seed.funFact) {
    questions.push({
      type: 'myth',
      tag: 'Myth or fact',
      prompt: seed.funFact,
      options: ['Fact', 'Myth'],
      answer: 'Fact',
      explain: 'True — that is a genuine fact from this module.',
    });
  }

  return shuffled(questions, rand);
}
