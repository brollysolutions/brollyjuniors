import { Link } from 'react-router-dom';
import { familyFaqs } from '../data/site.js';
import { menuItems } from '../data/catalog/index.js';
import {
  PageHero,
  QuickAnswer,
  SectionHead,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';

/* The section hub for Tuitions, Workshops and Age Groups.
 *
 * One component for all three because they are the same page: a hero, the
 * catalogue laid out group by group, and how the section works. Programmes and
 * Schools keep their own hand-written hubs — they predate the catalogue and
 * carry copy that is specific enough not to be worth generalising.
 *
 * Every card here links to a page that exists, because the cards are built
 * from the same data the route manifest reads.
 */
export default function CatalogHub({ hub }) {
  const { section } = hub;

  return (
    <>
      <PageHero eyebrow={hub.eyebrow} title={hub.title} subtitle={hub.subtitle} />

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={hub.quickAnswer} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="prose">
            <p className="section-lead">{hub.lead}</p>
          </div>
        </div>
      </section>

      {section.groups.map((group) => (
        <section className="section-tight" key={group.id} id={group.id}>
          <div className="container">
            <SectionHead
              eyebrow={group.icon ? `${group.icon} ${section.label}` : section.label}
              title={group.title}
              lead={group.blurb}
            />
            <div className="grid-3">
              {menuItems(section, group).map((item) => (
                <Link to={item.to} className="card" key={item.to}>
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <h3>{item.name}</h3>
                  <p>{item.summary || item.stage}</p>
                  {(item.stage || item.note) && (
                    <div className="card-meta">
                      {item.stage && <span className="tag">{item.stage}</span>}
                      {item.note && <span className="tag teal">{item.note}</span>}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-tight">
        <div className="container">
          <div className="prose">
            <h2>{hub.closing.title}</h2>
            <p>{hub.closing.text}</p>
            <ul>
              {hub.closing.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={familyFaqs} />
      <CtaBand variant="family" />
    </>
  );
}
