import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import { publishedLocations, locationPath } from '../data/locations.js';
import {
  SectionHead,
  QuickAnswer,
  Curriculum,
  Pillars,
  FaqList,
  QuickAnswers,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { NumberedRows, PickSteps, TrickCard } from '../components/ProgramBits.jsx';

/* The phonics programme page.
 *
 * Ported from the standalone phonics-classes-for-kids-in-hyderabad build. The
 * route, the SEO record, the six-level curriculum and the FAQ set stay in
 * data/infoPages.js and data/site.js; this component supplies the body.
 *
 * Two of the source's claims are kept exactly as it wrote them, because they
 * are the most useful things on the page: that phonics is one part of learning
 * to read rather than the whole of it, and that a learning centre does not
 * assess or treat a reading difficulty. Both are places where this industry
 * routinely overclaims, and a parent reading carefully deserves to find them.
 *
 * The source's letter-sound explorer and word builder become the shared
 * PickSteps and TrickCard: pick a letter and see the sound, the example and the
 * mistake to avoid; or watch three sounds blend into a word one step at a time.
 */

const BLEND_STEPS = [
  <>
    Every letter has a sound. <strong>C</strong> says <strong>/k/</strong>.
  </>,
  <>
    <strong>A</strong> says <strong>/æ/</strong> — the short sound in <em>apple</em>.
  </>,
  <>
    <strong>T</strong> says <strong>/t/</strong>. Now say all three, one after the other.
  </>,
  <>
    Push them together: /k/ + /æ/ + /t/ = <strong>CAT</strong>. Your child has read a word.
  </>,
];

/* Twelve sounds, in the order they are usually introduced rather than
   alphabetically — enough to build real words early, which is the whole point
   of teaching them in this order. */
const SOUNDS = [
  { key: 'a', label: 'A', rule: 'A says /æ/', steps: ['/æ/', 'as in apple', 'Say it short and quick, not “ay”.'] },
  { key: 'b', label: 'B', rule: 'B says /b/', steps: ['/b/', 'as in ball', 'Lips together, then a small pop. No “uh” after it.'] },
  { key: 'c', label: 'C', rule: 'C says /k/', steps: ['/k/', 'as in cat', 'The same sound as k in most early words.'] },
  { key: 'd', label: 'D', rule: 'D says /d/', steps: ['/d/', 'as in dog', 'Tongue behind the top teeth, then release.'] },
  { key: 'e', label: 'E', rule: 'E says /e/', steps: ['/e/', 'as in egg', 'Short and open. Easy to confuse with i.'] },
  { key: 'f', label: 'F', rule: 'F says /f/', steps: ['/f/', 'as in fish', 'A long sound you can hold: ffff.'] },
  { key: 'g', label: 'G', rule: 'G says /ɡ/', steps: ['/ɡ/', 'as in goat', 'The hard g, as in goat rather than giant.'] },
  { key: 'h', label: 'H', rule: 'H says /h/', steps: ['/h/', 'as in hat', 'Just a puff of breath, no voice.'] },
  { key: 'i', label: 'I', rule: 'I says /ɪ/', steps: ['/ɪ/', 'as in ink', 'Short and clipped, not “eye”.'] },
  { key: 'm', label: 'M', rule: 'M says /m/', steps: ['/m/', 'as in moon', 'Lips closed, hum it: mmmm.'] },
  { key: 's', label: 'S', rule: 'S says /s/', steps: ['/s/', 'as in sun', 'A long hissing sound: ssss.'] },
  { key: 't', label: 'T', rule: 'T says /t/', steps: ['/t/', 'as in tap', 'Sharp and short. No “uh” on the end.'] },
];

const SOUND_STEPS = ['Says', 'As in', 'Watch out for'];

const TRUST = [
  { title: 'Letter sounds', text: 'Every letter learned with the sound it makes, not just its name.' },
  { title: 'Sound blending', text: 'Pushing sounds together into a whole word — where reading starts.' },
  { title: 'Word reading', text: 'Working out an unfamiliar word instead of guessing at it.' },
  { title: 'Spelling practice', text: 'Hearing a word, breaking it into sounds, writing each one down.' },
  { title: 'Early reading', text: 'Sight words, simple sentences and short stories read alone.' },
];

const GIVES = [
  'A method for reading an unfamiliar word',
  'A way to attempt spelling without being told',
  'Clearer pronunciation, because sounds are said aloud',
  'Early independence with simple books',
];

const WILL_NOT_CLAIM = [
  'That phonics guarantees reading success or fluency',
  'That progress follows a fixed timeline',
  'That it assesses or treats a reading difficulty — that is a conversation for a specialist, not a learning centre',
  'That phonics alone teaches a child to read',
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Reading is a code. Letters stand for sounds, and sounds join together to make words. Phonics teaches a child to crack that code, so they can work out a word they have never seen instead of guessing from the picture.',
  },
  {
    tag: 'Easy example',
    text: 'C says /k/. A says /æ/. T says /t/. Say them one after another and speed up: /k/ … /æ/ … /t/ … CAT. That is blending, and it is the whole idea in one word.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'Sounds are introduced a few at a time, in a deliberate order, so children start building real words early rather than waiting until they know all 26 letters.',
  },
];

