import { useState } from 'react';

/* Interactive pieces shared by the programme pages.
 *
 * The brain games and Vedic maths source files were built from the same
 * template and carried the same two devices: a worked example whose steps stay
 * hidden until asked for, and a five-question challenge. The coding, robotics
 * and digital literacy files added two more: a tabbed syllabus and a
 * pick-an-input/see-the-steps explainer. All four are here rather than
 * duplicated per page so that a fix to the reveal timing or the answer marking
 * lands on every page at once, and so the CSS has one set of class names to
 * match.
 *
 * None of them takes any content of its own — the copy and the questions
 * belong to the page, which is where a reader would look for them.
 */

/* A single worked example, revealed on request.
 *
 * The reveal is the whole point. The answer is easy; the method is what the
 * page is actually selling, so showing the steps immediately would give away
 * the cheap half and bury the valuable one.
 */
export function TrickCard({ label, sum, answer, steps, note, showLabel, hideLabel }) {
  const [shown, setShown] = useState(false);

  return (
    <div className="prog-trick">
      <p className="prog-trick-label">{label}</p>
      <div className="prog-trick-sum" aria-live="polite">
        <span>{sum}</span>
        <span className={shown ? 'prog-trick-ans is-shown' : 'prog-trick-ans'}>
          {shown ? answer : '?'}
        </span>
      </div>

      <ol className="prog-trick-steps">
        {steps.map((step, i) => (
          <li key={i} className={shown ? 'is-shown' : undefined}>
            <span className="prog-trick-num" aria-hidden="true">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="prog-trick-foot">
        <button className="btn btn-primary" type="button" onClick={() => setShown((s) => !s)}>
          {shown ? hideLabel : showLabel}
        </button>
        <span className="note-line">{note}</span>
      </div>
    </div>
  );
}

/* A short multiple-choice run, for a parent and child to work through together.
 *
 * Deliberately not scored. The page says there is no score to worry about, and
 * keeping one would turn a shared activity into a test the child can fail in
 * front of their parent — which is the opposite of what gets a child to try the
 * next question.
 */
export function ChallengeQuiz({ items, noun = 'Challenge' }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);

  const item = items[index];
  const answered = picked !== null;
  const correct = picked === item.a;
  const isLast = index === items.length - 1;

  function next() {
    setPicked(null);
    setIndex(isLast ? 0 : index + 1);
  }

  return (
    <div className="prog-quiz">
      <div className="prog-quiz-prog" aria-hidden="true">
        {items.map((it, i) => (
          <span key={it.q} className={i < index ? 'is-done' : i === index ? 'is-now' : undefined} />
        ))}
      </div>

      <p className="prog-quiz-q">{item.q}</p>
      <p className="prog-quiz-hint">
        {noun} {index + 1} of {items.length} — {item.hint}
      </p>

      <div className="prog-quiz-opts" role="group" aria-label="Answer options">
        {item.opts.map((opt) => {
          /* Once answered, the right option is marked whichever way the child
             went — seeing the correct answer beside their own is the part that
             teaches. */
          const state = !answered
            ? undefined
            : opt === item.a
              ? 'is-right'
              : opt === picked
                ? 'is-wrong'
                : undefined;
          return (
            <button
              key={opt}
              type="button"
              className={state ? `prog-opt ${state}` : 'prog-opt'}
              disabled={answered}
              onClick={() => setPicked(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <p
        className={answered ? `prog-quiz-fb ${correct ? 'is-ok' : 'is-no'}` : 'prog-quiz-fb'}
        role="status"
        aria-live="polite"
      >
        {answered &&
          (correct
            ? `Great thinking! 🎉 ${item.why}`
            : `Not quite — the answer is ${item.a}. ${item.why}`)}
      </p>

      {answered && (
        <button className="btn btn-outline" type="button" onClick={next}>
          {isLast ? 'Start again' : `Next ${noun.toLowerCase()}`}
        </button>
      )}
    </div>
  );
}

/* A tabbed syllabus: one tab per learning block, one panel of detail.
 *
 * The coding, robotics and digital literacy source pages each carried five or
 * six curriculum blocks written as "what the child learns / what they do /
 * what they can do afterwards". Stacked as prose that is a wall of text no
 * parent reads; as tabs it is one block at a time, and the child's year is
 * legible at a glance from the tab strip alone.
 *
 * Each item: { key, label, title, intro, bullets, outcome }. A bullet is
 * either a plain string or { term, text }, which renders the term in bold —
 * the source's own convention, and the reason a bullet list here reads as a
 * syllabus rather than as a list of nouns.
 */
export function TopicTabs({ items, label, outcomeLabel = 'What the child can do after this block' }) {
  const [active, setActive] = useState(items[0].key);
  const topic = items.find((t) => t.key === active);

  /* Arrow keys move between tabs, which is what a screen reader user expects
     from a tablist and what the browser will not do on its own. */
  function onKeyDown(e) {
    const i = items.findIndex((t) => t.key === active);
    if (e.key === 'ArrowRight') setActive(items[(i + 1) % items.length].key);
    if (e.key === 'ArrowLeft') setActive(items[(i - 1 + items.length) % items.length].key);
  }

  return (
    <>
      <div className="ai-tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {items.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-controls={`panel-${t.key}`}
            aria-selected={active === t.key}
            tabIndex={active === t.key ? 0 : -1}
            className="ai-tab"
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        className="ai-tabpanel"
        role="tabpanel"
        id={`panel-${topic.key}`}
        aria-labelledby={`tab-${topic.key}`}
        tabIndex={0}
      >
        <h3>{topic.title}</h3>
        {topic.intro && <p>{topic.intro}</p>}
        {topic.bullets && (
          <ul>
            {topic.bullets.map((b) =>
              typeof b === 'string' ? (
                <li key={b}>{b}</li>
              ) : (
                <li key={b.term}>
                  <strong>{b.term}</strong> — {b.text}
                </li>
              )
            )}
          </ul>
        )}
        {topic.outcome && (
          <p className="ai-eg">
            <b>{outcomeLabel}:</b> {topic.outcome}
          </p>
        )}
      </div>
    </>
  );
}

/* Pick an input, watch the same three steps run on it.
 *
 * Robotics needs a child (and a parent) to understand one idea before any of
 * the rest makes sense: a robot senses, then decides against a rule, then
 * acts. Describing that loop takes a paragraph nobody remembers. Letting
 * someone press "wall ahead" and watch the three steps change takes seconds.
 *
 * Each option: { key, label, steps: [string per stepTitle], rule, message }.
 */
export function PickSteps({
  title,
  intro,
  prompt,
  options,
  stepTitles,
  note,
  ruleLabel = 'The rule it follows',
}) {
  const [active, setActive] = useState(options[0].key);
  const option = options.find((o) => o.key === active);

  return (
    <div className="ai-explain">
      <div className="prose">
        <h3>{title}</h3>
        {intro && <p>{intro}</p>}
        {prompt && <p>{prompt}</p>}
        <ul className="ai-pickbar" role="group" aria-label={title}>
          {options.map((o) => (
            <li key={o.key}>
              <button
                type="button"
                className="ai-pick"
                aria-pressed={active === o.key}
                onClick={() => setActive(o.key)}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
        {option.rule && (
          <p className="ai-eg">
            <b>{ruleLabel}:</b> {option.rule}
          </p>
        )}
        {note && <p className="note-line">{note}</p>}
      </div>

      <div className="ai-stepstack" aria-live="polite">
        {option.steps.map((text, i) => (
          <div key={stepTitles[i]}>
            <div className="ai-steprow">
              <span className="ai-stepnum" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h4>{stepTitles[i]}</h4>
                <p>{text}</p>
              </div>
            </div>
            {i < option.steps.length - 1 && (
              <p className="ai-arrow" aria-hidden="true">
                ↓
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Vocabulary, grouped by theme and browsed a theme at a time.
 *
 * Every language page — Telugu, Hindi, English, spoken English, the foreign
 * languages — carries the same block: eight or so themes, eight or so words in
 * each. Rendered flat that is sixty words nobody reads. One theme at a time is
 * how the words are taught, and how they are worth showing.
 *
 * `lang` matters: it tells the browser which script the word is in, so it
 * picks a font that can actually draw it and a screen reader says it in the
 * right language. It is not decoration.
 */
export function VocabTabs({ themes, label, lang }) {
  const [active, setActive] = useState(themes[0].key);
  const theme = themes.find((t) => t.key === active);

  function onKeyDown(e) {
    const i = themes.findIndex((t) => t.key === active);
    if (e.key === 'ArrowRight') setActive(themes[(i + 1) % themes.length].key);
    if (e.key === 'ArrowLeft') setActive(themes[(i - 1 + themes.length) % themes.length].key);
  }

  return (
    <>
      <div className="ai-tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {themes.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`vocab-tab-${t.key}`}
            aria-controls={`vocab-panel-${t.key}`}
            aria-selected={active === t.key}
            tabIndex={active === t.key ? 0 : -1}
            className="ai-tab"
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        className="grid-4"
        role="tabpanel"
        id={`vocab-panel-${theme.key}`}
        aria-labelledby={`vocab-tab-${theme.key}`}
        tabIndex={0}
      >
        {theme.words.map((w) => (
          <div className="card" key={w.term}>
            {w.icon && (
              <span className="icon" aria-hidden="true">
                {w.icon}
              </span>
            )}
            <h3 lang={lang}>{w.term}</h3>
            <p className="kv">{w.sub}</p>
            {w.gloss && <p>{w.gloss}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

/* A two-line exchange: what one person says, what the other says back.
 *
 * The romanised line is the reason this is a component rather than a list. A
 * parent who cannot read the script still needs to be able to say the sentence
 * at home, and that only works if the transliteration sits directly under the
 * script rather than in a separate column.
 */
export function PhraseCards({ items, lang }) {
  return (
    <div className="grid-3">
      {items.map((it) => (
        <div className="card" key={it.roman}>
          <h3 lang={lang}>{it.ask}</h3>
          <p className="kv">{it.roman}</p>
          <p>{it.askEnglish}</p>
          <p lang={lang}>
            <strong>{it.reply}</strong>
          </p>
          <p>{it.replyEnglish}</p>
        </div>
      ))}
    </div>
  );
}

/* Numbered rows carrying a heading, a paragraph and two labelled boxes.
 *
 * Used for the brain games learning areas and the Vedic maths learning stages.
 * A grid of cards would lose the ordering, which in both cases is the point —
 * these are sequences, not a menu.
 */
export function NumberedRows({ items, badge }) {
  return items.map((item, i) => (
    <div className="prog-row" key={item.title}>
      <div className="prog-row-num" aria-hidden="true">
        {badge ? (
          <span>
            <small>{badge}</small>
            <b>{i + 1}</b>
          </span>
        ) : (
          i + 1
        )}
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="prog-row-meta">
          <div>
            <strong>{item.exampleLabel || 'Example activity'}</strong>
            <span>{item.example}</span>
          </div>
          <div>
            <strong>{item.skillLabel || 'Skill involved'}</strong>
            <span>{item.skill}</span>
          </div>
        </div>
      </div>
    </div>
  ));
}
