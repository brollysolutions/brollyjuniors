/* Workshops — short-format courses, not miniature versions of the programmes.
 *
 * A workshop is three sessions across one weekend or a school holiday, with a
 * single finished thing at the end. That is a genuinely different offer from
 * the year-long programme of the same name, and these pages are written about
 * the format — what fits in nine hours, what a child walks out holding, who it
 * suits — rather than restating the programme curriculum in fewer words.
 *
 * The shared scaffolding lives in workshopPage() so each entry carries only
 * what is actually different about it. Duplicated titles and descriptions are
 * a real failure mode here, so every entry writes its own.
 */

const SESSION_ICONS = ['1️⃣', '2️⃣', '3️⃣'];

/* Builds the InfoPage-shaped object from the parts that differ per workshop. */
function workshopPage({
  name,
  ages,
  title,
  subtitle,
  quickAnswer,
  builds,
  sessions,
  suits,
  suitsText,
  nextStep,
  nextStepText,
}) {
  return {
    eyebrow: `${name} Workshop · ${ages}`,
    title,
    subtitle,
    chips: [
      { strong: ages, span: 'Age range' },
      { strong: '3 sessions', span: '3 hours each' },
      { strong: 'One weekend', span: 'Or a holiday week' },
      { strong: 'Max 10', span: 'Children per batch' },
    ],
    quickAnswer,
    curriculum: {
      eyebrow: 'Session by session',
      title: `Three sessions, ending with ${builds}`,
      lead: 'Nine hours is enough to finish one real thing properly. It is not enough to cover a syllabus, so we do not pretend otherwise.',
      stages: sessions.map((s, i) => ({
        tag: `Session ${i + 1}`,
        icon: SESSION_ICONS[i],
        title: s.title,
        text: s.text,
        bullets: s.bullets,
        outcome: s.outcome,
      })),
    },
    sections: [
      {
        title: 'How a workshop runs',
        text: 'Three sessions of three hours, held across a weekend or a holiday week. Batches are capped at ten, all materials are provided, and every child leaves with something finished — not a certificate of attendance.',
        bullets: [
          'Three sessions × three hours, one weekend or holiday week',
          'Materials and equipment provided',
          `Everyone finishes ${builds}`,
          'Families invited to the last thirty minutes of session three',
        ],
      },
      {
        title: suits,
        text: suitsText,
      },
      {
        title: nextStep,
        text: nextStepText,
      },
    ],
    cta: 'family',
  };
}

