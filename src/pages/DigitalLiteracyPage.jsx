import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { ChallengeQuiz, TopicTabs } from '../components/ProgramBits.jsx';

/* The digital literacy programme page.
 *
 * Ported from the standalone digital-literacy-classes-for-kids-in-hyderabad
 * build. It keeps its entry in data/infoPages.js — the route, the SEO record,
 * the six-module curriculum and the FAQ set all still come from there, so this
 * component supplies the page's body and nothing else.
 *
 * Three things are handled rather than transcribed:
 *
 *   - The source's contact details were hardcoded into the markup. Here they
 *     come from data/site.js, so there is one place to change a number.
 *   - Its demo form posted to a placeholder endpoint. The site already has a
 *     booking form that reaches the sheet, so components/TrialForm.jsx renders
 *     in its place, carrying the programme name.
 *   - Its "suggested learning groups", and its repeated "confirm with the
 *     team" notes on timings, modes and fees, are kept as written. Those are
 *     honest about what is genuinely not published, and inventing a timetable
 *     to fill the gap would be worse than the gap.
 *
 * The safety sorter is the source's own interactive block, rebuilt on the
 * shared ChallengeQuiz so there is one set of answer-marking behaviour across
 * the programme pages.
 */

const TRUST = [
  {
    title: 'Digital skills',
    text: 'The everyday computer skills school keeps asking for — typing, saving, finding, sharing.',
  },
  {
    title: 'Safe technology use',
    text: 'Online safety taught as a habit built into every task, not as a lecture at the end.',
  },
  {
    title: 'Practical learning',
    text: 'Children do the task themselves. Being told how to organise files is not the same as having organised some.',
  },
  {
    title: 'Kids-focused teaching',
    text: 'Explanations use examples children recognise, at a pace that suits their age and reading level.',
  },
];

const HERO_OUTCOMES = [
  'Open a computer and use it without help at every step',
  'Save work sensibly and find it again next week',
  'Search properly, and question what comes back',
  'Recognise an unsafe request and know who to tell',
  'Build and present something of their own',
];

/* The five situations from the source's safe/not-safe sorter. Two options
   rather than four, because the judgement being practised is binary: this is
   fine, or this is a stop-and-ask. */
const SAFE = "That's fine";
const CHECK = 'Stop and ask an adult';

const SITUATIONS = [
  {
    q: 'A game asks for your full name, your school and your home address before you can play.',
    hint: 'Choose what a child should do.',
    opts: [SAFE, CHECK],
    a: CHECK,
    why: 'A game does not need to know where you live or which school you go to. That is personal information.',
  },
  {
    q: 'Your best friend asks for your password so they can log in and save your score for you.',
    hint: 'Choose what a child should do.',
    opts: [SAFE, CHECK],
    a: CHECK,
    why: 'Passwords stay private, even from good friends. If someone needs a score saved, do it yourself.',
  },
  {
    q: 'A message says you have won a free phone and asks you to click a link straight away.',
    hint: 'Choose what a child should do.',
    opts: [SAFE, CHECK],
    a: CHECK,
    why: 'A prize you did not enter for, plus a link, plus a rush — that is the pattern to stop on.',
  },
  {
    q: 'You are looking for facts about the solar system for homework on a school library website.',
    hint: 'Choose what a child should do.',
    opts: [SAFE, CHECK],
    a: SAFE,
    why: 'Looking things up on a known, trusted site is exactly what search skills are for.',
  },
  {
    q: 'Someone you have never met online asks you to send a photo of yourself.',
    hint: 'Choose what a child should do.',
    opts: [SAFE, CHECK],
    a: CHECK,
    why: 'A stranger asking for a photo is always a stop-and-tell, however friendly the message sounds.',
  },
];

