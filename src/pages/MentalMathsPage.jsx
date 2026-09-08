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

/* The mental maths programme page.
 *
 * Ported from the standalone mental-maths-classes-for-kids build — the third
 * file from that template, after brain games and Vedic maths. The worked
 * example, the challenge quiz and the numbered stage rows come from
 * components/ProgramBits.jsx and are shared with both. The source's own
 * header, footer and type scale did not come across; everything here inherits
 * the site type roles from global.css.
 *
 * As on the sibling pages, two things are handled rather than transcribed:
 *
 *   - The source's four "suggested learning stages" carried its own note
 *     saying they are not published Brolly Juniors level names. The real
 *     structure is the four-level curriculum in data/catalog/programmes.js, so
 *     that renders as the curriculum and the stages follow as how the learning
 *     is sequenced.
 *   - Its "contact us" answers on timings, fees and modes stay, since those
 *     are genuinely not published. Its hardcoded phone number does not:
 *     contact details come from data/site.js.
 */

const TRICK_STEPS = [
  <>
    Break each number apart: <strong>46</strong> is 40 and 6. <strong>37</strong> is 30 and 7.
  </>,
  <>
    Add the tens first: 40 + 30 = <strong>70</strong>.
  </>,
  <>
    Now add the ones: 6 + 7 = <strong>13</strong>.
  </>,
  <>
    Put them together: 70 + 13 = <strong>83</strong>. All done in your head.
  </>,
];

const CHALLENGES = [
  {
    q: '27 + 18',
    hint: 'Add 20, then take 2 back.',
    opts: ['35', '44', '45'],
    a: '45',
    why: '27 + 20 = 47, then −2 = 45.',
  },
  {
    q: '63 − 29',
    hint: 'Take away 30, then add 1 back.',
    opts: ['34', '36', '44'],
    a: '34',
    why: '63 − 30 = 33, then +1 = 34.',
  },
  {
    q: '25 + 25 + 25',
    hint: 'Two 25s make 50 — then one more.',
    opts: ['65', '75', '80'],
    a: '75',
    why: '50 + 25 = 75.',
  },
  {
    q: 'About how much is 312 + 289?',
    hint: 'Round both to the nearest hundred.',
    opts: ['500', '600', '700'],
    a: '600',
    why: 'Roughly 300 + 300. The exact answer is 601.',
  },
  {
    q: '82 − 78',
    hint: 'The numbers are close — count up from 78.',
    opts: ['4', '6', '14'],
    a: '4',
    why: '78 to 82 is four steps.',
  },
];

const TRUST = [
  { title: 'Mental calculation', text: 'Children practise finishing a sum in their head, not just on paper.' },
  { title: 'Number confidence', text: 'A strategy they understand makes numbers feel manageable.' },
  { title: 'Problem solving', text: 'Choosing how to approach a sum is part of what is taught.' },
  { title: 'Everyday maths', text: 'Useful for shopping totals, scores and school arithmetic alike.' },
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Written maths asks a child to follow one fixed procedure. Mental maths asks them to look at the numbers first and pick an approach that suits them. That small shift is what turns arithmetic from a chore into something a child can reason about.',
  },
  {
    tag: 'Easy example',
    text: 'To work out 63 − 29, a child can take away 30 to reach 33, then add the extra 1 back to get 34. No borrowing, no crossing out, and nothing to write down.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'One strategy is introduced at a time, demonstrated, and practised with guidance before a child uses it independently. Book a free trial to see how your child takes to the approach.',
  },
];

const WHAT_IT_IS = [
  'Calculating in the head using flexible strategies',
  'Choosing an approach that fits the numbers in front of you',
  'Estimating first, then checking the exact answer',
  'Regular short practice that builds comfort with numbers',
];

const WHAT_IT_IS_NOT = [
  'Not a race — accuracy is built before speed',
  'Not a replacement for the method your child’s school teaches',
  'Not a promise of higher marks or a fixed calculation speed',
  'Not something a child masters in a few sessions',
];