const WHY_LEARN = [
  { title: 'Letter-sound recognition', text: 'Knowing instantly what sound a letter makes, which is the foundation everything else rests on.' },
  { title: 'Word decoding', text: 'Breaking an unfamiliar word into its sounds and working it out, rather than waiting to be told.' },
  { title: 'Reading', text: 'Regular practice turns slow sound-by-sound decoding into smooth reading over a few months.' },
  { title: 'Spelling', text: 'Spelling is blending in reverse. A child who can hear the sounds in a word can attempt to write it.' },
  { title: 'Pronunciation', text: 'Because every sound is said out loud, children get used to saying them clearly and correctly.' },
  { title: 'Vocabulary', text: 'New words come with pictures and meanings, so children learn what the word means as well as how to read it.' },
  { title: 'Reading confidence', text: 'A child who has read a word by themselves will try the next one. That willingness matters more than speed.' },
  { title: 'Independence', text: 'Being able to open a simple book alone changes how a child feels about reading altogether.' },
  { title: 'A base for school', text: 'Classroom reading assumes some decoding ability. Practice here supports what school is already asking for.' },
];

const BUILDS = [
  { icon: '🔤', title: 'Letter-sound recognition', text: 'Knowing what sound each letter makes, quickly and without hesitating.' },
  { icon: '🔗', title: 'Sound blending', text: 'Pushing separate sounds together into a whole word — the step that unlocks reading.' },
  { icon: '📖', title: 'Early reading', text: 'Moving from single words to short sentences and simple stories read alone.' },
  { icon: '✍️', title: 'Spelling practice', text: 'Hearing a word, breaking it into sounds, and writing a letter for each one.' },
  { icon: '🧩', title: 'Word building', text: 'Making new words by swapping one sound, so CAT becomes MAT becomes MAP.' },
  { icon: '🔊', title: 'Pronunciation', text: 'Saying each sound clearly, including the ones children commonly muddle.' },
  { icon: '🗂️', title: 'Vocabulary building', text: 'Learning what a new word means, not only how to sound it out.' },
  { icon: '★', title: 'Reading confidence', text: 'Attempting an unfamiliar word instead of stopping and waiting for help.' },
];

const TOPICS = [
  'Alphabet recognition',
  'Letter sounds',
  'Vowel sounds',
  'Consonant sounds',
  'Sound matching',
  'Beginning sounds',
  'Ending sounds',
  'Sound blending',
  'Sound segmenting',
  'CVC words',
  'Simple word reading',
  'Spelling basics',
  'Sight words',
  'Vocabulary',
  'Simple sentences',
  'Reading practice',
];

const LEVELS = [
  {
    title: 'Letter & sound basics',
    text: 'Alphabet recognition, letter names, basic letter sounds, vowel awareness and sound matching. The starting point for every child, including those who do not yet know the alphabet.',
    example: 'Matching a letter card to the picture that starts with that sound.',
    skill: 'Letter recognition and sound awareness.',
  },
  {
    title: 'Sound practice',
    text: 'Beginning sounds, ending sounds, sound identification and simple word sounds. Most of this happens by ear before anything is written down.',
    example: '“Which of these three words starts with /s/?” — played as a game.',
    skill: 'Hearing individual sounds inside whole words.',
  },
  {
    title: 'Blending & reading',
    text: 'Sound blending, CVC words, simple word reading and word building. This is where the separate sounds finally become words a child can read alone.',
    example: 'Building CAT from letter cards, then swapping one letter to make MAT.',
    skill: 'Blending and decoding.',
  },
  {
    title: 'Early reading',
    text: 'Sight words, simple sentences, short stories, comprehension and spelling practice. Decoding becomes automatic and attention shifts to what the words mean.',
    example: 'Reading a four-page story alone, then answering two questions about it.',
    skill: 'Reading fluency and comprehension.',
  },
];

