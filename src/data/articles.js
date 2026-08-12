/* Informational articles — the Priority 4 keywords in SEO_STRATEGY.md §4.
 *
 * These do not sell anything directly. They exist for three reasons:
 *
 *   1. They target the questions a parent searches *before* they search for a
 *      class, which is where the relationship actually starts.
 *   2. They are the only pages on the site that other people have a reason to
 *      link to, and the link gap (6 referring domains against a competitor's
 *      237) is the site's largest structural deficit.
 *   3. They are what AI search engines quote. A direct, honest answer in the
 *      first paragraph is what gets cited; a sales page never is.
 *
 * House rules, and they matter more than volume: answer the question properly
 * in the opening lines, say the inconvenient thing where there is one, and do
 * not pad. An article that tells a parent their child is too young to start is
 * worth more trust than three that say "every child is ready".
 *
 * `quickAnswer` is written to stand alone — it is what a featured snippet or an
 * AI Overview lifts, so it must make sense with no page around it.
 */

export const articles = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'what-age-should-a-child-start-phonics',
    keyword: 'at what age should a child start phonics',
    title: 'At What Age Should a Child Start Phonics?',
    seoTitle: 'At What Age Should a Child Start Phonics? | Brolly Juniors',
    description:
      'Most children are ready for phonics between 4 and 5, but age is the weakest of the three readiness signals. Here is what actually matters, and what to do if your child is not there yet.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 6,
    category: 'Early reading',
    image: '/images/phonics.svg',
    imageAlt: 'Phonics letter blocks, blending arrows and sound bubbles',
    quickAnswer:
      'Most children are ready to begin phonics between the ages of four and five. But age is the least reliable of the three readiness signals. A child is ready when they can hear that "cat" and "hat" rhyme, can sit with one activity for about ten minutes, and can talk in full sentences. A four-year-old with those three can start; a six-year-old without the first one will struggle, and needs a few weeks of sound-listening play first.',
    intro: [
      'This is the most common question we are asked by parents of young children in Hyderabad, and it usually arrives with an edge of worry attached — a neighbour\'s child is already reading, and yours is not.',
      'The honest answer is that the age on the birth certificate is the weakest predictor in the room. What matters is whether a child can hear the individual sounds inside a spoken word. That skill is called phonological awareness, it develops at wildly different speeds between four and six, and it is the thing phonics is built on top of.',
    ],
    sections: [
      {
        heading: 'The three readiness signals that actually predict success',
        body: [
          'Before a child can map a sound to a letter, three things need to be roughly in place. None of them involve letters at all.',
        ],
        bullets: [
          '**They can hear sound patterns.** Do they notice that "cat" and "hat" rhyme? Can they clap the two beats in "ba-nana"? This is the single strongest signal, and it is entirely an ear skill.',
          '**They can hold attention for about ten minutes.** Not an hour — ten focused minutes on one activity, with an adult, without needing to get up.',
          '**They speak in full sentences.** A child who is still speaking in two-word fragments needs spoken language to come first. Phonics will not fix that, and starting early will not speed it up.',
        ],
        after: [
          'A child with all three can start at four and will do well. A child missing the first one should spend a few weeks on rhyming games, clapping syllables and "what sound does *mmmm*-ilk start with?" before touching a letter card. That is not a delay — it is the actual first stage of the pathway.',
        ],
      },
      {
        heading: 'What to do at each age',
        body: [
          'Rough guidance, with the caveat that individual children move at their own pace and the ranges overlap heavily.',
        ],
        bullets: [
          '**Ages 3–4: play, not programs.** Rhyming books, songs, "I spy something beginning with *sss*". No worksheets. No formal class. This is where phonological awareness is built and it is built through the ear.',
          '**Ages 4–5: the usual starting point.** Most children can begin a structured phonics program here, learning pure letter sounds and blending their first three-sound words.',
          '**Ages 5–7: still a completely normal start.** A child beginning at six is not behind; they typically move faster through the early levels than a four-year-old does, because their attention and spoken language are further along.',
          '**Ages 7+: start, and start properly.** An older child who is still guessing at words needs systematic phonics more than anyone, not less. Skipping to "reading practice" is what created the problem. Our own program takes learners in Classes 1–3 who are still building reading confidence.',
        ],
      },
      {
        heading: 'Sounds before letter names — the mistake that costs months',
        body: [
          'This is worth getting right, because it is the most common and most expensive error in early reading at home.',
          'If a child has learned that the letter B is called "bee", they cannot use that to read the word "bat". Blending "bee-a-tee" produces nothing. The child concludes that reading is arbitrary and guesses at words from the pictures instead — a habit that takes far longer to unpick than it took to form.',
          'Teach the pure sound: *b* as in the first fraction of "bat", clipped short, with no "uh" tacked on the end. Letter names come later, once reading is established, and they cause no trouble at that point.',
        ],
      },
      {
        heading: 'Why the order of the sounds matters',
        body: [
          'Good phonics programs do not teach the alphabet from A to Z. They start with s, a, t, p, i, n — a group chosen because those six sounds combine into more real words than any other six in English. A child who knows them can read "sat", "pin", "tap", "nap", "pit" and a few dozen others within the first fortnight.',
          'That matters more than it sounds. A child who reads a real word in week one believes reading is something they can do. A child working alphabetically is still on B and C after two weeks, has read nothing, and has quietly concluded otherwise.',
        ],
      },
      {
        heading: 'How long the whole thing takes',
        body: [
          'A complete synthetic phonics pathway usually runs nine to twelve months at two sessions a week, moving through six levels: sound awareness, blending, segmenting and spelling, digraphs and blends, long vowels and alternative spellings, then fluency and comprehension.',
          'Children who join with some reading already in place are placed further along after a short readiness check, rather than being walked through material they have already mastered. Any program that puts every child at Level 1 regardless is managing its timetable, not the child.',
        ],
      },
    ],
    faqs: [
      {
        q: 'My child is 6 and cannot read yet. Are we behind?',
        a: 'No. Reading ages vary enormously between five and seven, and a child who starts at six often overtakes one who started at four within a year. What matters is that the teaching is systematic — sounds in a deliberate order, blending practised every session — rather than reading practice in the hope it clicks.',
      },
      {
        q: 'Is phonics still useful if my child already reads a little?',
        a: 'Yes, and often urgently. Children who read by memorising word shapes hit a wall around Class 2, when the words get longer than they can memorise. Phonics gives them a method for words they have never seen. A readiness check will place them at the right level rather than the first one.',
      },
      {
        q: 'Can I teach phonics at home instead of a class?',
        a: 'You can, and the sound-awareness stage is genuinely better done at home through play. The part that is hard to do alone is pure sound production — most adults unconsciously add an "uh" to consonants, which breaks blending — and keeping the sound order systematic. If you do it at home, use one published scheme and follow its order rather than mixing sources.',
      },
      {
        q: 'How much practice does it need at home?',
        a: 'Five minutes a day beats forty minutes on Sunday. Reading three decodable words on the way to school counts. The programs that fail at home are the ones with a worksheet pile attached.',
      },
    ],
    related: [
      { label: 'Our six-level phonics pathway', to: '/junior-skills/phonics' },
      {
        label: 'My child can read but does not understand what they read',
        to: '/resources/child-can-read-but-does-not-understand',
      },
      { label: 'Is abacus good for kids?', to: '/resources/is-abacus-good-for-kids' },
      { label: 'Book a free trial class', to: '/book-free-demo' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'is-abacus-good-for-kids',
    keyword: 'is abacus good for kids',
    title: 'Is Abacus Good for Kids? An Honest Assessment',
    seoTitle: 'Is Abacus Good for Kids? An Honest Answer | Brolly Juniors',
    description:
      'What abacus training genuinely does for a child, what it is oversold as, and how to tell whether it is worth two to three years of your family\'s Saturdays.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 7,
    category: 'Numeracy',
    image: '/images/abacus.svg',
    imageAlt: 'A wooden soroban abacus with amber and teal beads',
    quickAnswer:
      'Abacus training reliably improves three things: sustained concentration, working memory, and mental calculation speed. It does not make a child better at mathematics as a subject — abacus is arithmetic, and school maths from Class 6 onward is mostly reasoning, not arithmetic. It is worth doing for a child aged five to eleven who benefits from a structured concentration practice, and it is a poor use of two years for a child who is already strong at mental arithmetic and short of time.',
    intro: [
      'Abacus is the most heavily marketed children\'s program in India and the one most likely to be described with claims nobody can substantiate. It is also genuinely useful. Both of those things are true at once, which is why this question deserves a straight answer rather than a brochure.',
      'We teach a ten-level abacus pathway, so we have an obvious interest here. We have tried to write the version we would want if we were the parent asking.',
    ],
    sections: [
      {
        heading: 'What abacus genuinely delivers',
        body: [
          'Three things, and they are real.',
        ],
        bullets: [
          '**Sustained concentration.** This is the largest benefit and it is rarely the one advertised. Abacus practice is twenty minutes of unbroken, self-corrected attention on a repetitive task. Very little else in a modern child\'s week asks for that, and children who do it consistently get visibly better at sitting with difficulty.',
          '**Working memory.** Mental abacus requires holding a visualised bead position while operating on it. That is working memory under load, practised daily. It is one of the few cognitive capacities that responds well to deliberate training in childhood.',
          '**Calculation fluency.** A child two years in can add multi-digit numbers mentally, faster and more accurately than most adults. This is not a party trick — arithmetic that costs no effort frees attention for the actual problem in a word problem.',
        ],
      },
      {
        heading: 'What it is oversold as',
        body: [
          'Three claims to treat sceptically, including from us.',
        ],
        bullets: [
          '**"It makes children good at maths."** It makes children good at *arithmetic*. School mathematics past Class 5 is increasingly about reasoning, proof, algebraic structure and modelling. Arithmetic fluency helps — a child not burning effort on 47 × 6 has more attention for the actual question — but it is a support, not a substitute.',
          '**"It develops the right brain" / "whole brain development".** This language comes from marketing, not from evidence. The concentration and working-memory gains are real and sufficient; the neuroscience framing added on top is not.',
          '**"Results in three months."** Level 1 in three months, yes. Genuine mental calculation takes eighteen months to three years of consistent practice. Any program promising transformation in a term is selling the enrolment, not the outcome.',
        ],
      },
      {
        heading: 'Who it suits, and who it does not',
        body: ['The honest sorting.'],
        bullets: [
          '**Good fit:** ages five to eleven; a child who finds it hard to stay with one task; a child who is anxious about number work and would benefit from a domain where progress is visible and measurable every week.',
          '**Poor fit:** a child under five who cannot yet sit for fifteen minutes or recognise numbers to ten — starting early is the most common reason children abandon abacus; a child over twelve, for whom algebra practice is a better use of the same hours; a child already fluent at mental arithmetic and short of free time.',
          '**Depends:** a child with three other activities already. Abacus needs ten minutes of daily practice to work at all. Without it, two years produce very little, and it is better not to start than to start and drift.',
        ],
      },
      {
        heading: 'The one question to ask before you enrol anywhere',
        body: [
          'Ask what happens in a session when a child gets an answer wrong.',
          'In a weak program the answer is "they redo the sheet". In a good one, the instructor watches the child\'s hands, identifies which complement rule broke down, and reteaches that specific rule. That difference is the entire value of the class — everything else is a worksheet you could buy.',
          'It is also why batch size decides outcomes here more than in any other subject. An instructor cannot watch twenty pairs of hands. Ours are capped at eight for exactly this reason.',
        ],
      },
      {
        heading: 'Abacus or Vedic Maths?',
        body: [
          'They are frequently sold together and they are not the same thing.',
          'Abacus is a long, physical, visualisation-based training: two to three years, best started at five to seven, and the benefit is concentration and working memory as much as speed.',
          'Vedic Maths is a set of pattern-based mental shortcuts: about twelve weeks, best from age seven upward once multiplication tables are in place, and the benefit is speed plus a genuine feel for how numbers decompose.',
          'If a child is young and needs concentration, abacus. If a child is older, already competent, and wants to be faster, Vedic Maths. Doing both is reasonable, in that order, with a gap between them.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the best age to start abacus?',
        a: 'Five to seven is the sweet spot. The child needs to recognise numbers to ten and sit with one activity for about fifteen minutes. Under five is usually too early and is the most common reason a child gives it up.',
      },
      {
        q: 'How long until we see results?',
        a: 'Better finger technique and number confidence within three months. Genuine mental calculation — no physical abacus, answers held in the head — takes eighteen months to three years at consistent practice.',
      },
      {
        q: 'How much home practice does abacus need?',
        a: 'Ten minutes a day, most days. This is not optional. Abacus is a motor and visualisation skill and it decays quickly without frequent short repetition. A family that cannot commit to ten minutes daily should choose a different program rather than a diluted version of this one.',
      },
      {
        q: 'Will abacus help with school exams?',
        a: 'In primary school, meaningfully — most of that arithmetic is exactly what abacus trains. From Class 6 onward the benefit becomes indirect: faster arithmetic leaves more attention for reasoning, but it does not teach the reasoning.',
      },
    ],
    related: [
      { label: 'Our ten-level abacus pathway', to: '/junior-skills/abacus' },
      { label: 'Free printable abacus worksheets', to: '/abacus-worksheet-generator' },
      { label: 'The Vedic Maths program', to: '/junior-skills/vedic-maths' },
      { label: 'Book a free trial class', to: '/book-free-demo' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'should-my-child-learn-ai-or-coding-first',
    keyword: 'should my child learn AI or coding first',
    title: 'Should My Child Learn AI or Coding First?',
    seoTitle: 'Should My Child Learn AI or Coding First? | Brolly Juniors',
    description:
      'AI literacy and programming are different skills that solve different problems. Which one to start with depends on your child\'s age and temperament — here is how to decide.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 6,
    category: 'Technology',
    image: '/images/ai.svg',
    imageAlt: 'A friendly AI robot beside a chat window and an idea spark',
    quickAnswer:
      'Start with AI literacy if your child is in Class 6 or 7, or is more interested in making things — writing, images, video, presentations — than in how machines work. Start with Python if your child is in Class 8 or above, enjoys puzzles and precision, and is not put off by something failing repeatedly before it works. Both are 72-session annual pathways and neither requires the other first. The worst option is a combined "AI and coding" course that covers both shallowly.',
    intro: [
      'Parents ask this expecting one to be the foundation for the other. Neither is. They are separate skills that answer separate questions, and a child can start with either.',
      'AI literacy is about using systems you did not build: prompting them precisely, checking whether their output is true, knowing what not to type into them. Programming is about building a system yourself: decomposing a problem into steps a machine can execute, and debugging when it does not.',
    ],
    sections: [
      {
        heading: 'Start with AI if…',
        body: ['These point clearly toward the AI pathway.'],
        bullets: [
          '**Your child is in Class 6 or 7.** The AI curriculum needs no programming, so there is no prerequisite to clear.',
          '**They make things.** Children who write stories, draw, make videos or build presentations get an immediate return: their existing interest gets more capable within a fortnight.',
          '**They already use AI tools.** If a chatbot is already open on the family laptop, the safety and verification habits are urgent now, not in two years. This is the strongest argument in the list.',
          '**They lose patience with things that break.** AI tools produce something on the first attempt. Programming rarely does.',
        ],
      },
      {
        heading: 'Start with Python if…',
        body: ['These point toward coding.'],
        bullets: [
          '**Your child is in Class 8 or above.** Abstraction — variables standing for values, functions standing for behaviour — lands more easily here.',
          '**They like puzzles.** Children who enjoy chess, logic problems or taking things apart tend to find debugging satisfying rather than infuriating.',
          '**They can tolerate repeated failure.** Code fails constantly before it works. A child who can sit with that gains more from programming than from anything else on offer.',
          '**They are heading toward CBSE Computer Science or Informatics Practices.** Python is the language in both, so this is direct preparation.',
        ],
      },
      {
        heading: 'The trap: the combined course',
        body: [
          'Many providers sell "AI and Coding" as one program. It is convenient to market and it produces children who have seen a lot and can do very little.',
          'Real AI literacy needs a full year: prompting, research and verification, multimodal creation, data, workflow thinking, ethics and safety, then a project. Real Python needs a full year: syntax, control flow, functions, data structures, files, then a program that does something. Compress both into one year and each becomes a demonstration.',
          'We keep them separate for this reason — two distinct 72-session annual pathways, either of which can be taken alone.',
        ],
      },
      {
        heading: 'Can a child do both at once?',
        body: [
          'Yes, and a fair number do, though it is four hours a week and that is a real commitment on top of school.',
          'If you are choosing, take one properly this year and the other next. A child who has done a full AI year arrives at Python already able to specify a problem clearly, which is half of programming. A child who has done a Python year arrives at AI understanding what the system underneath is actually doing. The order matters less than the depth.',
        ],
      },
      {
        heading: 'The thing neither pathway is',
        body: [
          'Neither is a head start on a career. Your child will not enter a job market that resembles this one, and the specific tools taught today will be obsolete or unrecognisable by then.',
          'What survives is transferable: stating a problem precisely, checking whether an answer is true, breaking work into steps, finishing something and explaining it to a room. Both pathways are built around those, which is why every module ends with a project a child has to present rather than a certificate they collect.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does the AI course require any coding?',
        a: 'No. The Class 6–8 curriculum requires none at all. Class 9 and 10 touch light technical concepts, but the emphasis stays on practical AI literacy, projects and responsible use.',
      },
      {
        q: 'Is Python too hard for a Class 6 student?',
        a: 'No — the Class 6 Python curriculum is built for complete beginners and starts from the first typed line. The question is temperament rather than capability: a Class 6 child who is frustrated by things that do not work first time will enjoy the AI pathway more this year.',
      },
      {
        q: 'Which one helps more with school?',
        a: 'Python, directly, if the child will take CBSE Computer Science or Informatics Practices. AI, indirectly but broadly, for research, writing and project work across every subject — provided the verification habits are taught alongside, which is the entire point of teaching it in a class rather than leaving it to YouTube.',
      },
    ],
    related: [
      { label: 'AI for Kids — Classes 6 to 10', to: '/ai-for-kids' },
      { label: 'Python for Kids — Classes 6 to 10', to: '/python-for-kids' },
      { label: 'When should a child move from Scratch to Python?', to: '/resources/scratch-to-python-when-to-move' },
      { label: 'Teaching kids to use ChatGPT safely', to: '/resources/teach-kids-to-use-chatgpt-safely' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'teach-kids-to-use-chatgpt-safely',
    keyword: 'how to teach kids to use ChatGPT safely',
    title: 'How to Teach Kids to Use ChatGPT Safely',
    seoTitle: 'How to Teach Kids to Use ChatGPT Safely | Brolly Juniors',
    description:
      'A practical set of rules for parents: what a child should never type, how to check whether an answer is true, and the one question that separates learning from copying.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 7,
    category: 'AI safety',
    image: '/images/ai.svg',
    imageAlt: 'A friendly AI robot beside a chat window and an idea spark',
    quickAnswer:
      'Four rules cover most of it. One: never type a full name, school, address, phone number or photograph into a chatbot. Two: treat every factual claim as unverified until checked against a textbook or a second source — chatbots state wrong things in exactly the same confident tone as right ones. Three: use it to explain, not to produce; if the child cannot explain the answer in their own words, it does not count. Four: keep it in a shared room, not a bedroom. Most Indian services set a minimum age of 13, with parental consent required for under-18s.',
    intro: [
      'Most children in Hyderabad using AI tools learned to use them from a friend or a video, and nobody taught them the safety part. The gap is not tool skill — they are usually better at it than their parents. The gap is judgement.',
      'These are the rules we teach in class, in the order they matter.',
    ],
    sections: [
      {
        heading: 'Rule 1 — What never goes into the box',
        body: [
          'Children are used to search engines, where typing something has no consequence. A chat interface feels like a conversation, and children disclose to conversations.',
          'The rule is a flat list, taught as a list because rules with exceptions do not survive contact with a nine-year-old.',
        ],
        bullets: [
          'Full name, school name, class section, or the name of any friend',
          'Home address, area, or anything that identifies where they are right now',
          'Phone numbers, email addresses, passwords — anyone\'s',
          'Photographs of themselves, family or friends',
          'Anything about a family member\'s health, money or work',
        ],
        after: [
          'The test we teach children: *if you would not shout it across a bus, do not type it into a chat box.* It transfers well, because they already understand the bus.',
        ],
      },
      {
        heading: 'Rule 2 — Confident and wrong sound identical',
        body: [
          'This is the hardest idea to land and the most important. A chatbot predicts plausible text. When it has the facts, it produces correct text. When it does not, it produces equally fluent text that is wrong, in precisely the same authoritative tone — including invented dates, invented sources and invented book titles.',
          'Children are used to a world where confidence correlates with knowledge. This one breaks that. The habit to build is mechanical: any name, date, number or claim that is going into schoolwork gets checked against the textbook or one other source, every time.',
          'A useful home exercise: ask the chatbot about something your child knows extremely well — a favourite game, a local landmark, a school event — and find the errors together. Discovering it themselves teaches the lesson in a way being told never does.',
        ],
      },
      {
        heading: 'Rule 3 — Explain, do not produce',
        body: [
          'The line between using AI to learn and using it to avoid learning is sharper than it looks, and it is not about whether the tool was used.',
          'Ask one question: **can the child explain the answer in their own words, without the screen?** If yes, it was a tutor. If no, it was a photocopier, regardless of how the work was produced.',
        ],
        bullets: [
          '**Good:** "Explain photosynthesis at my level." "Give me five practice questions on fractions." "I think the answer is 12 — is my reasoning right?" "What did I miss in this paragraph?"',
          '**Bad:** "Write my essay on water conservation." "Solve these ten sums." "Do my project."',
        ],
        after: [
          'One rule that works well at home and costs nothing: the child reads their AI-assisted work aloud to a parent and answers two questions about it. Anything that cannot survive that goes back for another pass.',
        ],
      },
      {
        heading: 'Rule 4 — Where and when',
        body: [
          'Shared room, not bedroom. Not because a child will do something wrong, but because the useful conversations — "look what it said, that can\'t be right" — only happen when an adult is within earshot.',
          'On age: most major AI services set a minimum of 13, and require parental consent below 18. Younger children should use these tools with an adult present rather than on their own account. This is worth checking directly, since providers revise their terms often.',
        ],
      },
      {
        heading: 'Say this out loud, once',
        body: [
          'Tell your child plainly that the model is not a person, does not know them, does not remember them between sessions in the way a friend would, and has no feelings to hurt. Children — especially quieter ones — form something like attachment to a system that is endlessly patient and never busy.',
          'It is not harmful in itself. It becomes harmful when a child brings a worry to a chatbot instead of to a person. The sentence to plant: *for anything that makes you feel bad, you talk to a human.*',
        ],
      },
      {
        heading: 'A five-minute family AI agreement',
        body: [
          'Write these six lines, both of you sign it, stick it near the laptop. Children follow rules they helped write and ignore rules they were handed.',
        ],
        bullets: [
          'I do not type personal information about anyone',
          'I check facts before I use them in schoolwork',
          'I can explain everything I hand in',
          'I use it in the living room',
          'I tell an adult if something is upsetting or strange',
          'I say when I have used AI in a piece of work',
        ],
      },
    ],
    faqs: [
      {
        q: 'What age can a child use ChatGPT?',
        a: 'Most major AI services set a minimum age of 13, and require parental consent for users under 18. Below that, use the tools alongside your child rather than giving them an account. Providers change these terms regularly, so check the current policy rather than relying on a figure you read once.',
      },
      {
        q: 'Should I ban AI tools instead?',
        a: 'It rarely works and it costs you the ability to supervise. A banned tool gets used at a friend\'s house, with nobody teaching the safety rules. Supervised use with clear boundaries produces better judgement than prohibition does.',
      },
      {
        q: 'How do I know if my child is using AI to cheat?',
        a: 'Ask them to explain the work out loud and answer two follow-up questions. This is more reliable than any detection tool, and it is the same standard we use in class.',
      },
      {
        q: 'Do you teach this in your classes?',
        a: 'Yes, and not as a one-off lesson. Privacy, fact-checking, copyright, bias, disclosure and knowing when to ask an adult are built into every module of the AI curriculum from Class 6 to Class 10, because safety taught once in September is forgotten by November.',
      },
    ],
    related: [
      { label: 'AI for Kids — Classes 6 to 10', to: '/ai-for-kids' },
      { label: 'Should my child learn AI or coding first?', to: '/resources/should-my-child-learn-ai-or-coding-first' },
      { label: 'Book a free trial class', to: '/book-free-demo' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'python-projects-for-class-8-students',
    keyword: 'python projects for class 8 students',
    title: 'Nine Python Projects for Class 8 Students',
    seoTitle: 'Python Projects for Class 8 Students | Brolly Juniors',
    description:
      'Nine Python projects pitched at Class 8 — what each one teaches, what "finished" means, and the extension to try if it turns out to be too easy.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 8,
    category: 'Coding',
    image: '/images/python.svg',
    imageAlt: 'A code editor window with a friendly python snake',
    quickAnswer:
      'A good Class 8 Python project uses lists, dictionaries, functions and file handling, takes four to six hours across a couple of weeks, and produces something the student can demonstrate to someone who does not code. Nine that work: a quiz game with a saved scoreboard, a text-adventure with rooms, a marks analyser, a password strength checker, a turtle-graphics pattern generator, a to-do list that persists to a file, a number-guessing game with strategy hints, a dice-statistics simulator, and a simple menu-driven contact book.',
    intro: [
      'The projects below are drawn from the nine-module Class 8 Python year we teach. Each one is chosen because it forces a specific concept to be used properly rather than mentioned.',
      'One thing worth saying before the list: the project is not finished when the code runs. It is finished when the student can explain every line of it, has tested it against something that should break it, and has shown it to someone who does not program. That standard is what separates a portfolio from a folder.',
    ],
    sections: [
      {
        heading: '1. Quiz game with a saved scoreboard',
        body: [
          '**Teaches:** dictionaries, loops, file handling, input validation.',
          'Questions and answers live in a list of dictionaries. The program asks them in order, scores the run, and appends the player\'s name and score to a file so previous scores survive the program closing. That last part is what makes it a real program rather than an exercise.',
          '**Finished when:** it handles a blank answer and a wrongly-typed answer without crashing, and the scoreboard still reads correctly after five separate runs. **Extension:** shuffle the questions, or add a timer.',
        ],
      },
      {
        heading: '2. Text adventure with rooms',
        body: [
          '**Teaches:** nested dictionaries, functions, program state.',
          'A map of rooms, each with a description and exits. The player types "north" and moves. Add one object to pick up and one locked door it opens, and the student has built state management without anyone using the phrase.',
          '**Finished when:** a player can reach the end, and typing nonsense produces a helpful message rather than a traceback. **Extension:** save the game position to a file so it can be resumed.',
        ],
      },
      {
        heading: '3. Marks analyser',
        body: [
          '**Teaches:** lists, arithmetic, formatted output, reading files.',
          'Read a class\'s marks from a CSV or a plain text file. Report the highest, lowest, mean and how many passed. Print it as a neat table.',
          'This is the most useful project on the list because it is the shape of almost all real programming: read data, compute something, present it clearly. **Extension:** a bar chart in plain text using asterisks — surprisingly satisfying and no libraries needed.',
        ],
      },
      {
        heading: '4. Password strength checker',
        body: [
          '**Teaches:** strings, conditions, boolean logic.',
          'Check length, presence of digits, uppercase, lowercase and symbols. Return a rating and a specific suggestion for improvement.',
          'It teaches the important habit of turning an informal rule into an explicit test, and it connects directly to online safety, which children find more interesting than a maths exercise. **Extension:** reject the twenty most common passwords from a list held in a file.',
        ],
      },
      {
        heading: '5. Turtle graphics pattern generator',
        body: [
          '**Teaches:** loops, nested loops, functions with parameters, angles.',
          'Python\'s built-in turtle module draws spirals, polygons and tessellations from a handful of lines. A function that draws a polygon of *n* sides, called in a loop with a rotation each time, produces something genuinely beautiful from about twelve lines.',
          'This is the project to give a student who is losing interest — the feedback is immediate and visual. **Extension:** take the number of sides and the colour as user input.',
        ],
      },
      {
        heading: '6. To-do list that persists',
        body: [
          '**Teaches:** lists, file read and write, a menu loop, delete operations.',
          'Add a task, list tasks, mark one complete, delete one, quit. Everything saved to a text file so the list survives closing the program.',
          '**Finished when:** deleting item 3 of 5 leaves the right four, and choosing option 9 from a menu of 5 does not crash it. Off-by-one errors and unvalidated menu input are the two bugs every student meets here, and meeting them is the point. **Extension:** priorities, and sorting by them.',
        ],
      },
      {
        heading: '7. Number guessing game with strategy hints',
        body: [
          '**Teaches:** random numbers, while loops, comparison logic.',
          'The classic higher/lower game, with one addition that lifts it: after the game, tell the player whether their guesses followed an efficient strategy — did they halve the remaining range each time?',
          'That turns a beginner exercise into a first encounter with binary search. **Extension:** a mode where the computer guesses the player\'s number and always wins in seven tries out of a hundred.',
        ],
      },
      {
        heading: '8. Dice statistics simulator',
        body: [
          '**Teaches:** random, loops, counting with dictionaries, interpreting results.',
          'Roll two dice ten thousand times, count how often each total appears, print the distribution. The student predicts the shape first, then sees it.',
          'It is the cleanest illustration of why 7 is not just "lucky", and it doubles as maths revision. **Extension:** compare ten rolls against ten thousand and explain, in writing, why the small sample looks so different.',
        ],
      },
      {
        heading: '9. Menu-driven contact book',
        body: [
          '**Teaches:** dictionaries, search, file persistence, program structure.',
          'Add a contact, search by name, list all, delete, save to file. It is the closest thing on this list to an actual application, and it is the right final project of the year because it uses everything.',
          '**Finished when:** searching for a name that does not exist is handled gracefully, and the file is still readable after twenty operations. **Extension:** partial-match search, so typing "ram" finds "Ramesh".',
        ],
      },
      {
        heading: 'How to judge a finished project',
        body: [
          'The four-point check we use at the end of every module, which works equally well at home:',
        ],
        bullets: [
          'It runs start to finish without breaking',
          'The student can explain every part of it in their own words',
          'They tested it and improved at least one thing afterwards',
          'Someone else used or understood it without their help',
        ],
        after: [
          'A project that passes all four is worth ten that merely run.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long should a Class 8 Python project take?',
        a: 'Four to six hours of work spread across two weeks. Long enough to require planning and a second sitting; short enough that it gets finished. Projects that run for a month usually get abandoned at 80%.',
      },
      {
        q: 'Does my child need any libraries installed?',
        a: 'No. Every project on this list runs on a standard Python installation using only built-in modules — random, turtle and standard file handling. Avoiding a dependency install is deliberate; it is a common place where a beginner stalls before writing any code.',
      },
      {
        q: 'What should a Class 8 student already know before these?',
        a: 'Variables, input and output, if/else, for and while loops, lists, and writing a function that takes parameters and returns a value. Dictionaries and file handling can be learned during the projects — several of these are designed to introduce them.',
      },
      {
        q: 'Which of these is the best one to start with?',
        a: 'The quiz game. It is immediately shareable, which matters more for motivation than difficulty does, and it covers dictionaries and file handling in one go.',
      },
    ],
    related: [
      { label: 'Class 8 Python curriculum', to: '/python-for-kids/class-8' },
      { label: 'Python for Kids — Classes 6 to 10', to: '/python-for-kids' },
      { label: 'When should a child move from Scratch to Python?', to: '/resources/scratch-to-python-when-to-move' },
      { label: 'Student projects', to: '/student-projects' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'cbse-ai-curriculum-class-9-explained',
    keyword: 'CBSE class 9 AI curriculum',
    title: 'The CBSE Class 9 AI Curriculum, Explained for Parents',
    seoTitle: 'CBSE Class 9 AI Curriculum (417) Explained | Brolly Juniors',
    description:
      'What CBSE\'s Artificial Intelligence skill subject covers in Class 9, how it is assessed, who should take it, and where students most often struggle.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 7,
    category: 'Technology',
    image: '/images/schools.svg',
    imageAlt: 'A school building with a calendar and graduation cap',
    quickAnswer:
      'CBSE offers Artificial Intelligence as a skill subject (code 417) in Classes 9 and 10. It combines employability skills with an AI core covering what AI is and is not, the AI project cycle, data literacy, an introduction to Python, and the three domains of computer vision, natural language processing and data science. Assessment is split between a theory paper and substantial practical and project work. It suits a curious student with reasonable maths and no fear of a keyboard; it is not a prerequisite for Computer Science later. Always confirm details against the current CBSE curriculum document for your academic year, as units and weightings are revised.',
    intro: [
      'CBSE\'s AI skill subject is now offered in a large number of schools, and parents are being asked to choose it without much explanation of what it involves. This is the plain version.',
      'One caveat before anything else: CBSE revises skill-subject curricula and their weightings from year to year. Treat everything below as the shape of the subject, and confirm the specifics against the curriculum document your school is following this session.',
    ],
    sections: [
      {
        heading: 'What the subject actually is',
        body: [
          'Artificial Intelligence (subject code 417) is a *skill subject*, taken alongside the five main subjects. It is designed to be taken up in Class 9 and continued into Class 10.',
          'Like other CBSE skill subjects, the syllabus has two parts: a set of employability skills — communication, self-management, basic IT, entrepreneurship, green skills — and the subject-specific AI core. Parents are usually surprised by the first part; it is genuinely useful and it is examinable.',
        ],
      },
      {
        heading: 'The AI core, unit by unit',
        body: ['Broadly, the Class 9 core covers the following ground.'],
        bullets: [
          '**Introduction to AI.** What counts as AI and what does not, where it already appears in daily life, the domains it splits into, and its ethical dimensions. More conceptual than most parents expect, and the unit that carries the rest.',
          '**The AI project cycle.** Problem scoping, data acquisition, data exploration, modelling, evaluation. This is the spine of the subject and where the project marks come from.',
          '**Data literacy.** Where data comes from, what makes it good or bad, how it is represented, and why a biased dataset produces a biased system. The single most transferable unit in the course.',
          '**Introduction to Python.** Basic programming — variables, data types, conditions, loops, simple lists. Enough to run and modify a small script, not enough to build an application.',
          '**The three domains.** Computer vision, natural language processing and data science, introduced at concept level with small practical activities in each.',
        ],
      },
      {
        heading: 'How it is assessed',
        body: [
          'The subject is weighted heavily toward doing rather than recalling: a written theory paper on one side, and practical work plus a project and viva on the other. The project is not a formality — it is assessed against the project-cycle stages, and a student who cannot explain their own problem statement and data choices in the viva loses marks a well-presented file will not recover.',
          'Confirm the exact split for your session with the school. It has changed before.',
        ],
      },
      {
        heading: 'Who should take it',
        body: ['Reasonable indicators either way.'],
        bullets: [
          '**Take it if:** your child is curious about how systems make decisions, is comfortable enough with Class 9 maths, does not mind writing and presenting, and would rather do project work than memorise. It pairs well with a child who already uses AI tools and wants to understand them.',
          '**Think twice if:** your child is already stretched across five subjects and an activity, or dislikes both writing and coding — this subject asks for both. A skill subject taken reluctantly costs more than the marks it adds.',
          '**Not a prerequisite.** Taking AI in Class 9 is not required for Computer Science or Informatics Practices in Class 11, and not taking it closes nothing off.',
        ],
      },
      {
        heading: 'Where students actually struggle',
        body: [
          'Three places, consistently, and none of them is the Python.',
        ],
        bullets: [
          '**Problem scoping.** Students want to jump to a solution. Writing a precise problem statement — who, what, where, why — is genuinely hard the first several times, and it is worth marks throughout.',
          '**Data, not code.** "Which data would answer this question, and what is wrong with the data I have?" is the recurring theme of the whole subject and the least practised skill in a school career built on given information.',
          '**Explaining the project aloud.** The viva catches students who assembled a project rather than understood one. It is also the most valuable part of the subject, and the part that transfers to everything else.',
        ],
      },
      {
        heading: 'How to support it at home',
        body: [
          'Two things help more than tuition. First, ask your child to explain their project to you as though you know nothing — the gaps surface immediately, and this is exactly the viva. Second, when a news story about AI appears, ask what data such a system would have needed. That single question rehearses the core of the syllabus in ninety seconds.',
          'Our own Class 9 AI programme runs alongside school rather than instead of it: 72 sessions built around practical AI literacy, verification habits and project work, with the project cycle practised repeatedly rather than once in March.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is CBSE Class 9 AI difficult?',
        a: 'It is not conceptually hard, but it is not a soft option either. Students who like structure and clear answers sometimes find the project and data-analysis work uncomfortable, precisely because there is no single right answer. Students who enjoy that find it the easiest subject on their timetable.',
      },
      {
        q: 'Does my child need to know Python before Class 9 AI?',
        a: 'No. The Python component starts from the beginning and stays at basic level. Prior Python makes the coding units trivial and frees attention for the project work, which is where the marks are.',
      },
      {
        q: 'Is AI a main subject or an additional one?',
        a: 'It is a skill subject taken in addition to the main subjects. Schools differ in how they timetable it, so ask yours directly how many periods a week it gets — it makes a large difference to how much support a student needs outside school.',
      },
      {
        q: 'Where can I read the official syllabus?',
        a: 'CBSE publishes the curriculum document for each skill subject on its official website, revised annually. Ask your school which session\'s document they are following, since units and weightings are updated and older summaries circulate widely online.',
      },
    ],
    related: [
      { label: 'AI curriculum for Class 9', to: '/ai-for-kids/class-9' },
      { label: 'AI curriculum for schools', to: '/schools/ai-curriculum' },
      { label: 'Should my child learn AI or coding first?', to: '/resources/should-my-child-learn-ai-or-coding-first' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'abacus-vs-vedic-maths-for-children',
    keyword: 'abacus vs vedic maths for children',
    title: 'Abacus vs Vedic Maths: Which One, and When?',
    seoTitle: 'Abacus vs Vedic Maths for Children | Brolly Juniors Hyderabad',
    description:
      'They are sold as alternatives and they are not. A side-by-side comparison of age, duration, what each actually trains, and how to choose between them.',
    published: '2026-07-31',
    updated: '2026-07-31',
    readingTime: 6,
    category: 'Numeracy',
    image: '/images/vedic-maths.svg',
    imageAlt: 'A board of quick mental maths patterns',
    quickAnswer:
      'Abacus is a two-to-three-year visualisation training best begun at age five to seven; it trains concentration and working memory as much as arithmetic. Vedic Maths is a twelve-week set of pattern-based mental shortcuts best begun at seven or later, once tables are secure; it trains speed and number sense. For a young child who needs concentration, choose abacus. For an older child who is already competent and wants to be faster, choose Vedic Maths. Doing both — abacus first, Vedic Maths a year or two later — works well.',
    intro: [
      'These two are marketed side by side so often that parents assume they are competing versions of the same thing. They are not remotely the same thing, and choosing the wrong one for a child\'s age is the most common reason either fails.',
    ],
    sections: [
      {
        heading: 'The core difference in one line each',
        body: [
          '**Abacus** teaches a child to *see* numbers — to hold a bead configuration in the mind and manipulate it. The tool becomes internal, and the calculation happens in a mental image.',
          '**Vedic Maths** teaches a child to *restructure* numbers — to notice that 98 × 97 is easier if you think of both as being near 100. There is no tool; there is a set of patterns and the judgement to pick one.',
          'One trains visual working memory. The other trains number sense and flexible decomposition. Both produce fast mental arithmetic, by entirely different routes.',
        ],
      },
      {
        heading: 'Side by side',
        table: {
          head: ['', 'Abacus', 'Vedic Maths'],
          rows: [
            ['Best starting age', '5–7', '7–13'],
            ['Typical duration', '2–3 years, 10 levels', '~12 weeks'],
            ['Prerequisite', 'Numbers to 10, sits 15 minutes', 'Tables to 10, place value secure'],
            ['Daily practice needed', '10 minutes, most days', 'Light — a few minutes'],
            ['Primary gain', 'Concentration, working memory', 'Speed, number sense'],
            ['Secondary gain', 'Calculation fluency', 'Confidence in maths class'],
            ['Fails when', 'Started too young, or practice skipped', 'Taught as tricks without the reasoning'],
          ],
        },
      },
      {
        heading: 'How each one fails',
        body: [
          'Worth knowing, because both failure modes are avoidable and both are common.',
          '**Abacus fails** when a child starts at four, cannot yet sit still, and concludes within a term that they are bad at it. It also fails quietly when the daily ten minutes stops — the skill is motor and visual, and it decays fast. Two years of class with no home practice produces very little.',
          '**Vedic Maths fails** when it is taught as a bag of tricks to memorise. A child who knows the "nikhilam" shortcut but cannot say why it works has learned a magic spell, and it will not transfer to a number the trick does not fit. Taught properly, each method comes with the reasoning, and the child learns to *choose* a method — which is the actual skill.',
        ],
      },
      {
        heading: 'Choosing between them',
        body: ['If you can only do one:'],
        bullets: [
          '**Child is 5–7:** abacus. The window for the concentration and visualisation benefit is genuinely age-sensitive, and Vedic Maths will still be there at nine.',
          '**Child is 8–10 and struggles with speed but understands the maths:** Vedic Maths. Twelve weeks, low commitment, visible result.',
          '**Child is 8–10 and finds it hard to concentrate:** abacus is still worth it, even started late. The concentration training is the point; the arithmetic is a by-product.',
          '**Child is 11+:** Vedic Maths, or neither. At this stage, time spent on algebra and reasoning generally beats time spent on arithmetic speed.',
        ],
      },
      {
        heading: 'Doing both',
        body: [
          'The sequence that works is abacus first, from five to seven or eight, then Vedic Maths at nine or ten once tables and place value are secure.',
          'By then the child already has strong mental visualisation from abacus, and Vedic Maths becomes a set of patterns they can *see* rather than memorise. Reversing the order works far less well, and running both simultaneously mostly produces confusion about which method to reach for.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a child do abacus and Vedic Maths at the same time?',
        a: 'We do not recommend it. The two use different mental strategies for the same operation, and a child running both at once tends to hesitate between them, which slows both down. Sequence them instead.',
      },
      {
        q: 'Which one helps more with school maths?',
        a: 'In primary classes, abacus, because most of that arithmetic is exactly what it trains. From Class 6 onward, Vedic Maths has a small edge — the number sense transfers into algebra a little better than bead visualisation does. Neither teaches the reasoning that school maths increasingly tests.',
      },
      {
        q: 'Is Vedic Maths worth it if my child is already good at maths?',
        a: 'Often yes, and it is the ideal candidate. A child who already understands the maths gets the most from methods that reveal structure, and twelve weeks is a small commitment. A child who is struggling with the underlying concepts should fix that first.',
      },
    ],
    related: [
      { label: 'Abacus classes in Hyderabad', to: '/junior-skills/abacus' },
      { label: 'Vedic Maths classes in Hyderabad', to: '/junior-skills/vedic-maths' },
      { label: 'Free printable abacus worksheets', to: '/abacus-worksheet-generator' },
      { label: 'Is abacus good for kids?', to: '/resources/is-abacus-good-for-kids' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'child-can-read-but-does-not-understand',
    keyword: 'child can read but does not understand',
    title: 'My Child Can Read But Does Not Understand What They Read',
    seoTitle: 'Child Can Read But Does Not Understand? | Brolly Juniors',
    description:
      'Reading every word and remembering none of it has three different causes, and each needs a different fix. One five-minute test at home tells you which.',
    published: '2026-08-08',
    updated: '2026-08-08',
    readingTime: 8,
    category: 'Early reading',
    image: '/images/phonics.svg',
    imageAlt: 'Phonics letter blocks, blending arrows and sound bubbles',
    quickAnswer:
      'A child who decodes accurately but takes nothing in almost always fits one of three cases, and one test at home separates them. Read a page of the same book aloud to your child. If they understand it when they hear it but not when they read it themselves, the problem is decoding: reading still costs so much effort that nothing is left over for meaning. If they do not understand it either way, the problem is vocabulary and background knowledge rather than reading. If they follow it both ways but cannot say what happened two pages back, they have stopped noticing when the text stopped making sense. Reading more, on its own, fixes none of the three.',
    intro: [
      'Your child can read every word on the page but does not understand what they just read. For a parent this is more unsettling than a child who cannot read at all, because there is nothing visible to point at.',
      'It is also extremely common, and the usual response — more reading practice, plus a stack of comprehension worksheets — is often why it persists for years. Both are reasonable things to try. Neither works unless you know which of three quite different problems you are looking at.',
    ],
    sections: [
      {
        heading: 'Reading is two separate skills multiplied together',
        body: [
          'Reading comprehension is the product of two independent abilities: recognising the words on the page, and understanding language when you hear it spoken. The important word is **product**.',
          'Multiplied, not added. A child who decodes perfectly but has thin vocabulary comprehends very little. So does a child with rich spoken language who is still labouring over every word. Strength in one does not compensate for weakness in the other — which is exactly why "she reads so fluently" and "she has no idea what she read" sit together so comfortably.',
          'Teachers have a name for the fluent-sounding version: barking at print. The performance is convincing and the meaning never arrives.',
        ],
      },
      {
        heading: 'The five-minute test that tells you which problem you have',
        body: [
          'Do this tonight, using a book your child is currently reading rather than an easier one.',
        ],
        bullets: [
          '**Have them read a page aloud, then retell it.** Not "did you like it" — "tell me what happened". Note how much actually comes back.',
          '**Now you read the next page aloud to them,** at a normal pace, and ask for the same retell. This is the whole diagnostic: you have removed the decoding load and left the comprehension.',
          '**While they read, time thirty seconds and count the words.** You are looking less for a number than for whether the reading sounds effortful — word by word, flat, with frequent restarts.',
        ],
        after: [
          'Clearly better on the listening version means decoding is the bottleneck. Equally poor both ways means language comprehension is. Fine both ways, but nothing retained across pages, is the third case.',
          'One caveat on reading speed: the published words-per-minute benchmarks come from contexts where English is the first language at home. A child in an English-medium school in Hyderabad who speaks Telugu, Hindi or Urdu at home will often sit below them and be completely typical. Judge by how the reading sounds, not by a number off the internet.',
        ],
      },
      {
        heading: 'Case one: they understand it when you read it aloud',
        body: [
          'This is the most common case by a wide margin, and it is a fluency problem wearing a comprehension mask.',
          'Working memory is finite. A child spending most of theirs converting letters to sounds and holding them long enough to blend has very little left to build meaning with. The sentence is decoded and gone before it can be understood. Nothing is wrong with their comprehension — they never got the chance to use it.',
          'This is also why [starting phonics at the right time](/resources/what-age-should-a-child-start-phonics) matters. A child pushed into reading before they can reliably hear the separate sounds inside a spoken word arrives at this exact problem almost by default.',
        ],
        bullets: [
          '**Drop the book level, deliberately.** It feels like going backwards and it is the fastest way forward. A child needs text where they recognise about 95 per cent of the words instantly before meaning has room to happen.',
          '**Re-read the same short passage three or four times.** [Repeated reading](https://www.readingrockets.org/topics/fluency) is the best-evidenced fluency intervention there is. The third pass is usually where the meaning appears — and the child hears themselves sound fluent, which matters more than it should.',
          '**Keep it aloud, not silent.** Silent practice hides exactly the information you need. You cannot hear a child guessing.',
          '**If the decoding is inaccurate rather than merely slow, go back to phonics.** Slow but correct is a fluency issue. Wrong words, dropped endings and guessing from the first letter or the picture is a decoding issue, and more reading practice will entrench it. The fix is [systematic phonics](https://www.readingrockets.org/topics/phonics-and-decoding) taught in a deliberate sound order — which is what our [six-level phonics pathway](/junior-skills/phonics) is built around.',
        ],
      },
      {
        heading: 'Case two: they do not understand it either way',
        body: [
          'Here reading is not the problem at all, and this is the case most often mishandled.',
          'Comprehension is not a general-purpose skill that can be drilled in isolation. It rests almost entirely on [vocabulary and background knowledge](https://www.readingrockets.org/topics/comprehension) — on knowing enough about the world a text assumes. A child who does not know what a harbour is will not comprehend a paragraph set in one, however many exercises they complete.',
          'In Hyderabad this often has a straightforward explanation. A child in an English-medium school who speaks Telugu, Hindi or Urdu at home may decode English accurately while carrying a narrower English vocabulary, and far fewer English idioms, than the textbook assumes. That is a vocabulary gap on an ordinary developmental path, not a reading disorder, and exposure closes it.',
        ],
        bullets: [
          '**Read aloud to them, above their own reading level, fifteen minutes a day.** This is the highest-yield item on this entire page. Books they cannot yet read alone are where richer vocabulary and sentence structure come from.',
          '**Explain words in passing,** in a single clause, then carry on. Do not turn it into a lesson — the momentum of the story is what keeps them there.',
          '**Talk about it afterwards.** Ask what a character should have done instead. Comprehension grows in conversation far more than on paper.',
          '**Expect months, not weeks.** Vocabulary accumulates. Nothing shortcuts it, and anyone selling a shortcut is selling something else.',
        ],
        after: [
          'The uncomfortable corollary: comprehension worksheets mostly **test** comprehension rather than build it. They have a real place later, for exam technique in the senior classes. As a remedy for this, they are close to useless — and a stack of them is the most common way a family spends a year without moving.',
        ],
      },
      {
        heading: 'Case three: they follow both, then lose the thread',
        body: [
          'The smallest group, and the quickest to shift. These children decode fluently, understand the language, and read serenely on past the point where the text stopped making sense to them. Nobody has taught them to notice.',
        ],
        bullets: [
          '**Ask for a one-sentence retell at the end of every page.** Out loud. It forces the check while the page is still fresh.',
          '**Teach the question itself:** "did that make sense?" Model it on your own reading — stop mid-paragraph, say you have lost the thread, go back. Children copy the repair, not the instruction.',
          '**Predict before turning the page.** A child who can say what they expect next has necessarily been tracking the meaning.',
        ],
      },
      {
        heading: 'When this needs someone other than a tutor',
        body: [
          'We teach reading, so read this section as the one where we argue against our own interest.',
          'Two situations call for a professional assessment rather than a class.',
        ],
        bullets: [
          '**Decoding stays slow and effortful after six months or more of genuinely systematic phonics.** Not "reading practice" — systematic, sound-by-sound teaching in a deliberate order. Persistent difficulty at that point warrants an assessment for dyslexia; in India the [Madras Dyslexia Association](https://www.mdachennai.com/) is a sound starting point for finding one. Earlier is far better than later.',
          '**Listening comprehension is behind in the home language too.** If following spoken explanation is hard in Telugu or Hindi as well as in English, the issue is language development rather than reading, and the right person is a speech and language professional.',
        ],
        after: [
          'In both cases an after-school class is the wrong first step, and enrolling in one costs you the months that mattered most. That is worth being told plainly, and most places will not tell you.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should I stop letting my child read on their own?',
        a: 'No. Keep the independent reading, but drop it to a level where they recognise nearly every word, and add fifteen minutes of you reading aloud to them from something harder. The two do different jobs: their own reading builds fluency, yours builds vocabulary.',
      },
      {
        q: 'My child reads fluently in Telugu but not in English. What does that mean?',
        a: 'Usually that decoding is fine and English vocabulary is the gap — the mechanics transferred, the word knowledge has not yet. It is a reassuring sign, because it rules out a general reading difficulty. Read aloud in English daily and expect steady gains over months.',
      },
      {
        q: 'Are comprehension worksheets a waste of time?',
        a: 'As a remedy for this problem, largely yes — they measure comprehension rather than build it. They become genuinely useful later, for exam technique in the senior classes, where the skill being practised is answering questions under time pressure rather than understanding text.',
      },
      {
        q: 'How long does it take to fix?',
        a: 'A fluency bottleneck often shifts noticeably within six to ten weeks of daily repeated reading. A vocabulary gap takes months and improves continuously rather than resolving. Comprehension monitoring is usually the fastest of the three — a few weeks of page-by-page retelling.',
      },
    ],
    related: [
      { label: 'Our six-level phonics pathway', to: '/junior-skills/phonics' },
      { label: 'At what age should a child start phonics?', to: '/resources/what-age-should-a-child-start-phonics' },
      { label: 'Book a free trial class', to: '/book-free-demo' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'scratch-to-python-when-to-move',
    keyword: 'scratch to python',
    title: 'When Should a Child Move From Scratch to Python?',
    seoTitle: 'Scratch to Python: When Should a Child Move? | Brolly Juniors',
    description:
      'Not a question of age. Two gates decide it: can your child build their own Scratch projects without a tutorial, and can they type? Here is how to check both.',
    published: '2026-08-08',
    updated: '2026-08-08',
    readingTime: 8,
    category: 'Coding',
    image: '/images/python.svg',
    imageAlt: 'A code editor window with a friendly python snake',
    quickAnswer:
      'Not at a particular age. Two things decide it, and both need to be true. First, can your child design and build their own Scratch project — not follow a tutorial — using variables, loops and conditions? If they still need step-by-step instructions, moving to Python removes the visual scaffolding without supplying the missing idea. Second, can they type without hunting for keys? Python is typed text, and a child spending their attention on finding the colon has none left for the logic. Most children who clear both gates are somewhere between Class 5 and Class 7, but the age is a consequence, not the reason. Moving too early is the most common reason children give up programming altogether.',
    intro: [
      'Scratch to Python is the transition parents ask about most, usually framed as "when is he ready for real coding". That framing is the first thing worth correcting: Scratch is real coding. The concepts a child uses there — variables, loops, conditionals, events, breaking a problem into parts — are the same concepts, with the typing removed.',
      'It matters for the decision, because it means the question is not whether your child has outgrown a toy. It is whether they have the two specific things Python demands and Scratch does not.',
    ],
    sections: [
      {
        heading: 'Scratch is not a waiting room',
        body: [
          'A child who is genuinely fluent in [Scratch](https://scratch.mit.edu/) — building their own games, using lists, nesting conditions, debugging when something misbehaves — understands more computer science than a child who can type twenty lines of Python copied off a worksheet.',
          'Worth holding onto, because the pressure to switch almost always comes from adults. Python *looks* like programming in a way that coloured blocks do not, so the move feels like progress by itself. Whether it actually is depends entirely on what the child brings with them.',
        ],
      },
      {
        heading: 'The two gates',
        body: ['Both need to be clear. One without the other produces a stalled, discouraged child.'],
        bullets: [
          '**Gate one: they can build their own projects.** Not remix, not follow along. Can they decide to make something, work out which pieces it needs, and get there — with variables holding state, loops repeating work and conditions branching? A child who can do that owns the concepts, and Python becomes new notation for ideas they already have.',
          '**Gate two: they can type.** Python is typed text with punctuation that matters. A child hunting for the colon, the underscore, the bracket is spending their whole working memory on transcription, with nothing left for the actual problem. This is the gate that gets skipped, and it is the more decisive of the two.',
        ],
        after: [
          'Gate two has a purely mechanical fix: ten minutes of typing practice a day for a few weeks. It is dull, and it is worth it. A child who types comfortably at around twenty words a minute, knowing where the symbols live without looking down, has a completely different first month in Python from one who does not.',
        ],
      },
      {
        heading: 'A five-minute test at home',
        body: [
          'Ask your child to open one of their own Scratch projects and explain a loop that uses a variable — a score going up, a countdown, a repeat that stops on a condition.',
          'Listen to how the explanation comes out. "It adds one each time round, and when it gets to ten it stops" is a child ready to move. "I dragged that block there and it worked" is a child who should stay in Scratch a while longer, building things without a tutorial until the narration arrives.',
          'This is [the reading comprehension test](/resources/child-can-read-but-does-not-understand) in a different costume. You are checking whether the underlying idea belongs to the child, or whether the tool has been quietly carrying it for them.',
        ],
      },
      {
        heading: 'Signs to wait',
        body: ['Any one of these is a reason to give it another few months.'],
        bullets: [
          '**They still need a tutorial for everything.** The concepts have not transferred yet, and Python will not transfer them.',
          '**They cannot explain a variable in their own words.** Not the textbook definition — what it is doing in their own project.',
          '**Two-finger typing.** Fix this first. It is the cheapest problem on the list and the one that most reliably ruins the first month.',
          '**You want it more than they do.** This is the strongest single predictor of a child abandoning programming, and no curriculum survives it. A child happily making games in Scratch is not behind anyone.',
        ],
      },
      {
        heading: 'Do not make it a hard switch',
        body: [
          'The worst version of this transition is closing Scratch on Friday and opening a Python editor on Monday.',
          'Be clear-eyed about the trade: the first weeks of Python are objectively less rewarding than Scratch. More typing, less happening on screen, and errors that stop everything over a missing bracket. A child who has just given up something they were good at experiences that as a punishment.',
        ],
        bullets: [
          '**Let them overlap.** Keep Scratch for creative projects while Python starts on small self-contained logic — a dice game, a number guesser, a quiz.',
          '**Start with visible output.** [Python turtle graphics](https://docs.python.org/3/library/turtle.html) draws shapes from real typed code, which keeps the reward of seeing something happen while the syntax becomes ordinary.',
          '**Remove setup friction.** If running code means installing three things first, that is exactly where the enthusiasm goes. Start somewhere it runs in one click.',
          '**Say the cost out loud.** Tell them the first month will feel slower than Scratch and that this is normal. Children handle a difficulty they were warned about far better than one that ambushes them.',
        ],
        after: [
          'The [Raspberry Pi Foundation project library](https://projects.raspberrypi.org/en/) is a good free source of first Python projects, and it is structured so a child can work through it largely unaided.',
        ],
      },
      {
        heading: 'If they are happy in Scratch, leave them there',
        body: [
          'We teach Python, so read this as the paragraph that costs us something.',
          'There is no advantage to starting Python at eight rather than eleven. Nothing compounds in between. A child who spends another year building increasingly ambitious Scratch projects and moves at Class 6 will be ahead, within a term, of one who was pushed early, struggled, and quietly concluded that coding is not for them.',
          'The only real deadline is that Classes 6 to 10 leave plenty of room — which is why [our Python pathway](/python-for-kids) begins there, and treats typing and project design as part of the work rather than assuming both.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Scratch a waste of time then?',
        a: 'The opposite. Scratch teaches the concepts that make Python learnable, without the typing and punctuation getting in the way. Time spent building original Scratch projects is the best possible preparation. Time spent following Scratch tutorials is not, which is a different problem.',
      },
      {
        q: 'What age do most children make the move?',
        a: 'Usually somewhere between Class 5 and Class 7. Treat that as a description of when the two gates tend to be clear, not as a target. A confident Class 4 child who builds their own projects and types well is more ready than a Class 7 child who does neither.',
      },
      {
        q: 'Does my child really need to learn typing first?',
        a: 'It is the highest-return few weeks you will spend on this. Python punishes imprecise typing with errors that stop the program, and a child searching the keyboard for a colon has no attention left for the logic. Ten minutes a day for three or four weeks is usually enough.',
      },
      {
        q: 'Should they finish Scratch before starting Python?',
        a: 'There is no finishing Scratch — it scales further than most people realise. The signal is not completion but independence: original projects, built without instructions, that use variables and conditions on purpose. Once that is happening consistently, the move is available whenever the child wants it.',
      },
    ],
    related: [
      { label: 'Python for Kids — Classes 6 to 10', to: '/python-for-kids' },
      { label: 'Python projects for Class 8 students', to: '/resources/python-projects-for-class-8-students' },
      { label: 'Should my child learn AI or coding first?', to: '/resources/should-my-child-learn-ai-or-coding-first' },
    ],
  },
];

export function articlePath(slug) {
  return `/resources/${slug}`;
}

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
