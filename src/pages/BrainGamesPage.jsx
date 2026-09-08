import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import {
  SectionHead,
  QuickAnswer,
  StageTrack,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { TrickCard, ChallengeQuiz, NumberedRows } from '../components/ProgramBits.jsx';

/* The brain games programme page.
 *
 * Ported from the standalone brain-games-for-kids-in-hyderabad build. That file
 * shipped its own header, footer and type scale; none of it came across, so
 * every heading, label and button here inherits the site roles from
 * global.css — Fredoka display, Inter body, Poppins UI, Caveat accent.
 *
 * Two things from the source are handled rather than copied:
 *
 *   - Its six "suggested learning areas" carried a note saying they are not
 *     published Brolly Juniors levels and that the real structure should be
 *     asked for. The real structure exists — the four rotating strands in
 *     data/catalog/programmes.js — so that is rendered as the curriculum, and
 *     the six areas follow as what the activities are grouped into. Neither
 *     claims to be the other.
 *   - Its "contact us to find out" answers about timings, fees and learning
 *     modes stay as they are, because those genuinely are not published. Its
 *     hardcoded phone number does not: contact details come from data/site.js
 *     so this page cannot drift from the rest of the site.
 *
 * The two interactive pieces are kept: the hero's worked "what comes next"
 * example, and the five-question challenge.
 */

/* ---------------------------------------------------------------------------
 * Hero: one sequence, worked out in four steps.
 *
 * The reveal is the whole point — the answer is easy and the method is what is
 * being sold, so the steps stay hidden until a parent asks for them.
 * ------------------------------------------------------------------------- */

const TRICK_STEPS = [
  <>
    Look at the numbers. Do they get <strong>bigger</strong> or <strong>smaller</strong>?
  </>,
  <>
    Find the jump between them: 2 to 4 is <strong>+2</strong>. So is 4 to 6.
  </>,
  <>
    The same jump repeats, so that is the <strong>pattern</strong>.
  </>,
  <>
    Apply it once more: 6 + 2 = <strong>8</strong>.
  </>,
];

/* ---------------------------------------------------------------------------
 * The five-challenge quiz.
 * ------------------------------------------------------------------------- */

const CHALLENGES = [
  {
    q: '2 → 4 → 6 → ?',
    hint: 'How much does it go up by each time?',
    opts: ['7', '8', '9'],
    a: '8',
    why: 'Each number goes up by 2, so 6 + 2 = 8.',
  },
  {
    q: '1 → 4 → 9 → 16 → ?',
    hint: 'The jump gets bigger each time. Try 1×1, 2×2, 3×3…',
    opts: ['20', '25', '32'],
    a: '25',
    why: 'These are square numbers: 4×4 = 16, so next is 5×5 = 25.',
  },
  {
    q: 'Which one does not belong? Apple, Banana, Carrot, Mango',
    hint: 'Three of them are the same kind of thing.',
    opts: ['Banana', 'Carrot', 'Mango'],
    a: 'Carrot',
    why: 'Apple, banana and mango are fruits. A carrot is a vegetable.',
  },
  {
    q: '3 → 6 → 12 → 24 → ?',
    hint: 'This one is not adding — try multiplying.',
    opts: ['30', '36', '48'],
    a: '48',
    why: 'Each number doubles, so 24 × 2 = 48.',
  },
  {
    q: 'Which shape comes next?  ▲ ● ▲ ● ▲ → ?',
    hint: 'Say the pattern out loud and keep going.',
    opts: ['▲', '●', '■'],
    a: '●',
    why: 'The pattern alternates triangle, circle. After a triangle comes a circle.',
  },
];

/* ------------------------------- content ---------------------------------- */

const TRUST = [
  { title: 'Thinking activities', text: 'Challenges that ask a child to work something out rather than recall it.' },
  { title: 'Puzzle practice', text: 'Sequences, matching and reasoning puzzles pitched to your child’s level.' },
  { title: 'Memory games', text: 'Remember-and-match, sequence recall and picture memory activities.' },
  { title: 'Problem solving', text: 'Understand the challenge, look for the pattern, try it, then check.' },
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'A brain game gives a child a small problem with a findable answer. The child has to notice something, hold it in mind, or reason it out. The game part keeps them going; the thinking part is what the activity is actually for.',
  },
  {
    tag: 'Easy example',
    text: 'Shown 2, 4, 6 and asked what comes next, a child has to spot that each number goes up by two, then apply that rule once more to reach 8. Small problem, real thinking.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Sessions mix puzzles, memory, patterns, observation and logic so no one type becomes repetitive. Book a free trial to see which kinds your child takes to.',
  },
];

