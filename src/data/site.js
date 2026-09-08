export const site = {
  name: 'Brolly Juniors',
  phone: '+91 70360 44555',
  phoneHref: 'tel:+917036044555',
  whatsappHref: 'https://wa.me/917036044555',
  email: 'brollyjuniors.in@gmail.com',
  tagline: 'Where curiosity finds shelter.',
  footerAbout:
    "Hyderabad's joyful learning home, where children build future-ready skills under one trusted roof.",
  copyright:
    '© 2026 Brolly Juniors. Made with care in Hyderabad. Where curiosity finds shelter.',

  /* Where every trial booking submitted through the form is written: the /exec
   * URL of the Apps Script deployment whose source is kept in
   * scripts/google-sheet-endpoint.gs. See docs/GOOGLE_SHEET_FORM.md.
   *
   * Editing that .gs file does not change what this URL serves — a web app
   * keeps serving the version it was deployed with. After an edit, redeploy via
   * Deploy → Manage deployments → pencil → Version: New version, which keeps
   * this same URL. "New deployment" would mint a different one and the site
   * would carry on posting to the old.
   *
   * Emptying this does not break the form: it falls back to handing the parent
   * a prefilled WhatsApp message, so an enquiry is never dropped on the floor. */
  formEndpoint:
    'https://script.google.com/macros/s/AKfycbyu8Ty1jo053LYVtx07yspakDcDFbIN_xEoRQPosLlXl6Xar_aTldcNa3red-YlfOmN/exec',
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
  /* The rest came across from the standalone phonics build. The visible FAQ
     list and the FAQPage schema both read this array, so a question added here
     appears in both. */
  {
    q: 'What is phonics, in plain terms?',
    a: 'Phonics is the relationship between letters and the sounds they make. Once a child knows that C says /k/, A says /æ/ and T says /t/, they can blend those three sounds together and read the word CAT for themselves.',
  },
  {
    q: 'Are phonics classes suitable for beginners?',
    a: 'Yes — beginners are expected. Children who do not yet know the alphabet start with letter recognition and a few basic sounds, and nothing assumes prior knowledge at any point.',
  },
  {
    q: 'What do kids learn in phonics classes?',
    a: 'Alphabet recognition, letter sounds, vowel and consonant sounds, beginning and ending sounds, sound blending and segmenting, CVC words, sight words, spelling basics, vocabulary and early reading.',
  },
  {
    q: 'Do children learn sound blending?',
    a: 'Yes, and it is the step where phonics turns into reading. Children practise pushing sounds together — /k/ and /æ/ and /t/ becoming CAT — starting with three-sound words before anything longer.',
  },
  {
    q: 'Do phonics classes include spelling?',
    a: 'Yes. Spelling is blending in reverse: a child hears a word, breaks it into sounds, and writes a letter for each one. Simple three-sound words are practised first.',
  },
  {
    q: 'Is phonics the same as learning to read?',
    a: 'No. Phonics is one part of it. A child also needs vocabulary, comprehension and regular reading practice. Phonics gives them the decoding tool; the rest comes from reading widely and talking about what was read.',
  },
  {
    q: 'Can children learn phonics through games?',
    a: 'Yes, and it is the main approach used. Sound games, picture matching, word building, rhyming activities and reading cards keep children engaged, which means they practise for longer than they would with worksheets.',
  },
  {
    q: 'How can parents practise phonics at home?',
    a: 'Practise a few letter sounds each day, read simple books together, ask your child what sound a word starts with, and build small words using letter cards. Five or ten minutes on most days is plenty.',
  },
  {
    q: 'What should parents look for in a phonics class?',
    a: 'Small steps, plenty of speaking aloud, and a clear order to the sounds being taught. Ask how the centre decides where a child starts, because a child placed too far ahead will guess rather than decode.',
  },
  {
    q: 'How much do phonics classes for kids cost?',
    a: 'Fees vary with the child’s age, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
  },
  {
    q: 'How can I book a phonics trial class?',
    a: 'Use the booking form with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and which letters or sounds they already know, so the session starts at the right point.',
  },
];

