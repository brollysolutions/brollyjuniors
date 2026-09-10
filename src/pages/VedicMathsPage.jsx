import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
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
import { TrickCard, ChallengeQuiz, NumberedRows } from '../components/ProgramBits.jsx';

/* The Vedic maths programme page.
 *
 * Ported from the standalone vedic-maths-classes-for-kids build, which was
 * written from the same template as the brain games file — same worked-example
 * hero, same five-question challenge, same numbered stage rows. Those three
 * live in components/ProgramBits.jsx and are shared with that page rather than
 * copied. The source's own header, footer and type scale did not come across:
 * everything here inherits the site type roles from global.css.
 *
 * Two things are handled rather than transcribed:
 *
 *   - The source's four "suggested learning stages" carried its own note saying
 *     they are not published Brolly Juniors level names. The real structure is
 *     the twelve-week curriculum in data/infoPages.js, so that renders as the
 *     curriculum and the four stages follow as how the learning is sequenced.
 *     Neither is presented as the other.
 *   - Its "contact us" answers on timings, fees and learning modes stay, since
 *     those genuinely are not published. Its hardcoded phone number does not:
 *     contact details come from data/site.js so this page cannot drift from the
 *     rest of the site.
 */

const TRICK_STEPS = [
  <>
    The number ends in 5, so the answer will always end in <strong>25</strong>.
  </>,
  <>
    Take the first digit, <strong>3</strong>. Multiply it by the next number up, <strong>4</strong>.
  </>,
  <>
    3 × 4 = <strong>12</strong>. Write it in front of the 25.
  </>,
  <>
    The answer is <strong>1225</strong> — no long multiplication needed.
  </>,
];

const CHALLENGES = [
  {
    q: '35 × 35',
    hint: 'Ends in 5 — try 3 × 4, then 25.',
    opts: ['1025', '1225', '1215', '1250'],
    a: '1225',
    why: '3 × 4 = 12, then add 25 on the end.',
  },
  {
    q: '53 × 11',
    hint: 'Split the digits and drop their sum in the middle.',
    opts: ['538', '583', '593', '5113'],
    a: '583',
    why: '5, then 5 + 3 = 8, then 3.',
  },
  {
    q: '1000 − 638',
    hint: 'Take each digit from 9, and the last from 10.',
    opts: ['372', '362', '462', '368'],
    a: '362',
    why: '9−6 = 3, 9−3 = 6, 10−8 = 2.',
  },
  {
    q: '68 + 29',
    hint: 'Add 30, then take one back.',
    opts: ['87', '96', '97', '98'],
    a: '97',
    why: '68 + 30 = 98, then −1 = 97.',
  },
  {
    q: '24 × 25',
    hint: 'Halve one number and double the other.',
    opts: ['500', '550', '600', '625'],
    a: '600',
    why: '12 × 50 = 600.',
  },
];

const TRUST = [
  { title: 'Maths confidence', text: 'Children get a method they understand, so numbers feel less intimidating.' },
  { title: 'Faster calculation', text: 'Short techniques replace long written working on routine sums.' },
  { title: 'Mental maths skills', text: 'Steps are simple enough for children to hold and finish in their head.' },
  { title: 'Problem solving', text: 'Children learn to pick a method, not just follow one fixed rule.' },
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Most sums have more than one route to the answer. Vedic maths gives children the shorter route — a pattern they can spot and apply — so fewer steps are written down and more of the work happens in the head.',
  },
  {
    tag: 'Easy example',
    text: 'To work out 47 + 38, a child can add 40 to get 87, then take away the extra 2 to reach 85. Same answer, fewer steps, and it can be done without a pen.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Each idea is introduced one at a time, demonstrated, and practised with guidance before a child tries it alone. Book a free trial to see how your child responds to the approach.',
  },
];

const WHAT_IT_IS = [
  'A set of shortcut techniques for everyday calculations',
  'A way to build number sense and mental calculation',
  'Structured practice that starts from number basics',
  'A support for the maths children already do at school',
];

const WHAT_IT_IS_NOT = [
  'Not a replacement for the method your child’s school teaches',
  'Not a shortcut around understanding — the idea comes first',
  'Not a guarantee of exam marks or a fixed calculation speed',
  'Not something a child masters in a few sessions',
];

