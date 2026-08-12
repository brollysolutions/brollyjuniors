export const site = {
  name: 'Brolly Juniors',
  phone: '+91 81868 44555',
  phoneHref: 'tel:+918186844555',
  whatsappHref: 'https://wa.me/918186844555',
  email: 'brollyjuniors.in@gmail.com',
  tagline: 'Where curiosity finds shelter.',
  footerAbout:
    "Hyderabad's joyful learning home, where children build future-ready skills under one trusted roof.",
  copyright:
    '© 2026 Brolly Juniors. Made with care in Hyderabad. Where curiosity finds shelter.',
};

/* ---------------------------------------------------------------------------
 * NAP — Name, Address, Phone.
 *
 * ⚠️ FILL IN THE BLANK FIELDS. See docs/GBP_SETUP.md §1.
 *
 * This is the single source of truth for the address. The footer, the contact
 * page, the map embed and the LocalBusiness structured data all read from here,
 * so filling it in once makes every surface consistent — and NAP consistency
 * between the website and Google Business Profile is a direct Local Pack
 * ranking signal.
 *
 * Every value must match the Google Business Profile listing *character for
 * character*: same abbreviations, same punctuation, same capitalisation.
 *
 * Empty fields are omitted everywhere rather than guessed at. A wrong address
 * in structured data is worse than no address, so nothing here is invented.
 * ------------------------------------------------------------------------- */
export const address = {
  streetAddress: 'Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads',
  neighbourhood: 'Nizampet',
  locality: 'Hyderabad',
  region: 'Telangana',
  regionCode: 'IN-TG',
  postalCode: '500072',
  country: 'IN',

  /* Landmarks, kept out of streetAddress so the postal address in structured
     data stays clean. Shown as directions text on the contact page. */
  landmarks: 'Beside Sri Bhramaramba Theatre, near JNTU Metro Station',

  /* From Google Maps: right-click the centre pin → the first menu item is
     "lat, lng". Paste the two numbers here. Used by geo meta tags and schema. */
  latitude: null,
  longitude: null,

  /* Paste the "Share → Embed a map" src URL from Google Maps, or leave blank.
     Blank means the contact page shows directions text instead of an iframe. */
  mapEmbedSrc: '',

  /* Google Business Profile links, available from the GBP dashboard once the
     listing is verified. See docs/GBP_SETUP.md and docs/REVIEWS_PLAYBOOK.md. */
  placeUrl: '', // e.g. 'https://maps.app.goo.gl/xxxxxxxx' — "View on Google Maps"
  reviewUrl: '', // e.g. 'https://g.page/r/xxxxxxxx/review' — the direct review link
};

/* Batch times / opening hours.
 *
 * These are centre opening hours, not batch times — a parent reads them to know
 * when someone will answer the door or the phone. They must match the Google
 * Business Profile exactly; Google cross-checks the two.
 *
 * `time` is what a human reads. `schema` is what LocalBusiness structured data
 * emits, so it stays in 24-hour form with full day names.
 */
export const openingHours = [
  {
    days: 'Monday – Saturday',
    time: '10:00 am – 7:00 pm',
    schema: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  },
];

/* Profiles that prove the same entity exists elsewhere. Google uses these to
   connect the website to the Business Profile — add each URL as you create it
   (see docs/CITATIONS.md). Blank entries are simply not emitted. */
export const socialProfiles = [
  '', // Google Business Profile / Maps place URL
  '', // Facebook page
  '', // Instagram
  '', // YouTube
  '', // JustDial listing
  '', // Sulekha listing
  '', // UrbanPro listing
];

/* Areas the centre draws families from. Drives the "areas served" copy and the
   areaServed property in structured data. Keep it honest: list only the areas
   families genuinely travel from. See src/data/locations.js for the ones that
   get a full page of their own. */
export const areasServed = [
  'Nizampet',
  'Kukatpally',
  'Miyapur',
  'Kondapur',
  'Madhapur',
  'Gachibowli',
  'Hitech City',
  'Manikonda',
  'Nallagandla',
];

