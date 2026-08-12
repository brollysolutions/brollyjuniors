/* Edutainment detail layer for the Python curriculum.
   One seed per module, in the same order as pythonCurriculum.
   `concepts` aligns index-for-index with that module's `topics` array. */
export const pythonModuleSeeds = {
  6: [
    {
      hook: 'Before a computer can be clever, somebody has to be clear. That somebody is you.',
      bigIdea:
        'A computer is astonishingly fast and astonishingly literal — it does exactly what it is told, in exactly the order it is told. Programming is the skill of chopping a job into steps so small and so obvious that nothing is left to guess. In this module students write those steps in plain English first, then translate them into Python.',
      why: 'Every game, app and robot your child has ever used started life as a list of clear steps. Thinking in steps sharpens maths reasoning and explanation long before it sharpens code.',
      concepts: [
        'An algorithm is a recipe. Brushing teeth is an algorithm: pick up brush, add paste, brush for two minutes, rinse. Swap two steps and the result turns strange — and that is exactly how bugs are born.',
        'The editor is where you write, Run is the “go” button, and the output panel is where Python answers back. Knowing which box does what removes most beginner panic on day one.',
        'print() is Python’s voice. Whatever you place inside the brackets, Python says on screen — quote marks, spelling mistakes and all.',
      ],
      funFact: 'Python is not named after the snake. Guido van Rossum named it after the British comedy show Monty Python’s Flying Circus.',
      misconception: '“The computer understood what I meant.” It never does. It understood what you typed — which is why one missing bracket can stop a whole program.',
      tryThis: 'Write instructions for making a jam sandwich, then ask a parent to follow them exactly and literally. The mess on the plate is the lesson.',
      vocab: [
        ['algorithm', 'A step-by-step plan for getting something done.'],
        ['program', 'An algorithm written in a language a computer can run.'],
        ['syntax', 'The spelling and punctuation rules of a coding language.'],
      ],
    },
    {
      hook: 'A variable is a labelled box. Python will happily keep anything you put in it — until you swap it for something else.',
      bigIdea:
        'Programs become useful the moment they stop being fixed. Variables let a program hold information, input lets a person hand information over, and together they turn a one-line message into something that responds to whoever is sitting at the keyboard.',
      why: 'This is the first moment a child’s program talks back to a real human. It is usually the session where coding stops feeling like copying and starts feeling like making.',
      concepts: [
        'Text (strings) and numbers behave differently on purpose. "5" + "5" gives 55 because Python glues text together, while 5 + 5 gives 10 because Python adds numbers. Same keys, different meaning.',
        'A variable is a name stuck to a value, like a name tag on a lunchbox. Change what is inside and the name still works — that is what makes programs flexible.',
        'input() pauses the program and waits for a human. Whatever is typed arrives as text, so numbers need converting before maths will work on them.',
      ],
      funFact: 'Whatever a person types at input() arrives as text — even 42. Forgetting to convert it is the single most common first-year Python bug in the world.',
      misconception: '“= means equals.” In Python, = means “put this value into this box”. Checking whether two things are equal needs ==.',
      tryThis: 'Build a three-question program that asks a family member their name, favourite food and lucky number, then prints a silly sentence using all three.',
      vocab: [
        ['variable', 'A named place to store a value that can change.'],
        ['string', 'Text data, always wrapped in quote marks.'],
        ['input', 'Information a program collects from a person.'],
      ],
    },
    {
      hook: 'This is where a program stops following one path and starts making choices.',
      bigIdea:
        'Conditions let a program ask a yes-or-no question and act on the answer. Every login screen, every game-over message and every “are you sure?” box in existence is built from this one idea, repeated at scale.',
      why: 'Decision logic is the bridge between a script that runs the same way every time and software that reacts to the world.',
      concepts: [
        'A boolean has only two possible values: True or False. There is no “sort of”. Learning to phrase a question so it has a clean yes/no answer is half the skill.',
        'if runs a block when the answer is True; else covers everything left over. elif lets you stack extra questions in between, checked in order from top to bottom.',
        'Comparison operators (>, <, ==, !=, >=, <=) are how you ask the question. Choosing > instead of >= is a one-character difference that changes who passes and who fails.',
      ],
      funFact: 'Python is one of very few popular languages where indentation is not a style choice — the spaces at the start of a line actually decide what belongs inside the if.',
      misconception: '“More ifs means smarter code.” Often the opposite. Two clear conditions usually beat six tangled ones, and are far easier to fix later.',
      tryThis: 'Write a program that reads a test score and prints a grade. Then hand it to a sibling and challenge them to find a score that breaks it.',
      vocab: [
        ['boolean', 'A value that is either True or False.'],
        ['condition', 'A question the program tests before deciding what to do.'],
        ['indentation', 'The spaces that show which lines belong inside a block.'],
      ],
    },
    {
      hook: 'Why type a line one hundred times when you can teach the computer to type it for you?',
      bigIdea:
        'A loop repeats a block of code without repeating the typing. Students meet the counted loop (do this ten times) and the conditional loop (keep going until something changes), and learn to spot which one a problem is asking for.',
      why: 'Loops are where students first feel real leverage — five lines of code producing a page of output. It is also where patience with debugging genuinely begins.',
      concepts: [
        'A for loop runs a fixed number of times, like a running track with a set number of laps. range() decides how many laps and where they start.',
        'A while loop keeps going as long as a condition stays True — a game that runs until lives reach zero, or a question repeated until the answer is valid.',
        'An infinite loop happens when the exit condition can never be reached. Reading your own loop out loud and asking “what makes this stop?” fixes it almost every time.',
      ],
      funFact: 'The first infinite loop in this class is a rite of passage. Ctrl + C is the escape hatch every programmer learns on the same day.',
      misconception: '“The loop is broken because it printed too much.” Usually the loop is fine and the print statement is simply sitting inside it when it belonged outside.',
      tryThis: 'Use nested loops to print a multiplication grid from 1 to 10, lined up in neat columns. Getting the spacing right is a puzzle of its own.',
      vocab: [
        ['loop', 'Code that repeats.'],
        ['iteration', 'One single pass through a loop.'],
        ['infinite loop', 'A loop with no reachable stopping point.'],
      ],
    },
    {
      hook: 'A function is a spell you write once and can then cast whenever you like.',
      bigIdea:
        'Functions let students wrap a useful chunk of work in a name, hand it information, and get an answer back. Programs stop being one long scroll and start being a set of named parts that can be built and tested separately.',
      why: 'This is the first real engineering habit: solve a problem once, name it well, and reuse it. It is also the skill that makes larger projects possible at all.',
      concepts: [
        'Reusable code means writing the logic once and calling it by name. If the logic later turns out to be wrong, there is one place to fix instead of nine.',
        'Parameters are the slots a function leaves open for information. greet("Aarav") and greet("Meera") run the same code with different inputs.',
        'return hands a value back to whoever called the function, so the answer can be stored, printed or fed into the next calculation. Printing and returning are not the same thing.',
      ],
      funFact: 'Professional codebases are judged less on cleverness than on naming. A function called calculate_total_price is worth more than one called ctp.',
      misconception: '“print and return do the same job.” print shows a value to a human; return gives it back to the program. Mixing them up breaks maths chains silently.',
      tryThis: 'Build a small toolkit of four functions — area of a rectangle, average of three numbers, Celsius to Fahrenheit, and a percentage — then use them all in one menu program.',
      vocab: [
        ['function', 'A named, reusable block of code.'],
        ['parameter', 'An input slot a function accepts.'],
        ['return', 'The value a function sends back.'],
      ],
    },
    {
      hook: 'One variable holds one thing. A list holds the whole class.',
      bigIdea:
        'Lists let a program manage many values under one name — scores, names, tasks, anything. Combined with loops, they let a handful of lines handle five items or five thousand without changing shape.',
      why: 'Almost all real data arrives as a collection. Once a student can loop through a list confidently, the door to sorting, searching and data projects opens.',
      concepts: [
        'A list is an ordered shelf of values. Positions start at 0, which feels odd for about a week and then becomes second nature. append() adds, remove() takes away.',
        'Looping through a list means visiting each item in turn and doing the same work on each — total up scores, print names, count how many pass.',
        'Simple searching means walking the list and checking each item against what you are hunting for. Slow but honest — and the foundation of every faster method later.',
      ],
      funFact: 'Counting from 0 is not a quirk. It comes from how memory addresses work: the first item sits 0 steps from the start of the list.',
      misconception: '“The last item of a 5-item list is at position 5.” It is at position 4. Off-by-one errors have their own name in the industry because they are so common.',
      tryThis: 'Make a homework tracker that lets you add tasks, tick them off, and print how many are left. Keep using it for a week and improve whatever annoys you.',
      vocab: [
        ['list', 'An ordered collection of values under one name.'],
        ['index', 'The position number of an item, starting at 0.'],
        ['append', 'To add an item to the end of a list.'],
      ],
    },
    {
      hook: 'Give the computer a pen, tell it where to walk, and watch geometry turn into art.',
      bigIdea:
        'Turtle graphics turns code into something visible on screen. Every wrong angle is instantly obvious, which makes it the fastest feedback loop in the whole beginner curriculum — and quietly teaches coordinates, angles and repetition at the same time.',
      why: 'Visual output makes debugging intuitive. A child who cannot yet read an error message can absolutely see that the square came out as a triangle.',
      concepts: [
        'Coordinates locate the turtle on a grid — x across, y up. Moving to a point is the same skill used in maps, graphs and game design.',
        'Angles decide direction. A square needs four 90° turns; a pentagon needs five 72° turns. The pattern 360 ÷ sides is discovered, not told.',
        'Procedural drawing means describing a shape as instructions rather than tracing it. Once the instructions live in a loop or a function, one line can draw fifty shapes.',
      ],
      funFact: 'Turtle graphics comes from the Logo language of 1967, where children steered a real robot turtle that dragged a pen across paper on the classroom floor.',
      misconception: '“Turtle is a baby toy, not real coding.” The loops, functions and angle maths behind a spiral are exactly the ones used in game and animation engines.',
      tryThis: 'Draw a shape with n sides using a single loop, then wrap it in a function and call it with n from 3 to 12. Watch the polygon approach a circle.',
      vocab: [
        ['coordinate', 'An (x, y) pair naming a point on screen.'],
        ['degree', 'The unit used to measure a turn.'],
        ['procedure', 'A named set of drawing or action steps.'],
      ],
    },
    {
      hook: 'A game is just loops, conditions and randomness wearing a costume.',
      bigIdea:
        'This module pulls everything so far into one working system. Random numbers create surprise, variables track score and lives, conditions decide win and lose, and a loop keeps the whole thing running until somebody stops playing.',
      why: 'Games are where students first meet state — information that changes over time and must stay consistent. Managing state is the core of all serious software.',
      concepts: [
        'Randomness makes a program unpredictable on purpose. random.randint() is the dice, and seeding it the same way twice proves computer randomness is really clever arithmetic.',
        'Score and lives are just variables that go up and down. The hard part is deciding exactly when they change, and making sure they never change twice by accident.',
        'Testing means trying to break your own game — entering a letter where a number belongs, guessing outside the range, playing badly on purpose.',
      ],
      funFact: 'Computers cannot produce true randomness on their own. They use pseudo-random generators — formulas so complex the output only looks random.',
      misconception: '“It worked when I played it.” You knew the rules. Testing means handing it to someone who does not, and watching what they do to it.',
      tryThis: 'Add a difficulty setting to your guessing game: easy gives ten tries and a hot-or-cold hint, hard gives four tries and silence.',
      vocab: [
        ['random', 'An unpredictable value chosen by the computer.'],
        ['state', 'The information a program is currently holding.'],
        ['test case', 'A specific situation used to check a program.'],
      ],
    },
    {
      hook: 'Nine modules of skills, one idea of your own, and a year to point at.',
      bigIdea:
        'The capstone is a student-chosen project built in stages over eight sessions: plan it, build the smallest working version, add features one at a time, test it on a real person, then demonstrate it and explain the code out loud.',
      why: 'Explaining your own code is the truest test of understanding there is. A project a child can walk an adult through is worth more than a folder of finished exercises.',
      concepts: [
        'Planning means writing what the program must do before writing any code — inputs, outputs, and one sentence describing success.',
        'Building in stages means always having something that runs. Add one feature, test it, save it, then add the next. Never break everything at once.',
        'Demonstrating means showing the program working and then answering “why did you write it that way?” — the question that separates copying from understanding.',
      ],
      funFact: 'Professional teams call the smallest working version a “minimum viable product”. Students build one in session two, long before they have heard the phrase.',
      misconception: '“Bigger project, better grade.” A small program that works perfectly and is fully understood beats an ambitious one held together with hope.',
      tryThis: 'Before coding, describe your project to someone in exactly three sentences: what it does, who it is for, and how you will know it worked.',
      vocab: [
        ['capstone', 'A final project that pulls a whole year together.'],
        ['prototype', 'An early working version used to test an idea.'],
        ['iteration', 'One round of building, testing and improving.'],
      ],
    },
  ],

  7: [
    {
      hook: 'A quick tune-up before the engine gets bigger.',
      bigIdea:
        'This module re-establishes the fundamentals at a higher standard: correct data types, clean input and output, and code another person can actually read. Speed comes later — clarity comes now.',
      why: 'Class 7 work stacks quickly. Students who write readable code spend the rest of the year building; students who do not spend it hunting for their own mistakes.',
      concepts: [
        'Data types decide what operations make sense. You can multiply an int, join a string and check a bool — mixing them without converting is where the errors live.',
        'Good input and output means prompting clearly, validating what arrives, and formatting results so a human can read them at a glance. f-strings make this painless.',
        'Readable code means meaningful names, consistent spacing and short comments explaining why, not what. Your future self is the reader you are writing for.',
      ],
      funFact: 'Developers spend roughly ten times longer reading code than writing it. Every minute spent on a clear variable name pays itself back many times over.',
      misconception: '“Comments make code good.” Clear naming makes code good. Comments explain the reasoning that names cannot carry.',
      tryThis: 'Take any program you wrote last year and rename every variable to something honest. Do not change the logic — just the names — and see how much clearer it reads.',
      vocab: [
        ['data type', 'The kind of value a variable holds.'],
        ['f-string', 'A Python string that can embed values directly.'],
        ['refactor', 'To improve code structure without changing what it does.'],
      ],
    },
    {
      hook: 'Real users type strange things. Good programs expect it.',
      bigIdea:
        'This module is about programs that survive contact with actual humans. Nested conditions handle layered rules, logical operators combine questions, and validation politely refuses bad input instead of crashing.',
      why: 'Handling the unexpected is what separates a demo from a tool. It is also excellent logical training — the same reasoning used in maths proofs and legal-style rules.',
      concepts: [
        'Nested conditions are questions inside questions: if the student is eligible, then check whether they are also on time. Drawing them as a flowchart first prevents most tangles.',
        'Validation means checking input before trusting it. Is it a number? Is it in range? Is it empty? Loop the question until the answer is usable.',
        'and, or and not combine conditions. and needs everything true, or needs at least one, not flips the answer. Getting these wrong produces rules that quietly let the wrong people through.',
      ],
      funFact: 'The rule that “everything after or is checked only if needed” is called short-circuit evaluation — and programmers use it deliberately to avoid crashes.',
      misconception: '“if age > 12 and < 18” looks right but is not. Python needs the variable named twice: age > 12 and age < 18.',
      tryThis: 'Write a checker for a competition with three rules, then try to find an input combination that gets an ineligible entry accepted.',
      vocab: [
        ['validation', 'Checking that input is usable before acting on it.'],
        ['logical operator', 'and, or, not — used to combine conditions.'],
        ['edge case', 'An unusual input right at the boundary of the rules.'],
      ],
    },
    {
      hook: 'Roll a dice six times and anything can happen. Roll it six thousand times and mathematics shows up.',
      bigIdea:
        'Loops inside loops let programs work across rows and columns, and repeated random trials let students simulate things that would be tedious to test by hand. This is the module where code starts answering questions rather than just performing tasks.',
      why: 'Simulation connects coding directly to probability and science. Students stop guessing what is likely and start measuring it.',
      concepts: [
        'Nested loops run one loop inside another — the outer picks the row, the inner walks the columns. Grids, tables and patterns all come from this shape.',
        'Counters accumulate results across a loop: total, how many times, highest so far. Initialising them in the right place is the whole trick.',
        'Random simulation runs an experiment thousands of times and measures the outcomes. The results converge on the mathematical answer, visibly.',
      ],
      funFact: 'This technique is called the Monte Carlo method, named after the casino. It was invented during the 1940s to solve physics problems no equation could crack.',
      misconception: '“The dice is due for a six.” It is not, and your own simulation will prove it across ten thousand rolls.',
      tryThis: 'Simulate rolling two dice 10,000 times and count how often each total appears. Chart it and explain why 7 wins.',
      vocab: [
        ['nested loop', 'A loop running inside another loop.'],
        ['counter', 'A variable that accumulates a running total.'],
        ['simulation', 'Modelling a real process by running it many times.'],
      ],
    },
    {
      hook: 'Every function is a promise: give me this, and I will give you that.',
      bigIdea:
        'Students move from writing functions to designing them — deciding what goes in, what comes out, and what the function has no business knowing about. Scope explains why a variable that exists inside a function is invisible outside it.',
      why: 'Function design is the beginning of software architecture. It is also the fastest way to make a long program understandable.',
      concepts: [
        'Parameters define the contract. Fewer, clearer parameters mean a function that is easier to reuse and much harder to misuse.',
        'Return patterns matter: return one clear value, return early when the answer is already known, and avoid printing inside a function that is meant to calculate.',
        'Local scope means variables born inside a function die with it. This is a feature — it stops distant parts of a program from stepping on each other.',
      ],
      funFact: 'The idea of local scope was invented to solve a real crisis: in early languages every variable was global, and large programs became almost impossible to fix.',
      misconception: '“Global variables are simpler.” They are simpler for ten lines and a nightmare at two hundred, because anything can change them from anywhere.',
      tryThis: 'Build a challenge engine that generates a random maths question, checks the answer and tracks a score — with each job in its own function.',
      vocab: [
        ['scope', 'The region of a program where a name is visible.'],
        ['argument', 'The actual value passed into a parameter.'],
        ['side effect', 'A change a function makes beyond returning a value.'],
      ],
    },
    {
      hook: 'Different jobs need different containers. Choosing well is half the solution.',
      bigIdea:
        'Lists keep order, tuples refuse to change, and dictionaries look things up by name instead of position. Once students can nest them, they can model almost any real-world information.',
      why: 'Choosing the right structure often removes the need for clever code entirely. It is the earliest form of genuine design judgement.',
      concepts: [
        'Choosing a collection: a list for an ordered sequence, a tuple for values that must not change, a dictionary when each value has a natural label like "name" or "score".',
        'Nested data means collections inside collections — a list of dictionaries is how almost every real dataset on the internet is shaped.',
        'Updating safely means knowing which structures can change in place and which cannot, and what happens when two names point at the same list.',
      ],
      funFact: 'Dictionary lookup barely slows down as it grows. Searching a million-key dictionary takes roughly the same time as searching one with ten.',
      misconception: '“A dictionary is just a fancy list.” A list finds by position; a dictionary finds by meaning. That difference changes how you design the whole program.',
      tryThis: 'Store five classmates as a list of dictionaries with name, subject and score, then print the top scorer without sorting by hand.',
      vocab: [
        ['tuple', 'An ordered collection that cannot be changed.'],
        ['dictionary', 'A collection of key–value pairs.'],
        ['key', 'The label used to look a value up.'],
      ],
    },
    {
      hook: 'Close the program and the data vanishes — unless you wrote it down.',
      bigIdea:
        'Files give programs a memory that outlives a single run. Alongside file handling, students sharpen string methods for cleaning and searching text, so saved records are actually usable later.',
      why: 'Persistence is the difference between a toy and a tool. A journal that forgets everything on exit is not a journal.',
      concepts: [
        'String methods slice, strip, split, join and search text. Most real data arrives messy, and cleaning it is a genuine everyday programming job.',
        'Reading and writing text means opening a file, doing the work and closing it properly — which is why the with statement exists and why professionals always use it.',
        'Simple records mean choosing a consistent line format, such as date | mood | note, so the program can read back exactly what it wrote.',
      ],
      funFact: 'Opening a file in "w" mode erases everything already in it, instantly and without asking. "a" for append is the safer choice — and a lesson usually learned once.',
      misconception: '“Saving happens automatically.” Data sits in memory until it is written and the file is closed. Crash before that and it is simply gone.',
      tryThis: 'Build a journal that appends a dated entry each time you run it, then add a search that prints every entry containing a chosen word.',
      vocab: [
        ['file mode', 'Whether a file is opened to read, write or append.'],
        ['persistence', 'Keeping data after a program stops running.'],
        ['parse', 'To read text and pull structured meaning out of it.'],
      ],
    },
    {
      hook: 'Anyone can make a game. Making one that stays fun is a design problem.',
      bigIdea:
        'This module treats a game as a system: states that control what the player can do, levels that raise difficulty on purpose, and scoring that rewards the behaviour the designer actually wants.',
      why: 'Game state is the friendliest possible introduction to how real applications track where a user is and what they are allowed to do next.',
      concepts: [
        'Game states are the modes a game can be in — menu, playing, paused, game over. Naming them and drawing the transitions prevents impossible situations.',
        'Levels change parameters rather than code: fewer lives, less time, more enemies. One well-designed loop can deliver ten different levels.',
        'Scoring systems shape behaviour. Reward speed and players rush; reward accuracy and they slow down. Scoring is a design decision, not a detail.',
      ],
      funFact: 'The text adventure Colossal Cave, written in 1976, ran entirely on this logic — rooms, states and conditions — and is still played today.',
      misconception: '“Harder means better.” Difficulty should rise just ahead of skill. Too far ahead and the player quits before your clever ending.',
      tryThis: 'Add a hidden room to your text adventure that can only be reached by carrying a specific item, then watch a friend try to find it.',
      vocab: [
        ['game state', 'The current mode or situation of a game.'],
        ['game loop', 'The cycle that keeps a game running and updating.'],
        ['balancing', 'Tuning rules so a game stays fair and fun.'],
      ],
    },
    {
      hook: 'Errors are not failure messages. They are the computer telling you exactly where it got confused.',
      bigIdea:
        'Students learn to read a traceback from the bottom up, handle predictable failures gracefully with try and except, and write test cases that check the awkward inputs rather than only the easy ones.',
      why: 'Debugging calmly is the single most transferable skill in the course. It is also the moment coding stops being frightening.',
      concepts: [
        'A traceback names the file, the line and the type of error. Read the last line first — it is usually the actual answer.',
        'Exception handling catches problems you can predict, such as text typed where a number belongs, and responds helpfully instead of crashing.',
        'Test cases are chosen deliberately: a normal value, a boundary value, an empty value and a plainly wrong value. Four tests catch most real bugs.',
      ],
      funFact: 'The word “bug” predates computers, but the most famous one was literal: a moth found inside the Harvard Mark II in 1947, taped into the logbook.',
      misconception: '“try/except fixes errors.” It only catches them. Wrapping everything in a bare except hides genuine bugs and makes them far harder to find.',
      tryThis: 'Take a working program, deliberately introduce three different bugs, swap with a partner, and time how long each takes to find.',
      vocab: [
        ['traceback', 'The report Python prints when an error occurs.'],
        ['exception', 'An error a program can catch and respond to.'],
        ['boundary value', 'An input right at the edge of what is allowed.'],
      ],
    },
    {
      hook: 'Build something a real person would actually use.',
      bigIdea:
        'The Class 7 capstone starts with a user, not with code. Students write user stories, build to meet them, then hand the program to a classmate and fix whatever that classmate struggles with.',
      why: 'Peer testing teaches the humbling, essential lesson that obvious-to-the-builder is rarely obvious to the user.',
      concepts: [
        'A user story states who wants what and why: “As a student, I want to save my timetable so that I stop forgetting Thursday.” It keeps features honest.',
        'Building means turning each story into working code, one at a time, with the program running at the end of every session.',
        'Peer testing means watching someone use it in silence. Every question they ask is a note for your next version.',
      ],
      funFact: 'Usability research shows testing with just five users uncovers around 85% of the problems in an interface. You do not need a crowd — you need five honest people.',
      misconception: '“They used it wrong.” If several people use it the same wrong way, the program is the thing that needs changing.',
      tryThis: 'Watch someone use your program without helping or explaining. Write down every moment they hesitate. That list is your to-do list.',
      vocab: [
        ['user story', 'A short statement of what a user needs and why.'],
        ['usability', 'How easily a real person can use your program.'],
        ['feedback loop', 'Testing, learning and improving in rounds.'],
      ],
    },
  ],

  8: [
    {
      hook: 'The same program can be written twice: once so it runs, once so it lasts.',
      bigIdea:
        'This module raises the standard from working code to professional code — consistent naming, sensible structure, deliberate use of types and operators, and a repeatable routine for tracking down bugs.',
      why: 'Class 8 projects are large enough that sloppy code genuinely slows students down. Fixing habits now saves the whole year.',
      concepts: [
        'Style and naming follow shared conventions — snake_case for variables, descriptive nouns for data, verbs for functions. Consistency is what makes code skimmable.',
        'Types and operators deserve precision: integer division //, remainder %, and knowing when floating-point maths will surprise you.',
        'A debugging workflow beats guessing: reproduce it, isolate it, print or inspect the values, fix one thing, re-test. Every step in order, every time.',
      ],
      funFact: 'In Python, 0.1 + 0.2 does not equal 0.3. It equals 0.30000000000000004 — a consequence of storing decimals in binary that affects every language, not just Python.',
      misconception: '“It runs, so it is finished.” Running is the minimum. Readable, testable and explainable is finished.',
      tryThis: 'Take your longest program from Class 7 and rewrite it without changing behaviour. Compare line counts and clarity before and after.',
      vocab: [
        ['convention', 'An agreed style rule shared across a language.'],
        ['floating point', 'How computers store decimal numbers, approximately.'],
        ['code smell', 'A sign that code, while working, needs restructuring.'],
      ],
    },
    {
      hook: 'Data has a shape. Match the shape and the code almost writes itself.',
      bigIdea:
        'Students compare lists, dictionaries and sets, learn what each is genuinely good at, and practise nesting them to model real information such as a library, an inventory or a timetable.',
      why: 'Structure choice is where beginners and capable programmers visibly diverge. The right structure turns a hard problem into an easy one.',
      concepts: [
        'Lists and dictionaries together cover most needs: a list of dictionaries is the standard shape for records, one dictionary per row.',
        'Sets store unique values and answer membership questions instantly. They are the fastest way to remove duplicates or find what two groups share.',
        'Nested structures let one object hold another — a book dictionary containing a list of borrowers, and each borrower a dictionary of their own.',
      ],
      funFact: 'Checking whether an item is in a set of a million values takes microseconds. The same check on a list of a million may need to inspect every single one.',
      misconception: '“Sets are just lists without duplicates.” They are also unordered, which means you cannot ask for “the third item” at all.',
      tryThis: 'Model your school library as nested data, then answer three questions with code: which books are out, who has most, and which are never borrowed.',
      vocab: [
        ['set', 'An unordered collection of unique values.'],
        ['nesting', 'Placing one data structure inside another.'],
        ['record', 'One complete entry in a collection of data.'],
      ],
    },
    {
      hook: 'Stop rewriting your best code. Package it and import it instead.',
      bigIdea:
        'Students design functions with clear responsibilities, then move them into their own module file and import them into new projects — the exact mechanism behind every Python library in existence.',
      why: 'Understanding import demystifies the whole ecosystem. A library stops being magic and becomes somebody else’s functions in a file.',
      concepts: [
        'Function design means one job per function, a name that says what it does, and no surprises hidden inside it.',
        'Imports pull in code from elsewhere — the standard library, an installed package, or a file you wrote yesterday. All three work the same way.',
        'Building a module means saving related functions in one .py file and importing it. Your code becomes a tool other projects can use.',
      ],
      funFact: 'Typing “import this” into Python prints The Zen of Python — twenty design principles hidden inside the language as an easter egg since 2004.',
      misconception: '“Libraries are made by companies.” Most are written by individuals, in ordinary .py files, and shared exactly the way students do it here.',
      tryThis: 'Collect your five most-used helper functions into my_tools.py, then start a fresh project that begins with "import my_tools".',
      vocab: [
        ['module', 'A .py file containing reusable code.'],
        ['import', 'To bring code from another module into this one.'],
        ['standard library', 'The set of modules that ship with Python.'],
      ],
    },
    {
      hook: 'A spreadsheet is just text with commas in useful places.',
      bigIdea:
        'CSV files are the bridge between programs and the real world of data. Students read them, split rows into fields, handle the messy or missing values, calculate something meaningful and write the results back out.',
      why: 'This is the moment coding becomes directly useful for school projects, surveys and any question a student wants answered with evidence.',
      concepts: [
        'Text and CSV are both just files; CSV simply agrees that commas separate fields and the first row usually names them.',
        'Parsing records means turning each line into usable values — splitting, stripping whitespace, converting numbers and deciding what to do with blanks.',
        'Saving results means writing a new file rather than overwriting the original. Raw data is evidence; never edit it in place.',
      ],
      funFact: 'CSV has been in use since the 1970s and remains the most widely exchanged data format on earth — outliving dozens of formats designed to replace it.',
      misconception: '“Every row has clean data.” Real datasets contain blanks, typos, extra spaces and numbers stored as text. Handling that is most of the work.',
      tryThis: 'Run a ten-question survey in your class, save it as CSV, and write a program that reports the average, the most common answer and anything surprising.',
      vocab: [
        ['CSV', 'Comma-separated values — a plain-text table format.'],
        ['field', 'One value within a record.'],
        ['data cleaning', 'Fixing messy values before analysing them.'],
      ],
    },
    {
      hook: 'Until now you used things Python provided. Now you invent your own.',
      bigIdea:
        'A class is a blueprint that bundles data and the actions that belong with it. One VirtualPet class can produce a hundred pets, each with its own name, hunger and mood, all sharing the same behaviour.',
      why: 'Object-oriented thinking is how large software is organised. Meeting it through a virtual pet makes an abstract idea immediately concrete.',
      concepts: [
        'A class is the blueprint; an object is one thing built from it. The cookie cutter is not the cookie.',
        'Attributes are what an object knows — its name, its energy, its score. Each object keeps its own copy.',
        'Methods are what an object can do, and they can change its own attributes. pet.feed() raises that pet’s energy and nobody else’s.',
      ],
      funFact: 'The Tamagotchi sold over 90 million units on exactly this logic: a few attributes, a few methods and a timer.',
      misconception: '“self is a magic word.” self is simply the object talking about itself — “my name”, “my energy” — and Python passes it in automatically.',
      tryThis: 'Give your pet a mood that depends on hunger, energy and how long since you last played. Then create three pets and neglect one on purpose.',
      vocab: [
        ['class', 'A blueprint for creating objects.'],
        ['object', 'One instance built from a class.'],
        ['method', 'A function that belongs to a class.'],
      ],
    },
    {
      hook: 'Two programs give the same answer. One takes a second, the other takes an hour. Why?',
      bigIdea:
        'Students meet searching and sorting as ideas rather than recipes — comparing how each behaves as data grows, and developing an intuition for when a smarter approach is worth the extra complexity.',
      why: 'Efficiency thinking is genuine computer science and shows up directly in maths reasoning, exams and later programming study.',
      concepts: [
        'Linear search checks every item; binary search halves the remaining options each time — but only works on sorted data. That trade-off is the lesson.',
        'Sorting intuition comes from doing it by hand first. Bubble, selection and insertion sorts each feel different when you move real cards on a desk.',
        'Efficiency basics mean asking what happens at ten items versus ten million. Some approaches barely notice; others fall over.',
      ],
      funFact: 'Binary search finds one name in a million-entry phone book in about 20 comparisons. Checking one by one could take a million.',
      misconception: '“Faster computers make efficiency irrelevant.” A poor algorithm on a fast machine still loses to a good algorithm on a slow one, and by more as data grows.',
      tryThis: 'Time your own search functions on lists of 100, 10,000 and 1,000,000 items. Plot the results and see the shapes appear.',
      vocab: [
        ['algorithm', 'A defined procedure for solving a problem.'],
        ['binary search', 'Halving a sorted range until the target is found.'],
        ['efficiency', 'How resource cost grows as input grows.'],
      ],
    },
    {
      hook: 'A number on its own is a fact. A chart is an argument.',
      bigIdea:
        'Students clean a dataset, choose a chart that suits the question, and then write the sentence the chart actually supports — including learning to notice when it does not support the sentence they hoped for.',
      why: 'Reading and making honest charts is a life skill. It is also excellent protection against the misleading graphics students meet online daily.',
      concepts: [
        'Cleaning data first is non-negotiable. A single stray value can drag an average far away from the truth.',
        'Basic charts each answer a different question: bar for comparing, line for change over time, pie only for parts of one whole and only when there are few parts.',
        'Explaining findings means stating what the data shows, what it does not show, and what you would need to be more certain.',
      ],
      funFact: 'Truncating a y-axis so it starts at 90 instead of 0 can make a 2% difference look enormous. It is the most common trick in misleading news graphics.',
      misconception: '“The chart proves it.” A chart shows a pattern. Proving a cause needs far more than a correlation on a screen.',
      tryThis: 'Find a chart online and redraw it honestly with a zero baseline. Note how much of the drama disappears.',
      vocab: [
        ['dataset', 'A structured collection of related data.'],
        ['axis', 'The scaled reference line on a chart.'],
        ['outlier', 'A value far away from the rest of the data.'],
      ],
    },
    {
      hook: 'From typed commands to something you can actually play with a keyboard.',
      bigIdea:
        'A graphical game runs on a loop that never stops: read what the player did, update the world, draw the new frame, repeat — around sixty times a second.',
      why: 'The game loop is the same architecture behind animation, robotics and real-time systems. Seeing it once explains a whole category of software.',
      concepts: [
        'Events are things that happen — a key pressed, a mouse clicked, a window closed. The program listens for them each frame rather than waiting.',
        'Collision logic asks whether two rectangles overlap. Almost every hit, catch and bump in 2D gaming is that one check.',
        'The game loop ties it together: input, update, draw, repeat. Anything that happens in a game happens inside that cycle.',
      ],
      funFact: 'Games measure work in frames. At 60 frames per second, everything — physics, input, drawing — must finish in under 17 milliseconds.',
      misconception: '“Use time.sleep() to slow the game down.” Sleep freezes everything, including input. Games control speed with a clock and a frame rate instead.',
      tryThis: 'Add one feature that changes how your game feels rather than what it does — a screen shake, a particle burst, or a rising difficulty curve.',
      vocab: [
        ['event', 'An input or occurrence a program responds to.'],
        ['collision', 'Two objects overlapping in game space.'],
        ['frame rate', 'How many times per second the screen updates.'],
      ],
    },
    {
      hook: 'Design it on paper. Build it in code. Defend it in front of an audience.',
      bigIdea:
        'The Class 8 capstone adds a design document. Students write down what they are building and why before they start, then evidence how the finished work matched — or deliberately departed from — that plan.',
      why: 'Planning before building is the habit that separates a project that finishes from one that fizzles out in week six.',
      concepts: [
        'A design document states the problem, the intended users, the main features and the data the program will hold. One page is enough.',
        'Building and testing proceed together — a feature is not finished until it has been tested against inputs designed to break it.',
        'Portfolio presentation means showing the work, explaining the decisions and being honest about what you would do differently.',
      ],
      funFact: 'Most professional software projects that fail do so because of unclear requirements, not weak coding. Vagueness is expensive.',
      misconception: '“Planning slows me down.” An hour of planning routinely saves a week of rebuilding something that was never quite right.',
      tryThis: 'Write your design document, then reread it after the build and mark every place reality differed. That comparison is the most valuable page in your portfolio.',
      vocab: [
        ['design document', 'A written plan describing what will be built.'],
        ['requirement', 'A specific thing the program must do.'],
        ['portfolio', 'A curated collection of work with explanations.'],
      ],
    },
  ],

  9: [
    {
      hook: 'Time to work the way professionals actually work.',
      bigIdea:
        'Students move beyond single-file scripts into proper project structure: organised files, a consistent environment, disciplined style and a systematic approach to finding faults rather than a hopeful one.',
      why: 'Class 9 introduces databases, web apps and APIs. None of them are pleasant without solid working habits in place first.',
      concepts: [
        'Environments and files keep a project self-contained — code, data and dependencies in known places, so the project runs on another machine too.',
        'Style follows PEP 8, Python’s official guide. Following a shared standard means any Python programmer can read your work immediately.',
        'Debugging becomes systematic: reproduce reliably, narrow the search, inspect real values, change one thing, verify. Never two changes at once.',
      ],
      funFact: 'PEP 8 is itself a numbered proposal document, part of a public process anyone can contribute to. Python’s rules are written in the open.',
      misconception: '“Everything can live in one file.” It can, until it cannot — and untangling a 900-line file late in a project is genuinely painful.',
      tryThis: 'Build a command-line tool that accepts arguments, then run it from any folder on your computer. That is the moment it stops being homework.',
      vocab: [
        ['PEP 8', 'The official Python style guide.'],
        ['CLI', 'Command-line interface — a text-driven program.'],
        ['dependency', 'External code a project needs to run.'],
      ],
    },
    {
      hook: 'Five lines of loop, or one line that says exactly the same thing.',
      bigIdea:
        'Comprehensions let students express filtering and transforming as a single readable expression. Combined with confident handling of nested data, this is the toolkit for reshaping real-world information.',
      why: 'Data arrives in the wrong shape almost always. Reshaping it quickly and correctly is the everyday work of anyone who codes with data.',
      concepts: [
        'A comprehension builds a new collection from an old one in one expression: [n * 2 for n in numbers if n > 0]. Read it as “for each, if, do this”.',
        'Nested data needs careful traversal — a list of dictionaries each containing a list. Naming loop variables honestly prevents most confusion.',
        'Transformations convert between shapes: list to dictionary, grouped by category, filtered and sorted. This is the core of data preparation.',
      ],
      funFact: 'Comprehension syntax comes from set-builder notation in mathematics: {x² | x ∈ N, x < 10} translates almost directly into Python.',
      misconception: '“Shorter is always better.” A comprehension four levels deep is worse than a plain loop. Clarity wins over compression.',
      tryThis: 'Take a messy dataset and clean it using only comprehensions, then rewrite the same work as loops and decide honestly which reads better.',
      vocab: [
        ['comprehension', 'A compact expression that builds a collection.'],
        ['transformation', 'Converting data from one shape to another.'],
        ['filter', 'Keeping only the items that meet a condition.'],
      ],
    },
    {
      hook: 'Write a function once. Document it well. Never think about it again.',
      bigIdea:
        'Functions become interfaces — contracts other code depends on. Students learn flexible arguments, docstrings that explain the contract, and tests that prove it still holds after changes.',
      why: 'Reliable, documented functions are what make a codebase survivable across months. This is the beginning of real software craftsmanship.',
      concepts: [
        'Arguments can be positional, keyword or defaulted. Sensible defaults make the common case simple and the unusual case still possible.',
        'Documentation means a docstring stating what the function takes, what it returns and any assumption it relies on. Three lines is usually plenty.',
        'Testing functions means writing code that checks the code — normal input, edge input, and input that ought to fail loudly.',
      ],
      funFact: 'Python can read its own docstrings: calling help(your_function) prints them straight back. Documentation is a built-in feature, not an afterthought.',
      misconception: '“Tests are for professionals.” Tests are for anyone who intends to change their code later without dreading it.',
      tryThis: 'Write a utility library with five functions, each with a docstring and three tests. Then break one on purpose and confirm the tests catch it.',
      vocab: [
        ['docstring', 'A documentation string inside a function or module.'],
        ['default argument', 'A parameter value used when none is supplied.'],
        ['unit test', 'A check that one small piece of code works.'],
      ],
    },
    {
      hook: 'Model the world as things that know something and can do something.',
      bigIdea:
        'Students design multi-class systems: what each class is responsible for, how classes relate, and when to reuse behaviour through inheritance versus building objects out of other objects.',
      why: 'Modelling a real system in objects is a thinking skill as much as a coding one. It rewards clear analysis of who is responsible for what.',
      concepts: [
        'Classes carry responsibilities. A Student class should know about a student — not about printing reports or saving files.',
        'Inheritance expresses “is a kind of”. A PrefectStudent is a Student with extra powers, inheriting everything and adding a little.',
        'Composition expresses “has a”. A Club has Members and a Schedule. In practice, composition solves more problems more cleanly than inheritance.',
      ],
      funFact: 'Experienced developers have a saying: “favour composition over inheritance.” Deep inheritance trees look elegant and become very hard to change.',
      misconception: '“Inheritance is for saving typing.” Inheritance is for expressing a genuine relationship. Using it to share code creates fragile designs.',
      tryThis: 'Model your school’s club system with at least three classes, then add a brand-new club type and see how much existing code you had to touch.',
      vocab: [
        ['inheritance', 'A class taking on the behaviour of a parent class.'],
        ['composition', 'Building an object out of other objects.'],
        ['responsibility', 'The single job a class is meant to handle.'],
      ],
    },
    {
      hook: 'The whole internet is programs politely asking each other for data.',
      bigIdea:
        'JSON is how machines exchange structured information, and the request–response cycle is how they ask for it. Students read real public data, navigate nested structures and handle the fields that are simply missing.',
      why: 'Once a student can consume an API, the world’s open data — weather, space, transport, sport — becomes project material.',
      concepts: [
        'JSON looks almost exactly like nested Python dictionaries and lists, which is why moving between the two is nearly effortless.',
        'Request and response: your program asks a server for something and receives data plus a status code. 200 means fine; 404 means not found.',
        'Missing data is normal. Real APIs omit fields, return nulls and occasionally fail entirely — code must expect all three.',
      ],
      funFact: 'JSON was not designed as a format so much as noticed. It is a subset of JavaScript syntax that turned out to be perfect for exchanging data.',
      misconception: '“The API will always respond.” Networks fail, limits are hit and servers restart. Code that assumes success crashes in front of an audience.',
      tryThis: 'Pull live data from a free public API — space, weather or earthquakes — and display one genuinely interesting fact from it.',
      vocab: [
        ['JSON', 'A text format for exchanging structured data.'],
        ['API', 'An agreed way for programs to request data from each other.'],
        ['status code', 'A number describing how a request went.'],
      ],
    },
    {
      hook: 'Files are fine for a hundred records. Databases are built for a million.',
      bigIdea:
        'Students design tables, insert and query records, and learn why a database enforces structure. The four operations — create, read, update, delete — cover the data layer of virtually every application ever built.',
      why: 'Every app a student uses is backed by a database. Understanding tables and queries demystifies an enormous amount of technology at once.',
      concepts: [
        'Tables and records organise data into rows and columns with declared types, so the database itself rejects nonsense before it is stored.',
        'CRUD is the complete set: create, read, update, delete. Every data feature in every app is some combination of those four.',
        'Safe queries use parameters rather than glued-together strings — the habit that prevents SQL injection, one of the oldest attacks on the web.',
      ],
      funFact: 'SQLite, the database in this module, is the most widely deployed database engine on earth — it runs inside phones, browsers, cars and aircraft.',
      misconception: '“A database is just a spreadsheet.” A spreadsheet stores values; a database enforces rules, relationships and integrity across millions of rows.',
      tryThis: 'Build a reading database, add twenty real books, then answer with queries: most-read author, average pages, and which month you read most.',
      vocab: [
        ['table', 'A structured set of rows and columns in a database.'],
        ['query', 'A request for specific data from a database.'],
        ['CRUD', 'Create, read, update, delete.'],
      ],
    },
    {
      hook: 'Same Python. New audience: anyone with a browser.',
      bigIdea:
        'A web framework maps URLs to Python functions. Students build routes, render templates with real data and accept form submissions — with the firm rule that everything a user sends must be validated.',
      why: 'A web app is shareable. That single fact changes how seriously students treat their own projects.',
      concepts: [
        'Routes connect a URL to a function. Visiting /scores runs the function that returns the scores page.',
        'Templates are HTML with placeholders that Python fills in, keeping design and logic separate rather than tangled together.',
        'Forms and validation: a form sends data to your server, and your server must never trust it. Check type, length and range before use.',
      ],
      funFact: 'Flask, the framework most schools start with, was released on 1 April 2010 as a joke. The joke turned out to be genuinely excellent software.',
      misconception: '“Checking in the browser is enough.” Browser checks are for convenience. Anyone can bypass them, so the server must check again.',
      tryThis: 'Build a two-page web tool with a form, then open it on your phone using your computer’s local network address.',
      vocab: [
        ['route', 'A URL path mapped to a function.'],
        ['template', 'An HTML file with slots for dynamic values.'],
        ['server-side', 'Code that runs on the server, not the browser.'],
      ],
    },
    {
      hook: 'Your program can now ask an AI model for help. That makes checking the answer your job.',
      bigIdea:
        'Students call a model from code, request output in a structure their program can actually use, and build in verification — because a confident wrong answer is far more dangerous than an obvious error.',
      why: 'AI-assisted programming is now ordinary professional practice. Doing it responsibly, with checks, is the skill worth having.',
      concepts: [
        'Using a model responsibly means knowing what it is good at (drafting, explaining, transforming) and what it is unreliable for (facts, arithmetic, anything current).',
        'Prompting from code means the prompt becomes part of your program — versioned, tested and consistent, not typed fresh each time.',
        'Evaluating output means checking before using: is it the right shape, within range, and consistent with a source you trust?',
      ],
      funFact: 'Language models are trained to produce plausible text, not true text. Fluency and accuracy are separate properties, which is precisely why they must be checked.',
      misconception: '“The AI wrote it, so it works.” Generated code compiles and still gets the logic wrong. You remain responsible for everything you ship.',
      tryThis: 'Ask a model to write a function, then write your own tests for it before running it. Note whether your tests find anything.',
      vocab: [
        ['prompt', 'The instruction given to an AI model.'],
        ['hallucination', 'Confident output that is simply not true.'],
        ['validation', 'Checking output before trusting it.'],
      ],
    },
    {
      hook: 'Requirements, code, deployment, demo. The full professional cycle in eight sessions.',
      bigIdea:
        'The Class 9 capstone is a database-backed application taken from written requirements through implementation to something running somewhere other than the student’s own laptop.',
      why: 'Deployment is the step most school projects skip, and the one that makes a project feel real to the student who built it.',
      concepts: [
        'Requirements state precisely what the application must do, for whom, and what counts as finished.',
        'Implementation proceeds feature by feature, tested as it goes, with the application working at the end of each session.',
        'Deployment and demo mean getting it running for someone else and presenting it under questioning.',
      ],
      funFact: '“It works on my machine” is the oldest joke in software. Deployment exists because that sentence is never enough.',
      misconception: '“Deployment is the last step.” Deploying early and often catches environment problems while they are still small.',
      tryThis: 'Deploy your app, then hand the link to someone who has never seen it and give no instructions at all. Watch what happens.',
      vocab: [
        ['deployment', 'Making software available where others can run it.'],
        ['environment', 'The system and settings a program runs under.'],
        ['demo', 'A live demonstration of working software.'],
      ],
    },
  ],

  10: [
    {
      hook: 'Board year. Time to make every habit count.',
      bigIdea:
        'A rapid consolidation of core Python at full speed, plus the two habits that define working developers: version control for tracking change, and code review for catching what the author cannot see.',
      why: 'Class 10 is the launchpad into serious computing study. Confidence in the fundamentals leaves room to think about design instead of syntax.',
      concepts: [
        'Core syntax is revisited at pace and under time pressure, so recall becomes automatic rather than effortful.',
        'Git concepts — commit, branch, history — give a project an undo button that spans months, and a record of why each change happened.',
        'Code review means reading someone else’s code and asking useful questions. Reviewing teaches at least as much as being reviewed.',
      ],
      funFact: 'Git was written by Linus Torvalds in about ten days in 2005 because no existing tool could handle the Linux kernel’s scale.',
      misconception: '“Commit when the feature is finished.” Small, frequent commits with honest messages are far more useful when something breaks.',
      tryThis: 'Refactor an old multi-file project with commits at every step, then read your own history back and see whether it tells a clear story.',
      vocab: [
        ['version control', 'A system that tracks changes to code over time.'],
        ['commit', 'A saved snapshot of a project with a message.'],
        ['code review', 'Structured reading of code by another person.'],
      ],
    },
    {
      hook: 'Same answer, wildly different cost. Choosing well is engineering.',
      bigIdea:
        'Students implement and measure searching and sorting algorithms, develop Big-O intuition for how cost grows with input size, and learn that every optimisation trades something away.',
      why: 'Complexity reasoning appears in every serious computer science course and in every technical interview a student will ever sit.',
      concepts: [
        'Search and sort algorithms are implemented and timed personally, so the difference stops being theory and becomes a measured graph.',
        'Big-O describes growth, not speed. O(n²) means doubling the input roughly quadruples the work — regardless of how fast your laptop is.',
        'Trade-offs are the real lesson: faster often means more memory, more complexity or more assumptions about the data.',
      ],
      funFact: 'Python’s built-in sort, called Timsort, was invented by Tim Peters in 2002 and is now used inside Java, Android and V8 as well.',
      misconception: '“The lowest Big-O wins.” For small inputs, a simple O(n²) sort often beats a complex O(n log n) one. Constants matter in reality.',
      tryThis: 'Time bubble sort and Python’s built-in sort on 1,000, 10,000 and 100,000 items. The gap will surprise you.',
      vocab: [
        ['Big-O', 'Notation describing how cost grows with input size.'],
        ['complexity', 'The resource cost of an algorithm.'],
        ['trade-off', 'Gaining one property at the expense of another.'],
      ],
    },
    {
      hook: 'Good design is mostly deciding what each part is not responsible for.',
      bigIdea:
        'Students design object systems for real domains, assigning responsibilities deliberately, preferring composition to deep hierarchies, and judging their design by how easily it absorbs a new requirement.',
      why: 'Design quality determines whether a codebase can grow. It is the difference between adding a feature in an hour and rewriting for a week.',
      concepts: [
        'Responsibilities should be single and clear. If describing a class needs the word “and”, it is probably two classes.',
        'Composition builds capability by assembly, keeping parts swappable and independently testable.',
        'Design clarity is measured practically: can a new person understand it, and can a new requirement be added without breaking three other things?',
      ],
      funFact: 'The Single Responsibility Principle is the S in SOLID, a set of five design principles that remain the industry’s common vocabulary.',
      misconception: '“More classes means better design.” Over-engineering is a real and common failure. The right number of classes is the fewest that keeps things clear.',
      tryThis: 'Model a real domain, then add an unplanned requirement. Count how many files you had to open — that number is your design score.',
      vocab: [
        ['domain model', 'Code that represents real-world concepts.'],
        ['coupling', 'How much one part depends on another.'],
        ['cohesion', 'How well the parts of a unit belong together.'],
      ],
    },
    {
      hook: 'Real data is messy, incomplete and occasionally lying. Build for that.',
      bigIdea:
        'A pipeline moves data through defined stages — load, clean, validate, transform, output — with each stage separately testable, so the same process can be rerun on new data with confidence.',
      why: 'Pipeline thinking underpins data science, analytics and machine learning. Reproducibility is what makes results trustworthy.',
      concepts: [
        'CSV and JSON are the two formats most real data arrives in, and moving cleanly between them is a routine daily task.',
        'Cleaning and validation handle blanks, duplicates, wrong types and impossible values — and record what was rejected rather than silently dropping it.',
        'A transform pipeline chains reusable stages, so the whole process can be rerun on tomorrow’s data without editing anything.',
      ],
      funFact: 'Industry surveys consistently find data professionals spend most of their time cleaning and preparing data, not analysing it.',
      misconception: '“Just delete the bad rows.” Sometimes correct, often not. Silently dropping data can change a conclusion completely — always log what was removed.',
      tryThis: 'Build a pipeline for a genuinely messy public dataset, then run it on a second dataset without changing the code.',
      vocab: [
        ['pipeline', 'A chain of processing stages applied to data.'],
        ['schema', 'The expected structure and types of data.'],
        ['reproducible', 'Able to be rerun with the same results.'],
      ],
    },
    {
      hook: 'Design the tables well and the application almost writes itself.',
      bigIdea:
        'Students design schemas across related tables, implement full CRUD, and enforce integrity so the database itself refuses to hold contradictory data.',
      why: 'Schema design decisions are the hardest to reverse later. Getting them right early is enormously valuable.',
      concepts: [
        'Schema design decides tables, columns, types and relationships. Splitting data into related tables removes duplication and the errors duplication causes.',
        'CRUD operations are implemented against a real schema, including the awkward cases such as deleting a record other records point at.',
        'Data integrity is enforced with keys and constraints, so invalid data is rejected at the source instead of being caught later by hopeful code.',
      ],
      funFact: 'The relational model was proposed by Edgar Codd in a 1970 paper. Over fifty years later it still runs most of the world’s critical systems.',
      misconception: '“The application will keep data valid.” Applications have bugs and change often. Constraints in the database are the durable guarantee.',
      tryThis: 'Design a schema with at least three related tables, then deliberately try to insert contradictory data and confirm the database stops you.',
      vocab: [
        ['schema', 'The structure and rules of a database.'],
        ['primary key', 'The column uniquely identifying each row.'],
        ['foreign key', 'A column referencing a row in another table.'],
      ],
    },
    {
      hook: 'Multiple pages, real data, actual users. This is software now.',
      bigIdea:
        'Students build a multi-page application with server-side routing, templates that share a common layout, form handling, and an understanding of how a stateless web remembers who you are.',
      why: 'A working web application is the most persuasive portfolio item a Class 10 student can hold, and it consolidates every earlier module at once.',
      concepts: [
        'Server routes organise the application into pages and actions, keeping URLs meaningful and predictable.',
        'Templates with inheritance let one base layout supply the header, footer and navigation to every page.',
        'Sessions solve a real puzzle: HTTP forgets you between requests, so a small identifier is used to recognise a returning visitor.',
      ],
      funFact: 'HTTP was deliberately designed to be stateless. Cookies and sessions were invented afterwards to work around that decision.',
      misconception: '“Sessions are secure by default.” A session identifier is a key. If it can be read or guessed, the account can be taken.',
      tryThis: 'Add a login to your web app, then think carefully about what a logged-out visitor can still reach by typing the URL directly.',
      vocab: [
        ['session', 'Stored state that identifies a returning user.'],
        ['stateless', 'Not remembering anything between requests.'],
        ['template inheritance', 'Pages built from a shared base layout.'],
      ],
    },
    {
      hook: 'The last two questions before shipping: does it work, and is it safe?',
      bigIdea:
        'Students write automated tests that run in seconds, validate every input that crosses a boundary, and handle secrets and permissions properly — including the rule that credentials never belong in source code.',
      why: 'Testing and security are the professional standard, and both are far cheaper to build in than to add afterwards.',
      concepts: [
        'Unit tests check small pieces automatically, so a change that breaks something old is caught in seconds rather than weeks.',
        'Validation happens wherever data enters the system — forms, files, APIs. Never trust input because it came from your own front end.',
        'Secrets and permissions: keys live in environment variables, not in code; every user gets the least access that lets them do their job.',
      ],
      funFact: 'Scanning tools regularly find thousands of live API keys accidentally published in public repositories every single day.',
      misconception: '“Nobody would bother attacking a school project.” Automated scanners attack everything reachable, indiscriminately, within hours of it going online.',
      tryThis: 'Audit your own application: list every place data enters, and confirm each one validates. Fix the weakest before reading further.',
      vocab: [
        ['unit test', 'An automated check on a small piece of code.'],
        ['sanitisation', 'Cleaning input so it cannot cause harm.'],
        ['least privilege', 'Granting only the access actually required.'],
      ],
    },
    {
      hook: 'Adding AI to a product is easy. Adding it responsibly is the actual skill.',
      bigIdea:
        'Students integrate a model into a real application, force output into a structure the program can validate, and design a human checkpoint wherever a mistake would matter.',
      why: 'This is precisely the judgement employers and universities are starting to look for: capable with AI, and clear-eyed about where it must not be trusted alone.',
      concepts: [
        'Integration concepts cover where the model call belongs, what happens when it is slow or fails, and what it costs per request.',
        'Structured outputs mean requesting a defined format such as JSON and validating it on arrival — never parsing free text and hoping.',
        'Human checks are designed in deliberately: which decisions require a person to approve before anything happens.',
      ],
      funFact: 'Requiring a model to return a fixed structure measurably reduces unusable output, because it removes the room to improvise.',
      misconception: '“More detail in the prompt fixes reliability.” Better prompts help, but validation is what actually protects your application.',
      tryThis: 'Add one AI feature to your project with a fallback for failure and a human approval step. Then unplug the network and check nothing breaks.',
      vocab: [
        ['structured output', 'Model output constrained to a defined format.'],
        ['fallback', 'What the system does when the main path fails.'],
        ['human-in-the-loop', 'A person approving decisions before they take effect.'],
      ],
    },
    {
      hook: 'Everything, finished, documented, deployed and defended.',
      bigIdea:
        'The final capstone is a complete product: designed, built, tested, deployed, documented in a README a stranger could follow, and defended in a viva where the student explains every significant decision.',
      why: 'This is the artefact a student carries forward into further study and applications. It proves capability far better than any mark.',
      concepts: [
        'A complete product means it works end to end for a real user, not only along the path its author remembers to take.',
        'Documentation means a README covering what it does, how to run it, how it is structured and what the known limitations are.',
        'Demo and viva mean presenting live and answering “why this way?” for every important choice.',
      ],
      funFact: 'Open-source maintainers consistently report that a clear README attracts more users than any feature. Explanation is part of the product.',
      misconception: '“The code speaks for itself.” It never does. Undocumented projects are abandoned projects, including by the person who wrote them.',
      tryThis: 'Give your README to someone who has never seen the project and ask them to run it, unaided. Every question they ask is a gap.',
      vocab: [
        ['README', 'The document explaining a project to newcomers.'],
        ['viva', 'A spoken examination defending your own work.'],
        ['known limitation', 'A weakness the author states openly.'],
      ],
    },
  ],
};