const WHY_LEARN = [
  {
    icon: '💻',
    title: 'Computer confidence',
    text: 'A child who is not afraid of a computer will try things, explore menus and recover from mistakes instead of freezing and calling for help.',
  },
  {
    icon: '🛡️',
    title: 'Safe internet habits',
    text: 'Habits formed early tend to stick. Keeping personal details private and checking before clicking are easier to teach at nine than at fifteen.',
  },
  {
    icon: '👀',
    title: 'Digital awareness',
    text: 'Children learn that a website, an advert and a message from a stranger are different things, and that not everything on a screen is there to help them.',
  },
  {
    icon: '⚖️',
    title: 'Responsible technology use',
    text: 'How much, when and how to use a device is part of the subject. Children think about their own habits rather than being lectured about them.',
  },
  {
    icon: '✉️',
    title: 'Online communication',
    text: 'Writing a clear message, being polite in a group chat and understanding how tone reads on a screen are learnable skills.',
  },
  {
    icon: '🔎',
    title: 'Information awareness',
    text: 'Children practise judging whether a source looks reliable, instead of trusting the first result they see.',
  },
  {
    icon: '📄',
    title: 'Basic productivity skills',
    text: 'Typing, formatting a document, organising files and finding work again save a child real time every school week.',
  },
  {
    icon: '🎯',
    title: 'Problem solving',
    text: 'When something on screen does not work, children learn to read the message, try one change and check — rather than guess repeatedly.',
  },
  {
    icon: '💡',
    title: 'Future readiness',
    text: 'These are foundation skills that make coding, robotics and AI much easier to start. They are not a promise about careers.',
  },
];

const BENEFITS = [
  { title: 'Digital confidence', text: 'The child stops asking someone else to do the computer part.' },
  {
    title: 'Computer awareness',
    text: 'They know what the parts do, where things are saved and how to get back to them.',
  },
  { title: 'Online safety', text: 'They recognise a request that should not be answered, and know who to tell.' },
  {
    title: 'Responsible use',
    text: 'They can think about their own screen habits rather than only being told about them.',
  },
  {
    title: 'Better digital habits',
    text: 'Saving properly, naming files sensibly, closing what is not needed — small habits that compound.',
  },
  { title: 'Information awareness', text: 'They pause before believing something they read online.' },
  { title: 'Problem solving', text: 'They try to fix the screen problem before handing the device over.' },
  {
    title: 'Independent learning',
    text: 'They can look something up, follow the steps and finish a task by themselves.',
  },
];

const TOPICS = [
  'Computer basics',
  'Keyboard & mouse skills',
  'Files & folders',
  'Basic digital tools',
  'Internet basics',
  'Search skills',
  'Online safety',
  'Password awareness',
  'Privacy awareness',
  'Digital communication',
  'Digital etiquette',
  'Responsible technology use',
  'Information awareness',
  'Creative digital activities',
];

/* The source's six curriculum modules. The stage track above this carries the
   same six as a path with outcomes; these panels carry what a child actually
   does inside each one, which is the question a parent asks second. */
