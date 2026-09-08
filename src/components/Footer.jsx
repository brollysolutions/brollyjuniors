import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { articles } from '../data/articles.js';
import { apps, appPath } from '../data/apps.js';

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
    heading: 'Tuitions',
    links: [
      ['All tuitions · Classes 4–10', '/tuitions'],
      ['Maths tuition', '/tuitions/mathematics'],
      ['Physics tuition', '/tuitions/physics'],
      ['Chemistry tuition', '/tuitions/chemistry'],
      ['Biology tuition', '/tuitions/biology'],
      ['English tuition', '/tuitions/english'],
      ['IIT Foundation', '/tuitions/iit-foundation'],
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
      ['How We Teach', '/teaching-methodology'],
      ['Holiday Workshops', '/workshops'],
      ['Classes by Age', '/age-groups'],
      ['Student Projects', '/student-projects'],
      /* Both the hub and each app: the app pages are the only ones here a
         parent outside Hyderabad might link to, so they get a link from every
         page rather than only from the hub. */
      ['Apps for Kids', '/apps'],
      ...apps.map((a) => [`${a.name} app`, appPath(a.slug)]),
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
              {/* Footer column labels are h2, not h4. They are peers of the page's
                  own section headings, and as h4 they left every page in the site
                  with an h2 -> h4 jump in its outline. */}
              <h2>{col.heading}</h2>
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
            <h2>Areas we serve</h2>
            <ul>
              {areaLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-strip">
            <h2>Guides for parents</h2>
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