const WHY_LEARN = [
  {
    title: 'Number confidence',
    text: 'Most children who dislike maths are not weak at it — they are unsure. Having a strategy to reach for removes much of that hesitation, and a confident child attempts more questions.',
  },
  {
    title: 'Real mental calculation practice',
    text: 'Children are often told to work things out in their head without ever being shown how. Here the strategies are taught explicitly and then practised.',
  },
  {
    title: 'Faster thinking on routine work',
    text: 'Everyday arithmetic takes less time and effort, which leaves more attention for the part of a question that actually needs thought.',
  },
  {
    title: 'Focus and working memory',
    text: 'Holding two numbers in mind while working on a third is genuine mental exercise, and it improves with practice like anything else.',
  },
  {
    title: 'Accuracy through estimation',
    text: 'Children learn to estimate before calculating, so an answer that is wildly off gets noticed rather than written down.',
  },
  {
    title: 'Problem solving',
    text: 'Deciding which strategy suits a particular sum is a small decision, but making it repeatedly is how flexible thinking is built.',
  },
];

const BUILDS = [
  { icon: '🧠', title: 'Mental calculation', text: 'Finishing a sum in the head, using a strategy that suits the numbers in front of them.' },
  { icon: '⭐', title: 'Number confidence', text: 'Being willing to attempt a calculation instead of waiting to be shown how.' },
  { icon: '👁️', title: 'Focus', text: 'Holding numbers in mind through several steps without losing track halfway.' },
  { icon: '✅', title: 'Accuracy', text: 'Estimating first so that an answer which cannot be right gets spotted straight away.' },
  { icon: '🧩', title: 'Problem solving', text: 'Reading a question, working out what it asks, and choosing an approach before calculating.' },
  { icon: '🔎', title: 'Logical thinking', text: 'Understanding why splitting or rounding works, so the idea transfers to new sums.' },
  { icon: '⚡', title: 'Quick thinking', text: 'Short challenges give children a friendly way to see their own fluency improve.' },
  { icon: '🔢', title: 'Maths confidence', text: 'Repeated success with manageable numbers, which is what changes how a child feels about the subject.' },
];

const TOPICS = [
  { title: 'Number recognition', text: 'Reading numbers confidently, understanding place value, and knowing what each digit is worth — the foundation every strategy sits on.' },
  { title: 'Addition', text: 'Splitting numbers into tens and ones, making round numbers, and using known facts such as doubles to reach an answer.' },
  { title: 'Subtraction', text: 'Counting on to find a difference, rounding and adjusting, and subtracting in useful chunks rather than digit by digit.' },
  { title: 'Multiplication', text: 'Building from tables a child already knows, doubling and halving, and breaking a larger multiplication into two smaller ones.' },
  { title: 'Division', text: 'Sharing into equal groups, dividing by simple factors in steps, and checking the result by multiplying back.' },
  { title: 'Mental calculation', text: 'Direct practice at holding numbers in mind and finishing without paper, built up slowly so it never feels overwhelming.' },
  { title: 'Number patterns', text: 'Noticing what repeats — in tables, in sequences, in the way numbers behave near tens and hundreds.' },
  { title: 'Estimation', text: 'Getting to a rough answer quickly, which is a useful skill on its own and a good way to catch mistakes.' },
  { title: 'Calculation strategies', text: 'Looking at a sum and deciding which approach fits it, instead of applying one fixed method to everything.' },
  { title: 'Problem-solving activities', text: 'Word problems and puzzles that ask children to apply what they have learned in a less predictable setting.' },
];

