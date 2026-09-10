import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { courseForPath } from '../lib/course.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  QuickAnswers,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import {
  ChallengeQuiz,
  NumberedRows,
  PickSteps,
  TopicTabs,
  TrickCard,
} from '../components/ProgramBits.jsx';

/* One renderer for the long-form programme pages.
 *
 * The programme pages built before this one — abacus, chess, coding, Telugu and
 * the rest — are each a component of their own, because each carried something
 * only it needed: an interactive soroban, a sensor loop, a Devanagari word
 * grid. That was the right call for a handful of pages.
 *
 * Then thirteen more arrived at once (problem solving, financial literacy,
 * confidence, leadership, drawing, singing, swimming, dance, indoor games,
 * drama, music, outdoor games, yoga) built from one template, differing only in
 * their words. Thirteen more bespoke components would have been ten thousand
 * lines of JSX that says the same thing thirteen times, and a change to the
 * trial block would then need thirteen edits.
 *
 * So these thirteen render from data instead: this component draws the shape,
 * and data/programmeDetails.js holds what each page actually says. Every
 * section is optional — a page that has no vocabulary block simply omits the
 * key, and nothing renders. The earlier bespoke pages are untouched.
 *
 * Two things the data deliberately does NOT carry, because they must not drift
 * per page: contact details, which come from data/site.js, and the programme
 * name in the booking form, which comes from lib/course.js — the same lookup
 * the trial modal uses, so the form says the same thing wherever it opens.
 */

/* ---------- small pieces used by several sections ---------- */