const WHY_LEARN = [
  {
    title: 'Number confidence',
    text: 'Many children who dislike maths are not weak at it — they are unsure. Having a reliable method to fall back on removes a lot of that hesitation, and confident children attempt more questions.',
  },
  {
    title: 'More than one route to an answer',
    text: 'Once a child knows two ways to solve 24 × 25, they stop treating maths as a single set of rules to be remembered and start treating it as something they can think their way through.',
  },
  {
    title: 'Genuine mental maths practice',
    text: 'Vedic techniques are short enough to hold in the head. That makes mental calculation realistic for a child rather than something they are simply told to do.',
  },
  {
    title: 'Faster thinking on routine work',
    text: 'Everyday arithmetic takes less time, which frees attention for the part of a question that actually needs thinking — understanding what is being asked.',
  },
  {
    title: 'Focus and accuracy',
    text: 'Each technique has a fixed order of steps. Following that order carefully, again and again, is good training in attention to detail.',
  },
  {
    title: 'A habit of checking',
    text: 'Because a second method is available, children can verify their own answers instead of waiting to be told whether they were right.',
  },
];

const BUILDS = [
  { icon: '⭐', title: 'Maths confidence', text: 'A method your child understands makes the subject feel approachable instead of intimidating.' },
  { icon: '🧠', title: 'Mental calculation', text: 'Short techniques practised until the working can be completed without writing it down.' },
  { icon: '🔢', title: 'Number sense', text: 'Children start to see how numbers relate — that 98 is just 2 away from 100, and why that helps.' },
  { icon: '🧩', title: 'Problem solving', text: 'Choosing the right technique for a given sum is itself a decision, and children learn to make it.' },
  { icon: '👁️', title: 'Focus', text: 'Following a fixed sequence of steps accurately builds sustained attention on a task.' },
  { icon: '✅', title: 'Accuracy', text: 'Fewer written steps means fewer places for a careless error to creep in.' },
  { icon: '⚡', title: 'Speed practice', text: 'Timed challenges give children a friendly way to see their own progress week to week.' },
  { icon: '🔎', title: 'Logical thinking', text: 'Understanding why a shortcut works is more valuable than memorising the shortcut itself.' },
];

const TOPICS = [
  {
    title: 'Number operations',
    text: 'Place value, number relationships and how numbers sit around friendly bases like 10, 100 and 1000 — the groundwork every later technique depends on.',
  },
  {
    title: 'Addition',
    text: 'Making tens and hundreds, adding in useful chunks, and adding a series of numbers without writing every intermediate total.',
  },
  {
    title: 'Subtraction',
    text: 'Subtracting from bases such as 100 and 1000, and handling borrowing without the confusion that usually comes with it.',
  },
  {
    title: 'Multiplication',
    text: 'Multiplying by 11, squaring numbers ending in 5, multiplying numbers close to a base, and doubling-and-halving to simplify a sum.',
  },
  {
    title: 'Division',
    text: 'Dividing by simple factors, using halving and doubling, and checking a division by working backwards through multiplication.',
  },
  {
    title: 'Mental calculation',
    text: 'Practice at holding two or three steps in the head and finishing the sum without paper — built up gradually, never rushed.',
  },
  {
    title: 'Number patterns',
    text: 'Spotting the repeating structures behind the techniques, which is what turns a memorised trick into real understanding.',
  },
  {
    title: 'Calculation strategies',
    text: 'Looking at a sum and deciding which approach fits it best, rather than applying the same method to everything.',
  },
  {
    title: 'Problem-solving activities',
    text: 'Puzzles, word problems and challenges that ask children to apply what they have learned in a less predictable setting.',
  },
];

