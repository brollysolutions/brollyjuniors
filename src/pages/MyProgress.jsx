import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CtaBand } from '../components/Shared.jsx';
import { useProgress, resetProgress, getLevel, XP_PER_CORRECT } from '../lib/progress.js';
import { getStats, getBadges } from '../lib/achievements.js';

export default function MyProgress() {
  const state = useProgress();
  const stats = getStats(state);
  const badges = getBadges(state);
  const level = getLevel(state.xp);
  const [confirming, setConfirming] = useState(false);

  const unlocked = badges.filter((b) => b.unlocked).length;
  const started = stats.completed > 0;

  return (
    <>
      <PageHero
        eyebrow="Your learning journey"
        title="My Progress"
        subtitle={
          started
            ? `You have taken on ${stats.completed} of ${stats.totalModules} module challenges and earned ${state.xp} XP so far.`
            : 'Take a module challenge anywhere on the site and your XP, badges and streak will start collecting here.'
        }
        chips={[
          { strong: `${state.xp} XP`, span: 'Total earned' },
          { strong: `Level ${level.number}`, span: level.name },
          { strong: `${unlocked}/${badges.length}`, span: 'Badges' },
          { strong: `${stats.streak} day${stats.streak === 1 ? '' : 's'}`, span: 'Current streak' },
        ]}
      />

      {/* Level bar */}
      <section className="section-tight">
        <div className="container">
          <div className="level-card">
            <div className="level-head">
              <span className="level-icon" aria-hidden="true">{level.icon}</span>
              <div>
                <strong>Level {level.number} · {level.name}</strong>
                {level.next ? (
                  <span>{level.toNext} XP to reach {level.next.name} {level.next.icon}</span>
                ) : (
                  <span>Top level reached. Nothing left to climb.</span>
                )}
              </div>
            </div>
            <div
              className="level-bar"
              role="progressbar"
              aria-valuenow={level.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progress to next level"
            >
              <span style={{ width: `${level.percent}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Achievements</span>
            <h2 className="section-title">Badge cabinet</h2>
            <p className="section-lead">
              {unlocked === 0
                ? 'Nothing unlocked yet — the first badge takes one challenge.'
                : `${unlocked} of ${badges.length} unlocked. Keep going.`}
            </p>
          </div>
          <div className="badge-grid">
            {badges.map((b) => (
              <div className={`badge-card${b.unlocked ? ' is-unlocked' : ''}`} key={b.id}>
                <span className="badge-icon" aria-hidden="true">{b.unlocked ? b.icon : '🔒'}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                {b.unlocked && <span className="badge-flag">Unlocked</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-class progress */}
      <section className="section-tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Course by course</span>
            <h2 className="section-title">Where you are up to</h2>
          </div>
          <div className="track-grid">
            {Object.keys(stats.perSubject).map((key) => {
              const s = stats.perSubject[key];
              return (
                <div className="track-card" key={key}>
                  <h3>
                    <span aria-hidden="true">{s.icon}</span> {s.label}
                  </h3>
                  <p className="track-total">
                    {s.done} of {s.total} modules · {s.perfect} perfect
                  </p>
                  <ul className="track-rows">
                    {s.classes.map((c) => {
                      const pct = Math.round((c.done / c.total) * 100);
                      return (
                        <li key={c.klass}>
                          <Link to={c.href}>Class {c.klass}</Link>
                          <div className="track-bar">
                            <span style={{ width: `${pct}%` }} />
                          </div>
                          <span className="track-num">
                            {c.done}/{c.total}
                            {c.complete && <span aria-label="class complete"> 🏅</span>}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works + reset */}
      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>How XP works</h2>
            <ul>
              <li>{XP_PER_CORRECT} XP for every correct answer</li>
              <li>20 bonus XP for a perfect round</li>
              <li>Replaying only adds XP if you beat your previous best</li>
              <li>Practise on separate days to build a streak</li>
            </ul>
          </div>
          <div className="prose">
            <h2>Where this is stored</h2>
            <p>
              All of it stays in this browser on this device. Nothing is uploaded, nothing is shared and no
              account is needed. Clearing your browser data — or the button below — wipes it.
            </p>
            {confirming ? (
              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    resetProgress();
                    setConfirming(false);
                  }}
                >
                  Yes, erase everything
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setConfirming(false)}>
                  Keep my progress
                </button>
              </div>
            ) : (
              <div className="btn-row">
                <button type="button" className="btn btn-outline" onClick={() => setConfirming(true)}>
                  Reset my progress
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand variant="family" />
    </>
  );
}