const STAGES = [
  {
    title: 'Number basics',
    text: 'Everything rests on a child being genuinely comfortable with numbers. Number recognition, place value, counting forwards and backwards, and the idea that a number can be broken apart and put back together.',
    example: 'Splitting 58 into 50 and 8, then rebuilding it a different way.',
    skill: 'Number sense and place-value confidence.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Basic mental calculations',
    text: 'Children start doing real calculations without paper. Addition and subtraction with small numbers, using known facts and simple splitting, with accuracy prioritised over speed throughout.',
    example: 'Adding 46 and 37 by handling the tens first, then the ones.',
    skill: 'Holding a calculation in mind from start to finish.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Calculation strategies',
    text: 'More than one route becomes available, and the child begins choosing between them. Rounding and adjusting, doubling and halving, counting on, and estimating before calculating.',
    example: 'Solving 63 − 29 by taking away 30 and adding 1 back.',
    skill: 'Strategy selection and flexible thinking.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Advanced mental maths practice',
    text: 'Larger numbers, multi-step problems, and word problems where the child must work out what is being asked before deciding how to calculate. Checking answers mentally becomes routine.',
    example: 'Estimating 312 + 289, then working out the exact answer and comparing.',
    skill: 'Multi-step reasoning and self-checking.',
    skillLabel: 'Skill developed',
  },
];

const AGE_BANDS = [
  {
    title: 'Ages 7–9',
    kv: 'Number awareness & simple mental maths',
    text: 'The focus is comfort with numbers rather than speed. Counting, place value, number bonds, and simple addition and subtraction a child can do without writing.',
  },
  {
    title: 'Ages 9–11',
    kv: 'Mental calculation & number strategies',
    text: 'Children secure with the basics learn splitting, rounding and adjusting, doubling and halving, and start choosing which strategy suits a given sum.',
  },
  {
    title: 'Ages 11–14',
    kv: 'Advanced mental maths & problem solving',
    text: 'Larger numbers, estimation, multi-step word problems, and the habit of checking an answer mentally before accepting it.',
  },
];

const SKILLS = [
  { title: 'Number sense', text: 'An instinct for how numbers behave — that 29 is nearly 30, and that this makes a subtraction easier.' },
  { title: 'Mental calculation', text: 'Carrying a sum through to the answer in the head, without writing the working down.' },
  { title: 'Focus', text: 'Staying with a calculation from the first step to the last without losing the thread.' },
  { title: 'Accuracy', text: 'Getting the right answer consistently, and noticing when something looks wrong.' },
  { title: 'Problem solving', text: 'Working out what a question is asking before deciding how to calculate it.' },
  { title: 'Logical thinking', text: 'Understanding why a strategy works, so it can be applied to a sum they have not seen before.' },
  { title: 'Quick thinking', text: 'Reaching a sensible answer in a short time, built through practice rather than pressure.' },
  { title: 'Maths confidence', text: 'Being willing to have a go — usually the change parents notice first.' },
];

const STRATEGIES = [
  {
    title: 'Break the numbers apart',
    sum: '46 + 37',
    working: '40+30 = 70, then 6+7 = 13',
    result: '83',
    text: 'Handle the tens first, then the ones, then combine. Usually the first strategy a child learns, because it works on almost any addition.',
  },
  {
    title: 'Round, then adjust',
    sum: '63 − 29',
    working: '63 − 30 = 33, then +1',
    result: '34',
    text: 'Change an awkward number into a friendly one, do the easy sum, then correct for the difference. No borrowing needed.',
  },
  {
    title: 'Use a fact you already know',
    sum: '8 + 9',
    working: 'double 8 = 16, then +1',
    result: '17',
    text: 'Start from something already memorised and take one small step from it. Children build a lot of new facts this way.',
  },
  {
    title: 'Estimate before you calculate',
    sum: '312 + 289',
    working: 'about 300 + 300',
    result: '≈ 600',
    text: 'A rough answer takes seconds and tells you what to expect. The exact answer here is 601 — anything far from 600 must be a mistake.',
  },
  {
    title: 'Count on to subtract',
    sum: '82 − 78',
    working: '78 → 82 is four steps',
    result: '4',
    text: 'When two numbers are close, counting up from the smaller one is far quicker than subtracting properly.',
  },
  {
    title: 'Check by working backwards',
    sum: '34 + 29',
    working: 'check: 63 − 29 = 34',
    result: '63',
    text: 'Reversing the sum confirms the answer. Children who build this habit catch their own mistakes instead of waiting to be told.',
  },
];

