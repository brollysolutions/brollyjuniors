import { Link } from 'react-router-dom';
import { PageHero } from '../components/Shared.jsx';
import { site } from '../data/site.js';

/* Privacy policy and terms, from data/legalPages.js.
 *
 * Deliberately not InfoPage. That layout ends in a CtaBand and a Pillars strip,
 * which is right for a programme page and wrong here: a parent who has clicked
 * "Privacy Policy" is checking whether to trust us, and answering that with
 * "Book a free trial!" reads as evasion. This renders the text, the date it
 * changed, and a way to ask a question about it — nothing else.
 */

export default function LegalPage({ page }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle}>
        <p className="legal-updated">
          Last updated <time dateTime={page.updatedIso}>{page.updated}</time>
        </p>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <div className="prose legal-prose">
            {page.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.text && <p>{s.text}</p>}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="legal-footnote">
              The other half of this pair is our{' '}
              {page.path === '/privacy-policy' ? (
                <Link to="/terms">Terms of Use</Link>
              ) : (
                <Link to="/privacy-policy">Privacy Policy</Link>
              )}
              . If something here is unclear, ask us directly at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> — we would rather explain it than
              have you guess.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