/* A formatted one-line address, or null when the address has not been filled
   in yet. Used by the footer, the contact page and the citation docs so there
   is exactly one string to keep consistent. */
export function formattedAddress() {
  const parts = [
    address.streetAddress,
    address.neighbourhood,
    `${address.locality}, ${address.region}`,
    address.postalCode,
  ].filter(Boolean);
  if (!address.streetAddress) return null;
  return parts.join(', ');
}

export const pillars = [
  { icon: '💡', title: 'Understand', text: 'Clear explanation' },
  { icon: '🛠️', title: 'Practise', text: 'Guided activities' },
  { icon: '🏆', title: 'Create', text: 'Visible outcomes' },
];

export const programs = [
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    text: 'A separate 72-session curriculum for every class. Practical AI literacy, creativity, research and responsible use.',
    tags: ['Class 6–10', '36 weeks'],
    to: '/ai-for-kids',
    image: '/images/ai.svg',
    imageAlt: 'A friendly AI robot beside a chat window',
  },
  {
    icon: '🐍',
    title: 'Python & Coding',
    text: 'Real typed Python, class by class—from a first program to games, data, web applications and AI-enabled projects.',
    tags: ['Class 6–10', '36 weeks'],
    to: '/python-for-kids',
    image: '/images/python.svg',
    imageAlt: 'A code editor window with a friendly python snake',
  },
  {
    icon: '🔤',
    title: 'Phonics & Early Reading',
    text: 'A six-level synthetic phonics pathway that takes young learners from single sounds to blending, tricky words and fluent reading.',
    tags: ['Ages 4–9', '6 levels'],
    to: '/junior-skills/phonics',
    image: '/images/phonics.svg',
    imageAlt: 'Phonics letter blocks and sound bubbles',
  },
  {
    icon: '🧮',
    title: 'Abacus Mastery',
    text: 'A 10-level Soroban pathway that strengthens focus, working memory, mental visualisation and number confidence.',
    tags: ['Ages 5–11', '10 levels'],
    to: '/junior-skills/abacus',
    image: '/images/abacus.svg',
    imageAlt: 'A wooden soroban abacus with colourful beads',
  },
  {
    icon: '➗',
    title: 'Vedic Maths',
    text: 'Pattern-based mental calculation techniques taught with understanding, practice and friendly challenges.',
    tags: ['Ages 7–13', '12 weeks'],
    to: '/junior-skills/vedic-maths',
    image: '/images/vedic-maths.svg',
    imageAlt: 'A board of quick mental maths patterns',
  },
  {
    icon: '🎤',
    title: 'Public Speaking',
    text: 'A five-stage confidence ladder from show-and-tell to structured stories, conversation and presentations.',
    tags: ['Class 1–5', 'Weekly'],
    to: '/junior-skills/public-speaking',
    image: '/images/public-speaking.svg',
    imageAlt: 'A child speaking confidently at a microphone',
  },
  {
    icon: '🎨',
    title: 'Creative & Digital Skills',
    text: 'Art, storytelling, logical thinking and safe digital creation for curious young learners.',
    tags: ['Class 1–5', 'Joyful'],
    to: '/junior-skills/digital-literacy',
    image: '/images/digital-literacy.svg',
    imageAlt: 'A laptop with creative tools and an online-safety shield',
  },
];

export const familyFaqs = [
  {
    q: 'Can we attend a free trial before enrolling?',
    a: 'Yes. Every new family can book one free trial class to understand the teaching approach, meet the educator and confirm that the program is a good fit.',
  },
  {
    q: 'How large are Brolly Juniors batches?',
    a: 'Regular centre batches are capped at eight children so every learner can be seen, heard and supported. School-delivery formats are planned separately with the school.',
  },
  {
    q: 'Where is Brolly Juniors located?',
    a: 'The centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre and close to JNTU Metro Station, at metro pillar A689. It is open Monday to Saturday, 10:00 am to 7:00 pm.',
  },
];