const METHOD_STEPS = [
  { title: 'Learn the number idea', text: 'The strategy is explained in plain language, with the reason it works made clear from the start.' },
  { title: 'See a simple example', text: 'One worked example is shown slowly, step by step, using small and friendly numbers.' },
  { title: 'Practise with guidance', text: 'Children try similar sums while support is available, so mistakes get corrected as they happen.' },
  { title: 'Try independently', text: 'Practice without prompts — this is where a child finds out what they have genuinely absorbed.' },
  { title: 'Review and improve', text: 'Answers are checked together, sticking points are revisited, and the strategy returns in later sessions.' },
];

const SESSION_FLOW = [
  { title: 'Welcome', text: 'A short warm-up that revisits what was covered last time.' },
  { title: 'Number concept', text: 'The new strategy is introduced, with the reasoning behind it explained.' },
  { title: 'Educator demonstration', text: 'A worked example on the board, taken slowly with questions invited.' },
  { title: 'Guided practice', text: 'Children work through sums together while support is close at hand.' },
  { title: 'Mental maths activity', text: 'A game, puzzle or challenge that uses the day’s strategy in a different setting.' },
  { title: 'Review', text: 'A quick recap of what was learned and what to practise before the next session.' },
];

const ACTIVITIES = [
  { icon: '🧩', title: 'Number puzzles', text: 'Missing-number and pattern puzzles that ask children to reason backwards from an answer.' },
  { icon: '⏱️', title: 'Quick calculation challenges', text: 'Short sets of sums against a gentle timer, so children can watch their own fluency build.' },
  { icon: '🎲', title: 'Mental maths games', text: 'Paired and group games where the answer has to be worked out in the head, not written down.' },
  { icon: '🔷', title: 'Number pattern activities', text: 'Spotting what repeats in tables and sequences, which makes new facts easier to learn.' },
  { icon: '📐', title: 'Estimation activities', text: 'Guessing a rough answer first, then checking how close it was — useful and surprisingly fun.' },
  { icon: '💭', title: 'Problem-solving tasks', text: 'Word problems and everyday situations where the child works out which strategy applies.' },
];

const WHY_US = [
  { icon: '🎯', title: 'Built for children, not adults', text: 'Everything is pitched at how children actually learn — short explanations, plenty of examples, and practice broken into pieces that hold attention.' },
  { icon: '✋', title: 'Learning through activity', text: 'Strategies are practised through games, puzzles and challenges rather than through worksheets alone.' },
  { icon: '💬', title: 'Simple explanations first', text: 'Every strategy is explained in language a child can repeat back. If they cannot explain it, they have not learned it yet.' },
  { icon: '🪜', title: 'Structured, sequenced learning', text: 'Topics build on each other in a deliberate order, and earlier work keeps being revisited as new material is added.' },
  { icon: '❤️', title: 'Parent-friendly approach', text: 'We tell you what your child is working on and what would help at home, in plain terms and without jargon.' },
  { icon: '🌱', title: 'Accuracy before speed', text: 'Children are never pushed to be fast before they are reliable. Speed follows practice a child enjoys.' },
];

const DEMO_INCLUDES = [
  'Your child works through an actual mental maths strategy',
  'We look at what they are already comfortable with',
  'You get a suggested starting point for your child',
  'Timings, learning modes and fees are explained clearly',
  'No obligation to enrol afterwards',
];

const PARENT_SUPPORT = [
  { title: 'What your child is learning', text: 'Which strategies have been introduced, and roughly where your child is in the sequence.' },
  { title: 'Which skills are being practised', text: 'Whether the current focus is learning a new strategy, building accuracy, or working faster.' },
  { title: 'Where more practice would help', text: 'The specific step your child hesitates on — usually something small and easily fixed at home.' },
  { title: 'How to support at home', text: 'Simple, short things you can do between sessions that reinforce rather than repeat the class.' },
];