const DRAWS_ON = [
  'Thinking — working something out step by step',
  'Memory — holding information while you use it',
  'Attention — staying with a task to the end',
  'Patterns — noticing what repeats and predicting it',
  'Logic — following one fact to the next',
  'Problem solving — choosing an approach and checking it',
];

const WONT_CLAIM = [
  'That brain games raise a child’s IQ',
  'That they guarantee better marks at school',
  'That they treat, diagnose or help any medical condition',
  'That improvement follows a fixed timetable',
];

const WHY_TRY = [
  {
    title: 'Problem solving',
    text: 'Every activity follows the same shape — understand the challenge, try something, check whether it worked. Repeating that shape is how the habit forms.',
  },
  {
    title: 'Logical thinking',
    text: 'Children practise following a chain of reasoning: if this is true, then that must follow. Puzzles make the chain short enough to hold onto.',
  },
  {
    title: 'Memory',
    text: 'Remember-and-match and sequence activities ask a child to hold information briefly and use it, which is exactly what most school tasks require.',
  },
  {
    title: 'Focus and observation',
    text: 'Spot-the-difference and detail-hunting activities reward children who look carefully, which is a habit that transfers well.',
  },
  {
    title: 'Pattern recognition',
    text: 'Noticing what repeats is one of the most useful skills a child can build. It underpins maths, reading and a great deal else.',
  },
  {
    title: 'Decision making and creative thinking',
    text: 'Many puzzles have more than one route to the answer. Choosing between them, and sometimes inventing a route, is where the interesting thinking happens.',
  },
];

const DEVELOPS = [
  { icon: '🧩', title: 'Problem solving', text: 'Reading a challenge, choosing an approach, and checking whether it worked.' },
  { icon: '🧠', title: 'Memory practice', text: 'Holding information in mind briefly and using it, through matching and recall.' },
  { icon: '👁️', title: 'Focus', text: 'Staying with a puzzle to the end — a skill that strengthens with repetition.' },
  { icon: '🔗', title: 'Logical thinking', text: 'Following a reasoning chain from one step to the next without skipping ahead.' },
  { icon: '🔍', title: 'Observation', text: 'Noticing detail rather than glancing, through spot-the-difference and detail tasks.' },
  { icon: '🔷', title: 'Pattern recognition', text: 'Spotting what repeats and predicting what comes next in numbers, shapes and sequences.' },
  { icon: '✨', title: 'Creative thinking', text: 'Finding a second route to an answer when the obvious one does not work.' },
  { icon: '⚖️', title: 'Decision making', text: 'Choosing between options and living with the result — then seeing what the better choice was.' },
];

const TYPES = [
  { icon: '🧩', title: 'Puzzle games', text: 'Sequence puzzles, missing-piece challenges and multi-step problems with one findable answer.' },
  { icon: '🧠', title: 'Memory games', text: 'Remember-and-match, picture memory and recall activities that ask a child to hold and use information.' },
  { icon: '🔷', title: 'Pattern games', text: 'Spotting what repeats in shapes, colours and numbers, then working out what comes next.' },
  { icon: '🔎', title: 'Logic games', text: 'Reasoning challenges where a child follows clues to a conclusion that must be true.' },
  { icon: '👁️', title: 'Observation games', text: 'Spot-the-difference and detail-hunting tasks that reward looking carefully rather than quickly.' },
  { icon: '🃏', title: 'Matching games', text: 'Pairing shapes, pictures, words or numbers by a rule the child has to identify first.' },
  { icon: '🔢', title: 'Number games', text: 'Number puzzles and sequences that build comfort with numbers without feeling like maths homework.' },
  { icon: '♟️', title: 'Strategy games', text: 'Short games where a child has to plan ahead and think about what the other player will do.' },
  { icon: '💭', title: 'Thinking challenges', text: 'Open questions with more than one sensible answer, where explaining the reasoning is the point.' },
];