const MODULES = [
  {
    key: 'basics',
    label: '1. Computer basics',
    title: 'Module 1 — Computer basics',
    intro:
      'The parts of a computer and what each one does, starting up and shutting down properly, using a mouse with control, typing with both hands, and opening, closing and switching between programs.',
    bullets: [
      { term: 'Activities', text: 'a typing accuracy game, a click-and-drag sorting task, opening three programs and moving between them.' },
    ],
    outcome:
      'sit down at a computer, open what they need and use it without asking for help at every step.',
  },
  {
    key: 'tools',
    label: '2. Digital tools',
    title: 'Module 2 — Digital tools',
    intro:
      'Creating a simple document, basic formatting so work looks readable, saving it, naming it sensibly, and using folders so it can be found next week.',
    bullets: [
      { term: 'Activities', text: 'type and format a short piece of work, save it into a folder the child creates, then close everything and find it again.' },
    ],
    outcome: 'produce a tidy document and locate their own saved work without searching the whole computer.',
  },
  {
    key: 'internet',
    label: '3. Internet basics',
    title: 'Module 3 — Internet basics',
    intro:
      'What a browser, a website and a link are, how a search engine works, how to phrase a better search, and how to read results instead of clicking the first one.',
    bullets: [
      { term: 'Activities', text: 'find the answer to a question using two different searches and compare which worked better; spot the advert on a results page.' },
    ],
    outcome: 'look something up for homework and tell you where the answer came from.',
  },
  {
    key: 'safety',
    label: '4. Online safety',
    title: 'Module 4 — Online safety',
    intro:
      'What personal information is and why it stays private, what makes a password strong, why passwords are not shared with friends, being careful with unknown links and messages, and asking a trusted adult when something feels wrong.',
    bullets: [
      { term: 'Activities', text: 'sort situations into “fine” and “stop and ask”; build a strong password using a rule instead of a random guess.' },
    ],
    outcome:
      'explain what they would not share online and who they would tell if something felt wrong.',
  },
  {
    key: 'responsibility',
    label: '5. Digital responsibility',
    title: 'Module 5 — Digital responsibility',
    intro:
      'Writing clear and polite messages, how tone reads without a face or voice attached, respecting other people online, thinking about screen time, and understanding that what is posted can last.',
    bullets: [
      { term: 'Activities', text: 'rewrite a rude message so it is polite but still honest; discuss what a post might look like to someone else.' },
    ],
    outcome: 'think about the other person before sending or posting something.',
  },
  {
    key: 'practical',
    label: '6. Practical activities',
    title: 'Module 6 — Practical digital activities',
    intro:
      'Everything from the earlier modules used together on a real task, from start to finish, with the child deciding the steps.',
    bullets: [
      { term: 'Activities', text: 'research a small topic, make a short document about it, save it into the right folder and explain how it was put together.' },
    ],
    outcome: 'complete a whole digital task independently and describe what they did.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 6–8',
    title: 'Digital awareness & computer basics',
    text: 'Getting comfortable with the machine itself, and learning the first safety habits before they are needed.',
    chips: ['Parts of a computer', 'Mouse and keyboard', 'Opening and closing', 'Simple saving', 'First safety rules'],
  },
  {
    kv: 'Ages 9–11',
    title: 'Digital skills & safe internet use',
    text: 'The internet enters properly, so searching, privacy and passwords carry more weight.',
    chips: ['Files and folders', 'Documents', 'Search skills', 'Passwords', 'Personal information', 'Digital etiquette'],
  },
  {
    kv: 'Ages 12–14',
    title: 'Practical skills & responsible use',
    text: 'Judgement matters more than mechanics. Children think about sources, privacy and their own habits.',
    chips: ['Productivity tasks', 'Information awareness', 'Privacy settings', 'Online communication', 'Screen habits', 'Independent projects'],
  },
];

const SKILLS = [
  { title: 'Digital confidence', text: 'Willingness to try something on a computer without waiting to be shown.' },
  { title: 'Computer skills', text: 'Typing, saving, organising and moving around a machine comfortably.' },
  { title: 'Online safety', text: 'Recognising a request or link that should be stopped, and telling someone.' },
  { title: 'Problem solving', text: 'Reading the error, changing one thing, checking again.' },
  { title: 'Information awareness', text: 'Asking where something came from before believing it.' },
  { title: 'Communication', text: 'Writing clearly and politely in a message someone else will read.' },
  { title: 'Digital responsibility', text: 'Thinking about other people, and about their own habits, before acting.' },
  { title: 'Independent learning', text: 'Looking something up and finishing the task without handing the device over.' },
];

const ACTIVITIES = [
  {
    icon: '🗂️',
    title: 'Organising files',
    text: 'Create folders, name work sensibly, save it, then close everything and find it again from scratch.',
  },
  {
    icon: '📄',
    title: 'Creating simple documents',
    text: 'Type a short piece of work, format it so it reads well, and save it properly.',
  },
  {
    icon: '🔎',
    title: 'Practising safe searches',
    text: 'Find an answer using two different searches and compare which one worked better, and why.',
  },
  {
    icon: '🔒',
    title: 'Understanding passwords',
    text: 'Build a strong password using a rule the child can remember, and discuss why it is never shared.',
  },
  {
    icon: '⚠️',
    title: 'Spotting safe and unsafe situations',
    text: 'Sort real-looking situations into “fine” and “stop and ask an adult”, and explain the reasoning.',
  },
  {
    icon: '💬',
    title: 'Learning digital etiquette',
    text: 'Rewrite a rude message so it stays honest but reads politely.',
  },
];

