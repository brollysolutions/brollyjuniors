import { programs } from '../data/site.js';
import { catalogSections, topicHref } from '../data/catalog/index.js';

/* Which course a page is about.
 *
 * The trial form no longer asks the parent to pick a programme from a list —
 * it asks for a name, a number and an email, and works the course out from
 * wherever the parent pressed the button. That answer has to come from
 * somewhere, and hand-maintaining a path→course table would drift the first
 * time a topic is added to the catalogue.
 *
 * So the table is built from the same data the navbar and the routes are built
 * from: every owned or linked topic in the catalogue, then the seven headline
 * programmes on top — the headline title ("Abacus Mastery") is the name used on
 * the programme's own page, and it should win over the menu's shorter label
 * ("Abacus") when both describe the same URL.
 *
 * The Schools section is deliberately absent: /schools/teacher-training is a
 * partnership enquiry, not a course a child takes a trial class in.
 */
const COURSE_BY_PATH = (() => {
  const map = new Map();
  for (const section of catalogSections) {
    for (const group of section.groups) {
      for (const topic of group.items) {
        map.set(topicHref(section, topic), topic.name);
      }
    }
  }
  for (const program of programs) map.set(program.to, program.title);
  return map;
})();

function normalise(pathname) {
  const path = String(pathname || '/').replace(/\/+$/, '');
  return path || '/';
}

/** The course a path is about, or null if it is not about one. */
export function courseForPath(pathname) {
  const path = normalise(pathname);
  if (COURSE_BY_PATH.has(path)) return COURSE_BY_PATH.get(path);

  /* Deeper pages belong to the course above them: a parent reading
     /ai-for-kids/class-8/module-3 is reading about AI, and the form should say
     so rather than shrug. Longest match wins, so a topic nested under another
     is not swallowed by its parent. */
  let best = null;
  for (const [base, name] of COURSE_BY_PATH) {
    if (base === '/') continue;
    if (path.startsWith(`${base}/`) && (!best || base.length > best.base.length)) {
      best = { base, name };
    }
  }
  return best ? best.name : null;
}
