import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
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
 * Ported from the standalone abacus-classes-in-hyderabad build, which was
 * written as a self-contained document with its own header, footer and a
 * Poppins-only type scale. Neither came across: the Layout supplies the nav
 * and footer, and every heading, label and button here inherits the site type
 * roles from styles/global.css, so the page reads in Fredoka/Inter/Poppins
 * like the rest of the site rather than in the source file's own font.
 *
 * Three kinds of content in that file were deliberately left behind:
 *
 *   - the mentor cards and the parent reviews, which were unfilled
 *     placeholders the source itself marked "do not publish invented
 *     credentials" / "use only genuine reviews collected with consent";
 *   - the five-name level ladder and the week-free curriculum list, which the
 *     source marked as placeholders to be replaced with the real syllabus —
 *     that syllabus already exists in data/infoPages.js and is rendered below;
 *   - the editorial "Confirm / Blocking" notes, which are instructions to
 *     whoever builds the page, not copy for a parent to read.
 *
 * Phone, WhatsApp and the postal address come from data/site.js rather than
 * from the numbers hard-coded in the source file, so this page cannot drift
 * away from the rest of the site.
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

const BENEFITS = [
  {
    icon: '⚡',
    title: 'Faster calculation',
    text: 'Working through structured bead patterns again and again makes common calculations quicker to reach, because the child recognises the pattern instead of rebuilding it each time.',
  },
  {
    icon: '🎯',
    title: 'Concentration',
    text: 'Each sum has to be finished before the next one starts. Sessions are built around short bursts of focused attention, which is a skill children practise rather than something they either have or lack.',
  },
  {
    icon: '🧠',
    title: 'Memory and recall',
    text: 'Repeated number exercises give children practice at holding a value in mind while working on the next one, and at recalling combinations they have met before.',
  },
  {
    icon: '🔢',
    title: 'Number sense',
    text: 'Children get comfortable with how numbers behave — what is bigger, what breaks into what, what a reasonable answer looks like. That comfort carries into ordinary school maths.',
  },
  {
    icon: '👁️',
    title: 'Visualisation',
    text: 'Mental calculation asks the child to hold a picture of the abacus in their head and change it. Visualising something and then altering it deliberately is a genuinely useful thinking habit.',
  },
  {
    icon: '🌟',
    title: 'Confidence',
    text: 'Getting steadily better at something visible changes how a child feels about numbers. Many parents notice the willingness to attempt a sum before they notice the speed.',
  },
];

const SKILLS = [
  { title: 'Number sense', text: 'Recognising how numbers split, combine and compare.' },
  { title: 'Mental calculation', text: 'Working an answer out without paper or a device.' },
  { title: 'Concentration', text: 'Staying with one problem until it is finished.' },
  { title: 'Memory', text: 'Holding numbers in mind while working on the next step.' },
  { title: 'Visualisation', text: 'Picturing the abacus and changing that picture accurately.' },
  { title: 'Listening', text: 'Following numbers read aloud in flash and dictation rounds.' },
  { title: 'Accuracy', text: 'Valuing a correct answer over a fast wrong one.' },
  { title: 'Problem solving', text: 'Choosing an approach when the sum is not straightforward.' },
  { title: 'Confidence', text: 'Being willing to attempt a number problem unprompted.' },
  { title: 'Learning discipline', text: 'Keeping a short daily practice habit going.' },
];

const AGE_BANDS = [
  {
    title: 'Ages 5–7',
    kv: 'Foundation stage',
    text: 'Getting comfortable with the tool and with numbers themselves.',
    bullets: ['Number recognition', 'Basic counting', 'Simple abacus movements', 'Understanding numbers visually'],
  },
  {
    title: 'Ages 7–9',
    kv: 'Skill-building stage',
    text: 'Real calculation begins, with the first steps toward mental work.',
    bullets: ['Addition', 'Subtraction', 'Number combinations', 'Guided mental calculation practice'],
  },
  {
    title: 'Ages 9–11',
    kv: 'Mental maths development',
    text: 'The abacus moves into the head and the work gets more demanding.',
    bullets: ['Larger and mixed calculations', 'Visualisation', 'Speed and accuracy practice', 'Problem-solving exercises'],
  },
];