const STAGES = [
  {
    title: 'Number basics',
    text: 'Before any shortcut makes sense, a child needs to be comfortable with what numbers are made of. This stage builds place value, number recognition and the idea that numbers can be broken apart and put back together.',
    example: 'Splitting 47 into 40 and 7, then adding each part separately.',
    skill: 'Number sense and place-value confidence.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Calculation techniques',
    text: 'The first real shortcuts arrive here. Children learn addition and subtraction methods built around friendly bases, plus early multiplication techniques such as multiplying by 11.',
    example: 'Subtracting 472 from 1000 digit by digit, without borrowing.',
    skill: 'Applying a fixed method accurately and in order.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Mental maths practice',
    text: 'Techniques already learned move off the page and into the head. The focus shifts from getting the answer to getting it without writing the working down, with short timed practice to build fluency.',
    example: 'A two-minute mental challenge using squares of numbers ending in 5.',
    skill: 'Working memory, focus and mental calculation.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Advanced calculation practice',
    text: 'Larger numbers, multi-step problems, and situations where the child must choose the method rather than being told which one to use. Checking and verifying answers becomes part of the routine.',
    example: 'Solving 98 × 97 using the base-100 method, then checking it another way.',
    skill: 'Strategy selection, logical thinking and self-checking.',
    skillLabel: 'Skill developed',
  },
];

const AGE_BANDS = [
  {
    title: 'Ages 7–9',
    kv: 'Number awareness & basics',
    text: 'The focus is getting comfortable with numbers rather than speed. Counting, place value, simple addition and subtraction, and number games that make patterns visible.',
  },
  {
    title: 'Ages 9–11',
    kv: 'Mental maths & calculation practice',
    text: 'Children secure with basic operations begin the shortcut techniques properly — multiplication patterns, subtraction from bases, and steady practice at working mentally.',
  },
  {
    title: 'Ages 11–13',
    kv: 'Advanced calculation & problem solving',
    text: 'Larger numbers, multi-step problems and strategy choice. Children decide which method suits a sum, apply it, and check the result using a second approach.',
  },
];

const SKILLS = [
  { title: 'Number sense', text: 'Knowing how numbers relate to each other — that 97 is close to 100, and that this makes it easier to work with.' },
  { title: 'Mental maths', text: 'Doing the working in the head instead of on paper, because the steps are short enough to remember.' },
  { title: 'Calculation', text: 'Carrying out addition, subtraction, multiplication and division reliably, using a method that suits the sum.' },
  { title: 'Focus', text: 'Staying with a task from the first step to the last without losing the thread halfway through.' },
  { title: 'Accuracy', text: 'Getting the right answer consistently, and noticing when something has gone wrong.' },
  { title: 'Problem solving', text: 'Reading a question, deciding what it is asking, and choosing an approach before starting to calculate.' },
  { title: 'Logical thinking', text: 'Understanding why a method works, so it can be applied to a new sum rather than only a familiar one.' },
  { title: 'Maths confidence', text: 'Being willing to attempt a question instead of waiting to be shown — usually the change parents notice first.' },
];

const TECHNIQUES = [
  {
    title: 'Squaring a number that ends in 5',
    sum: '35 × 35',
    working: '3 × 4 = 12, then add 25',
    result: '1225',
    text: 'Multiply the first digit by the next number up, then write 25 after it. It works for 15, 25, 45, 75 — any number ending in 5.',
  },
  {
    title: 'Adding by making a round number',
    sum: '47 + 38',
    working: '47 + 40 = 87, then −2',
    result: '85',
    text: 'Round the second number up to something friendly, add it, then take back the extra. Two easy steps replace one awkward one.',
  },
  {
    title: 'Multiplying by 11',
    sum: '32 × 11',
    working: '3, then 3+2=5, then 2',
    result: '352',
    text: 'Split the digits apart and drop their sum in the middle. Children usually learn this one fastest, which makes it a good confidence-builder.',
  },
  {
    title: 'Subtracting from 100 or 1000',
    sum: '1000 − 472',
    working: '9−4, 9−7, 10−2',
    result: '528',
    text: 'Take each digit from 9, and the last one from 10. No borrowing, no crossing out — which removes the step children most often get wrong.',
  },
  {
    title: 'Multiplying numbers near 100',
    sum: '98 × 97',
    working: '98−3 = 95, then 2×3 = 06',
    result: '9506',
    text: 'Both numbers sit close to 100. Work with how far each one is from 100 instead of with the numbers themselves, and the sum becomes small.',
  },
  {
    title: 'Doubling and halving',
    sum: '16 × 25',
    working: '8 × 50, then 4 × 100',
    result: '400',
    text: 'Halve one number and double the other — the answer stays the same. Repeat until the sum is one a child can do instantly.',
  },
];