export const workshops = {
  key: 'workshops',
  label: 'Workshops',
  base: '/workshops',
  hubPath: '/workshops',
  menuTitle: 'Fun, Focused Workshops',
  groups: [
    {
      id: 'technology',
      title: 'Technology Workshops',
      icon: '🚀',
      blurb: 'Nine hours, one working thing built from nothing.',
      items: [
        {
          slug: 'ai-workshop',
          name: 'AI Workshop',
          icon: '🤖',
          summary: 'Train a model, break it, and learn why it was wrong.',
          seo: {
            title: 'AI Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session AI workshop for children in Hyderabad, ages 9–15. Train an image classifier, find its bias and build a working AI project in one weekend.',
            keyword: 'ai workshop for kids in hyderabad',
            crumb: 'AI Workshop',
          },
          page: workshopPage({
            name: 'AI',
            ages: 'Ages 9–15',
            title: 'AI workshop for kids in Hyderabad — train a model in a single weekend.',
            subtitle:
              'Children train an image classifier, deliberately break it, work out why it got things wrong, then build a small AI project of their own.',
            quickAnswer:
              'Brolly Juniors runs a three-session AI workshop for kids in Hyderabad for ages 9 to 15. Children train an image classification model in the browser, test it against examples it was never shown, investigate why it fails, and finish by building a small AI project they demonstrate to families. No coding experience is required.',
            builds: 'a trained model the child can demonstrate',
            sessions: [
              {
                title: 'What a model actually learns',
                text: 'Children train a classifier on their own photographs and watch it get better as examples are added.',
                bullets: ['Training data and labels', 'Training a classifier in the browser', 'Testing on unseen examples'],
                outcome: 'Trains a working classifier from their own images.',
              },
              {
                title: 'Breaking it on purpose',
                text: 'The most useful session. Children find inputs that fool their model and trace the failure back to the training data.',
                bullets: ['Finding inputs that fail', 'Bias that came from the data', 'Fixing it by changing the data'],
                outcome: 'Explains why their model got something wrong.',
              },
              {
                title: 'Build and demonstrate',
                text: 'Each child chooses a small problem and builds an AI solution to it, then presents it.',
                bullets: ['Choosing a problem worth solving', 'Building and testing the project', 'Demonstrating to families'],
                outcome: 'Presents a working AI project of their own.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children curious about AI who have never touched it, and children who use AI tools daily without any idea what is happening underneath. No coding is needed — everything runs in a browser with visual tools.',
            nextStep: 'After the workshop',
            nextStepText:
              'Children in Classes 6 to 10 who want to go further move into the year-long AI for Kids pathway, which covers the same ground in far greater depth across 72 sessions. The workshop is a genuine way to find out whether that interest is real before committing to a year.',
          }),
        },
        {
          slug: 'python-workshop',
          name: 'Python Workshop',
          icon: '🐍',
          summary: 'From a blank file to a game you can play.',
          seo: {
            title: 'Python Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session Python workshop for children in Hyderabad, ages 10–15. Start from a blank file and finish with a playable game. No prior coding needed.',
            keyword: 'python workshop for kids in hyderabad',
            crumb: 'Python Workshop',
          },
          page: workshopPage({
            name: 'Python',
            ages: 'Ages 10–15',
            title: 'Python workshop for kids in Hyderabad — a playable game by Sunday evening.',
            subtitle:
              'Real typed Python from the first hour: variables, loops and conditions, all in service of a game the child can play and change.',
            quickAnswer:
              'Brolly Juniors runs a three-session Python workshop for kids in Hyderabad for ages 10 to 15. Children write real Python from the first session — variables, input, loops and conditions — and finish with a playable text game they built themselves and can keep working on at home.',
            builds: 'a playable game the child wrote',
            sessions: [
              {
                title: 'First code, first error',
                text: 'Variables, input and output — plus the first error message, which is treated as the most useful thing that happens all day.',
                bullets: ['Variables, input and print', 'Reading an error and fixing it', 'Building a small interactive script'],
                outcome: 'Writes and debugs a first working program.',
              },
              {
                title: 'Loops, conditions & logic',
                text: 'The two structures that turn a script into a program that can do something different each time.',
                bullets: ['While and for loops', 'If / else decisions', 'Combining both in one program'],
                outcome: 'Builds a program that reacts to input.',
              },
              {
                title: 'Build the game',
                text: 'Everything assembled into a complete game, tested by other children in the batch.',
                bullets: ['Planning the game before coding', 'Building, testing and fixing', 'Playing each other’s games'],
                outcome: 'Ships a game other children can play.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who have done block-based coding and are ready for text, and complete beginners from about age ten. Typing speed is not a barrier — nobody is timed, and the code is short by design.',
            nextStep: 'After the workshop',
            nextStepText:
              'The year-long Python for Kids pathway for Classes 6 to 10 takes this to functions, data, files and a proper capstone project. Children who enjoyed the workshop usually join at the class level matching their school year.',
          }),
        },
        {
          slug: 'coding-workshop',
          name: 'Coding Workshop',
          icon: '💻',
          summary: 'Block-based coding for younger children, in a weekend.',
          seo: {
            title: 'Coding Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session block coding workshop for children in Hyderabad, ages 7–11. Animation, logic and a finished game built with drag-and-drop blocks.',
            keyword: 'coding workshop for kids in hyderabad',
            crumb: 'Coding Workshop',
          },
          page: workshopPage({
            name: 'Coding',
            ages: 'Ages 7–11',
            title: 'Coding workshop for kids in Hyderabad — a first game, built with blocks.',
            subtitle:
              'Sequence, loops and conditions taught through drag-and-drop blocks, so a seven-year-old can build something genuinely theirs in one weekend.',
            quickAnswer:
              'Brolly Juniors runs a three-session block coding workshop for kids in Hyderabad for ages 7 to 11. Children learn sequence, loops and conditions using drag-and-drop blocks, then build an animated game with a score and an ending. No reading-heavy typing is involved, so younger children can keep up comfortably.',
            builds: 'an animated game with a score',
            sessions: [
              {
                title: 'Making things move',
                text: 'Sequence and simple motion — instructions run in order, and order matters.',
                bullets: ['Sequencing instructions', 'Motion, costumes and sound', 'A first short animation'],
                outcome: 'Builds an animation that runs start to finish.',
              },
              {
                title: 'Loops & decisions',
                text: 'Repeating without repeating yourself, and making the program choose.',
                bullets: ['Repeat and forever loops', 'If / else blocks', 'Reacting to keys and clicks'],
                outcome: 'Makes a sprite react to the player.',
              },
              {
                title: 'Build a game with a score',
                text: 'Variables, win and lose conditions, and playtesting with the batch.',
                bullets: ['Score and lives as variables', 'Winning and losing conditions', 'Playtesting and fixing'],
                outcome: 'Finishes a game that can be won or lost.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children aged seven to eleven with no coding background at all. It is the gentlest entry point we run, and it works particularly well for a child who is curious but has been put off by something that looked too advanced.',
            nextStep: 'After the workshop',
            nextStepText:
              'The year-long Coding programme carries on from blocks into typed Python across four stages. Children who found the blocks easy can skip ahead — we assess rather than assume.',
          }),
        },
        {
          slug: 'robotics-workshop',
          name: 'Robotics Workshop',
          icon: '🦾',
          summary: 'Build a robot that follows a line, in three sessions.',
          seo: {
            title: 'Robotics Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session robotics workshop for children in Hyderabad, ages 9–15. Build, wire and program a line-following robot and race it. Kits provided.',
            keyword: 'robotics workshop for kids in hyderabad',
            crumb: 'Robotics Workshop',
          },
          page: workshopPage({
            name: 'Robotics',
            ages: 'Ages 9–15',
            title: 'Robotics workshop for kids in Hyderabad — build a line-following robot in a weekend.',
            subtitle:
              'Assemble the chassis, wire the motors and sensors, program the logic, then race it against the rest of the batch.',
            quickAnswer:
              'Brolly Juniors runs a three-session robotics workshop for kids in Hyderabad for ages 9 to 15. Children assemble a driving chassis, wire motors and a line sensor, program the following logic and finish with a timed race. Kits are provided and shared between at most two children.',
            builds: 'a robot that follows a line unaided',
            sessions: [
              {
                title: 'Build the chassis',
                text: 'Mechanical assembly — gears, wheels and a base that does not fall apart when it turns.',
                bullets: ['Chassis assembly from a plan', 'Gears, wheels and drive', 'Stability and weight distribution'],
                outcome: 'Assembles a robot that drives straight.',
              },
              {
                title: 'Wire it and drive it',
                text: 'Power, motor driver and sensor wiring, then manual control — and finding the loose connection.',
                bullets: ['Motor driver and power wiring', 'Connecting a line sensor', 'Fault-finding a dead motor'],
                outcome: 'Drives the robot under manual control.',
              },
              {
                title: 'Program it and race',
                text: 'Reading the sensor, deciding what to do about it, then a timed race on a taped course.',
                bullets: ['Reading and calibrating the sensor', 'Following logic and turn correction', 'Timed race on the course'],
                outcome: 'Completes the course with nobody touching it.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who like taking things apart, and children who find screen-only coding abstract. Seeing code change something physical in the room is the point, and it lands especially well with children who have not enjoyed programming before.',
            nextStep: 'After the workshop',
            nextStepText:
              'The year-long Robotics programme goes further into sensors, autonomy and challenge builds across four stages. The workshop covers roughly what the first stage covers, at speed.',
          }),
        },
      ],
    },
    {
      id: 'maths-and-brain',
      title: 'Maths & Brain Workshops',
      icon: '🧠',
      blurb: 'A weekend that changes how a child approaches number and logic.',
      items: [
        {
          slug: 'abacus-workshop',
          name: 'Abacus Workshop',
          icon: '🧮',
          summary: 'Meet the tool, and calculate without it by Sunday.',
          seo: {
            title: 'Abacus Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session abacus workshop for children in Hyderabad, ages 6–11. Bead technique, the number picture and first mental calculation in one weekend.',
            keyword: 'abacus workshop for kids in hyderabad',
            crumb: 'Abacus Workshop',
          },
          page: workshopPage({
            name: 'Abacus',
            ages: 'Ages 6–11',
            title: 'Abacus workshop for kids in Hyderabad — from first bead to first mental sum.',
            subtitle:
              'Bead technique, then the picture of the abacus in the head, then a calculation done with no abacus on the table at all.',
            quickAnswer:
              'Brolly Juniors runs a three-session abacus workshop for kids in Hyderabad for ages 6 to 11. Children learn correct finger technique and place value on the abacus, build a mental image of the beads, and finish the weekend adding two-digit numbers in their head with the abacus put away.',
            builds: 'a two-digit sum calculated mentally',
            sessions: [
              {
                title: 'Beads, place value & technique',
                text: 'How the abacus represents number, and the finger movements that make it fast.',
                bullets: ['Place value on the rods', 'Correct thumb and finger technique', 'Adding and subtracting single digits'],
                outcome: 'Sets and clears numbers with correct technique.',
              },
              {
                title: 'Rules & speed',
                text: 'The small friend and big friend rules, which are what make abacus work for any number.',
                bullets: ['Small friend combinations', 'Big friend combinations', 'Speed drills on the tool'],
                outcome: 'Applies the rules without hesitating.',
              },
              {
                title: 'The abacus in the head',
                text: 'The picture stays after the tool is taken away — the moment most parents come to see.',
                bullets: ['Visualising the bead positions', 'Calculating on the imagined abacus', 'Two-digit mental addition'],
                outcome: 'Adds two-digit numbers with no abacus present.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who are curious about abacus but where a two-year commitment feels like a lot to sign up for on a hunch. A weekend is enough to see whether the child takes to it, and enough to teach a genuinely useful skill either way.',
            nextStep: 'After the workshop',
            nextStepText:
              'The full Abacus programme runs across eight levels for ages 5 to 11 and takes mental calculation much further. Workshop children who continue usually enter at level two rather than starting again.',
          }),
        },
        {
          slug: 'vedic-maths-workshop',
          name: 'Vedic Maths Workshop',
          icon: '⚡',
          summary: 'Ten shortcuts that make arithmetic feel unfair.',
          seo: {
            title: 'Vedic Maths Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session Vedic maths workshop in Hyderabad for ages 9–15. Ten sutras for fast multiplication, squaring and division, with the reasoning behind each.',
            keyword: 'vedic maths workshop for kids in hyderabad',
            crumb: 'Vedic Maths Workshop',
          },
          page: workshopPage({
            name: 'Vedic Maths',
            ages: 'Ages 9–15',
            title: 'Vedic maths workshop for kids in Hyderabad — ten shortcuts, and why each works.',
            subtitle:
              'Fast multiplication, instant squaring and quick division, taught with the reasoning behind them so they can be trusted in an exam.',
            quickAnswer:
              'Brolly Juniors runs a three-session Vedic maths workshop in Hyderabad for ages 9 to 15. Children learn ten high-value sutras for multiplication, squaring and division, and — crucially — why each one works, so the methods can be used confidently in a school exam rather than as party tricks.',
            builds: 'ten methods a child can prove and use',
            sessions: [
              {
                title: 'Multiplication shortcuts',
                text: 'Base methods and vertically-crosswise multiplication, with the algebra shown.',
                bullets: ['Multiplying near a base', 'Vertically and crosswise', 'Why the method is valid'],
                outcome: 'Multiplies two-digit numbers in one line.',
              },
              {
                title: 'Squaring & special cases',
                text: 'Numbers ending in five, numbers near a base, and the patterns that make them instant.',
                bullets: ['Squaring numbers ending in 5', 'Squares near a base', 'Multiplying by 11 and 99'],
                outcome: 'Squares two-digit numbers mentally.',
              },
              {
                title: 'Division & checking',
                text: 'Fast division methods, plus digit-sum checking to catch an error before it costs a mark.',
                bullets: ['Division by 9 and near-base divisors', 'Digit-sum verification', 'Choosing when a shortcut applies'],
                outcome: 'Checks their own answer independently.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Students in Classes 5 to 10 who are competent at arithmetic but slow, and students preparing for objective-format tests where speed with accuracy is worth actual marks.',
            nextStep: 'After the workshop',
            nextStepText:
              'The full Vedic Maths programme for ages 8 to 14 covers the complete set of sutras with far more practice. The workshop covers the ten with the highest everyday return.',
          }),
        },
        {
          slug: 'chess-workshop',
          name: 'Chess Workshop',
          icon: '♟️',
          summary: 'Learn to play, then play a real tournament.',
          seo: {
            title: 'Chess Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session chess workshop for children in Hyderabad, ages 6–14. Rules, checkmate patterns and tactics, ending in a timed internal tournament.',
            keyword: 'chess workshop for kids in hyderabad',
            crumb: 'Chess Workshop',
          },
          page: workshopPage({
            name: 'Chess',
            ages: 'Ages 6–14',
            title: 'Chess workshop for kids in Hyderabad — from the rules to a real tournament game.',
            subtitle:
              'Movement and checkmate patterns, the tactics that win material, then a timed tournament with notation and a proper result.',
            quickAnswer:
              'Brolly Juniors runs a three-session chess workshop for kids in Hyderabad for ages 6 to 14. Complete beginners learn movement and the basic checkmates; everyone learns the core tactical patterns; and the workshop ends with a timed internal tournament where each child records their own game.',
            builds: 'a full tournament game, played and recorded',
            sessions: [
              {
                title: 'Rules & first checkmates',
                text: 'How everything moves, plus the three mates every player must be able to finish.',
                bullets: ['Movement, check and stalemate', 'Castling and promotion', 'Queen and rook checkmates'],
                outcome: 'Converts a winning position into a checkmate.',
              },
              {
                title: 'Tactics that win material',
                text: 'Forks, pins and skewers, drilled from puzzle positions until they are recognised on sight.',
                bullets: ['Forks, pins and skewers', 'Discovered attacks', 'Puzzle drilling under time'],
                outcome: 'Spots a one-move tactic reliably.',
              },
              {
                title: 'Tournament',
                text: 'Timed games with notation, real pairings and a final table.',
                bullets: ['Clock use and time management', 'Recording the game in notation', 'Reviewing one game afterwards'],
                outcome: 'Plays and reviews a timed, notated game.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Total beginners and children who know the moves but have never played anyone outside the family. Batches are split by experience so a beginner is not paired against a club player in session one.',
            nextStep: 'After the workshop',
            nextStepText:
              'The year-round Chess programme adds opening principles, endgame technique and a coached game review every fortnight. Several children join after realising in the tournament that they want to get better.',
          }),
        },
        {
          slug: 'brain-games-workshop',
          name: 'Brain Games Workshop',
          icon: '🧩',
          summary: 'A weekend of puzzles that fight back.',
          seo: {
            title: 'Brain Games Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session brain games workshop in Hyderabad for ages 6–12. Memory, logic and spatial puzzles with a team challenge finale. Screen-free.',
            keyword: 'brain games workshop for kids in hyderabad',
            crumb: 'Brain Games Workshop',
          },
          page: workshopPage({
            name: 'Brain Games',
            ages: 'Ages 6–12',
            title: 'Brain games workshop in Hyderabad — three days of puzzles that fight back.',
            subtitle:
              'Memory, logic and spatial challenges, all screen-free, finishing with a team puzzle relay that needs every child to contribute.',
            quickAnswer:
              'Brolly Juniors runs a three-session brain games workshop in Hyderabad for ages 6 to 12. Children work through memory, logic and spatial puzzles, learn named strategies for each, and finish with a team puzzle relay. Everything is physical — cards, tangrams and printed challenges, with no screens involved.',
            builds: 'a team puzzle relay solved together',
            sessions: [
              {
                title: 'Memory & attention',
                text: 'Strategies for holding more in mind, tested against puzzles that get progressively harder.',
                bullets: ['Chunking and grouping', 'Sequence recall challenges', 'Detail and change detection'],
                outcome: 'Recalls a long sequence using a strategy.',
              },
              {
                title: 'Logic & deduction',
                text: 'Grid puzzles and truth-teller problems, with children explaining why an answer must be right.',
                bullets: ['Logic grids and elimination', 'If-then reasoning chains', 'Justifying an answer aloud'],
                outcome: 'Solves a logic grid and defends each step.',
              },
              {
                title: 'Spatial puzzles & team relay',
                text: 'Tangrams, nets and mental rotation, then a relay where each team member unlocks the next stage.',
                bullets: ['Tangrams and dissection', 'Nets and mental rotation', 'Team puzzle relay'],
                outcome: 'Contributes a solved stage to a team relay.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'A good first Brolly Juniors experience for a younger child, and a genuinely enjoyable holiday activity that is not a screen. It suits mixed ability well because puzzles are set per child rather than per batch.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Brain Games programme rotates through the same four strands at increasing difficulty across the year, and pairs well with abacus or chess.',
          }),
        },
      ],
    },
    {
      id: 'creative',
      title: 'Creative Workshops',
      icon: '🎨',
      blurb: 'Make something real, and perform or exhibit it at the end.',
      items: [
        {
          slug: 'art-workshop',
          name: 'Art & Painting',
          icon: '🖌️',
          summary: 'Three techniques, one finished framed piece.',
          seo: {
            title: 'Art Workshop for Kids in Hyderabad | Painting | Brolly Juniors',
            description:
              'A three-session art workshop in Hyderabad for ages 6–15. Sketching, shading and watercolour technique, finishing with one framed piece to take home.',
            keyword: 'art workshop for kids in hyderabad',
            crumb: 'Art & Painting Workshop',
          },
          page: workshopPage({
            name: 'Art & Painting',
            ages: 'Ages 6–15',
            title: 'Art workshop for kids in Hyderabad — one finished, framed piece.',
            subtitle:
              'Observation sketching, light and shade, then watercolour — with the last session spent completing a single piece worth framing.',
            quickAnswer:
              'Brolly Juniors runs a three-session art and painting workshop in Hyderabad for ages 6 to 15. Children learn observational sketching, tonal shading and watercolour technique, then apply all three to one finished piece that goes home framed. All materials are provided.',
            builds: 'one finished, framed piece',
            sessions: [
              {
                title: 'Seeing & sketching',
                text: 'Drawing what is actually in front of you rather than the symbol in your head.',
                bullets: ['Breaking objects into shapes', 'Proportion and measuring by eye', 'Line confidence'],
                outcome: 'Sketches an object accurately from life.',
              },
              {
                title: 'Light, shade & depth',
                text: 'Where the light comes from, and how shadow turns a flat shape into an object.',
                bullets: ['Tonal range and blending', 'Core shadow and cast shadow', 'Adding texture'],
                outcome: 'Renders a form with believable shadow.',
              },
              {
                title: 'Colour & the final piece',
                text: 'Watercolour washes and mixing, applied to the piece that goes home.',
                bullets: ['Mixing rather than using neat colour', 'Washes, layering and control', 'Completing and framing the piece'],
                outcome: 'Completes a framed piece using all three techniques.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who love drawing and have never been taught technique, and children who have decided they "can’t draw" — which is almost always a technique gap rather than a talent one, and shifts noticeably inside nine hours.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Drawing and Painting programme runs four levels from line control to full composition, with a termly portfolio review and an annual exhibition.',
          }),
        },
        {
          slug: 'dance-workshop',
          name: 'Dance Workshop',
          icon: '💃',
          summary: 'Learn a full routine and perform it.',
          seo: {
            title: 'Dance Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session dance workshop in Hyderabad for ages 6–15. Warm-up, technique and a full choreographed routine performed for families on day three.',
            keyword: 'dance workshop for kids in hyderabad',
            crumb: 'Dance Workshop',
          },
          page: workshopPage({
            name: 'Dance',
            ages: 'Ages 6–15',
            title: 'Dance workshop for kids in Hyderabad — a full routine, learned and performed.',
            subtitle:
              'Warm-up and rhythm, then step vocabulary, then a complete choreographed piece performed for families at the end of session three.',
            quickAnswer:
              'Brolly Juniors runs a three-session dance workshop in Hyderabad for ages 6 to 15. Children build rhythm and body awareness, learn a set of steps and formations, and finish by performing a complete choreographed routine for families. No prior dance experience is needed.',
            builds: 'a full routine performed to an audience',
            sessions: [
              {
                title: 'Rhythm & warm-up',
                text: 'Finding the beat, counting in eights, and a warm-up children can repeat anywhere.',
                bullets: ['Counting music in eights', 'Warm-up and stretch routine', 'Basic body isolation'],
                outcome: 'Moves in time and counts the music.',
              },
              {
                title: 'Steps & sequence',
                text: 'The step vocabulary for the routine, learned in chunks and joined together.',
                bullets: ['Step vocabulary for the piece', 'Joining sequences smoothly', 'Spacing and direction'],
                outcome: 'Performs half the routine from memory.',
              },
              {
                title: 'Formation & performance',
                text: 'Formations, timing as a group, and the performance itself.',
                bullets: ['Group formations and transitions', 'Full run-throughs', 'Performance for families'],
                outcome: 'Performs the full routine in formation.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Complete beginners and children who dance constantly at home but have never learned a set routine. The performance is deliberately small and informal — families only, no stage lighting, no costume expense.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Dance programme runs four levels from rhythm through to full choreography, with a termly showcase and a choice of classical or freestyle as a main style from around age nine.',
          }),
        },
        {
          slug: 'music-workshop',
          name: 'Music Workshop',
          icon: '🎹',
          summary: 'Play your first piece on keyboard or guitar.',
          seo: {
            title: 'Music Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session music workshop in Hyderabad for ages 7–15. Learn rhythm, first notes or chords, and play a complete piece by the end of the weekend.',
            keyword: 'music workshop for kids in hyderabad',
            crumb: 'Music Workshop',
          },
          page: workshopPage({
            name: 'Music',
            ages: 'Ages 7–15',
            title: 'Music workshop for kids in Hyderabad — play a complete piece by Sunday.',
            subtitle:
              'Choose keyboard or guitar, learn rhythm and your first notes or chords, and finish playing a full short piece with the group.',
            quickAnswer:
              'Brolly Juniors runs a three-session music workshop in Hyderabad for ages 7 to 15 on keyboard or guitar. Children learn posture and hand position, count rhythm aloud, read their first notation and finish by playing a complete short piece together. Instruments are provided for the workshop.',
            builds: 'one complete piece played through',
            sessions: [
              {
                title: 'Hands, posture & first sounds',
                text: 'Holding the instrument correctly, which decides how everything after it feels.',
                bullets: ['Posture and hand position', 'First notes or first chord', 'Counting rhythm out loud'],
                outcome: 'Produces clean notes with correct hand position.',
              },
              {
                title: 'Reading & rhythm',
                text: 'Enough notation to follow a line of music rather than copy the teacher.',
                bullets: ['Note values and the stave', 'Following a written line', 'Playing in time with a count'],
                outcome: 'Plays a short written phrase in time.',
              },
              {
                title: 'The piece',
                text: 'The full piece assembled, rehearsed and played through together.',
                bullets: ['Learning the piece in sections', 'Playing along with others', 'Final play-through'],
                outcome: 'Plays a complete piece with the group.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children considering an instrument but unsure which, and families reluctant to buy a keyboard on a guess. Three sessions is genuinely enough to tell whether a child enjoys the practice, which is the part that decides everything.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Music programme runs four levels on keyboard, guitar or percussion, with notation reading, ear training and ensemble playing — and instruments available in the centre for the first term.',
          }),
        },
        {
          slug: 'drama-workshop',
          name: 'Drama Workshop',
          icon: '🎭',
          summary: 'Improvise, rehearse, and perform a short scene.',
          seo: {
            title: 'Drama Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session drama workshop in Hyderabad for ages 7–15. Voice, improvisation and a short scene rehearsed and performed for families on day three.',
            keyword: 'drama workshop for kids in hyderabad',
            crumb: 'Drama Workshop',
          },
          page: workshopPage({
            name: 'Drama',
            ages: 'Ages 7–15',
            title: 'Drama workshop for kids in Hyderabad — a short scene, rehearsed and performed.',
            subtitle:
              'Voice and movement games, then improvisation, then a short scripted scene every child has real lines in.',
            quickAnswer:
              'Brolly Juniors runs a three-session drama workshop in Hyderabad for ages 7 to 15. Children work on voice and projection, learn improvisation, then rehearse and perform a short scripted scene for families. Scenes are adapted to the batch so every child has speaking lines.',
            builds: 'a short scene performed with real lines',
            sessions: [
              {
                title: 'Voice, movement & games',
                text: 'Being heard, moving with purpose, and losing the self-consciousness through group games.',
                bullets: ['Projection and diction', 'Movement and stage awareness', 'Ensemble warm-up games'],
                outcome: 'Speaks audibly and clearly across a room.',
              },
              {
                title: 'Improvisation',
                text: 'Inventing a scene on the spot — the fastest way to stop fearing a forgotten line.',
                bullets: ['Accepting and building on an offer', 'Quick character and status', 'Group scene-building'],
                outcome: 'Sustains an improvised scene with a partner.',
              },
              {
                title: 'Rehearse & perform',
                text: 'The scripted scene blocked, rehearsed and performed for families.',
                bullets: ['Learning lines and blocking', 'Building a character quickly', 'Performance for families'],
                outcome: 'Performs a speaking role in a staged scene.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Confident performers and — more usefully — quiet children, who often find playing somebody else far easier than being themselves. Nobody is made to perform before they are ready, and improvisation comes first for exactly that reason.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Drama programme runs four modules from voice through to a full termly production, with scripts adapted so every child has lines.',
          }),
        },
      ],
    },
    {
      id: 'communication',
      title: 'Communication Workshops',
      icon: '🗣️',
      blurb: 'Speak up, be understood, and hold your ground.',
      items: [
        {
          slug: 'public-speaking-workshop',
          name: 'Public Speaking',
          icon: '🎤',
          summary: 'Write, rehearse and deliver a real speech.',
          seo: {
            title: 'Public Speaking Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session public speaking workshop in Hyderabad for ages 8–15. Structure, delivery and nerves, ending with a speech delivered to an audience.',
            keyword: 'public speaking workshop for kids in hyderabad',
            crumb: 'Public Speaking Workshop',
          },
          page: workshopPage({
            name: 'Public Speaking',
            ages: 'Ages 8–15',
            title: 'Public speaking workshop in Hyderabad — one real speech, start to finish.',
            subtitle:
              'Structure a talk, rehearse it properly, manage the nerves, and deliver it to an audience that is not your own family.',
            quickAnswer:
              'Brolly Juniors runs a three-session public speaking workshop in Hyderabad for ages 8 to 15. Each child chooses a topic, structures a three-minute speech, rehearses it with feedback, and delivers it to an audience on the final day. Nerves are treated as a technical problem with techniques, not a character flaw.',
            builds: 'a three-minute speech delivered to an audience',
            sessions: [
              {
                title: 'Structure & content',
                text: 'What makes a talk hold together: an opening worth hearing, three points, and an ending.',
                bullets: ['Choosing a topic worth three minutes', 'Opening, three points, close', 'Cutting what does not earn its place'],
                outcome: 'Writes a structured three-minute speech.',
              },
              {
                title: 'Delivery & nerves',
                text: 'Pace, pauses, eye contact and the specific techniques that make nerves manageable.',
                bullets: ['Pace, pause and emphasis', 'Eye contact and stance', 'Breathing and nerve techniques'],
                outcome: 'Delivers a rehearsed section confidently.',
              },
              {
                title: 'Rehearse & deliver',
                text: 'Full rehearsals with feedback, then the real thing in front of an audience.',
                bullets: ['Rehearsal with peer feedback', 'Handling a mistake mid-speech', 'Final delivery to an audience'],
                outcome: 'Delivers the full speech without notes.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children facing an assembly, an elocution contest or a class presentation, and children who freeze at the thought of any of the above. Nine hours will not make a child fearless; it reliably makes them competent, which turns out to matter more.',
            nextStep: 'After the workshop',
            nextStepText:
              'The Public Speaking programme for Classes 1 to 5 develops this across a full pathway, and the Communication Skills programme takes older children into group discussion, listening and disagreement.',
          }),
        },
        {
          slug: 'spoken-english-workshop',
          name: 'Spoken English',
          icon: '💬',
          summary: 'Three days of talking, and it gets easier.',
          seo: {
            title: 'Spoken English Workshop for Kids in Hyderabad | Brolly Juniors',
            description:
              'A three-session spoken English workshop in Hyderabad for ages 8–15. Conversation practice, everyday vocabulary and pronunciation in small batches.',
            keyword: 'spoken english workshop for kids in hyderabad',
            crumb: 'Spoken English Workshop',
          },
          page: workshopPage({
            name: 'Spoken English',
            ages: 'Ages 8–15',
            title: 'Spoken English workshop for kids in Hyderabad — three days of actually talking.',
            subtitle:
              'Structured conversation for most of every session, with vocabulary and pronunciation fixed in context rather than taught as lists.',
            quickAnswer:
              'Brolly Juniors runs a three-session spoken English workshop in Hyderabad for ages 8 to 15. Children spend most of each session in structured conversation — describing, narrating, asking and disagreeing — with pronunciation and sentence patterns corrected in context. Batches are capped at ten so nobody hides.',
            builds: 'a two-minute unrehearsed conversation',
            sessions: [
              {
                title: 'Getting talking',
                text: 'Everyday phrases and question forms, used immediately in paired conversation.',
                bullets: ['Introductions and everyday requests', 'Question forms in use', 'Speaking before it is perfect'],
                outcome: 'Holds a short conversation about themselves.',
              },
              {
                title: 'Describing & narrating',
                text: 'Connected speech — telling what happened, in order, with the right connectives.',
                bullets: ['Past-tense narration', 'Connectives: then, because, so', 'Describing a picture in detail'],
                outcome: 'Narrates an event in five connected sentences.',
              },
              {
                title: 'Opinion & fluency',
                text: 'Saying what you think, giving a reason, and speaking unrehearsed for a full minute.',
                bullets: ['Stating and supporting an opinion', 'Polite disagreement', 'One-minute impromptu talks'],
                outcome: 'Speaks for a minute on an unseen topic.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who understand English perfectly and go quiet when asked to speak it, and children moving into an English-medium school. It is not a grammar class — it is conversation practice with correction.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Spoken English programme runs four levels from everyday phrases to unrehearsed fluency, with seventy per cent of every session spent speaking.',
          }),
        },
        {
          slug: 'communication-skills-workshop',
          name: 'Communication Skills',
          icon: '🤝',
          summary: 'Listening, explaining and working with other people.',
          seo: {
            title: 'Communication Skills Workshop in Hyderabad | Brolly Juniors',
            description:
              'A three-session communication skills workshop in Hyderabad for ages 9–15. Listening, explaining clearly, group work and handling disagreement calmly.',
            keyword: 'communication skills workshop in hyderabad',
            crumb: 'Communication Workshop',
          },
          page: workshopPage({
            name: 'Communication Skills',
            ages: 'Ages 9–15',
            title: 'Communication skills workshop in Hyderabad — the half of talking that is listening.',
            subtitle:
              'Active listening, explaining something to someone who does not already understand it, group work and calm disagreement — all practised as tasks.',
            quickAnswer:
              'Brolly Juniors runs a three-session communication skills workshop in Hyderabad for ages 9 to 15. Children practise active listening, explaining an unfamiliar idea, working in a group towards a shared output and disagreeing constructively. Each session is built around a task the skill is the only way to complete.',
            builds: 'a group task delivered together',
            sessions: [
              {
                title: 'Listening properly',
                text: 'Summarising before replying, which turns out to be surprisingly hard and immediately useful.',
                bullets: ['Summarising a partner’s point', 'Asking a clarifying question', 'Not composing your reply mid-sentence'],
                outcome: 'Restates a partner’s point accurately.',
              },
              {
                title: 'Explaining clearly',
                text: 'Getting an idea into someone else’s head, in order, without jargon or backtracking.',
                bullets: ['Structuring an explanation', 'Checking you were understood', 'Choosing a helpful example'],
                outcome: 'Teaches a peer something they did not know.',
              },
              {
                title: 'Group work & disagreement',
                text: 'A shared task with a deadline, plus a structured disagreement to resolve along the way.',
                bullets: ['Roles and turn-taking', 'Disagreeing with the idea, not the person', 'Agreeing and moving on'],
                outcome: 'Delivers a group output despite disagreement.',
              },
            ],
            suits: 'Who this suits',
            suitsText:
              'Children who are articulate one-to-one and vanish in a group, children who talk over everyone, and children about to face group discussions or interviews. All three benefit, for different reasons, from the same tasks.',
            nextStep: 'After the workshop',
            nextStepText:
              'The weekly Communication Skills programme runs four modules with a performance task at the end of each, and pairs naturally with the Leadership programme for older children.',
          }),
        },
      ],
    },
  ],
};
