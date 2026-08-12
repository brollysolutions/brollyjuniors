import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { articles } from '../data/articles.js';

const columns = [
  {
    heading: 'Programs',
    links: [
      ['AI for Kids', '/ai-for-kids'],
      ['Python for Kids', '/python-for-kids'],
      ['Phonics & Early Reading', '/junior-skills/phonics'],
      ['Abacus', '/junior-skills/abacus'],
      ['Vedic Maths', '/junior-skills/vedic-maths'],
      ['Public Speaking', '/junior-skills/public-speaking'],
      ['Digital Literacy', '/junior-skills/digital-literacy'],
    ],
  },
  {
    heading: 'Classes',
    links: [
      ['Classes 1–5', '/junior-skills'],
      ['Class 6 AI', '/ai-for-kids/class-6'],
      ['Class 7 AI', '/ai-for-kids/class-7'],
      ['Class 8 AI', '/ai-for-kids/class-8'],
      ['Class 9 AI', '/ai-for-kids/class-9'],
      ['Class 10 AI', '/ai-for-kids/class-10'],
    ],
  },
  {
    heading: 'Schools',
    links: [
      ['School Partnerships', '/schools/school-partnership-program'],
      ['Annual Program', '/schools/annual-academic-program'],
      ['AI & Coding Clubs', '/schools/ai-and-coding-clubs'],
      ['Teacher Training', '/schools/teacher-training'],
      ['Request Proposal', '/schools/request-proposal'],
    ],
  },
  {
    heading: 'Explore',
    links: [
      ['Our Story', '/about'],
      ['How We Teach', '/teaching-methodology'],
      ['Student Projects', '/student-projects'],
      ['Guides for Parents', '/resources'],
      ['FAQs', '/faqs'],
      ['Contact', '/contact'],
    ],
  },
];

/* Two extra footer rows. Both exist for internal linking as much as for
   navigation: a page with no link pointing at it is a page Google treats as
   unimportant, and the area pages and guides are otherwise reachable only from
   /contact and /resources. */
const areaLinks = publishedLocations.map((l) => [`Classes in ${l.name}`, locationPath(l.slug)]);
const guideLinks = articles.slice(0, 6).map((a) => [a.title, `/resources/${a.slug}`]);

export default function Footer() {
  const fullAddress = formattedAddress();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <span className="umbrella">☂</span> Brolly Juniors
            </div>
            <p>{site.footerAbout}</p>
            {/* NAP on every page. It must match the Google Business Profile
                listing exactly — see the note in src/data/site.js. */}
            <address className="nap">
              <span className="nap-name">{site.name}</span>
              <span className="nap-address">
                {fullAddress || `${address.locality}, ${address.region}, India`}
              </span>
            </address>
            <div className="footer-contact">
              <a href={site.phoneHref}>📞 {site.phone}</a>
              <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
              {address.placeUrl && (
                <a href={address.placeUrl} target="_blank" rel="noreferrer">
                  🗺️ Find us on Google Maps
                </a>
              )}
            </div>
          </div>
          {columns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map(([label, to]) => (
                  <li key={to + label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-strips">
          <div className="footer-strip">
            <h4>Areas we serve</h4>
            <ul>
              {areaLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-strip">
            <h4>Guides for parents</h4>
            <ul>
              {guideLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{site.copyright}</span>
          <span>☂ {site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
