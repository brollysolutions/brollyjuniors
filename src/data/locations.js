import { address } from './site.js';

/* Neighbourhood pages — the Priority 3 keywords in SEO_STRATEGY.md §4.
 *
 * These target searches like "abacus classes in Kondapur", which almost nobody
 * competes for and which convert well because the parent has already decided
 * how far they are willing to drive.
 *
 * ⚠️ Two rules, because thin duplicated location pages are a well-documented
 * way to get an entire site demoted:
 *
 *   1. Only areas you genuinely serve get a page. Set `published: false` for
 *      any area where you cannot honestly take an enquiry, and the route, the
 *      sitemap entry and the internal links all disappear with it.
 *   2. Every page must say something the others do not. The `parents`,
 *      `travel` and `faqs` fields exist to force that. Generic filler here is
 *      worse than having no page at all.
 *
 * The heading changes shape depending on whether the centre is actually in the
 * area (`address.neighbourhood` matches) or families travel in from it. That
 * keeps the copy truthful without anyone having to remember to edit it.
 *
 * TODO for the owner, once you have the data — these are the lines that make a
 * location page rank rather than merely exist:
 *   · replace `travel` with the real route and parking situation from your centre
 *   · add one real parent quote per area to `voice` (name + child's first name)
 *   · list the actual schools your students from that area attend, in `schools`
 */

export const PROGRAM_LINKS = [
  { label: 'Abacus classes', to: '/junior-skills/abacus', keyword: 'abacus classes' },
  { label: 'Phonics classes', to: '/junior-skills/phonics', keyword: 'phonics classes' },
  { label: 'Vedic Maths', to: '/junior-skills/vedic-maths', keyword: 'vedic maths classes' },
  { label: 'Public speaking', to: '/junior-skills/public-speaking', keyword: 'public speaking classes' },
  { label: 'Coding & Python', to: '/python-for-kids', keyword: 'coding classes for kids' },
  { label: 'AI for kids', to: '/ai-for-kids', keyword: 'AI classes for kids' },
];