const METHOD_STEPS = [
  { title: 'Learn the idea', text: 'The technique is explained in plain language, with the reason it works made clear from the start.' },
  { title: 'See a simple example', text: 'One worked example is shown slowly, step by step, using small and friendly numbers.' },
  { title: 'Practise with guidance', text: 'Children try similar sums while support is available, so mistakes get corrected as they happen.' },
  { title: 'Try independently', text: 'Practice without prompts — this is where a child finds out what they have genuinely absorbed.' },
  { title: 'Review and improve', text: 'Answers are checked together, sticking points are revisited, and the technique returns in later sessions.' },
];

const SESSION_FLOW = [
  { title: 'Welcome', text: 'A short warm-up that revisits what was covered last time.' },
  { title: 'Maths concept', text: 'The new idea is introduced, with the reasoning behind it explained.' },
  { title: 'Educator demonstration', text: 'A worked example on the board, taken slowly with questions invited.' },
  { title: 'Guided practice', text: 'Children work through sums together while support is close at hand.' },
  { title: 'Maths activity', text: 'A game, puzzle or challenge that uses the day’s technique in a different setting.' },
  { title: 'Review', text: 'A quick recap of what was learned and what to practise before the next session.' },
];

const ACTIVITIES = [
  { icon: '🧩', title: 'Number puzzles', text: 'Missing-digit and pattern puzzles that ask children to think backwards from an answer to the working.' },
  { icon: '⏱️', title: 'Calculation challenges', text: 'Short sets of sums against a gentle timer, so children can watch their own fluency build.' },
  { icon: '🎲', title: 'Mental maths games', text: 'Paired and group games where the answer has to be worked out in the head, not written down.' },
  { icon: '🔷', title: 'Pattern activities', text: 'Spotting the repeating structure behind a technique, which turns a trick into understanding.' },
  { icon: '⚡', title: 'Quick-answer rounds', text: 'Rapid-fire questions on already-familiar techniques, used as a warm-up rather than a test.' },
  { icon: '💭', title: 'Problem-solving tasks', text: 'Word problems and real-life situations where the child has to work out which method applies.' },
];

const WHY_US = [
  { icon: '🎯', title: 'Built for children, not adults', text: 'Everything is pitched at how children actually learn — short explanations, plenty of examples, and practice broken into pieces that hold attention.' },
  { icon: '✋', title: 'Learning through activity', text: 'Techniques are practised through games, puzzles and challenges rather than through worksheets alone.' },
  { icon: '💬', title: 'Simple explanations first', text: 'Every method is explained in language a child can repeat back. If they cannot explain it, they have not learned it yet.' },
  { icon: '🪜', title: 'Structured, sequenced learning', text: 'Topics build on each other in a deliberate order, and earlier work keeps being revisited as new material is added.' },
  { icon: '❤️', title: 'Parent-friendly approach', text: 'We tell you what your child is working on and what would help at home, in plain terms and without jargon.' },
  { icon: '🌱', title: 'Confidence over pressure', text: 'The aim is a child willing to attempt a question. Speed comes later, and only from practice a child enjoys.' },
];

const DEMO_INCLUDES = [
  'Your child works through an actual Vedic maths technique',
  'We look at what they are already comfortable with',
  'You get a suggested starting point for your child',
  'Timings, learning modes and fees are explained clearly',
  'No obligation to enrol afterwards',
];

const PARENT_SUPPORT = [
  { title: 'What your child is learning', text: 'Which techniques have been introduced, and roughly where your child is in the sequence.' },
  { title: 'Which skills are being practised', text: 'Whether the current focus is understanding a new method, building accuracy, or working mentally.' },
  { title: 'Where more practice would help', text: 'The specific step your child hesitates on — usually something small and easily fixed at home.' },
  { title: 'How to support at home', text: 'Simple, short things you can do between sessions that reinforce rather than repeat the class.' },
];

