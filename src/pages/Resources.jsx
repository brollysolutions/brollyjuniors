import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { PageHero, QuickAnswer, CtaBand } from '../components/Shared.jsx';

/* The guides hub.
 *
 * This replaced a page that described the guides without linking to any, which
 * is a thin page by any definition. It now lists real articles, which is both
 * the honest version and the one that gives the articles an internal link from
 * a page in the main navigation. */

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Guides for parents"
        title="Learning guides for parents: straight answers to the questions you actually ask."
        subtitle="Written by the people who teach these programs in Hyderabad, including the parts that are inconvenient for us to say."
        image="/images/resources.svg"
        imageAlt="An open guide book with a bookmark and a magnifier"
        chips={[
          { strong: `${articles.length} guides`, span: 'Free to read' },
          { strong: 'No sign-up', span: 'No email wall' },
          { strong: 'Written in-house', span: 'By our educators' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text="These guides cover phonics readiness, whether abacus is worth the commitment, how abacus compares with Vedic Maths, choosing between AI and coding, teaching children to use AI tools safely, Python project ideas, and the CBSE Class 9 AI subject." />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {articles.map((a) => (
              <Link className="card" to={`/resources/${a.slug}`} key={a.slug}>
                {a.image && (
                  <div className="card-media">
                    <img src={a.image} alt={a.imageAlt || ''} width="480" height="360" loading="lazy" />
                  </div>
                )}
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <div className="card-meta">
                  <span className="tag">{a.category}</span>
                  <span className="tag">{a.readingTime} min read</span>
                </div>
                <span className="module-more">Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="panel">
            <h2>📍 Looking for classes in your area?</h2>
            <p>
              Batch timings, travel notes and what families from each area usually ask about.
            </p>
            <ul className="link-list link-list-inline">
              {publishedLocations.map((l) => (
                <li key={l.slug}>
                  <Link to={locationPath(l.slug)}>Classes for {l.name} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand variant="family" />
    </>
  );
}
