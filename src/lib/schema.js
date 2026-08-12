import { site, address, openingHours, socialProfiles, areasServed, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import { SITE_URL, DEFAULT_OG_IMAGE } from './seo.js';

/* JSON-LD structured data.
 *
 * Two jobs. The organisation graph tells Google that Brolly Juniors is a real
 * Hyderabad business with an address, a phone number and an area it serves —
 * that is entity groundwork for the Local Pack, which is where the top three
 * results for the money keywords actually sit. The per-page types (Course,
 * FAQPage, Article, BreadcrumbList) tell it what each individual page is for.
 *
 * Everything here is emitted as one @graph so the nodes can reference each
 * other by @id instead of repeating the organisation on every page.
 *
 * Rule for this file: never invent a value. Anything the owner has not filled
 * into src/data/site.js is omitted, because wrong structured data is treated as
 * a trust problem and is far more expensive than missing structured data.
 * That is also why there is no AggregateRating node — inventing one is a
 * documented way to get rich results permanently disabled for a domain. Add it
 * only when it can be generated from genuine reviews.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/* Drops empty strings, nulls and empty arrays so no blank fields are published. */
function prune(obj) {
  if (Array.isArray(obj)) {
    const arr = obj.map(prune).filter((v) => v !== undefined);
    return arr.length ? arr : undefined;
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const pv = prune(v);
      if (pv !== undefined) out[k] = pv;
    }
    return Object.keys(out).length ? out : undefined;
  }
  if (obj === '' || obj === null || obj === undefined) return undefined;
  return obj;
}

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: address.streetAddress,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };
}

function geo() {
  if (address.latitude == null || address.longitude == null) return undefined;
  return { '@type': 'GeoCoordinates', latitude: address.latitude, longitude: address.longitude };
}

function hours() {
  return openingHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.schema.days,
    opens: h.schema.opens,
    closes: h.schema.closes,
  }));
}

const PROGRAM_CATALOGUE = [
  ['Artificial Intelligence for Kids', '/ai-for-kids'],
  ['Python & Coding for Kids', '/python-for-kids'],
  ['Phonics & Early Reading', '/junior-skills/phonics'],
  ['Abacus Mastery', '/junior-skills/abacus'],
  ['Vedic Maths', '/junior-skills/vedic-maths'],
  ['Public Speaking', '/junior-skills/public-speaking'],
  ['Creative & Digital Skills', '/junior-skills/digital-literacy'],
];

/* The organisation entity — the anchor every other node points at. */
export function organisationNode() {
  return {
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    alternateName: 'Brollyjuniors',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/hero-learning.svg` },
    image: DEFAULT_OG_IMAGE,
    description: site.footerAbout,
    slogan: site.tagline,
    telephone: site.phone,
    email: site.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    address: postalAddress(),
    geo: geo(),
    hasMap: address.placeUrl || undefined,
    openingHoursSpecification: hours(),
    /* The centre is physically in Hyderabad and that is what the Local Pack
       cares about, so the city and its neighbourhoods lead. India is included
       because the same programs are also taught online — without that, a
       national query has nothing to match against. */
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      ...areasServed.map((a) => ({ '@type': 'Place', name: `${a}, Hyderabad` })),
      { '@type': 'Country', name: 'India' },
    ],
    /* Every profile that proves this is the same business elsewhere. WhatsApp
       is included because it is the number families actually reach us on. */
    sameAs: [site.whatsappHref, address.placeUrl, ...socialProfiles].filter(Boolean),
    knowsAbout: [
      'Abacus',
      'Phonics',
      'Vedic Maths',
      'Public Speaking for children',
      'Python programming for children',
      'Artificial Intelligence literacy for children',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programs',
      itemListElement: PROGRAM_CATALOGUE.map(([name, path]) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name,
          url: SITE_URL + path,
          provider: { '@id': ORG_ID },
        },
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a free trial class',
      target: `${SITE_URL}/book-free-demo`,
    },
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumbNode(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length < 2) return undefined;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE_URL + (c.path === '/' ? '/' : c.path),
    })),
  };
}

/* Course, with a real instance attached. No `offers` node: Google's course
   rich result wants a price, and publishing a made-up one is not an option.
   Add offers here the day fees go on the site. */
function courseNode(seo) {
  const c = seo.course;
  if (!c) return undefined;
  return {
    '@type': 'Course',
    '@id': `${seo.canonical}#course`,
    name: c.name,
    description: seo.description,
    url: seo.canonical,
    provider: { '@id': ORG_ID },
    educationalLevel: c.level,
    typicalAgeRange: c.ages,
    inLanguage: 'en-IN',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseWorkload: c.workload,
      location: {
        '@type': 'Place',
        name: site.name,
        address: postalAddress(),
      },
    },
  };
}

