/* Edutainment detail layer for the AI curriculum.
   One seed per module, in the same order as aiCurriculum.
   `concepts` aligns index-for-index with that module's `topics` array. */
export const aiModuleSeeds = {
  6: [
    {
      hook: 'Artificial intelligence is not coming. It is already in the room, and it has been for years.',
      bigIdea:
        'Before using AI, students learn to notice it. The video that autoplays next, the face unlock on a phone, the map that reroutes around traffic — all of it is AI already woven into daily life. This module builds awareness first, then adds the safety habits that make everything afterwards sensible.',
      why: 'Children already live surrounded by AI. Naming it turns a passive user into someone who can ask why a system did what it did.',
      concepts: [
        'AI in everyday life shows up in recommendations, voice assistants, camera filters, spam folders and maps. Hunting for it around the house is genuinely eye-opening.',
        'Humans and machines are good at different things. Machines are fast, tireless and consistent. Humans understand meaning, care about consequences and know when something feels wrong.',
        'Safe sign-in habits come first: strong passwords, no personal details in a chat box, and always asking an adult before creating an account anywhere.',
      ],
      funFact: 'The term “artificial intelligence” was coined in 1956 at a summer workshop where the organisers expected the problem to be largely solved within a couple of months.',
      misconception: '“AI thinks like a person.” It does not think at all. It finds patterns in enormous amounts of data — which is powerful, and completely different.',
      tryThis: 'Spend one day counting every AI system you use. Most students find between ten and thirty before dinner.',
      vocab: [
        ['artificial intelligence', 'Software that performs tasks that usually need human thinking.'],
        ['algorithm', 'A set of steps a computer follows to get a result.'],
        ['personal information', 'Details that identify you — never to be shared with a chatbot.'],
      ],
    },
    {
      hook: 'A vague question gets a vague answer. Every single time.',
      bigIdea:
        'A prompt is an instruction, and instructions can be good or poor. Students learn to state a purpose, supply context and set limits — then compare the difference between a lazy prompt and a considered one on the very same task.',
      why: 'Prompting is really just clear communication, and clear communication improves a child’s writing and speaking as much as their AI results.',
      concepts: [
        'Purpose means saying what you actually want: explain, list, compare, correct, or shorten. “Tell me about volcanoes” has no purpose in it.',
        'Context and constraints do the heavy lifting: who it is for, how long it should be, what to include and what to leave out.',
        'Improving weak prompts is a repeatable move — write one, look at the answer, then change one thing and try again.',
      ],
      funFact: 'Adding “explain it to an eleven-year-old” changes an AI answer more dramatically than almost any other instruction of similar length.',
      misconception: '“Longer prompts are better prompts.” Clearer prompts are better. A precise sentence beats a rambling paragraph.',
      tryThis: 'Ask for a homework explanation twice — once in five words, once with audience, length and format specified. Put the answers side by side.',
      vocab: [
        ['prompt', 'The instruction you give an AI tool.'],
        ['context', 'Background information that helps AI answer well.'],
        ['constraint', 'A limit you set, such as length or reading level.'],
      ],
    },
    {
      hook: 'A study buddy who never gets bored of the question you have asked four times.',
      bigIdea:
        'Students learn to use AI as a tutor rather than an answer machine — asking for explanations at their own level, generating practice questions, and always verifying against the textbook before believing anything.',
      why: 'Used this way, AI supports understanding. Used the other way, it quietly replaces it. The distinction is the entire point of this module.',
      concepts: [
        '“Explain at my level” is the single most useful phrase in student AI use. Ask for a simpler version until it genuinely clicks.',
        'Quiz and revision prompts flip the roles: ask the AI to test you, not to tell you. Retrieval practice is far more effective than rereading.',
        'Checking answers against the textbook is compulsory, because AI states wrong facts with exactly the same confidence as right ones.',
      ],
      funFact: 'Being tested on material helps memory more than reviewing it — an effect psychologists have measured for over a century. AI makes generating tests effortless.',
      misconception: '“If AI explains it, I have learned it.” Understanding is proved by explaining it back without looking. Try that before moving on.',
      tryThis: 'Pick one chapter, have AI generate ten questions, answer them closed-book, then mark yourself honestly against the textbook.',
      vocab: [
        ['tutor prompt', 'A prompt asking AI to teach rather than answer.'],
        ['retrieval practice', 'Testing yourself to strengthen memory.'],
        ['verification', 'Checking a claim against a trusted source.'],
      ],
    },
    {
      hook: 'AI can suggest a thousand ideas. Choosing the good one is still your job.',
      bigIdea:
        'Students use AI for the parts of writing where it genuinely helps — brainstorming, structuring, unsticking a middle chapter — while keeping the voice, the choices and the final sentences their own.',
      why: 'This module sets the authorship standard for the whole programme: AI may assist the process, but the student remains the author.',
      concepts: [
        'Idea generation is where AI shines. Ask for twenty story premises, discard nineteen, and keep the one that sparks something.',
        'Character and plot benefit from AI as a questioner: what does this character want, and what stands in the way?',
        'Editing in your own voice means rewriting AI suggestions in your own words, because a story that does not sound like you is not yours.',
      ],
      funFact: 'Authors have used prompts, dice and randomness for generating ideas for centuries. What is new is the speed, not the technique.',
      misconception: '“Using AI means it is not my story.” Using AI to brainstorm is fine and honest. Submitting AI text as your own writing is not.',
      tryThis: 'Write an authorship note for your story: what you thought of, what AI suggested, and what you changed. Honesty is the skill here.',
      vocab: [
        ['brainstorming', 'Generating many ideas before choosing one.'],
        ['voice', 'The personal style that makes writing sound like you.'],
        ['authorship note', 'A statement of who contributed what.'],
      ],
    },
    {
      hook: 'Describe a picture well enough and the machine will paint it. Describe it vaguely and you get something strange.',
      bigIdea:
        'Image generation rewards precise description — subject, setting, style, mood and composition. Students also learn where these tools reliably fail, and why they must never be trusted for factual diagrams.',
      why: 'Turning a mental picture into precise words is a strong language exercise disguised as an art activity.',
      concepts: [
        'Describing a scene means naming the subject, the surroundings, the lighting and the point of view. Every missing detail is one the machine will invent.',
        'Style and composition change everything: watercolour, blueprint, photograph, cartoon; close-up or wide shot.',
        'Image limitations are real and worth seeing first-hand — text inside images, correct hands and accurate scientific diagrams are all unreliable.',
      ],
      funFact: 'AI image tools became notorious for drawing hands with the wrong number of fingers, because hands appear in training photos in an enormous variety of positions.',
      misconception: '“An AI diagram is accurate.” It is a picture that resembles a diagram. Labels are frequently invented, so never use one as a factual reference.',
      tryThis: 'Write one prompt in five words and another in forty for the same image. The gap between the results is the lesson.',
      vocab: [
        ['image generation', 'Creating pictures from a text description.'],
        ['composition', 'How elements are arranged in a picture.'],
        ['limitation', 'Something a tool is genuinely not good at.'],
      ],
    },
    {
      hook: 'A computer can now read your story aloud in almost any voice. That raises a question worth asking.',
      bigIdea:
        'Text-to-speech turns writing into audio, opening up storytelling and accessibility. It also opens up voice cloning, so consent and disclosure are taught here as firm rules rather than suggestions.',
      why: 'Voice is personal. Understanding early that a voice can be copied is genuine protection, not scaremongering.',
      concepts: [
        'Text-to-speech converts writing into spoken audio, and punctuation controls the rhythm more than most students expect.',
        'Pronunciation needs checking, especially for names and Indian place names, which many models get wrong.',
        'Consent and voice safety: never clone someone’s voice without permission, and always disclose when audio is synthetic.',
      ],
      funFact: 'Text-to-speech was built for accessibility long before entertainment — screen readers have helped blind users navigate computers since the 1980s.',
      misconception: '“A recognisable voice proves who spoke.” It no longer does. Voice alone is not evidence of identity.',
      tryThis: 'Record yourself reading a paragraph, then generate the same paragraph synthetically. List three differences a careful listener would notice.',
      vocab: [
        ['text-to-speech', 'Technology that reads written text aloud.'],
        ['synthetic media', 'Audio, image or video generated by a machine.'],
        ['consent', 'Clear permission given before using someone’s likeness or voice.'],
      ],
    },
    {
      hook: 'Anyone can fill slides with words. Explaining something in two minutes is the hard part.',
      bigIdea:
        'Students turn an outline into a visually clear presentation and then a short video, learning that the structure of an explanation matters far more than the decoration on the slide.',
      why: 'Explaining clearly is the most valuable skill in this entire curriculum, and it transfers straight into every school subject.',
      concepts: [
        'Outline to slides means deciding the sequence of ideas first. AI can format slides in seconds, but only you know what should come second.',
        'Visual hierarchy means one idea per slide, a headline that states the point, and images that carry meaning rather than fill space.',
        'AI presenter basics cover script pacing, captions and — always — telling your audience the presenter is synthetic.',
      ],
      funFact: 'Slides crammed with text measurably reduce how much an audience remembers, because people cannot read and listen carefully at the same time.',
      misconception: '“Prettier slides mean a better presentation.” The clearest structure wins. Design supports the explanation; it cannot replace it.',
      tryThis: 'Explain your topic in exactly 120 seconds with no more than five slides. The constraint forces every unnecessary sentence out.',
      vocab: [
        ['outline', 'The ordered plan of what you will say.'],
        ['visual hierarchy', 'Arranging elements so the eye reads them in order.'],
        ['disclosure', 'Telling the audience that AI was used.'],
      ],
    },
    {
      hook: 'AI is confident even when it is wrong. Learning to check is learning to think.',
      bigIdea:
        'The safety module of the year. Students practise fact-checking claims against real sources, identify what must never be typed into a chatbot, and see how bias in data becomes bias in output.',
      why: 'Every other module in this curriculum depends on this one. Capability without verification is a liability.',
      concepts: [
        'Fact-checking means finding two independent, trustworthy sources before repeating a claim. AI is a starting point, never the citation.',
        'Private information — full name, address, school, phone, photos, passwords — never goes into a chatbot, no matter how helpful it seems.',
        'Bias appears because AI learns from human-made data, which carries human assumptions. Noticing it is the first step to challenging it.',
      ],
      funFact: 'When AI states something false with complete confidence it is called a hallucination — a known, expected behaviour, not an occasional glitch.',
      misconception: '“It gave a source, so it must be true.” AI can invent sources that look entirely real. Always open the link and check it exists.',
      tryThis: 'Ask AI for three facts about your town, then verify each one. Note how convincing the wrong ones sounded.',
      vocab: [
        ['hallucination', 'Confident AI output that is not true.'],
        ['bias', 'An unfair pattern learned from the training data.'],
        ['fact-check', 'To verify a claim against reliable sources.'],
      ],
    },
    {
      hook: 'Pick something that actually bothers you. Then use everything you have learned on it.',
      bigIdea:
        'The showcase asks students to choose a real problem, combine several AI workflows to address it, and present both the outcome and the thinking behind it — including what did not work.',
      why: 'Combining tools independently is what proves the year has produced capability rather than just familiarity.',
      concepts: [
        'Choosing a real problem means something the student genuinely cares about, small enough to attempt in eight sessions.',
        'Combining workflows chains tools together — research, then writing, then images, then audio or video — each feeding the next.',
        'Presenting and reflecting means showing the work honestly, including the dead ends and what they taught you.',
      ],
      funFact: 'Professional teams keep a “what we tried that failed” list precisely because it is often the most useful document in the project.',
      misconception: '“A perfect project is the goal.” A project you can explain honestly — including its flaws — demonstrates more understanding than a flawless one you cannot.',
      tryThis: 'Keep a one-line log every session: what you tried, and what happened. It becomes your presentation almost automatically.',
      vocab: [
        ['workflow', 'A sequence of steps and tools used to reach a result.'],
        ['portfolio', 'A collection of work showing what you can do.'],
        ['reflection', 'Thinking about what worked, what did not, and why.'],
      ],
    },
  ],

  7: [
    {
      hook: 'It is not magic and it is not thinking. It is prediction on an almost unimaginable scale.',
      bigIdea:
        'Generative AI predicts what comes next, learned from patterns across enormous quantities of text. Once students understand this one mechanism, both the impressive results and the confident mistakes stop being mysterious.',
      why: 'Understanding how something works is the difference between using it well and being fooled by it. This module makes everything afterwards make sense.',
      concepts: [
        'Patterns and predictions: the model repeatedly guesses the next most likely piece of text, one small chunk at a time, until the answer is complete.',
        'Training data is the vast collection of text a model learned from. What is absent, outdated or skewed in that data shows up in the output.',
        'AI can be wrong because plausible and true are different targets. It is optimised for one of them.',
      ],
      funFact: 'Language models do not store facts like a database. They store statistical patterns — which is exactly why they can produce a fluent, confident, entirely invented answer.',
      misconception: '“AI searches the internet for the answer.” Usually it does not. Unless a tool explicitly browses, it is generating from learned patterns.',
      tryThis: 'Ask AI about something extremely local — your street, your school’s history. Watch how quickly plausible invention appears.',
      vocab: [
        ['generative AI', 'AI that creates new text, images or audio.'],
        ['training data', 'The material a model learned patterns from.'],
        ['prediction', 'Choosing the most likely next piece of output.'],
      ],
    },
    {
      hook: 'Stop retyping prompts. Start building a library you reuse all year.',
      bigIdea:
        'Students learn a repeatable prompt structure — role, task, audience, format — and then iterate deliberately, saving the versions that work into a personal library organised by subject.',
      why: 'A reusable prompt library saves real time every week and turns scattered experimentation into a system.',
      concepts: [
        'Role, task and audience: tell the AI who to be, what to do and who it is for. Three sentences that transform the quality of the result.',
        'Examples and formats matter enormously. Showing one example of the output you want works better than describing it at length.',
        'Prompt iteration means changing one element at a time so you can tell which change actually helped.',
      ],
      funFact: 'Giving a model one or two worked examples is called few-shot prompting, and it often outperforms far longer written instructions.',
      misconception: '“Politeness improves answers.” Clarity improves answers. Please and thank you are good manners, not better engineering.',
      tryThis: 'Build ten reusable prompts for your three hardest subjects, then use only those for a fortnight and refine the weak ones.',
      vocab: [
        ['prompt template', 'A reusable prompt with slots to fill in.'],
        ['few-shot', 'Including examples of the desired output.'],
        ['iteration', 'Improving something through repeated rounds.'],
      ],
    },
    {
      hook: 'Research is not collecting sentences. It is deciding which sentences deserve trust.',
      bigIdea:
        'Students plan a research question, gather from multiple sources, compare where those sources disagree, and produce notes and citations that make the trail of evidence visible.',
      why: 'AI makes copying effortless, which makes genuine research skill more valuable, not less.',
      concepts: [
        'Question planning turns a topic into an answerable question. “Water” is a topic; “why does our area flood every monsoon?” can actually be researched.',
        'Source comparison means noticing where sources disagree and asking why — different dates, different methods, different interests.',
        'Notes and citations record where each fact came from as you go, because reconstructing it afterwards is miserable and often impossible.',
      ],
      funFact: 'Wikipedia’s greatest strength is not its articles but its reference lists — the citations at the bottom are where real research begins.',
      misconception: '“AI can do my research.” AI can summarise and suggest directions. It cannot judge whether a source deserves your trust.',
      tryThis: 'Research one claim from three different sources. Where they disagree, write down which you believe and exactly why.',
      vocab: [
        ['research question', 'A specific question an investigation aims to answer.'],
        ['citation', 'A reference showing where information came from.'],
        ['primary source', 'Original evidence rather than someone’s summary.'],
      ],
    },
    {
      hook: 'Rereading feels productive. Testing yourself actually is.',
      bigIdea:
        'Students build a personal revision system: break a chapter into concepts, generate flashcards and quizzes, and schedule the reviews across days rather than cramming them into one evening.',
      why: 'Study technique compounds across every subject. This module can improve results in classes that have nothing to do with AI.',
      concepts: [
        'Concept breakdown splits a chapter into individually testable pieces, revealing which specific parts are actually shaky.',
        'Flashcards and quizzes force recall, which is what builds durable memory — recognising an answer is not the same as remembering it.',
        'Revision planning spreads practice over days. Spaced repetition beats one long session, reliably and by a wide margin.',
      ],
      funFact: 'Hermann Ebbinghaus mapped the forgetting curve in the 1880s using nonsense syllables on himself. Spaced repetition still relies on his findings.',
      misconception: '“Highlighting is studying.” Research repeatedly ranks it among the least effective techniques. Self-testing ranks among the best.',
      tryThis: 'Build a seven-day revision plan for a real upcoming test, follow it exactly, and compare how prepared you feel to last time.',
      vocab: [
        ['spaced repetition', 'Reviewing material at increasing intervals.'],
        ['active recall', 'Retrieving an answer from memory without looking.'],
        ['flashcard', 'A prompt-and-answer card used for self-testing.'],
      ],
    },
    {
      hook: 'A designer starts with a brief, not with a button.',
      bigIdea:
        'Students write a proper creative brief — audience, message, mood, format — then use AI image tools to execute it, while learning where copyright and originality genuinely sit.',
      why: 'Design thinking is transferable, and the copyright conversation is one every young creator now needs to have.',
      concepts: [
        'A creative brief states who the work is for, what it must communicate and what feeling it should carry. Design without a brief is decoration.',
        'Image prompting works best in layers: subject, style, colour, mood, composition — then refine one layer at a time.',
        'Copyright and originality: imitating a living artist’s style raises real ethical questions, and AI output ownership differs country by country.',
      ],
      funFact: 'Several courts have found that images generated purely by AI, with no human authorship, may not qualify for copyright protection at all.',
      misconception: '“I made it, so I own it.” Ownership of AI-generated work is genuinely unsettled law and varies by jurisdiction.',
      tryThis: 'Write a brief for a poster before generating anything. Afterwards, check honestly whether the image met the brief or just looked nice.',
      vocab: [
        ['creative brief', 'A short document defining a design task.'],
        ['copyright', 'The legal right to control use of a creative work.'],
        ['originality', 'Work that is genuinely your own contribution.'],
      ],
    },
    {
      hook: 'Podcasts sound relaxed because they were carefully scripted to sound that way.',
      bigIdea:
        'Students structure a short educational podcast — hook, content, close — then produce it with generated voice, sound design and a clear disclosure that the voice is synthetic.',
      why: 'Audio forces clarity. There are no pictures to hide behind, so weak explanations become obvious immediately.',
      concepts: [
        'Script structure follows a shape: hook in the first ten seconds, one clear idea in the middle, and a close that gives the listener something to keep.',
        'Voice generation needs pacing and pronunciation checks, and it must be honest about being synthetic.',
        'Sound and disclosure: music sets mood but competes with speech, and the disclosure belongs where listeners will actually hear it.',
      ],
      funFact: 'Podcast listeners abandon episodes fastest in the opening thirty seconds. That is why every good show front-loads its most interesting sentence.',
      misconception: '“Reading my essay aloud makes a podcast.” Written and spoken language differ. Scripts need shorter sentences and far more signposting.',
      tryThis: 'Record your script yourself first. Every sentence you stumble over is one that needs rewriting.',
      vocab: [
        ['script', 'The written plan of everything that will be said.'],
        ['hook', 'The opening line that earns attention.'],
        ['disclosure', 'Stating clearly that AI generated the audio.'],
      ],
    },
    {
      hook: 'Explaining something to a younger student is the toughest test of whether you understand it.',
      bigIdea:
        'Students storyboard a video, produce it using avatar presenters and AI assets, then add captions — learning that accessibility is a design requirement rather than an optional extra.',
      why: 'Teaching a younger audience exposes every gap in the explainer’s own understanding.',
      concepts: [
        'A storyboard plans each shot and its narration before production begins, which prevents most of the rework.',
        'Avatar presenters need natural pacing and honest disclosure. An unlabelled synthetic presenter misleads the audience.',
        'Captions and accessibility widen your audience, help anyone watching without sound, and are increasingly expected as standard.',
      ],
      funFact: 'A large share of social video is watched with the sound off. Captions are not a bonus feature — they are how most people will experience your video.',
      misconception: '“Auto-captions are good enough.” They mangle names, technical words and accents. Always read them through and fix them.',
      tryThis: 'Show your video to an actual younger student and note every point where they look confused. Those are your edits.',
      vocab: [
        ['storyboard', 'A shot-by-shot visual plan for a video.'],
        ['avatar', 'A synthetic on-screen presenter.'],
        ['accessibility', 'Designing so more people can use something.'],
      ],
    },
    {
      hook: 'Designing a chatbot teaches you something surprising: most of the work is deciding what it should refuse to do.',
      bigIdea:
        'Students map conversation flows for a school-help assistant, define the boundaries of what it should handle, and test it against the awkward things real users will actually type.',
      why: 'Conversation design is systems thinking with a friendly face. It teaches planning for the unexpected without a line of code.',
      concepts: [
        'Conversation flows map what the user might say and how the bot responds, including the paths nobody planned for.',
        'Helpful boundaries mean deciding what the bot will not answer, and saying so clearly instead of guessing badly.',
        'Testing responses means letting other students loose on it. They will type things you would never have imagined.',
      ],
      funFact: 'ELIZA, built in 1966, simply reflected users’ statements back as questions — and people still formed emotional attachments to it.',
      misconception: '“A good chatbot answers everything.” A good chatbot answers its own domain well and hands over honestly when it should not.',
      tryThis: 'Give your chatbot to five classmates without instructions. Log every question it handled badly — that log is your next version.',
      vocab: [
        ['conversation flow', 'The mapped paths a dialogue can take.'],
        ['fallback', 'The response used when the bot does not understand.'],
        ['scope', 'The range of things a system is meant to handle.'],
      ],
    },
    {
      hook: 'Look around your neighbourhood. Something there could be better.',
      bigIdea:
        'Students identify a genuine local problem, design an AI-supported concept to address it, and pitch it — with attention to who is affected and what could go wrong.',
      why: 'Applying AI to a real community problem makes the technology concrete and the ethics unavoidable.',
      concepts: [
        'Problem discovery means observing and asking rather than assuming. The problem you notice is rarely the one people actually have.',
        'Solution design must ask who is helped, who might be harmed and who is left out entirely.',
        'Pitch and reflection means explaining the problem, the idea, the evidence and the honest limitations in a few minutes.',
      ],
      funFact: 'Design teams often spend longer defining the problem than solving it, because a precisely stated problem is most of the answer.',
      misconception: '“Technology will fix it.” Many community problems are about coordination or trust, where technology helps only at the edges.',
      tryThis: 'Interview three people affected by your chosen problem before designing anything. Their answers will change your idea.',
      vocab: [
        ['problem discovery', 'Investigating a problem before solving it.'],
        ['stakeholder', 'Anyone affected by a solution.'],
        ['pitch', 'A short persuasive presentation of an idea.'],
      ],
    },
  ],

  8: [
    {
      hook: 'Different models are good at different things. Knowing which is which is a real skill.',
      bigIdea:
        'Students move from using one tool to comparing several — testing the same task across models, recording where each performs well, and observing hallucination as a measurable behaviour rather than a rumour.',
      why: 'Model literacy prevents both blind trust and blanket dismissal. Both are common, and both are wrong.',
      concepts: [
        'Generative AI concepts cover tokens, context windows and why a model eventually forgets the start of a long conversation.',
        'Model capabilities differ by design — some reason better, some write better, some see images, some search the web.',
        'Hallucinations are systematic, not random. They cluster around obscure facts, recent events, numbers and citations.',
      ],
      funFact: 'A context window is the model’s working memory. Exceed it and the earliest parts of the conversation genuinely fall out of view.',
      misconception: '“The newest model is best at everything.” Benchmarks vary by task. The right question is always “best for what?”',
      tryThis: 'Run one identical, difficult task across three models and score them on accuracy, usefulness and honesty about uncertainty.',
      vocab: [
        ['token', 'A chunk of text a model processes at a time.'],
        ['context window', 'How much text a model can consider at once.'],
        ['benchmark', 'A standard test used to compare models.'],
      ],
    },
    {
      hook: 'A prompt you can repeat, test and improve stops being a message and becomes a tool.',
      bigIdea:
        'Students build multi-step prompt systems where one output feeds the next, and write rubrics that let them judge output quality consistently instead of by gut feeling.',
      why: 'Systematic prompting produces reliable results. Reliability is what allows a technique to be trusted for schoolwork.',
      concepts: [
        'Prompt frameworks give a repeatable skeleton — role, context, task, format, constraints — so nothing important is forgotten.',
        'Multi-step prompts break big jobs into stages: outline, then draft, then critique, then revise. Each stage is checkable.',
        'Evaluation rubrics define what “good” means before you look at the output, which prevents talking yourself into accepting mediocre work.',
      ],
      funFact: 'Asking a model to critique its own draft against a rubric before revising measurably improves the final result — the same as it does for human writers.',
      misconception: '“One perfect prompt solves it.” Complex tasks reliably do better as several small, verified steps.',
      tryThis: 'Build a three-stage system — outline, draft, critique — for essays, then compare its output against a single-prompt attempt.',
      vocab: [
        ['framework', 'A reusable structure for constructing prompts.'],
        ['chaining', 'Feeding one output into the next prompt.'],
        ['rubric', 'A defined scale for judging quality.'],
      ],
    },
    {
      hook: 'Two reliable sources disagree. Now what?',
      bigIdea:
        'Students build a search strategy, deal with genuinely conflicting sources, and write summaries where every claim carries a citation and disagreement is reported rather than hidden.',
      why: 'Handling conflicting evidence is the exact skill that distinguishes real understanding from confident repetition.',
      concepts: [
        'Search strategy means choosing terms deliberately, using several phrasings, and going to specialist sources rather than only the first page.',
        'Conflicting sources are normal. The task is to work out why they differ — date, method, sample or motive — not to pick the convenient one.',
        'Cited summaries attach every significant claim to its source, so a reader can check your reasoning rather than trusting you.',
      ],
      funFact: 'Two studies reaching opposite conclusions often measured different populations or time periods. The disagreement is usually informative, not embarrassing.',
      misconception: '“The majority of sources must be right.” Sources often copy one another. Ten articles can all trace back to a single flawed original.',
      tryThis: 'Find a topic where sources genuinely conflict, then write one paragraph explaining the disagreement without taking a side.',
      vocab: [
        ['synthesis', 'Combining multiple sources into a coherent account.'],
        ['corroboration', 'Independent confirmation of a claim.'],
        ['bias', 'A slant introduced by a source’s perspective or interest.'],
      ],
    },
    {
      hook: 'Data does not speak for itself. People make it speak, and sometimes they make it lie.',
      bigIdea:
        'Students clean a real dataset, ask questions of it, use AI to help interpret charts, and practise stating conclusions with an honest level of confidence.',
      why: 'Data literacy is protection. Students are shown statistics daily and are rarely taught how to interrogate them.',
      concepts: [
        'Clean tabular data first: fix blanks, duplicates and inconsistent labels. Analysis of dirty data produces confident nonsense.',
        'Questioning data means asking who collected it, from whom, when and why. Every dataset has a point of view.',
        'Chart interpretation means reading the axes and the sample size before reacting to the shape.',
      ],
      funFact: 'Ice-cream sales and drowning incidents rise together. Neither causes the other — hot weather causes both. This is why correlation is not causation.',
      misconception: '“A big sample means a good study.” A large but skewed sample can be far more misleading than a small, careful one.',
      tryThis: 'Survey your year group, then write two honest headlines from the same data — one that oversells it and one that is accurate.',
      vocab: [
        ['correlation', 'Two things changing together.'],
        ['causation', 'One thing actually causing another.'],
        ['sample', 'The group actually measured in a study.'],
      ],
    },
    {
      hook: 'One message, told four different ways, reaching four different people.',
      bigIdea:
        'Students plan a campaign that carries a single message across text, image and audio, learning that creative direction — the consistent thread — matters more than any individual asset.',
      why: 'Multimodal communication mirrors how ideas actually spread now, and demands genuine planning to stay coherent.',
      concepts: [
        'Text-to-image generates visuals from description; the quality of the description sets the ceiling on the result.',
        'Image-to-text works in reverse — describing, extracting or explaining a picture — and is invaluable for accessibility.',
        'Creative direction is the through-line: consistent colour, tone and message, so four pieces read as one campaign.',
      ],
      funFact: 'Multimodal models convert images and text into the same internal representation, which is how one system can compare a picture with a sentence.',
      misconception: '“More formats means more impact.” Four inconsistent pieces are weaker than two that clearly belong together.',
      tryThis: 'Write your campaign message in one sentence first. If any asset does not serve that sentence, cut it.',
      vocab: [
        ['multimodal', 'Working across text, image and audio together.'],
        ['creative direction', 'The consistent vision across a body of work.'],
        ['campaign', 'A coordinated set of communications with one goal.'],
      ],
    },
    {
      hook: 'You can now put words in anyone’s mouth on video. So the rules matter more than the tools.',
      bigIdea:
        'Students produce a short documentary-style video using synthetic media, while working through the ethics: whose likeness, whose consent, and what the audience is entitled to be told.',
      why: 'Students will meet synthetic media constantly. Producing it responsibly, once, teaches more than any warning could.',
      concepts: [
        'Script revision means cutting to the essential. Documentary work is mostly deciding what to leave out.',
        'Synthetic media covers generated voice, faces and video, and requires understanding both capability and consequence.',
        'Disclosure and consent are non-negotiable: label synthetic content, and never use a real person’s likeness without permission.',
      ],
      funFact: 'Several countries now legally require AI-generated content involving real people to be labelled — regulation catching up with capability.',
      misconception: '“It is obviously fake, so no label is needed.” Obvious to you is not obvious to everyone, and clips get shared without context.',
      tryThis: 'Add a visible synthetic-media label to your video, then ask a viewer whether they would have known without it.',
      vocab: [
        ['synthetic media', 'Media generated or altered by AI.'],
        ['likeness', 'A person’s recognisable face or voice.'],
        ['provenance', 'The verifiable origin of a piece of media.'],
      ],
    },
    {
      hook: 'If you do the same fiddly task every week, that is a job for a machine.',
      bigIdea:
        'Students map a repetitive task as inputs, steps and outputs, then build a no-code automation for it — discovering that describing a process precisely is harder than automating it.',
      why: 'Automation thinking is systems thinking. It also gives students back real time in their own week.',
      concepts: [
        'Inputs and outputs define the boundaries: what starts the process, and what counts as done.',
        'Repeatable steps must be written precisely enough that someone else could follow them identically.',
        'No-code workflow maps connect triggers and actions visually, showing the logic without writing a program.',
      ],
      funFact: 'Automation projects most often fail at the mapping stage, not the building stage. Nobody had written down what the process actually was.',
      misconception: '“Automate everything.” Automating a broken or rare process just makes the mess faster. Fix and prioritise first.',
      tryThis: 'Track your week and find the task you repeat most. Map it fully on paper before building anything.',
      vocab: [
        ['automation', 'Making a process run without manual steps.'],
        ['trigger', 'The event that starts an automated workflow.'],
        ['workflow map', 'A visual diagram of a process.'],
      ],
    },
    {
      hook: 'If a video can be faked perfectly, what still counts as proof?',
      bigIdea:
        'Students learn to spot manipulated media, understand the scams built on it, and adopt verification habits — with the honest caveat that detection is getting harder, so source-checking matters more than eye-checking.',
      why: 'This is direct personal safety. Voice-clone scams targeting families are already common in India.',
      concepts: [
        'Manipulated media includes deepfake video, cloned voice and altered images. Knowing what is possible is the first defence.',
        'Privacy and scams: the more of your voice and face is public, the more material exists to imitate you.',
        'Verification habits are simple and effective — check the original source, call back on a known number, and agree a family code word.',
      ],
      funFact: 'Many families now use an agreed code word for emergency phone calls, specifically because a familiar voice is no longer proof of identity.',
      misconception: '“I would spot a deepfake.” Studies show people perform close to guesswork. Verification beats intuition every time.',
      tryThis: 'Agree a family code word this week, and explain to a grandparent exactly why it is now necessary.',
      vocab: [
        ['deepfake', 'Synthetic media imitating a real person.'],
        ['voice cloning', 'Recreating a person’s voice from samples.'],
        ['verification', 'Confirming authenticity through an independent channel.'],
      ],
    },
    {
      hook: 'Find someone with a real problem. Build something they would actually use.',
      bigIdea:
        'A design-led challenge: identify a user, prototype quickly, test with that user, and iterate based on what they do rather than what they politely say.',
      why: 'Building for someone other than yourself is the step that turns a school exercise into genuine design work.',
      concepts: [
        'User problem identification starts with observation and interviews, not with an idea you already like.',
        'Prototyping means building the roughest version that can be tested. Polish comes only after the idea survives.',
        'Testing and pitching means watching real use, then presenting what you learned alongside what you built.',
      ],
      funFact: 'Designers often build deliberately rough prototypes, because polished ones make testers reluctant to criticise them honestly.',
      misconception: '“Users will tell you what they want.” They will describe what they think they want. What they do while testing is the real data.',
      tryThis: 'Test your prototype with one real user and say nothing while they use it. The silence is uncomfortable and enormously informative.',
      vocab: [
        ['prototype', 'An early testable version of an idea.'],
        ['user testing', 'Watching real people use your solution.'],
        ['iteration', 'Improving through repeated build-test cycles.'],
      ],
    },
  ],

  9: [
    {
      hook: 'Under every AI product sit three things: a model, data, and a set of trade-offs somebody chose.',
      bigIdea:
        'Students build an accurate mental model of how AI systems are assembled — what a model is, what data does, why outputs are probabilistic, and which limits are fundamental rather than temporary.',
      why: 'Applied work needs accurate foundations. Without them, students either over-trust systems or dismiss them entirely.',
      concepts: [
        'Models and datasets: a model is patterns learned from data. Change the data and you change the behaviour, sometimes drastically.',
        'Probability intuition explains why the same prompt gives different answers — the model samples from likely options rather than looking up one stored answer.',
        'Limits and trade-offs are real: speed against quality, cost against capability, creativity against reliability. Every product picks a point.',
      ],
      funFact: 'The “temperature” setting controls how adventurously a model samples. Low temperature gives consistent answers; high gives creative and less reliable ones.',
      misconception: '“Bigger models are always better.” Bigger costs more and runs slower. Many production systems deliberately use smaller, faster models.',
      tryThis: 'Ask an identical question five times in fresh conversations and compare the answers. The variation is the probability made visible.',
      vocab: [
        ['model', 'A system of learned patterns used to produce output.'],
        ['dataset', 'The collection of data a model learned from.'],
        ['probabilistic', 'Producing outputs based on likelihood, not certainty.'],
      ],
    },
    {
      hook: 'If you cannot measure whether the output is good, you are not engineering anything.',
      bigIdea:
        'Students decompose complex tasks into stages, use worked examples to set the standard, and score outputs against an explicit scorecard so improvement becomes evidence rather than opinion.',
      why: 'Measurement is what separates prompt engineering from prompt guessing.',
      concepts: [
        'Decomposition splits a hard task into stages that can each be checked, rather than one prompt that must somehow do everything.',
        'Few-shot examples show the model exactly what good looks like, which works better than describing it.',
        'Output evaluation uses a scorecard applied consistently, so you can prove version two beat version one.',
      ],
      funFact: 'Asking a model to work through its reasoning step by step improves accuracy on multi-step problems — an effect strong enough to have its own name: chain-of-thought.',
      misconception: '“It looks better, so it is better.” Without scoring against fixed criteria, you are measuring your own mood.',
      tryThis: 'Score ten outputs from two prompt versions against the same rubric. Then check whether your instinct matched the numbers.',
      vocab: [
        ['decomposition', 'Breaking a task into smaller stages.'],
        ['scorecard', 'A fixed set of criteria used to rate output.'],
        ['chain-of-thought', 'Prompting a model to reason step by step.'],
      ],
    },
    {
      hook: 'A citation is not decoration. It is you showing your working.',
      bigIdea:
        'Students distinguish primary from secondary sources, verify claims back to their origin, and synthesise findings into a report where every assertion can be traced.',
      why: 'These are the exact research standards expected in senior school and university, and they are far easier to build now.',
      concepts: [
        'Primary sources are original evidence — the study, the data, the interview. Secondary sources describe them, sometimes inaccurately.',
        'Claim verification means following a fact back to its origin rather than trusting the article that repeated it.',
        'Synthesis means constructing your own argument from multiple sources, not stitching their summaries together.',
      ],
      funFact: 'Citation chasing regularly reveals that a widely repeated statistic traces back to a single source that never actually said it.',
      misconception: '“AI-provided citations save time.” Models fabricate plausible references. Every citation must be opened and confirmed to exist.',
      tryThis: 'Take a statistic you have seen repeated online and trace it to its original source. Note how many hops it takes — and whether it survives.',
      vocab: [
        ['primary source', 'Original, first-hand evidence.'],
        ['secondary source', 'A description or analysis of primary material.'],
        ['traceability', 'Being able to follow a claim back to its origin.'],
      ],
    },
    {
      hook: 'The data is fine. The conclusion is where things usually go wrong.',
      bigIdea:
        'Students frame answerable questions, use AI to explore patterns and outliers, and practise stating conclusions with appropriate caution — including saying when the data simply cannot answer the question.',
      why: 'Drawing responsible conclusions is the hardest and most valuable part of data work, and the part most often skipped.',
      concepts: [
        'Data questions must be answerable by the data you actually have. Half of analysis is narrowing the question until it is.',
        'Patterns and outliers both matter. An outlier can be an error, or it can be the most interesting thing in the dataset.',
        'Responsible conclusions state what the data supports, what it does not, and what would be needed to be more certain.',
      ],
      funFact: 'Anscombe’s quartet is four datasets with identical means, variances and correlations that look completely different when plotted. Always plot the data.',
      misconception: '“The AI analysed it, so the conclusion is sound.” AI describes patterns. Judging what they mean remains entirely human work.',
      tryThis: 'Write your conclusion, then write the strongest honest objection to it. If you cannot answer the objection, soften the conclusion.',
      vocab: [
        ['outlier', 'A data point far from the rest.'],
        ['confounding', 'A hidden factor influencing both variables.'],
        ['uncertainty', 'The honest range of doubt around a conclusion.'],
      ],
    },
    {
      hook: 'A campaign is not a pile of content. It is one idea, delivered repeatedly and well.',
      bigIdea:
        'Students run a full production cycle — strategy, then image, voice and video assets, then release — while holding a standard of authenticity throughout.',
      why: 'Production discipline is what turns capable tool use into work that stands up outside the classroom.',
      concepts: [
        'Campaign strategy defines the audience, the single message and how success will be judged, before any asset is made.',
        'Image, voice and video assets must share tone and visual language, or the campaign reads as unrelated fragments.',
        'Authenticity means the claims are true, the sources are real and the synthetic elements are disclosed.',
      ],
      funFact: 'Marketers use the “rule of seven” — a message typically needs around seven exposures before it lands. Consistency is what makes repetition work.',
      misconception: '“Reach means impact.” Views measure attention, not change. Define what behaviour you actually wanted to shift.',
      tryThis: 'State your success measure before launching, then check it honestly afterwards — even if the answer is disappointing.',
      vocab: [
        ['strategy', 'The plan connecting audience, message and outcome.'],
        ['asset', 'An individual piece of content in a campaign.'],
        ['authenticity', 'Being honest about sources and about AI use.'],
      ],
    },
    {
      hook: 'The most trustworthy assistant is one that knows exactly what it does not know.',
      bigIdea:
        'Students design a subject-help assistant with defined knowledge boundaries, a conversation design that guides users, and fallbacks for the moments it cannot help.',
      why: 'Designing for the failure cases, not just the happy path, is the mark of serious system thinking.',
      concepts: [
        'Knowledge boundaries define what the assistant covers and what it must decline, so it never invents an answer to look useful.',
        'Conversation design guides users towards what the system can genuinely do, rather than leaving them to guess.',
        'Testing and fallback: handle the unclear question, the out-of-scope question and the deliberately awkward one.',
      ],
      funFact: 'Grounding an assistant in a specific set of documents, rather than relying on model memory, sharply reduces invented answers.',
      misconception: '“Saying ‘I do not know’ makes it look weak.” Users trust a system that admits limits far more than one caught inventing.',
      tryThis: 'Write ten questions your assistant should refuse. Test all ten and check it refuses gracefully rather than guessing.',
      vocab: [
        ['grounding', 'Tying answers to a trusted source of information.'],
        ['scope boundary', 'The defined edge of what a system handles.'],
        ['graceful failure', 'Failing clearly and helpfully.'],
      ],
    },
    {
      hook: 'An agent that acts on your behalf needs to know when to stop and ask.',
      bigIdea:
        'Students map an agentic workflow where AI performs multiple steps, then design the human approval points and error handling that make delegation safe rather than reckless.',
      why: 'Agentic systems are becoming ordinary. Understanding where humans must stay in control is the critical judgement.',
      concepts: [
        'Workflow logic sequences steps and decisions, making explicit what happens automatically and what does not.',
        'Human approval points sit wherever an action is expensive, irreversible or affects other people.',
        'Error handling plans for the step that fails, the ambiguous answer and the loop that never ends.',
      ],
      funFact: 'Aviation solved this decades ago with checklists and mandatory confirmations. Agentic AI design is rediscovering the same principles.',
      misconception: '“Full automation is the goal.” The goal is appropriate automation. Some decisions should always require a person.',
      tryThis: 'Map your workflow and mark every step where a mistake would be hard to undo. Each mark is an approval gate.',
      vocab: [
        ['agent', 'An AI system that takes multi-step actions towards a goal.'],
        ['approval gate', 'A point requiring human sign-off.'],
        ['error handling', 'Planned responses to things going wrong.'],
      ],
    },
    {
      hook: 'The hardest AI questions have no code in them at all.',
      bigIdea:
        'Students examine bias and fairness with real cases, look honestly at how AI is reshaping work, and learn the basics of how governance and regulation attempt to keep up.',
      why: 'Students will spend their careers alongside these systems. Informed opinions beat inherited ones.',
      concepts: [
        'Bias and fairness: systems trained on historical data reproduce historical unfairness unless someone actively intervenes.',
        'Work and careers change unevenly — tasks are automated before whole jobs, and new roles appear that nobody had named five years earlier.',
        'Governance basics cover transparency, accountability and the emerging regulation across different countries.',
      ],
      funFact: 'A well-documented recruitment tool had to be scrapped after it learned to downgrade CVs containing the word “women’s”, because it was trained on a decade of biased hiring.',
      misconception: '“Algorithms are neutral.” Every algorithm encodes choices about what to optimise and what to ignore. Neutrality is not available.',
      tryThis: 'Debate a real AI policy question from the side you disagree with. It is the fastest way to find the weak points in your own view.',
      vocab: [
        ['algorithmic bias', 'Systematic unfairness in a system’s outputs.'],
        ['accountability', 'Being answerable for a system’s effects.'],
        ['governance', 'The rules and oversight applied to technology.'],
      ],
    },
    {
      hook: 'Validate the problem before you fall in love with the solution.',
      bigIdea:
        'The Class 9 capstone runs the full innovation cycle: confirm the problem is real, build a prototype, test it with users, and pitch it with documentation honest about what works and what does not.',
      why: 'Problem validation is the discipline that stops months being spent solving something nobody had.',
      concepts: [
        'Problem validation means gathering evidence that the problem exists and matters before building anything.',
        'Build and test proceeds in short cycles with real users involved throughout.',
        'Demo and documentation present the working prototype alongside the evidence and the known limitations.',
      ],
      funFact: 'Startup post-mortems consistently name “no market need” as the top reason for failure — building something nobody wanted.',
      misconception: '“A great idea sells itself.” Evidence sells ideas. Show what users did, not what you hoped they would do.',
      tryThis: 'Before building, find five people with the problem. If you cannot find five, reconsider the problem rather than the solution.',
      vocab: [
        ['validation', 'Evidence that a problem or solution is real.'],
        ['MVP', 'The smallest version that tests the core idea.'],
        ['pivot', 'Changing direction based on what you learned.'],
      ],
    },
  ],

  10: [
    {
      hook: 'Know the landscape and you stop being impressed by everything equally.',
      bigIdea:
        'Students build a working map of modern AI: what foundation models are, how multimodal systems differ, and how to evaluate a capability claim rather than accepting a headline.',
      why: 'Board-year students are making subject and career decisions. An accurate map of the field is genuinely useful information.',
      concepts: [
        'Foundation models are large general-purpose models adapted to many tasks, rather than built for one.',
        'Multimodal systems handle text, image, audio and video together, which changes what applications are even possible.',
        'Capability evaluation means testing claims yourself on tasks you can verify, rather than trusting benchmark headlines.',
      ],
      funFact: 'Benchmark scores can be inflated when test material has leaked into training data — a known problem called contamination.',
      misconception: '“Benchmarks show which model is best.” They show performance on specific tests. Your task is not those tests.',
      tryThis: 'Design your own five-task benchmark from problems you can check, and run it on every model you have access to.',
      vocab: [
        ['foundation model', 'A large general model adapted to many tasks.'],
        ['multimodal', 'Handling several input and output types together.'],
        ['contamination', 'Test data leaking into training data.'],
      ],
    },
    {
      hook: 'Reliable beats clever. Every time, in anything that matters.',
      bigIdea:
        'Students construct multi-step workflows with planning prompts, critic prompts that check work against rubrics, and templates that produce consistent quality across different inputs.',
      why: 'Consistency is what makes an AI workflow usable by someone other than its author.',
      concepts: [
        'Planning prompts make the model produce a plan first, which can be reviewed and corrected before any expensive work happens.',
        'Rubrics and critics have one pass generate and another evaluate against fixed criteria, catching weak output before you see it.',
        'Repeatable templates capture the working version so results do not depend on how you happened to phrase it today.',
      ],
      funFact: 'Generator-and-critic setups mirror how editorial teams have always worked. Separating creation from evaluation improves both.',
      misconception: '“More steps means better output.” Each step adds cost and failure risk. Add a step only when it demonstrably improves the result.',
      tryThis: 'Add a critic stage to your best workflow and measure whether output scores actually improve. Remove it if they do not.',
      vocab: [
        ['critic prompt', 'A prompt that evaluates other output.'],
        ['template', 'A reusable, tested prompt structure.'],
        ['reliability', 'Consistent quality across many runs.'],
      ],
    },
    {
      hook: 'Certainty is easy to write. Honest uncertainty is much harder — and much more useful.',
      bigIdea:
        'Students conduct academic-standard research: sharp questions, evidence weighed by quality, and writing that states its confidence level honestly rather than flattening everything into assertion.',
      why: 'This is precisely the standard expected at senior school and university, and the students who have practised it arrive ahead.',
      concepts: [
        'Research questions must be specific, answerable and worth asking. Refining the question is most of the work.',
        'Evidence quality varies enormously — sample size, method, funding and replication all matter before the conclusion does.',
        'Citations and uncertainty go together: cite everything, and say plainly where the evidence is thin.',
      ],
      funFact: 'Many published findings across several fields have failed to replicate when retested — the reason single studies should never be treated as settled.',
      misconception: '“Saying I am uncertain weakens my work.” Stated uncertainty is a marker of rigour. Unearned certainty is what experts distrust.',
      tryThis: 'Grade every source in your bibliography for quality, then check whether your strongest claim rests on your weakest source.',
      vocab: [
        ['replication', 'Repeating a study to test its findings.'],
        ['evidence quality', 'How much weight a source deserves.'],
        ['confidence', 'How certain a conclusion honestly is.'],
      ],
    },
    {
      hook: 'A dashboard that looks authoritative and misleads is worse than no dashboard.',
      bigIdea:
        'Students prepare a dataset properly, design visual analysis that answers a real question, and interrogate their own dashboard for the claims it implies but cannot actually support.',
      why: 'Decision-makers act on dashboards. Designing them honestly is an ethical responsibility, not just a design task.',
      concepts: [
        'Dataset preparation is the unglamorous majority of the work — cleaning, joining, checking and documenting.',
        'Visual analysis means choosing the chart that answers the question, with honest scales and visible sample sizes.',
        'Avoiding false claims means checking what a viewer will conclude, not merely what you technically stated.',
      ],
      funFact: 'A well-designed dashboard is judged by the decisions it improves, not by the number of charts it contains.',
      misconception: '“More metrics means more insight.” Too many metrics hides the important one. Most good dashboards answer three questions well.',
      tryThis: 'Show your dashboard to someone for thirty seconds, then ask what they concluded. If it is wrong, the dashboard is wrong.',
      vocab: [
        ['dashboard', 'A visual summary supporting decisions.'],
        ['metric', 'A measured value tracked over time.'],
        ['data preparation', 'Cleaning and structuring data before analysis.'],
      ],
    },
    {
      hook: 'Professional work is not about better tools. It is about a process that finishes.',
      bigIdea:
        'Students run a full production workflow across formats — direction, production, review, release — while handling rights and disclosure to a standard that would survive outside school.',
      why: 'Portfolio-quality work needs process. Talent without process produces impressive fragments and no finished pieces.',
      concepts: [
        'Creative direction defines the visual and tonal rules everything must follow, agreed before production begins.',
        'Production workflow sequences the work with review points, so problems surface early rather than at release.',
        'Rights and disclosure cover licences, permissions and clear labelling of AI-generated elements.',
      ],
      funFact: 'Studios lock a style guide before production precisely because changing direction halfway is what destroys schedules.',
      misconception: '“I will sort out the licensing later.” Discovering an asset cannot be used after release is expensive and sometimes public.',
      tryThis: 'Write a one-page style guide first, then check every finished asset against it. Redo anything that fails.',
      vocab: [
        ['style guide', 'Documented rules for consistent output.'],
        ['licence', 'The terms under which an asset may be used.'],
        ['review point', 'A scheduled check before work continues.'],
      ],
    },
    {
      hook: 'The model is the easy part. The interface is where products succeed or fail.',
      bigIdea:
        'Students design an AI product from user needs, decide which features genuinely warrant AI, prototype the interface, and improve it based on what testers actually do.',
      why: 'Product thinking is what turns technical capability into something people use. It is the rarer skill of the two.',
      concepts: [
        'User needs come first and are established by research, not by assumption about what would be impressive.',
        'Feature design decides where AI genuinely helps and where a simple button is better — and it usually is.',
        'Prototype feedback comes from watching testers, then changing the design rather than explaining it.',
      ],
      funFact: 'Products often fail not because the AI was weak but because users could not tell what the system was doing or why.',
      misconception: '“Add AI and it is better.” Unnecessary AI adds latency, cost and unpredictability to something that worked fine.',
      tryThis: 'List your features and mark each as “needs AI” or “does not”. Be honest — most will not.',
      vocab: [
        ['user need', 'A real problem a person wants solved.'],
        ['interface', 'How a person interacts with a system.'],
        ['latency', 'The delay before a system responds.'],
      ],
    },
    {
      hook: 'Delegate the work. Never delegate the responsibility.',
      bigIdea:
        'Students design automation that is powerful and controllable — clear agent roles, approval and audit trails, and failure-safe behaviour that degrades gracefully instead of collapsing.',
      why: 'This is the professional standard now emerging around agentic systems, and understanding it early is a genuine advantage.',
      concepts: [
        'Agent roles define what each component may do and, importantly, what it may not.',
        'Approval and audit mean a record of what was done, by which component, and who authorised it.',
        'Failure-safe design ensures that when something breaks the system stops safely rather than continuing incorrectly.',
      ],
      funFact: 'Safety-critical engineering assumes failure will happen and designs for it. Software that assumes success is the outlier, not the norm.',
      misconception: '“Logs are only for debugging.” Logs are the accountability record. Without them, nobody can establish what actually happened.',
      tryThis: 'Take your automation and ask: if this ran wrong for a week unnoticed, what would the damage be? Design the alarm for that.',
      vocab: [
        ['audit trail', 'A record of actions taken by a system.'],
        ['fail-safe', 'Defaulting to a safe state when something fails.'],
        ['authorisation', 'Permission required before an action proceeds.'],
      ],
    },
    {
      hook: 'Everything you have learned this year comes with a question: when should you not use it?',
      bigIdea:
        'Students engage with academic integrity honestly, learn the basics of privacy law and data rights, and map the career pathways where AI capability genuinely matters.',
      why: 'Board year decisions are approaching. Clear rules and an accurate view of the field are both immediately practical.',
      concepts: [
        'Academic integrity: AI may support understanding and drafting, but submitted work must be the student’s own — and rules vary by board and school.',
        'Privacy and law basics cover consent, data protection and what happens to information typed into a tool.',
        'AI career pathways span far more than engineering — policy, design, ethics, data, education and law all now need AI literacy.',
      ],
      funFact: 'India’s Digital Personal Data Protection Act, passed in 2023, sets out how personal data must be handled — including data given to AI services.',
      misconception: '“Everyone uses AI for assignments, so it is fine.” Rules differ by board and school, and the consequences fall on the individual.',
      tryThis: 'Write your own AI-use policy for the coming year, specific enough that you can check yourself against it honestly.',
      vocab: [
        ['academic integrity', 'Honesty about what work is your own.'],
        ['data protection', 'Legal rules governing personal data.'],
        ['AI literacy', 'The ability to use and question AI competently.'],
      ],
    },
    {
      hook: 'One original problem. One documented solution. One presentation you can stand behind.',
      bigIdea:
        'The final capstone requires an original problem, an iteratively built solution, complete documentation of the decisions and their reasoning, and a public demonstration under questioning.',
      why: 'This is the artefact that evidences the whole pathway — far more persuasive to a school, university or employer than any certificate.',
      concepts: [
        'An original problem is one the student identified themselves, with evidence that it matters to someone.',
        'Iterative building means visible versions, tested and improved, with the reasoning behind each change recorded.',
        'Public demonstration means presenting to a genuine audience and answering unrehearsed questions.',
      ],
      funFact: 'Admissions and hiring panels consistently report that a candidate who can explain their decisions outperforms one with a more impressive project they cannot discuss.',
      misconception: '“The final version is what matters.” The reasoning across versions is what demonstrates capability. Keep and show the earlier ones.',
      tryThis: 'Keep a decision log: every significant choice, the alternatives, and why you chose. It becomes the strongest part of your presentation.',
      vocab: [
        ['decision log', 'A record of choices and their reasoning.'],
        ['iteration', 'One cycle of building, testing and improving.'],
        ['portfolio', 'Curated work evidencing what you can do.'],
      ],
    },
  ],
};