const AGE_BANDS = [
  {
    kv: 'Ages 4–5',
    title: 'Letters & first sounds',
    chips: ['Alphabet recognition', 'Letter sounds', 'Rhymes', 'Sound games', 'Picture matching'],
  },
  {
    kv: 'Ages 5–7',
    title: 'Blending & first words',
    chips: ['Phonics sounds', 'Blending', 'CVC words', 'Simple reading', 'Word building'],
  },
  {
    kv: 'Ages 7–9',
    title: 'Reading & spelling',
    chips: ['Reading practice', 'Spelling', 'Sight words', 'Sentences', 'Vocabulary'],
  },
  {
    kv: 'Ages 9+',
    title: 'Fluency & comprehension',
    chips: ['Reading fluency', 'Vocabulary', 'Spelling', 'Comprehension', 'Word patterns'],
  },
];

const READING_STAGES = [
  { title: 'Letter recognition', text: 'Naming any letter on sight.' },
  { title: 'Sound recognition', text: 'Knowing instantly what sound that letter makes.' },
  { title: 'Word decoding', text: 'Breaking a word into sounds and blending them back.' },
  { title: 'Word reading', text: 'Reading familiar words smoothly, without sounding out.' },
  { title: 'Sentence reading', text: 'Several words together, read as one idea.' },
  { title: 'Short story reading', text: 'A few pages read alone, then talked about.' },
];

const WORD_BUILDING = [
  { word: 'CAT', sounds: '/k/ + /æ/ + /t/', note: 'Three sounds, three letters, one word.' },
  { word: 'MAT', sounds: '/m/ + /æ/ + /t/', note: 'Change only the first sound and CAT becomes MAT.' },
  { word: 'SUN', sounds: '/s/ + /ʌ/ + /n/', note: 'A different vowel sound, same three-sound pattern.' },
];

const SPELLING_WORDS = [
  { word: 'cat', sounds: '/k/ /æ/ /t/' },
  { word: 'dog', sounds: '/d/ /ɒ/ /ɡ/' },
  { word: 'sun', sounds: '/s/ /ʌ/ /n/' },
  { word: 'pen', sounds: '/p/ /e/ /n/' },
  { word: 'map', sounds: '/m/ /æ/ /p/' },
];

const SESSION_FLOW = [
  { title: 'Sound warm-up', text: 'A quick run through sounds already known, so the session starts with success.' },
  { title: 'Letter sound practice', text: 'A new sound introduced with its letter and an example word, said aloud together.' },
  { title: 'Sound game', text: 'A listening game that uses the new sound without any reading yet.' },
  { title: 'Blending activity', text: 'Pushing the sounds together into words, with support while it is still new.' },
  { title: 'Word reading', text: 'Reading the words built in the previous step, this time from a card.' },
  { title: 'Reading practice', text: 'A short passage or a few sentences at a level the child can manage.' },
  { title: 'Quick recap', text: 'A short review of the sounds covered and what to practise at home.' },
];

const ACTIVITIES = [
  'Letter sound games',
  'Sound matching',
  'Picture matching',
  'Word building',
  'Sound blending',
  'Reading cards',
  'Spelling games',
  'Rhyming words',
  'Word puzzles',
  'Story reading',
];

const BEGINNERS = [
  'The alphabet — naming letters on sight',
  'Letter recognition, including easily confused pairs',
  'Basic sounds, a few at a time',
  'Simple word sounds heard by ear',
  'Sound matching games',
  'Blending, once a few sounds are secure',
];

const WHY_US = [
  { icon: '❤️', title: 'Child-friendly learning', text: 'Sessions are pitched at how young children actually learn — short, varied and hands-on.' },
  { icon: '💡', title: 'Simple explanations', text: 'Everything is explained in words a child can repeat back in their own way.' },
  { icon: '🎲', title: 'Activity-based', text: 'Sound games, cards and word building rather than worksheets alone.' },
  { icon: '🧑', title: 'Age-appropriate lessons', text: 'A four-year-old and a nine-year-old need very different phonics sessions.' },
  { icon: '🗣️', title: 'Practice-based', text: 'Children say sounds, blend words and read aloud in every session.' },
  { icon: '💬', title: 'Parent communication', text: 'We tell you which sounds your child is working on and what would help at home.' },
  { icon: '🪜', title: 'Structured learning', text: 'Sounds are introduced in a deliberate order so children can build words early.' },
  { icon: '🔎', title: 'Decoding, not guessing', text: 'A child who guesses a word has not read it. Decoding comes first.' },
];