/* Abacus — the questions parents actually ask before enrolling.
 *
 * Twenty of them, which is more than any other page carries, because this is
 * the programme families research hardest and the one where the honest answer
 * is most often "it depends on the child". Every answer that could be read as
 * a promise about school marks, IQ or a fixed timeline says plainly that it is
 * not one. That is a deliberate editorial line, not caution for its own sake:
 * abacus marketing in this city is full of claims nobody can evidence, and the
 * page has to be the one a parent can hold us to.
 *
 * These feed the visible FAQ and the FAQPage structured data from the same
 * array — see lib/faqs.js — so the markup and the schema cannot drift.
 */
export const abacusFaqs = [
  {
    q: 'What are abacus classes?',
    a: 'Abacus classes teach children to calculate on a bead frame, where each rod stands for a place value. Children learn addition and subtraction, then multiplication and division, by moving beads — and gradually learn to picture the abacus mentally and calculate without touching it.',
  },
  {
    q: 'What age is best to start abacus?',
    a: 'Children usually begin once they recognise numbers and can sit with one focused activity for a short while. Starting age matters less than readiness, so we assess where a child should begin during the free trial class rather than going by age alone. At Brolly Juniors the programme runs from ages 5 to 11.',
  },
  {
    q: 'Are abacus classes suitable for beginners?',
    a: 'Yes. The pathway starts from bead values and place value, so no prior abacus experience is needed. Beginners are placed at Level 1.',
  },
  {
    q: 'How do abacus classes help children with maths?',
    a: 'They build number sense and calculation practice. Children get comfortable with how numbers split and combine, which makes ordinary school arithmetic feel more familiar. Abacus is a skill programme, not a replacement for the school syllabus, and it does not guarantee exam results.',
  },
  {
    q: 'Does abacus improve mental calculation?',
    a: 'Mental calculation is the point of the programme. After the physical stage, children practise visualising the abacus and calculating from that mental image. How far each child takes it varies with practice and consistency.',
  },
  {
    q: 'How long does it take to learn abacus?',
    a: 'The full Brolly Juniors pathway is ten levels and typically takes 24 to 36 months, but that depends on the starting level, attendance and how regularly a child practises between classes. We give you a realistic estimate for your child after the trial assessment.',
  },
  {
    q: 'How many levels are there in the abacus course?',
    a: 'Ten, grouped into five stages: Soroban foundations, the small and big friend rules, the mental transition, speed and complexity, and mastery. A child moves up when the current level is comfortable, not on a fixed calendar.',
  },
  {
    q: 'Are abacus classes available online?',
    a: 'Ask us about current online availability. For younger children we generally recommend classroom sessions, because the educator can watch and correct finger technique directly — which is difficult to do well over a video call.',
  },
  {
    q: 'Are offline abacus classes available in Hyderabad?',
    a: 'Yes. Classroom abacus batches run at the Brolly Juniors centre at Nizampet X Roads, Hyderabad. Contact us for the batches currently open.',
  },
  {
    q: 'What is the abacus course fee in Hyderabad?',
    a: 'Fees vary with the level, the learning mode and the duration enrolled for, so a single number would be misleading. Tell us your child’s age and preferred mode and we will send the current fee for that combination.',
  },
  {
    q: 'Are weekend abacus classes available?',
    a: 'Weekend batches are part of the schedule, but availability changes as groups fill. Check current weekend availability before you plan around it.',
  },
  {
    q: 'Can school students join abacus classes?',
    a: 'Yes. Most abacus learners at Brolly Juniors attend school and come to classes after school hours or at weekends.',
  },
  {
    q: 'Does my child need prior maths knowledge?',
    a: 'No. Number recognition and a willingness to sit with a short activity are enough. Everything else is taught from the beginning.',
  },
  {
    q: 'How often should children practise abacus?',
    a: 'Short and regular beats long and occasional. Ten to fifteen focused minutes on most days keeps the skill in place far better than one long weekend session.',
  },
  {
    q: 'What happens in a typical abacus class?',
    a: 'A warm-up, the day’s concept with worked examples, guided practice while the educator watches technique, an interactive activity, mental maths practice at each child’s level, then a recap and a short practice set for home.',
  },
  {
    q: 'Can parents track their child’s progress?',
    a: 'Yes. We share what has been covered, practice completion and where your child needs more work. At home, watch for willingness to attempt a sum unprompted and the ability to explain the method — both appear well before speed does.',
  },
  {
    q: 'How large are abacus batches?',
    a: 'Regular centre batches are capped at eight children, so the educator can observe and correct bead technique, hand movement, pacing and accuracy individually.',
  },
  {
    q: 'How do I choose the right abacus class for my child?',
    a: 'Look at three things: whether the child is placed by ability rather than age, whether the educator watches technique in the early stage, and whether you are told what is happening between classes. Attend a trial class before enrolling anywhere.',
  },
  {
    q: 'Where are abacus classes available in Hyderabad?',
    a: 'Brolly Juniors runs abacus classes from its centre at Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad 500072 — beside Sri Bhramaramba Theatre, near JNTU Metro Station.',
  },
  {
    q: 'How do I book a trial abacus class?',
    a: 'Use the Book a free trial page, call us, or message us on WhatsApp. We will confirm a slot and tell you what to bring.',
  },
];