export const locations = [
  /* The centre's own area. `address.neighbourhood` is 'Nizampet', so
     isCentreArea() below returns true for this one entry and the page says
     "classes in Nizampet" rather than "classes for Nizampet families". No other
     location triggers that, which is the point — this is where the room is. */
  {
    slug: 'nizampet',
    name: 'Nizampet',
    published: true,
    pin: '500072',
    summary:
      'Abacus, phonics, Vedic Maths, public speaking, coding and AI classes in Nizampet — the centre is at Nizampet X Roads, in batches of eight. Free trial class.',
    parents:
      'This is our own neighbourhood, so most Nizampet families walk in before they ever call. The questions we get here are practical rather than exploratory: which batch has space, whether a child can be dropped straight after school, and whether two siblings can be scheduled back to back. The answer to the last one is usually yes, and it is worth asking at the trial rather than after enrolling.',
    travel:
      'The centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, at metro pillar A689 — beside Sri Bhramaramba Theatre and a short run from JNTU Metro Station. For most of Nizampet, Bachupally and Pragathi Nagar this is a five to ten minute drive, which makes weekday evening batches genuinely practical rather than a Saturday-only compromise.',
    nearby: ['Bachupally', 'Pragathi Nagar', 'Hydernagar', 'KPHB', 'Miyapur', 'Kukatpally'],
    highlight: ['abacus', 'phonics', 'vedic-maths'],
    faqs: [
      {
        q: 'Can my child come straight from school to a weekday batch?',
        a: 'Yes, and a lot of Nizampet families do exactly that. Tell us the school timing at the trial and we will place the child in a batch that fits the gap rather than one that leaves them waiting an hour.',
      },
      {
        q: 'Can I just walk in and see the centre?',
        a: 'Yes. We are open Monday to Saturday, 10:00 am to 7:00 pm. A call first on +91 81868 44555 means someone who teaches the program will be free to talk to you rather than mid-class.',
      },
    ],
    voice: null,
    schools: [],
  },

  {
    slug: 'kondapur',
    name: 'Kondapur',
    published: true,
    pin: '500084',
    /* One sentence for the meta description and the area card. */
    summary:
      'Abacus, phonics, Vedic Maths, public speaking, coding and AI classes for children from Kondapur — small batches of eight, and a free trial before you commit.',
    /* Who actually enquires from here. This is the part that cannot be copied
       from another page, and the part a parent recognises themselves in. */
    parents:
      'Kondapur families are usually choosing between four or five options within a two-kilometre radius, and the deciding factor is rarely the syllabus — it is whether the class is small enough that their child is actually noticed. Most enquiries here are for two children in the same family at different stages: an older child starting coding, a younger one starting phonics or abacus. Timetabling both on the same evening is normally possible and worth asking about.',
    travel:
      'Kondapur families are heading up the Miyapur road towards Nizampet X Roads rather than across the IT corridor, so peak-hour traffic on that stretch is the practical question rather than the distance itself. The later weekday batch works for families setting off after the worst of it; otherwise Saturday is the easier weekly commitment.',
    nearby: ['Gachibowli', 'Madhapur', 'Kothaguda', 'Nallagandla', 'Hitech City'],
    /* Programs to foreground on this page, in order. */
    highlight: ['abacus', 'phonics', 'python'],
    faqs: [
      {
        q: 'Do you have batches that suit Kondapur school timings?',
        a: 'Yes. Weekday batches run in the late afternoon and early evening so children arriving from schools around Kondapur, Kothaguda and Gachibowli can reach class without rushing. Saturday morning batches suit families who would rather keep weekday evenings free.',
      },
      {
        q: 'Can two children from the same family attend on the same day?',
        a: 'Usually yes, and it is the most common request from this area. Tell us both children\'s classes and program interests when you book the trial and we will try to place them in adjacent slots.',
      },
    ],
    /* Fill these in from real families — see the TODO above. */
    voice: null,
    schools: [],
  },

  {
    slug: 'madhapur',
    name: 'Madhapur',
    published: true,
    pin: '500081',
    summary:
      'Classes for children in Madhapur and HITEC City — abacus, phonics, Vedic Maths, public speaking, Python coding and AI. Batches capped at eight. Free trial class.',
    parents:
      'Madhapur enquiries come mostly from two-income households working in the HITEC City belt, where the real constraint is a pickup that has to work around a 6 pm meeting. Parents here ask about coding and AI earlier than anywhere else in the city — often for Class 6 and 7 children — and they ask sharper questions, because many of them write software themselves. That suits us: the Python curriculum is real typed Python, not a drag-and-drop block editor with a coding label on it.',
    travel:
      'Madhapur to the Nizampet centre is a genuine cross-city run, and the roads around Ayyappa Society and Image Gardens slow to a crawl in the evening peak. Most families here settle into one fixed weekly slot — usually Saturday — rather than moving between batches. If a caregiver rather than a parent handles drop-off, tell us at the trial and we will hold the same slot each week so the routine sticks.',
    nearby: ['Hitech City', 'Kondapur', 'Jubilee Hills', 'Raidurg', 'Kavuri Hills'],
    highlight: ['python', 'ai', 'abacus'],
    faqs: [
      {
        q: 'Is the coding class actually programming, or block-based?',
        a: 'Children from Class 6 upward type real Python from the first module — variables, conditions, loops, functions, then files, data and small applications. Nine modules a year, each ending in a working project the child can explain. The full class-by-class breakdown is on the Python for Kids pages.',
      },
      {
        q: 'We work in HITEC City. Are there batches after 6 pm?',
        a: 'Yes, there is a later weekday batch designed for exactly this, and Saturday batches run through the morning and afternoon. Ask when you book the free trial and we will tell you which slots currently have space.',
      },
    ],
    voice: null,
    schools: [],
  },

  {
    slug: 'gachibowli',
    name: 'Gachibowli',
    published: true,
    pin: '500032',
    summary:
      'Abacus, phonics, Vedic Maths, coding and AI classes for Gachibowli children. Eight children per batch, class-wise curricula, and one free trial before you decide.',
    parents:
      'Gachibowli parents tend to arrive having already tried something — an online 1:1 platform, a large tuition centre, or an app — and having watched their child quietly disengage from it. The question they ask is not "what will you teach" but "how will you keep him interested in month four". The honest answer is the batch size and the project at the end of every module: eight children means nobody hides at the back, and a finished thing to demonstrate is what keeps a child coming back long after novelty wears off.',
    travel:
      'Gachibowli is one of the furthest areas we serve. The centre is at Nizampet X Roads, on the other side of the ORR from the Financial District, and the weekday evening run is a long one with a young child in the car. Most Gachibowli families choose Saturday batches, and several combine two programs into a single visit rather than making the trip twice.',
    nearby: ['Kondapur', 'Manikonda', 'Nanakramguda', 'Khajaguda', 'Financial District'],
    highlight: ['ai', 'python', 'public-speaking'],
    faqs: [
      {
        q: 'My child tried an online coding class and lost interest. Why would this be different?',
        a: 'Two reasons, and neither is marketing. The batch is eight children in one room, so disengagement is visible in the same session rather than three weeks later. And every module ends with something built and presented out loud — children stay for the thing they made, not for the subject.',
      },
      {
        q: 'Do you teach AI and Python as one combined course?',
        a: 'No. They are separate annual pathways with separate curricula, 72 sessions each. A child can take one or both. Combining them into a single course is a common shortcut in this market and it produces children who have seen a lot and can do very little.',
      },
    ],
    voice: null,
    schools: [],
  },

  {
    slug: 'kukatpally',
    name: 'Kukatpally',
    published: true,
    pin: '500072',
    summary:
      'Kids classes for Kukatpally and KPHB families — abacus, phonics, Vedic Maths, public speaking, coding and AI, in batches of eight. Book a free trial class.',
    parents:
      'Kukatpally and KPHB is the most exam-conscious catchment we serve, and the most abacus- and Vedic-Maths-driven: parents here are thinking about calculation speed and concentration for school maths well before they think about coding. That is a reasonable instinct, and the abacus pathway is built for it — ten levels that move calculation from the fingers to the head. We will also say plainly when a child is too young to start, rather than enrolling them and hoping.',
    travel:
      'Kukatpally and KPHB are the closest catchment we serve. The centre is at Nizampet X Roads, a few minutes up from JNTU, so weekday evening batches are genuinely workable from here rather than a Saturday-only compromise — which is not true of the areas further down the IT corridor.',
    nearby: ['KPHB', 'Miyapur', 'Nizampet', 'Bachupally', 'Moosapet'],
    highlight: ['abacus', 'vedic-maths', 'phonics'],
    faqs: [
      {
        q: 'Coming from KPHB on a weekday is difficult. Is there another option?',
        a: 'Saturday batches run through the morning and afternoon and are popular with Kukatpally families for exactly this reason. Two programs can often be scheduled back to back on the same Saturday so the trip is made once a week rather than twice.',
      },
      {
        q: 'At what age should a child start abacus?',
        a: 'Five is the usual earliest, and the child needs to recognise numbers to ten and sit with one activity for about fifteen minutes. If they are not there yet we will say so at the trial and suggest coming back in a few months — starting too early is the most common reason children give abacus up.',
      },
    ],
    voice: null,
    schools: [],
  },
];

export const publishedLocations = locations.filter((l) => l.published);

export function locationPath(slug) {
  return `/kids-classes-in-${slug}`;
}

export function getLocation(slug) {
  return publishedLocations.find((l) => l.slug === slug) || null;
}

/* True when the centre itself is in this area rather than merely serving it.
   Drives the difference between "classes in Kondapur" and "classes for
   Kondapur families" so the page never overstates where the room actually is. */
export function isCentreArea(location) {
  return Boolean(
    address.neighbourhood &&
      address.neighbourhood.trim().toLowerCase() === location.name.toLowerCase()
  );
}