const METHOD_STEPS = [
  {
    title: 'Learn the concept',
    text: 'One idea, explained in plain words with an example from outside the computer first.',
  },
  {
    title: 'See a simple example',
    text: 'The educator shows it on screen, slowly, including what it looks like when it goes wrong.',
  },
  {
    title: 'Practise with guidance',
    text: 'The child does it themselves while help is nearby. Questions get asked here.',
  },
  {
    title: 'Complete a practical activity',
    text: 'A real task using the new skill, finished start to finish by the child.',
  },
  {
    title: 'Review and improve',
    text: 'The child explains what they did and what they would change next time.',
  },
];

const SESSION_FLOW = [
  {
    title: 'Welcome',
    text: 'A quick settling-in and a recap question about last week, so the previous skill gets used once more before anything new arrives.',
  },
  {
    title: 'Concept',
    text: 'One new idea, introduced with a comparison children already understand. Only one per session, so nothing gets crowded out.',
  },
  {
    title: 'Demonstration',
    text: 'The step is shown on screen at a pace children can follow, with the mistakes left in rather than edited out.',
  },
  {
    title: 'Hands-on practice',
    text: 'Children do it themselves with guidance available. This is where most of the session is spent.',
  },
  {
    title: 'Activity',
    text: 'A real task using the new skill — save this, find that, search for this, decide whether this is safe.',
  },
  {
    title: 'Review',
    text: 'The child says what they learned and what they found tricky. Explaining it aloud is the fastest check on understanding.',
  },
];

const SAFETY = [
  {
    icon: '🔒',
    title: 'Protecting personal information',
    text: 'Children learn what counts as personal — full name, address, school, phone number, photos — and that it stays with people they know in real life.',
  },
  {
    icon: '🛡️',
    title: 'Using strong passwords',
    text: 'A password that is long and memorable beats a clever short one. Children also learn that passwords are not shared with friends, however close.',
  },
  {
    icon: '⚠️',
    title: 'Being careful with unknown links',
    text: 'Prizes, urgent warnings and free offers are the ones worth pausing on. Children practise recognising the pattern rather than memorising a blocklist.',
  },
  {
    icon: '👀',
    title: 'Understanding privacy',
    text: 'What is posted can be seen by more people than intended, and for longer than expected. Children learn to think before sharing.',
  },
  {
    icon: '🙋',
    title: 'Asking a trusted adult',
    text: 'The most important habit of all. Children are taught that telling an adult is never getting into trouble — it is the correct next step.',
  },
  {
    icon: '💬',
    title: 'Being respectful online',
    text: 'A message without a face still reaches a person. Children practise saying what they mean without being unkind.',
  },
];

const WHY_US = [
  {
    icon: '❤️',
    title: 'Kids-focused learning',
    text: 'Explanations use examples children recognise, pitched at their age and reading level rather than an adult’s.',
  },
  {
    icon: '🧩',
    title: 'Practical activities',
    text: 'Every concept ends in a task the child completes themselves, so understanding can be seen rather than assumed.',
  },
  {
    icon: '💬',
    title: 'Parent-friendly learning',
    text: 'Parents can ask what their child is working on and what they should reinforce at home.',
  },
  {
    icon: '🛡️',
    title: 'Safe digital habits',
    text: 'Safety runs through every module as a habit, rather than sitting in one session at the end.',
  },
  {
    icon: '🪜',
    title: 'Structured learning',
    text: 'Modules run in an order, so nothing is introduced before the skill it depends on.',
  },
  {
    icon: '🚀',
    title: 'A first step into technology',
    text: 'Digital literacy sits alongside coding, robotics and AI here, and is usually the sensible first step into them.',
  },
];

