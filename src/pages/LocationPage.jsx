import { Link, Navigate } from 'react-router-dom';
import { getLocation, isCentreArea, publishedLocations, locationPath, PROGRAM_LINKS } from '../data/locations.js';
import { site, address, openingHours, formattedAddress, familyFaqs } from '../data/site.js';
import { PageHero, QuickAnswer, FaqList, CtaBand, Pillars } from '../components/Shared.jsx';

/* A neighbourhood page.
 *
 * The keyword it targets is "abacus classes in Kondapur" and its neighbours —
 * searches with almost no competition and a parent who has already decided how
 * far they will drive.
 *
 * The heading and the opening sentence change depending on whether the centre
 * is actually in this area (src/data/site.js address.neighbourhood) or families
 * travel in from it. That distinction is the difference between a useful local
 * page and a misleading one, and getting it wrong is also what gets a Google
 * Business Profile suspended, so it is derived from the address rather than
 * left to whoever edits the copy.
 */

export default function LocationPage({ slug }) {
  const location = getLocation(slug);

  if (!location) return <Navigate to="/contact" replace />;

  const centre = isCentreArea(location);
  const full = formattedAddress();
  const others = publishedLocations.filter((l) => l.slug !== location.slug);

  /* "in Kondapur" only when the room really is in Kondapur. Otherwise "for
     Kondapur families", which is both true and still carries the words a
     parent searching for classes in that area actually typed. */
  const heading = centre
    ? `Kids classes in ${location.name}, Hyderabad — abacus, phonics, coding and more.`
    : `Kids classes for ${location.name} families — abacus, phonics, coding and more.`;

  return (
    <>
      <PageHero
        eyebrow={`${location.name} · Hyderabad · Ages 4 to Class 10`}
        title={heading}
        subtitle={location.summary}
        image="/images/junior-skills.svg"
        imageAlt="Young learners with letter tiles, numbers, a microphone and art"
        chips={[
          { strong: 'Max 8', span: 'Children per batch' },
          { strong: 'Free trial', span: 'Before you decide' },
          { strong: '6 programs', span: 'Ages 4 to Class 10' },
          { strong: location.name, span: centre ? 'Our centre' : 'Families we serve' },
        ]}
      >
        <div className="btn-row">
          <Link to="/book-free-demo" className="btn btn-primary">
            Book a free trial
          </Link>
          <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
            Ask about {location.name} batches
          </a>
        </div>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/contact">Areas we serve</Link>
          <span aria-hidden="true">›</span>
          <span>{location.name}</span>
        </nav>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer
            text={
              centre
                ? `Brolly Juniors runs abacus, phonics, Vedic Maths, public speaking, Python coding and AI classes in ${location.name}, Hyderabad, for children from age four to Class 10. Batches are capped at eight children and every new family can attend one free trial class. Call ${site.phone}.`
                : `Brolly Juniors teaches children from ${location.name} — abacus, phonics, Vedic Maths, public speaking, Python coding and AI, for ages four to Class 10. Batches are capped at eight children and every new family can attend one free trial class. Call ${site.phone} to check which ${location.name} batch times currently have space.`
            }
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container split">
          <div className="prose">
            <h2>What {location.name} families usually ask us</h2>
            <p>{location.parents}</p>
          </div>
          <div className="prose">
            <h2>Getting here from {location.name}</h2>
            <p>{location.travel}</p>
            {location.nearby?.length > 0 && (
              <p>
                We also teach children from {location.nearby.slice(0, -1).join(', ')} and{' '}
                {location.nearby[location.nearby.length - 1]}.
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Programs</span>
            <h2 className="section-title">
              Every program, available to {location.name} families
            </h2>
            <p className="section-lead">
              One centre, six pathways. A child can take one, or combine two on different days.
            </p>
          </div>
          <div className="grid-3">
            {PROGRAM_LINKS.map((p) => (
              <Link className="card" to={p.to} key={p.to}>
                <h3>
                  {p.keyword.charAt(0).toUpperCase() + p.keyword.slice(1)} for {location.name}
                </h3>
                <p>
                  See the full {p.label.toLowerCase()} curriculum, level by level, and what a child can do
                  by the end of it.
                </p>
                <span className="module-more">Open the curriculum →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="panel">
            <h2>📍 Visiting us from {location.name}</h2>
            {full ? (
              <p className="nap-address">{full}</p>
            ) : (
              <p>
                Call or message us for the exact centre address and directions from {location.name} — we
                will send a location pin on WhatsApp.
              </p>
            )}
            <div className="contact-line">
              <span className="icon">📱</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div className="contact-line">
              <span className="icon">💬</span>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp us for directions
              </a>
            </div>
            {openingHours.length > 0 && (
              <>
                <h3 style={{ marginTop: 24 }}>Batch times</h3>
                <ul className="hours-list">
                  {openingHours.map((h) => (
                    <li key={h.days}>
                      <span>{h.days}</span>
                      <strong>{h.time}</strong>
                    </li>
                  ))}
                </ul>
                <p className="note">
                  Individual batches sit within these hours — ask which slots currently have space for
                  your child&apos;s age group.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList
        items={[...location.faqs, ...familyFaqs]}
        title={`Questions from ${location.name} parents`}
      />

      {others.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="panel">
              <h2>Other areas we serve</h2>
              <ul className="link-list link-list-inline">
                {others.map((l) => (
                  <li key={l.slug}>
                    <Link to={locationPath(l.slug)}>Classes for {l.name} →</Link>
                  </li>
                ))}
              </ul>
              <p className="note">
                Not on the list? We take families from across {address.locality} — call and ask.
              </p>
            </div>
          </div>
        </section>
      )}

      <CtaBand variant="family" />
    </>
  );
}