function faqNode(faqs, canonical) {
  if (!faqs || !faqs.length) return undefined;
  return {
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function articleNode(seo) {
  const a = seo.article;
  if (!a) return undefined;
  return {
    '@type': 'Article',
    '@id': `${seo.canonical}#article`,
    headline: a.title,
    description: a.description,
    url: seo.canonical,
    datePublished: a.published,
    dateModified: a.updated || a.published,
    inLanguage: 'en-IN',
    image: SITE_URL + a.image,
    articleSection: a.category,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    isAccessibleForFree: true,
    mainEntityOfPage: seo.canonical,
  };
}

/* A neighbourhood page describes a service offered to an area, not a second
   premises. Modelling it as another LocalBusiness would be a duplicate-listing
   signal, which is precisely the thing that gets local listings suppressed. */
function locationServiceNode(seo) {
  const l = seo.location;
  if (!l) return undefined;
  return {
    '@type': 'Service',
    '@id': `${seo.canonical}#service`,
    name: `Children's classes for ${l.name}, Hyderabad`,
    description: l.summary,
    url: seo.canonical,
    serviceType: 'Children education classes',
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Place',
      name: `${l.name}, Hyderabad`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: l.name,
        addressRegion: 'Telangana',
        postalCode: l.pin,
        addressCountry: 'IN',
      },
    },
  };
}

/* The /resources hub lists the guides, and an ItemList is how you tell Google
   that a hub is a hub rather than a thin page of links. */
function resourceListNode(seo, articles) {
  if (seo.path !== '/resources' || !articles?.length) return undefined;
  return {
    '@type': 'ItemList',
    '@id': `${seo.canonical}#guides`,
    name: 'Guides for parents',
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/resources/${a.slug}`,
      name: a.title,
    })),
  };
}

function areaListNode(seo) {
  if (seo.path !== '/contact' || !publishedLocations.length) return undefined;
  return {
    '@type': 'ItemList',
    '@id': `${seo.canonical}#areas`,
    name: 'Areas we serve in Hyderabad',
    itemListElement: publishedLocations.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: SITE_URL + locationPath(l.slug),
      name: `Classes for ${l.name}`,
    })),
  };
}

/**
 * Build the full JSON-LD graph for a page.
 * `extras` carries page-supplied data the route resolver cannot know about,
 * currently the FAQ list rendered on the page and the article index.
 */
export function buildJsonLd(seo, extras = {}) {
  const graph = [
    organisationNode(),
    websiteNode(),
    breadcrumbNode(seo.breadcrumbs),
    courseNode(seo),
    articleNode(seo),
    locationServiceNode(seo),
    faqNode(extras.faqs || seo.article?.faqs || seo.location?.faqs, seo.canonical),
    resourceListNode(seo, extras.articles),
    areaListNode(seo),
  ].filter(Boolean);

  return prune({ '@context': 'https://schema.org', '@graph': graph });
}

/* Used by the contact page and the citation documentation so the address is
   written exactly once. */
export { formattedAddress };