const SUPPORT_LOOKS_LIKE = [
  'One new idea at a time, explained in words the child already uses.',
  'The child works the mouse and keyboard, not the person helping them.',
  'A question asked back, rather than the answer handed over.',
  'Mistakes treated as ordinary, because on a computer they are.',
  'Safety habits reinforced during real tasks, not only when the topic comes up.',
];

const BEFORE_YOU_ENROL = [
  'How many children share one computer?',
  'How much of the session is my child actually at the keyboard?',
  'How is online safety taught — as a session, or throughout?',
  'What will my child be able to do that they cannot do now?',
];

const DEMO_WATCH = [
  'Whether your child is doing the task or watching it',
  'How many children share one computer',
  'Whether the vocabulary matches your child’s level',
  'Whether your child can explain afterwards what they did',
];

const HOME_CHECKS = [
  {
    title: 'Ask them to show you',
    text: '“Find the work you did last week” tells you more than any question about it.',
  },
  {
    title: 'Give them a small real task',
    text: 'Type this list, save it, send it to me — and watch where they hesitate.',
  },
  {
    title: 'Ask a safety question casually',
    text: '“What would you do if a game asked for our address?” The answer shows what has landed.',
  },
  {
    title: 'Notice where they stall',
    text: 'The place a child gets stuck is exactly what to mention to the educator.',
  },
  {
    title: 'Let them keep practising',
    text: 'The skills fade quickly if they are only used once a week in class.',
  },
];

const HOME_GUIDE = [
  {
    title: 'Set healthy device habits',
    text: 'Agree when and where devices are used — not at the table, not in the bedroom overnight. Rules agreed in advance cause fewer arguments than rules invented mid-argument.',
  },
  {
    title: 'Encourage safe browsing',
    text: 'Sit with them sometimes. Watching how your child searches tells you more about their skills than any test would.',
  },
  {
    title: 'Be specific about personal information',
    text: 'Name what counts: full name, address, school, phone number, photos. “Don’t share personal details” is too vague for a nine-year-old.',
  },
  {
    title: 'Encourage questions',
    text: 'React calmly when they bring you something odd. A child who expects a calm response is a child who will tell you next time.',
  },
  {
    title: 'Talk about online behaviour',
    text: 'Discuss what is fair to say to someone online, and what a message can look like from the other side.',
  },
  {
    title: 'Practise digital skills together',
    text: 'Let them do the typing, the searching and the saving when the family needs something done. Real tasks beat exercises.',
  },
];

const NEAR_ME = [
  {
    icon: '📍',
    title: 'Tell us your locality',
    text: 'Share which part of Hyderabad you are in and we can tell you whether attending at Nizampet X Roads is practical for your family.',
  },
  {
    icon: '💻',
    title: 'Ask about learning mode',
    text: 'Classroom sessions run at the centre. Ask whether an online batch is currently available and what device your child would need.',
  },
  {
    icon: '🕒',
    title: 'Check availability',
    text: 'Batch timings shift as groups fill. A quick call or WhatsApp message gets you the current position.',
  },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  {
    icon: '💻',
    title: 'Coding for kids',
    text: 'Sequencing, loops, conditions and debugging — the natural next step after digital literacy.',
    to: '/programs/coding',
  },
  {
    icon: '🐍',
    title: 'Python for kids',
    text: 'Typed programming for children who have outgrown block-based coding.',
    to: '/python-for-kids',
  },
  {
    icon: '🤖',
    title: 'AI for kids',
    text: 'How smart technology works, and how to use it safely and responsibly.',
    to: '/ai-for-kids',
  },
  {
    icon: '🦾',
    title: 'Robotics',
    text: 'Building, sensors and code applied to something physical the child can watch move.',
    to: '/programs/robotics',
  },
  {
    icon: '🧮',
    title: 'Abacus',
    text: 'Mental calculation and concentration through structured, level-based practice.',
    to: '/junior-skills/abacus',
  },
  {
    icon: '♟️',
    title: 'Chess',
    text: 'Planning several moves ahead and thinking about consequences before acting.',
    to: '/programs/chess',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What is digital literacy for kids?',
    a: 'Knowing how to use computers, digital devices, apps and online information safely and responsibly. It covers practical skills like typing, saving files and searching, together with safety habits like protecting personal information and using strong passwords.',
  },
  {
    q: 'Why is digital literacy important for children?',
    a: 'School work, communication and everyday life now assume basic digital skills. Children who understand what they are doing on a device work faster, get less stuck, and are better prepared to recognise something unsafe before they click on it.',
  },
  {
    q: 'At what age should kids learn digital skills?',
    a: 'There is no single right age. Children can start once they read and can follow simple on-screen instructions. Younger children focus on computer basics and safe habits; older children move on to search skills, privacy and independent digital tasks.',
  },
  {
    q: 'How can children stay safe online?',
    a: 'By keeping personal information private, using strong passwords they do not share, being careful with unknown links, thinking before posting, and telling a trusted adult whenever something feels wrong. These habits are practised, not just explained.',
  },
  {
    q: 'Are computer classes good for kids?',
    a: 'They are useful when the child does the work themselves. A class where children mostly watch teaches very little. Ask how much time your child spends at the keyboard before enrolling.',
  },
  {
    q: 'Should my child learn digital literacy before coding?',
    a: 'Usually yes. A child comfortable with files, typing and a browser can focus on the coding itself instead of struggling with the computer around it.',
  },
];

