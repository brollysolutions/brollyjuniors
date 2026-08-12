import { Link } from 'react-router-dom';
import { site, pillars } from '../data/site.js';
import { getModuleDetail, moduleHref } from '../data/moduleDetail.js';
import { useProgress, getModuleScore } from '../lib/progress.js';

export function PageHero({ eyebrow, title, subtitle, chips, image, imageAlt, children }) {
  const body = (
    <>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {subtitle && <p className="section-lead">{subtitle}</p>}
      {chips && chips.length > 0 && (
        <div className="chips">
          {chips.map((c) => (
            <div className="chip" key={c.strong}>
              <strong>{c.strong}</strong>
              <span>{c.span}</span>
            </div>
          ))}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className="page-hero">
      <div className="container">
        {image ? (
          <div className="page-hero-grid">
            <div>{body}</div>
            <div className="page-hero-art">
              <img src={image} alt={imageAlt || ''} width="480" height="360" />
            </div>
          </div>
        ) : (
          body
        )}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center = true }) {
  return (
    <div className={center ? 'center curriculum-head' : 'curriculum-head'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

/* Text beside an illustration. Pass reverse to flip the image to the left. */
export function MediaSplit({ image, imageAlt, caption, reverse = false, children }) {
  return (
    <div className={reverse ? 'media-split reverse' : 'media-split'}>
      <div className="prose">{children}</div>
      <figure className="media-figure">
        <img src={image} alt={imageAlt || ''} width="480" height="360" loading="lazy" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

export function ImageBand({ items }) {
  return (
    <div className="image-band">
      {items.map((it) => (
        <figure key={it.image}>
          <img src={it.image} alt={it.alt || ''} width="480" height="360" loading="lazy" />
          <figcaption>{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* Level / stage / module cards for the junior-skills and school curricula. */
export function StageTrack({ stages }) {
  return (
    <div className="stage-track">
      {stages.map((s) => (
        <article className="stage-card" key={s.title}>
          <div className="stage-top">
            <span className="stage-icon" aria-hidden="true">{s.icon}</span>
            <span className="stage-tag">{s.tag}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          {s.bullets && (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          {s.outcome && (
            <div className="stage-outcome">
              <strong>Outcome:</strong> {s.outcome}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export function Curriculum({ curriculum }) {
  if (!curriculum) return null;
  return (
    <section>
      <div className="container">
        <SectionHead
          eyebrow={curriculum.eyebrow}
          title={curriculum.title}
          lead={curriculum.lead}
        />
        <StageTrack stages={curriculum.stages} />
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <div className="pillars">
      {pillars.map((p) => (
        <div className="pillar" key={p.title}>
          <span className="icon">{p.icon}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

export function QuickAnswer({ text }) {
  return (
    <div className="quick-answer">
      <h3>Quick answer</h3>
      <p>{text}</p>
    </div>
  );
}

export function FaqList({ items, title = 'What families and schools ask' }) {
  return (
    <section>
      <div className="container">
        <div className="center" style={{ marginBottom: 36 }}>
          <span className="eyebrow">Questions &amp; answers</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="faq-list">
          {items.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="answer">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ variant = 'family' }) {
  const family = {
    title: "Your child's free trial is one message away.",
    text: 'Tell us your child’s class and what they enjoy. We will suggest the closest program fit—no pressure and no upfront payment.',
    primary: { label: 'Book a free trial', to: '/book-free-demo' },
  };
  const school = {
    title: 'Bring a structured AI or Python pathway to your students.',
    text: 'Tell us the classes, approximate student count and program interest. We will arrange a needs discussion before recommending the right implementation.',
    primary: { label: 'Request a school proposal', to: '/schools/request-proposal' },
  };
  const c = variant === 'school' ? school : family;

  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-band">
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <div className="btn-row">
            <Link to={c.primary.to} className="btn btn-primary">
              {c.primary.label}
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              Call {site.phone}
            </a>
            <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramCards({ items }) {
  return (
    <div className="grid-3">
      {items.map((p) => (
        <Link to={p.to} className="card" key={p.title}>
          {p.image && (
            <div className="card-media">
              <img src={p.image} alt={p.imageAlt || ''} width="480" height="360" loading="lazy" />
            </div>
          )}
          <span className="icon">{p.icon}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <div className="card-meta">
            {p.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

/* A one-line summary of how far the learner has got in this class. */
export function ClassProgressBar({ subject, klass, total }) {
  const state = useProgress();
  let done = 0;
  let perfect = 0;
  for (let i = 0; i < total; i += 1) {
    const rec = getModuleScore(state, subject, klass, i);
    if (rec && rec.best > 0) done += 1;
    if (rec && rec.total && rec.best === rec.total) perfect += 1;
  }
  if (done === 0) return null;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="class-progress">
      <div className="class-progress-text">
        <strong>
          {done} of {total} module challenges taken
        </strong>
        <span>
          {perfect} perfect · <Link to="/my-progress">See my progress →</Link>
        </span>
      </div>
      <div
        className="class-progress-bar"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${done} of ${total} modules attempted`}
      >
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* Each card links through to its own full module page. */
export function ModuleGrid({ modules, subject, klass }) {
  const progress = useProgress();
  return (
    <div className="module-grid">
      {modules.map((m, i) => {
        const detail = getModuleDetail(subject, klass, i);
        const score = getModuleScore(progress, subject, klass, i);
        return (
          <Link className="module-card" key={m.title} to={moduleHref(subject, klass, i, m)}>
            {detail?.image && (
              <div className="module-media">
                <img src={detail.image} alt={detail.imageAlt || ''} width="480" height="360" loading="lazy" />
                {score && (
                  <span className={`module-score${score.best === score.total ? ' is-perfect' : ''}`}>
                    {score.best === score.total ? '★' : '✓'} {score.best}/{score.total}
                  </span>
                )}
              </div>
            )}
            <span className="module-num">
              Module {i + 1} · Sessions {i * 8 + 1}–{(i + 1) * 8}
            </span>
            <h3>{m.title}</h3>
            {detail?.hook && <p className="module-hook">{detail.hook}</p>}
            <ul>
              {m.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="module-project">
              <strong>Project:</strong> {m.project}
            </div>
            <span className="module-more">Explore this module →</span>
          </Link>
        );
      })}
    </div>
  );
}

export function OutcomeAssessment() {
  return (
    <section className="section-tight">
      <div className="container split">
        <div className="prose">
          <h2>Year-end outcome</h2>
          <p>A project the student can explain—not just display. By the end of the year, students can:</p>
          <ul>
            <li>Define the problem or learning goal</li>
            <li>Document important decisions and changes</li>
            <li>Test the output and correct issues</li>
            <li>Present the work and answer questions</li>
          </ul>
        </div>
        <div className="prose">
          <h2>Assessment approach</h2>
          <p>
            Progress across skills, projects and reflection. Reviews consider understanding, application,
            originality, accuracy, safety, debugging or verification, and the student&apos;s ability to explain
            their work.
          </p>
          <ul>
            <li>Module practice and mini-projects</li>
            <li>Mid-year review checkpoint</li>
            <li>Portfolio documentation</li>
            <li>Final capstone demonstration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