const LEARNING_AREAS = [
  {
    title: 'Memory activities',
    text: 'Children practise holding information in mind and using it a moment later — the kind of short-term recall that most classroom tasks quietly depend on.',
    example: 'Studying six picture cards, turning them over, and recalling where each one was.',
    skill: 'Memory and concentration.',
  },
  {
    title: 'Logic & reasoning',
    text: 'Following clues to a conclusion that has to be true. Children learn to move one step at a time rather than jumping to the answer they hope for.',
    example: 'Three clues about who owns which pet, worked out by elimination.',
    skill: 'Logical thinking and reasoning.',
  },
  {
    title: 'Pattern recognition',
    text: 'Noticing what repeats and predicting what comes next, across shapes, colours, numbers and sequences. One of the most transferable skills in the programme.',
    example: 'Completing a shape sequence and explaining the rule behind it.',
    skill: 'Pattern recognition and prediction.',
  },
  {
    title: 'Problem solving',
    text: 'Multi-step challenges where the first idea often does not work. Children practise trying something, seeing it fail, and adjusting rather than giving up.',
    example: 'Arranging pieces to fit a shape, with several near-misses along the way.',
    skill: 'Problem solving and persistence.',
  },
  {
    title: 'Observation & attention',
    text: 'Tasks that reward looking carefully. Children who rush miss the detail, and the activity itself makes that obvious without anyone having to say so.',
    example: 'Finding the five differences between two nearly identical pictures.',
    skill: 'Observation and sustained attention.',
  },
  {
    title: 'Strategy & thinking',
    text: 'Short games and open challenges where a child has to plan ahead, consider what someone else might do, and explain why they chose one option over another.',
    example: 'A two-player game where the winning move depends on thinking one turn ahead.',
    skill: 'Planning, strategy and decision making.',
  },
];

const AGE_BANDS = [
  {
    title: 'Ages 5–7',
    kv: 'Simple puzzles, matching & memory',
    text: 'Short activities with a clear finish. Picture matching, simple shape patterns, remember-and-find games and easy observation tasks, kept brief so attention holds.',
  },
  {
    title: 'Ages 8–10',
    kv: 'Logic, patterns & problem solving',
    text: 'Longer puzzles with more than one step. Number and shape sequences, clue-based logic tasks, and challenges where the first attempt often needs adjusting.',
  },
  {
    title: 'Ages 11–12',
    kv: 'Strategy, reasoning & advanced challenges',
    text: 'Multi-step reasoning, strategy games that need planning ahead, and open challenges where explaining the reasoning matters as much as the answer.',
  },
];

const SKILLS = [
  { title: 'Memory', text: 'Holding information in mind long enough to use it, and getting better at it with practice.' },
  { title: 'Focus', text: 'Staying with an activity from start to finish instead of drifting halfway through.' },
  { title: 'Observation', text: 'Looking carefully enough to notice a detail that a quick glance would miss.' },
  { title: 'Logical thinking', text: 'Moving from one fact to the next in order, without skipping a step or guessing.' },
  { title: 'Problem solving', text: 'Working out what a challenge is really asking before deciding how to tackle it.' },
  { title: 'Pattern recognition', text: 'Spotting what repeats, then using that rule to predict what should come next.' },
  { title: 'Decision making', text: 'Choosing between options, acting on the choice, and reviewing how it turned out.' },
  { title: 'Creative thinking', text: 'Finding another way through when the obvious approach does not work.' },
];

const MEMORY_ACTIVITIES = [
  'Remember and match — find the pairs from face-down cards',
  'Sequence recall — repeat a sequence back, one item longer each round',
  'Picture memory — study a scene, then answer questions about it',
  'Number memory — hold a string of digits and repeat it accurately',
  'Pattern recall — rebuild a pattern from memory after it is covered',
];

const LOGIC_TYPES = [
  {
    title: 'Simple logic puzzles',
    seq: ['Box', '✗', 'Mat', '✗', 'Chair'],
    text: 'Clue-based problems solved by elimination. If the cat is not in the box and not on the mat, only one place is left.',
  },
  {
    title: 'Sequence puzzles',
    seq: ['2', '→', '4', '→', '6', '→', '8'],
    text: 'Find the rule that connects the numbers, then apply it once more to get the next one.',
  },
  {
    title: 'Pattern puzzles',
    seq: ['▲', '●', '▲', '●', '▲'],
    text: 'Shapes and colours that repeat in a rhythm the child has to hear before they can continue it.',
  },
  {
    title: 'What comes next?',
    seq: ['1', '→', '4', '→', '9', '→', '16'],
    text: 'Harder sequences where the jump between numbers changes, so the rule takes more finding.',
  },
  {
    title: 'Matching challenges',
    seq: ['3', '↔', 'three'],
    text: 'Pairing items by a rule the child has to identify first — by shape, by colour, by category, or by something less obvious.',
  },
  {
    title: 'Reasoning challenges',
    seq: ['If…', '→', 'then…'],
    text: 'Open questions where a child must explain why their answer holds, not only state it.',
  },
];

