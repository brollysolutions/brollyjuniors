import { Link } from 'react-router-dom';
import { site, pillars, address, openingHours, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { getModuleDetail, moduleHref } from '../data/moduleDetail.js';
import { appPath, isLive, developer } from '../data/apps.js';
import { useProgress, getModuleScore } from '../lib/progress.js';
import { distinctQuickAnswers } from '../lib/faqs.js';

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
      {/* h2, not h3: this block sits directly under the page H1, and a screen
          reader reading the outline would announce a skipped level. */}
      <h2>Quick answer</h2>
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
            <div className="faq-item" key={f.q}>
              <h3 className="faq-q">{f.q}</h3>
              <div className="answer">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The "Quick answers" band that sits below the FAQ list on programme pages.
 *
 * Nineteen pages had hand-rolled this same markup, which is why more than half
 * of the quick answers across the site had drifted into restating an FAQ from
 * a few hundred pixels above. Passing `faqs` lets the component drop those —
 * see distinctQuickAnswers in lib/faqs.js — and the section removes itself
 * when nothing distinct is left, rather than rendering an empty band. */
export function QuickAnswers({ items, faqs, title, lead, eyebrow = 'Quick answers' }) {
  const shown = distinctQuickAnswers(items, faqs);
  if (!shown.length) return null;

  return (
    <section className="band-soft">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className="grid-3">
          {shown.map((qa) => (
            <div className="ansblock" key={qa.q}>
              <h3>{qa.q}</h3>
              <p>{qa.a}</p>
            </div>
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

/* The store-listing header: icon, name, who makes it.
 *
 * Sits directly above the download row, which is the one place on the page a
 * parent is deciding whether to trust the thing enough to install it — so the
 * icon they will see in Play and the company that publishes it belong here
 * rather than three sections down. The icon is decorative-adjacent but not
 * decorative: it is how the app is identified in a store search, so it keeps a
 * real alt text.
 */
export function AppIdentity({ app }) {
  return (
    <div className="app-identity">
      <img
        className="app-identity-icon"
        src={app.icon}
        alt={app.iconAlt}
        width="256"
        height="256"
      />
      <div>
        <strong>{app.name}</strong>
        <span>by {developer.name}</span>
      </div>
    </div>
  );
}

/* The download row for an app, in whichever of its three states applies.
 *
 * live               → the Play Store button.
 * testing + testUrl  → a real "join the test group" button. Recruiting testers
 *                      is the actual bottleneck during a testing window, so the
 *                      page should convert for that instead of doing nothing.
 * testing, no link   → an honest status pill. Never a button: there is nowhere
 *                      for it to go, and a dead store link spends the one click
 *                      a parent was willing to give.
 *
 * The WhatsApp fallback is always present, because it is the number families
 * actually reach this business on and it works in every state. */
export function AppStoreCta({ app, align = 'start' }) {
  const live = isLive(app);
  const ask = live
    ? `Hi Brolly Juniors, I'd like to know about the ${app.name} app.`
    : `Hi Brolly Juniors, please tell me when the ${app.name} app is available.`;
  const whatsapp = `${site.whatsappHref}?text=${encodeURIComponent(ask)}`;

  return (
    <div className="btn-row" style={align === 'center' ? { justifyContent: 'center' } : undefined}>
      {live && (
        <a href={app.playUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
          ▶ Get {app.name} on Google Play
        </a>
      )}
      {!live && app.testUrl && (
        <a href={app.testUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
          Join the {app.name} test group
        </a>
      )}
      {!live && !app.testUrl && (
        <span className="store-pending">
          <strong>In testing on Google Play</strong>
          <span>Not publicly downloadable yet.</span>
        </span>
      )}
      <a href={whatsapp} className="btn btn-outline" target="_blank" rel="noreferrer">
        {live ? `WhatsApp us about ${app.name}` : `WhatsApp us when ${app.name} is live`}
      </a>
    </div>
  );
}

/* Shown on the program page an app practises — the internal link that matters
   most, because it reaches a parent at the moment they are already reading
   about that subject. */
export function AppCallout({ app }) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="panel app-callout">
          <div className="app-callout-art">
            <img src={app.image} alt={app.imageAlt} width="480" height="360" loading="lazy" />
          </div>
          <div>
            {/* The real icon instead of a 📱 emoji: same job, and it is the
                image a parent will be scanning for in the Play search results
                this callout is trying to send them to. */}
            <h2 className="app-callout-title">
              <img
                src={app.icon}
                alt=""
                aria-hidden="true"
                width="256"
                height="256"
                loading="lazy"
              />
              Practise between classes with {app.name}
            </h2>
            <p>
              {app.tagline} {app.quickAnswer}
            </p>
            <Link to={appPath(app.slug)} className="btn btn-primary">
              About the {app.name} app
            </Link>
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

/* Optional content blocks for a data-driven inner page.
 *
 * infoPages.js entries used to be limited to a hero, a quick answer, a
 * curriculum and a list of prose sections, which is why a page with more to
 * say — the abacus page has age bands, a session rhythm, fee formats, areas
 * served — had nowhere to put it without growing a bespoke component.
 *
 * A block is `{ kind, title, lead, ... }`. The kind picks the layout; every
 * layout is built from classes that already exist in global.css, so a new
 * block cannot introduce a new visual language. Any page in infoPages.js or
 * data/catalog/ can use them — nothing here is abacus-specific.
 */
export function PageBlocks({ blocks }) {
  if (!blocks || blocks.length === 0) return null;
  return blocks.map((block, i) => (
    <PageBlock key={block.title || `${block.kind}-${i}`} block={block} index={i} />
  ));
}

function PageBlock({ block, index }) {
  /* Alternate the background so a long page reads as distinct sections
     rather than one continuous sheet. */
  const band = index % 2 === 1 ? 'band-soft' : undefined;
  const head = (
    <SectionHead eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
  );

  const body = () => {
    switch (block.kind) {
      case 'cards':
        return (
          <div className={block.columns === 4 ? 'grid-4' : 'grid-3'}>
            {block.items.map((it) => {
              const inner = (
                <>
                  {it.icon && <span className="icon">{it.icon}</span>}
                  <h3>{it.title}</h3>
                  {it.kv && <p className="kv">{it.kv}</p>}
                  {it.text && <p>{it.text}</p>}
                  {it.bullets && (
                    <ul className="pill-row">
                      {it.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </>
              );
              return it.to ? (
                <Link className="card" to={it.to} key={it.title}>
                  {inner}
                </Link>
              ) : (
                <div className="card" key={it.title}>
                  {inner}
                </div>
              );
            })}
          </div>
        );

      case 'ages':
        return (
          <div className={block.items.length === 4 ? 'grid-4' : 'grid-3'}>
            {block.items.map((it) => (
              <div className="age-card" key={it.title}>
                <h3>{it.title}</h3>
                {it.kv && <p className="kv">{it.kv}</p>}
                <p>{it.text}</p>
                {it.bullets && (
                  <ul className="pill-row">
                    {it.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );

      case 'steps':
        return (
          <div className="steps">
            {block.items.map((it) => (
              <div className="step" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        );

      case 'rhythm':
        return (
          <ol className="rhythm">
            {block.items.map((it) => (
              <li key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ol>
        );

      case 'compare':
        return (
          <div className="compare">
            <div className="compare-col is-us">
              <h3>{block.us.title}</h3>
              <ul>
                {block.us.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col is-other">
              <h3>{block.them.title}</h3>
              <ul>
                {block.them.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {block.them.note && <p className="note-line">{block.them.note}</p>}
            </div>
          </div>
        );

      case 'plans':
        return (
          <div className={block.items.length === 3 ? 'grid-3' : 'grid-4'}>
            {block.items.map((it) => (
              <div className="plan" key={it.title}>
                <h3>{it.title}</h3>
                {it.kv && <p className="kv">{it.kv}</p>}
                <ul>
                  {it.items.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {it.cta && (
                  <Link to={it.cta.to} className="btn btn-outline">
                    {it.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        );

      /* Area links resolve against data/locations.js, so a locality can only
         become a link when a page for it actually exists — the rest stay as
         plain text. That is the rule in locations.js, applied here rather
         than restated in every page's data. */
      case 'areas':
        return (
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <ul className="area-links">
                {block.items.map((name) => {
                  const loc = publishedLocations.find(
                    (l) => l.name.toLowerCase() === name.toLowerCase()
                  );
                  return (
                    <li key={name}>
                      {loc ? (
                        <Link to={locationPath(loc.slug)}>
                          {block.linkPrefix || 'Classes in'} {name}
                        </Link>
                      ) : (
                        <span>{name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              {block.note && <p className="note-line">{block.note}</p>}
            </div>
            <div className="panel">
              <h2>Our centre</h2>
              <p>{formattedAddress()}</p>
              <p>{address.landmarks}.</p>
              {openingHours.map((h) => (
                <p key={h.days}>
                  <strong>{h.days}:</strong> {h.time}
                </p>
              ))}
              <div className="btn-row">
                <a href={site.phoneHref} className="btn btn-primary">
                  Call {site.phone}
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Directions &amp; contact
                </Link>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={band}>
      <div className="container">
        {(block.title || block.lead) && head}
        {body()}
        {block.note && block.kind !== 'areas' && (
          <p className="note-line center" style={{ marginTop: 24 }}>
            {block.note}
          </p>
        )}
        {block.cta && (
          <div className="center" style={{ marginTop: 36 }}>
            <Link to={block.cta.to} className="btn btn-primary">
              {block.cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
