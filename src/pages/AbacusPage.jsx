import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site, address, formattedAddress, openingHours } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import {
  SectionHead,
  QuickAnswer,
  StageTrack,
  Pillars,
  FaqList,
  QuickAnswers,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';

/* The abacus programme page.
 *
 * The copy follows the abacus content brief (brolly-juniors-abacus-classes-
 * hyderabad.html) section for section. Two things are kept from the site
 * rather than the brief: the ten-level pathway from data/infoPages.js, which
 * is the real syllabus, and the phone, WhatsApp, opening hours and postal
 * address from data/site.js, so this page cannot drift from the rest of the
 * site. The brief's own header, footer, nav and bead demo are not carried
 * over — the Layout supplies the first three and SorobanDemo below is the
 * site's own.
 */

/* The numbers the demo can show. Small enough to read off the beads, and
   chosen to cover every case a child meets in the first week: a single digit
   under five, one over five (so the heaven bead drops), a two-digit number, a
   three-digit one, and one with a zero in the middle. */
const DEMO_NUMBERS = [0, 3, 7, 12, 45, 86, 127, 308];

const COLUMNS = [70, 150, 230];

function SorobanDemo() {
  const [value, setValue] = useState(0);
  const digits = String(value).padStart(3, '0').split('').map(Number);

  return (
    <div className="ab-demo">
      <h2>Try it: tap a number</h2>
      <p className="ab-demo-note">
        This is what your child sees on day one — a number turned into beads they can move.
      </p>

      <svg
        className="ab-soroban"
        viewBox="0 0 300 190"
        role="img"
        aria-label="Interactive soroban showing how a number is formed with beads"
      >
        <rect x="6" y="6" width="288" height="178" rx="14" fill="#fffdf1" stroke="#1e293b" strokeWidth="3" />
        <line x1="20" y1="72" x2="280" y2="72" stroke="#1e293b" strokeWidth="4" />

        {COLUMNS.map((x) => (
          <line key={`rod-${x}`} x1={x} y1="20" x2={x} y2="170" stroke="#1e293b" strokeWidth="2.5" />
        ))}

        {/* Heaven bead: worth five, and drops toward the bar when the digit
            reaches five. */}
        {COLUMNS.map((x, c) => (
          <ellipse
            key={`heaven-${x}`}
            className="bead"
            cx={x}
            cy="36"
            rx="21"
            ry="11"
            fill="#ffc93c"
            stroke="#1e293b"
            strokeWidth="2.5"
            transform={digits[c] >= 5 ? 'translate(0,22)' : 'translate(0,0)'}
          />
        ))}

        {/* Earth beads: worth one each. As many rise to the bar as the digit
            has left over after the heaven bead is counted. */}
        {COLUMNS.map((x, c) =>
          [0, 1, 2, 3].map((i) => (
            <ellipse
              key={`earth-${x}-${i}`}
              className="bead"
              cx={x}
              cy={92 + i * 22}
              rx="21"
              ry="11"
              fill="#cceeff"
              stroke="#1e293b"
              strokeWidth="2.5"
              transform={i < digits[c] % 5 ? 'translate(0,-20)' : 'translate(0,0)'}
            />
          ))
        )}

        <text x="70" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">100s</text>
        <text x="150" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">10s</text>
        <text x="230" y="182" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">1s</text>
      </svg>

      <div className="ab-beadrow" role="group" aria-label="Choose a number to show on the abacus">
        {DEMO_NUMBERS.map((n) => (
          <button
            key={n}
            type="button"
            className="ab-beadbtn"
            aria-pressed={value === n}
            onClick={() => setValue(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <p className="ab-readout" role="status" aria-live="polite">
        {value === 0
          ? 'Showing 0 — every bead is at rest.'
          : `Showing ${value} — beads moved toward the bar make the number.`}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Page copy. Follows the abacus content brief section for section; the
 * wording here is the brief's, lightly trimmed where a card needs to be
 * shorter than a paragraph.
 * ------------------------------------------------------------------------- */

const HOW_IT_WORKS = [
  { title: 'Learn numbers', text: 'Children start by understanding numbers and their values.' },
  { title: 'Use the abacus', text: 'They learn how to move the beads and represent different numbers.' },
  {
    title: 'Practise calculations',
    text: 'Beginning with simple addition and subtraction, then moving to more complex calculations.',
  },
  {
    title: 'Build number visualisation',
    text: 'With practice, children learn to imagine the abacus and bead positions in their mind.',
  },
  {
    title: 'Develop mental calculation',
    text: 'Over time, children solve calculations without physically using the abacus.',
  },
];

const PRACTICE_ITEMS = [
  'Number recognition',
  'Addition',
  'Subtraction',
  'Multiplication',
  'Division',
  'Mental calculation',
  'Calculation speed',
  'Number visualisation',
  'Revision & practice',
];

const WHY_LEARN = [
  {
    title: 'Helps children understand numbers',
    text: 'Children use the abacus beads to represent numbers. This gives them a visual way to understand how numbers work instead of only looking at numbers on a page.',
  },
  {
    title: 'Builds mental calculation skills',
    text: 'As children become familiar with the abacus, they can gradually learn to visualise the beads in their mind. With regular practice, they can work on calculations mentally.',
  },
  {
    title: 'Encourages concentration',
    text: 'Abacus activities require children to pay attention to numbers, bead positions and calculation steps. Regular practice can help children develop better focus during learning activities.',
  },
  {
    title: 'Gives more practice with maths',
    text: 'Children improve skills through practice. Abacus classes give them structured opportunities to work with numbers and calculations regularly.',
  },
  {
    title: 'Builds confidence with numbers',
    text: 'When children understand a calculation and solve it correctly, they can become more comfortable working with numbers. Small improvements can help build confidence over time.',
  },
  {
    title: 'Makes number practice interactive',
    text: 'Instead of only solving calculations with pen and paper, children can physically work with an abacus. This hands-on approach can make number practice more engaging for young learners.',
  },
  {
    title: 'Develops step-by-step thinking',
    text: 'Abacus learning involves following calculation steps and practising them repeatedly. This can encourage children to approach number problems in a more structured way.',
  },
];

const BENEFITS = [
  {
    icon: '🔢',
    title: 'Better understanding of numbers',
    text: 'By moving beads and representing different values, children can see how numbers are formed and used in calculations.',
  },
  {
    icon: '➕',
    title: 'Improved calculation practice',
    text: 'Children regularly practise addition, subtraction, multiplication and division according to their learning level, so different calculation types become familiar.',
  },
  {
    icon: '🧠',
    title: 'Mental maths practice',
    text: 'As children progress, they can learn to visualise the abacus instead of always using the physical tool — an opportunity to practise calculations mentally.',
  },
  {
    icon: '🎯',
    title: 'Better concentration',
    text: 'During an abacus activity, children need to focus on numbers, bead positions and calculation steps, which gives them practice at staying with a task.',
  },
  {
    icon: '💪',
    title: 'Stronger number confidence',
    text: 'Some children feel nervous when they see difficult calculations. Learning step by step can help them feel more comfortable with numbers.',
  },
  {
    icon: '🧩',
    title: 'Memory and visualisation practice',
    text: 'Mental abacus activities involve remembering number values and visualising bead positions — regular practice in both memory and visualisation.',
  },
  {
    icon: '⏱️',
    title: 'Faster calculation practice',
    text: 'With consistent practice, children work through familiar problems more efficiently. Speed develops gradually with practice rather than immediately.',
  },
  {
    icon: '🪜',
    title: 'Encourages step-by-step thinking',
    text: 'Abacus calculations follow a structured process. Children learn to follow the correct steps, check their work and gradually handle more complex calculations.',
  },
  {
    icon: '✋',
    title: 'Makes learning more interactive',
    text: 'Young children often learn better when they can see and interact with what they are learning, instead of relying only on written exercises.',
  },
];

const LEARNING_STEPS = [
  {
    title: 'Understanding numbers',
    text: 'Children first become familiar with numbers and their values.',
    bullets: ['Number recognition', 'Counting', 'Place value', 'Number representation'],
  },
  {
    title: 'Learning how the abacus works',
    text: 'Children are introduced to the abacus and learn what the beads represent. At this stage, they learn by physically interacting with the tool.',
    bullets: ['Moving the beads correctly', 'Representing numbers', 'Understanding different positions', 'Reading numbers using the abacus'],
  },
  {
    title: 'Learning basic calculations',
    text: 'Once children understand the abacus, they begin practising simple calculations. Difficulty increases gradually as the child becomes comfortable with each concept.',
    bullets: ['Addition', 'Subtraction', 'More complex calculations'],
  },
  {
    title: 'Regular calculation practice',
    text: 'Children solve different problems repeatedly to become familiar with the calculation process. Regular practice is an important part of abacus learning.',
    bullets: ['Individual problems', 'Number exercises', 'Timed activities', 'Revision', 'Level-based practice'],
  },
  {
    title: 'Developing visualisation',
    text: 'After gaining experience with the physical abacus, children begin practising visualisation — imagining the abacus and the position of the beads while solving calculations. This is commonly called mental abacus.',
    bullets: [],
  },
  {
    title: 'Practising mental calculations',
    text: 'As children progress, they gradually practise calculations without physically moving the beads, using their understanding and visualisation of the abacus.',
    bullets: [],
  },
  {
    title: 'Building speed and accuracy',
    text: 'With continued practice, children work on solving familiar calculations more efficiently while maintaining accuracy. The goal is not simply to calculate faster — children should first understand the method, then improve speed through practice.',
    bullets: [],
  },
];

const AGE_BANDS = [
  {
    title: 'Ages 5–7',
    kv: 'Simple and visual activities',
    text: 'The focus at this stage is on making numbers familiar and easy to understand.',
    bullets: ['Counting', 'Number recognition', 'Basic number concepts', 'Simple addition', 'Simple subtraction', 'Using the abacus'],
  },
  {
    title: 'Ages 8–10',
    kv: 'More structured calculations',
    text: 'Activities can gradually become more challenging as children become comfortable with the basics.',
    bullets: ['Addition and subtraction', 'Multiplication', 'Division', 'Number patterns', 'Mental calculation', 'Calculation practice'],
  },
  {
    title: 'Ages 11–14',
    kv: 'Advanced calculations and mental maths',
    text: 'Older children can work on more advanced calculations and regular mental maths practice.',
    bullets: ['Complex calculations', 'Mental abacus', 'Calculation speed', 'Accuracy', 'Visualisation', 'Regular timed practice'],
  },
];

const READINESS_SIGNS = [
  'Can recognise basic numbers',
  'Are interested in learning new activities',
  'Can follow simple instructions',
  'Can stay engaged in an activity for a short period',
  'Are willing to practise regularly',
];

const LEARN_TOPICS = [
  {
    icon: '1️⃣',
    title: 'Number basics',
    text: 'Counting, number recognition, number representation, place value and basic number concepts.',
  },
  {
    icon: '🧮',
    title: 'Abacus basics',
    text: 'Identifying bead values, moving beads correctly, representing numbers and reading numbers using the abacus.',
  },
  {
    icon: '➕',
    title: 'Addition',
    text: 'Adding numbers using the abacus, following calculation steps, practising different number combinations and improving accuracy through repetition.',
  },
  {
    icon: '➖',
    title: 'Subtraction',
    text: 'After understanding addition, children practise subtraction. Activities gradually introduce larger and more complex calculations according to the child’s level.',
  },
  {
    icon: '✖️',
    title: 'Multiplication',
    text: 'Children who are ready for the next level learn multiplication using abacus-based methods, becoming familiar through regular practice.',
  },
  {
    icon: '➗',
    title: 'Division',
    text: 'Division concepts are introduced as children progress. They practise solving problems step by step and build understanding through repeated exercises.',
  },
  {
    icon: '👁️',
    title: 'Mental abacus',
    text: 'Children gradually learn to imagine the abacus and bead positions in their mind instead of always using the physical tool.',
  },
  {
    icon: '🧠',
    title: 'Mental maths practice',
    text: 'Once children are comfortable with visualisation, they practise solving calculations mentally, with difficulty increasing gradually.',
  },
  {
    icon: '⚡',
    title: 'Speed and accuracy practice',
    text: 'Calculation exercises, revision, timed practice, mental calculation activities and level-based exercises — with accuracy first.',
  },
  {
    icon: '🔁',
    title: 'Regular revision and practice',
    text: 'Learning abacus requires regular practice. Children revise previously learned concepts while moving towards new ones.',
  },
];

const SESSION_RHYTHM = [
  {
    title: 'Number warm-up',
    text: 'The class begins with simple number activities — counting, identifying numbers or solving simple number questions — to help children get ready to learn.',
  },
  {
    title: 'Learn a new concept',
    text: 'The teacher introduces a new abacus concept according to the child’s learning level, explained step by step before children start practising it.',
  },
  {
    title: 'Hands-on abacus practice',
    text: 'Children use the abacus to understand and practise the concept: moving the beads, representing numbers and performing calculations correctly.',
  },
  {
    title: 'Guided calculation practice',
    text: 'Children solve practice questions with guidance. If a child finds a calculation difficult, the concept is explained again using simpler examples.',
  },
  {
    title: 'Mental maths activity',
    text: 'As children progress, they practise visualising the abacus and solving calculations mentally, moving gradually from physical practice to mental calculation.',
  },
  {
    title: 'Speed and accuracy practice',
    text: 'Children practise familiar calculations to improve speed while maintaining accuracy — correct method first, speed through regular practice.',
  },
  {
    title: 'Revision',
    text: 'Previously learned concepts are revised regularly, which also helps identify areas where a child may need additional practice.',
  },
  {
    title: 'Feedback and practice',
    text: 'Children receive guidance based on their learning and practice. Parents can also understand what their child is learning and where more practice may be useful.',
  },
];

const CLASS_JOURNEY = ['Warm-up', 'New concept', 'Abacus practice', 'Calculation activity', 'Mental maths', 'Revision & feedback'];

const WHY_US = [
  {
    icon: '🧒',
    title: 'Child-friendly learning',
    text: 'Children learn differently from adults. Abacus concepts are introduced in a way that is easier for children to understand and practise, starting simple and building up.',
  },
  {
    icon: '🪜',
    title: 'Step-by-step teaching',
    text: 'Children do not need to learn everything at once. Learning follows a gradual path: understand → practise → improve → progress.',
  },
  {
    icon: '🎚️',
    title: 'Learning matched to level',
    text: 'The approach is adjusted to the child’s age and current ability, so a beginner and a confident calculator can each start at a suitable point.',
  },
  {
    icon: '🔁',
    title: 'Regular practice and revision',
    text: 'Previously learned concepts are revised alongside new ones, because abacus is a skill that develops through consistent practice.',
  },
  {
    icon: '💬',
    title: 'Honest expectations',
    text: 'No guarantees of instant results. Children develop at different rates, and the focus stays on learning, practice and gradual progress.',
  },
  {
    icon: '🧭',
    title: 'Try before you decide',
    text: 'Parents can begin with a demo or introductory session to understand whether the programme is suitable for their child.',
  },
];

const WHO_CAN_JOIN = [
  'Understand numbers better',
  'Practise basic calculations',
  'Develop mental maths skills',
  'Improve calculation confidence',
  'Explore a new learning activity',
];

/* Neighbourhoods parents travel in from. Only the ones with a page of their
   own become links (see the render below). */
const AREAS = ['Nizampet', 'Kukatpally', 'Gachibowli', 'Kondapur', 'Madhapur'];

const FEE_FACTORS = [
  'Child’s age and learning level',
  'Course duration',
  'Number of classes',
  'Online or offline learning',
  'Learning materials',
  'Practice and assessment support',
  'Level or stage of the abacus programme',
  'Teacher guidance',
];

const FEE_QUESTIONS = [
  'What age group is the programme designed for?',
  'How long is the course?',
  'How many classes are conducted each week?',
  'Are learning materials included?',
  'How is the child’s progress evaluated?',
  'Is there a demo class?',
  'Are there any additional charges?',
  'What happens if the child needs extra practice?',
];

const VS_SCHOOL_MATHS = [
  { aspect: 'Main tool', abacus: 'Uses an abacus as a learning tool', school: 'Mainly uses numbers, symbols and written methods' },
  { aspect: 'Focus', abacus: 'Focuses strongly on calculation practice', school: 'Covers many areas of mathematics' },
  { aspect: 'Learning style', abacus: 'Uses visual and hands-on learning', school: 'Uses classroom and textbook-based learning' },
  { aspect: 'Mental calculation', abacus: 'Gradually introduces mental calculation', school: 'Teaches mathematical concepts and problem-solving' },
  { aspect: 'Practice pattern', abacus: 'Includes repeated practice', school: 'Practice varies by lesson and curriculum' },
];

const SUPPORT_STEPS = [
  { title: 'School maths', text: 'A child learns an addition method on paper.' },
  { title: 'Abacus practice', text: 'The child uses beads to understand and practise the calculation.' },
  { title: 'Mental abacus', text: 'With continued practice, the child may learn to visualise the abacus while calculating.' },
];

const CAN_DEVELOP = [
  'Number understanding',
  'Calculation skills',
  'Mental maths practice',
  'Concentration',
  'Memory and visualisation',
  'Calculation accuracy',
  'Confidence with numbers',
  'Step-by-step thinking',
];

const CHOOSE_CRITERIA = [
  {
    title: 'Check the age group',
    text: 'Choose a programme suitable for your child’s age and level. A younger child may need simple number activities; an older child may be ready for advanced calculations and mental abacus.',
  },
  {
    title: 'Understand the teaching method',
    text: 'Ask how the teacher introduces new concepts. Children should understand the basic idea before moving to difficult calculations.',
  },
  {
    title: 'Look for regular practice',
    text: 'Abacus is a skill that develops through practice. Check whether children get enough opportunity to revise, solve problems and practise regularly.',
  },
  {
    title: 'Ask about progress',
    text: 'Ask whether the programme provides regular feedback, assessments or other ways to understand the child’s development.',
  },
  {
    title: 'Consider class size',
    text: 'The number of children in a class affects individual attention. Ask how teachers support children who need extra explanation or practice.',
  },
  {
    title: 'Check the curriculum',
    text: 'A structured programme may progress from number basics → abacus fundamentals → addition & subtraction → multiplication & division → mental abacus → speed & accuracy practice.',
  },
  {
    title: 'Check format and convenience',
    text: 'Consider whether the class format, location and timings work for your family. Regular attendance and practice matter for skill development.',
  },
  {
    title: 'Ask about a demo class',
    text: 'A demo lets parent and child see the learning environment first. Notice whether your child feels comfortable, understands the teacher and enjoys the activity.',
  },
  {
    title: 'Look beyond marketing claims',
    text: 'Be careful with claims like “guaranteed maths genius”, “instant mental maths” or “100% improvement”. Children learn at different speeds.',
  },
];

const PARENT_CHECKLIST = [
  'Is it suitable for my child’s age?',
  'Is the teaching method easy to understand?',
  'Does my child get enough practice?',
  'Is progress monitored?',
  'Are the timings convenient?',
  'Is there a demo class?',
  'Are the fees and course details clear?',
];

const DEMO_EXPECTATIONS = [
  'How the abacus is used for learning numbers',
  'How the teacher explains concepts to children',
  'What type of activities children practise',
  'How the learning process progresses',
  'Whether the programme suits the child’s age and level',
];

const GET_STARTED = [
  { title: 'Enquire', text: 'Share your child’s age and basic details.' },
  { title: 'Choose a suitable batch', text: 'Get information about available classes and timings.' },
  { title: 'Attend the demo', text: 'Let your child experience an abacus learning session.' },
  { title: 'Understand the programme', text: 'Learn about the curriculum, duration, fees and learning process.' },
  {
    title: 'Enrol',
    text: 'If the programme feels suitable for your child, choose the batch that works for your family and confirm the seat.',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'Where can I find abacus classes for kids in Hyderabad?',
    a: 'Brolly Juniors teaches abacus at Nizampet X Roads, Hyderabad, with classroom batches after school and at weekends.',
  },
  {
    q: 'Are there weekend abacus classes for children?',
    a: 'Yes, weekend batches are part of the schedule. Availability changes as groups fill, so check before planning around it.',
  },
  {
    q: 'Are abacus classes available near me?',
    a: 'Tell us your locality and preferred timing and we will confirm which nearby batch is currently open, or suggest online instead.',
  },
  {
    q: 'Are abacus classes available online?',
    a: 'Ask us about current online availability. For younger children we generally recommend the classroom, where finger technique can be corrected directly.',
  },
];

/* A vertical tick list. The site's .tick-row is a horizontal strip; stacking
   it reads better for a checklist a parent works down. */
function TickList({ items, mark = '★', style }) {
  return (
    <ul className="tick-row" style={{ flexDirection: 'column', alignItems: 'flex-start', ...style }}>
      {items.map((item) => (
        <li key={item}>
          <span className="tick">{mark}</span> {item}
        </li>
      ))}
    </ul>
  );
}

function FlowStrip({ items }) {
  return (
    <ul className="flow-strip">
      {items.map((item, i) => (
        <li key={item}>
          <span>{item}</span>
          {i < items.length - 1 && <b aria-hidden="true">→</b>}
        </li>
      ))}
    </ul>
  );
}

export default function AbacusPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Nizampet X Roads · Hyderabad</span>
              <h1>Abacus Classes for Kids in Hyderabad</h1>
              <p className="section-lead">
                Help your child build better number skills with abacus classes for kids in Hyderabad at
                Brolly Juniors. Our abacus learning programme introduces children to numbers and
                calculations through simple, step-by-step practice.
              </p>
              <p className="section-lead">
                Children learn how to use an abacus, understand numbers, solve calculations and gradually
                develop mental calculation skills. The classes are designed to make learning maths more
                engaging and comfortable for kids.
              </p>
              <ul className="tick-row">
                <li>
                  <span className="tick">✓</span> Suitable for kids in different learning stages
                </li>
                <li>
                  <span className="tick">✓</span> Abacus, mental maths and calculation practice
                </li>
                <li>
                  <span className="tick">✓</span> Hyderabad · Nizampet X Roads
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free demo class
                </Link>
                <a href="#learn" className="btn btn-outline">
                  See what kids learn
                </a>
              </div>
              <p className="note-line">
                Abacus is a supplementary skill programme. It does not replace school mathematics.
              </p>
            </div>
            <SorobanDemo />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- The basics ---------- */}
      <section id="what">
        <div className="container">
          <SectionHead eyebrow="The basics" title="What are abacus classes for kids?" />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Abacus classes teach children how to understand numbers and perform calculations using an
                abacus. Children first learn to use the beads on the abacus for simple calculations. With
                regular practice, they gradually learn to visualise the abacus in their mind and solve
                calculations mentally.
              </p>
              <p>
                At Brolly Juniors, abacus learning is introduced in a simple, step-by-step way so children
                can learn according to their age and learning level. Instead of only writing calculations
                on paper, children get hands-on practice and gradually become more comfortable with
                numbers.
              </p>
              <h3>What do children practise in abacus classes?</h3>
              <p>Depending on their learning level, children may practise:</p>
              <ul className="pill-row">
                {PRACTICE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h2>Why is abacus learning different?</h2>
              <p>
                Abacus combines visual learning, hands-on practice and mental calculation. This gives
                children a different way to work with numbers alongside their regular school maths.
              </p>
              <p>
                At Brolly Juniors, the goal is not to make children memorise answers. The focus is on
                helping them understand the process, practise regularly and become more confident while
                working with numbers.
              </p>
            </div>
          </div>

          <h3 style={{ marginTop: 40 }}>How does abacus learning work?</h3>
          <p className="section-lead">Abacus learning usually progresses through a few simple stages:</p>
          <div className="steps" style={{ marginTop: 32 }}>
            {HOW_IT_WORKS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why should kids learn abacus ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="A parent’s view"
            title="Why should kids learn abacus?"
            lead="Maths can sometimes feel difficult for children, especially when they need to work with numbers quickly. Abacus gives children a different way to understand and practise numbers through visual and hands-on learning."
          />
          <div className="grid-3">
            {WHY_LEARN.map((w, i) => (
              <div className="card" key={w.title}>
                <h3>
                  {i + 1}. {w.title}
                </h3>
                <p>{w.text}</p>
              </div>
            ))}
            <div className="card">
              <h3>How Brolly Juniors supports abacus learning</h3>
              <p>
                Children are introduced to abacus through age-appropriate concepts and guided practice.
                The learning process starts with basic number concepts and gradually moves towards more
                advanced calculations. The aim is simple — help children become more comfortable with
                numbers while making learning enjoyable and practical.
              </p>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Abacus is a supplementary skill programme. It does not replace school mathematics. Children
            may benefit differently depending on their age, learning level and regular practice.
          </p>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="What children gain"
            title="Benefits of abacus classes for kids"
            lead="At Brolly Juniors, children learn these skills through guided activities and step-by-step practice rather than trying to learn everything at once."
          />
          <div className="grid-3">
            {BENEFITS.map((b) => (
              <div className="card" key={b.title}>
                <span className="icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Child-friendly by design: at Brolly Juniors the learning process is structured around the
            child’s level. Concepts are introduced gradually, followed by guided practice and activities,
            so children can understand, practise and build confidence with numbers at their own pace.
          </p>
        </div>
      </section>

      {/* ---------- How do kids learn abacus ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Step by step"
            title="How do kids learn abacus?"
            lead="Children do not start by doing difficult mental calculations. Abacus learning begins with simple number concepts and gradually builds calculation skills."
          />
          <div className="steps">
            {LEARNING_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.bullets.length > 0 && (
                  <ul className="pill-row">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="step">
              <h3>How we guide the journey</h3>
              <p>
                Brolly Juniors follows a gradual learning approach where children can move from basic
                concepts to more advanced abacus practice according to their learning level, without
                being overwhelmed by difficult calculations from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Best age ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Starting point"
            title="What is the best age to start abacus classes?"
            lead="There is no single age that is perfect for every child. Many children start learning abacus between 5 and 14 years, depending on their number skills, attention level and learning readiness."
          />
          <div className="grid-3">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.title}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <p>{a.text}</p>
                <ul className="pill-row">
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="split" style={{ marginTop: 36, alignItems: 'start' }}>
            <div className="panel">
              <h2>Can a beginner start abacus?</h2>
              <p>
                Yes. A child does not need to already be good at maths to start learning abacus.
                Beginners can start with basic number concepts and gradually progress as they understand
                each level.
              </p>
              <h2 style={{ marginTop: 24 }}>Start at the right level</h2>
              <p>
                At Brolly Juniors, the aim is to introduce children to abacus at a level that matches
                their age and learning ability. Instead of rushing into difficult calculations, children
                build their skills gradually.
              </p>
              <FlowStrip items={['Numbers', 'Abacus basics', 'Calculations', 'Visualisation', 'Mental maths']} />
            </div>
            <div className="prose">
              <h2>How do parents know if their child is ready?</h2>
              <p>A child may be ready to try abacus if they:</p>
              <TickList items={READINESS_SIGNS} />
              <p className="note-line">
                Every child learns differently, so a demo or introductory session can help parents
                understand whether the programme is suitable for their child.
              </p>
            </div>
          </div>

          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Check the right level for my child
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- What kids learn ---------- */}
      <section id="learn" className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="The learning path"
            title="What do kids learn in Brolly Juniors abacus classes?"
            lead="Children learn abacus through a gradual curriculum that starts with basic number concepts and moves towards calculation and mental maths practice. The exact level and difficulty can vary based on the child’s age and current learning ability."
          />
          <div className="grid-4">
            {LEARN_TOPICS.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            This is the suggested learning structure followed at Brolly Juniors, not an official
            school-board syllabus. Level names, batch structure and current course details can be
            confirmed on a call.
          </p>
        </div>
      </section>

      {/* ---------- Levels: the ten-level pathway from data/infoPages.js ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow={page.curriculum.eyebrow}
            title={page.curriculum.title}
            lead={page.curriculum.lead}
          />
          <StageTrack stages={page.curriculum.stages} />
        </div>
      </section>

      {/* ---------- Inside the class ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Inside the class"
            title="What happens in a Brolly Juniors abacus class?"
            lead="Parents often want to know what their child will actually do during an abacus class. At Brolly Juniors, abacus learning is structured around explanation, hands-on practice, calculation activities and regular revision."
          />
          <ol className="rhythm">
            {SESSION_RHYTHM.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
          <div className="panel" style={{ marginTop: 36 }}>
            <h2>A simple abacus class journey</h2>
            <FlowStrip items={CLASS_JOURNEY} />
            <p style={{ marginTop: 20 }}>
              The purpose of Brolly Juniors abacus classes is to make number learning structured and
              engaging for children. Children are encouraged to learn one concept at a time, practise it
              regularly and gradually move towards more advanced calculations as their skills develop.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Why us"
            title="Why choose Brolly Juniors for abacus classes in Hyderabad?"
            lead="Choosing an abacus class is not only about finding a place where children learn calculations. Parents also want a learning environment where their child can understand concepts, practise regularly and feel comfortable while learning."
          />
          <div className="grid-3">
            {WHY_US.map((w) => (
              <div className="card" key={w.title}>
                <span className="icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a demo class
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- In your city ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="In your city"
            title="Abacus classes for kids in Hyderabad"
            lead="Parents looking for abacus classes for kids in Hyderabad usually want more than just a maths class. They want a programme that is suitable for their child’s age, easy to understand, convenient to attend and focused on regular skill development. Brolly Juniors offers a child-focused learning environment where children can explore abacus through structured lessons, guided practice and age-appropriate activities."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>Who can join abacus classes?</h2>
              <p>
                Abacus can be introduced to children at different learning stages. Beginners do not need
                advanced maths knowledge to get started. The programme can be suitable for children who
                want to:
              </p>
              <TickList items={WHO_CAN_JOIN} />
              <p className="note-line">
                The right level should depend on the child’s age, existing skills and learning readiness —
                readiness matters more than age alone.
              </p>

              <h3 style={{ marginTop: 32 }}>Areas we serve</h3>
              {/* Only the neighbourhoods that have a page of their own become
                  links — the rest stay as plain text rather than pointing at a
                  URL that does not exist. */}
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
                        <span>Kids classes in {name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="panel">
              <h2>Brolly Juniors — Hyderabad centre</h2>
              <p>{formattedAddress()}</p>
              <TickList
                items={[
                  address.landmarks,
                  `Open ${openingHours[0].days}, ${openingHours[0].time}`,
                  `Phone: ${site.phone}`,
                  `Email: ${site.email}`,
                ]}
                mark="•"
              />
              <p className="note-line">
                Batch timings, class format (online/offline) and current availability change from time to
                time — please confirm on a call before planning.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn-primary">
                  Get directions
                </Link>
                <a href={site.phoneHref} className="btn btn-outline">
                  Call the centre
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Learning mode ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Classroom or online"
            title="Choose the right learning mode for your child"
            lead="Younger children and children who fidget usually do better in a classroom. Older children who are already independent often manage online well. Tell us about your child and we will say honestly which we would recommend."
          />
          <div className="grid-2">
            <div className="card">
              <span className="icon">🏫</span>
              <h3>Offline abacus classes</h3>
              <ul className="pill-row">
                <li>Classroom interaction with other children</li>
                <li>Finger technique corrected directly</li>
                <li>Group activities and paired challenges</li>
                <li>Hands-on abacus work with immediate help</li>
              </ul>
              <p className="note-line">At our centre near Nizampet X Roads, Hyderabad.</p>
            </div>
            <div className="card">
              <span className="icon">💻</span>
              <h3>Online abacus classes</h3>
              <ul className="pill-row">
                <li>Learn from home, no travel time</li>
                <li>Instructor-led live sessions</li>
                <li>Flexible for families with tight evenings</li>
                <li>Digital practice material between classes</li>
              </ul>
              <p className="note-line">Ask us about current online availability before you plan around it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Straight talk"
            title="Abacus classes fees in Hyderabad"
            lead="Abacus class fees in Hyderabad vary from one learning programme to another. The total cost may depend on the child’s level, course duration, number of classes, class format, learning materials and the type of programme offered."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="panel">
              <h2>What can affect abacus class fees?</h2>
              <TickList items={FEE_FACTORS} mark="•" />
              <p className="note-line">
                Parents should compare the complete learning experience rather than choosing a class only
                based on the lowest fee.
              </p>
            </div>
            <div className="panel">
              <h2>What should parents check before paying the fee?</h2>
              <TickList items={FEE_QUESTIONS} mark="?" />
            </div>
          </div>
          <div className="panel" style={{ marginTop: 24 }}>
            <h2>Brolly Juniors abacus fees</h2>
            <p>
              Programme details can change based on the selected level, batch and learning format, so no
              fee is published on this page. Contact Brolly Juniors for the current abacus class fee,
              batch timings and enrolment information.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">
                Enquire about abacus classes
              </Link>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                WhatsApp for fees
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Abacus vs school maths ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The honest comparison"
            title="Abacus vs regular maths practice: what is the difference?"
            lead="Both involve numbers and calculations, but they use different learning approaches. Abacus uses a physical tool, visualisation and repeated calculation practice, while school maths covers a wider range of mathematical concepts through textbooks, written problems and classroom teaching."
          />
          <div className="table-scroll">
            <table className="compare-table" aria-label="Abacus learning compared with regular school maths">
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Abacus learning</th>
                  <th scope="col">Regular school maths</th>
                </tr>
              </thead>
              <tbody>
                {VS_SCHOOL_MATHS.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row">{row.aspect}</th>
                    <td>{row.abacus}</td>
                    <td>{row.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="split" style={{ marginTop: 24, alignItems: 'start' }}>
            <div className="prose">
              <h2>Can abacus replace school maths?</h2>
              <p>
                No. Abacus does not replace school mathematics. School maths teaches important areas such
                as arithmetic, geometry, fractions, algebra, measurement and problem-solving. Abacus can be
                used as a supplementary learning activity to give children additional practice with
                numbers and calculations.
              </p>
              <h2>Which one is better?</h2>
              <p>
                It is not necessary to choose between them. School maths plus additional abacus practice
                can give children opportunities to work with mathematical ideas in two different ways —
                conceptually in school, and through hands-on calculation practice in the abacus class.
              </p>
            </div>
            <div className="panel">
              <h2>How abacus can support maths learning</h2>
              <ol className="rhythm">
                {SUPPORT_STEPS.map((s) => (
                  <li key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
              <p className="note-line">
                At Brolly Juniors, abacus is positioned as a skill-building programme for children rather
                than a replacement for their school curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Is it useful? ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead eyebrow="A balanced answer" title="Is abacus really useful for kids?" />
          <div className="panel">
            <p className="kv">Short answer</p>
            <p>
              Yes — abacus can be a useful supplementary learning activity for children, especially for
              kids who enjoy hands-on learning and regular number practice. However, abacus is not a magic
              shortcut that automatically makes every child excellent at maths. Children develop different
              skills at different rates, and results depend on factors such as age, learning level,
              regular practice and teaching quality.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 24 }}>
            <div className="card">
              <h3>What children can develop</h3>
              <p>With regular and structured practice, children can work on:</p>
              <ul className="pill-row">
                {CAN_DEVELOP.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="note-line">
                These skills develop gradually. A child should not be expected to become fast at mental
                calculations after only a few classes.
              </p>
            </div>
            <div className="card">
              <h3>Does abacus improve maths?</h3>
              <p>
                Abacus gives children additional practice with numbers and calculations, which can help
                them become more familiar and comfortable with calculation processes.
              </p>
              <p>
                However, abacus should complement school maths rather than replace it. Children still need
                the broader mathematical concepts taught in school, including problem-solving, fractions,
                geometry and algebra.
              </p>
            </div>
            <div className="card">
              <h3>Does every child learn at the same speed?</h3>
              <p>
                No. Some children understand abacus concepts quickly, while others need more time and
                practice. Learning speed can depend on age, previous number knowledge, attention level,
                interest in the activity, regular practice and individual learning style.
              </p>
              <p>
                A good programme should allow children to progress gradually instead of comparing every
                child with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How to choose ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Parent checklist"
            title="How to choose the right abacus classes for your child in Hyderabad"
            lead="Do not look at the fee or location alone. Consider how the programme teaches, how children practise and whether the learning approach suits your child."
          />
          <div className="grid-3">
            {CHOOSE_CRITERIA.map((c, i) => (
              <div className="card" key={c.title}>
                <h3>
                  {i + 1}. {c.title}
                </h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="compare" style={{ marginTop: 36 }}>
            <div className="compare-col is-us">
              <h3>A simple checklist for parents</h3>
              <ul>
                {PARENT_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="note-line">
                Choosing the right programme is less about finding the cheapest or most advertised class,
                and more about finding a learning environment where your child can learn comfortably and
                practise consistently.
              </p>
            </div>
            <div className="compare-col is-other">
              <h3>Why consider Brolly Juniors?</h3>
              <p>
                Brolly Juniors focuses on children’s skill development through structured and
                age-appropriate learning. For parents considering abacus classes in Hyderabad, we offer a
                learning approach where children start with basic concepts and gradually progress towards
                more advanced abacus and mental maths practice.
              </p>
              <p>
                Parents can also begin with a demo or introductory session to understand whether the
                programme is suitable for their child.
              </p>
            </div>
          </div>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a demo class
            </Link>
            <Link to="/resources/is-abacus-good-for-kids" className="btn btn-outline">
              Read: Is abacus good for kids?
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Demo ---------- */}
      <section id="demo" className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Next step"
            title="Book an abacus demo class at Brolly Juniors"
            lead="Not sure whether abacus is the right learning programme for your child? A demo class can help you and your child understand how abacus learning works before enrolling. At Brolly Juniors, children get an introduction to abacus through simple, age-appropriate activities and guided practice."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h2>What can parents expect from a demo?</h2>
              <TickList items={DEMO_EXPECTATIONS} style={{ marginTop: 8 }} />
              <p>
                The child also gets an opportunity to experience the learning approach, instead of making
                a decision based only on information from a website.
              </p>

              <h2 style={{ marginTop: 32 }}>How to get started</h2>
              <ol className="rhythm">
                {GET_STARTED.map((s) => (
                  <li key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="trial-panel">
              <h2>Request an abacus demo class</h2>
              <p className="note-line">
                Share a few details and the Brolly Juniors team will call you back with batch options.
              </p>
              <TrialForm program="Abacus Mastery" compact />
              <p className="note-line" style={{ marginTop: 16 }}>
                Prefer to talk? Call{' '}
                <a className="txtlink" href={site.phoneHref}>
                  {site.phone}
                </a>{' '}
                or{' '}
                <a className="txtlink" href={site.whatsappHref} target="_blank" rel="noreferrer">
                  message us on WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqList items={page.faqs} title={page.faqTitle} />

      {/* ---------- Quick answers (the AEO block) ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={page.faqs}
        title="Abacus classes for kids in Hyderabad — quick answer"
        lead="Abacus classes teach children how to understand numbers and perform calculations using an abacus, then gradually to visualise the beads and calculate mentally. Brolly Juniors runs age-appropriate abacus classes for kids in Hyderabad from its centre at Nizampet X Roads — numbers first, then the abacus, then calculations, then visualisation and mental maths — with a free demo class before any enrolment."
      />

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <CtaBand variant={page.cta} />
    </>
  );
}
