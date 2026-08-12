import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, FaqList, CtaBand } from '../components/Shared.jsx';
import { buildSheet } from '../lib/worksheet.js';

/* Free abacus worksheet generator.
 *
 * This page exists for a reason the rest of the site does not: it is meant to
 * be linked to. The site's largest structural deficit is referring domains — 6
 * against a competitor's 637 — and nobody links to a class page. They link to a
 * tool they can use for free. The competitor taking the most organic traffic in
 * this market does it almost entirely on a worksheet generator and an abacus
 * simulator, not on its course pages.
 *
 * Everything runs in the browser. No API, no PDF library — printing is the
 * browser's own print dialogue against the print stylesheet in global.css,
 * which is what a parent actually wants and costs the bundle nothing.
 */

const DIGIT_OPTIONS = [
  { value: 1, label: 'Single digit', hint: '1–9' },
  { value: 2, label: 'Two digits', hint: '10–99' },
  { value: 3, label: 'Three digits', hint: '100–999' },
];
const ROW_OPTIONS = [3, 4, 5, 6];
const COUNT_OPTIONS = [20, 30, 40];

const FAQS = [
  {
    q: 'How many sums a day should a child do?',
    a: 'Ten minutes, most days, beats forty minutes once a week. Abacus is a motor and visualisation skill and it decays quickly without frequent short repetition. One column of ten sums daily is a realistic target for a child in the first few levels.',
  },
  {
    q: 'Should my child use the abacus or do these in their head?',
    a: 'On the frame first, always. Mental calculation is the end of the pathway, not a shortcut through it — the visualisation a child eventually works with is a memory of the beads their own hands moved. Move to mental work only when the physical version is fast and accurate.',
  },
  {
    q: 'Why does the answer never go below zero?',
    a: 'Because a soroban cannot show a negative number. Generators that ignore this produce sums a child physically cannot complete on the frame, which teaches them that the worksheet is wrong or that they are. Here, subtraction is only used where the running total is already large enough to take it away — checked at every row, not just at the end.',
  },
  {
    q: 'Can I use these worksheets in my own class?',
    a: 'Yes. Print as many as you like for your students, at home or in a centre. We would rather more children practised properly than fewer.',
  },
];