export default function DigitalLiteracyPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Digital literacy classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children build practical digital skills, use computers and digital tools confidently,
                understand online safety, and become responsible digital learners. They practise real
                tasks — typing, saving work, searching properly, spotting what is not safe — rather than
                only being told about them.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  See the curriculum
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Safety taught as a habit
                </li>
                <li>
                  <span className="tick">★</span> Hands on the keyboard
                </li>
              </ul>
            </div>
            <div className="panel">
              <h2>What your child will be able to do</h2>
              <ul className="pill-row">
                {HERO_OUTCOMES.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trust strip ---------- */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="ab-statbar">
            {TRUST.map((t) => (
              <div className="stat" key={t.title}>
                <b>{t.title}</b>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- What is digital literacy ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is digital literacy for kids?"
            lead="Knowing how to use computers, devices, apps and online information safely and responsibly. It is the difference between being able to press the buttons and understanding what is happening."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>Using a phone is not the same as digital literacy</h2>
              <p>
                Most children today can unlock a phone, open an app and find a video before they can tie
                their shoelaces. That is familiarity, not literacy. It is a bit like a child who can turn
                the pages of a book quickly but cannot yet read the words.
              </p>
              <p>
                Digital literacy is the reading part. Where is this file saved? Is this website telling
                me the truth? Why should I not type my address into this box? Who can see what I just
                posted? Those questions do not answer themselves through use alone — a child has to be
                taught them.
              </p>
              <h2>Why children need it</h2>
              <p>
                School work already assumes some of it. Children are asked to type assignments, save and
                submit work, look things up and use learning apps. A child who is comfortable with those
                tasks spends their energy on the actual subject instead of on the computer.
              </p>
              <p>
                The safety side matters just as much. Children come across links, requests, adverts and
                messages that adults have learned to be careful about. Digital literacy gives them the
                habits to pause and check rather than click and hope.
              </p>
              <ul className="flow-strip">
                <li>
                  <span>Learn the concept</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>See an example</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Practise with guidance</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Do a real task</span> <b aria-hidden="true">→</b>
                </li>
                <li>
                  <span>Review and improve</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="prose">
                <h2>Try it: safe, or stop and ask?</h2>
                <p>
                  Read the situation and choose what a child should do. This is the kind of judgement
                  practised in class — calmly, without scaring anyone.
                </p>
              </div>
              {/* The quiz brings its own card, so it is not wrapped in a panel. */}
              <ChallengeQuiz items={SITUATIONS} noun="Situation" />
              <p className="note-line">
                Online safety is taught as everyday judgement, not as a list of frightening warnings.
              </p>
            </div>
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The point of the whole programme</h2>
            <p>
              A confident child online is not the one who clicks fastest. It is the one who knows when to
              stop — and who they would tell. That habit is what digital literacy is really teaching.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Why it matters"
            title="Why should kids learn digital literacy?"
            lead="Not because it leads anywhere impressive on its own, but because almost everything else now assumes it. Homework, reading, communication and safety all run through a screen at some point."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What parents notice"
            lead="What tends to show up first, and what develops more slowly underneath it."
          />
          <div className="grid-4">
            {BENEFITS.map((b) => (
              <div className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Topics ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Topics"
            title="What will kids learn?"
            lead="These areas make up children’s digital literacy. How many a particular child covers, and in what depth, depends on their age and level."
          />
          <div className="skill-tiles">
            {TOPICS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Curriculum ---------- */}
      <div id="curriculum">
        <Curriculum curriculum={page.curriculum} />
      </div>

      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Module by module"
            title="What your child learns, does, and can do afterwards"
            lead="The detail behind the six modules above. Each one has something the child learns, something they do, and an outcome you can check by asking them."
          />
          <TopicTabs
            items={MODULES}
            label="Digital literacy modules"
            outcomeLabel="Expected outcome — the child can"
          />
          <p className="note-line">
            This outline describes how children’s digital literacy is normally structured. Ask us to
            confirm the exact module order, depth and software for the batch your child would join.
          </p>
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Digital literacy for different age groups"
            lead="Suggested learning groups rather than fixed batches — they show how the focus shifts as children grow. Actual grouping is confirmed when your child is placed."
          />
          <div className="grid-3">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.kv}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <p>{a.text}</p>
                <ul className="pill-row">
                  {a.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Two children of the same age often sit at different points, depending on how much they have
            used a computer rather than a phone. A trial session is the quickest way to place a child
            accurately.
          </p>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Skills children build"
            lead="Eight things that develop across the modules, in plain language."
          />
          <div className="grid-4">
            {SKILLS.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Learning by doing"
            title="Practical digital activities"
            lead="Examples of the kind of tasks children complete in class."
          />
          <div className="grid-3">
            {ACTIVITIES.map((a) => (
              <div className="card" key={a.title}>
                <span className="icon">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How classes work ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The learning loop"
            title="How digital literacy classes work"
            lead="Five steps, repeated for every new idea. The same shape each week is part of why it works — children know what is coming."
          />
          <div className="steps">
            {METHOD_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="section-lead center" style={{ marginTop: 32 }}>
            Children spend most of the session with their own hands on the keyboard. Watching someone
            else use a computer teaches very little.
          </p>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What a digital literacy class looks like"
            lead="Six stages, in the same order every time. Children settle quickly when they know what is coming next."
          />
          <ol className="rhythm">
            {SESSION_FLOW.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Online safety ---------- */}
      <section className="band-soft" id="safety">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Digital safety for kids"
            lead="Online safety is taught calmly. Frightening children usually makes them hide problems rather than report them, so the aim is a small set of habits a child can actually use."
          />
          <div className="grid-3">
            {SAFETY.map((s) => (
              <div className="card" key={s.title}>
                <span className="icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Brolly Juniors ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The difference"
            title="Why Brolly Juniors"
            lead="Digital literacy is easy to teach badly — a slideshow about internet safety and a typing app. What makes it work is the child doing the task, with someone watching how they do it."
          />
          <div className="grid-3">
            {WHY_US.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Guided support ---------- */}
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Learning support</span>
            <h2>What guided support looks like</h2>
            <ul className="tick-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              {SUPPORT_LOOKS_LIKE.map((s) => (
                <li key={s}>
                  <span className="tick">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2>Questions worth asking before you enrol</h2>
            <ul>
              {BEFORE_YOU_ENROL.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="note-line">
              Ask us who teaches the batch you are considering, and we will tell you.
            </p>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning modes, timings and fees"
            lead="We share these directly rather than publishing them here, so what you get is current and specific to your child."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
              <p className="kv">Ask us</p>
              <ul>
                <li>Classroom sessions at the centre, computers provided</li>
                <li>Online availability varies by batch</li>
                <li>We will say honestly which suits your child</li>
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Class timings</h3>
              <p className="kv">Changes through the year</p>
              <ul>
                <li>Weekday, after school</li>
                <li>Weekend batches</li>
                <li>Availability shifts as groups fill</li>
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>Digital literacy fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on age, batch and duration</li>
                <li>We explain what is included first</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            A published number that does not apply to your child is worse than no number at all — it sets
            an expectation that has to be corrected later. Ask about the fee and what it includes in the
            same conversation; that is what makes two quotes comparable.
          </p>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free digital literacy trial for your child</h2>
            <p>
              Digital literacy is one of the harder programmes to judge from a description, because so
              much depends on how the session is run. A trial answers the questions that matter: is your
              child at the keyboard or watching someone else, is the level right, and do they come out
              able to do something they could not do before?
            </p>
            <h3>What to watch during the trial</h3>
            <ul className="pill-row">
              {DEMO_WATCH.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program={'Creative & Digital Skills'} compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Between classes"
            title="How to tell what your child is learning"
            lead="Digital literacy is unusually easy to check at home, because the skills are visible. You do not need a report to know whether your child can find the file they saved last week."
          />
          <div className="grid-3">
            {HOME_CHECKS.map((h) => (
              <div className="card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Want to know how your child is getting on? Ask. We will tell you honestly, including the
            parts that still need work.
          </p>
        </div>
      </section>

      {/* ---------- Home guide ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Parent guide"
            title="How to build good digital habits at home"
            lead="Six practical things that make more difference than any parental control setting."
          />
          <div className="grid-3">
            {HOME_GUIDE.map((h) => (
              <div className="guide-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad, Telangana</span>
            <h2>Digital literacy classes for kids in Hyderabad</h2>
            <p>
              Most Hyderabad families arrive at this page for one of two reasons. Either a school has
              started expecting digital work the child cannot yet do comfortably, or something online has
              made a parent uneasy and they want their child better prepared. Both are good reasons, and
              both are handled by the same set of skills.
            </p>
            <p>
              The question that follows is always the same: where should my child start? A child who has
              used a tablet for years but never a computer often needs the early modules more than their
              age would suggest. That is best settled in a trial rather than guessed at.
            </p>
            <h3>Areas within easy reach</h3>
            {/* Only the neighbourhoods that have a page of their own become links —
                the rest stay as plain text rather than pointing at a URL that does
                not exist. */}
            <ul className="area-links">
              {AREAS.map((name) => {
                const loc = publishedLocations.find(
                  (l) => l.name.toLowerCase() === name.toLowerCase()
                );
                return (
                  <li key={name}>
                    {loc ? (
                      <Link to={locationPath(loc.slug)}>Kids classes in {name}</Link>
                    ) : (
                      <span>{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="panel">
            <h2>Visit Brolly Juniors</h2>
            <p>{formattedAddress()}</p>
            <p>{address.landmarks}.</p>
            <p className="note-line">
              Please call or message before visiting, so we can keep someone free to walk you through the
              programme.
            </p>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn-primary">
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn btn-outline">
                Directions &amp; contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Near me ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            title="Looking for digital literacy classes near you?"
            lead="Parents searching for digital skills or computer classes for kids in Hyderabad can start from location, availability and learning mode."
          />
          <div className="grid-3">
            {NEAR_ME.map((n) => (
              <div className="card" key={n.title}>
                <span className="icon">{n.icon}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Check availability
            </Link>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Explore more kids learning programs"
            lead="Digital literacy is usually the sensible first step. Once a child is comfortable with a computer, the technology programmes below become much easier to start."
          />
          <div className="grid-3">
            {RELATED.map((r) => (
              <Link className="card" to={r.to} key={r.title}>
                <span className="icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={page.faqs} title={page.faqTitle} />

      {/* ---------- Quick answers ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="Digital literacy for kids: quick answers"
            lead="Short, direct answers to the questions parents ask most."
          />
          <div className="grid-3">
            {QUICK_ANSWERS.map((qa) => (
              <div className="ansblock" key={qa.q}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant={page.cta} />
    </>
  );
}