const CURRICULUM_THEMES = [
  {
    title: 'Foundation',
    text: 'Number recognition, counting, familiarity with the abacus, and the first basic operations.',
  },
  {
    title: 'Addition and subtraction',
    text: 'Single-digit calculations, number combinations and the structured repetition that makes them automatic.',
  },
  {
    title: 'Multiplication and division',
    text: 'Concept introduction, calculation practice and pattern-based learning.',
  },
  {
    title: 'Mental maths',
    text: 'Visualisation, calculation without the tool, and exercises that build speed alongside accuracy.',
  },
  {
    title: 'Advanced practice',
    text: 'Mixed calculations, timed activities and problem-solving sets that combine everything learned so far.',
  },
];

const METHOD_STEPS = [
  {
    title: 'Learn the abacus',
    text: 'The child meets the frame, the rods and the beads, and learns what each part is worth.',
  },
  {
    title: 'Understand number positions',
    text: 'Ones, tens and hundreds stop being words and become places the child can point to.',
  },
  {
    title: 'Practise basic calculations',
    text: 'Addition and subtraction on the beads, slowly and correctly before quickly.',
  },
  {
    title: 'Develop visualisation',
    text: 'The child begins to picture the abacus rather than touch it, starting with small numbers.',
  },
  {
    title: 'Move to mental calculation',
    text: 'The picture does the work. The physical abacus is used less and less.',
  },
  {
    title: 'Practise speed and accuracy',
    text: 'Timed and mixed exercises, with accuracy kept ahead of speed throughout.',
  },
];

const SESSION_RHYTHM = [
  {
    title: 'Warm-up',
    text: 'A short number game or quick recall round to get everyone into the right frame of mind.',
  },
  {
    title: 'Concept introduction',
    text: 'The educator introduces the day’s idea on the board and on the abacus, with worked examples.',
  },
  {
    title: 'Guided practice',
    text: 'Children try the new idea while the educator watches finger technique and corrects errors early.',
  },
  {
    title: 'Interactive activity',
    text: 'A game, challenge or paired activity that uses the same skill in a different form.',
  },
  {
    title: 'Mental maths practice',
    text: 'A set worked without the physical abacus, at whatever level the child has reached.',
  },
  {
    title: 'Recap and practice set',
    text: 'A quick review of what was covered, plus the short practice to do before the next class.',
  },
];

const ACTIVITIES = [
  {
    title: 'Number flash challenges',
    text: 'Numbers appear briefly and the child adds them as they go — practice for listening, memory and speed together.',
  },
  { title: 'Abacus calculation games', text: 'Turn-based bead games where the correct answer moves the game forward.' },
  { title: 'Mental maths challenges', text: 'Short sets worked entirely in the head, at each child’s own level.' },
  { title: 'Number memory activities', text: 'Holding a sequence in mind and reproducing or working with it afterwards.' },
  { title: 'Speed calculation rounds', text: 'Timed sets where accuracy still counts more than finishing first.' },
  { title: 'Visualisation exercises', text: 'Picturing bead movements with eyes closed before saying the answer.' },
  {
    title: 'Puzzle-based number activities',
    text: 'Missing-number and pattern puzzles that need reasoning as well as calculation.',
  },
  {
    title: 'Dictation rounds',
    text: 'The educator reads numbers aloud at a steady pace and children keep up on the abacus.',
  },
];

const BATCHES = [
  { name: 'Weekday batches', when: 'After school hours', mode: 'Classroom' },
  { name: 'Weekend batches', when: 'Saturday and Sunday', mode: 'Classroom' },
  { name: 'After-school sessions', when: 'Straight from school', mode: 'Classroom' },
  { name: 'Flexible slots', when: 'Discussed case by case', mode: 'Online' },
];