function CardGrid({ items, cols = 3 }) {
  return (
    <div className={`grid-${cols}`}>
      {items.map((c) => (
        <div className="card" key={c.title}>
          {c.icon && (
            <span className="icon" aria-hidden="true">
              {c.icon}
            </span>
          )}
          {c.kv && <p className="kv">{c.kv}</p>}
          <h3>{c.title}</h3>
          {c.text && <p>{c.text}</p>}
          {c.list && (
            <ul>
              {c.list.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          )}
          {c.eg && <p className="ai-eg">{c.eg}</p>}
        </div>
      ))}
    </div>
  );
}

function Prose({ paras }) {
  return paras.map((p) => <p key={p}>{p}</p>);
}

function Panel({ panel }) {
  return (
    <div className="panel">
      {panel.title && <h2>{panel.title}</h2>}
      {panel.paras && <Prose paras={panel.paras} />}
      {panel.pills && (
        <ul className="pill-row">
          {panel.pills.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
      {panel.bullets && (
        <ul>
          {panel.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {panel.note && <p className="note-line">{panel.note}</p>}
    </div>
  );
}

/* A subject-specific block. Every programme has one or two sections nobody else
   needs — a water-safety ladder, a decision-making flow, a scale exercise — so
   rather than a key per idea, `extras` carries them as a small set of shapes. */
function Extra({ block }) {
  const inner = () => {
    switch (block.kind) {
      case 'cards':
        return <CardGrid items={block.items} cols={block.cols || 3} />;

      case 'split':
        return (
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">{block.paras && <Prose paras={block.paras} />}</div>
            {block.panel && <Panel panel={block.panel} />}
          </div>
        );

      case 'flow':
        return (
          <ul className="flow-strip">
            {block.items.map((f, i) => (
              <li key={f.label}>
                <span>
                  {f.label}
                  {f.sub ? ` — ${f.sub}` : ''}
                </span>{' '}
                {i < block.items.length - 1 && <b aria-hidden="true">→</b>}
              </li>
            ))}
          </ul>
        );

      case 'pills':
        return (
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {block.items.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        );

      case 'tiles':
        return (
          <div className="skill-tiles">
            {block.items.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        );

      case 'rows':
        return <NumberedRows items={block.items} badge={block.badge} />;

      case 'timeline':
        return (
          <ol className="rhythm">
            {block.items.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        );

      case 'steps':
        return (
          <div className="steps">
            {block.items.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        );

      case 'answers':
        return (
          <div className={`grid-${block.cols || 3}`}>
            {block.items.map((qa) => (
              <div className="ansblock" key={qa.q}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        );

      /* A comparison table. Reuses the .compare-table styling that
         pages/Article.jsx already uses, so a table looks the same wherever it
         appears and inherits the same fonts. .table-scroll keeps a wide table
         inside its own scroll area rather than making the page scroll
         sideways on a phone. */
      case 'table':
        return (
          <div className="table-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  {block.head.map((h) => (
                    <th key={h || 'blank'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    {row.slice(1).map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'quiz':
        return <ChallengeQuiz items={block.items} noun={block.noun} />;

      case 'pick':
        return (
          <PickSteps
            title={block.pickTitle}
            intro={block.pickIntro}
            options={block.items}
            stepTitles={block.stepTitles}
            ruleLabel={block.ruleLabel}
            note={block.pickNote}
          />
        );

      case 'tabs':
        return <TopicTabs items={block.items} label={block.tabsLabel} outcomeLabel={block.outcomeLabel} />;

      default:
        return null;
    }
  };

  return (
    <section className={block.band ? 'band-soft' : undefined} id={block.id}>
      <div className={block.center ? 'container center' : 'container'}>
        {(block.eyebrow || block.title || block.lead) && (
          <SectionHead eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
        )}
        {inner()}
        {block.note && (
          <p className="note-line center" style={{ marginTop: 24 }}>
            {block.note}
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------- the page ---------- */

export default function ProgrammePage({ page }) {
  const d = page.detail;
  /* The same lookup the booking modal uses, so a trial opened from this page
     and one opened from the navbar name the course identically. */
  const programme = courseForPath(page.path);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{d.h1}</h1>
              <p className="section-lead">{d.lead}</p>
              {d.heroPills && (
                <ul className="pill-row">
                  {d.heroPills.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  {d.heroSecondary || 'See the curriculum'}
                </a>
              </div>
              {d.ticks && (
                <ul className="tick-row">
                  {d.ticks.map((t) => (
                    <li key={t}>
                      <span className="tick">★</span> {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {d.hero?.kind === 'trick' ? (
              <TrickCard
                label={d.hero.label}
                sum={d.hero.sum}
                answer={d.hero.answer}
                steps={d.hero.steps}
                note={d.hero.note}
                showLabel={d.hero.showLabel || 'Show me how'}
                hideLabel={d.hero.hideLabel || 'Hide the steps'}
              />
            ) : (
              d.hero && <Panel panel={d.hero} />
            )}
          </div>
        </div>
      </section>

      {/* ---------- Facts ---------- */}
      {d.facts && (
        <section className="stats-band section-tight">
          <div className="container">
            <div className="ab-statbar">
              {d.facts.map((f) => (
                <div className="stat" key={f.strong}>
                  <b>{f.strong}</b>
                  <span>{f.span}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- What shapes the class ---------- */}
      {d.method && (
        <section>
          <div className="container">
            <SectionHead eyebrow={d.method.eyebrow} title={d.method.title} lead={d.method.lead} />
            <div className="split" style={{ alignItems: 'start' }}>
              <div className="prose">
                <ul>
                  {d.method.bullets.map((b) => (
                    <li key={b.term}>
                      <strong>{b.term}</strong> {b.text}
                    </li>
                  ))}
                </ul>
              </div>
              {d.method.panel && <Panel panel={d.method.panel} />}
            </div>
            {d.method.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.method.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Trust ---------- */}
      {d.trust && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow={d.trust.eyebrow || 'How it is taught'}
              title={d.trust.title}
              lead={d.trust.lead}
            />
            <CardGrid items={d.trust.items} cols={d.trust.cols || 3} />
          </div>
        </section>
      )}

      {/* ---------- What it is ---------- */}
      {d.whatIs && (
        <section id="what-is">
          <div className="container">
            <SectionHead
              eyebrow={d.whatIs.eyebrow || 'The basics'}
              title={d.whatIs.title}
              lead={d.whatIs.lead}
            />
            <div className="split" style={{ alignItems: 'start' }}>
              <div className="prose">{d.whatIs.paras && <Prose paras={d.whatIs.paras} />}</div>
              <div>
                {d.whatIs.panels?.map((p, i) => (
                  <div key={p.title} style={i > 0 ? { marginTop: 24 } : undefined}>
                    <Panel panel={p} />
                  </div>
                ))}
              </div>
            </div>
            {d.whatIs.answerRows && (
              <div className="quick-answer" style={{ marginTop: 48 }}>
                <h2>{d.whatIs.answerRowsTitle || 'The same thing, three ways'}</h2>
                {d.whatIs.answerRows.map((r) => (
                  <p key={r.tag}>
                    <span className="kv">{r.tag}</span>
                    {r.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------- Why learn ---------- */}
      {d.whyLearn && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow={d.whyLearn.eyebrow || 'For parents'}
              title={d.whyLearn.title}
              lead={d.whyLearn.lead}
            />
            <CardGrid items={d.whyLearn.items} cols={d.whyLearn.cols || 3} />
            {d.whyLearn.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.whyLearn.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Benefits ---------- */}
      {d.benefits && (
        <section>
          <div className="container">
            <SectionHead
              eyebrow={d.benefits.eyebrow || 'Benefits'}
              title={d.benefits.title}
              lead={d.benefits.lead}
            />
            <CardGrid items={d.benefits.items} cols={d.benefits.cols || 4} />
          </div>
        </section>
      )}

      {/* ---------- Topics ---------- */}
      {d.topics && (
        <section className="navy-band">
          <div className="container">
            <SectionHead
              eyebrow={d.topics.eyebrow || 'Topics covered'}
              title={d.topics.title || 'What will kids learn?'}
              lead={d.topics.lead}
            />
            <div className="skill-tiles">
              {d.topics.items.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Curriculum: the published stage track, then the detail ---------- */}
      <div id="curriculum">
        <Curriculum curriculum={page.curriculum} />
      </div>

      {d.curriculumTabs && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow={d.curriculumTabs.eyebrow}
              title={d.curriculumTabs.title}
              lead={d.curriculumTabs.lead}
            />
            <TopicTabs
              items={d.curriculumTabs.items}
              label={d.curriculumTabs.label}
              outcomeLabel={d.curriculumTabs.outcomeLabel}
            />
            {d.curriculumTabs.note && <p className="note-line">{d.curriculumTabs.note}</p>}
          </div>
        </section>
      )}

      {d.levels && (
        <section className={d.curriculumTabs ? undefined : 'band-soft'}>
          <div className="container">
            <SectionHead
              eyebrow={d.levels.eyebrow}
              title={d.levels.title}
              lead={d.levels.lead}
            />
            <NumberedRows items={d.levels.items} badge={d.levels.badge} />
            {d.levels.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.levels.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Age groups ---------- */}
      {d.ageBands && (
        <section>
          <div className="container">
            <SectionHead
              eyebrow={d.ageBands.eyebrow || 'By age'}
              title={d.ageBands.title}
              lead={d.ageBands.lead}
            />
            <div className={`grid-${d.ageBands.cols || 4}`}>
              {d.ageBands.items.map((a) => (
                <div className="age-card" key={a.kv}>
                  <h3>{a.title}</h3>
                  <p className="kv">{a.kv}</p>
                  {a.text && <p>{a.text}</p>}
                  {a.chips && (
                    <ul className="pill-row">
                      {a.chips.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {d.ageBands.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.ageBands.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Whatever else this programme needs ---------- */}
      {d.extras?.map((block) => (
        <Extra block={block} key={block.title || block.id} />
      ))}

      {/* ---------- Inside a session ---------- */}
      {d.session && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow={d.session.eyebrow || 'Inside a session'}
              title={d.session.title}
              lead={d.session.lead}
            />
            <ol className="rhythm">
              {d.session.items.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            {d.session.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.session.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Activities ---------- */}
      {d.activities && (
        <section>
          <div className="container">
            <SectionHead
              eyebrow={d.activities.eyebrow || 'Practice'}
              title={d.activities.title}
              lead={d.activities.lead}
            />
            {d.activities.items[0]?.title ? (
              <CardGrid items={d.activities.items} cols={d.activities.cols || 4} />
            ) : (
              <ul className="pill-row" style={{ justifyContent: 'center' }}>
                {d.activities.items.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
            {d.activities.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.activities.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Why us ---------- */}
      {d.whyUs && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow={d.whyUs.eyebrow || 'Why us'}
              title={d.whyUs.title || 'Why choose Brolly Juniors'}
              lead={d.whyUs.lead}
            />
            <CardGrid items={d.whyUs.items} cols={d.whyUs.cols || 4} />
            {d.whyUs.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.whyUs.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Practical details ----------
          Identical in shape on every programme, so the renderer owns it and the
          data supplies only what genuinely differs: the three bullet lists and
          the fee heading. */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning options, timings and fees"
            lead="We share these directly, so what you get is current and specific to your child rather than a number that may not apply."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning options</h3>
              <p className="kv">Ask us</p>
              <ul>
                {(d.practical?.options || [
                  'Sessions at the centre, in small batches',
                  'Availability varies by batch and age group',
                  'We will say honestly which suits your child',
                ]).map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Class timings</h3>
              <p className="kv">Changes through the year</p>
              <ul>
                {(d.practical?.timings || [
                  'Weekday, after school',
                  'Weekend batches',
                  'Availability shifts as groups fill',
                ]).map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>{d.practical?.feeTitle || 'Fees'}</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                {(d.practical?.fees || [
                  'Depends on age group, level and format',
                  'We explain what is included first',
                  'Free trial before you decide anything',
                ]).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>{d.trial?.title || 'Book a free trial class'}</h2>
            {(d.trial?.paras || [
              'Every new family can book one free trial class. Your child takes part in a real session, and you see how it runs — before any payment.',
            ]).map((p) => (
              <p key={p}>{p}</p>
            ))}
            {d.trial?.includes && (
              <ul className="pill-row">
                {d.trial.includes.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            )}
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program={programme} compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent guide ---------- */}
      {d.homeGuide && (
        <section>
          <div className="container">
            <SectionHead
              eyebrow={d.homeGuide.eyebrow || 'At home'}
              title={d.homeGuide.title}
              lead={d.homeGuide.lead}
            />
            <div className={`grid-${d.homeGuide.cols || 3}`}>
              {d.homeGuide.items.map((h) => (
                <div className="guide-card" key={h.title}>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
            {d.homeGuide.note && (
              <p className="note-line center" style={{ marginTop: 24 }}>
                {d.homeGuide.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ---------- Hyderabad ---------- */}
      {d.local && (
        <section className="band-soft">
          <div className="container split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <span className="eyebrow">Hyderabad</span>
              <h2>{d.local.title}</h2>
              <Prose paras={d.local.paras} />
              <h3>Areas within easy reach</h3>
              {/* Only neighbourhoods with a page of their own become links — the
                  rest stay as plain text rather than pointing at a URL that does
                  not exist. */}
              <ul className="area-links">
                {(d.local.areas || [
                  'Nizampet',
                  'Kukatpally',
                  'Miyapur',
                  'Bachupally',
                  'Pragathi Nagar',
                  'JNTU',
                ]).map((name) => {
                  const loc = publishedLocations.find(
                    (l) => l.name.toLowerCase() === name.toLowerCase()
                  );
                  return (
                    <li key={name}>
                      {loc ? (
                        <Link to={locationPath(loc.slug)}>Kids classes in {name}</Link>
                      ) : (
                        <span>{name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="panel">
              <h2>Visit Brolly Juniors</h2>
              <p>{formattedAddress()}</p>
              <p>{address.landmarks}.</p>
              {d.local.note && <p className="note-line">{d.local.note}</p>}
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
        </section>
      )}

      {/* ---------- Near me ---------- */}
      {d.nearMe && (
        <section>
          <div className="container">
            <SectionHead
              eyebrow={d.nearMe.eyebrow || 'Near me'}
              title={d.nearMe.title}
              lead={d.nearMe.lead}
            />
            <CardGrid items={d.nearMe.items} cols={d.nearMe.cols || 4} />
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 24 }}>
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Related ---------- */}
      {d.related && (
        <section className="band-soft">
          <div className="container">
            <SectionHead
              eyebrow="Other programmes"
              title={d.relatedTitle || 'Related programmes at Brolly Juniors'}
              lead={d.relatedLead}
            />
            <div className="grid-3">
              {d.related.map((r) => (
                <Link className="card" to={r.to} key={r.title}>
                  <span className="icon">{r.icon}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={page.faqs} title={page.faqTitle} />

      {/* ---------- Quick answers ---------- */}
      {/* No `d.quickAnswers &&` guard: the component renders nothing when the
          list is absent, and nothing when every entry duplicates an FAQ. */}
      <QuickAnswers
        items={d.quickAnswers}
        faqs={page.faqs}
        title={d.quickAnswersTitle || 'Quick answers'}
        lead="Short, direct answers to the questions parents search for most."
      />

      <CtaBand variant={page.cta} />
    </>
  );
}