const METHOD_STEPS = [
  { title: 'Understand the challenge', text: 'What is actually being asked? Children learn to read the problem before reaching for an answer.' },
  { title: 'Look for the pattern', text: 'What repeats, what changes, what stays the same — the habit of looking before acting.' },
  { title: 'Try a solution', text: 'An attempt is made, even an imperfect one. A wrong try tells you more than no try.' },
  { title: 'Practise with guidance', text: 'Similar challenges with support available, so a stuck child gets a nudge rather than the answer.' },
  { title: 'Solve independently', text: 'A challenge with no prompts — this is where a child finds out what they can now do alone.' },
  { title: 'Review the answer', text: 'Talking through how it was solved, which is what turns one puzzle into a method for the next.' },
];

const SESSION_FLOW = [
  { title: 'Welcome', text: 'A short, easy warm-up that everyone can solve.' },
  { title: 'Brain challenge', text: 'The day’s main puzzle type is introduced with one clear example.' },
  { title: 'Educator demonstration', text: 'One challenge worked through out loud, showing the thinking rather than just the answer.' },
  { title: 'Guided activity', text: 'Children try similar challenges while support is close at hand.' },
  { title: 'Puzzle or game', text: 'A game version of the same skill, often played in pairs.' },
  { title: 'Independent challenge', text: 'One puzzle attempted with no prompts at all.' },
  { title: 'Review', text: 'Answers talked through together, with children explaining their reasoning.' },
];

const ACTIVITIES = [
  { icon: '🧩', title: 'Puzzles', text: 'Sequence and missing-piece puzzles with one findable answer and a rule to discover.' },
  { icon: '🧠', title: 'Memory games', text: 'Matching pairs, recalling sequences and remembering details from a picture.' },
  { icon: '🔷', title: 'Pattern challenges', text: 'Continuing or completing a sequence of shapes, colours or numbers.' },
  { icon: '🔎', title: 'Logic activities', text: 'Clue-based problems solved by working through what each clue rules out.' },
  { icon: '🃏', title: 'Matching games', text: 'Pairing items by a rule the child has to work out before they can start.' },
  { icon: '👁️', title: 'Observation challenges', text: 'Spot-the-difference and detail-hunting tasks that reward looking properly.' },
  { icon: '🔢', title: 'Number puzzles', text: 'Number sequences and simple arithmetic puzzles that feel nothing like homework.' },
  { icon: '♟️', title: 'Strategy games', text: 'Short two-player games where thinking one move ahead decides the outcome.' },
];

const BEGINNER_START = [
  'Simple puzzles with a clear, reachable answer',
  'Matching activities using pictures or shapes',
  'Short memory activities with just a few items',
  'Easy patterns that repeat in an obvious rhythm',
  'Observation games with a small number of details',
  'Basic logic challenges using one or two clues',
];

const WHY_US = [
  { icon: '🎯', title: 'Built for children, not adults', text: 'Activities chosen for how children actually engage — short, varied, and finishing before attention runs out.' },
  { icon: '✋', title: 'Practical, hands-on activities', text: 'Cards, puzzles, patterns and boards. Guided, screen-free sessions rather than an app on a tablet.' },
  { icon: '💬', title: 'Simple explanations', text: 'Every method explained in language a child can repeat back. If they cannot explain it, they have not learned it.' },
  { icon: '🔄', title: 'Structured variety', text: 'Sessions mix categories deliberately, so children practise several skills without any one becoming a chore.' },
  { icon: '❤️', title: 'Parent-friendly approach', text: 'We tell you what your child is working on and what would help at home, in plain terms and without jargon.' },
  { icon: '🤝', title: 'Honest about what this is', text: 'Good thinking practice in a form children enjoy. No IQ claims, no promises about school results.' },
];

const DEMO_INCLUDES = [
  'Your child tries activities from several categories',
  'We see which types they take to and which they find hard',
  'You get a suggested starting level for your child',
  'Timings, learning modes and fees are explained clearly',
  'No obligation to enrol afterwards',
];

const PARENT_SUPPORT = [
  { title: 'What activities they are doing', text: 'Which categories have been covered recently and which your child gravitates towards.' },
  { title: 'Which skills they are practising', text: 'Whether the current focus is memory, patterns, logic, observation or strategy.' },
  { title: 'Where more practice would help', text: 'The specific type your child finds hardest — usually one category rather than everything.' },
  { title: 'How to encourage at home', text: 'Simple, short things you can do between sessions, none of which need special materials.' },
];