const HOME_SUPPORT = [
  {
    title: 'Keep practice short and regular',
    text: 'A small daily set holds the skill in place. Long catch-up sessions tire children and teach them to dread it.',
  },
  {
    title: 'Give them a quiet corner',
    text: 'No television, no phone on the table. Abacus practice needs attention more than it needs time.',
  },
  {
    title: 'Praise the effort',
    text: '“You stayed with that one” is more useful than “you’re so quick”. Effort is something they can repeat.',
  },
  {
    title: 'Do not compare children',
    text: 'Siblings and classmates progress at different rates. Comparison is the fastest way to make a child quit.',
  },
  {
    title: 'Let them finish alone',
    text: 'Stepping in with the answer ends the thinking. Wait, even when it takes longer than you expected.',
  },
  {
    title: 'Ask them to explain',
    text: '“How did you get that?” tells you far more than the answer does, and strengthens their own understanding.',
  },
  {
    title: 'Keep a routine',
    text: 'The same slot each day, so practice becomes a habit rather than a negotiation.',
  },
  {
    title: 'Tell the educator what you see',
    text: 'If something at home is consistently hard, say so. It usually has a quick fix in class.',
  },
];

const AREAS = ['Nizampet', 'Bachupally', 'Kukatpally', 'Miyapur', 'Pragathi Nagar', 'Hydernagar'];

/* Every link here resolves against the route manifest — the source file's
   Rubik's cube card pointed at a page that does not exist on this site, so it
   is not carried over. */
const RELATED = [
  { icon: '♟️', title: 'Chess', text: 'Planning, patience and thinking a few moves ahead.', to: '/programs/chess' },
  {
    icon: '➗',
    title: 'Vedic maths',
    text: 'Calculation shortcuts that complement abacus mental maths.',
    to: '/junior-skills/vedic-maths',
  },
  { icon: '🔢', title: 'Mental maths', text: 'Number fluency without the bead frame.', to: '/programs/mental-maths' },
  { icon: '💻', title: 'Coding for kids', text: 'Logic and step-by-step problem solving on a screen.', to: '/programs/coding' },
  {
    icon: '🤖',
    title: 'Robotics',
    text: 'Building and programming, for children who like to make things.',
    to: '/programs/robotics',
  },
  { icon: '📚', title: 'School tuitions', text: 'Subject support alongside skill programmes.', to: '/tuitions' },
];

const QUICK_ANSWERS = [
  {
    q: 'Where can I find abacus classes for kids in Hyderabad?',
    a: 'Brolly Juniors teaches abacus at Nizampet X Roads, Hyderabad, with classroom batches after school and at weekends.',
  },
  {
    q: 'What is the best age to start abacus?',
    a: 'Once a child recognises numbers and can focus for a short activity. Readiness matters more than a specific age, so we assess it in the demo class.',
  },
  {
    q: 'How much do abacus classes cost in Hyderabad?',
    a: 'Fees depend on level, mode and duration. Brolly Juniors shares the current fee once we know your child’s starting level.',
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
    q: 'Is abacus suitable for beginners?',
    a: 'Yes. The foundation level assumes no prior abacus knowledge and starts from bead values and place value.',
  },
];

