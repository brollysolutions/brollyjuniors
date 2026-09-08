import { Link } from 'react-router-dom';
import { apps, appPath, developer, isLive } from '../data/apps.js';
import { PageHero, QuickAnswer, SectionHead, CtaBand } from '../components/Shared.jsx';

/* The apps hub.
 *
 * A hub with one item on it is a fair thing to be suspicious of — that is the
 * shape of a thin page. It earns its place by answering a question the app page
 * itself cannot: why a learning centre writes software at all, and what we
 * think an app can and cannot do for a child. That is also the honest answer to
 * give a parent deciding whether to trust it.
 *
 * It exists now, rather than being added with the second app, because the
 * pattern only pays off if the URL is stable from the start: /apps/spark-phonics
 * has to be right the first time it is indexed.
 */

export default function Apps() {
  const liveApps = apps.filter(isLive);

  return (
    <>
      <PageHero
        eyebrow="Apps by the Brolly team"
        title="Learning apps for kids, built by the people who teach the classes."
        subtitle="Practice tools children can use at home between sessions — and that any family can use, whether or not they ever set foot in our centre."
        /* No hero illustration: with one app published, the app's own artwork
           would appear twice on the same screen. Give the hero an image of its
           own when there is a second app to show. */
        chips={[
          { strong: `${apps.length} app`, span: liveApps.length ? 'Available now' : 'In testing' },
          { strong: 'Android', span: 'Platform' },
          { strong: 'No ads', span: 'In the child experience' },
          { strong: 'Free to start', span: 'No subscription' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="Brolly Juniors publishes learning apps for kids built alongside its classroom curricula. The first is Spark Phonics, a free offline phonics app for ages 3 to 7 in which every letter, sound and word is a recording of a real person rather than text-to-speech. It is live on Google Play and, once installed, works with no internet connection at all. The apps are open to any family and do not require enrolment in a class." />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow={liveApps.length ? 'Available now' : 'In testing'}
            title="What we have built so far"
            lead="Each app practises something we already teach, which is the only reason it exists."
          />
          {/* Not grid-2: an auto-fit grid with a single child stretches that
              card across the full width and blows the artwork up with it. This
              caps the card and centres the row instead. */}
          <div className="app-grid">
            {apps.map((app) => (
              <Link className="card" to={appPath(app.slug)} key={app.slug}>
                <div className="card-media app-card-media">
                  <img
                    src={app.image}
                    alt={app.imageAlt}
                    width="480"
                    height="360"
                    loading="lazy"
                  />
                  {/* The launcher icon, overlapping the artwork the way a store
                      listing shows it. alt="" + aria-hidden is the deliberate
                      decorative pair: the app's name is the very next element,
                      so announcing the icon too would just repeat it. */}
                  <img
                    className="app-card-icon"
                    src={app.icon}
                    alt=""
                    aria-hidden="true"
                    width="256"
                    height="256"
                    loading="lazy"
                  />
                </div>
                <h3>{app.name}</h3>
                <p>
                  {app.tagline} {app.heroSubtitle}
                </p>
                <div className="card-meta">
                  <span className="tag">{app.ages}</span>
                  <span className="tag">{app.platform}</span>
                  <span className="tag">{app.price}</span>
                  {!isLive(app) && <span className="tag">In testing</span>}
                </div>
                <span className="module-more">Read about {app.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>Why a learning centre writes software</h2>
            <p>
              Because the problem we kept hitting was not a teaching problem. Children in our
              phonics batches were doing well in class and losing ground between sessions, and the
              practice apps parents were already using were teaching sounds wrongly — reading letter
              names instead of sounds, or adding vowels that are not there. Correcting that in class
              costs more time than teaching it properly the first time.
            </p>
            <p>
              So the apps are narrow on purpose. They do the repetition that reading and mental
              arithmetic genuinely need, in the same sequence our educators use, and they leave the
              rest to a teacher in a room.
            </p>
          </div>
          <div className="prose">
            <h2>What an app cannot do</h2>
            <p>
              It cannot hear your child say a sound wrongly and correct it in the moment. It cannot
              notice that a confident reader has gone quiet, or work out why. It cannot decide that
              today is a day for something easier.
            </p>
            <p>
              We would rather say that here than have you discover it in month three. If you are in
              Hyderabad and want the half an app cannot do, our{' '}
              <Link to="/junior-skills">classes for younger children</Link> run in batches capped at
              eight. If you are not, the apps are still yours — free to start, and no account needed
              to try them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="panel">
            <h2>🛠️ Who builds them</h2>
            <p>
              The apps are developed by{' '}
              <a href={developer.url} target="_blank" rel="noreferrer">
                {developer.name}
              </a>
              , the software company alongside Brolly Juniors, with the curriculum sequence and the
              voice recordings coming from the educators who teach these programs in Hyderabad.
            </p>
            <ul className="link-list link-list-inline">
              <li>
                <Link to="/junior-skills/phonics">Phonics classes in Hyderabad →</Link>
              </li>
              <li>
                <Link to="/resources">Guides for parents →</Link>
              </li>
              <li>
                <Link to="/teaching-methodology">How we teach →</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand variant="family" />
    </>
  );
}
