import { useParams, Navigate, Link } from 'react-router-dom';
import { getModuleDetail, moduleIndexFromSlug } from '../data/moduleDetail.js';
import { PageHero, CtaBand } from '../components/Shared.jsx';
import ModuleQuiz from '../components/ModuleQuiz.jsx';

export default function ModulePage({ subject }) {
  const { classSlug, moduleSlug } = useParams();
  const klass = Number((classSlug || '').replace('class-', ''));
  const index = moduleIndexFromSlug(moduleSlug);
  const d = getModuleDetail(subject, klass, index);

  if (!d) {
    const fallback = klass ? `/${subject === 'ai' ? 'ai-for-kids' : 'python-for-kids'}` : '/programs';
    return <Navigate to={fallback} replace />;
  }

  const { module } = d;

  return (
    <>
      <PageHero
        eyebrow={`${d.subject.label} · Class ${d.klass} · Module ${d.number} of ${d.total}`}
        title={module.title}
        subtitle={d.hook}
        image={d.image}
        imageAlt={d.imageAlt}
        chips={[
          { strong: '8 sessions', span: `Sessions ${d.sessionsFrom}–${d.sessionsTo}` },
          { strong: '4 weeks', span: 'Typical pace' },
          { strong: d.level, span: 'Level' },
          { strong: `Class ${d.klass}`, span: d.subject.course },
        ]}
      >
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to={d.subject.base}>{d.subject.label}</Link>
          <span aria-hidden="true">›</span>
          <Link to={d.classHref}>Class {d.klass}</Link>
          <span aria-hidden="true">›</span>
          <span>Module {d.number}</span>
        </nav>
      </PageHero>

      {/* The big idea */}
      <section className="section-tight">
        <div className="container">
          <div className="big-idea">
            <span className="eyebrow">The big idea</span>
            <p className="big-idea-text">{d.bigIdea}</p>
            {d.why && (
              <div className="big-idea-why">
                <strong>Why it matters</strong>
                <p>{d.why}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What you actually learn */}
      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Unpacked</span>
            <h2 className="section-title">What you will actually learn</h2>
            <p className="section-lead">
              Three core ideas, each taught with worked examples and then practised until it feels obvious.
            </p>
          </div>
          <div className="concept-grid">
            {d.concepts.map((c, i) => (
              <article className="concept-card" key={c.topic}>
                <span className="concept-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.topic}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curiosity callouts */}
      {(d.funFact || d.misconception) && (
        <section className="section-tight">
          <div className="container">
            <div className="callout-row">
              {d.funFact && (
                <div className="callout callout-fact">
                  <span className="callout-icon" aria-hidden="true">💡</span>
                  <div>
                    <strong>Did you know?</strong>
                    <p>{d.funFact}</p>
                  </div>
                </div>
              )}
              {d.misconception && (
                <div className="callout callout-myth">
                  <span className="callout-icon" aria-hidden="true">🌀</span>
                  <div>
                    <strong>Common mix-up</strong>
                    <p>{d.misconception}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Session by session */}
      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Session by session</span>
            <h2 className="section-title">Your 8-session journey</h2>
            <p className="section-lead">
              Sessions {d.sessionsFrom}–{d.sessionsTo} of the 72-session year, at two one-hour sessions per week.
            </p>
          </div>
          <ol className="session-timeline">
            {d.sessions.map((s) => (
              <li key={s.n}>
                <span className="session-dot">{s.n}</span>
                <div className="session-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project lab */}
      <section className="section-tight">
        <div className="container">
          <div className="project-lab">
            <div>
              <span className="eyebrow">Project lab</span>
              <h2 className="section-title">{module.project}</h2>
              <p>
                Every module ends with something the student built themselves and can demonstrate. This is the
                piece that goes into their portfolio and gets explained out loud at the end of session {d.sessionsTo}.
              </p>
              {d.tryThis && (
                <div className="try-this">
                  <strong>Try this at home</strong>
                  <p>{d.tryThis}</p>
                </div>
              )}
            </div>
            <div className="project-check">
              <h3>It is finished when</h3>
              <ul>
                {d.successChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes + word bank */}
      <section>
        <div className="container split">
          <div className="prose">
            <h2>By the end of this module</h2>
            <p>Students finishing Module {d.number} can:</p>
            <ul>
              {d.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          {d.vocab.length > 0 && (
            <div className="prose">
              <h2>Word bank</h2>
              <p>The vocabulary introduced here, in plain language:</p>
              <dl className="word-bank">
                {d.vocab.map(([word, meaning]) => (
                  <div key={word}>
                    <dt>{word}</dt>
                    <dd>{meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {/* Module challenge — key resets quiz state when moving between modules */}
      <ModuleQuiz
        key={`${subject}-${d.klass}-${d.index}`}
        subject={subject}
        klass={d.klass}
        index={d.index}
        moduleTitle={module.title}
        nextHref={d.next?.href}
      />

      {/* Prev / next */}
      <section className="section-tight">
        <div className="container">
          <nav className="module-nav" aria-label="Module navigation">
            {d.prev ? (
              <Link to={d.prev.href} className="module-nav-link">
                <span>← Module {d.prev.number}</span>
                <strong>{d.prev.title}</strong>
              </Link>
            ) : (
              <span className="module-nav-link is-empty" aria-hidden="true" />
            )}
            <Link to={d.classHref} className="module-nav-all">
              All {d.total} modules
            </Link>
            {d.next ? (
              <Link to={d.next.href} className="module-nav-link align-end">
                <span>Module {d.next.number} →</span>
                <strong>{d.next.title}</strong>
              </Link>
            ) : (
              <span className="module-nav-link is-empty" aria-hidden="true" />
            )}
          </nav>
        </div>
      </section>

      <CtaBand variant="family" />
    </>
  );
}