const HOME_GUIDE = [
  { title: 'Play simple puzzles together', text: 'Sitting alongside your child matters more than being good at it. A parent who joins in makes the activity worth doing.' },
  { title: 'Ask how they found the answer', text: '“How did you work that out?” is the most useful question. Explaining out loud is where the understanding gets tested.' },
  { title: 'Use age-appropriate memory games', text: 'Card matching, shopping-list recall, remembering what changed in a room — all of it counts as practice.' },
  { title: 'Encourage trying different solutions', text: 'When the first idea fails, ask what else might work rather than supplying the answer. The second attempt is the valuable one.' },
  { title: 'Give them time to think', text: 'The silence after a question feels long to an adult and is exactly where a child is working. Wait it out.' },
  { title: 'Celebrate effort', text: 'Praise the persistence and the reasoning, not just the correct answer. Children who are only praised for right answers stop attempting hard ones.' },
  { title: 'Avoid pressure', text: 'No timers, no comparisons with siblings. A child who feels tested will stop enjoying it, and enjoyment is what keeps the practice going.' },
];

const FAQS = [
  {
    q: 'What are brain games for kids?',
    a: 'Structured puzzles, challenges and thinking activities that give children practice at using memory, attention, patterns, logic and problem solving. They are learning activities presented as games, so children stay engaged while they think.',
  },
  {
    q: 'Why are brain games useful for children?',
    a: 'They give children regular, enjoyable practice at thinking things through rather than guessing. Because they are games, children keep going for longer than they would with a worksheet. How much a child gains depends on how often they take part.',
  },
  {
    q: 'What age can kids start brain games?',
    a: 'The Brolly Juniors programme runs for ages 5 to 12. What matters more than the birthday is whether a child can follow a simple instruction and stay with a short task — activities are matched to the child rather than the age band.',
  },
  {
    q: 'What types of brain games can children play?',
    a: 'Puzzle games, memory games, pattern games, logic games, observation games, matching games, number games, strategy games and open thinking challenges. Sessions mix categories so no single type gets repetitive.',
  },
  {
    q: 'Are brain games suitable for beginners?',
    a: 'Yes. No prior knowledge is needed. Beginners start with simple puzzles, matching, easy memory activities and short observation games, and difficulty rises only once a child is comfortable.',
  },
  {
    q: 'Do children practise memory games?',
    a: 'Yes — remember-and-match, sequence recall, picture memory, number memory and pattern recall are all part of the programme. These are learning activities, not treatment for any memory difficulty.',
  },
  {
    q: 'Do brain games include logic activities?',
    a: 'Yes. Children work on simple logic puzzles, sequence and pattern challenges, what-comes-next activities, matching challenges and reasoning tasks, all pitched at an age-appropriate level.',
  },
  {
    q: 'Can children practise problem solving through brain games?',
    a: 'Yes. Most activities ask a child to understand a challenge, look for the pattern, try an approach and check the result. That sequence is problem solving, practised in a form children enjoy.',
  },
  {
    q: 'Are brain games useful for school students?',
    a: 'Many parents find them useful because they ask for attention and careful thinking. We would not claim they improve marks, but they are a structured way to practise focus, observation and reasoning.',
  },
  {
    q: 'How large are the batches?',
    a: 'Eight children at most, so the educator can pitch each activity at the right level for each child and hear them explain their reasoning.',
  },
  {
    q: 'Are brain games the same as video games?',
    a: 'No. These are guided learning activities using puzzles, cards, patterns and thinking challenges, run with an educator present. They are not screen-based entertainment.',
  },
  {
    q: 'Do brain games make children more intelligent?',
    a: 'We do not make that claim. What brain games reliably provide is regular practice at specific thinking skills — memory, observation, patterns and reasoning — in a format children are willing to keep doing.',
  },
  {
    q: 'How much do brain games classes cost in Hyderabad?',
    a: 'Fees depend on the batch and the duration enrolled for, so we share them directly rather than publishing a number that goes stale. Nothing is payable before the free trial class.',
  },
  {
    q: 'Are brain games classes available near me?',
    a: 'The Brolly Juniors centre is at Nizampet X Roads, Hyderabad. Tell us your area and preferred timing and we will confirm which batch is currently open.',
  },
  {
    q: 'How do I book a free brain games trial?',
    a: 'Use the form on this page, call us, or message us on WhatsApp. Tell us your child’s age and what they enjoy, so the trial activities can be pitched at the right level.',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What are brain games for kids?',
    a: 'Structured puzzles and thinking challenges that give children practice at memory, attention, patterns, logic and problem solving — learning activities in game form.',
  },
  {
    q: 'Why are brain games useful for children?',
    a: 'They give enjoyable, repeatable practice at specific thinking skills. Because they are games, children keep going far longer than they would with a worksheet.',
  },
  {
    q: 'What do kids learn through brain games?',
    a: 'Memory, focus, observation, logical thinking, problem solving, pattern recognition, decision making and creative thinking — plus how to explain how they reached an answer.',
  },
  {
    q: 'What types are suitable for children?',
    a: 'Puzzle, memory, pattern, logic, observation, matching, number and strategy games, plus open thinking challenges — each pitched to the child’s current level.',
  },
  {
    q: 'At what age can children start?',
    a: 'The programme runs ages 5 to 12. Once a child can follow a simple instruction and stay with a short task, they can start.',
  },
  {
    q: 'Where can I find brain games in Hyderabad?',
    a: 'At the Brolly Juniors centre at Nizampet X Roads. Book a free trial through the form on this page.',
  },
];

