import { Link, useParams, Navigate } from 'react-router-dom';
import { getArticle, articles } from '../data/articles.js';
import { PageHero, QuickAnswer, FaqList, CtaBand } from '../components/Shared.jsx';

/* A guide page. The layout is deliberately plain — these pages exist to answer
   a question well, and anything that gets between the reader and the answer
   works against both the reader and the search result. */

/* Two pieces of inline syntax, and deliberately no more: **double asterisks**
   for the lead-in phrase of a bullet, and [label](target) for a link. A full
   Markdown parser shipped to every visitor for a handful of text pages is not a
   trade worth making.
 *
 * Links matter enough to be worth the extra branch. Body copy that cites a
 * source and points at the relevant program page is what earns a citation from
 * an AI answer and what moves a reader towards the thing they came for; a
 * "related links" strip at the bottom does neither, because most readers never
 * reach it.
 *
 * A target starting with "/" is an internal route and uses Link, so navigation
 * stays client-side. Anything else is external and gets rel="noopener" — plus
 * target="_blank", since sending a parent mid-article off to another site is a
 * good way to lose them. */
/* Single asterisks are emphasis. The articles already used them — for pure
   letter sounds like *sss*, and for the word being contrasted in a sentence —
   but nothing rendered them, so five live pages were showing literal asterisks.
   The **bold** alternative has to come first: alternation is ordered, and a
   single-asterisk pattern placed earlier would eat half of a bold marker. */
const INLINE = /(\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\([^)]+\))/g;

function Inline({ text }) {
  const parts = String(text).split(INLINE);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link;
          return href.startsWith('/') ? (
            <Link key={i} to={href}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

function Section({ section }) {
  return (
    <div className="prose article-section">
      <h2>{section.heading}</h2>
      {(section.body || []).map((p) => (
        <p key={p}>
          <Inline text={p} />
        </p>
      ))}
      {section.bullets && (
        <ul>
          {section.bullets.map((b) => (
            <li key={b}>
              <Inline text={b} />
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                {section.table.head.map((h) => (
                  <th key={h || 'blank'}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
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
      )}
      {(section.after || []).map((p) => (
        <p key={p}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/resources" replace />;

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.readingTime} min read`}
        title={article.title}
        subtitle={article.description}
        image={article.image}
        imageAlt={article.imageAlt}
      >
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/resources">Guides</Link>
          <span aria-hidden="true">›</span>
          <span>{article.category}</span>
        </nav>
      </PageHero>

      {/* The short answer sits above everything else. It is what a parent in a
          hurry needs, and it is the passage a search engine or an AI assistant
          lifts when it answers the question directly. */}
      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={article.quickAnswer} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="prose article-body">
            {article.intro.map((p) => (
              <p className="article-lead" key={p}>
                <Inline text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="article-body">
            {article.sections.map((s) => (
              <Section key={s.heading} section={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="article-body">
            <div className="panel">
              <h2>Where to go next</h2>
              <ul className="link-list">
                {article.related.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to}>{r.label} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqList items={article.faqs} title="Related questions" />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 32 }}>
            <span className="eyebrow">More guides</span>
            <h2 className="section-title">Other things parents ask us</h2>
          </div>
          <div className="grid-3">
            {more.map((a) => (
              <Link className="card" to={`/resources/${a.slug}`} key={a.slug}>
                <span className="tag">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="module-more">Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant="family" />
    </>
  );
}