const HOME_SUPPORT = [
  { title: 'Practise a few sounds daily', text: 'Five or ten minutes on most days is plenty. Short and regular beats long and occasional.' },
  { title: 'Read simple books together', text: 'Take turns. Your child hears fluent reading and practises their own.' },
  { title: 'Ask what a word starts with', text: 'A question you can ask anywhere — in the car, at the shop — and it trains the ear.' },
  { title: 'Build small words with cards', text: 'Swap one letter and read the new word. CAT, MAT, MAP.' },
  { title: 'Keep each sound clean', text: 'Say /t/, not “tuh”. That extra “uh” is the single most common reason blending stalls.' },
  { title: 'Let them attempt it', text: 'Wait before supplying the word. The attempt is where the learning is.' },
  { title: 'Reread favourite books', text: 'Rereading builds fluency, and a child who knows the story reads it more confidently.' },
  { title: 'Keep it short and light', text: 'Stop before frustration arrives. A child who enjoys it will come back to it.' },
];

const AREAS = ['Nizampet', 'Kukatpally', 'Miyapur', 'Bachupally', 'Pragathi Nagar', 'Hydernagar', 'JNTU'];

const RELATED = [
  { icon: '📖', title: 'English', text: 'Reading, writing, grammar and speaking together, once decoding is secure.', to: '/programs/english' },
  { icon: '💬', title: 'Spoken English', text: 'Fluency built from real conversation, not memorised paragraphs.', to: '/programs/spoken-english' },
  { icon: '🎤', title: 'Public speaking', text: 'From show-and-tell to a prepared presentation, one stage at a time.', to: '/junior-skills/public-speaking' },
  { icon: '🪔', title: 'Telugu', text: 'The aksharamala, reading, writing and conversation.', to: '/programs/telugu' },
  { icon: '🧮', title: 'Abacus', text: 'Mental calculation and concentration through level-based practice.', to: '/junior-skills/abacus' },
  { icon: '🧠', title: 'Brain games', text: 'Reasoning, memory and puzzles away from the screen.', to: '/programs/brain-games' },
];

const QUICK_ANSWERS = [
  {
    q: 'What is phonics for children?',
    a: 'The relationship between letters and the sounds they make. Once a child knows that C says /k/, A says /æ/ and T says /t/, they can blend those sounds and read CAT for themselves.',
  },
  {
    q: 'What age should a child start phonics?',
    a: 'Often from around age four, once they can recognise some letters and sit with a short activity. Older children still building reading confidence are placed by what they can do rather than by age.',
  },
  {
    q: 'What is blending, and why does it matter?',
    a: 'Blending is joining separate sounds into one word. It is the step where phonics turns into reading, and it takes most children a little while to click.',
  },
  {
    q: 'Why does my child say “kuh-a-tuh”?',
    a: 'Because an extra “uh” has crept onto each sound, which makes blending much harder. Children are taught to keep each sound clean from the start — /k/, not “kuh”.',
  },
  {
    q: 'Is phonics the same as learning to read?',
    a: 'No. Phonics gives a child the decoding tool. Vocabulary, comprehension and plenty of reading practice are built on top of it rather than instead of it.',
  },
  {
    q: 'How can parents practise phonics at home?',
    a: 'A few letter sounds each day, simple books read together, and small words built from letter cards. Five or ten minutes on most days is plenty.',
  },
];

