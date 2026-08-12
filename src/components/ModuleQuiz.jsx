import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildQuiz } from '../data/quizBank.js';
import { useProgress, recordQuiz, getModuleScore, getLevel, getProgress } from '../lib/progress.js';
import { BADGES, earnedBadgeIds } from '../lib/achievements.js';

/* The module challenge: six questions built from this module's own content. */
export default function ModuleQuiz({ subject, klass, index, moduleTitle, nextHref }) {
  const questions = useMemo(() => buildQuiz(subject, klass, index), [subject, klass, index]);
  const state = useProgress();

  const [stage, setStage] = useState('intro'); // intro | playing | done
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [result, setResult] = useState(null);
  const [newBadges, setNewBadges] = useState([]);

  if (!questions || questions.length === 0) return null;

  const best = getModuleScore(state, subject, klass, index);
  const total = questions.length;
  const q = questions[step];

  const start = () => {
    setStage('playing');
    setStep(0);
    setPicked(null);
    setCorrect(0);
    setResult(null);
    setNewBadges([]);
  };

  const choose = (option) => {
    if (picked !== null) return;
    setPicked(option);
    if (option === q.answer) setCorrect((c) => c + 1);
  };

  const advance = () => {
    const scored = correct;
    if (step + 1 < total) {
      setStep(step + 1);
      setPicked(null);
      return;
    }
    /* Compare badges before and after so we can celebrate only genuinely new ones.
       recordQuiz commits synchronously, so getProgress() is the post-quiz state
       while `state` from this render is still the pre-quiz snapshot. */
    const before = new Set(earnedBadgeIds(state));
    const outcome = recordQuiz(subject, klass, index, scored, total);
    const newly = BADGES.filter(
      (b) => !before.has(b.id) && earnedBadgeIds(getProgress()).includes(b.id),
    );
    setResult({ ...outcome, scored });
    setNewBadges(newly);
    setStage('done');
  };

  const pct = Math.round((correct / total) * 100);
  const level = getLevel(state.xp);

  return (
    <section className="section-tight">
      <div className="container">
        <div className="quiz-card">
          <div className="quiz-head">
            <div>
              <span className="eyebrow">Module challenge</span>
              <h2 className="section-title">Think you have got this?</h2>
            </div>
            <div className="quiz-xp" title="Your learner level">
              <span aria-hidden="true">{level.icon}</span>
              <div>
                <strong>{state.xp} XP</strong>
                <span>Level {level.number} · {level.name}</span>
              </div>
            </div>
          </div>

          {stage === 'intro' && (
            <div className="quiz-intro">
              <p>
                {total} quick questions drawn from this module — vocabulary, the project you build, and
                a myth-or-fact round. Every wrong answer explains itself, so a mistake still teaches you something.
              </p>
              <div className="quiz-meta">
                <span className="quiz-pill">🎯 {total} questions</span>
                <span className="quiz-pill">⚡ Up to {total * 10 + 20} XP</span>
                {best && (
                  <span className="quiz-pill is-best">
                    ★ Best so far: {best.best}/{best.total}
                  </span>
                )}
              </div>
              <button type="button" className="btn btn-primary" onClick={start}>
                {best ? 'Play again' : 'Start the challenge'}
              </button>
            </div>
          )}

          {stage === 'playing' && (
            <div className="quiz-play">
              <div className="quiz-progress" role="group" aria-label={`Question ${step + 1} of ${total}`}>
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`quiz-dot${i < step ? ' is-past' : ''}${i === step ? ' is-now' : ''}`}
                  />
                ))}
                <span className="quiz-count">
                  {step + 1} / {total}
                </span>
              </div>

              <span className="quiz-tag">{q.tag}</span>
              <h3 className="quiz-question">{q.prompt}</h3>

              <div className={`quiz-options${q.type === 'myth' ? ' is-binary' : ''}`}>
                {q.options.map((option) => {
                  let cls = 'quiz-option';
                  if (picked !== null) {
                    if (option === q.answer) cls += ' is-right';
                    else if (option === picked) cls += ' is-wrong';
                    else cls += ' is-muted';
                  }
                  return (
                    <button
                      type="button"
                      key={option}
                      className={cls}
                      onClick={() => choose(option)}
                      disabled={picked !== null}
                    >
                      {option}
                      {picked !== null && option === q.answer && <span aria-hidden="true"> ✓</span>}
                      {picked !== null && option === picked && option !== q.answer && (
                        <span aria-hidden="true"> ✕</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div aria-live="polite">
                {picked !== null && (
                  <div className={`quiz-feedback${picked === q.answer ? ' is-right' : ' is-wrong'}`}>
                    <strong>{picked === q.answer ? 'Correct!' : 'Not quite.'}</strong>
                    <p>{q.explain}</p>
                    <button type="button" className="btn btn-primary" onClick={advance}>
                      {step + 1 < total ? 'Next question →' : 'See my score →'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {stage === 'done' && result && (
            <div className="quiz-done">
              <div className="quiz-score">
                <div className="quiz-ring" style={{ '--pct': `${pct}%` }}>
                  <span>
                    {result.scored}
                    <small>/{total}</small>
                  </span>
                </div>
                <div>
                  <h3>
                    {pct === 100
                      ? 'Perfect round!'
                      : pct >= 67
                        ? 'Nicely done.'
                        : 'Good try — now you know where to look.'}
                  </h3>
                  <p>
                    {result.earned > 0 ? (
                      <>
                        You earned <strong>+{result.earned} XP</strong>
                        {result.isBest && result.previousBest > 0 ? ' for a new personal best.' : '.'}
                      </>
                    ) : (
                      <>No new XP this time — you have already scored higher on {moduleTitle}.</>
                    )}
                  </p>
                </div>
              </div>

              {newBadges.length > 0 && (
                <div className="quiz-unlocked">
                  <strong>Badge unlocked!</strong>
                  <div className="quiz-badge-row">
                    {newBadges.map((b) => (
                      <span className="quiz-badge" key={b.id}>
                        <span aria-hidden="true">{b.icon}</span> {b.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="btn-row">
                <button type="button" className="btn btn-outline" onClick={start}>
                  Try again
                </button>
                {nextHref && (
                  <Link to={nextHref} className="btn btn-primary">
                    Next module →
                  </Link>
                )}
                <Link to="/my-progress" className="btn btn-outline">
                  My progress
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
