/* Programmes — the widest menu, and the one that carries the site's core offer.
 *
 * Five of these topics already had pages before the catalogue existed and are
 * linked, not regenerated: AI, Python, Digital Skills, Abacus, Vedic Maths,
 * Phonics and Public Speaking. Everything else is owned here.
 *
 * Note where Telugu and English appear twice across the site. The programme
 * pages teach the language as a skill — speaking, reading, expression. The
 * tuition pages of the same name support the school syllabus and the exam.
 * They are deliberately written to answer different searches; see
 * data/catalog/tuitions.js.
 */

export const programmes = {
  key: 'programmes',
  label: 'Programs',
  base: '/programs',
  hubPath: '/programs',
  menuTitle: 'Explore Programs',
  groups: [
    {
      id: 'ai-and-technology',
      title: 'AI & Future Technology',
      icon: '🤖',
      blurb: 'Understand the tools that will shape the work your child grows into.',
      items: [
        { name: 'AI', href: '/ai-for-kids', note: 'Classes 6–10' },
        { name: 'Python', href: '/python-for-kids', note: 'Classes 6–10' },
        {
          slug: 'coding',
          name: 'Coding',
          icon: '💻',
          summary: 'Blocks to real typed code, one honest step at a time.',
          seo: {
            title: 'Coding Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Coding classes for children in Hyderabad, ages 7–14. Start with blocks, finish typing real code. Batches of 8, a working project every month. Free trial.',
            keyword: 'coding classes for kids in hyderabad',
            crumb: 'Coding',
          },
          page: {
            eyebrow: 'Coding · Ages 7–14',
            title: 'Coding classes for kids in Hyderabad that end with real, typed code.',
            subtitle:
              'A four-stage path from drag-and-drop blocks to a text editor, so a child never has to unlearn a toy version of programming.',
            chips: [
              { strong: 'Ages 7–14', span: 'Age range' },
              { strong: '4 stages', span: 'Blocks to text' },
              { strong: 'Weekly', span: 'Project cadence' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs coding classes for kids in Hyderabad for ages 7 to 14. Children begin with block-based programming to learn sequence, loops and conditions without fighting syntax, then move to typed code in Python. Every stage ends with a project the child can open, change and show at home.',
            curriculum: {
              eyebrow: 'Stage-wise path',
              title: 'Four stages, blocks to a text editor',
              lead: 'Each stage teaches one new way of thinking, not one new tool. The tool changes only when the thinking is already there.',
              stages: [
                {
                  tag: 'Stage 1',
                  icon: '🧱',
                  title: 'Sequence & loops in blocks',
                  text: 'Instructions run in order, and a loop is just a way of saying "again" without writing it twice.',
                  bullets: ['Step-by-step sequences', 'Repeat and count loops', 'First animation and first game'],
                  outcome: 'Builds a working animation from a blank canvas.',
                },
                {
                  tag: 'Stage 2',
                  icon: '🔀',
                  title: 'Conditions, events & variables',
                  text: 'Programs stop being a straight line and start reacting to what the player does.',
                  bullets: ['If / else decisions', 'Key and click events', 'Score, lives and other variables'],
                  outcome: 'Builds a game that keeps score and can be lost.',
                },
                {
                  tag: 'Stage 3',
                  icon: '⌨️',
                  title: 'First typed code',
                  text: 'The same ideas, now written out. Children meet their first error message and learn it is information, not failure.',
                  bullets: ['print, input and variables in Python', 'Reading an error and fixing it', 'Indentation and why it matters'],
                  outcome: 'Writes and debugs a 20-line program unaided.',
                },
                {
                  tag: 'Stage 4',
                  icon: '🛠️',
                  title: 'Functions & a real project',
                  text: 'Code gets organised into reusable pieces, and the child builds something they chose themselves.',
                  bullets: ['Functions and parameters', 'Lists and simple data', 'A self-chosen capstone project'],
                  outcome: 'Ships a project they can explain line by line.',
                },
              ],
            },
            sections: [
              {
                title: 'Why blocks first, and why not for long',
                text: 'Blocks remove typing so a seven-year-old can concentrate on the logic. But a child who only ever drags blocks believes programming is a puzzle game. We move to typed code as soon as the logic is secure, usually within two terms, so the transition happens while the ideas are still fresh.',
                bullets: [
                  'Logic taught before syntax, never instead of it',
                  'The same project rebuilt in text to show they are the same thing',
                  'Typing practice built into sessions, not set as homework',
                  'Python chosen because it is the language they will meet again in school',
                ],
              },
              {
                title: 'What a session looks like',
                text: 'Ten minutes reviewing last week, thirty minutes building, and the last ten minutes showing the batch what broke and how it was fixed. Children explain their own bugs out loud, which is the fastest way we know to make debugging feel ordinary rather than shameful.',
              },
            ],
            faqTitle: 'Coding classes for kids: frequently asked questions',
            faqs: [
              {
                q: 'What are coding classes for kids?',
                a: 'Coding classes for kids teach children how to give clear, step-by-step instructions to a computer. Children learn sequencing, logic, loops, conditions and problem solving through guided activities and small projects that suit their age.',
              },
              {
                q: 'What is the best age to start coding?',
                a: 'There is no single best age. Children can start when they can follow simple instructions, recognise patterns and stay focused for a short activity. Younger children usually start with block-based visual coding, while older children move towards typed programming.',
              },
              {
                q: 'Does my child need previous coding experience?',
                a: 'No. Children can join as complete beginners. The starting level is decided by the child’s age, reading comfort and previous exposure, not by a test.',
              },
              {
                q: 'Why should kids learn coding?',
                a: 'Coding gives children practice in ordering steps, breaking problems into smaller parts, spotting mistakes and creating something of their own. These are useful thinking habits beyond the computer as well.',
              },
              {
                q: 'What will children learn in coding classes?',
                a: 'What coding is, algorithms and sequencing, events, loops and conditions, variables and functions, debugging, and how to plan and build a small project. Topics depend on the child’s age and level.',
              },
              {
                q: 'What programming languages can kids learn?',
                a: 'Most children begin with block-based visual coding and move to text-based programming as their reading and typing improve. The specific tools vary with the child’s age and level, so ask which the current batch uses.',
              },
              {
                q: 'Is this the same as medical coding?',
                a: 'No. Searching for coding classes in Hyderabad returns a great many medical billing and coding institutes. This is computer programming for school-age children.',
              },
              {
                q: 'Can school students learn coding?',
                a: 'Yes. Sessions are activity-based and kept short enough to fit around school work.',
              },
              {
                q: 'Are coding classes available online?',
                a: 'Learning modes change from batch to batch. Contact us to check whether an online coding batch is currently running.',
              },
              {
                q: 'What is the coding course fee in Hyderabad?',
                a: 'Fees vary with the child’s age, level, programme structure, learning mode and duration, so we share current fees directly rather than publishing one figure.',
              },
              {
                q: 'How long does it take for kids to learn coding?',
                a: 'It depends on the child’s age, starting level and practice. Children usually understand basic sequencing quite early, while loops, conditions and project building take longer and improve with regular practice.',
              },
              {
                q: 'What projects can kids build?',
                a: 'Interactive stories, simple games, quiz games, animations, a basic calculator and small problem-solving projects. Projects are matched to the child’s level.',
              },
              {
                q: 'How often should children practise coding?',
                a: 'Short, regular practice usually works better than long occasional sessions. Even a small amount between classes helps children remember what they learned.',
              },
              {
                q: 'How do I choose the right coding class for my child?',
                a: 'Check whether the level suits your child’s age, how much time is spent actually coding, what projects are built, how mistakes are handled, batch size, fees and how progress is shared. A trial makes this easier to judge.',
              },
              {
                q: 'How can I book a free coding trial?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. We will confirm a suitable slot.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'robotics',
          name: 'Robotics',
          icon: '🦾',
          summary: 'Build it, wire it, program it, watch it move.',
          seo: {
            title: 'Robotics Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Hands-on robotics classes for children in Hyderabad, ages 8–15. Build, wire and program working robots with sensors and motors. Small batches. Free trial.',
            keyword: 'robotics classes for kids in hyderabad',
            crumb: 'Robotics',
          },
          page: {
            eyebrow: 'Robotics · Ages 8–15',
            title: 'Robotics classes for kids in Hyderabad, where children build the thing that moves.',
            subtitle:
              'Structure, motion, sensing and control — taught on real hardware, so a child sees code change something physical in the room.',
            chips: [
              { strong: 'Ages 8–15', span: 'Age range' },
              { strong: 'Hands-on', span: 'Every session' },
              { strong: '4 stages', span: 'Build to autonomy' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs robotics classes for kids in Hyderabad for ages 8 to 15. Children build a chassis, attach motors and sensors, and write the code that decides how the robot responds to what it detects. Kits are provided in the centre and every stage finishes with a robot that completes a task.',
            curriculum: {
              eyebrow: 'Stage-wise curriculum',
              title: 'From a bolted chassis to a robot that decides',
              lead: 'Mechanical first, electrical second, code third — the order in which a robot actually fails, and therefore the order in which it should be understood.',
              stages: [
                {
                  tag: 'Stage 1',
                  icon: '🔩',
                  title: 'Structure & motion',
                  text: 'Before anything is powered, children learn why a robot falls over and what a gear actually does.',
                  bullets: ['Chassis, joints and stability', 'Gears, torque and speed trade-offs', 'Building to a specification'],
                  outcome: 'Assembles a stable driving base from a plan.',
                },
                {
                  tag: 'Stage 2',
                  icon: '⚡',
                  title: 'Motors & circuits',
                  text: 'Power, ground and signal. Children wire their own build and find their own loose connection.',
                  bullets: ['Motor drivers and power safety', 'Reading a simple circuit diagram', 'Systematic fault-finding'],
                  outcome: 'Wires and drives the robot under manual control.',
                },
                {
                  tag: 'Stage 3',
                  icon: '📡',
                  title: 'Sensors & feedback',
                  text: 'A robot that cannot sense is only a toy car. Ultrasonic, line and light sensors turn it into a machine that reacts.',
                  bullets: ['Ultrasonic distance and obstacle stops', 'Line following with reflectance sensors', 'Calibrating a noisy reading'],
                  outcome: 'Robot follows a line and stops before a wall.',
                },
                {
                  tag: 'Stage 4',
                  icon: '🧭',
                  title: 'Autonomy & challenge builds',
                  text: 'Sensing plus decision-making. Children program a robot to finish a course with nobody touching it.',
                  bullets: ['Decision logic from sensor input', 'Timing, loops and state', 'Timed challenge run'],
                  outcome: 'Completes an obstacle course autonomously.',
                },
              ],
            },
            sections: [
              {
                title: 'Hardware that is meant to be taken apart',
                text: 'Children work with reusable kits — motors, controllers, distance and line sensors — that are rebuilt every term. Nothing is glued and nothing is precious, so a child is free to dismantle a working robot to find out why it works.',
                bullets: [
                  'Kits provided; nothing to buy before the first class',
                  'Two children per kit at most, so both do the building',
                  'Low-voltage components only, checked before every session',
                  'Code written in the same Python they use in coding class',
                ],
              },
              {
                title: 'Why the robot is allowed to fail',
                text: 'A robot that works first time teaches very little. Sessions build in a fault — a reversed motor, a sensor reading in the wrong units — and the child diagnoses it. Educators are told not to fix it for them, which is slower in the session and considerably faster over a term.',
              },
            ],
            faqTitle: 'Robotics classes for kids: frequently asked questions',
            faqs: [
              {
                q: 'What are robotics classes for kids?',
                a: 'Robotics classes for kids teach children how a robot is built and controlled. Children put parts together, connect motors and sensors, write simple instructions to make the robot act, then test it and fix what does not work.',
              },
              {
                q: 'What is the best age to start robotics?',
                a: 'There is no single best age. Children can start once they can handle small parts safely, follow a build step by step and stay with an activity. Younger children begin with building and movement; older children add sensors and programming.',
              },
              {
                q: 'Does my child need previous robotics experience?',
                a: 'No. Children can join as complete beginners. The starting level is decided from the child’s age, motor skills and any previous building or coding exposure.',
              },
              {
                q: 'Why should kids learn robotics?',
                a: 'Robotics gives children a physical result for an idea. They plan, build, test and improve something they can hold, which builds problem solving, logical thinking and patience alongside science and technology concepts.',
              },
              {
                q: 'What will children learn in robotics classes?',
                a: 'Robot parts and mechanisms, building and structure, sensors and inputs, motors and movement, programming logic, and how to test and debug a project. Topics depend on the child’s age and level.',
              },
              {
                q: 'Do kids learn coding in robotics classes?',
                a: 'Yes, at the stage where the robot needs instructions. Younger children usually use block-based programming; older children may type code. The coding is applied to the robot rather than taught separately.',
              },
              {
                q: 'What robotics projects can kids build?',
                a: 'A moving robot, an obstacle-avoiding robot, a line-following robot, a smart traffic light, a robotic arm and simple automation projects. Projects are matched to the child’s level.',
              },
              {
                q: 'What robotics kits are used?',
                a: 'Kits and components vary with the child’s age, learning level and project. Ask us which kit the current batch uses and whether it is provided in class or purchased separately.',
              },
              {
                q: 'Are robotics classes available online?',
                a: 'Robotics needs physical parts, so an online mode depends on the current batch and on how materials are arranged. Contact us before assuming an online option.',
              },
              {
                q: 'Are classroom robotics classes available in Hyderabad?',
                a: 'Yes. Sessions run at the Brolly Juniors centre at Nizampet X Roads, with kits provided in class. Contact us to confirm which batches are currently running.',
              },
              {
                q: 'What is the robotics course fee in Hyderabad?',
                a: 'Fees vary with the child’s age, level, programme structure, learning mode and materials, so we share current fees directly — including whether kit costs are separate.',
              },
              {
                q: 'How long does it take to learn robotics?',
                a: 'It depends on the child’s age, starting level and practice. Children usually build something working quite early, while sensors, programming logic and independent project design take longer.',
              },
              {
                q: 'Can school students join robotics classes?',
                a: 'Yes. Sessions are activity-based, so they work well as a weekly break from written study.',
              },
              {
                q: 'How do I choose the right robotics class for my child?',
                a: 'Check how much of the session the child spends building rather than watching, how many children share one kit, what happens when a robot fails, what projects are completed, batch size, fees and material costs. A trial makes this easier to judge.',
              },
              {
                q: 'How can I book a free robotics trial?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. We will confirm a suitable slot.',
              },
            ],
            cta: 'family',
          },
        },
        { name: 'Digital Skills', href: '/junior-skills/digital-literacy', note: 'Classes 1–5' },
      ],
    },
    {
      id: 'maths-and-brain',
      title: 'Maths & Brain Skills',
      icon: '🧠',
      blurb: 'Number confidence, focus and the habit of thinking a problem through.',
      items: [
        { name: 'Abacus', href: '/junior-skills/abacus', note: 'Ages 5–11' },
        { name: 'Vedic Maths', href: '/junior-skills/vedic-maths', note: 'Ages 8–14' },
        {
          slug: 'mental-maths',
          name: 'Mental Maths',
          icon: '🔢',
          summary: 'Answers in the head, with a method behind them.',
          seo: {
            title: 'Mental Maths Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Mental maths classes in Hyderabad for ages 7–14. Number bonds, place-value strategies and estimation taught as methods, not memory tricks. Free trial class.',
            keyword: 'mental maths classes for kids in hyderabad',
            crumb: 'Mental Maths',
          },
          page: {
            eyebrow: 'Mental Maths · Ages 7–14',
            title: 'Mental maths classes for kids in Hyderabad that replace guessing with method.',
            subtitle:
              'Number bonds, place-value strategies, estimation and checking — so a child can answer quickly and still say how they got there.',
            chips: [
              { strong: 'Ages 7–14', span: 'Age range' },
              { strong: '4 levels', span: 'Complete pathway' },
              { strong: 'No devices', span: 'Paper and speech only' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs mental maths classes in Hyderabad for ages 7 to 14. Children learn number bonds, place-value splitting, compensation and estimation as named strategies they can choose between, then practise until the choice is automatic. Speed is the result of method here, never the starting point.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, from number bonds to estimation',
              lead: 'Each level adds one family of strategies and keeps every earlier one in weekly circulation.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '🧮',
                  title: 'Number bonds & instant recall',
                  text: 'The facts that everything else stands on, learned to the point of not needing thought.',
                  bullets: ['Bonds to 10, 20 and 100', 'Doubles and near doubles', 'Times tables through patterns'],
                  outcome: 'Recalls bonds and tables without counting.',
                },
                {
                  tag: 'Level 2',
                  icon: '✂️',
                  title: 'Splitting & compensation',
                  text: 'Big numbers become easy ones. 47 + 38 turns into 47 + 40 − 2 and the child says why.',
                  bullets: ['Place-value splitting', 'Rounding then compensating', 'Choosing the easier route'],
                  outcome: 'Adds and subtracts two-digit numbers mentally.',
                },
                {
                  tag: 'Level 3',
                  icon: '✖️',
                  title: 'Multiplication & division strategies',
                  text: 'Doubling, halving and factor pairs turn awkward multiplications into ones already known.',
                  bullets: ['Double and halve', 'Multiplying by 5, 9, 11 and 25', 'Division as the missing factor'],
                  outcome: 'Handles two-digit multiplication in the head.',
                },
                {
                  tag: 'Level 4',
                  icon: '🎯',
                  title: 'Estimation, checking & word problems',
                  text: 'Knowing roughly what the answer should be is what catches a mistake before it is written down.',
                  bullets: ['Estimating before calculating', 'Checking by inverse operation', 'Extracting the sum from a word problem'],
                  outcome: 'Estimates first and spots their own errors.',
                },
              ],
            },
            sections: [
              {
                title: 'Method first, speed second',
                text: 'A child who is fast without method is fast until the numbers get bigger. Every strategy here is named, explained out loud and written on the board, so a child can tell you which one they used and why they chose it. Timed practice starts only once the method is secure.',
                bullets: [
                  'Every strategy taught with a name the child can say',
                  'Oral explanation expected before written speed work',
                  'Weekly mixed practice so old strategies stay live',
                  'Runs alongside school maths rather than repeating it',
                ],
              },
              {
                title: 'How this differs from abacus',
                text: 'Abacus builds a visual model of number that a child pictures and manipulates. Mental maths teaches flexible strategies in language. They complement each other well, but they are not the same class, and a child who has done abacus still benefits from being taught to choose a route deliberately.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'chess',
          name: 'Chess',
          icon: '♟️',
          summary: 'Patience, planning and the nerve to see a move through.',
          seo: {
            title: 'Chess Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Chess classes for children in Hyderabad, ages 6–14. Openings, tactics, endgames and tournament play taught in small coached batches. Book a free trial.',
            keyword: 'chess classes for kids in hyderabad',
            crumb: 'Chess',
          },
          page: {
            eyebrow: 'Chess · Ages 6–14',
            title: 'Chess classes for kids in Hyderabad that teach children to think before they move.',
            subtitle:
              'From how the pieces move to real tournament play — with tactics drilled, games annotated and losses reviewed rather than brushed past.',
            chips: [
              { strong: 'Ages 6–14', span: 'Age range' },
              { strong: '4 levels', span: 'Beginner to tournament' },
              { strong: 'Coached play', span: 'Every session' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs chess classes for kids in Hyderabad for ages 6 to 14. Children learn piece movement and checkmate patterns, then tactics, opening principles and endgame technique, playing coached games every session. Every batch ends the term with an internal tournament and each child leaves with annotated games.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first move to first tournament',
              lead: 'Tactics are drilled, games are played and games are reviewed — in that order, every single week.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '♙',
                  title: 'Pieces, rules & first checkmates',
                  text: 'How everything moves, plus the three checkmates a beginner must be able to deliver.',
                  bullets: ['Movement, capture, check and stalemate', 'Castling, en passant, promotion', 'Queen, rook and two-rook mates'],
                  outcome: 'Finishes a won game instead of drawing it.',
                },
                {
                  tag: 'Level 2',
                  icon: '⚔️',
                  title: 'Tactics & pattern recognition',
                  text: 'The shapes that win material. Children start seeing them on the board instead of after the game.',
                  bullets: ['Forks, pins and skewers', 'Discovered and double attack', 'Daily tactic puzzles'],
                  outcome: 'Spots a one-move tactic reliably under time.',
                },
                {
                  tag: 'Level 3',
                  icon: '🏗️',
                  title: 'Opening principles & planning',
                  text: 'Not memorised lines — the three ideas that make an opening good, and how to make a plan from a position.',
                  bullets: ['Centre, development, king safety', 'Reading pawn structure', 'Making and following a plan'],
                  outcome: 'Reaches a playable middlegame without help.',
                },
                {
                  tag: 'Level 4',
                  icon: '🏆',
                  title: 'Endgames & tournament play',
                  text: 'Technique for the positions games actually end in, and the discipline of the clock.',
                  bullets: ['King and pawn, opposition, rook endings', 'Clock management and notation', 'Rated internal tournament'],
                  outcome: 'Plays a full timed, notated tournament game.',
                },
              ],
            },
            sections: [
              {
                title: 'Every child reviews their own losses',
                text: 'The habit that separates a child who improves from one who plateaus is going back through a lost game and finding the move where it turned. Coaches sit with each child on one game a fortnight and ask questions rather than give verdicts.',
                bullets: [
                  'Notation taught early so games can be replayed',
                  'One coached game review per child per fortnight',
                  'Tactic puzzles set as five-minute daily practice',
                  'Internal tournament each term, with pairings and results',
                ],
              },
              {
                title: 'What chess actually transfers',
                text: 'We do not claim chess raises marks. What it reliably builds is the tolerance to sit with a hard position, check a plan before committing to it, and accept a loss as information. Those are the habits families tell us they notice first, usually at the homework table.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'brain-games',
          name: 'Brain Games',
          icon: '🧩',
          summary: 'Puzzles, memory and logic — thinking as something you practise.',
          seo: {
            title: 'Brain Games Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Brain games classes in Hyderabad for ages 5–12. Memory, logic puzzles, spatial reasoning and lateral thinking in weekly guided sessions. Free trial class.',
            keyword: 'brain games classes for kids in hyderabad',
            crumb: 'Brain Games',
          },
          page: {
            eyebrow: 'Brain Games · Ages 5–12',
            title: 'Brain games classes in Hyderabad that make thinking something you practise.',
            subtitle:
              'Memory, logic, sequencing and spatial reasoning — puzzles chosen for what they train, not just for what keeps a room quiet.',
            chips: [
              { strong: 'Ages 5–12', span: 'Age range' },
              { strong: '4 strands', span: 'Rotating weekly' },
              { strong: 'Screen-free', span: 'Physical puzzles' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs brain games classes in Hyderabad for ages 5 to 12. Sessions rotate through four strands — memory, logic, spatial reasoning and lateral thinking — using physical puzzles, card games and reasoning challenges. Children are asked to explain their reasoning aloud, which is where most of the learning happens.',
            curriculum: {
              eyebrow: 'The four strands',
              title: 'Four strands, rotating every month',
              lead: 'Rather than a ladder, this programme cycles: each strand returns at a harder level so nothing is trained once and dropped.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🧠',
                  title: 'Memory & attention',
                  text: 'Holding more in mind at once, and noticing what changed.',
                  bullets: ['Sequence and pattern recall', 'Spot-the-difference and detail hunts', 'Chunking as a memory strategy'],
                  outcome: 'Recalls longer sequences using a named strategy.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🔍',
                  title: 'Logic & deduction',
                  text: 'Working out what must be true from what is given — grid puzzles, riddles and truth-teller problems.',
                  bullets: ['Logic grids and elimination', 'If-then reasoning', 'Explaining why an answer must be right'],
                  outcome: 'Solves a logic grid and justifies each step.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🧊',
                  title: 'Spatial & visual reasoning',
                  text: 'Turning shapes in the head — the skill behind geometry, maps and later, design.',
                  bullets: ['Tangrams and dissection puzzles', 'Mental rotation and nets of solids', 'Mazes and route planning'],
                  outcome: 'Predicts a folded shape before building it.',
                },
                {
                  tag: 'Strand 4',
                  icon: '💡',
                  title: 'Lateral thinking & strategy',
                  text: 'Problems that punish the first obvious idea, plus two-player strategy games.',
                  bullets: ['Open-ended puzzle challenges', 'Strategy games with thinking time', 'Working backwards from the goal'],
                  outcome: 'Tries a second approach when the first stalls.',
                },
              ],
            },
            sections: [
              {
                title: 'Why the explaining matters more than the solving',
                text: 'A child who solves a puzzle silently has had a nice afternoon. A child who has to say how they solved it has to make their own thinking visible, and that is the part that transfers to schoolwork. Every session ends with two or three children walking the batch through a solution.',
                bullets: [
                  'Puzzles chosen for the skill they train, not novelty',
                  'Reasoning explained aloud in every session',
                  'Difficulty set per child, so nobody coasts or drowns',
                  'No screens — physical puzzles and card decks throughout',
                ],
              },
              {
                title: 'Who this suits',
                text: 'It works well as a first Brolly Juniors class for a younger child who is not ready to commit to a year-long pathway, and as a companion class for children already doing abacus or chess. It is deliberately low-pressure: there are no levels to fail and no assessment to sit.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'language-and-communication',
      title: 'Language & Communication',
      icon: '🗣️',
      blurb: 'Reading, speaking and being understood — in more than one language.',
      items: [
        { name: 'Phonics & Reading', href: '/junior-skills/phonics', note: 'Ages 4–9' },
        { name: 'Public Speaking', href: '/junior-skills/public-speaking', note: 'Classes 1–5' },
        {
          slug: 'spoken-english',
          name: 'Spoken English',
          icon: '💬',
          summary: 'Fluency built from real conversation, not memorised paragraphs.',
          seo: {
            title: 'Spoken English Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Spoken English classes for children in Hyderabad, ages 6–14. Conversation-led fluency, pronunciation and everyday vocabulary in batches of 8. Free trial.',
            keyword: 'spoken english classes for kids in hyderabad',
            crumb: 'Spoken English',
          },
          page: {
            eyebrow: 'Spoken English · Ages 6–14',
            title: 'Spoken English classes in Hyderabad built on conversation, not recitation.',
            subtitle:
              'Children talk for most of the session. Vocabulary, sentence patterns and pronunciation are taught in service of that, never as lists to memorise.',
            chips: [
              { strong: 'Ages 6–14', span: 'Age range' },
              { strong: '70%', span: 'Session spent speaking' },
              { strong: '4 levels', span: 'Complete pathway' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs spoken English classes for kids in Hyderabad for ages 6 to 14. Sessions are conversation-led: children describe, ask, disagree and retell in English for most of the hour, with pronunciation and sentence patterns corrected in context. Batches are capped at eight so every child speaks in every session.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, single words to sustained talk',
              lead: 'Each level increases how long a child is expected to hold the floor, and how much of it is unrehearsed.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '🙋',
                  title: 'Everyday phrases & confidence',
                  text: 'Greeting, asking, answering — the sentences a child needs before they need any others.',
                  bullets: ['Introductions and everyday requests', 'Question forms that actually get used', 'Speaking without waiting to be perfect'],
                  outcome: 'Holds a two-minute conversation about themselves.',
                },
                {
                  tag: 'Level 2',
                  icon: '🖼️',
                  title: 'Describing & narrating',
                  text: 'From single sentences to connected ones — describing a picture, retelling what happened.',
                  bullets: ['Adjectives and comparison', 'Past-tense narration', 'Connectives: then, because, so'],
                  outcome: 'Retells an event in order, in five sentences.',
                },
                {
                  tag: 'Level 3',
                  icon: '🗨️',
                  title: 'Opinion & discussion',
                  text: 'Saying what you think, giving a reason, and disagreeing without falling silent.',
                  bullets: ['Stating and supporting an opinion', 'Polite disagreement', 'Asking a follow-up question'],
                  outcome: 'Takes a side in a small-group discussion.',
                },
                {
                  tag: 'Level 4',
                  icon: '🎤',
                  title: 'Fluency & pronunciation polish',
                  text: 'Sounding natural: stress, rhythm and the confidence to speak unrehearsed.',
                  bullets: ['Word and sentence stress', 'Common pronunciation fixes', 'Impromptu one-minute talks'],
                  outcome: 'Speaks for a minute on an unseen topic.',
                },
              ],
            },
            sections: [
              {
                title: 'Correction that does not stop the sentence',
                text: 'Interrupting a hesitant child to fix a tense is the fastest way to make them stop talking. Educators note errors while the child speaks and address them after, as patterns rather than personal mistakes — and only the two or three that matter most that week.',
                bullets: [
                  'Errors collected during, addressed after',
                  'Two or three focus corrections per session, not every slip',
                  'Vocabulary introduced in sentences, never as a list',
                  'Home practice is a five-minute conversation, not a worksheet',
                ],
              },
              {
                title: 'Spoken English or Public Speaking?',
                text: 'Spoken English builds the language itself — the words and structures for ordinary conversation. Public Speaking assumes the language is there and works on delivery to an audience: structure, projection, eye contact and nerves. Children who are quiet in English usually want this class first.',
              },
            ],
            faqTitle: 'Spoken English classes: frequently asked questions',
            faqs: [
              {
                q: 'What are spoken English classes for kids?',
                a: 'They help children practise everyday English, conversation, vocabulary, pronunciation and simple sentence formation through speaking activities. The focus is on talking, not on reading, writing or grammar exercises.',
              },
              {
                q: 'What age can children start spoken English classes?',
                a: 'Often from around age four with greetings, basic words and simple sentences. Activities are adapted to the child’s age and English level rather than fixed by year group.',
              },
              {
                q: 'Are spoken English classes suitable for beginners?',
                a: 'Yes. Beginners start with greetings, a handful of everyday words and one-line answers. Children who understand English but hesitate to speak are very common here, and they usually move quickly.',
              },
              {
                q: 'What do kids learn in spoken English classes?',
                a: 'Greetings, self introduction, everyday sentences, question words, answering questions, vocabulary, pronunciation, sentence formation, conversation, listening, storytelling, role play, picture description and reading aloud.',
              },
              {
                q: 'Do children learn everyday English conversations?',
                a: 'Yes, and it is the main focus. Children practise real situations — at home, at school, with friends, in a shop — so the English they learn is the English they will actually use.',
              },
              {
                q: 'Do classes include vocabulary practice?',
                a: 'Yes. Vocabulary is taught in everyday themes such as family, school, food, animals, colours, places, hobbies and sports, always with a phrase showing how the word is used when speaking.',
              },
              {
                q: 'Do children practise pronunciation?',
                a: 'Yes. Children listen, repeat and read aloud, with gentle correction on words they find difficult. The aim is being clearly understood, not sounding like a native speaker.',
              },
              {
                q: 'Do children practise sentence formation?',
                a: 'Yes, in a simple, practical way. Children learn the subject-verb-object pattern through examples such as “I eat an apple” rather than through grammar rules to memorise.',
              },
              {
                q: 'Can spoken English help children communicate better?',
                a: 'Regular speaking practice can help children express ideas more clearly and answer in full sentences. How much a child gains depends on how often they practise, and we do not promise fluency or a fixed timeline.',
              },
              {
                q: 'Will my child develop a native accent?',
                a: 'No, and that is not the goal. Being clearly understood is. Children are corrected on words that are genuinely hard to follow, not on the way they sound.',
              },
              {
                q: 'What is the difference between spoken English and English classes?',
                a: 'Spoken English focuses on talking in everyday situations. English classes cover reading, writing, spelling, grammar and comprehension as well. If your child reads and writes well but goes quiet when spoken to, spoken English is the better fit.',
              },
              {
                q: 'What is the difference between spoken English and public speaking?',
                a: 'Spoken English is conversation with one or two people in everyday situations. Public speaking is presenting to a group. A child usually needs comfortable conversation first, so spoken English generally comes before public speaking.',
              },
              {
                q: 'How can parents practise spoken English at home?',
                a: 'Use simple English during daily activities, ask questions that need more than a yes or no, learn a few new words together each day, and let your child answer in English without being corrected mid-sentence.',
              },
              {
                q: 'How much do spoken English classes cost?',
                a: 'Fees vary with the child’s age, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
              },
              {
                q: 'How can I book a spoken English trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and how much English they already speak, so the session starts at the right level.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'communication-skills',
          name: 'Communication',
          icon: '🤝',
          summary: 'Listening, explaining and handling a conversation well.',
          seo: {
            title: 'Communication Skills Classes in Hyderabad | Brolly Juniors',
            description:
              'Communication skills classes for children in Hyderabad, ages 8–15. Listening, explaining, group work, body language and handling disagreement. Free trial.',
            keyword: 'communication skills classes in hyderabad',
            crumb: 'Communication',
          },
          page: {
            eyebrow: 'Communication Skills · Ages 8–15',
            title: 'Communication skills classes in Hyderabad for children who need to be understood.',
            subtitle:
              'Listening properly, explaining clearly, reading the room and disagreeing without a row — practised in structured group work every week.',
            chips: [
              { strong: 'Ages 8–15', span: 'Age range' },
              { strong: '4 modules', span: 'Complete pathway' },
              { strong: 'Group work', span: 'Every session' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs communication skills classes in Hyderabad for ages 8 to 15. Children practise active listening, explaining an idea to someone who does not already understand it, working in a group, reading body language, and disagreeing constructively. Every module is assessed by performance in a real task, not a test.',
            curriculum: {
              eyebrow: 'Module-wise curriculum',
              title: 'Four modules, listening to leading a discussion',
              lead: 'Each module gives children a task where the skill is the only way to succeed — you cannot fake having listened.',
              stages: [
                {
                  tag: 'Module 1',
                  icon: '👂',
                  title: 'Listening & responding',
                  text: 'The half of communication most classes skip. Children learn to summarise before replying.',
                  bullets: ['Summarising what was just said', 'Asking a clarifying question', 'Not planning your reply mid-sentence'],
                  outcome: 'Accurately restates a partner’s point.',
                },
                {
                  tag: 'Module 2',
                  icon: '🧾',
                  title: 'Explaining clearly',
                  text: 'Taking something you know and getting it into someone else’s head, in order and without jargon.',
                  bullets: ['Structuring an explanation', 'Checking whether you were understood', 'Using an example that helps'],
                  outcome: 'Teaches a peer a rule they did not know.',
                },
                {
                  tag: 'Module 3',
                  icon: '👥',
                  title: 'Working in a group',
                  text: 'Roles, turn-taking and getting a shared task finished when opinions differ.',
                  bullets: ['Taking and rotating roles', 'Making space for a quieter member', 'Agreeing a decision and moving on'],
                  outcome: 'Completes a group task with a shared output.',
                },
                {
                  tag: 'Module 4',
                  icon: '🕊️',
                  title: 'Body language & disagreement',
                  text: 'What posture and tone say before the words do, and how to hold a position calmly.',
                  bullets: ['Eye contact, posture and tone', 'Disagreeing with the idea, not the person', 'Repairing a conversation that went wrong'],
                  outcome: 'Holds a calm disagreement to a resolution.',
                },
              ],
            },
            sections: [
              {
                title: 'Assessed by task, not by test',
                text: 'You cannot mark listening on paper. Each module ends with a task the child can only complete if the skill is real — teaching a peer something new, running a group to a deadline, or reaching agreement in a structured disagreement. Educators score the task and share the note with families.',
                bullets: [
                  'Every module ends in a performance task',
                  'Feedback given as one strength and one next step',
                  'Mixed-age batches where it helps, so roles genuinely rotate',
                  'Works alongside Spoken English or Public Speaking',
                ],
              },
              {
                title: 'Who tends to benefit most',
                text: 'Children who are articulate one-to-one but disappear in a group, and children who have plenty to say but lose people halfway through saying it. Both are common, both are fixable, and neither is a confidence problem in the way it usually gets described.',
              },
            ],
            faqTitle: 'Communication skills classes: frequently asked questions',
            faqs: [
              {
                q: 'What are communication skills classes for kids?',
                a: 'They help children practise speaking, listening, conversation, expressing ideas, storytelling and simple presenting. The focus is two-way communication, so listening and responding matter as much as speaking.',
              },
              {
                q: 'How is this different from spoken English or public speaking?',
                a: 'Spoken English builds the English language itself. Public speaking is about presenting to an audience. Communication skills is about two-way interaction — listening, responding, asking and taking turns. Children who talk plenty but do not answer the actual question belong here.',
              },
              {
                q: 'What age can children start communication skills classes?',
                a: 'Often from around age four with greetings, simple questions and listening games. Activities are adapted to the child’s age and communication level rather than fixed by year group.',
              },
              {
                q: 'Are communication classes suitable for beginners?',
                a: 'Yes. Beginners start with saying their name, answering easy questions and talking about familiar topics. Children speak to one partner long before any group.',
              },
              {
                q: 'What do kids learn in communication skills classes?',
                a: 'Self introduction, conversation, listening, speaking, vocabulary, question answering, storytelling, picture description, role play, simple presenting, body language, eye contact, idea sharing and group discussion.',
              },
              {
                q: 'Do children learn listening skills?',
                a: 'Yes, and this is what most sets these classes apart. Children practise looking at the speaker, waiting their turn, understanding what was actually asked, and giving a suitable answer rather than a prepared one.',
              },
              {
                q: 'Do children practise speaking?',
                a: 'Yes, in every session — in pairs first, then in small groups. Speaking is half of communication, and it is practised alongside listening rather than on its own.',
              },
              {
                q: 'Do communication classes include storytelling?',
                a: 'Yes. Storytelling gives children practice in speaking, putting ideas in order, vocabulary and describing events — and it gives the listeners something real to listen to and ask about.',
              },
              {
                q: 'Do children learn body language?',
                a: 'Yes: eye contact, facial expression, posture, hand gestures, listening posture and personal space — taught as practical habits rather than fixed rules. Norms differ between families and cultures, and that is respected.',
              },
              {
                q: 'Do children practise presentations?',
                a: 'Yes, at a simple level: presenting a short idea to the group and then taking questions. If your child specifically needs presenting to an audience, public speaking goes further into that.',
              },
              {
                q: 'Can children practise communication through games?',
                a: 'Yes, and it is the main approach used. Role play, listening games, conversation games, show and tell and group activities produce far more real practice than a formal lesson.',
              },
              {
                q: 'Are these classes useful for school?',
                a: 'They can help. School asks children to answer aloud, ask doubts, present ideas and work with classmates, which are the same skills practised here. We do not claim guaranteed improvement in grades.',
              },
              {
                q: 'How can parents improve communication at home?',
                a: 'Talk with your child every day, ask open questions, and listen without interrupting. Letting a child finish their sentence is the single most useful thing a parent can do.',
              },
              {
                q: 'What should parents look for in a communication skills class?',
                a: 'Ask whether listening is actually taught or only speaking — many classes are speaking classes with a different name. Also ask the group size, because two-way practice needs a partner and enough time to take turns.',
              },
              {
                q: 'How can I book a communication skills trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and how they usually are in a group, so the activities are pitched at the right level.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'telugu',
          name: 'Telugu',
          icon: '🪔',
          summary: 'Reading, writing and speaking Telugu with real fluency.',
          seo: {
            title: 'Telugu Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Telugu classes for children in Hyderabad, ages 5–14. Learn the aksharamala, read fluently, write correctly and speak at home with confidence.',
            keyword: 'telugu classes for kids in hyderabad',
            crumb: 'Telugu',
          },
          page: {
            eyebrow: 'Telugu · Ages 5–14',
            title: 'Telugu classes for kids in Hyderabad, for children who understand it but cannot read it.',
            subtitle:
              'From the aksharamala to reading a story aloud — a language pathway for families raising children in English-medium schools.',
            chips: [
              { strong: 'Ages 5–14', span: 'Age range' },
              { strong: '4 levels', span: 'Script to fluency' },
              { strong: 'Spoken + written', span: 'Both taught' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs Telugu classes for kids in Hyderabad for ages 5 to 14. Children learn the aksharamala and gunintalu, build reading fluency, write correctly and grow the vocabulary to hold a conversation at home. Beginners who only understand spoken Telugu are welcome and are the majority of our learners.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first letter to first story',
              lead: 'Script and speech are taught together, because a child who can read but not speak stops using the language the moment class ends.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '🔤',
                  title: 'Aksharamala & sounds',
                  text: 'The vowels and consonants, said aloud and written by hand from the first session.',
                  bullets: ['Achulu and hallulu', 'Correct stroke order', 'Sound-to-letter matching'],
                  outcome: 'Writes and sounds the full aksharamala.',
                },
                {
                  tag: 'Level 2',
                  icon: '🧩',
                  title: 'Gunintalu & first words',
                  text: 'Vowel signs change the syllable, and suddenly whole words can be read.',
                  bullets: ['Gunintalu across consonants', 'Reading two and three-syllable words', 'Everyday vocabulary in sentences'],
                  outcome: 'Reads simple words unaided.',
                },
                {
                  tag: 'Level 3',
                  icon: '📜',
                  title: 'Sentences, vatthulu & writing',
                  text: 'Conjunct consonants and sentence structure — the point where reading becomes fluent rather than laboured.',
                  bullets: ['Vatthulu and conjuncts', 'Sentence structure and simple grammar', 'Guided writing: notes and short paragraphs'],
                  outcome: 'Reads a short passage and writes five sentences.',
                },
                {
                  tag: 'Level 4',
                  icon: '📚',
                  title: 'Reading aloud & conversation',
                  text: 'Stories, padyalu and real conversation, so the language belongs to them outside the classroom.',
                  bullets: ['Reading a story aloud with expression', 'Padyalu and cultural texts', 'Sustained conversation on a topic'],
                  outcome: 'Reads a story aloud and discusses it in Telugu.',
                },
              ],
            },
            sections: [
              {
                title: 'Written for children who hear Telugu but never learned it',
                text: 'Most children who join understand their grandparents perfectly and cannot read a signboard. That is a specific starting point, and the pathway is built for it: comprehension is assumed, script is taught from zero, and nobody is made to feel behind for it.',
                bullets: [
                  'Complete beginners in script are the default, not the exception',
                  'Handwriting practised in class rather than sent home',
                  'Vocabulary drawn from home and city life, not textbook lists',
                  'Separate from school Telugu tuition — see the Tuitions menu',
                ],
              },
              {
                title: 'Language class or tuition?',
                text: 'This is a language programme: fluency, reading and speaking, at the child’s pace. If your child is following the Telugu syllabus at school and needs marks, textbook coverage and exam practice, the Telugu tuition page under Tuitions is the right fit instead.',
              },
            ],
            faqTitle: 'Telugu classes for kids: frequently asked questions',
            faqs: [
              {
                q: 'What are Telugu classes for kids in Hyderabad?',
                a: 'They help children learn Telugu through reading, writing, speaking, vocabulary, grammar, comprehension and age-appropriate language activities. Each skill is taught in small steps and practised through games, stories and conversation.',
              },
              {
                q: 'What age can children start Telugu classes?',
                a: 'Children can start from around age four with letters, sounds and rhymes. Older children start wherever their current level sits, because activities are adapted to the child rather than fixed by age.',
              },
              {
                q: 'Are Telugu classes suitable for beginners?',
                a: 'Yes. Children who cannot read a single Telugu letter are welcome. Beginners start with the vowels and simple sounds, then move to words once the letters feel familiar.',
              },
              {
                q: 'My child speaks Telugu at home but cannot read it. Can they join?',
                a: 'Yes, and this is the most common starting point of all. A child who already speaks Telugu usually moves quickly, because the vocabulary is familiar and only the reading and writing are new.',
              },
              {
                q: 'What will kids learn in Telugu classes?',
                a: 'The aksharamala, letter recognition, word formation, reading, writing, spelling, vocabulary, basic grammar, sentence formation, speaking, listening and comprehension, along with stories, poems and conversation practice.',
              },
              {
                q: 'Do children learn Telugu reading?',
                a: 'Yes. Reading is built in stages: recognising letters, then whole words, then short sentences, then simple stories. Comprehension questions are added once a child reads sentences comfortably.',
              },
              {
                q: 'Do children learn Telugu writing?',
                a: 'Yes. Children practise letter formation and handwriting first, then word writing, spelling and sentence writing. Guided and simple creative writing come later, once the basics are steady.',
              },
              {
                q: 'Do Telugu classes include speaking practice?',
                a: 'Yes, in every session. Children practise everyday conversation, pronunciation, question-and-answer exchanges and storytelling, because a language used out loud is remembered better.',
              },
              {
                q: 'Do kids learn Telugu grammar?',
                a: 'Yes, at a level children can use: nouns, pronouns, verbs, singular and plural, and how a simple Telugu sentence is built. Grammar is taught through examples rather than rules to memorise.',
              },
              {
                q: 'Can Telugu classes help with vocabulary?',
                a: 'Yes. Children build vocabulary in themes such as family, school, food, animals, colours, numbers and nature, so new words connect to things a child already talks about.',
              },
              {
                q: 'Are Telugu classes useful for school students?',
                a: 'Many families find them helpful, because reading fluency, spelling and comprehension are the same skills school Telugu asks for. We do not promise particular marks, but the practice supports what is taught at school.',
              },
              {
                q: 'Is Telugu difficult for children to learn?',
                a: 'Telugu is written much as it sounds, which makes reading easier than in many languages once the letters are known. The alphabet is large, so it is taught a few letters at a time rather than all at once.',
              },
              {
                q: 'How can parents support Telugu learning at home?',
                a: 'Read Telugu stories together, practise a few words each day, speak Telugu at home where you can, and ask your child about new words they have learned. Short, regular practice beats long occasional sessions.',
              },
              {
                q: 'How much do Telugu classes for kids cost?',
                a: 'Fees vary with the age group, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
              },
              {
                q: 'How can I book a Telugu trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and how much Telugu they already know, so the session starts at the right level.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'hindi',
          name: 'Hindi',
          icon: '🕉️',
          summary: 'Devanagari, reading, writing and everyday conversation.',
          seo: {
            title: 'Hindi Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Hindi classes for children in Hyderabad, ages 4–14. Devanagari letters, matras, reading, writing, grammar and everyday conversation. Free trial.',
            keyword: 'hindi classes for kids in hyderabad',
            crumb: 'Hindi',
          },
          page: {
            eyebrow: 'Hindi · Ages 4–14',
            title: 'Hindi classes for kids in Hyderabad, for a language most children here meet at school.',
            subtitle:
              'Devanagari from the first letter to reading a story aloud — with the matras and noun gender taught gradually rather than all at once.',
            chips: [
              { strong: 'Ages 4–14', span: 'Age range' },
              { strong: '4 levels', span: 'Script to fluency' },
              { strong: 'Spoken + written', span: 'Both taught' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs Hindi classes for kids in Hyderabad for ages 4 to 14. Children learn the Devanagari alphabet and matras, build reading fluency, write correctly, and practise everyday conversation out loud in every session. Beginners are welcome, and in Hyderabad most children start as beginners because Hindi is a school subject rather than a home language.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first letter to first story',
              lead: 'Script and speech are taught together. A child who can read Hindi but never speaks it loses it the year the school subject ends.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '🔤',
                  title: 'Devanagari & sounds',
                  text: 'The vowels and consonants, said aloud and written by hand from the first session.',
                  bullets: ['Vowels and consonants', 'Correct stroke order', 'Sound-to-letter matching'],
                  outcome: 'Writes and sounds the full alphabet.',
                },
                {
                  tag: 'Level 2',
                  icon: '🧩',
                  title: 'Matras & first words',
                  text: 'The vowel marks change the syllable, and suddenly whole words can be read.',
                  bullets: ['Matras across consonants', 'Reading two and three-syllable words', 'Everyday vocabulary in sentences'],
                  outcome: 'Reads simple words unaided.',
                },
                {
                  tag: 'Level 3',
                  icon: '📜',
                  title: 'Sentences, grammar & writing',
                  text: 'Sentence order, gender and conjuncts — the point where reading becomes fluent rather than laboured.',
                  bullets: ['Sentence structure and gender agreement', 'Conjunct letters', 'Guided writing: notes and short paragraphs'],
                  outcome: 'Reads a short passage and writes five sentences.',
                },
                {
                  tag: 'Level 4',
                  icon: '📚',
                  title: 'Reading aloud & conversation',
                  text: 'Stories, poems and real conversation, so the language is usable outside the classroom.',
                  bullets: ['Reading a story aloud with expression', 'Kavita and cultural texts', 'Sustained conversation on a topic'],
                  outcome: 'Reads a story aloud and discusses it in Hindi.',
                },
              ],
            },
            sections: [
              {
                title: 'In Hyderabad, Hindi is usually a school subject',
                text: 'Most children here hear Hindi on television and from friends but rarely speak it, and meet it formally only in a crowded school period with little time to talk. That is a specific starting point, and the pathway is built for it: nothing assumes a Hindi-speaking home.',
                bullets: [
                  'Complete beginners are the default, not the exception',
                  'Speaking practised in every session, not saved for later',
                  'Matras and noun gender introduced gradually, by ear and example',
                  'Separate from school Hindi tuition — see the Tuitions menu',
                ],
              },
              {
                title: 'Language class or tuition?',
                text: 'This is a language programme: reading, writing and speaking at the child’s pace. If your child is following the Hindi syllabus at school and needs textbook coverage and exam practice, the Hindi tuition page under Tuitions is the right fit instead.',
              },
            ],
            faqTitle: 'Hindi classes for kids: frequently asked questions',
            faqs: [
              {
                q: 'What are Hindi classes for kids in Hyderabad?',
                a: 'They help children learn Hindi through reading, writing, speaking, vocabulary, grammar, pronunciation, comprehension and age-appropriate activities. Each skill is taught in small steps and practised through games, stories and conversation.',
              },
              {
                q: 'What age can children start Hindi classes?',
                a: 'Children can start from around age four with letters, sounds and rhymes. Older children start wherever their current level sits, because activities are adapted to the child rather than fixed by age.',
              },
              {
                q: 'Are Hindi classes suitable for beginners?',
                a: 'Yes, and in Hyderabad most children start as beginners. Nothing assumes a Hindi-speaking home: beginners start with the vowels and simple sounds and move to words once the letters feel familiar.',
              },
              {
                q: 'What will kids learn in Hindi classes?',
                a: 'The Devanagari alphabet, letter recognition, matras, word formation, reading, writing, spelling, vocabulary, basic grammar, sentence formation, speaking, listening and comprehension, plus stories, poems and conversation practice.',
              },
              {
                q: 'Do children learn Hindi reading?',
                a: 'Yes. Reading is built in stages: recognising letters, then whole words, then short sentences, then simple stories. Comprehension questions are added once a child reads sentences comfortably.',
              },
              {
                q: 'Do children learn Hindi writing?',
                a: 'Yes. Children practise Devanagari letter formation and handwriting first, then word writing, spelling and sentence writing, with guided and creative writing later.',
              },
              {
                q: 'Do Hindi classes include speaking practice?',
                a: 'Yes, in every session. Children practise everyday conversation, pronunciation, question-and-answer exchanges and storytelling — the part a school period rarely has time for.',
              },
              {
                q: 'Do kids learn Hindi grammar?',
                a: 'Yes, at a level children can use: nouns, pronouns, verbs, singular and plural, gender and sentence order. Gender is taught by ear through examples rather than as a table to memorise.',
              },
              {
                q: 'What are matras, and when are they taught?',
                a: 'Matras are the vowel marks that change a consonant’s sound. They are introduced at the second level, once the plain letters are secure, because meeting them too early is what makes Devanagari feel hard.',
              },
              {
                q: 'Are Hindi classes useful for school students?',
                a: 'Many families find them helpful, because reading fluency, spelling and comprehension are the same skills school Hindi asks for. We do not promise particular marks, but the practice supports what is taught at school.',
              },
              {
                q: 'Is Hindi difficult for children to learn?',
                a: 'Hindi is written much as it sounds, which makes reading easier once the letters are known. The two parts children find trickier are the matras and noun gender, and both are taught gradually.',
              },
              {
                q: 'How can parents support Hindi learning at home?',
                a: 'Read Hindi stories together, practise a few words each day, ask a question in Hindi at dinner, and ask your child about new words they have learned. Short, regular practice beats long occasional sessions.',
              },
              {
                q: 'How much do Hindi classes for kids cost?',
                a: 'Fees vary with the age group, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
              },
              {
                q: 'How can I book a Hindi trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and how much Hindi they already know, so the session starts at the right level.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'english',
          name: 'English',
          icon: '📖',
          summary: 'Reading comprehension, grammar and writing that sounds like the child.',
          seo: {
            title: 'English Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'English classes for children in Hyderabad, ages 7–15. Reading comprehension, grammar in context, vocabulary and creative writing in batches of 8.',
            keyword: 'english classes for kids in hyderabad',
            crumb: 'English',
          },
          page: {
            eyebrow: 'English · Ages 7–15',
            title: 'English classes for kids in Hyderabad that build readers, then writers.',
            subtitle:
              'Comprehension, grammar taught inside real sentences, a growing vocabulary and writing a child is actually pleased with.',
            chips: [
              { strong: 'Ages 7–15', span: 'Age range' },
              { strong: '4 strands', span: 'Read, grammar, words, write' },
              { strong: 'Weekly writing', span: 'With feedback' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs English classes for kids in Hyderabad for ages 7 to 15. Sessions combine reading comprehension, grammar taught inside real sentences, vocabulary building and weekly writing with individual feedback. The focus is on children who read fluently but lose marks and confidence when asked to write.',
            curriculum: {
              eyebrow: 'The four strands',
              title: 'Four strands running through every term',
              lead: 'Reading feeds vocabulary, vocabulary feeds writing, and grammar is taught where it is needed rather than as a separate subject.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🔎',
                  title: 'Reading & comprehension',
                  text: 'Finding what a passage actually says, and what it implies without saying it.',
                  bullets: ['Retrieval and inference questions', 'Summarising in one sentence', 'Reading between the lines'],
                  outcome: 'Answers inference questions with evidence.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🧱',
                  title: 'Grammar in context',
                  text: 'Tense, agreement and punctuation taught inside sentences the child wrote themselves.',
                  bullets: ['Tense consistency and agreement', 'Punctuation that changes meaning', 'Sentence variety and length'],
                  outcome: 'Self-corrects tense and punctuation while writing.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🗝️',
                  title: 'Vocabulary that gets used',
                  text: 'Words learned in families and put to work the same week, because a word met once is a word lost.',
                  bullets: ['Word families, prefixes and suffixes', 'Shades of meaning between near-synonyms', 'Using new words in the week’s writing'],
                  outcome: 'Uses new vocabulary unprompted in writing.',
                },
                {
                  tag: 'Strand 4',
                  icon: '✍️',
                  title: 'Writing with a purpose',
                  text: 'Story, description, letter and opinion — planned, drafted and improved rather than written once.',
                  bullets: ['Planning before drafting', 'Openings and endings that work', 'Redrafting from feedback'],
                  outcome: 'Plans, drafts and improves a piece of writing.',
                },
              ],
            },
            sections: [
              {
                title: 'Feedback on the writing, not just a mark',
                text: 'Every piece of writing comes back with one thing that worked and one thing to change, and the child rewrites that part. A mark tells a child where they stand; a specific next step tells them what to do on Tuesday. We use both, in that order of importance.',
                bullets: [
                  'One strength and one next step on every piece',
                  'Redrafting treated as normal, not as punishment',
                  'Grammar addressed where it shows up in the child’s own work',
                  'Reading list suggested per child, not per batch',
                ],
              },
              {
                title: 'Enrichment, not syllabus coverage',
                text: 'This class builds the underlying skill and is not tied to a school textbook. If your child needs their school English syllabus covered chapter by chapter for exams, the English tuition page under Tuitions does that instead — and many families take one of each.',
              },
            ],
            faqTitle: 'English classes for kids: frequently asked questions',
            faqs: [
              {
                q: 'What are English classes for kids in Hyderabad?',
                a: 'They help children build reading, writing, speaking, listening, vocabulary, grammar and communication together. Each skill is taught in small steps and practised through stories, games and conversation.',
              },
              {
                q: 'What age can children start English classes?',
                a: 'Children can start from around age four with the alphabet, letter sounds and rhymes. Older children start wherever their current level sits, because activities are adapted to the child rather than fixed by age.',
              },
              {
                q: 'Are English classes suitable for beginners?',
                a: 'Yes. Children who know very little English are welcome. Beginners start with letter sounds and simple words, then move on only once those feel comfortable.',
              },
              {
                q: 'What will kids learn in English classes?',
                a: 'The alphabet, phonics, letter recognition, word formation, vocabulary, reading, writing, spelling, grammar, sentence formation, speaking, listening, pronunciation and comprehension, along with storytelling, conversation practice and creative writing.',
              },
              {
                q: 'Do children learn English reading?',
                a: 'Yes. Reading is built in stages: letter sounds, then whole words, then sentences, then short stories. Comprehension questions are added once a child reads sentences comfortably.',
              },
              {
                q: 'Do children learn English writing?',
                a: 'Yes. Children practise letter formation and word writing first, then spelling and sentence writing. Guided writing, short paragraphs and creative writing come later, once the basics are steady.',
              },
              {
                q: 'Do English classes include speaking practice?',
                a: 'Yes, in every session. Children practise everyday conversation, pronunciation, question-and-answer exchanges, storytelling and simple presentations rather than saving speaking for later.',
              },
              {
                q: 'Do kids learn English grammar?',
                a: 'Yes, at a level children can actually use: nouns, pronouns, verbs, adjectives, singular and plural, simple tenses and sentence structure — taught through examples rather than rules to memorise.',
              },
              {
                q: 'Can English classes help with vocabulary?',
                a: 'Yes. Children build vocabulary in themes such as family, school, food, animals, colours, numbers, nature and daily activities, so new words connect to things a child already talks about.',
              },
              {
                q: 'Do English classes help with speaking confidence?',
                a: 'Many children become more willing to speak once they have practised in a small, low-pressure group. Confidence grows from repeated success rather than from constant correction, so mistakes are treated as normal.',
              },
              {
                q: 'Are English classes useful for school students?',
                a: 'Many families find them helpful, because reading fluency, spelling, grammar and comprehension are the same skills school English asks for. We do not promise particular marks, but the practice supports classroom work.',
              },
              {
                q: 'How can parents support English learning at home?',
                a: 'Read together every day, talk about the story afterwards, speak English at home where you can, and ask your child about new words. Short, regular practice works better than long occasional sessions.',
              },
              {
                q: 'What is the difference between English classes and spoken English?',
                a: 'These classes cover reading, writing, grammar and speaking together. Spoken English focuses only on talking confidently in everyday situations. English tuition, separately, follows the school syllabus and focuses on marks — ask us which emphasis suits your child.',
              },
              {
                q: 'How much do English classes for kids cost?',
                a: 'Fees vary with the age group, level and learning format, so we share current fees directly rather than publishing one figure that may not apply to your child.',
              },
              {
                q: 'How can I book an English trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us your child’s age and current English level so the session starts at the right point.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'foreign-languages',
          name: 'Foreign Languages',
          icon: '🌏',
          summary: 'A confident start in Hindi, French, German, Spanish or Japanese.',
          seo: {
            title: 'Foreign Language Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Foreign language classes for children in Hyderabad — Hindi, French, German, Spanish and Japanese. Conversation-first beginner courses in small batches.',
            keyword: 'foreign language classes for kids in hyderabad',
            crumb: 'Foreign Languages',
          },
          page: {
            eyebrow: 'Foreign Languages · Ages 8–16',
            title: 'Foreign language classes in Hyderabad, taught the way children actually pick up a language.',
            subtitle:
              'Beginner courses in Hindi, French, German, Spanish and Japanese — speaking from week one, script and grammar introduced once the ear is there.',
            chips: [
              { strong: 'Ages 8–16', span: 'Age range' },
              { strong: '5 languages', span: 'Beginner courses' },
              { strong: 'Speaking first', span: 'From week one' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs foreign language classes for kids in Hyderabad in Hindi, French, German, Spanish and Japanese, for ages 8 to 16. Beginner courses run for two terms, start with listening and speaking, and add script and grammar once children can already hold a short exchange. Batch availability depends on enrolment, so ask before enrolling.',
            curriculum: {
              eyebrow: 'How a beginner course runs',
              title: 'Four phases, first greeting to short conversation',
              lead: 'The same structure is used for every language offered, so a child who finishes one knows exactly how the next will feel.',
              stages: [
                {
                  tag: 'Phase 1',
                  icon: '👋',
                  title: 'Sounds & first exchanges',
                  text: 'Listening before reading. Greetings, names and numbers, said aloud until they are automatic.',
                  bullets: ['Sound system and pronunciation', 'Greetings, names, numbers', 'Classroom language in the target language'],
                  outcome: 'Introduces themselves and asks a question back.',
                },
                {
                  tag: 'Phase 2',
                  icon: '🏠',
                  title: 'Everyday vocabulary',
                  text: 'Family, food, school, time — the topics a beginner can talk about within a month.',
                  bullets: ['Core topic vocabulary', 'Present-tense verbs in use', 'Short paired dialogues'],
                  outcome: 'Talks about family and daily routine.',
                },
                {
                  tag: 'Phase 3',
                  icon: '🔡',
                  title: 'Script & reading',
                  text: 'The writing system, introduced once the sounds are secure — Devanagari, accents or kana as the language requires.',
                  bullets: ['Reading the script accurately', 'Spelling and written accents', 'Reading a short simple text'],
                  outcome: 'Reads and writes simple sentences in the script.',
                },
                {
                  tag: 'Phase 4',
                  icon: '🗺️',
                  title: 'Conversation & culture',
                  text: 'Longer exchanges, past and future forms, and the cultural context that makes the language make sense.',
                  bullets: ['Past and future in speech', 'Role-play: shop, directions, phone call', 'Festivals, food and everyday culture'],
                  outcome: 'Holds a three-minute conversation on a known topic.',
                },
              ],
            },
            sections: [
              {
                title: 'Which languages actually run',
                text: 'French, German, Spanish and Japanese open when a batch of at least four children forms at a similar level, which usually means one or two of them run at any given time. We will tell you honestly what is running before you enrol rather than after. Hindi has a programme of its own and runs year-round — see the Hindi page under Programs.',
                bullets: [
                  'Languages open on batch formation — ask for current status',
                  'Two-term beginner course, roughly 48 sessions',
                  'Second-language school requirements can be supported on request',
                  'Hindi is taught as its own programme rather than as a foreign language here',
                ],
              },
              {
                title: 'Not a crash course',
                text: 'A child does not become fluent in a term, and we do not sell that. What a beginner course reliably produces is a good accent, a working vocabulary of a few hundred words and the confidence to keep going — which is exactly the foundation that makes a later, more serious course succeed.',
              },
            ],
            faqTitle: 'Foreign language classes: frequently asked questions',
            faqs: [
              {
                q: 'What are foreign language classes for kids?',
                a: 'They help children learn basic words, phrases, pronunciation, listening and simple conversation in a new language through age-appropriate activities. Learning starts with greetings and everyday words rather than grammar.',
              },
              {
                q: 'Which languages can children learn?',
                a: 'Beginner courses in French, German, Spanish and Japanese open when a batch of at least four children forms at a similar level, so usually one or two run at any time. Ask us what is currently running before you plan. Hindi is taught as its own programme rather than as a foreign language.',
              },
              {
                q: 'What age can children start a foreign language?',
                a: 'Often from around age eight, though younger children can start with greetings, colours, numbers and songs. Activities are adapted to the child’s age and level.',
              },
              {
                q: 'Are foreign language classes suitable for beginners?',
                a: 'Yes. Almost every child starting a foreign language is a complete beginner, and the courses are designed for exactly that. No prior exposure is assumed at any point.',
              },
              {
                q: 'What do kids learn in a beginner course?',
                a: 'Greetings, basic words, numbers, colours, family and food words, everyday objects, simple phrases, pronunciation, listening, speaking, question-and-answer practice, simple conversation, songs and cultural activities.',
              },
              {
                q: 'Do children practise speaking?',
                a: 'Yes, from the first session. Children say new words out loud, repeat phrases and practise short exchanges with a partner. A language that is only read is very hard to ever speak.',
              },
              {
                q: 'When is the script taught?',
                a: 'Once the sounds are secure. Reading and writing — Devanagari, accents or kana as the language requires — are introduced after children can already hold a short spoken exchange.',
              },
              {
                q: 'Do children learn pronunciation?',
                a: 'Yes. Children listen carefully, repeat words and practise sounds that do not exist in the languages they already speak. The aim is being clearly understood, not sounding like a native speaker.',
              },
              {
                q: 'Which foreign language is best for children?',
                a: 'There is no single best language. What matters more is whether your child is interested in it and whether they will get chances to use it. A language a child enjoys will be practised; one chosen only for its usefulness often is not.',
              },
              {
                q: 'How long is a beginner course?',
                a: 'Two terms, roughly 48 sessions. What that reliably produces is a good accent, a working vocabulary of a few hundred words and the confidence to keep going — not fluency.',
              },
              {
                q: 'Will learning another language make my child smarter or improve their grades?',
                a: 'We would not make that claim. Learning a language gives children practice with new words, sounds, listening and memory, and many children enjoy it a great deal. Anything beyond that depends on far too many other things to promise.',
              },
              {
                q: 'How can parents practise a foreign language at home?',
                a: 'Practise a few words each day, use simple greetings at home, listen to songs together, and ask your child to teach you what they learned. You do not need to know the language yourself.',
              },
              {
                q: 'Can this support a second-language requirement at school?',
                a: 'It can be supported on request. Tell us which language and which board, and we will say honestly whether the beginner course matches what the school expects.',
              },
              {
                q: 'How much do foreign language classes cost?',
                a: 'Fees vary with the language, the child’s age, the programme structure and the format, so we share current fees directly rather than publishing one figure.',
              },
              {
                q: 'How can I book a foreign language trial class?',
                a: 'Use the booking form on this page with your name, email and contact number, call us, or message on WhatsApp. Tell us which language interests your child and we will confirm what is currently available.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'creative-arts',
      title: 'Creative & Performing Arts',
      icon: '🎨',
      blurb: 'Making things, performing them, and getting better at both.',
      items: [
        {
          slug: 'drawing-and-painting',
          name: 'Drawing & Painting',
          icon: '🖌️',
          summary: 'Observation, technique and a portfolio that shows the progress.',
          seo: {
            title: 'Drawing Classes for Kids in Hyderabad | Painting | Brolly Juniors',
            description:
              'Drawing and painting classes for children in Hyderabad, ages 5–15. Observation, shading, colour and composition taught in sequence. Portfolio each term.',
            keyword: 'drawing classes for kids in hyderabad',
            crumb: 'Drawing & Painting',
          },
          page: {
            eyebrow: 'Drawing & Painting · Ages 5–15',
            title: 'Drawing classes for kids in Hyderabad that teach seeing, not copying.',
            subtitle:
              'Line, shape, shading, colour and composition taught in order — with a termly portfolio that makes a child’s progress impossible to miss.',
            chips: [
              { strong: 'Ages 5–15', span: 'Age range' },
              { strong: '4 levels', span: 'Line to composition' },
              { strong: 'Portfolio', span: 'Every term' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs drawing and painting classes for kids in Hyderabad for ages 5 to 15. Children learn to observe and construct — line, proportion, light and shade, colour mixing and composition — across four levels, working in pencil, watercolour and acrylic. Materials are provided and each term ends with a portfolio review.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first line to finished composition',
              lead: 'Technique is taught deliberately. Free drawing is encouraged too, but a child who is only ever told "lovely" never learns why one drawing worked better than the last.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '✏️',
                  title: 'Line, shape & control',
                  text: 'Pencil control and seeing the simple shapes inside complicated things.',
                  bullets: ['Line weight and steady strokes', 'Breaking objects into basic shapes', 'Drawing from observation, not memory'],
                  outcome: 'Draws a recognisable object from life.',
                },
                {
                  tag: 'Level 2',
                  icon: '🌗',
                  title: 'Light, shade & form',
                  text: 'Where the light is coming from, and how that turns a circle into a sphere.',
                  bullets: ['Hatching, blending and tonal range', 'Light source, core shadow, cast shadow', 'Texture: fur, fabric, metal'],
                  outcome: 'Renders a still life with believable shadow.',
                },
                {
                  tag: 'Level 3',
                  icon: '🎨',
                  title: 'Colour & painting',
                  text: 'Mixing rather than using paint straight from the tube, in watercolour and acrylic.',
                  bullets: ['Colour wheel, warm and cool', 'Mixing greens, skin tones and greys', 'Watercolour washes and acrylic layering'],
                  outcome: 'Mixes a colour to match what they see.',
                },
                {
                  tag: 'Level 4',
                  icon: '🖼️',
                  title: 'Composition & personal work',
                  text: 'Choosing what to leave out. Children plan and complete pieces of their own.',
                  bullets: ['Framing, balance and focal point', 'Simple perspective', 'Self-directed portfolio pieces'],
                  outcome: 'Plans and completes an original composition.',
                },
              ],
            },
            sections: [
              {
                title: 'Materials, and what children keep',
                text: 'Pencils, paper, watercolour and acrylic are provided in the centre. Work stays at the studio through the term so it can be reviewed as a body of work, then goes home as a portfolio — which is the moment most families realise how far a child has come.',
                bullets: [
                  'All materials provided; nothing to buy to start',
                  'Work in pencil, watercolour and acrylic across the year',
                  'Termly portfolio review with each family',
                  'One annual exhibition of student work',
                ],
              },
              {
                title: 'Technique does not kill creativity',
                text: 'The common worry is that teaching method makes children’s art stiff. In practice the opposite happens: a child who cannot get a shadow to sit right stops enjoying drawing. Give them the technique and the ideas they already had get to exist on paper.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'singing',
          name: 'Singing',
          icon: '🎙️',
          summary: 'Pitch, breath and the nerve to sing in front of people.',
          seo: {
            title: 'Singing Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Singing classes for children in Hyderabad, ages 6–15. Pitch, breath control, rhythm and performance confidence in small guided batches. Free trial class.',
            keyword: 'singing classes for kids in hyderabad',
            crumb: 'Singing',
          },
          page: {
            eyebrow: 'Singing · Ages 6–15',
            title: 'Singing classes for kids in Hyderabad that start with the ear and end on a stage.',
            subtitle:
              'Pitch matching, breath control, rhythm and repertoire — with a small performance every term so nerves get practised too.',
            chips: [
              { strong: 'Ages 6–15', span: 'Age range' },
              { strong: '4 levels', span: 'Ear to performance' },
              { strong: 'Termly', span: 'Performance' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs singing classes for kids in Hyderabad for ages 6 to 15. Children train the ear first — matching pitch and holding a line — then add breath support, rhythm, diction and repertoire in both film and light classical styles. Every term ends with a small performance in front of families.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, matching a note to holding a stage',
              lead: 'Voices change as children grow, so range is never pushed. Everything here works within whatever voice a child has that year.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '👂',
                  title: 'Ear training & pitch',
                  text: 'Hearing a note and reproducing it — the one skill everything else depends on.',
                  bullets: ['Pitch matching and intervals', 'Sa-re-ga-ma and simple scales', 'Singing in unison with a group'],
                  outcome: 'Matches pitch reliably and holds a unison line.',
                },
                {
                  tag: 'Level 2',
                  icon: '🌬️',
                  title: 'Breath & tone',
                  text: 'Where the sound is supported from, and why the last line of a song runs out of air.',
                  bullets: ['Diaphragmatic breathing', 'Sustaining a note evenly', 'Warm-ups and vocal care'],
                  outcome: 'Sustains a phrase without straining.',
                },
                {
                  tag: 'Level 3',
                  icon: '🥁',
                  title: 'Rhythm, diction & expression',
                  text: 'Staying with the beat, being understood, and meaning what you are singing.',
                  bullets: ['Tala and rhythmic accuracy', 'Clear diction across languages', 'Dynamics and phrasing'],
                  outcome: 'Sings a full song in time and in words.',
                },
                {
                  tag: 'Level 4',
                  icon: '🎤',
                  title: 'Repertoire & performance',
                  text: 'Preparing a piece properly and delivering it with people watching.',
                  bullets: ['Building a small repertoire', 'Singing with a microphone', 'Stage presence and nerves'],
                  outcome: 'Performs a prepared song solo to an audience.',
                },
              ],
            },
            sections: [
              {
                title: 'Group class, individual voice',
                text: 'Batches are capped at eight, and every child is heard alone in every session — a group singing class where nobody is ever heard individually is a choir, not a lesson. Ranges and repertoire are set per child, so voices at different stages sit comfortably in the same batch.',
                bullets: [
                  'Every child sings solo in every session',
                  'Repertoire chosen per voice, not per batch',
                  'Film, devotional and light classical styles covered',
                  'Vocal health taught: no pushing, no belting young voices',
                ],
              },
              {
                title: '"My child sings out of tune"',
                text: 'Almost always this is an untrained ear rather than a fixed limitation, and it responds to a few months of pitch matching. It is the single most common thing families mention at enrolment and the one that changes fastest.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'dance',
          name: 'Dance',
          icon: '💃',
          summary: 'Rhythm, coordination and choreography children can own.',
          seo: {
            title: 'Dance Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Dance classes for children in Hyderabad, ages 5–15. Rhythm, coordination, technique and choreography across classical and freestyle. Termly showcase.',
            keyword: 'dance classes for kids in hyderabad',
            crumb: 'Dance',
          },
          page: {
            eyebrow: 'Dance · Ages 5–15',
            title: 'Dance classes for kids in Hyderabad that build rhythm before they build routines.',
            subtitle:
              'Warm-up, technique, rhythm and choreography — with a termly showcase and enough repetition that children genuinely own the piece.',
            chips: [
              { strong: 'Ages 5–15', span: 'Age range' },
              { strong: '4 levels', span: 'Rhythm to choreography' },
              { strong: 'Showcase', span: 'Every term' },
              { strong: 'Max 10', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs dance classes for kids in Hyderabad for ages 5 to 15. Sessions start with a proper warm-up, train rhythm and coordination, then build technique and choreography across classical and freestyle styles. Each term ends with a showcase, and children learn to count music rather than only copy the teacher.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, keeping time to owning a piece',
              lead: 'A child who can only copy is stuck the moment they forget a step. Counting, timing and body awareness are taught explicitly.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '👏',
                  title: 'Rhythm & body awareness',
                  text: 'Finding the beat, moving on it, and knowing where your own limbs are.',
                  bullets: ['Clapping and stepping the beat', 'Counting music in eights', 'Balance, posture and warm-up'],
                  outcome: 'Moves in time and counts the music.',
                },
                {
                  tag: 'Level 2',
                  icon: '🦶',
                  title: 'Basic steps & coordination',
                  text: 'The vocabulary of steps, and getting arms and feet to agree with each other.',
                  bullets: ['Foundational step vocabulary', 'Arm and footwork coordination', 'Direction changes and spacing'],
                  outcome: 'Performs a short sequence cleanly.',
                },
                {
                  tag: 'Level 3',
                  icon: '🎼',
                  title: 'Technique & style',
                  text: 'Cleaner lines, sharper transitions, and the differences between styles.',
                  bullets: ['Classical basics: posture and hand positions', 'Freestyle and film choreography', 'Transitions and level changes'],
                  outcome: 'Dances a full routine with clean technique.',
                },
                {
                  tag: 'Level 4',
                  icon: '🌟',
                  title: 'Choreography & performance',
                  text: 'Learning a full piece, holding formation, and contributing steps of their own.',
                  bullets: ['Full-length choreography', 'Formations and group timing', 'Creating an eight-count of their own'],
                  outcome: 'Performs a full piece in a group showcase.',
                },
              ],
            },
            sections: [
              {
                title: 'Warm-up, cool-down and no forced flexibility',
                text: 'Every session starts with a warm-up and ends with a stretch. Flexibility is developed gradually and nobody is pushed into a position, which matters more than it sounds for growing bodies — most dance injuries in children come from being stretched into shapes rather than working up to them.',
                bullets: [
                  'Full warm-up and cool-down every session',
                  'Age-appropriate flexibility work, never forced',
                  'Sprung or matted floor; no dancing on bare tile',
                  'Costumes for showcases kept simple and low-cost',
                ],
              },
              {
                title: 'Which style?',
                text: 'Younger batches cover a mix so children can find what they like. From around age nine children choose a main style — classical or freestyle and film — while keeping the other as a second strand. Nobody is asked to commit before they know what they enjoy.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'music',
          name: 'Music',
          icon: '🎹',
          summary: 'Keyboard, guitar or percussion — plus the ability to read music.',
          seo: {
            title: 'Music Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Music classes for children in Hyderabad, ages 6–15. Keyboard, guitar and percussion with real notation reading and ear training. Small batches, free trial.',
            keyword: 'music classes for kids in hyderabad',
            crumb: 'Music',
          },
          page: {
            eyebrow: 'Music · Ages 6–15',
            title: 'Music classes for kids in Hyderabad, where children learn to read it, not just play it.',
            subtitle:
              'Keyboard, guitar or percussion taught alongside notation and ear training, so a child can pick up a new piece without being taught it note by note.',
            chips: [
              { strong: 'Ages 6–15', span: 'Age range' },
              { strong: '3 instruments', span: 'Keyboard · guitar · percussion' },
              { strong: 'Notation', span: 'Taught from level 1' },
              { strong: 'Max 6', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs music classes for kids in Hyderabad for ages 6 to 15, on keyboard, guitar or percussion. Children learn their instrument alongside notation reading, rhythm and ear training, so they can learn a new piece independently. Instruments are available in the centre for the first term while families decide.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first note to first performance',
              lead: 'Playing, reading and listening are taught together from the start. A child taught only by imitation hits a ceiling within a year.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '🎵',
                  title: 'First notes & rhythm',
                  text: 'Posture, hand position and the first playable tunes, with rhythm counted aloud.',
                  bullets: ['Instrument posture and hand position', 'First five notes or first chords', 'Counting rhythm out loud'],
                  outcome: 'Plays a simple tune in time.',
                },
                {
                  tag: 'Level 2',
                  icon: '📄',
                  title: 'Reading notation',
                  text: 'The stave, note values and key — reading a line of music rather than memorising it.',
                  bullets: ['Stave, clefs and note values', 'Time signatures and rests', 'Sight-reading short phrases'],
                  outcome: 'Sight-reads a simple new piece.',
                },
                {
                  tag: 'Level 3',
                  icon: '🎶',
                  title: 'Chords, scales & ear',
                  text: 'The structures behind the music, and hearing them well enough to guess what comes next.',
                  bullets: ['Major and minor scales', 'Chord shapes and progressions', 'Playing a simple melody by ear'],
                  outcome: 'Plays a known tune by ear.',
                },
                {
                  tag: 'Level 4',
                  icon: '🎼',
                  title: 'Repertoire & playing together',
                  text: 'Real pieces, and the very different skill of staying together with other musicians.',
                  bullets: ['Building a repertoire of pieces', 'Playing in an ensemble', 'Preparing a piece for performance'],
                  outcome: 'Performs a prepared piece with an ensemble.',
                },
              ],
            },
            sections: [
              {
                title: 'Practice is the whole thing, so we make it small',
                text: 'Fifteen honest minutes on five days beats two hours on a Sunday, and children are given a specific practice target rather than "practise your piece". Families get a short weekly note saying exactly which two bars need work.',
                bullets: [
                  'A named practice target each week, not a vague instruction',
                  'Instruments available in the centre for the first term',
                  'Batches capped at six so hands can be corrected',
                  'Graded exam preparation available on request',
                ],
              },
              {
                title: 'Choosing the instrument',
                text: 'Keyboard suits the youngest starters because the notes are laid out visually and nothing hurts. Guitar works well from around eight, when hands are big enough for chord shapes. Percussion suits children who cannot sit still — and is far more musical than it gets credit for.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'drama',
          name: 'Drama',
          icon: '🎭',
          summary: 'Voice, movement and improvisation — confidence with a script.',
          seo: {
            title: 'Drama Classes for Kids in Hyderabad | Theatre | Brolly Juniors',
            description:
              'Drama classes for children in Hyderabad, ages 6–15. Voice, movement, improvisation and scripted performance in small batches. Termly production.',
            keyword: 'drama classes for kids in hyderabad',
            crumb: 'Drama',
          },
          page: {
            eyebrow: 'Drama · Ages 6–15',
            title: 'Drama classes for kids in Hyderabad that build stage confidence honestly.',
            subtitle:
              'Voice, movement, improvisation and scripted work — leading to a termly production where every child has real lines.',
            chips: [
              { strong: 'Ages 6–15', span: 'Age range' },
              { strong: '4 modules', span: 'Voice to production' },
              { strong: 'Termly play', span: 'Everyone has lines' },
              { strong: 'Max 10', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs drama classes for kids in Hyderabad for ages 6 to 15. Children train voice and movement, learn improvisation, then work with scripts and characters towards a termly production. Casting is arranged so every child has speaking lines — not one lead and twelve trees.',
            curriculum: {
              eyebrow: 'Module-wise curriculum',
              title: 'Four modules, warm-up games to opening night',
              lead: 'Improvisation comes before scripts on purpose: a child who has already invented a scene is far less frightened of forgetting a line.',
              stages: [
                {
                  tag: 'Module 1',
                  icon: '🗣️',
                  title: 'Voice & projection',
                  text: 'Being heard at the back of the room without shouting, and speaking clearly under nerves.',
                  bullets: ['Breath support and projection', 'Diction and pace', 'Warm-ups and vocal care'],
                  outcome: 'Speaks audibly and clearly across a room.',
                },
                {
                  tag: 'Module 2',
                  icon: '🤸',
                  title: 'Movement & stage awareness',
                  text: 'Where to stand, how to move, and what the body says while the mouth is quiet.',
                  bullets: ['Stage positions and blocking', 'Physical characterisation', 'Freeze frames and tableaux'],
                  outcome: 'Holds a position and moves with purpose on stage.',
                },
                {
                  tag: 'Module 3',
                  icon: '⚡',
                  title: 'Improvisation',
                  text: 'Making a scene up on the spot — the fastest cure for the fear of getting it wrong.',
                  bullets: ['Accepting an offer and building on it', 'Status, mood and quick characters', 'Group scene-building'],
                  outcome: 'Sustains an improvised scene with a partner.',
                },
                {
                  tag: 'Module 4',
                  icon: '🎬',
                  title: 'Script, character & production',
                  text: 'Learning lines, building a character and rehearsing to performance.',
                  bullets: ['Reading and learning a script', 'Building a character with motivation', 'Full rehearsal and staging'],
                  outcome: 'Performs a speaking role in a staged production.',
                },
              ],
            },
            sections: [
              {
                title: 'Every child gets lines',
                text: 'Scripts are chosen or adapted to fit the batch rather than cast down from a fixed play, so there is no child who spent a term rehearsing to stand at the back. It takes more preparation from the educator and it is the single thing that decides whether a shy child comes back next term.',
                bullets: [
                  'Scripts adapted so every child has speaking lines',
                  'One production per term, kept low-cost for families',
                  'Shy children eased in through improvisation first',
                  'No child is made to perform before they are ready',
                ],
              },
              {
                title: 'What drama does for the quiet child',
                text: 'Playing a character is easier than being yourself, which is exactly why it works. Children who will not read aloud in class will happily speak as somebody else, and the confidence tends to leak back into ordinary situations within a term or two.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'sports-and-fitness',
      title: 'Sports & Fitness',
      icon: '🏃',
      blurb: 'Movement, coordination and the habit of being active.',
      items: [
        {
          slug: 'swimming',
          name: 'Swimming',
          icon: '🏊',
          summary: 'Water confidence and safe, correct strokes.',
          seo: {
            title: 'Swimming Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Swimming classes for children in Hyderabad, ages 5–14. Water confidence, floating, four strokes and water safety at partner pools. Small coached groups.',
            keyword: 'swimming classes for kids in hyderabad',
            crumb: 'Swimming',
          },
          page: {
            eyebrow: 'Swimming · Ages 5–14',
            title: 'Swimming classes for kids in Hyderabad that teach water safety before speed.',
            subtitle:
              'Confidence, floating, breathing and four strokes — coached in small groups at partner pools, with safety skills every child should have.',
            chips: [
              { strong: 'Ages 5–14', span: 'Age range' },
              { strong: '4 levels', span: 'Confidence to strokes' },
              { strong: 'Partner pools', span: 'Lifeguard on deck' },
              { strong: 'Max 6', span: 'Children per coach' },
            ],
            quickAnswer:
              'Brolly Juniors runs swimming classes for kids in Hyderabad for ages 5 to 14, held at partner pools with a lifeguard on deck and a maximum of six children per coach. Children progress from water confidence and floating to freestyle, backstroke, breaststroke and butterfly, with water safety skills taught at every level.',
            curriculum: {
              eyebrow: 'Level-wise curriculum',
              title: 'Four levels, first entry to four strokes',
              lead: 'Nobody moves up until they are safe at the level below. Progression is by skill demonstrated, not by term completed.',
              stages: [
                {
                  tag: 'Level 1',
                  icon: '💧',
                  title: 'Water confidence',
                  text: 'Getting in happily, putting the face in, and breathing out under water.',
                  bullets: ['Safe entry and exit', 'Face in water and bubble breathing', 'Submerging without panic'],
                  outcome: 'Enters, submerges and exits confidently.',
                },
                {
                  tag: 'Level 2',
                  icon: '🛟',
                  title: 'Floating & gliding',
                  text: 'Trusting the water to hold them, front and back, and moving without a float.',
                  bullets: ['Front and back float', 'Push-and-glide', 'Recovering to standing'],
                  outcome: 'Floats unaided and glides five metres.',
                },
                {
                  tag: 'Level 3',
                  icon: '🏊',
                  title: 'Freestyle & backstroke',
                  text: 'The first two strokes, with breathing timed properly rather than snatched.',
                  bullets: ['Freestyle arms, legs and side breathing', 'Backstroke technique', 'Swimming 25 metres continuously'],
                  outcome: 'Swims 25m freestyle with correct breathing.',
                },
                {
                  tag: 'Level 4',
                  icon: '🥇',
                  title: 'Breaststroke, butterfly & safety',
                  text: 'The remaining strokes, turns, and the water-safety skills that matter outside a pool.',
                  bullets: ['Breaststroke and introductory butterfly', 'Turns and diving entry', 'Treading water and self-rescue'],
                  outcome: 'Swims all four strokes and treads water for two minutes.',
                },
              ],
            },
            sections: [
              {
                title: 'Where classes are held, and who is watching',
                text: 'Swimming runs at partner pools rather than at the centre. A qualified lifeguard is on deck for every session in addition to the coach, coach-to-child ratio is capped at one to six, and parents are welcome on the viewing side throughout — we would rather you watched.',
                bullets: [
                  'Held at partner pools; venue confirmed on enrolment',
                  'Lifeguard on deck in addition to the coach',
                  'Maximum six children per coach at every level',
                  'Progression by demonstrated skill, not by term',
                ],
              },
              {
                title: 'Water safety is not an add-on',
                text: 'Treading water, self-rescue and knowing what to do when out of depth are taught to every child, including strong swimmers. A child who swims a fast twenty-five metres but panics in open water has learned a sport rather than a safety skill.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'indoor-games',
          name: 'Indoor Games',
          icon: '🏸',
          summary: 'Badminton, table tennis and carrom — coordination and fair play.',
          seo: {
            title: 'Indoor Games Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Indoor games coaching for children in Hyderabad, ages 6–15. Badminton, table tennis and carrom with technique, footwork and match play. Small groups.',
            keyword: 'indoor games classes for kids in hyderabad',
            crumb: 'Indoor Games',
          },
          page: {
            eyebrow: 'Indoor Games · Ages 6–15',
            title: 'Indoor games classes for kids in Hyderabad — badminton, table tennis and carrom.',
            subtitle:
              'Grip, footwork and technique taught properly, then enough match play that children learn to compete and lose gracefully.',
            chips: [
              { strong: 'Ages 6–15', span: 'Age range' },
              { strong: '3 games', span: 'Badminton · TT · carrom' },
              { strong: 'Match play', span: 'Every session' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs indoor games coaching in Hyderabad for ages 6 to 15, covering badminton, table tennis and carrom. Children are taught grip, stance, footwork and shot technique, then play structured matches every session. Equipment is provided and sessions run indoors year-round.',
            curriculum: {
              eyebrow: 'How coaching progresses',
              title: 'Four stages, grip to competitive match',
              lead: 'The same progression applies across all three games: hold it correctly, move correctly, hit correctly, then compete.',
              stages: [
                {
                  tag: 'Stage 1',
                  icon: '✋',
                  title: 'Grip, stance & control',
                  text: 'Almost every problem a beginner has traces back to how they are holding it.',
                  bullets: ['Correct grip for each game', 'Ready stance and balance', 'Basic control drills'],
                  outcome: 'Holds and controls the racquet or striker correctly.',
                },
                {
                  tag: 'Stage 2',
                  icon: '👟',
                  title: 'Footwork & movement',
                  text: 'Getting to the shot early, which is what makes the shot possible at all.',
                  bullets: ['Split step and court movement', 'Recovery to base position', 'Movement drills under light pressure'],
                  outcome: 'Reaches and returns shots across the court.',
                },
                {
                  tag: 'Stage 3',
                  icon: '🎯',
                  title: 'Shots & technique',
                  text: 'The shot vocabulary of the game, built one at a time and drilled until repeatable.',
                  bullets: ['Serve, clear, drop and smash (badminton)', 'Push, drive, topspin (table tennis)', 'Angles and rebounds (carrom)'],
                  outcome: 'Executes each core shot on demand.',
                },
                {
                  tag: 'Stage 4',
                  icon: '🏅',
                  title: 'Match play & tactics',
                  text: 'Scoring, rules, tactics and the discipline of playing a point rather than a shot.',
                  bullets: ['Scoring, rules and etiquette', 'Simple tactical patterns', 'Internal league matches'],
                  outcome: 'Plays a full scored match, calling the score honestly.',
                },
              ],
            },
            sections: [
              {
                title: 'Equipment and the indoor advantage',
                text: 'Racquets, bats, shuttles and boards are provided, so a family can find out whether a child enjoys badminton before buying a racquet. Indoor courts also mean sessions run through Hyderabad summers and monsoon without cancellation, which matters more than it sounds when you are building a habit.',
                bullets: [
                  'All equipment provided at the centre',
                  'Sessions run year-round regardless of weather',
                  'Children may focus on one game or rotate across three',
                  'Internal league each term with fixtures and a table',
                ],
              },
              {
                title: 'Calling your own score',
                text: 'Children referee their own matches. It produces some noisy disagreements early on and, within a few weeks, a room full of children who call a point against themselves without being asked. That is the actual curriculum here.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'outdoor-games',
          name: 'Outdoor Games',
          icon: '⚽',
          summary: 'Athletics, football and throw-and-catch — the basics of moving well.',
          seo: {
            title: 'Outdoor Games for Kids in Hyderabad | Brolly Juniors',
            description:
              'Outdoor games coaching for children in Hyderabad, ages 5–14. Running, throwing, catching, football and team games in coached weekend sessions.',
            keyword: 'outdoor games for kids in hyderabad',
            crumb: 'Outdoor Games',
          },
          page: {
            eyebrow: 'Outdoor Games · Ages 5–14',
            title: 'Outdoor games for kids in Hyderabad, coached for children who need to move.',
            subtitle:
              'The fundamentals — running, jumping, throwing, catching — then football, relays and team games, in coached weekend sessions.',
            chips: [
              { strong: 'Ages 5–14', span: 'Age range' },
              { strong: 'Weekends', span: 'Morning sessions' },
              { strong: 'Team games', span: 'Every session' },
              { strong: 'Max 12', span: 'Children per coach' },
            ],
            quickAnswer:
              'Brolly Juniors runs outdoor games sessions for kids in Hyderabad for ages 5 to 14, held on weekend mornings at partner grounds. Children build the fundamental movement skills — running, jumping, throwing, catching, dodging — then apply them in football, relays and team games. Water breaks and shade are built into every session.',
            curriculum: {
              eyebrow: 'How sessions build',
              title: 'Four blocks, fundamentals to team play',
              lead: 'Fundamental movement skills first. A child who cannot land from a jump safely should not be playing a contact game.',
              stages: [
                {
                  tag: 'Block 1',
                  icon: '🏃',
                  title: 'Running, agility & landing',
                  text: 'Sprinting form, changing direction, and landing without turning an ankle.',
                  bullets: ['Sprint mechanics and starts', 'Agility ladders and direction change', 'Safe jumping and landing'],
                  outcome: 'Runs, turns and lands with control.',
                },
                {
                  tag: 'Block 2',
                  icon: '🥎',
                  title: 'Throwing & catching',
                  text: 'The skill that unlocks half of all sports, and the one most children are never actually taught.',
                  bullets: ['Overarm throw technique', 'Catching with soft hands', 'Aiming and distance control'],
                  outcome: 'Throws overarm accurately and catches reliably.',
                },
                {
                  tag: 'Block 3',
                  icon: '⚽',
                  title: 'Football & ball skills',
                  text: 'Dribbling, passing and shooting, with small-sided games so everyone touches the ball.',
                  bullets: ['Dribbling and close control', 'Passing and receiving', 'Small-sided matches'],
                  outcome: 'Plays a small-sided game with control.',
                },
                {
                  tag: 'Block 4',
                  icon: '🚩',
                  title: 'Team games & relays',
                  text: 'Traditional games, relays and structured team play — tactics, positions and shared effort.',
                  bullets: ['Relay races and team challenges', 'Positions and roles', 'Traditional Indian outdoor games'],
                  outcome: 'Plays a position within a team plan.',
                },
              ],
            },
            sections: [
              {
                title: 'Heat, hydration and honest scheduling',
                text: 'Sessions run early on weekend mornings, and April and May sessions shift earlier still. Shade breaks and water are scheduled rather than offered on request, and sessions are cancelled outright when the ground or the heat makes them unwise. We would rather lose a session than push through one.',
                bullets: [
                  'Weekend morning slots at partner grounds',
                  'Scheduled water and shade breaks in every session',
                  'Sessions cancelled in unsafe heat, with a make-up slot',
                  'First-aid trained coach present at every session',
                ],
              },
              {
                title: 'Not a talent programme',
                text: 'This is a general athleticism and enjoyment programme, not a feeder for competitive sport. Children who show real aptitude are pointed towards specialist academies, and we will say so directly rather than keeping them here.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'yoga',
          name: 'Yoga',
          icon: '🧘',
          summary: 'Strength, flexibility and a way to settle a busy head.',
          seo: {
            title: 'Yoga Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Yoga classes for children in Hyderabad, ages 5–15. Age-appropriate asanas, breathing and relaxation to build strength, flexibility and focus.',
            keyword: 'yoga classes for kids in hyderabad',
            crumb: 'Yoga',
          },
          page: {
            eyebrow: 'Yoga · Ages 5–15',
            title: 'Yoga classes for kids in Hyderabad that give children a way to settle themselves.',
            subtitle:
              'Age-appropriate asanas, breathing and relaxation — building strength and flexibility, and a skill children can use before an exam.',
            chips: [
              { strong: 'Ages 5–15', span: 'Age range' },
              { strong: '4 strands', span: 'Body, breath, focus, rest' },
              { strong: 'Mats provided', span: 'Nothing to bring' },
              { strong: 'Max 10', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs yoga classes for kids in Hyderabad for ages 5 to 15. Sessions combine age-appropriate asanas for strength and flexibility, simple pranayama, focus practice and guided relaxation. Postures are adapted for growing bodies and no child is pushed into a position they are not ready for.',
            curriculum: {
              eyebrow: 'The four strands',
              title: 'Four strands in every session',
              lead: 'Each session touches all four, in the same order, so children always know how the hour will go — which is itself part of why it settles them.',
              stages: [
                {
                  tag: 'Strand 1',
                  icon: '🌳',
                  title: 'Asanas & strength',
                  text: 'Standing, balancing and seated postures held long enough to build real strength.',
                  bullets: ['Standing and balancing postures', 'Core and back strength', 'Alignment before depth'],
                  outcome: 'Holds core postures with correct alignment.',
                },
                {
                  tag: 'Strand 2',
                  icon: '🌬️',
                  title: 'Breath & pranayama',
                  text: 'Simple, safe breathing practices — the part children reach for on their own later.',
                  bullets: ['Deep abdominal breathing', 'Alternate nostril breathing', 'Breath counting to settle'],
                  outcome: 'Uses a breathing technique to calm down.',
                },
                {
                  tag: 'Strand 3',
                  icon: '🎯',
                  title: 'Focus & balance',
                  text: 'Balance postures and short concentration practices that train attention directly.',
                  bullets: ['Balance work and drishti', 'Short concentration practices', 'Coordination sequences'],
                  outcome: 'Sustains attention through a balance sequence.',
                },
                {
                  tag: 'Strand 4',
                  icon: '😌',
                  title: 'Relaxation & rest',
                  text: 'Guided relaxation to close, which for many children is the first still ten minutes of their day.',
                  bullets: ['Guided body relaxation', 'Visualisation and story-based rest', 'Winding down deliberately'],
                  outcome: 'Relaxes fully and quietly for ten minutes.',
                },
              ],
            },
            sections: [
              {
                title: 'Adapted for growing bodies',
                text: 'Children are not small adults. Deep backbends, extended headstands and forced flexibility are left out entirely at these ages, and postures are held for shorter periods with more variety. What children lose in intensity they gain in actually wanting to come back.',
                bullets: [
                  'No forced stretching or deep inversions',
                  'Shorter holds, more variety, age-appropriate sequencing',
                  'Mats provided; loose clothing is all that is needed',
                  'Suitable alongside any other sport or dance class',
                ],
              },
              {
                title: 'The claim we do and do not make',
                text: 'Yoga will not fix a child’s concentration on its own, and we will not tell you it does. What children reliably take away is a specific, portable technique for calming down — one many of them use before a test or after an argument, entirely unprompted.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
    {
      id: 'life-skills',
      title: 'Life Skills',
      icon: '🌟',
      blurb: 'The habits that decide how far everything else goes.',
      items: [
        {
          slug: 'financial-literacy',
          name: 'Financial Literacy',
          icon: '💰',
          summary: 'Money, saving and value — before it matters financially.',
          seo: {
            title: 'Financial Literacy Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Financial literacy classes for children in Hyderabad, ages 9–16. Earning, budgeting, saving, needs versus wants, interest and smart spending decisions.',
            keyword: 'financial literacy classes for kids in hyderabad',
            crumb: 'Financial Literacy',
          },
          page: {
            eyebrow: 'Financial Literacy · Ages 9–16',
            title: 'Financial literacy classes in Hyderabad that teach money before it matters.',
            subtitle:
              'Where money comes from, what a budget is, why saving is hard, and how interest quietly works for you or against you.',
            chips: [
              { strong: 'Ages 9–16', span: 'Age range' },
              { strong: '4 modules', span: 'Earn to invest' },
              { strong: 'Simulations', span: 'Not lectures' },
              { strong: 'Max 10', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs financial literacy classes in Hyderabad for ages 9 to 16. Children learn where money comes from, how to budget and save, the difference between needs and wants, how interest and inflation work, and how to judge whether something is worth its price. Everything is taught through simulations rather than lectures.',
            curriculum: {
              eyebrow: 'Module-wise curriculum',
              title: 'Four modules, pocket money to compound interest',
              lead: 'Every module runs as a simulation with real decisions and real consequences, because nobody has ever learned to budget by being told to budget.',
              stages: [
                {
                  tag: 'Module 1',
                  icon: '🪙',
                  title: 'Where money comes from',
                  text: 'Earning, exchange and value — why a thing costs what it costs.',
                  bullets: ['Income, work and exchange', 'Price, value and cost', 'Needs versus wants, honestly'],
                  outcome: 'Sorts real spending into needs and wants with reasons.',
                },
                {
                  tag: 'Module 2',
                  icon: '📊',
                  title: 'Budgeting & tracking',
                  text: 'Running a month on a fixed amount, and finding out where it actually went.',
                  bullets: ['Building a simple budget', 'Tracking spending for a month', 'Adjusting when it does not balance'],
                  outcome: 'Runs a month-long budget simulation to plan.',
                },
                {
                  tag: 'Module 3',
                  icon: '🏦',
                  title: 'Saving, goals & interest',
                  text: 'Delayed gratification made concrete, and the arithmetic of compounding.',
                  bullets: ['Setting and reaching a savings goal', 'How bank interest works', 'Compounding over time'],
                  outcome: 'Calculates what a savings goal really costs to reach.',
                },
                {
                  tag: 'Module 4',
                  icon: '🧭',
                  title: 'Smart decisions & safety',
                  text: 'Comparing options, spotting a bad deal, and recognising a scam.',
                  bullets: ['Comparing offers and unit prices', 'Borrowing and why it costs', 'Spotting online money scams'],
                  outcome: 'Evaluates an offer and explains whether it is worth it.',
                },
              ],
            },
            sections: [
              {
                title: 'Taught with simulations, not slides',
                text: 'Children are given a simulated income and a month of expenses, and they make choices that do not work out. The month where a child overspends in week two and has to manage the rest teaches more than any amount of explaining, and it costs nothing real.',
                bullets: [
                  'Every module built around a decision simulation',
                  'No products, brands or investment advice of any kind',
                  'Family conversation prompts sent home each module',
                  'Older batches cover inflation, borrowing and scams in more depth',
                ],
              },
              {
                title: 'What we deliberately leave out',
                text: 'No stock picking, no trading, no crypto, and nothing that resembles investment advice. Children of this age need the foundations — earn, budget, save, compare — and a class that skips to markets is entertainment rather than education.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'confidence-building',
          name: 'Confidence Building',
          icon: '🌤️',
          summary: 'Small, structured wins that make a child braver.',
          seo: {
            title: 'Confidence Building Classes in Hyderabad | Brolly Juniors',
            description:
              'Confidence building classes for children in Hyderabad, ages 7–15. Self-awareness, handling mistakes, speaking up and gradual challenge in small batches.',
            keyword: 'confidence building classes in hyderabad',
            crumb: 'Confidence Building',
          },
          page: {
            eyebrow: 'Confidence Building · Ages 7–15',
            title: 'Confidence building classes in Hyderabad, built on evidence rather than pep talks.',
            subtitle:
              'Confidence comes from having done hard things, so this class is a graded sequence of small challenges — each one slightly beyond comfortable.',
            chips: [
              { strong: 'Ages 7–15', span: 'Age range' },
              { strong: '4 modules', span: 'Graded challenge' },
              { strong: 'No performing', span: 'Until they choose to' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs confidence building classes in Hyderabad for ages 7 to 15. Rather than motivational talk, children work through a graded sequence of small challenges — speaking up, handling a mistake in front of others, asking for help, leading a short activity — so confidence is built on evidence they can point to.',
            curriculum: {
              eyebrow: 'Module-wise curriculum',
              title: 'Four modules, noticing to leading',
              lead: 'Every module ends with a challenge just past a child’s comfort, agreed with them beforehand. Nothing is sprung on anyone.',
              stages: [
                {
                  tag: 'Module 1',
                  icon: '🪞',
                  title: 'Self-awareness',
                  text: 'Naming what you are good at and what makes you nervous, without either one being a verdict.',
                  bullets: ['Identifying strengths honestly', 'Naming nerves and where they show up', 'Setting one personal goal'],
                  outcome: 'States a strength and a goal in their own words.',
                },
                {
                  tag: 'Module 2',
                  icon: '🩹',
                  title: 'Mistakes & recovery',
                  text: 'Getting something wrong in front of the batch on purpose, and finding out that nothing happens.',
                  bullets: ['Deliberate low-stakes mistakes', 'Recovering and carrying on', 'Separating a mistake from a self-judgment'],
                  outcome: 'Carries on calmly after a public mistake.',
                },
                {
                  tag: 'Module 3',
                  icon: '🙋',
                  title: 'Speaking up & asking',
                  text: 'Volunteering an answer, disagreeing, and asking for help — the three hardest sentences at school.',
                  bullets: ['Volunteering without being called on', 'Asking for help clearly', 'Saying no and holding it'],
                  outcome: 'Asks for help and voices a disagreement.',
                },
                {
                  tag: 'Module 4',
                  icon: '🧗',
                  title: 'Challenge & leading',
                  text: 'A self-chosen stretch goal, and leading a short activity for the rest of the batch.',
                  bullets: ['Choosing a personal stretch challenge', 'Leading a short activity', 'Reviewing what the evidence shows'],
                  outcome: 'Completes a self-chosen challenge and leads a task.',
                },
              ],
            },
            sections: [
              {
                title: 'Why we do not do pep talks',
                text: 'Telling a child they are brilliant does not survive contact with a hard Monday. Confidence that lasts is a memory of having coped: the time they got it wrong and were fine, the time they asked and it was fine. This class manufactures those memories on purpose, in a safe room, with eight children.',
                bullets: [
                  'Challenges agreed with the child in advance',
                  'Nobody is ever put on the spot without warning',
                  'Progress recorded as evidence the child can re-read',
                  'Families given specific language to use at home',
                ],
              },
              {
                title: 'When this is not the right class',
                text: 'If a child’s anxiety is affecting sleep, school attendance or eating, this is a class and not a treatment, and we will say so at the first conversation rather than enrolling them. We are glad to talk it through and point you to the right kind of support.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'leadership',
          name: 'Leadership',
          icon: '🧭',
          summary: 'Responsibility, decisions and taking a group somewhere.',
          seo: {
            title: 'Leadership Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Leadership classes for children in Hyderabad, ages 10–16. Responsibility, decision-making, delegation, feedback and running a real team project.',
            keyword: 'leadership classes for kids in hyderabad',
            crumb: 'Leadership',
          },
          page: {
            eyebrow: 'Leadership · Ages 10–16',
            title: 'Leadership classes for kids in Hyderabad, where children actually have to lead something.',
            subtitle:
              'Responsibility, decision-making, delegation and feedback — practised by running a real team project from a blank page to a finished thing.',
            chips: [
              { strong: 'Ages 10–16', span: 'Age range' },
              { strong: '4 modules', span: 'Self to team' },
              { strong: 'Real project', span: 'Delivered by the batch' },
              { strong: 'Max 10', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs leadership classes in Hyderabad for ages 10 to 16. Children learn to take responsibility, make and defend decisions, delegate, give and receive feedback, and run a meeting — then apply all of it by delivering a real team project. Every child leads at some point; the role rotates.',
            curriculum: {
              eyebrow: 'Module-wise curriculum',
              title: 'Four modules, managing yourself to leading a team',
              lead: 'You cannot lead a group if you cannot organise yourself, so the sequence starts there and widens outward.',
              stages: [
                {
                  tag: 'Module 1',
                  icon: '🗓️',
                  title: 'Leading yourself',
                  text: 'Time, priorities and finishing what you said you would finish.',
                  bullets: ['Planning and prioritising', 'Keeping a commitment', 'Owning a result without excuses'],
                  outcome: 'Plans and delivers an individual commitment.',
                },
                {
                  tag: 'Module 2',
                  icon: '⚖️',
                  title: 'Decisions & responsibility',
                  text: 'Choosing between imperfect options, explaining why, and living with it.',
                  bullets: ['Weighing options against criteria', 'Deciding under time pressure', 'Explaining a decision to the group'],
                  outcome: 'Makes and justifies a decision for the group.',
                },
                {
                  tag: 'Module 3',
                  icon: '🔁',
                  title: 'Delegation & feedback',
                  text: 'Handing work to someone else properly, and saying something useful about how it went.',
                  bullets: ['Matching a task to a person', 'Giving specific, kind feedback', 'Receiving feedback without defending'],
                  outcome: 'Delegates a task and reviews it constructively.',
                },
                {
                  tag: 'Module 4',
                  icon: '🚀',
                  title: 'Running a team project',
                  text: 'The batch delivers something real, with rotating leadership and a genuine deadline.',
                  bullets: ['Planning and assigning a project', 'Running a short meeting', 'Delivering to a deadline and reviewing'],
                  outcome: 'Leads a phase of a delivered team project.',
                },
              ],
            },
            sections: [
              {
                title: 'The role rotates, deliberately',
                text: 'A leadership class where the confident child leads every week trains one leader and nine followers. Leadership rotates by module, so the quiet children lead too — and the naturally dominant ones get the far harder lesson of following someone else’s plan.',
                bullets: [
                  'Every child leads at least one phase',
                  'Confident children practise following as a skill',
                  'Projects chosen by the batch, not assigned',
                  'Reviews focus on the decision, not the personality',
                ],
              },
              {
                title: 'Projects are real, not simulated',
                text: 'Past batches have organised a book drive, run a small awareness campaign and produced a showcase event. A real deadline with real people watching is what makes delegation stop being an abstract word.',
              },
            ],
            cta: 'family',
          },
        },
        {
          slug: 'problem-solving',
          name: 'Problem Solving',
          icon: '🧗',
          summary: 'A method for the moment a child says "I don\'t know how".',
          seo: {
            title: 'Problem Solving Classes for Kids in Hyderabad | Brolly Juniors',
            description:
              'Problem solving classes for children in Hyderabad, ages 8–15. A repeatable method: understand, plan, try, check — applied to maths, design and real problems.',
            keyword: 'problem solving classes for kids in hyderabad',
            crumb: 'Problem Solving',
          },
          page: {
            eyebrow: 'Problem Solving · Ages 8–15',
            title: 'Problem solving classes in Hyderabad that give children a method to fall back on.',
            subtitle:
              'Understand, plan, try, check — one repeatable process, applied to maths problems, design challenges and messy real-world questions.',
            chips: [
              { strong: 'Ages 8–15', span: 'Age range' },
              { strong: '4 steps', span: 'One repeatable method' },
              { strong: 'Open problems', span: 'No single right answer' },
              { strong: 'Max 8', span: 'Children per batch' },
            ],
            quickAnswer:
              'Brolly Juniors runs problem solving classes in Hyderabad for ages 8 to 15. Children learn a four-step method — understand the problem, plan an approach, try it, check the result — and apply it across maths puzzles, design challenges and open-ended real problems. The goal is a child who has somewhere to start when they are stuck.',
            curriculum: {
              eyebrow: 'The four steps',
              title: 'One method, four steps, every session',
              lead: 'The method never changes; only the problems do. Repetition is the point — it has to be automatic by the time a child meets a problem alone.',
              stages: [
                {
                  tag: 'Step 1',
                  icon: '🔍',
                  title: 'Understand the problem',
                  text: 'Restating it in your own words, and naming exactly what is known and what is being asked.',
                  bullets: ['Restating the problem aloud', 'Listing what is known and unknown', 'Drawing the situation'],
                  outcome: 'Restates a problem accurately before starting.',
                },
                {
                  tag: 'Step 2',
                  icon: '🗺️',
                  title: 'Plan an approach',
                  text: 'Choosing a strategy on purpose — work backwards, simplify, look for a pattern, try a smaller case.',
                  bullets: ['A named toolkit of strategies', 'Simplifying to a smaller case', 'Working backwards from the goal'],
                  outcome: 'Names the strategy before attempting it.',
                },
                {
                  tag: 'Step 3',
                  icon: '🛠️',
                  title: 'Try, fail, adjust',
                  text: 'Attempting it properly, noticing where it broke, and changing one thing rather than starting over.',
                  bullets: ['Carrying a plan through', 'Recognising a dead end early', 'Changing one variable at a time'],
                  outcome: 'Adjusts an approach instead of abandoning it.',
                },
                {
                  tag: 'Step 4',
                  icon: '✅',
                  title: 'Check & explain',
                  text: 'Does the answer make sense, and can you convince somebody else that it is right?',
                  bullets: ['Sanity-checking against an estimate', 'Explaining the reasoning to the batch', 'Finding a second method'],
                  outcome: 'Justifies an answer and checks it independently.',
                },
              ],
            },
            sections: [
              {
                title: 'Problems with no single right answer',
                text: 'Roughly half the problems used are open: design a way to move water across a room, plan a school trip on a budget, work out how many rickshaws pass the gate in a day. These cannot be solved by recalling a formula, which is exactly why they teach method.',
                bullets: [
                  'Mix of closed maths problems and open design challenges',
                  'Estimation problems with no lookup-able answer',
                  'Children present competing solutions and compare them',
                  'Educators withhold the answer far longer than feels comfortable',
                ],
              },
              {
                title: 'The transfer we actually see',
                text: 'The change families notice is not better marks — it is a child who reads a hard question twice instead of saying they were not taught it. That habit shows up in maths first and spreads from there.',
              },
            ],
            cta: 'family',
          },
        },
      ],
    },
  ],
};