const HOME_GUIDE = [
  { title: 'Keep practice short', text: 'Five or ten minutes on most days beats an hour on Sunday. Short sessions stay enjoyable, and enjoyable practice is the kind that continues.' },
  { title: 'Ask them to explain', text: '“How did you get that?” is the single most useful question. Explaining out loud shows whether the method is understood or only copied.' },
  { title: 'Use number games', text: 'Card games, dice, shopping totals, cricket scores — anything where numbers come up naturally counts as practice.' },
  { title: 'Take the pressure off', text: 'Timing every attempt makes children anxious rather than fast. Accuracy first; speed follows on its own once a method is familiar.' },
  { title: 'Praise the effort', text: 'Notice the attempt, the persistence and the checking — not just the correct answer. That is what keeps a child trying the next question.' },
  { title: 'Let mistakes be normal', text: 'A wrong answer is information about which step needs attention. Treating it that way keeps children willing to try in front of you.' },
];

const FAQS = [
  {
    q: 'What is Vedic maths for kids?',
    a: 'A way of learning calculation using short, pattern-based techniques instead of only long written steps. Children learn simple methods for addition, subtraction, multiplication and division, then practise them until the working can be done mentally.',
  },
  {
    q: 'Why should children learn Vedic maths?',
    a: 'It gives children a structured way to work with numbers: better number sense, more than one route to an answer, and enough confidence to attempt a question rather than wait to be shown.',
  },
  {
    q: 'What age can kids start Vedic maths?',
    a: 'The Brolly Juniors programme runs from ages 7 to 13. Children are ready once they are comfortable with number recognition, counting and simple addition — the starting point is set from what a child can already do rather than age alone.',
  },
  {
    q: 'What do children learn in Vedic maths classes?',
    a: 'Number operations, addition and subtraction strategies, multiplication and division techniques, number patterns, mental calculation and problem-solving activities. Topics are introduced gradually and revisited through practice.',
  },
  {
    q: 'Is Vedic maths suitable for beginners?',
    a: 'Yes. It starts from number basics, so no prior training is needed. Beginners work on simple operations and move to shortcut techniques only once the underlying idea is clear.',
  },
  {
    q: 'Can Vedic maths improve calculation skills?',
    a: 'It gives children specific strategies and structured practice. How much a child improves depends on how regularly they practise, so we focus on consistent practice rather than promising a fixed result.',
  },
  {
    q: 'Does Vedic maths help with mental maths?',
    a: 'Yes. Most techniques reduce a long calculation to two or three short steps, which makes the working easier to hold in the head. Mental calculation is practised directly in class rather than left to happen on its own.',
  },
  {
    q: 'Is Vedic maths useful for school students?',
    a: 'It can be. The techniques work alongside the school method rather than replacing it, and children often use them to check answers or work faster on routine arithmetic. School work should continue to follow the method the school teaches.',
  },
  {
    q: 'How are Vedic maths classes taught at Brolly Juniors?',
    a: 'Each idea is introduced with a simple explanation, shown through a worked example, practised with guidance, and then tried independently. Classes use activities, number games and practice sheets so children stay involved.',
  },
  {
    q: 'How long is the programme?',
    a: 'Twelve weeks, grouped into four blocks of three: complements and fast addition, multiplication patterns, squares and cubes and division, then speed, accuracy and application.',
  },
  {
    q: 'Do children need to know their tables before starting?',
    a: 'Not fully. A child who already knows their tables will move faster, but one still learning them can start and build table knowledge alongside the techniques.',
  },
  {
    q: 'How much practice does a child need at home?',
    a: 'Short and regular beats long and occasional. A few minutes on most days is usually enough to keep the techniques fresh between classes.',
  },
  {
    q: 'What skills can children develop through Vedic maths?',
    a: 'Number sense, mental calculation, accuracy, focus, logical thinking and problem solving — plus the habit of checking their own work, which is useful well beyond maths.',
  },
  {
    q: 'How much do Vedic maths classes cost in Hyderabad?',
    a: 'Fees depend on the batch and the duration enrolled for, so we share them directly rather than publishing a number that goes stale. Nothing is payable before the free trial.',
  },
  {
    q: 'Are Vedic maths classes available near me?',
    a: 'The Brolly Juniors centre is at Nizampet X Roads, Hyderabad. Tell us your area and preferred timing and we will confirm which batch is currently open.',
  },
  {
    q: 'How do I book a free Vedic maths trial?',
    a: 'Use the form on this page, call us, or message us on WhatsApp. Share your child’s age and current comfort with maths so the trial can be pitched at the right level.',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What is Vedic maths for kids?',
    a: 'A set of short calculation techniques based on number patterns. Instead of writing out every step, children spot the shape of a sum and use a quicker route to the same answer, then practise until they can do it mentally.',
  },
  {
    q: 'Why is it useful for children?',
    a: 'It gives children a second way to reach an answer, which builds number sense and confidence. Routine arithmetic takes less effort, leaving more attention for understanding what a question is asking.',
  },
  {
    q: 'What do kids learn in the classes?',
    a: 'Number operations, addition and subtraction techniques, multiplication and division methods, number patterns, mental calculation and problem-solving activities.',
  },
  {
    q: 'At what age can children start?',
    a: 'The programme runs ages 7 to 13. Children are ready once they recognise numbers and can handle simple addition — the starting level comes from what they can already do.',
  },
  {
    q: 'Does it help with mental calculation?',
    a: 'Yes. Most techniques reduce a calculation to two or three short steps, which is little enough for a child to hold in their head, and this is practised directly in class.',
  },
  {
    q: 'Where can I find Vedic maths classes in Hyderabad?',
    a: 'At the Brolly Juniors centre at Nizampet X Roads. Book a free trial through the form on this page.',
  },
];

