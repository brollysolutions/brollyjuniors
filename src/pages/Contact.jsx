import { Link } from 'react-router-dom';
import { site, address, openingHours, formattedAddress, familyFaqs } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { PageHero, QuickAnswer, FaqList, CtaBand } from '../components/Shared.jsx';

export default function Contact() {
  const fullAddress = formattedAddress();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Brolly Juniors."
        subtitle="Ask about a free trial, choose a program for your child or discuss an annual partnership for your school."
        image="/images/contact.svg"
        imageAlt="A phone with chat bubbles, an envelope and a location pin"
        chips={[
          { strong: 'Free trial', span: 'For families' },
          { strong: 'Parent guidance', span: 'Program fit' },
          { strong: 'School proposals', span: 'Partnerships' },
        ]}
      >
        <div className="btn-row">
          <Link to="/book-free-demo" className="btn btn-primary">
            Book a free trial
          </Link>
          <Link to="/programs" className="btn btn-ghost">
            View all programs
          </Link>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer
            text={`Contact Brolly Juniors on ${site.phone} or ${site.email}. ${
              fullAddress
                ? `The centre is at ${fullAddress}.`
                : 'The centre is in Hyderabad, Telangana — call or WhatsApp for the exact address and a location pin.'
            } Families can request a free trial; schools can request a curriculum discussion or proposal.`}
          />
        </div>
      </section>

      <section>
        <div className="container grid-3">
          {/* NAP block. This markup is the reference version of the name,
              address and phone number: Google cross-checks it against the
              Google Business Profile listing, and a mismatch in either
              direction weakens the Local Pack signal. If you change anything
              here, change it in GBP and in every directory listing too — the
              exact string to paste is in docs/CITATIONS.md. */}
          <div className="panel">
            <h2>📞 Reach us directly</h2>
            <address className="nap">
              <span className="nap-name">{site.name}</span>
              {fullAddress ? (
                <span className="nap-address">{fullAddress}</span>
              ) : (
                <span className="nap-address">
                  {address.locality}, {address.region}, India
                </span>
              )}
              {/* Landmarks sit outside the NAP string on purpose: they help a
                  parent actually find the building, but they must not become
                  part of the address Google matches against the Business
                  Profile listing. */}
              {address.landmarks && <span className="nap-landmarks">{address.landmarks}</span>}
              <span className="contact-line">
                <span className="icon">📱</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </span>
              <span className="contact-line">
                <span className="icon">✉️</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
              <span className="contact-line">
                <span className="icon">💬</span>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </span>
              {address.placeUrl && (
                <span className="contact-line">
                  <span className="icon">🗺️</span>
                  <a href={address.placeUrl} target="_blank" rel="noreferrer">
                    Get directions on Google Maps
                  </a>
                </span>
              )}
            </address>

            {openingHours.length > 0 && (
              <>
                <h3 style={{ marginTop: 24 }}>Opening hours</h3>
                <ul className="hours-list">
                  {openingHours.map((h) => (
                    <li key={h.days}>
                      <span>{h.days}</span>
                      <strong>{h.time}</strong>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="panel">
            <h2>👨‍👩‍👧 For parents</h2>
            <p>
              Share your child&apos;s class, interests, previous experience and preferred schedule. We will
              recommend the closest program fit—no pressure.
            </p>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
          </div>

          <div className="panel">
            <h2>🏫 For schools</h2>
            <p>
              Share your school name, classes, student count, lab access and program interests. We will
              arrange a needs discussion before recommending a format.
            </p>
            <Link to="/schools/request-proposal" className="btn btn-outline">
              Request a proposal
            </Link>
          </div>
        </div>
      </section>

      {/* An embedded map is one of the stronger on-page local signals, and it
          is the thing a parent looks for before deciding whether the drive is
          realistic. It renders only once address.mapEmbedSrc is filled in, so
          the page never shows a map of the wrong place. */}
      {address.mapEmbedSrc && (
        <section className="section-tight">
          <div className="container">
            <div className="map-embed">
              <iframe
                src={address.mapEmbedSrc}
                title={`${site.name} location map, ${address.locality}`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container">
          <div className="panel">
            <h2>📍 Areas we serve across Hyderabad</h2>
            <p>
              Families travel to us from across the western corridor. These pages cover batch timings and
              the travel question for each area.
            </p>
            <ul className="link-list link-list-inline">
              {publishedLocations.map((l) => (
                <li key={l.slug}>
                  <Link to={locationPath(l.slug)}>Classes for {l.name} →</Link>
                </li>
              ))}
            </ul>
            <p className="note">
              Somewhere else in {address.locality}? Call {site.phone} — we will tell you honestly whether
              the travel is worth it for your child&apos;s age group.
            </p>
          </div>
        </div>
      </section>

      <FaqList items={familyFaqs} />
      <CtaBand variant="family" />
    </>
  );
}