export default function PhonicsPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Phonics classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children learn letter sounds, sound recognition and sound blending, then use them to read
                and spell simple words. Lessons build up to early reading through vocabulary,
                pronunciation and plenty of practice out loud.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#curriculum" className="btn btn-outline">
                  See the levels
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Beginners welcome
                </li>
                <li>
                  <span className="tick">★</span> Ages 4 and up
                </li>
              </ul>
            </div>
            <TrickCard
              label="The moment reading begins"
              sum="C · A · T  ="
              answer="CAT"
              steps={BLEND_STEPS}
              note="A few sounds at a time, never the whole alphabet at once."
              showLabel="Show me how"
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

      {/* ---------- What is phonics ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is phonics?"
            lead="Phonics helps children understand the relationship between letters and the sounds they make."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Children first learn that each letter stands for a sound. Then they learn to join those
                sounds together. That second step is what turns a row of letters into a word a child can
                actually read.
              </p>
              <p>
                Take the word CAT. It has three letters and three sounds: /k/ + /æ/ + /t/. A child who
                knows those three sounds does not need to be told what the word says — they can work it
                out. The first time that happens is usually the moment reading stops feeling like magic and
                starts feeling possible.
              </p>
              <p>
                Sounds are introduced a few at a time, in a deliberate order, so children can start
                building real words very early rather than waiting until they know all 26 letters.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What phonics gives a child</h2>
                <ul className="pill-row">
                  {GIVES.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>What we will not claim</h2>
                <ul>
                  {WILL_NOT_CLAIM.map((w) => (
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

      {/* ---------- Letter sounds ---------- */}
      <section className="band-soft" id="letter-sounds">
        <div className="container">
          <SectionHead
            eyebrow="Interactive"
            title="Learn letter sounds step by step"
            lead="Tap a letter to see the sound it makes, a word that starts with it, and the mistake to avoid. This is exactly how each sound is introduced in class."
          />
          <PickSteps
            title="Pick a letter"
            intro="Twelve of the first sounds children meet, in the order they are usually taught — enough to build real words early."
            options={SOUNDS}
            stepTitles={SOUND_STEPS}
            ruleLabel="The sound"
            note="Say the sound, not the letter name. B is named “bee”, but in a word it says /b/ — and it is the sound that lets a child read."
          />
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn phonics?"
            lead="The alternative to phonics is guessing. A child without a decoding method looks at an unfamiliar word and guesses from the first letter or the picture beside it."
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
            A note on expectations: how quickly a child progresses depends on how often they practise and
            where they start. We do not promise reading fluency, particular school results or a fixed
            timeline — what we commit to is structured teaching and regular guided practice.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What phonics practice builds"
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

      {/* ---------- Topics ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="Topics covered"
            title="What will kids learn?"
            lead="Everything below is taught in order, with each step resting on the one before it."
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
            eyebrow="Level by level"
            title="What a session looks like at each level"
            lead="A learning structure rather than a school-board syllabus. Ask us for the current programme detail for your child’s level."
          />
          <NumberedRows items={LEVELS} badge="Level" />
        </div>
      </section>

      {/* ---------- Blending ---------- */}
      <section id="blending">
        <div className="container">
          <SectionHead
            eyebrow="The key step"
            title="Learning to blend sounds"
            lead="Blending is joining separate sounds into one word. It is the step where phonics turns into reading, and it takes most children a little while to click."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Say each sound separately, then say them again a little faster, then faster still until
                they run together. <strong>/k/ … /æ/ … /t/ … cat.</strong>
              </p>
              <p>
                The common sticking point is adding an extra sound — saying “kuh-a-tuh” instead of /k/ /æ/
                /t/. That extra “uh” makes blending much harder, so children are taught to keep each sound
                clean from the start.
              </p>
              <p>
                Once a child can blend, they can build. Swapping a single sound makes a whole new word,
                which is a satisfying discovery for a five-year-old — and it shows them that words are
                built from parts rather than memorised whole.
              </p>
            </div>
            <div className="panel">
              <h2>Word building</h2>
              {WORD_BUILDING.map((w) => (
                <p key={w.word}>
                  <span className="kv">
                    {w.sounds} = {w.word}
                  </span>
                  {w.note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Reading ---------- */}
      <section className="band-soft" id="reading">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">From sounds to books</span>
            <h2>Phonics and reading</h2>
            <p>
              Phonics is one part of learning to read — an important part, but not the whole of it. A
              child also needs vocabulary, comprehension and plenty of practice with real books.
            </p>
            <p>
              What phonics provides is the decoding tool. Without it, a child meeting an unfamiliar word
              has nothing to fall back on. With it, they have a method they can use every time.
            </p>
            <p>
              So decoding is taught properly and early, and then reading practice, vocabulary and
              comprehension are built on top of it rather than instead of it.
            </p>
          </div>
          <div className="panel">
            <h2>How reading is built</h2>
            <ol className="rhythm">
              {READING_STAGES.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Spelling ---------- */}
      <section id="spelling">
        <div className="container">
          <SectionHead
            eyebrow="The reverse skill"
            title="Phonics for better spelling"
            lead="Spelling is blending backwards. A child hears a word, breaks it into sounds, and writes a letter for each sound."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="panel">
              <h2>Words children start with</h2>
              <ul className="pill-row">
                {SPELLING_WORDS.map((w) => (
                  <li key={w.word}>
                    {w.word} — {w.sounds}
                  </li>
                ))}
              </ul>
              <p className="note-line">
                Each has exactly three sounds and spells the way it sounds, which is why they come first.
              </p>
            </div>
            <div className="prose">
              <p>
                The method is always the same. Say the word slowly. Hold up a finger for each sound you
                hear. Then write one letter for each finger.
              </p>
              <p>
                Children who learn this have a way to attempt any word, even one they have never written.
                The attempt might not be right, but an attempt built from sounds is far more useful than a
                blank page or a guess.
              </p>
              <p>
                Words that do not follow the sounds — <em>said</em>, <em>was</em>, <em>the</em> — are
                taught separately as sight words, so children are not confused by exceptions while they
                are still learning the rules. We do not promise perfect spelling; what improves is a
                child’s willingness to try.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="By age"
            title="Phonics classes by age group"
            lead="Suggested groupings. Activities adapt to the child’s age and current reading level."
          />
          <div className="grid-4">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.kv}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <ul className="pill-row">
                  {a.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sample class ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What happens in a phonics class?"
            lead="An example of how a session flows. Ask us for the current class structure and batch detail."
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
            title="Phonics activities for kids"
            lead="The activity types used to keep practice varied and enjoyable."
          />
          <ul className="pill-row" style={{ justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Beginners ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Starting out</span>
            <h2>Phonics for complete beginners</h2>
            <p>
              If your child does not know the alphabet yet, that is completely fine. Most children who
              join are at exactly that point, and nothing in the early sessions assumes otherwise.
            </p>
            <p>
              Beginners start with letters and a small handful of sounds — not all 26 at once. As soon as
              a child knows a few, they start building real words, because reading something for yourself
              is far more motivating than finishing the alphabet first.
            </p>
            <p>
              Children are never pushed to keep pace with the group. A child who needs longer on a sound
              gets longer on it, because moving ahead of a shaky foundation just produces guessing later.
            </p>
          </div>
          <div className="panel">
            <h2>Where beginners start</h2>
            <ul className="pill-row">
              {BEGINNERS.map((b) => (
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
            title="Why choose Brolly Juniors"
            lead="Phonics sits alongside our language classes, tuitions and skill programmes for children in Hyderabad."
          />
          <div className="grid-4">
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

      {/* ---------- Modes, timings, fees ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning options, timings and fees"
            lead="We share these directly so what you get is current and specific to your child."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning options</h3>
              <p className="kv">Ask us</p>
              <ul>
                <li>Classroom sessions at the centre</li>
                <li>Batches capped at eight so every child reads aloud</li>
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
              <h3>Phonics class fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on age group, level and format</li>
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
            <h2>Book a free phonics trial</h2>
            <p>
              Let your child try a session and see how they take to it. We check which sounds they already
              know and suggest a starting point.
            </p>
            <ul className="pill-row">
              <li>Your child tries real phonics activities</li>
              <li>We check which sounds they already know</li>
              <li>You get a suggested starting level</li>
              <li>Options, timings and fees explained clearly</li>
              <li>No obligation to enrol afterwards</li>
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
            <TrialForm program={'Phonics & Early Reading'} compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="At home"
            title="How parents can support phonics at home"
            lead="Eight simple things that make a real difference between sessions. None of them takes long."
          />
          <div className="grid-4">
            {HOME_SUPPORT.map((h) => (
              <div className="guide-card" key={h.title}>
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
            <h2>Phonics classes for kids in Hyderabad</h2>
            <p>
              Most families arrive here for one of two reasons: a child in early school years who is
              guessing at words rather than reading them, or a younger child about to start school whose
              parents want the foundation in place first.
            </p>
            <p>
              Both start the same way — with a check of which sounds the child already knows. A child
              placed too far ahead of that will guess rather than decode, which is the problem the class
              is meant to solve.
            </p>
            <h3>Areas within easy reach</h3>
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
              Tell us your child’s age and which letters or sounds they already know, and we will suggest
              where they should start.
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

      {/* ---------- Related ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Where children usually go next, once decoding is secure."
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

      <FaqList items={page.faqs} title="Phonics classes: frequently asked questions" />

      {/* ---------- Quick answers ---------- */}
      <QuickAnswers
        items={QUICK_ANSWERS}
        faqs={page.faqs}
        title="Phonics for kids: quick answers"
        lead="Short, direct answers to the questions parents search for most."
      />

      <CtaBand variant={page.cta} />
    </>
  );
}