export const phonicsFaqs = [
  {
    q: 'What age should a child start phonics?',
    a: 'Most children begin between ages 4 and 6, but the program also supports older learners in Classes 1–3 who are still building reading confidence. A short readiness check before the first class decides the starting level.',
  },
  {
    q: 'Which phonics method do you follow?',
    a: 'A synthetic phonics approach: children learn letter sounds first, then blend those sounds to read words and segment words to spell them. Sight words are taught alongside, because English does not follow the code every time.',
  },
  {
    q: 'How long does the full pathway take?',
    a: 'The six levels usually take 9–12 months at two sessions a week. Children who join with some reading already in place are placed at a later level after the readiness check.',
  },
  {
    q: 'Will phonics help with school spelling and reading?',
    a: 'Yes. Blending, segmenting and letter-sound accuracy are the same skills school reading and dictation depend on. Parents receive a short weekly practice note so home reading stays consistent with class work.',
  },
];

export const aiFaqs = (klass) => [
  {
    q: `Does the Class ${klass} AI program require coding?`,
    a:
      klass >= 9
        ? 'Coding is not a prerequisite. Students may encounter light technical concepts, but the emphasis remains on practical AI literacy, projects and responsible use.'
        : 'No. The program develops practical AI literacy, creativity, research habits and responsible tool use without requiring programming.',
  },
  {
    q: 'Which AI tools will students use?',
    a: 'Students learn transferable workflows using age-appropriate tools such as ChatGPT, Claude, image generators, ElevenLabs and HeyGen. Specific tools may change as safer or more suitable options become available.',
  },
  {
    q: 'How many classes are included?',
    a: 'The academic-year program includes 72 guided sessions: two one-hour sessions each week for 36 instructional weeks.',
  },
  {
    q: 'How do you teach AI safety?',
    a: 'Privacy, fact-checking, copyright awareness, bias, respectful use and knowing when to ask an adult are embedded throughout the curriculum, not treated as a one-time lesson.',
  },
];

export const pythonFaqs = (klass) => [
  {
    q: `Is this Python curriculum suitable for a Class ${klass} beginner?`,
    a: "Yes. The first module establishes the required foundation, while projects and practice are adjusted to the learner's prior experience.",
  },
  {
    q: 'How many Python sessions are included?',
    a: 'Students complete 72 guided sessions across 36 instructional weeks, with two one-hour classes per week.',
  },
  {
    q: 'Will students build real projects?',
    a: 'Yes. Every module produces a small working artefact, and the year ends with a class-appropriate capstone that students explain and demonstrate.',
  },
  {
    q: 'Does my child need a laptop?',
    a: 'Regular access to a laptop or desktop is recommended for practice. Schools can also deliver the program through a suitable computer lab.',
  },
];

export const testimonials = [
  {
    quote:
      'My daughter went from dreading maths to teaching her grandmother shortcut tricks. The Vedic Maths class genuinely changed her relationship with numbers.',
    name: 'Anitha R.',
    role: 'Mother of Aarvi, age 9',
  },
  {
    quote:
      "He built a chatbot in week three. He's nine. We had to set screen-time limits on his learning, which is a problem I'm happy to have.",
    name: 'Vikram S.',
    role: 'Father of Reyansh, age 9',
  },
  {
    quote:
      'What I love most is that the teachers know my son. They asked about his football match before the class started. That kind of attention is rare.',
    name: 'Meghana K.',
    role: 'Mother of Ishaan, age 11',
  },
];

export const ladder = [
  { klass: 'Class 6', title: 'Explore', text: 'Safe foundations, clear prompts and first coding projects.' },
  { klass: 'Class 7', title: 'Build', text: 'Research, creative media, stronger logic and reusable code.' },
  { klass: 'Class 8', title: 'Connect', text: 'Data, multimodal creation, structured programs and games.' },
  { klass: 'Class 9', title: 'Apply', text: 'Evaluation, automation concepts, databases and web apps.' },
  { klass: 'Class 10', title: 'Launch', text: 'AI products, responsible systems and portfolio capstones.' },
];
