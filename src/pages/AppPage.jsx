import { Link } from 'react-router-dom';
import { developer, isLive } from '../data/apps.js';
import {
  PageHero,
  SectionHead,
  QuickAnswer,
  MediaSplit,
  StageTrack,
  FaqList,
  CtaBand,
  AppStoreCta,
  AppIdentity,
} from '../components/Shared.jsx';

/* One page per app.
 *
 * The app's own existence ranks for nothing — this page ranks on what it says
 * about the app, which is why the copy here is the full explanation rather than
 * a store badge and a screenshot. Everything rendered comes from
 * src/data/apps.js so the page, the FAQ structured data and the SoftwareApplication
 * node can never describe different things.
 */

export default function AppPage({ app }) {
  const live = isLive(app);

  return (
    <>
      <PageHero
        /* The name is no longer repeated here: AppIdentity below carries it
           next to the icon, which is where a visitor looks for it. */
        eyebrow={`${app.platform} app · ${live ? app.price : 'In testing'}`}
        title={app.h1}
        subtitle={app.heroSubtitle}
        image={app.image}
        imageAlt={app.imageAlt}
        chips={[
          { strong: app.ages, span: 'Age range' },
          { strong: '17 modules', span: '142 lessons' },
          { strong: '100% offline', span: 'After setup' },
          { strong: app.price, span: 'No subscription' },
        ]}
      >
        <AppIdentity app={app} />
        <AppStoreCta app={app} />
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={app.quickAnswer} />
          {/* Stated once, high up, in the visitor's line of sight. Everything
              below this describes an app they cannot install yet, and finding
              that out at the bottom of the page would read as a bait. */}
          {!live && app.statusNote && (
            <div className="callout callout-fact" style={{ marginTop: 20 }}>
              <span className="callout-icon" aria-hidden="true">
                🧪
              </span>
              <div>
                <strong>Still in testing</strong>
                <p>
                  {app.statusNote} Everything described below is built and working — message us on
                  WhatsApp and we will tell you the day it opens to everyone.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <MediaSplit image={app.image} imageAlt={app.imageAlt} reverse>
            <h2>Why the voice matters more than the graphics</h2>
            <p>{app.intro}</p>
            <p>
              This is the part most phonics apps get wrong. A text-to-speech engine asked to
              pronounce a single letter will often read its <em>name</em> instead of its{' '}
              <em>sound</em>, or bolt on a vowel that is not there — &ldquo;buh&rdquo; for /b/,
              &ldquo;muh&rdquo; for /m/. A child who learns the sounds that way cannot blend them:
              &ldquo;cuh-a-tuh&rdquo; never becomes &ldquo;cat&rdquo;. Recording a real person is
              slower and far more expensive than generating the audio, and it is the only way to be
              certain every one of the {app.stats[3].value} sounds in the app is the sound a child
              should actually copy.
            </p>
          </MediaSplit>
        </div>
      </section>

      <section className="stats-band section-tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 28 }}>
            <h2 className="section-title">A full phonics curriculum, in your pocket.</h2>
            <p className="section-lead">
              Not a set of games with letters in them — a structured sequence that starts at single
              sounds and finishes at sight words.
            </p>
          </div>
          <div className="grid-4">
            {app.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {app.screenshots?.length > 0 && (
        <section className="section-tight">
          <div className="container">
            <SectionHead
              eyebrow="On the phone"
              title="What it actually looks like"
              lead="Real screens from the published app, not mock-ups — the same ones on the Play listing."
            />
            {/* Portrait, at the phone's own aspect ratio. Sizes are stated so
                the row does not reflow as four images decode, and everything
                below the first is lazy: this sits well under the fold. */}
            <div className="app-shots">
              {app.screenshots.map((shot, i) => (
                <figure className="app-shot" key={shot.src}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width="716"
                    height="1600"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="Three steps, and then it is just practice"
            lead="Set-up happens once. After that the app runs on its own, with or without a signal."
          />
          <StageTrack stages={app.steps} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHead
            eyebrow="What is inside"
            title="Six things we insisted on"
            lead="Each one is a decision that cost time to build and is easy to skip — which is roughly why children's app stores are full of apps that skipped them."
          />
          <div className="grid-3">
            {app.features.map((f) => (
              <article className="card" key={f.title}>
                <span className="icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>Sound groups the app covers</h2>
            <p>
              Children work through the code in the order English actually builds on itself, so
              every group depends only on the ones before it.
            </p>
            <ul>
              {app.soundGroups.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="prose">
            <h2>What it costs</h2>
            <p>{app.pricing}</p>
            <h2>Who built it</h2>
            <p>
              {app.name} is developed by{' '}
              <a href={developer.url} target="_blank" rel="noreferrer">
                {developer.name}
              </a>
              , the software company alongside {' '}
              {/* Stated plainly rather than implying one company: the two share a
                  name and a team, and claiming more than that in public copy
                  would be a claim we cannot evidence. */}
              Brolly Juniors. The sound sequence follows the same synthetic phonics approach our
              educators teach at the centre in Hyderabad, which is why the two fit together — a
              child in a Brolly Juniors batch is practising the same code between sessions.
            </p>
          </div>
        </div>
      </section>

      {app.program && (
        <section className="section-tight">
          <div className="container">
            <div className="panel">
              <h2>🧑‍🏫 An app is practice. A teacher is feedback.</h2>
              <p>
                Worth saying plainly, even though it is inconvenient for us: an app cannot hear a
                child say a sound wrongly and correct it on the spot, and it cannot tell you why a
                confident reader has suddenly stalled. It is very good at the repetition that
                reading fluency needs, and that is genuinely most of the work. If you are in
                Hyderabad and want the other half, our phonics batches are capped at eight children
                so every one of them reads aloud in every session.
              </p>
              <ul className="link-list link-list-inline">
                <li>
                  <Link to={app.program.path}>{app.program.label} in Hyderabad →</Link>
                </li>
                <li>
                  <Link to="/resources/what-age-should-a-child-start-phonics">
                    What age should a child start phonics? →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container center">
          <AppStoreCta app={app} align="center" />
        </div>
      </section>

      <FaqList items={app.faqs} title={`Questions parents ask about ${app.name}`} />
      <CtaBand variant="family" />
    </>
  );
}