const RELATED = [
  { icon: '♟️', title: 'Chess', text: 'Strategy and planning taken much further — the natural next step for a child who enjoys the thinking games.', to: '/programs/chess' },
  { icon: '🔢', title: 'Mental maths', text: 'Calculating in the head using flexible strategies, for children who take to the number puzzles.', to: '/programs/mental-maths' },
  { icon: '➗', title: 'Vedic maths', text: 'Shortcut calculation techniques built on spotting patterns in numbers.', to: '/junior-skills/vedic-maths' },
  { icon: '🧮', title: 'Abacus', text: 'Bead-based calculation that builds visualisation, memory and concentration.', to: '/junior-skills/abacus' },
  { icon: '🤖', title: 'AI for kids', text: 'How artificial intelligence works, taught through hands-on activities.', to: '/ai-for-kids' },
  { icon: '💻', title: 'Coding', text: 'Logical sequencing and problem solving, built through projects children make themselves.', to: '/programs/coding' },
];

export default function BrainGamesPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Brain games for kids in Hyderabad</h1>
              <p className="section-lead">
                Children explore puzzles, memory challenges, patterns, observation tasks and
                problem-solving games. Every activity is guided, age-appropriate, and chosen so a
                child has to think it through rather than guess.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#types" className="btn btn-outline">
                  Explore brain games
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> No prior knowledge needed
                </li>
                <li>
                  <span className="tick">★</span> Guided, screen-free activities
                </li>
              </ul>
            </div>
            <TrickCard
              label="A typical challenge: what comes next?"
              sum="2 → 4 → 6 →"
              answer="8"
              steps={TRICK_STEPS}
              note="Children learn the method, not just the answer."
              showLabel="Show me the thinking"
              hideLabel="Hide the thinking"
            />
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

      {/* ---------- What are brain games ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What are brain games for kids?"
            lead="A short, plain-English explanation you can read through with your child."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Brain games are structured puzzles, challenges and thinking activities. Each one is
                built around a particular skill — remembering something, spotting a pattern, noticing a
                detail, or reasoning from one fact to the next.
              </p>
              <p>
                The word &ldquo;game&rdquo; matters. A child asked to complete a worksheet will do the
                minimum; a child given a puzzle will often ask for another one. The thinking is the
                same either way, but the willingness to keep going is completely different, and that
                willingness is what makes the practice add up.
              </p>
              <p>
                Difficulty is matched to the child. A puzzle that is too easy teaches nothing, and one
                that is too hard makes a child stop trying. Most of the skill in running these sessions
                is in pitching each activity just past what a child can already do comfortably.
              </p>
              <p>
                These are guided, hands-on activities using cards, puzzles, patterns and boards — not
                screen-based games.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>Skills brain games draw on</h2>
                <ul className="pill-row">
                  {DRAWS_ON.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>What we will not claim</h2>
                <ul className="pill-row">
                  {WONT_CLAIM.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The same thing, three ways</h2>
            {ANSWER_ROWS.map((r) => (
              <p key={r.tag}>
                <span className="kv">{r.tag}</span>
                {r.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why try ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids try brain games?"
            lead="The honest answer: they are an enjoyable way to practise specific thinking skills, and children keep doing them because they are games."
          />
          <div className="grid-3">
            {WHY_TRY.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            How much a child gains depends on how often they take part and how well the activities
            suit them. We do not promise gains in intelligence or school performance — what we commit
            to is well-chosen activities and consistent guided practice.
          </p>
        </div>
      </section>

      {/* ---------- What it develops ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What regular brain games practice develops"
            lead="Eight things children work on across the programme."
          />
          <div className="grid-4">
            {DEVELOPS.map((d) => (
              <div className="card" key={d.title}>
                <span className="icon">{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- The four strands (the real curriculum) ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow={page.curriculum.eyebrow}
            title={page.curriculum.title}
            lead={page.curriculum.lead}
          />
          <StageTrack stages={page.curriculum.stages} />
        </div>
      </section>

      {/* ---------- Types ---------- */}
      <section id="types">
        <div className="container">
          <SectionHead
            eyebrow="Categories"
            title="Types of brain games for kids"
            lead="Nine categories, mixed across sessions so that no single type becomes repetitive and every child finds something they enjoy."
          />
          <div className="grid-3">
            {TYPES.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Learning areas ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Learning areas"
            title="How the activities are grouped"
            lead="Six areas the activities fall into. Sessions draw from several rather than working through them in order — the four strands above are what actually rotates."
          />
          <NumberedRows items={LEARNING_AREAS} />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Suggested age groups"
            title="Brain activities by age group"
            lead="Suggested groupings, not fixed batches. Activities adapt to the child’s level, so a younger child who is ready can attempt harder puzzles and an older beginner still starts somewhere comfortable."
          />
          <div className="grid-3">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.title}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Not sure where your child fits? That is exactly what the free trial is for — we try a few
            activities and see which level suits.
          </p>
          <div className="center" style={{ marginTop: 24 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Skills children practise through brain games"
            lead="What each one actually means, in plain language."
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

      {/* ---------- Memory, up close ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">One category up close</span>
            <h2>Memory games for kids</h2>
            <p>
              Memory activities ask a child to take in some information, hold it briefly, and then use
              it. That short window is where most everyday remembering actually happens — following an
              instruction, keeping a number in mind, recalling what was on the board.
            </p>
            <p>
              Activities start easy and grow. A child who can match four pairs comfortably moves to
              six, then eight. Sequences get one item longer. The step up is small enough each time
              that it feels achievable rather than discouraging.
            </p>
            <p>
              These are learning activities. They are not treatment for any memory difficulty, and we
              would not describe them that way. If you have a specific concern about your child&rsquo;s
              memory, that is a conversation for a doctor rather than a learning centre.
            </p>
          </div>
          <div className="panel">
            <h2>Example memory activities</h2>
            <ul className="pill-row">
              {MEMORY_ACTIVITIES.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Logic, up close ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="One category up close"
            title="Logic and puzzle games for kids"
            lead="Logic activities give children a small, closed problem where the answer can be reasoned out rather than guessed. Here are the kinds of thing they work on."
          />
          <div className="grid-3">
            {LOGIC_TYPES.map((l) => (
              <div className="card" key={l.title}>
                <h3>{l.title}</h3>
                <div className="prog-seq" aria-hidden="true">
                  {l.seq.map((s, i) => (
                    <span key={`${l.title}-${i}`} className={i === l.seq.length - 1 ? 'is-q' : undefined}>
                      {s}
                    </span>
                  ))}
                </div>
                <p>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Interactive challenge ---------- */}
      <section id="challenge">
        <div className="container center">
          <SectionHead
            eyebrow="Try it together"
            title="Try a quick brain challenge"
            lead="Five challenges of the kind children work on in class. Sit with your child and talk through the reasoning — there is no score to worry about."
          />
          <ChallengeQuiz items={CHALLENGES} />
        </div>
      </section>

      {/* ---------- How classes work ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The teaching method"
            title="How brain games classes work"
            lead="The same six steps are used for every new challenge, so children always know how to begin."
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

      {/* ---------- Session shape ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What a brain games session looks like"
            lead="Seven stages, in the same order every time. Children settle faster when they know what is coming next."
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

      {/* ---------- Activities ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practice"
            title="Practical brain activities for kids"
            lead="Examples of the kinds of activity used to keep practice varied. Children who enjoy the practice do more of it, and doing more of it is what makes the skills stick."
          />
          <div className="grid-4">
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

      {/* ---------- Beginners ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Starting out</span>
            <h2>Brain games for beginners</h2>
            <p>
              Your child does not need to be good at puzzles to start. They do not need to be quick, or
              confident, or already interested. Nothing here assumes any prior knowledge.
            </p>
            <p>
              Beginners start with activities that have a clear finish and a manageable step — matching
              a few pairs, continuing a short pattern, finding one difference between two pictures. The
              point of the first sessions is that a child succeeds at something, because a child who
              succeeds early will attempt the next thing.
            </p>
            <p>
              Difficulty only rises once an activity feels easy. Children are never given a puzzle
              designed to defeat them, and no one is asked to work faster than the rest of the group.
            </p>
          </div>
          <div className="panel">
            <h2>Where beginners start</h2>
            <ul className="pill-row">
              {BEGINNER_START.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="Why choose Brolly Juniors for brain games?"
            lead="Brolly Juniors is a children’s learning centre at Nizampet X Roads, Hyderabad. Brain Games sits alongside our chess, abacus, Vedic maths, mental maths, coding, robotics and AI programmes."
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
          <div className="quick-answer" style={{ marginTop: 36 }}>
            <h2>Guidance in class</h2>
            <p>
              Children get guided support to explore challenges and practise problem-solving step by
              step. Help arrives as a hint rather than an answer, so a stuck child still gets to solve
              it themselves — and batches stay capped at eight so that is actually possible.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning modes, timings and fees"
            lead="We share these directly rather than publishing them here, so what you get is current and specific to your child’s level."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
              <p className="kv">Ask us</p>
              <ul>
                <li>Classroom sessions at the centre</li>
                <li>Online availability varies by term</li>
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
              <h3>Brain games fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on batch and duration</li>
                <li>We explain what is included first</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free brain games trial for your child</h2>
            <p>
              Let your child explore puzzles, thinking activities and problem-solving challenges. The
              trial is a real session, not a sales meeting — your child works through actual
              activities.
            </p>
            <ul className="pill-row">
              {DEMO_INCLUDES.map((d) => (
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
            <TrialForm program="Brain Games" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Parent support and progress"
            lead="You should not have to guess what your child is doing in class. Here is what you can expect to understand at any point."
          />
          <div className="grid-4">
            {PARENT_SUPPORT.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Want an update on how your child is getting on? Ask. We will tell you honestly, including
            the parts that still need work.
          </p>
        </div>
      </section>

      {/* ---------- Home guide ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practical tips"
            title="Parent guide: how to encourage brain games at home"
            lead="Seven things that make a real difference between sessions. None require special materials or any particular skill from you."
          />
          <div className="grid-3">
            {HOME_GUIDE.map((h) => (
              <div className="card" key={h.title}>
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
            <span className="eyebrow">Hyderabad</span>
            <h2>Brain games for kids in Hyderabad</h2>
            <p>
              Brolly Juniors runs its brain games sessions from a learning centre built around children
              rather than adult training. The pace, the materials and the group size are all set up for
              young learners.
            </p>
            <p>
              Parents across Hyderabad look for this for different reasons. Some want a screen-free
              activity that still holds a child&rsquo;s attention. Some have a child who rushes at
              everything and would benefit from something that rewards slowing down. Both work here,
              because activities are chosen to fit the child rather than the age group.
            </p>
            <p>
              If you want to see a session before committing, the free trial is the simplest way. Your
              child works through a few activities, you watch which ones catch them, and we talk about
              a sensible starting level.
            </p>
          </div>
          <div className="panel">
            <h2>Visit Brolly Juniors</h2>
            <p>{formattedAddress()}</p>
            <p>{address.landmarks}.</p>
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

      {/* ---------- Brain games or a specialist programme ---------- */}
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Common question</span>
            <h2>Brain games, or a specialist programme?</h2>
            <p>
              Parents often ask whether to start here or go straight to something specific like chess
              or abacus. The difference is breadth.
            </p>
            <p>
              Brain games cover a wide range of thinking skills in short bursts — memory one moment,
              patterns the next. That breadth suits younger children, and children who are not yet sure
              what they enjoy. A specialist programme goes deep into one discipline instead, which
              suits a child who already knows they like it.
            </p>
            <p>
              Many children start here and pick a specialist programme once something has clearly
              caught their interest. If that turns out to be strategy,{' '}
              <Link to="/programs/chess">chess</Link> is the natural next step; if it is numbers,{' '}
              <Link to="/programs/mental-maths">mental maths</Link> or{' '}
              <Link to="/junior-skills/abacus">abacus</Link>.
            </p>
          </div>
          <div className="panel">
            <h2>The short version</h2>
            <ul className="pill-row">
              <li>Brain games — broad thinking practice, many short activities, good starting point</li>
              <li>Chess — one discipline in depth, strategy and planning</li>
              <li>Abacus and maths — number-focused, builds calculation fluency</li>
            </ul>
            <p className="note-line">
              Not sure which suits your child? Book a trial and we will recommend one honestly,
              including saying if now is not the right time.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="If a particular category of brain game catches your child’s interest, there is usually a specialist programme that goes further into it."
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

      <FaqList items={FAQS} title="Brain games for kids: frequently asked questions" />

      {/* ---------- Quick answers ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="Brain games for kids: quick answers"
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