const HOME_GUIDE = [
  { title: 'Practise for a few minutes regularly', text: 'Five or ten minutes on most days beats an hour on Sunday. Short sessions stay enjoyable, and enjoyable practice is the kind that continues.' },
  { title: 'Use simple number games', text: 'Card games, dice, dominoes — anything where children add or compare numbers quickly counts as practice.' },
  { title: 'Ask how they got the answer', text: '“How did you work that out?” is the single most useful question. Explaining out loud shows whether the strategy is understood or only copied.' },
  { title: 'Practise everyday calculations', text: 'Shopping totals, change from a note, minutes until the bus, runs needed to win. Real numbers make the point better than a worksheet.' },
  { title: 'Encourage effort, not just answers', text: 'Notice the attempt, the persistence and the checking. That is what keeps a child trying the next question.' },
  { title: 'Avoid creating pressure', text: 'Timing every attempt makes children anxious rather than fast. Accuracy first; speed follows on its own.' },
  { title: 'Keep it light', text: 'Turn practice into a quick game or a challenge between the two of you. A child who associates maths with tension will avoid it.' },
];

const FAQS = [
  {
    q: 'What is mental maths for kids?',
    a: 'The practice of working out calculations in the head instead of writing down every step. Children learn strategies such as breaking numbers apart, rounding and adjusting, and using number patterns, then practise until those strategies feel automatic.',
  },
  {
    q: 'Why should children learn mental maths?',
    a: 'It builds number confidence and gives children a way to handle everyday calculations without reaching for paper or a calculator. It also strengthens focus and working memory, because a child has to hold numbers in mind while working.',
  },
  {
    q: 'What age can kids start mental maths?',
    a: 'The Brolly Juniors programme runs from ages 7 to 14. Children can begin once they recognise numbers and count confidently — the starting point is set from what a child can already do rather than age alone.',
  },
  {
    q: 'What do children learn in mental maths classes?',
    a: 'Number recognition, mental addition and subtraction, multiplication and division, number patterns, estimation, calculation strategies and problem-solving activities. Each topic is introduced gradually and revisited through regular practice.',
  },
  {
    q: 'Is mental maths suitable for beginners?',
    a: 'Yes. It starts from number basics, so no prior training is needed. Beginners begin with small numbers and simple strategies, and move on only once those feel comfortable.',
  },
  {
    q: 'Does my child need to be good at maths to start?',
    a: 'No. Mental maths is often most useful for children who find maths difficult, because it replaces guesswork with a method they can follow. Children who already enjoy maths simply move through the stages faster.',
  },
  {
    q: 'Does mental maths help with number confidence?',
    a: 'Many children become more willing to attempt a calculation once they have a strategy they understand. Confidence comes from repeated success with manageable numbers, which is how the practice is structured.',
  },
  {
    q: 'Is mental maths useful for school students?',
    a: 'It can be. Mental calculation supports the arithmetic children already do at school and helps them check their own answers. School work should continue to follow the method the school teaches.',
  },
  {
    q: 'What is the difference between mental maths and Vedic maths?',
    a: 'Mental maths is the broader skill of calculating in the head using flexible strategies such as splitting numbers and rounding. Vedic maths is a specific set of shortcut techniques for particular kinds of sum. Many children do mental maths first and move on to Vedic maths afterwards.',
  },
  {
    q: 'How are the classes taught at Brolly Juniors?',
    a: 'Each idea is introduced with a simple explanation, shown through a worked example, practised with guidance, and then tried independently. Classes use number games, puzzles and short challenges so children stay involved.',
  },
  {
    q: 'How many levels are there?',
    a: 'Four: number bonds and instant recall, splitting and compensation, multiplication and division strategies, then estimation, checking and word problems. A child moves up when the current level is comfortable.',
  },
  {
    q: 'What skills can children develop through mental maths?',
    a: 'Number sense, mental calculation, focus, accuracy, quick thinking, logical thinking and problem solving. They also build the habit of estimating first and checking their own answers.',
  },
  {
    q: 'How much do mental maths classes cost in Hyderabad?',
    a: 'Fees depend on the batch and the duration enrolled for, so we share them directly rather than publishing a number that goes stale. Nothing is payable before the free trial.',
  },
  {
    q: 'Are mental maths classes available near me?',
    a: 'The Brolly Juniors centre is at Nizampet X Roads, Hyderabad. Tell us your area and preferred timing and we will confirm which batch is currently open.',
  },
  {
    q: 'How do I book a free mental maths trial?',
    a: 'Use the form on this page, call us, or message us on WhatsApp. Share your child’s age and how they currently find maths, so the trial can be pitched at the right level.',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What is mental maths for kids?',
    a: 'Calculating in the head rather than on paper. Children learn strategies such as splitting numbers into tens and ones, rounding and adjusting, and using facts they already know, then practise until those become automatic.',
  },
  {
    q: 'Why is it useful for children?',
    a: 'It gives children a method where they often have none, which builds number confidence. Everyday arithmetic takes less effort, and holding numbers in mind while working is genuine practice for focus and working memory.',
  },
  {
    q: 'What do kids learn in the classes?',
    a: 'Number recognition, mental addition and subtraction, multiplication and division, number patterns, estimation, calculation strategies and problem-solving activities.',
  },
  {
    q: 'At what age can children start?',
    a: 'The programme runs ages 7 to 14. Children can start once they recognise numbers and count confidently — the starting level comes from what they can already do.',
  },
  {
    q: 'Does it help with calculation practice?',
    a: 'Yes. Mental calculation is practised directly through games, puzzles and short challenges rather than left to develop on its own.',
  },
  {
    q: 'Where can I find mental maths classes in Hyderabad?',
    a: 'At the Brolly Juniors centre at Nizampet X Roads. Book a free trial through the form on this page.',
  },
];

