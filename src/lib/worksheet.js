/* Abacus worksheet generation.
 *
 * Kept out of the component so it can be tested directly with node — this is
 * the only real logic on the site, and an invalid sum is visible to every
 * person who prints a sheet. See scripts/test-worksheet.mjs.
 */

/* Deterministic PRNG. The prerenderer renders the worksheet page at build time
   and the browser hydrates it; Math.random would produce different sums on each
   side and React would throw a hydration mismatch over every number on the
   page. Seeding from component state instead means server and first client
   render agree exactly, and "New worksheet" simply advances the seed. */
export function mulberry32(seed) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* One sum.
 *
 * The rule that separates this from a random number list comes from the bead
 * frame rather than from arithmetic: **the running total is never negative at
 * any row**. A soroban cannot show a negative number, so a sum that dips below
 * zero is one a child physically cannot complete, and they conclude either that
 * the sheet is wrong or that they are.
 *
 * Note what is deliberately *not* constrained. An earlier version also capped
 * the running total at the digit range, which is pedagogically wrong: "1-digit
 * practice" means the terms are single digits, and the total growing past nine
 * is exactly the carry work the exercise is for. That cap also created a corner
 * — total at the ceiling, addition-only — from which the generator could escape
 * only by subtracting, so "addition only" sheets silently contained
 * subtractions. Dropping the cap removes the corner and the rejection sampling
 * with it: every row below is legal by construction rather than by retry.
 */
export function buildSum(rand, { digits, rows, subtract }) {
  const max = 10 ** digits - 1;
  const min = digits === 1 ? 1 : 10 ** (digits - 1);
  const terms = [];
  let total = 0;

  for (let i = 0; i < rows; i++) {
    const value = min + Math.floor(rand() * (max - min + 1));
    /* Subtract only where it is legal: never on the opening row, and never by
       more than the child currently has on the frame. */
    const wantsSubtract = subtract && i > 0 && rand() < 0.4;
    const sign = wantsSubtract && value <= total ? -1 : 1;

    terms.push(sign * value);
    total += sign * value;
  }

  return { terms, answer: total };
}

/** A whole sheet, from one seed. Same inputs always give the same sheet. */
export function buildSheet({ seed, digits, rows, subtract, count }) {
  const rand = mulberry32(seed * 7919 + digits * 31 + rows * 17 + count + (subtract ? 1 : 0));
  return Array.from({ length: count }, () => buildSum(rand, { digits, rows, subtract }));
}