export default function AbacusWorksheets() {
  const [digits, setDigits] = useState(1);
  const [rows, setRows] = useState(4);
  const [subtract, setSubtract] = useState(false);
  const [count, setCount] = useState(20);
  const [showAnswers, setShowAnswers] = useState(false);
  const [seed, setSeed] = useState(1);

  const sums = useMemo(
    () => buildSheet({ seed, digits, rows, subtract, count }),
    [seed, digits, rows, count, subtract]
  );

  return (
    <>
      <div className="no-print">
        <PageHero
          eyebrow="Free tool"
          title="Free abacus worksheets, generated and printable."
          subtitle="Choose the number of digits, how many rows per sum and whether to include subtraction. Every sum is built so the running total never goes negative — the one thing a soroban cannot show. No sign-up, no download."
          image="/images/abacus.svg"
          imageAlt="A wooden soroban abacus with amber and teal beads"
          chips={[
            { strong: 'Free', span: 'No sign-up' },
            { strong: 'Printable', span: 'A4 friendly' },
            { strong: 'Answer key', span: 'Optional' },
          ]}
        />
      </div>

      <section className="section-tight">
        <div className="container">
          {/* ---------------------------------------------------------------
              Controls. Hidden when printing — a parent printing this wants the
              sums and nothing else on the paper.
              ------------------------------------------------------------- */}
          <div className="worksheet-controls no-print">
            <fieldset>
              <legend>Number size</legend>
              <div className="control-row">
                {DIGIT_OPTIONS.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    className={`chip-btn${digits === d.value ? ' is-active' : ''}`}
                    aria-pressed={digits === d.value}
                    onClick={() => setDigits(d.value)}
                  >
                    {d.label} <span>{d.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Rows per sum</legend>
              <div className="control-row">
                {ROW_OPTIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`chip-btn${rows === r ? ' is-active' : ''}`}
                    aria-pressed={rows === r}
                    onClick={() => setRows(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Sums on the sheet</legend>
              <div className="control-row">
                {COUNT_OPTIONS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`chip-btn${count === c ? ' is-active' : ''}`}
                    aria-pressed={count === c}
                    onClick={() => setCount(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Operations</legend>
              <div className="control-row">
                <button
                  type="button"
                  className={`chip-btn${!subtract ? ' is-active' : ''}`}
                  aria-pressed={!subtract}
                  onClick={() => setSubtract(false)}
                >
                  Addition only
                </button>
                <button
                  type="button"
                  className={`chip-btn${subtract ? ' is-active' : ''}`}
                  aria-pressed={subtract}
                  onClick={() => setSubtract(true)}
                >
                  Add and subtract
                </button>
              </div>
            </fieldset>

            <div className="worksheet-actions">
              <button type="button" className="btn btn-primary" onClick={() => setSeed((s) => s + 1)}>
                New worksheet
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  if (typeof window !== 'undefined') window.print();
                }}
              >
                Print or save as PDF
              </button>
              <label className="answer-toggle">
                <input
                  type="checkbox"
                  checked={showAnswers}
                  onChange={(e) => setShowAnswers(e.target.checked)}
                />
                Show answer key
              </label>
            </div>
          </div>

          {/* ---------------------------------------------------------------
              The sheet itself.
              ------------------------------------------------------------- */}
          <div className="worksheet">
            <div className="worksheet-head">
              <h2>Abacus practice</h2>
              <div className="worksheet-meta">
                <span>Name: ________________</span>
                <span>Date: ____________</span>
                <span>
                  {digits}-digit · {rows} rows · {subtract ? 'add and subtract' : 'addition'}
                </span>
              </div>
            </div>

            <ol className="worksheet-grid">
              {sums.map((sum, i) => (
                <li key={i} className="sum">
                  <span className="sum-number">{i + 1}</span>
                  <div className="sum-terms">
                    {sum.terms.map((t, j) => (
                      <span key={j} className="term">
                        {j === 0 ? t : `${t < 0 ? '−' : '+'} ${Math.abs(t)}`}
                      </span>
                    ))}
                    <span className="sum-rule" aria-hidden="true" />
                    <span className="sum-answer">{showAnswers ? sum.answer : ''}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="worksheet-footer">
              brollyjuniors.com · Free abacus worksheets · Brolly Juniors, Nizampet, Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
          Everything below is for the reader and the crawler, not the printer.
          ----------------------------------------------------------------- */}
      <section className="section no-print">
        <div className="container prose">
          <h2>How to use these worksheets</h2>
          <p>
            A worksheet is practice, not teaching. It is useful once a child already knows the
            bead movements for the level they are on, and close to useless before that — a child
            who has not been taught the complement rule for a particular number will simply guess,
            and guessing practised daily is worse than no practice at all.
          </p>
          <p>
            Start with single digits and three or four rows. Move up only when a full column of ten
            sums is both accurate and unhurried. Speed follows accuracy; it does not lead it.
          </p>
          <p>
            Work on the frame, not in the head. Mental calculation is the end of the abacus
            pathway rather than a shortcut through it — the image a child eventually visualises is
            a memory of beads their own hands have moved thousands of times.
          </p>

          <h2>What this generator does differently</h2>
          <p>
            Most free abacus worksheets are random number lists. The rule that matters here comes
            from the bead frame rather than from arithmetic:
          </p>
          <ul>
            <li>
              <strong>The running total never goes negative.</strong> A soroban cannot represent a
              negative number, so a sum that dips below zero is one a child physically cannot
              complete. They conclude either that the sheet is wrong or that they are. Subtraction
              is only ever used where the child already has enough on the frame to take it away.
            </li>
            <li>
              <strong>Every term is the size you asked for.</strong> A two-digit sheet uses
              two-digit numbers throughout, not a mixture that quietly drifts easier.
            </li>
          </ul>
          <p>
            Both are enforced at every row, not just on the final answer. Note that the{' '}
            <em>total</em> is free to grow past the size of the terms — a column of single digits
            adding up to 34 is not a mistake, it is the carrying practice the exercise exists for.
          </p>
          <p>
            Nothing is stored and nothing is uploaded — the sums are generated in your browser, and
            printing uses your own print dialogue, so "Save as PDF" works exactly as it does on any
            other page.
          </p>

          <h2>Related reading</h2>
          <p>
            If you are still deciding whether abacus is worth the commitment, we have written an{' '}
            <Link to="/resources/is-abacus-good-for-kids">honest assessment of what it does and
            does not deliver</Link>, and a comparison of{' '}
            <Link to="/resources/abacus-vs-vedic-maths-for-children">abacus against Vedic Maths</Link>{' '}
            for children. Our own{' '}
            <Link to="/junior-skills/abacus">ten-level abacus pathway in Hyderabad</Link> runs in
            batches of eight.
          </p>
        </div>
      </section>

      <div className="no-print">
        <FaqList items={FAQS} title="Questions parents ask about abacus practice" />
        <CtaBand />
      </div>
    </>
  );
}