export default function AbacusPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">Nizampet X Roads · Hyderabad</span>
              <h1>Abacus Classes in Hyderabad for Kids</h1>
              <p className="section-lead">
                Build faster calculation, better concentration and stronger mental maths skills. At Brolly
                Juniors, children learn to work with numbers on a physical abacus first, then gradually
                picture the beads in their head — through short, structured practice at a pace that suits
                their age.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free demo class
                </Link>
                <a href="#what" className="btn btn-outline">
                  Explore the abacus programme
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Age-appropriate learning
                </li>
                <li>
                  <span className="tick">★</span> Interactive practice
                </li>
                <li>
                  <span className="tick">★</span> Progress updates for parents
                </li>
                <li>
                  <span className="tick">★</span> Classroom &amp; online options
                </li>
              </ul>
            </div>
            <SorobanDemo />
          </div>
        </div>
      </section>

      {/* ---------- Designed for curious young learners ---------- */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 28 }}>
            <h2 className="section-title">Designed for curious young learners</h2>
          </div>
          <div className="ab-statbar">
            <div className="stat">
              <b>Beginner-friendly</b>
              <span>No maths head-start needed</span>
            </div>
            <div className="stat">
              <b>Interactive learning</b>
              <span>Beads, games and challenges</span>
            </div>
            <div className="stat">
              <b>Mental maths practice</b>
              <span>Built into every session</span>
            </div>
            <div className="stat">
              <b>Skill-based activities</b>
              <span>Focus, memory, accuracy</span>
            </div>
            <div className="stat">
              <b>Parent updates</b>
              <span>You see how it is going</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- What are abacus classes? ---------- */}
      <section id="what">
        <div className="container split">
          <div className="prose">
            <h2>What are abacus classes for kids?</h2>
            <p>
              An abacus is a simple wooden or plastic frame with beads on rods. Each rod stands for a place
              value — ones, tens, hundreds — and each bead has a fixed worth. A child sets a number by
              sliding beads, then adds or subtracts by moving them.
            </p>
            <p>
              In an abacus class, children start by physically handling the beads. They learn where numbers
              sit, how each movement changes the value, and how to keep their fingers accurate and unhurried.
              Once the movements become familiar, the tool starts to move inward: the child pictures the same
              beads instead of touching them, and calculates from that mental image. That shift — from a tool
              in the hand to a picture in the head — is what people mean by mental maths.
            </p>
            <p>
              Age-appropriate instruction matters here more than speed. A six-year-old and a ten-year-old can
              both learn the abacus, but they need different numbers, different session lengths and different
              amounts of guided repetition. That is why children at Brolly Juniors are placed by what they
              can already do, not only by how old they are.
            </p>
            <ul className="flow-strip">
              <li>
                <span>See</span> <b aria-hidden="true">→</b>
              </li>
              <li>
                <span>Move</span> <b aria-hidden="true">→</b>
              </li>
              <li>
                <span>Understand</span> <b aria-hidden="true">→</b>
              </li>
              <li>
                <span>Visualise</span> <b aria-hidden="true">→</b>
              </li>
              <li>
                <span>Calculate</span>
              </li>
            </ul>
          </div>
          <div className="panel">
            <h2>Why the abacus works for young children</h2>
            <p>
              Numbers are abstract. Beads are not. The abacus gives a child something to look at and touch
              while an idea like “carrying over” is still new, so the idea has somewhere to live before it
              becomes purely mental. That is also why the physical stage should not be rushed — it is the
              foundation the mental stage is built on.
            </p>
            <ul className="pill-row">
              <li>Place value</li>
              <li>Number bonds</li>
              <li>Finger accuracy</li>
              <li>Visual memory</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Why choose abacus ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Why it works"
            title="Why choose abacus learning for your child?"
            lead="Abacus learning is a practice-based skill programme, not a shortcut to school marks. Here is what regular, structured practice can help a child build."
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
            These are learning outcomes that regular practice supports. They are not medical, psychological
            or guaranteed academic results, and no programme can promise them for every child.
          </p>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Beyond arithmetic"
            title="Skills children can develop through abacus learning"
            lead="Ten things abacus practice touches, beyond the calculation itself."
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

      {/* ---------- Age groups ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Starting point"
            title="Abacus classes for different age groups"
            lead="Children join at different stages, so the starting point is set by a short assessment during the demo class rather than by age alone. The bands below show how the focus typically shifts as children grow."
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
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Find the right starting point
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Levels. The real ten-level pathway from data/infoPages.js,
           in place of the source file's placeholder five-name ladder. ---------- */}
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

      {/* ---------- Curriculum by theme ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="What gets covered"
            title="Abacus course curriculum for kids"
            lead="What gets covered, grouped by theme rather than by week. Ask us for the level-by-level breakdown for your child’s starting point."
          />
          <div className="grid-3">
            {CURRICULUM_THEMES.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
            <div className="card">
              <h3>Want the full syllabus?</h3>
              <p>
                We share the level-wise curriculum after the demo, once we know where your child is starting.
              </p>
              <p style={{ marginTop: 16 }}>
                <Link className="txtlink" to="/book-free-demo">
                  Book a free demo class
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The method"
            title="How abacus learning works"
            lead="Six stages, in order. Most children spend the longest on stages three and four."
          />
          <div className="steps">
            {METHOD_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Inside a session ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in an abacus class?"
            lead="A session has a predictable shape. Children settle faster when they know what is coming next, and you can see exactly what the hour is spent on."
          />
          <ol className="rhythm">
            {SESSION_RHYTHM.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              See it for yourself — book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Not just drills"
            title="Fun abacus activities for kids"
            lead="Activities that teach something, rather than fill time."
          />
          <div className="grid-4">
            {ACTIVITIES.map((a) => (
              <div className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why parents choose us ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Straight answers"
            title="Why parents choose Brolly Juniors for abacus classes"
            lead="What we actually do differently, in plain terms — and what we will not tell you."
          />
          <div className="compare">
            <div className="compare-col is-us">
              <h3>How we teach abacus</h3>
              <ul>
                <li>
                  <b>Child-friendly pace.</b> Lessons follow the child’s understanding, not a fixed weekly
                  schedule.
                </li>
                <li>
                  <b>Structured progression.</b> Each level ends where the next begins, so nothing is skipped.
                </li>
                <li>
                  <b>Interactive learning.</b> Games, flash rounds and paired activities alongside written
                  practice.
                </li>
                <li>
                  <b>Regular short practice.</b> A small set between classes beats a long session once a week.
                </li>
                <li>
                  <b>Parent visibility.</b> You are told what was covered and where your child needs work.
                </li>
                <li>
                  <b>Skills beyond maths.</b> Concentration, accuracy and confidence are treated as part of
                  the programme.
                </li>
              </ul>
            </div>
            <div className="compare-col is-other">
              <h3>What we do not claim</h3>
              <ul>
                <li>No guaranteed exam marks or school rank improvements.</li>
                <li>No claims about IQ, brain development or medical benefit.</li>
                <li>No promise of a fixed timeline — children progress differently.</li>
                <li>No results shown that we cannot evidence.</li>
              </ul>
              <p className="note-line">We would rather set expectations you can hold us to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Learning mode ---------- */}
      <section className="band-soft">
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
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Find the right abacus programme
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Timings ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Batches"
            title="Abacus class timings"
            lead="Batches change through the year as groups fill and new ones open. Rather than list times that go stale, we confirm current availability when you enquire."
          />
          {BATCHES.map((b) => (
            <div className="ab-batch" key={b.name}>
              <b>{b.name}</b>
              <span className="ab-batch-when">{b.when}</span>
              <span className="ab-pill">{b.mode}</span>
              <a href="#demo" className="btn btn-outline">
                Check availability
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Fees ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Fees"
            title="Abacus classes fees in Hyderabad"
            lead="Fees depend on the level, the learning mode and the duration your child enrols for, so a single number would be misleading. Tell us your child’s age and preferred mode and we will send the current fee for exactly that."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>What the fee covers</h3>
              <p className="kv">Included</p>
              <ul>
                <li>Educator-led sessions</li>
                <li>Level practice material</li>
                <li>Progress updates for parents</li>
                <li>Guidance on home practice</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">
                Get current fees
              </Link>
            </div>
            <div className="plan">
              <h3>What affects the fee</h3>
              <p className="kv">Varies by</p>
              <ul>
                <li>The level your child starts at</li>
                <li>Classroom or online</li>
                <li>Duration and batch frequency</li>
                <li>Whether an abacus kit is included</li>
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Before you pay anything</h3>
              <p className="kv">Free demo first</p>
              <ul>
                <li>Attend the free demo class</li>
                <li>Meet the educator</li>
                <li>See the level placement</li>
                <li>Then decide</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Book a free demo
              </Link>
            </div>
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Fees vary with programme level, learning mode and duration. Nothing is payable before the demo
            class.
          </p>
        </div>
      </section>

      {/* ---------- Demo ---------- */}
      <section id="demo">
        <div className="container split">
          <div className="prose">
            <h2>Let your child experience an abacus class</h2>
            <p>
              Not sure whether abacus learning suits your child? Start with a demo session. You will see the
              teaching approach, your child will try the beads, and we will tell you which level they would
              begin at — before you enrol.
            </p>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Talk to a learning advisor
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Book a free demo class</h2>
            <TrialForm program="Abacus Mastery" compact />
          </div>
        </div>
      </section>

      {/* ---------- Progress ---------- */}
      <section className="band-soft">
        <div className="container split">
          <div className="prose">
            <h2>Track your child’s learning progress</h2>
            <p>
              Abacus progress is easy to see if you know what to look at. Here is what we share with parents
              and what you can watch for yourself.
            </p>
            <ul className="pill-row">
              <li>Topics covered this level</li>
              <li>Practice completion</li>
              <li>Areas needing work</li>
              <li>Participation in class</li>
              <li>Level milestones</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Signs of progress worth noticing at home</h2>
            <p>
              Speed is the last thing to arrive and the first thing parents look for. These usually come
              earlier:
            </p>
            <ul className="pill-row">
              <li>Attempts a sum instead of asking for the answer</li>
              <li>Finishes a practice set without being reminded twice</li>
              <li>Can explain how they got there, not just what the answer was</li>
              <li>Stops reaching for fingers or paper on small sums</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Home support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support abacus learning at home"
            lead="Ten to fifteen focused minutes on most days does more than an hour on Sunday. A few things that help."
          />
          <div className="grid-4">
            {HOME_SUPPORT.map((h) => (
              <div className="card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Where we teach ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Where we teach"
            title="Abacus classes in Hyderabad for kids — where we teach"
            lead="Brolly Juniors teaches abacus from its centre at Nizampet X Roads, Hyderabad. Families living in the surrounding neighbourhoods usually find the classroom batches easiest to attend. If travel is difficult, ask us about online sessions instead."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="panel">
              <h2>Our centre</h2>
              <p>{formattedAddress()}</p>
              <p>{address.landmarks}.</p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn-primary">
                  Get directions
                </Link>
                <a href={site.phoneHref} className="btn btn-outline">
                  Call the centre
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: 16 }}>Areas within easy reach</h3>
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
                        <span>{name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="note-line">
                Areas families travel in from — not branches. Only the neighbourhoods with a page of their
                own are linked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Near me ---------- */}
      <section className="section-tight">
        <div className="container center">
          <SectionHead
            eyebrow="Near you"
            title="Looking for abacus classes near me?"
            lead="Brolly Juniors helps parents explore age-appropriate abacus learning options based on location, batch availability and learning mode. Tell us where you are and which times work, and we will tell you what is currently running."
          />
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <a href="#demo" className="btn btn-primary">
              Check availability
            </a>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related programmes ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="What comes next"
            title="Explore more kids learning programs"
            lead="Children who enjoy abacus often take to these next."
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

      {/* ---------- Quick answers (the AEO block) ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={page.faqs}
        title="Abacus classes in Hyderabad — quick answer"
        lead="Abacus classes in Hyderabad teach children number concepts, calculation and mental maths through structured abacus-based activities. Brolly Juniors runs age-appropriate abacus programmes from its centre at Nizampet X Roads, built around practice, visualisation and skill development. Parents can choose a programme based on the child’s age, current level, location and preferred learning mode, and start with a free demo class."
      />

      {/* ---------- About ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="About Brolly Juniors"
            lead="Brolly Juniors is a children’s learning centre in Hyderabad, Telangana, running skill programmes and academic support for school-age children. Abacus is one of those programmes."
          />
          <div className="grid-3">
            <div className="card">
              <h3>Talk to us</h3>
              <p>{formattedAddress()}</p>
              <p>
                <a className="txtlink" href={site.phoneHref}>
                  {site.phone}
                </a>
                <br />
                <a className="txtlink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="card">
              <h3>How we teach</h3>
              <p>
                Children are placed by what they can do, taught in structured levels, and given short
                practice sets between classes. Parents are told what was covered and where more work is
                needed.
              </p>
            </div>
            <div className="card">
              <h3>What we publish</h3>
              <p>
                We do not publish student numbers, ratings or results we cannot evidence, and we do not
                promise academic outcomes. Programme details are confirmed directly so they are never out of
                date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand variant={page.cta} />
    </>
  );
}