const RELATED = [
  { icon: '➗', title: 'Vedic maths', text: 'Shortcut techniques for specific kinds of sum — the natural next step once mental calculation is comfortable.', to: '/junior-skills/vedic-maths' },
  { icon: '🧮', title: 'Abacus', text: 'Bead-based calculation that builds visualisation alongside mental arithmetic.', to: '/junior-skills/abacus' },
  { icon: '🧩', title: 'Brain games', text: 'Broader thinking practice — memory, logic, patterns and strategy in short bursts.', to: '/programs/brain-games' },
  { icon: '♟️', title: 'Chess', text: 'Planning, pattern recognition and thinking ahead — the reasoning that supports maths problem solving.', to: '/programs/chess' },
  { icon: '💻', title: 'Coding', text: 'Logical sequencing and step-by-step thinking, built through projects children make themselves.', to: '/programs/coding' },
  { icon: '🤖', title: 'Robotics', text: 'Hands-on building and problem solving that puts logical thinking into a physical, visible form.', to: '/programs/robotics' },
];

export default function MentalMathsPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Mental maths classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children practise working with numbers in their head. Simple strategies are explained
                clearly, demonstrated with examples, and built up through structured activities until
                your child can calculate without reaching for paper.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#techniques" className="btn btn-outline">
                  See the strategies
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Method before speed
                </li>
                <li>
                  <span className="tick">★</span> Activity-based learning
                </li>
              </ul>
            </div>
            <TrickCard
              label="One strategy: split the numbers"
              sum="46 + 37  ="
              answer="83"
              steps={TRICK_STEPS}
              note="This is how children are taught to think through a sum."
              showLabel="Show me the steps"
              hideLabel="Hide the steps"
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

      {/* ---------- What is mental maths ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is mental maths?"
            lead="A short, plain-English explanation you can share with your child."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Mental maths is the ability to work with numbers and solve calculations in your mind,
                without depending on written steps for every sum. It is not about being fast for the
                sake of it — it is about having a way to think through a calculation rather than only a
                procedure to follow.
              </p>
              <p>
                Children practise by learning a handful of flexible strategies. Splitting a number into
                tens and ones. Rounding to something friendly and adjusting afterwards. Using a fact
                they already know to get to one they do not. Estimating an answer before working it out
                properly.
              </p>
              <p>
                Number confidence matters because it decides whether a child attempts a question at
                all. A child with no method will guess or freeze; a child with a strategy will have a
                go. Over time that willingness matters more than raw speed.
              </p>
              <p>
                Comfort with numbers comes from regular, manageable practice. Small amounts done often
                work far better than long sessions done rarely, which is why the programme is built
                around short activities rather than long worksheets.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What mental maths is</h2>
                <ul className="pill-row">
                  {WHAT_IT_IS.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>What it is not</h2>
                <ul className="pill-row">
                  {WHAT_IT_IS_NOT.map((w) => (
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

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn mental maths?"
            lead="The honest answer: it will not turn your child into a different learner overnight, but it gives them a method where they previously had none."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            How much a child gains depends on how regularly they practise and where they are starting
            from. We do not promise a particular improvement in school marks or a fixed calculation
            speed — what we commit to is structured teaching and consistent practice.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What regular mental maths practice builds"
            lead="Eight things children work on across the programme."
          />
          <div className="grid-4">
            {BUILDS.map((b) => (
              <div className="card" key={b.title}>
                <span className="icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Strategies ---------- */}
      <section className="band-soft" id="techniques">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="Mental maths strategies, explained simply"
            lead="Mental maths is not one method. It is a small set of strategies, and part of the skill is choosing which one fits the numbers in front of you. Six examples of what children learn to recognise."
          />
          <div className="grid-3">
            {STRATEGIES.map((t) => (
              <div className="prog-tech" key={t.title}>
                <div className="prog-tech-top">{t.title}</div>
                <div className="prog-tech-body">
                  <div className="prog-tech-sum">
                    <b>{t.sum}</b>
                    <span className="prog-tech-eq" aria-hidden="true">
                      =
                    </span>
                    <span className="prog-tech-res">{t.result}</span>
                  </div>
                  <p className="prog-tech-working">{t.working}</p>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Understanding comes before speed. A child is asked to explain how they got an answer before
            being asked to get it faster — a strategy that is only copied tends to be forgotten; one
            that is understood gets reused.
          </p>
        </div>
      </section>

      {/* ---------- Try it ---------- */}
      <section id="challenge">
        <div className="container center">
          <SectionHead
            eyebrow="Try it together"
            title="Try a quick mental maths challenge"
            lead="Five questions using the strategies above. Sit with your child and see how they get on — there is no score to worry about."
          />
          <ChallengeQuiz items={CHALLENGES} noun="Question" />
        </div>
      </section>

      {/* ---------- The real curriculum ---------- */}
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

      {/* ---------- Topics ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn in mental maths classes?"
            lead="Topics are introduced gradually and revisited, so earlier work keeps being practised as new ideas are added."
          />
          <div className="grid-3">
            {TOPICS.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Learning stages ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Learning stages"
            title="How the learning is sequenced"
            lead="Four stages showing the shape of the journey. Your child’s actual starting point and pace are set after we see where they are — the four levels above are what the batches run to."
          />
          <NumberedRows items={STAGES} badge="Stage" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Suggested age groups"
            title="Mental maths by age group"
            lead="Suggested groupings, not fixed batches. Learning adapts to the child’s current level, so a younger child who is ready can start earlier and an older beginner still starts from the basics."
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
            Not sure where your child fits? That is what the free trial is for — we look at what your
            child is already comfortable with and suggest a sensible starting point.
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
            title="Skills children build through mental maths"
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

      {/* ---------- How classes work ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The teaching method"
            title="How mental maths classes work"
            lead="The same five steps are used for every new strategy, so children always know what is coming next."
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
            title="What a mental maths class looks like"
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

      {/* ---------- Activities ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practice"
            title="Practical mental maths activities for kids"
            lead="Examples of the kinds of activity used to keep practice varied. Children who enjoy the practice do more of it, and doing more of it is what makes the strategies stick."
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

      {/* ---------- Why us ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="Why choose Brolly Juniors for mental maths?"
            lead="Brolly Juniors is a children’s learning centre at Nizampet X Roads, Hyderabad. Mental maths sits alongside our abacus, Vedic maths, chess, coding, robotics and AI programmes."
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
        </div>
      </section>

      {/* ---------- Mental maths or Vedic maths ---------- */}
      <section className="band-soft" id="vs-vedic">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Common question</span>
            <h2>Mental maths or Vedic maths — which should my child do?</h2>
            <p>
              Parents ask this often, so it is worth answering plainly. Mental maths is the broader
              skill: calculating in the head using flexible strategies that work on almost any sum.
              Vedic maths is a specific set of shortcut techniques, each suited to a particular kind of
              problem.
            </p>
            <p>
              Most children benefit from mental maths first. Once a child can hold a calculation in
              mind and choose between a few approaches, the Vedic shortcuts land much better — they
              become a faster route on ground the child already understands, rather than another rule
              to memorise.
            </p>
            <p>
              If your child is already comfortable calculating mentally, they may be ready to start
              with <Link to="/junior-skills/vedic-maths">Vedic maths</Link> instead. We will suggest
              which fits after the trial.
            </p>
          </div>
          <div className="panel">
            <h2>The short version</h2>
            <ul className="pill-row">
              <li>Mental maths — general strategies, works on any sum, good starting point</li>
              <li>Vedic maths — specific shortcuts for specific patterns, builds on mental fluency</li>
              <li>Abacus — visualisation-based calculation, usually started young</li>
            </ul>
            <p className="note-line">
              Not sure which suits your child? Book a trial and we will recommend one honestly,
              including saying if now is not the right time.
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
              <h3>Mental maths fees</h3>
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
            <h2>Book a free mental maths trial for your child</h2>
            <p>
              Let your child try the approach through simple, practical activities. The trial is a real
              session, not a sales meeting — your child works through an actual strategy, and you see
              how they respond to it.
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
            <TrialForm program="Mental Maths" compact />
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
            title="Parent guide: how to help your child practise at home"
            lead="Seven things that make a real difference between sessions, none of which require you to be good at maths yourself."
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
            <h2>Mental maths classes for kids in Hyderabad</h2>
            <p>
              Brolly Juniors runs its mental maths classes from a learning centre built around children
              rather than adult training. The room, the pace and the materials are all set up for young
              learners.
            </p>
            <p>
              Parents across Hyderabad come to this for different reasons. Some have a child who can do
              the written method but stalls the moment the paper is taken away. Some want a younger
              child to build number confidence before school maths gets harder. Both work here, because
              children start from where they actually are rather than from a fixed syllabus point.
            </p>
            <p>
              If you want to see the approach before committing, the free trial is the simplest way.
              Your child tries a strategy, you watch how they take to it, and we talk about a sensible
              starting point.
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

      {/* ---------- Near me ---------- */}
      <section className="section-tight">
        <div className="container center">
          <SectionHead
            title="Looking for mental maths classes near you?"
            lead="You are probably weighing two things: whether the centre is close enough to reach on a school night, and whether the teaching will suit your child. We are at Nizampet X Roads — and the second question is best answered by seeing a session rather than reading about one."
          />
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Mental maths pairs naturally with several others. Vedic maths and abacus reinforce the same number skills; chess and coding build the reasoning side."
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

      <FaqList items={FAQS} title="Mental maths classes: frequently asked questions" />

      {/* ---------- Quick answers ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="Mental maths for kids: quick answers"
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
