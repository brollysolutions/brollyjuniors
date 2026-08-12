/* Exhaustive check on the abacus worksheet generator.
 *
 *   node scripts/test-worksheet.mjs
 *
 * The generator is the only real logic on the site and its output goes onto
 * paper in front of a child, so it is worth proving rather than spot-checking.
 * Every combination of settings, across many seeds, asserting the rule that
 * comes from the bead frame — the running total is never negative at any row —
 * plus the things a worksheet has to get right to be usable at all: terms stay
 * inside the digit range, the stated answer matches the arithmetic, the row
 * count is what was asked for, "addition only" really means it, and the same
 * seed always gives the same sheet.
 *
 * This suite caught a real defect: an earlier version capped the running total
 * at the digit range, and when a sheet hit that ceiling the fallback subtracted
 * to escape it — so "addition only" worksheets contained subtractions.
 */

import { buildSheet } from '../src/lib/worksheet.js';

const DIGITS = [1, 2, 3];
const ROWS = [3, 4, 5, 6];
const COUNTS = [20, 30, 40];
const SUBTRACT = [false, true];
const SEEDS = 60;

let sums = 0;
const failures = [];

function fail(config, index, reason, sum) {
  if (failures.length < 10) failures.push({ config, index, reason, terms: sum.terms, answer: sum.answer });
}

for (const digits of DIGITS) {
  for (const rows of ROWS) {
    for (const count of COUNTS) {
      for (const subtract of SUBTRACT) {
        for (let seed = 1; seed <= SEEDS; seed += 1) {
          const config = `${digits}d ${rows}r ${count}n ${subtract ? '+-' : '+'} seed${seed}`;
          const sheet = buildSheet({ seed, digits, rows, subtract, count });

          if (sheet.length !== count) failures.push({ config, reason: `sheet has ${sheet.length} sums, expected ${count}` });

          sheet.forEach((sum, i) => {
            sums += 1;
            const max = 10 ** digits - 1;

            const min = digits === 1 ? 1 : 10 ** (digits - 1);

            if (sum.terms.length !== rows) fail(config, i, `has ${sum.terms.length} rows, expected ${rows}`, sum);
            if (sum.terms[0] <= 0) fail(config, i, 'opens with a non-positive term', sum);
            if (!subtract && sum.terms.some((t) => t < 0)) fail(config, i, 'subtraction present when disabled', sum);
            if (sum.terms.some((t) => t === 0)) fail(config, i, 'contains a zero term', sum);

            /* Every term must be a number of the size being practised — that is
               what "2-digit worksheet" means to the person printing it. */
            for (const t of sum.terms) {
              const v = Math.abs(t);
              if (v < min || v > max) fail(config, i, `term ${t} outside the ${digits}-digit range ${min}-${max}`, sum);
            }

            let running = 0;
            for (const t of sum.terms) {
              running += t;
              if (running < 0) { fail(config, i, `running total went negative (${running})`, sum); break; }
            }
            if (running !== sum.answer) fail(config, i, `stated answer ${sum.answer} != computed ${running}`, sum);
          });
        }
      }
    }
  }
}

/* Determinism: the prerendered HTML and the browser's first render must agree,
   or React tears down every number on the page. */
const a = JSON.stringify(buildSheet({ seed: 3, digits: 2, rows: 5, subtract: true, count: 30 }));
const b = JSON.stringify(buildSheet({ seed: 3, digits: 2, rows: 5, subtract: true, count: 30 }));
if (a !== b) failures.push({ config: 'determinism', reason: 'same seed produced a different sheet' });

const c = JSON.stringify(buildSheet({ seed: 4, digits: 2, rows: 5, subtract: true, count: 30 }));
if (a === c) failures.push({ config: 'variety', reason: 'different seeds produced an identical sheet' });

const configs = DIGITS.length * ROWS.length * COUNTS.length * SUBTRACT.length * SEEDS;
console.log(`\n  worksheet: ${configs.toLocaleString()} sheets, ${sums.toLocaleString()} sums checked`);

if (failures.length) {
  console.error(`\n  ${failures.length} failure(s):`);
  for (const f of failures) console.error(`    ${f.config}${f.index != null ? ` #${f.index + 1}` : ''} — ${f.reason}${f.terms ? `  [${f.terms.join(', ')}] = ${f.answer}` : ''}`);
  process.exit(1);
}

console.log('  No problems found.\n');