/* The AI hub page's FAQ set.
 *
 * Distinct from aiFaqs() below, which answers for one class and is used on the
 * five class pages. A parent landing on /ai-for-kids has not chosen a class
 * yet, and asks broader questions — what AI classes even are, what age to
 * start, whether coding is needed, whether it is safe. Where an answer touches
 * something the site states concretely elsewhere (72 sessions, 36 weeks, ages
 * and tools), it says so rather than deferring to "ask the team": a page that
 * knows its own programme should not send a parent away to find out. */
export const aiProgramFaqs = [
  {
    q: 'What are AI classes for kids in Hyderabad?',
    a: 'They teach children what Artificial Intelligence is, where it is used, and how to work with it through simple activities and projects — alongside privacy, fact-checking and responsible use. At Brolly Juniors this runs as a 36-week programme, taught in person, with a separate curriculum for each class from 6 to 10.',
  },
  {
    q: 'What age can kids start learning AI?',
    a: 'The Brolly Juniors programme runs from Class 6 to Class 10. There is no single starting age that suits every child, so what matters more is reading level, comfort with a computer and the ability to follow a multi-step instruction. The free trial class is where we check that.',
  },
  {
    q: 'Is coding required to learn AI?',
    a: 'No. Children start with everyday examples, prompting, research and creative work. The Python and coding pathway is a separate programme, and children often take both — but neither is a prerequisite for the other.',
  },
  {
    q: 'What do kids learn in AI classes?',
    a: 'AI basics, generative AI concepts, prompting, machine learning fundamentals, research and verification, images, audio and video, privacy, bias and ethics, and a capstone project. Nine modules of eight sessions each, at a depth set by the class.',
  },
  {
    q: 'Is AI safe for children?',
    a: 'It is safer when children use age-appropriate tools under supervision and are taught the habits explicitly: protect personal information, check results before trusting them, and ask an adult when unsure. Those habits are practised in class throughout, not covered once and dropped.',
  },
  {
    q: 'Which AI tools will students use?',
    a: 'Age-appropriate tools such as ChatGPT, Claude, image generators, ElevenLabs and HeyGen. What students actually learn is the transferable workflow rather than one product, so specific tools may change as safer or more suitable options become available.',
  },
  {
    q: 'What projects can kids build in AI classes?',
    a: 'Story prompts refined through testing, a simple help-bot plan, image idea activities, fact-checking tasks, sorting and pattern activities, and everyday problem-solving projects — finishing with a capstone the child presents and can explain.',
  },
  {
    q: 'How do AI classes help children?',
    a: 'They build logical thinking, creativity, communication, problem-solving, confidence with technology and responsible digital habits. The parts that keep working when the tools change are precise prompting, checking whether an answer is true, and being able to explain what you made and why.',
  },
  {
    q: 'What is the difference between AI and coding classes?',
    a: 'AI classes are about understanding how computers use information and patterns to produce results, and how to work with that well. Coding classes are about giving computers step-by-step instructions. They support each other, but they are different subjects and separate programmes here.',
  },
  {
    q: 'Can children learn generative AI?',
    a: 'Yes, through age-suitable activities with guidance. Children learn how a tool creates text or images from an instruction, how changing the instruction changes the result, and why generated content still has to be checked before it is used.',
  },
  {
    q: 'How many sessions are included?',
    a: 'Seventy-two guided sessions: two one-hour sessions each week across 36 instructional weeks, made up of nine modules of eight sessions plus a capstone project.',
  },
  {
    q: 'How much do AI classes for kids cost?',
    a: 'Fees depend on the class, the duration enrolled for and what is included, so a single number would be misleading. Tell us your child’s class and we will send the current fee for exactly that. Nothing is payable before the free trial.',
  },
  {
    q: 'Are online or offline AI classes available in Hyderabad?',
    a: 'The AI programme is taught in person at the centre at Nizampet X Roads. That is a deliberate choice: with eight children in a room, a child who has disengaged is visible in the same session rather than in month four. Ask us if travel is difficult and we will tell you honestly what we can offer.',
  },
  {
    q: 'Is there a free trial class?',
    a: 'Yes, one per new family. Your child sits in a real session and you see the teaching style, the language used and how questions are handled before deciding anything.',
  },
  {
    q: 'How can parents choose the right AI class for their child?',
    a: 'Check how lessons adapt to different school levels, whether the curriculum has a clear path, how much time goes to practice rather than watching, what the child will actually build, how mentors handle mistakes, which tools are used and what happens to personal information, the batch size, and how you will hear about progress. Then attend a trial before enrolling anywhere.',
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
  /* The rest are class-agnostic, so they read the same on the hub page and on
     every class page. They came across from the standalone Python build; the
     visible list and the FAQPage schema both read this array, so a question
     added here appears in both. */
  {
    q: 'What are Python classes for kids?',
    a: 'Structured lessons that teach children to write real programs in Python. Children in Classes 6 to 10 learn syntax, logic, loops, functions and data handling, and build a working project at the end of every module.',
  },
  {
    q: 'What is the best age to start learning Python?',
    a: 'The Brolly Juniors Python programme begins at Class 6. Before that, children usually benefit more from coding and digital-skills foundations, which build the reading, typing and logical sequencing that typed Python depends on.',
  },
  {
    q: 'Is Python suitable for beginners?',
    a: 'Yes. Python’s syntax reads close to plain English, and a child can produce a working result within their first session. The first module of every annual plan establishes the foundation from scratch.',
  },
  {
    q: 'What will kids learn in Python classes?',
    a: 'Python syntax and output, variables and data types, conditions, loops, functions, lists, debugging and project building — then progressively more demanding work in later classes, up to web, data and AI-enabled projects in Class 10.',
  },
  {
    q: 'Are Python classes available online?',
    a: 'The programme is built around in-person sessions at the Hyderabad centre, so online delivery is not something we advertise. If online is your only workable option, contact us and we will tell you plainly whether we can serve you well.',
  },
  {
    q: 'Are classroom Python classes available in Hyderabad?',
    a: 'Yes. Classes run in person at Nizampet X Roads, Hyderabad, in batches capped at eight children, with the same educator each week.',
  },
  {
    q: 'What is the Python course fee in Hyderabad?',
    a: 'Fees vary with the child’s class, programme structure, learning mode and duration, so we do not publish a single figure. Send us your child’s class and we will share the current fee for that annual plan.',
  },
  {
    q: 'Are weekend Python classes available?',
    a: 'Weekend batches run subject to availability, alongside weekday after-school batches. Available slots change through the year, so check current availability with us.',
  },
  {
    q: 'How long does it take to learn Python?',
    a: 'Each annual plan runs 36 weeks and 72 sessions. Children write their first working program in the first module; being able to plan and build a program independently takes most of a year of consistent practice.',
  },
  {
    q: 'What projects can kids build with Python?',
    a: 'Early projects include calculators, quiz games, number-guessing games, rock-paper-scissors, to-do lists and simple text adventures. Later classes build larger applications, and Class 10 works on web, data and AI-enabled projects with a deployed capstone.',
  },
  {
    q: 'How can I book a free Python trial class?',
    a: 'Book a free trial with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s class and what they enjoy, and we will suggest the closest fit. There is no upfront payment.',
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
