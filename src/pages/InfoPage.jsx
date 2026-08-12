import { familyFaqs } from '../data/site.js';
import {
  PageHero,
  QuickAnswer,
  Curriculum,
  MediaSplit,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';

export default function InfoPage({ page }) {
  const [first, ...rest] = page.sections;

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

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={page.faqs || familyFaqs} />
      <CtaBand variant={page.cta} />
    </>
  );
}
