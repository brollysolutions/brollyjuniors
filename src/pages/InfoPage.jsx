import { familyFaqs } from '../data/site.js';
import { appForProgram } from '../data/apps.js';
import {
  PageHero,
  QuickAnswer,
  Curriculum,
  MediaSplit,
  Pillars,
  FaqList,
  CtaBand,
  AppCallout,
  PageBlocks,
} from '../components/Shared.jsx';

export default function InfoPage({ page }) {
  const [first, ...rest] = page.sections;
  /* Resolved from the app data rather than declared on the page, so adding an
     app that practises a program is a one-file change. Most programs have no
     app, and render exactly as before. */
  const app = appForProgram(page.path);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        chips={page.chips}
        image={page.image}
        imageAlt={page.imageAlt}
      />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* Lead section sits beside the illustration; the rest read as prose columns. */}
      {first && (
        <section className="section-tight">
          <div className="container">
            {page.image ? (
              <MediaSplit image={page.image} imageAlt={page.imageAlt} reverse>
                <h2>{first.title}</h2>
                <p>{first.text}</p>
                {first.bullets && (
                  <ul>
                    {first.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </MediaSplit>
            ) : (
              <div className="prose">
                <h2>{first.title}</h2>
                <p>{first.text}</p>
                {first.bullets && (
                  <ul>
                    {first.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <Curriculum curriculum={page.curriculum} />

      {rest.length > 0 && (
        <section className="section-tight">
          <div className="container split">
            {rest.map((s) => (
              <div className="prose" key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Optional extra blocks — age bands, session rhythm, fee formats, areas
          served. Pages without a `blocks` array render exactly as before. */}
      <PageBlocks blocks={page.blocks} />

      {app && <AppCallout app={app} />}

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      {/* A page with its own FAQ set usually wants its own heading too — the
          default speaks for the site, not for one programme. */}
      <FaqList items={page.faqs || familyFaqs} title={page.faqTitle} />
      <CtaBand variant={page.cta} />
    </>
  );
}