const RELATED = [
  { icon: '🧮', title: 'Abacus', text: 'Bead-based calculation that builds visualisation, memory and concentration — the closest companion to this programme.', to: '/junior-skills/abacus' },
  { icon: '🔢', title: 'Mental maths', text: 'Number fluency and flexible strategies without the bead frame.', to: '/programs/mental-maths' },
  { icon: '🧩', title: 'Brain games', text: 'Broader thinking practice — memory, logic, patterns and strategy in short bursts.', to: '/programs/brain-games' },
  { icon: '♟️', title: 'Chess', text: 'Planning, patience and the tolerance to sit with a hard position.', to: '/programs/chess' },
  { icon: '💻', title: 'Coding', text: 'Logical sequencing and step-by-step problem solving on a screen.', to: '/programs/coding' },
  { icon: '📚', title: 'School tuitions', text: 'Academic support alongside the skill programmes.', to: '/tuitions' },
];

export default function VedicMathsPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Vedic maths classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children learn simple, structured ways to work with numbers. Each technique is
                explained in plain language, shown through an example, and then practised through
                age-appropriate activities until your child can do the working in their head.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#techniques" className="btn btn-outline">
                  See the techniques
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Understanding before speed
                </li>
                <li>
                  <span className="tick">★</span> Activity-based learning
                </li>
              </ul>
            </div>
            <TrickCard
              label="A Vedic maths technique, step by step"
              sum="35 × 35  ="
              answer="1225"
              steps={TRICK_STEPS}
              note="This is the kind of method children practise in class."
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

      {/* ---------- What is Vedic maths ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is Vedic maths?"
            lead="A short, plain-English explanation you can share with your child."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Vedic maths is a collection of calculation methods that work by spotting patterns in
                numbers. Instead of writing out every step of a long sum, a child learns to recognise
                the shape of the problem and use a shorter route to the answer.
              </p>
              <p>
                The methods are not a different kind of maths. They give the same answers as the method
                taught in school — they simply reach those answers with fewer steps. That matters for
                children, because fewer steps means less to write, less to lose track of, and less
                chance of a careless slip.
              </p>
              <p>
                Children usually find the techniques interesting because each one feels like a small
                discovery. Once a child sees that every number ending in 5 has a square ending in 25,
                or that subtracting from 1000 can be done digit by digit, numbers start to look like
                puzzles rather than chores.
              </p>
              <p>
                Confidence follows practice. A child who has used a technique twenty times will reach
                for it without hesitation, and that ease is usually what parents notice first.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What Vedic maths is</h2>
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
            title="Why should kids learn Vedic maths?"
            lead="The honest answer: it does not do the learning for your child, but it gives them better tools and more reasons to keep practising."
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
            title="What regular Vedic maths practice builds"
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

      {/* ---------- Techniques ---------- */}
      <section className="band-soft" id="techniques">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="Vedic maths techniques, explained simply"
            lead="Vedic maths is not one single trick. It is a set of strategies, each suited to a particular shape of problem. Six examples, shown the way they would be introduced in class."
          />
          <div className="grid-3">
            {TECHNIQUES.map((t) => (
              <div className="prog-tech" key={t.title}>
                <div className="prog-tech-top">{t.title}</div>
                <div className="prog-tech-body">
                  {/* Equation first, method under it. Inline, the longer
                      working strings pushed the answer onto a second line on
                      some cards and not others, so the six read as six
                      different shapes. */}
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
            Understanding comes before speed. A child is asked to explain why a technique works before
            being asked to use it quickly — a shortcut that is only memorised tends to be forgotten;
            one that is understood gets reused.
          </p>
        </div>
      </section>

      {/* ---------- Try it ---------- */}
      <section id="challenge">
        <div className="container center">
          <SectionHead
            eyebrow="Try it together"
            title="Try a quick maths challenge"
            lead="Five questions using the techniques above. Sit with your child and see how they get on — there is no score to worry about."
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
            title="What will kids learn in Vedic maths classes?"
            lead="Topics are introduced gradually and revisited, so earlier work keeps getting practised as new ideas are added."
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
            lead="Four stages showing the shape of the journey. Your child’s actual starting point and pace are set after we see where they are — the twelve-week structure above is what the batches run to."
          />
          <NumberedRows items={STAGES} badge="Stage" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Suggested age groups"
            title="Vedic maths by age group"
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
            title="Skills children build through Vedic maths"
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
            title="How Vedic maths classes work"
            lead="The same five steps are used for every new technique, so children always know what is coming next."
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
            title="What a Vedic maths class looks like"
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
            title="Practical maths activities for kids"
            lead="Examples of the kinds of activity used to keep practice varied. Children who enjoy the practice do more of it, and doing more of it is what makes the techniques stick."
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
            title="Why choose Brolly Juniors for Vedic maths?"
            lead="Brolly Juniors is a children’s learning centre at Nizampet X Roads, Hyderabad. Vedic maths sits alongside our abacus, mental maths, chess, coding, robotics and AI programmes."
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
              Children get guided support to understand each concept and practise it step by step.
              Explanations are given at the child&rsquo;s pace, mistakes are corrected as they happen,
              and no child is expected to keep up with a fixed speed.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section className="band-soft">
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
              <h3>Vedic maths fees</h3>
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
      <section id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free Vedic maths trial for your child</h2>
            <p>
              Let your child try the approach through simple, practical activities. The trial is a real
              session, not a sales meeting — your child works through an actual technique, and you see
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
            <TrialForm program="Vedic Maths" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section className="band-soft">
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
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical tips"
            title="Parent guide: how to help your child enjoy maths"
            lead="Six things that make a real difference between sessions, none of which require you to be good at maths yourself."
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
      <section className="band-soft">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad</span>
            <h2>Vedic maths classes for kids in Hyderabad</h2>
            <p>
              Brolly Juniors runs its Vedic maths classes from a learning centre built around children
              rather than adult training. The room, the pace and the materials are all set up for young
              learners.
            </p>
            <p>
              Parents across Hyderabad come to this for different reasons. Some want a child who
              freezes at mental sums to feel steadier. Some have a child who finds school maths easy
              and needs something more interesting to chew on. Both work here, because children start
              from where they actually are rather than from a fixed syllabus point.
            </p>
            <p>
              If you want to see the approach before committing, the free trial is the simplest way.
              Your child tries a technique, you watch how they take to it, and we talk about a sensible
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
            title="Looking for Vedic maths classes near you?"
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
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Vedic maths pairs naturally with several others. Abacus and mental maths reinforce the same number skills; chess and coding build the reasoning side."
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

      <FaqList items={FAQS} title="Vedic maths classes: frequently asked questions" />

      {/* ---------- Quick answers ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={FAQS}
        title="Vedic maths for kids: quick answers"
        lead="Short, direct answers to the questions parents ask most."
      />

      <CtaBand variant={page.cta} />
    </>
  );
}
