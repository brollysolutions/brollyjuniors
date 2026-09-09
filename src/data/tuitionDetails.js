/* The long-form body of the fourteen academic tuition pages, keyed by route.
 *
 * These came across from fourteen standalone builds of the same template
 * family the thirteen programme pages in data/programmeDetails.js came from —
 * economics, civics, geography, general science, history, biology, chemistry,
 * physics, advanced maths, mathematics, and the IIT, JEE, NEET and olympiad
 * foundation pages. They render through pages/ProgrammePage.jsx, so adding an
 * entry here is what promotes a tuition topic from the short InfoPage to the
 * full page.
 *
 * What is NOT in this file, on purpose — the same rule programmeDetails.js
 * follows:
 *
 *   - The route, the SEO record, the hero chips, the quick answer and the
 *     stage-by-stage curriculum. Those live in data/catalog/tuitions.js, which
 *     the menu, the sitemap and lib/seo.js already read.
 *   - Contact details and the address, which come from data/site.js.
 *   - The course name in the booking form, resolved through lib/course.js.
 *
 * Two deliberate departures from the sources:
 *
 *   - The H1 and the lead are the tuition page's own, not the source build's.
 *     A source page was titled "Physics Classes for Kids in Hyderabad"; this
 *     URL is /tuitions/physics and is held to "physics tuition in hyderabad".
 *     Importing the source H1 would have pointed the page at a second search.
 *   - The age guidance is carried with the source's own note that it describes
 *     the subject rather than Brolly Juniors batch groups, because several of
 *     these pages publish a narrower class range in their hero.
 *
 * The claims kept verbatim are the ones that say what these classes are NOT:
 * no promised marks, ranks, selection or admission, no fixed syllabus, and no
 * fee or timing quoted on the page. Those are the first sentences a competitor
 * would drop and the ones a parent most needs.
 */

export const tuitionDetails = {
  /* ==================================================================
     Economics Tuition — /tuitions/economics
     ================================================================== */
  '/tuitions/economics': {
    h1: 'Economics tuition in Hyderabad for a subject students meet for the first time.',
    lead: 'Core concepts, the three sectors, development indicators and data interpretation — taught from scratch, because almost nobody arrives with a background in it.',
    heroPills: ['Needs and wants', 'Scarcity', 'Choices', 'Opportunity cost'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 9–10', 'Batches of eight'],
    hero: {
      title: 'What are Economics classes for kids?',
      paras: [
        'Help children understand money, choices, needs, wants, resources and how people buy, sell and work together.',
        'Economics classes for kids help children understand how people use money and resources, make choices, buy and sell things, and meet their needs and wants.',
      ],
    },
    facts: [
      { strong: 'Classes 9–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Data work', span: 'Tables and graphs' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Economics Learning Looks Like',
      lead: 'Six things children do in an Economics session at Brolly Juniors.',
      items: [
        {
          title: 'Learn Money Basics',
          icon: '💰',
          text: 'Why money exists, what a price is, and what saving actually means.',
        },
        {
          title: 'Understand Buying & Selling',
          icon: '🛒',
          text: 'What happens on both sides of a simple purchase.',
        },
        {
          title: 'Learn Smart Choices',
          icon: '🧠',
          text: 'Comparing options and being able to explain the decision.',
        },
        {
          title: 'Understand Resources',
          icon: '📦',
          text: 'Why there is never quite enough of everything.',
        },
        {
          title: 'Explore Economic Ideas',
          icon: '💡',
          text: 'Scarcity, opportunity cost and supply and demand, in plain words.',
        },
        {
          title: 'Learn How People Work Together',
          icon: '🤝',
          text: 'Producers, consumers, jobs and markets.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Are Economics Classes for Kids?',
      lead: 'Economics is about the choices people make when they cannot have everything. You have ₹100. You want a toy and a book. Which one should you buy?',
      paras: [
        'Here is the whole subject in one question:',
        'There is no single right answer, and that is the point. The child has to think: which do I want more? Which will last longer? Do I need either of them right now? Could I wait and buy both later?',
        'Every one of those questions is an economics question. Economics helps us understand how to choose when resources are limited — and money is only one kind of resource. Time is another. So is space in a school bag.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        { tag: 'Choices', text: 'Deciding between options when you cannot have all of them.' },
        { tag: 'Needs', text: 'Things people need for basic living.' },
        { tag: 'Wants', text: 'Things people would like but can live without.' },
        { tag: 'Money', text: 'What we use to buy and sell things.' },
        { tag: 'Resources', text: 'Everything used to make and do things.' },
        { tag: 'Goods', text: 'Things people buy and use.' },
        { tag: 'Services', text: 'Work someone does for another person.' },
        { tag: 'Buying and selling', text: 'The exchange at the heart of a market.' },
        { tag: 'Saving', text: 'Keeping money now to use later.' },
        { tag: 'Spending', text: 'Using money to get something today.' },
        { tag: 'Work', text: 'How people earn money in the first place.' },
        { tag: 'Community', text: 'How all of this fits together in a town or city.' },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Economics?',
      lead: 'Because children already make economic decisions. They just do not have the words for it yet.',
      items: [
        {
          title: 'Understand everyday choices',
          text: 'Why you cannot buy both, and how to decide.',
        },
        { title: 'Learn basic money concepts', text: 'Price, saving, spending and change.' },
        {
          title: 'Understand needs and wants',
          text: 'A useful distinction for the rest of their lives.',
        },
        { title: 'Learn how buying and selling work', text: 'Both sides of a shop counter.' },
        { title: 'Understand limited resources', text: 'Why sharing and planning matter.' },
        { title: 'Build decision-making skills', text: 'Compare, prioritise, decide, explain.' },
        {
          title: 'Understand simple business ideas',
          text: 'Product, customer, cost and price.',
        },
        {
          title: 'See how communities work',
          text: 'Jobs, shops, services and how they connect.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. This page is educational only and does not provide investment, tax, loan or financial-planning advice.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Economics for Kids',
      lead: 'Eight skills children practise while learning Economics.',
      items: [
        {
          title: 'Money Awareness',
          icon: '💰',
          text: 'Knowing what things cost and where money comes from.',
        },
        {
          title: 'Decision Making',
          icon: '🧠',
          text: 'Choosing between options and living with the choice.',
        },
        {
          title: 'Smart Choices',
          icon: '🛒',
          text: 'Comparing before buying instead of grabbing the first thing.',
        },
        {
          title: 'Resource Awareness',
          icon: '📦',
          text: 'Understanding that most things run out.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Working out how to get the most from what you have.',
        },
        {
          title: 'Basic Thinking Skills',
          icon: '📊',
          text: 'Comparing, ranking and explaining a reason.',
        },
        {
          title: 'Understanding Society',
          icon: '🤝',
          text: 'Seeing how jobs, shops and services depend on each other.',
        },
        {
          title: 'Responsible Use of Resources',
          icon: '🌱',
          text: 'Not wasting things that other people also need.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "The main Economics learning areas. The mix depends on your child's age and school level.",
      items: [
        'Needs and wants',
        'Scarcity',
        'Choices',
        'Opportunity cost',
        'Goods and services',
        'Buying and selling',
        'Money',
        'Saving',
        'Spending',
        'Resources',
        'Producers and consumers',
        'Supply and demand',
        'Markets',
        'Jobs and work',
        'Basic business ideas',
        'Economy and community',
      ],
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Economics Curriculum',
      lead: 'Fifteen learning areas, grouped into a suggested order.',
      label: 'Economics Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Choices',
          title: 'Choices, Needs and Resources',
          bullets: [
            'What is Economics? — the study of choices when resources are limited',
            'Needs and wants — and why the line between them can move',
            'Choices — comparing options and deciding',
            'Scarcity and resources — why there is rarely enough',
          ],
        },
        {
          key: 'stage-2',
          label: 'Money',
          title: 'Money, Saving and Spending',
          bullets: [
            'Money basics — why people use money and what a price is',
            'Saving and spending — planning purchases and setting simple goals',
            'Goods and services — what you can buy, and what someone does for you',
          ],
        },
        {
          key: 'stage-3',
          label: 'Markets',
          title: 'Buying, Selling and Markets',
          bullets: [
            'Buying and selling — buyer, seller, product, price',
            'Consumers and producers — who uses and who makes',
            'Supply and demand basics — how availability can affect price',
            'Markets — shops, local markets and online marketplaces',
          ],
        },
        {
          key: 'stage-4',
          label: 'Work & Community',
          title: 'Work, Business and Community',
          bullets: [
            'Jobs and work — the different ways people earn',
            'Businesses — product, customer, cost and price',
            'Community and economy — how it connects together',
            'Economics projects — shops, posters, budgets and charts',
          ],
        },
      ],
      note: 'Example learning structure. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for the latest details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Needs and wants',
            text: 'The difference, and why it depends on the situation.',
          },
          { title: 'Scarcity', text: 'Why there is rarely enough of everything for everyone.' },
          { title: 'Choices', text: 'How to decide when you cannot have both.' },
          { title: 'Opportunity cost', text: 'What you give up when you choose one thing.' },
          {
            title: 'Goods and services',
            text: 'Things you can hold, and work someone does for you.',
          },
          { title: 'Buying and selling', text: 'Buyer, seller, product and price.' },
          { title: 'Money', text: 'Why people use it, and what a price means.' },
          { title: 'Saving', text: 'Keeping money now to use later.' },
          { title: 'Spending', text: 'Planning what to buy and when.' },
          { title: 'Resources', text: 'Natural, human and made resources.' },
          { title: 'Producers and consumers', text: 'Who makes things and who uses them.' },
          {
            title: 'Supply and demand',
            text: 'How availability and interest can affect price.',
          },
          { title: 'Markets', text: 'Where buyers and sellers meet.' },
          { title: 'Jobs and work', text: 'The different ways people earn an income.' },
          { title: 'Basic business ideas', text: 'Product, customer, cost, price.' },
          {
            title: 'Economy and community',
            text: 'How it all connects in a city like Hyderabad.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Economics Learning by Age',
        lead: 'A general guide to what Economics can look like at different stages.',
        id: 'agewise',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Young Learners',
            list: [
              'Needs and wants',
              'Simple money ideas',
              'Buying and selling',
              'Sharing resources',
              'Simple choices',
            ],
          },
          {
            title: 'Middle Learners',
            list: [
              'Saving and spending',
              'Goods and services',
              'Consumers and producers',
              'Resources',
              'Simple markets',
            ],
          },
          {
            title: 'Older Learners',
            list: [
              'Scarcity',
              'Opportunity cost',
              'Supply and demand',
              'Markets',
              'Business basics',
              'Economic decision-making',
            ],
          },
        ],
        note: 'Actual class grouping may vary. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Interactive',
        title: 'Needs and Wants',
        id: 'needs-wants',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Needs',
            text: 'Things people need for basic living — food, clean water, shelter, clothing, medical care when unwell, and education.',
          },
          {
            title: 'Wants',
            text: 'Things people would like to have but can live without — a new toy, a fancier version of something they already own, a treat.',
          },
        ],
        note: 'Six examples. Decide which each one is, and read why the answer is not always simple.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Choices and Decision Making',
        lead: 'People make choices because they cannot always have everything they want. You have ₹200 and want three things. You must decide what is most important.',
        id: 'choices',
        kind: 'timeline',
        items: [
          { title: 'Compare', text: 'What does each one cost, and what do I get from it?' },
          { title: 'Prioritise', text: 'Which matters most to me right now, and why?' },
          { title: 'Decide', text: 'Choose, knowing the others will have to wait.' },
          {
            title: 'Explain',
            text: 'Say the reason out loud. That is the part that builds the skill.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Scarcity',
        lead: 'There are only five apples, but ten children want one.',
        id: 'scarcity',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Limited', text: 'Money, time, seats on a bus, space in a bag.' },
          { title: 'Unlimited', text: 'The list of things people would like to have.' },
          {
            title: 'So we choose',
            text: 'Scarcity is exactly why economics exists as a subject.',
          },
        ],
        note: 'That is scarcity: there is not enough of something for everyone who wants it. It is not about being poor, and it is not a problem someone forgot to fix. It is simply the normal situation for almost everything. Because wants are usually larger than what is available, somebody has to decide. Should the apples be shared in halves? Given to whoever is hungriest? Divided by lottery? Each answer is a different way of handling scarcity, and children enjoy arguing about which is fairest.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Opportunity Cost for Kids',
        lead: 'If you spend your ₹100 on a toy, you cannot use the same ₹100 to buy a book.',
        id: 'opportunity-cost',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'You choose the toy', text: 'Opportunity cost: the book.' },
          { title: 'You choose the book', text: 'Opportunity cost: the toy.' },
          { title: 'You save the money', text: 'Opportunity cost: having either one today.' },
        ],
        note: 'Children usually understand this instantly, because they have felt it. The toy cost ₹100 in money — but it also cost one book. It works for time too. An hour spent on one game is an hour not spent on another. Once a child has the idea, they start noticing it everywhere, which is the point.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Goods and Services',
        id: 'goods-services',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Goods',
            text: 'Things people can buy and use. You can usually hold them.',
            list: ['A book', 'A pencil', 'A bicycle'],
          },
          {
            title: 'Services',
            text: 'Work that someone provides for another person. You cannot hold a service.',
            list: ['A haircut', 'A bus ride', 'Teaching'],
          },
        ],
        note: 'A quick test children enjoy: can you put it in a bag? If yes, it is probably a good. If no, it is probably a service. Not perfect, but it works most of the time — and the exceptions make a good discussion.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Money Basics',
        lead: 'Money is a tool that makes exchanging things easier.',
        id: 'money',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Why we use money',
            text: 'It is accepted by everyone, so exchange becomes simple.',
          },
          { title: 'Buying', text: 'Giving money and receiving a good or service.' },
          { title: 'Selling', text: 'Giving a good or service and receiving money.' },
          {
            title: 'Prices',
            text: 'How much money something costs. Prices can differ between shops.',
          },
          { title: 'Saving', text: 'Keeping money now so it can be used later.' },
          { title: 'Spending', text: 'Using money now for something you have chosen.' },
        ],
        note: 'Before money, people swapped goods directly. That only works if the other person happens to want exactly what you have. Money solves that: everyone accepts it, so you can sell to one person and buy from another. This section explains what money is and how it is used. It is not investment or financial-planning advice, and we do not discuss or recommend any financial product.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Saving and Spending',
        lead: 'A child saves ₹20 each week for a book.',
        id: 'saving',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Saving', text: 'Keeping some money aside instead of spending all of it.' },
          { title: 'Spending', text: 'Using money for something now.' },
          {
            title: 'Planning purchases',
            text: 'Deciding in advance instead of at the counter.',
          },
          { title: 'Simple goals', text: 'A named thing to save for makes saving much easier.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Buying and Selling',
        lead: 'A shop sells pencils. A child buys a pencil. The shop receives money and the child receives the product.',
        id: 'buying-selling',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Buyer', icon: '👤', text: 'The person who pays and receives the product.' },
          {
            title: 'Seller',
            icon: '🏪',
            text: 'The person or shop that provides it and receives the money.',
          },
          { title: 'Product', icon: '📝', text: 'The good or service being exchanged.' },
          { title: 'Price', icon: '💰', text: 'How much money the buyer gives for it.' },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Consumers and Producers',
        id: 'consumers',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Consumer', text: 'A person who uses or buys goods or services.' },
          {
            title: 'Producer',
            text: 'A person or business that makes goods or provides services.',
          },
        ],
        note: 'Most people are both. A baker produces bread and consumes electricity, flour and a bus ride to work. Children find this idea satisfying once they spot it.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Supply and Demand Basics',
        lead: 'If many children want the same popular toy but only a few are available, the toy may become harder to find.',
        id: 'supply-demand',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Supply', text: 'How much of something is available to buy.' },
          { title: 'Demand', text: 'How much people want it and are able to pay for.' },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Markets',
        lead: 'A market is anywhere buyers and sellers come together.',
        id: 'markets',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Shops',
            icon: '🏪',
            text: 'A fixed place with goods on shelves and a price on each one.',
          },
          {
            title: 'Local markets',
            icon: '🥪',
            text: 'Vegetable and street markets, where prices are sometimes discussed.',
          },
          {
            title: 'Online marketplaces',
            icon: '📱',
            text: 'Buyers and sellers who never meet, connected through a website or an app.',
          },
          {
            title: 'Buyers and sellers',
            text: 'Both sides are needed. One alone is not a market.',
          },
          { title: 'Goods and services', text: 'Markets exist for both.' },
          {
            title: 'Prices and choices',
            text: 'More sellers usually means more choice for the buyer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Jobs and Work',
        lead: 'People earn income by doing work that other people value.',
        id: 'jobs',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Employees',
            text: 'People who work for an organisation and are paid for their work.',
          },
          { title: 'Businesses', text: 'People who run their own shop, service or company.' },
          {
            title: 'Services',
            text: 'Many jobs involve doing something for others rather than making a product.',
          },
          {
            title: 'Skills',
            text: 'What a person can do. Skills are built through learning and practice.',
          },
          { title: 'Work', text: 'The effort itself — physical, mental or both.' },
          {
            title: 'All work matters',
            text: 'A community needs many different kinds of work to function.',
          },
        ],
        note: 'We do not make claims about salaries, earnings or career outcomes for any job. Children learn how work and income connect in general terms, not what any particular career will pay.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Businesses for Kids',
        lead: 'A business makes or provides something, and sells it to customers. A worked example, using fictional numbers:',
        id: 'business',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Product', text: 'What the business sells.' },
          { title: 'Customer', text: 'The person who buys it.' },
          { title: 'Cost', text: 'What the business spends to make and sell it.' },
          { title: 'Price', text: 'What the customer pays.' },
          { title: 'Selling', text: 'Finding customers and completing the exchange.' },
          {
            title: 'Profit',
            text: 'What is left after all costs are paid. It can also be zero or negative.',
          },
        ],
        note: 'But that is not the whole picture, and children should know it. A real business also has other costs: the time spent making the cards, travel to buy materials, cards that do not sell, packaging, and sometimes rent or fees. Once those are counted, the real profit is smaller than ₹30 — sometimes much smaller.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Resources',
        lead: 'Resources are everything used to make goods and provide services.',
        id: 'resources',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Natural resources',
            icon: '🌲',
            text: 'Things that come from nature: water, soil, minerals, sunlight, land.',
          },
          {
            title: 'Human resources',
            icon: '👥',
            text: "People's work, skills, knowledge and effort.",
          },
          {
            title: 'Made resources',
            icon: '🛠',
            text: 'Tools, machines and buildings that people made in order to make other things.',
          },
        ],
        note: 'A simple example: to make bread you need wheat (natural), a baker (human) and an oven (made). Take away any one of the three and there is no bread. That is why economists talk about resources as a set rather than one at a time. Children also learn that most resources are limited, which brings the idea back to scarcity and to using things carefully.',
        band: true,
      },
      {
        eyebrow: 'Everyday Economics',
        title: 'Economics and Everyday Life',
        lead: 'Every one of these is something a child in Hyderabad might do this week.',
        id: 'everyday',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Choosing what to buy',
            icon: '🛒',
            text: 'Two options, one budget, one decision.',
          },
          {
            title: 'Comparing prices',
            icon: '🏷',
            text: 'Same item, two shops, different price. Why?',
          },
          {
            title: 'Saving money',
            icon: '💰',
            text: 'Setting aside a little each week for something specific.',
          },
          {
            title: 'Using resources',
            icon: '📦',
            text: 'Water, electricity, paper — all limited, all shared.',
          },
          {
            title: 'Understanding shops',
            icon: '🏪',
            text: 'How a shop covers its costs and stays open.',
          },
          {
            title: 'Understanding jobs',
            icon: '💼',
            text: 'What the people around them actually do all day.',
          },
          {
            title: 'Planning a small budget',
            icon: '📋',
            text: 'Deciding in advance where the money goes.',
          },
          {
            title: 'Making choices',
            icon: '🧠',
            text: 'And being able to explain them afterwards.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Economics and Mathematics',
        lead: 'Economics uses Maths, but only as much as the question needs.',
        id: 'maths',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Counting money', text: 'Notes, coins and change.' },
          { title: 'Comparing prices', text: 'Which is cheaper, and by how much?' },
          { title: 'Addition', text: 'Adding up a basket before reaching the counter.' },
          { title: 'Subtraction', text: 'Working out change and what is left in a budget.' },
          {
            title: 'Percentages',
            text: 'For older learners: discounts and simple comparisons.',
          },
          { title: 'Simple budgeting', text: 'Planning a fixed amount across several items.' },
        ],
        note: 'If your child finds the number side hard, we keep the arithmetic light and build the concept first. Children who enjoy it often also enjoy Abacus or Vedic Maths, which build calculation confidence.',
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Economics and Problem Solving',
        lead: 'You have ₹300. You need school supplies and also want a toy. How could you plan your money?',
        id: 'problem-solving',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Compare', text: 'What are the options and what do they cost?' },
          { title: 'Prioritise', text: 'Which of these do I actually need?' },
          { title: 'Decide', text: 'Make the call and accept the trade-off.' },
          {
            title: 'Explain the choice',
            text: 'Give the reason. This is where the learning sticks.',
          },
        ],
        note: 'There is more than one sensible answer. Buy the supplies first and see what is left. Buy the cheaper supplies and keep more for the toy. Buy supplies now and save for the toy over three weeks. Each is defensible, and the child has to say why.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Economics and Critical Thinking',
        lead: 'Economics gives children six genuinely useful questions.',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'Why does this cost more? Better materials, more demand, or just a different shop?',
          'Do I need this? Or do I want it right now because I can see it?',
          'What choice is better? Better for what, and for how long?',
          'What happens if something becomes scarce? Who is affected first?',
          'Why do people buy different things? Different needs, budgets and priorities.',
          'How does a shop earn money? And what does it have to pay for?',
        ],
        band: true,
      },
      {
        eyebrow: 'Interactive',
        title: 'Economics Through Role Play',
        lead: 'Pick a role to see what a child practises when they play it.',
        id: 'roleplay',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Shopkeeper',
            text: 'The child sets prices, hands over goods, gives change and keeps track of what has been sold.',
          },
          {
            title: 'Customer',
            text: 'The child has a fixed pretend budget and a list of things they would like.',
          },
          {
            title: 'Business owner',
            text: 'The child decides what to make, what it costs to make, and what to charge.',
          },
          {
            title: 'Consumer',
            text: 'The child evaluates two similar products and decides which is better value.',
          },
          {
            title: 'Resource manager',
            text: 'The child is given limited pretend resources and several people who need them.',
          },
        ],
        note: 'Role play works because it makes an abstract idea physical. A child who has run a pretend shop for twenty minutes understands "cost" far better than a child who has only read the definition.',
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'Economics Quiz',
        lead: 'Ten quick questions, with the answer explained straight away.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'What is a need?',
            opts: [
              'Something people need for basic living',
              'Something you would enjoy having',
              'A type of shop',
              'Money you have saved',
            ],
            a: 'Something people need for basic living',
            why: 'A need is something people need for basic living, such as food, clean water, shelter and clothing.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a want?',
            opts: [
              'Something you cannot live without',
              'Something you would like but can live without',
              'A price in a shop',
              'A type of job',
            ],
            a: 'Something you would like but can live without',
            why: 'A want is something people would like to have but can live without. The line can shift depending on the situation.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a consumer?',
            opts: [
              'A person who makes goods',
              'A person who uses or buys goods or services',
              'A type of market',
              'A kind of money',
            ],
            a: 'A person who uses or buys goods or services',
            why: 'A consumer is a person who uses or buys goods or services. Most people are both consumers and producers.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a producer?',
            opts: [
              'A person or business that makes goods or provides services',
              'Someone who only shops',
              'A price tag',
              'A savings goal',
            ],
            a: 'A person or business that makes goods or provides services',
            why: 'A producer is a person or business that makes goods or provides services — a farmer, a baker, a bus driver, a teacher.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a service?',
            opts: [
              'Something you can hold and keep',
              'Work that someone provides for another person',
              'A kind of coin',
              'A shop building',
            ],
            a: 'Work that someone provides for another person',
            why: 'A service is work someone provides for another person, such as a haircut, a bus ride or teaching. You cannot put a service in a bag.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why do people make choices?',
            opts: [
              'Because resources are limited and wants are not',
              'Because choosing is fun',
              'Because shops tell them to',
              'There is no real reason',
            ],
            a: 'Because resources are limited and wants are not',
            why: 'People make choices because resources such as money and time are limited, while the list of things people would like is much longer.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What does saving mean?',
            opts: [
              'Spending all your money today',
              'Keeping money now so it can be used later',
              'Giving money away',
              'Borrowing money',
            ],
            a: 'Keeping money now so it can be used later',
            why: 'Saving means keeping money now instead of spending it, so it can be used later — often for something specific.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is scarcity?',
            opts: [
              'Having more than enough of everything',
              'Not having enough of something for everyone who wants it',
              'A kind of shop',
              'A way of paying',
            ],
            a: 'Not having enough of something for everyone who wants it',
            why: 'Scarcity means there is not enough of something for everyone who wants it — five apples but ten children who each want one.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a market?',
            opts: [
              'Anywhere buyers and sellers come together',
              'Only a vegetable market',
              'A government office',
              'A type of money',
            ],
            a: 'Anywhere buyers and sellers come together',
            why: 'A market is anywhere buyers and sellers come together — a shop, a local market, or an online marketplace.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is supply and demand?',
            opts: [
              'Two kinds of money',
              'How much is available, and how much people want it',
              'A rule about saving',
              'A type of business',
            ],
            a: 'How much is available, and how much people want it',
            why: 'Supply is how much of something is available. Demand is how much people want it. Together they often affect price, although other things matter too.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Getting started',
        title: 'Economics for Beginners',
        lead: 'Your child does not need to know anything about money to start.',
        id: 'beginners',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Money', text: 'What it is and why people use it.' },
          { title: 'Needs and wants', text: 'The first sorting task, and the most useful one.' },
          { title: 'Choices', text: 'Two options, one budget.' },
          { title: 'Buying and selling', text: 'Practised through a pretend shop.' },
          { title: 'Saving', text: 'Waiting for something you want more.' },
          { title: 'Resources', text: 'Everything runs out eventually, including time.' },
        ],
        note: 'Beginners start with needs and wants, simple choices, and a pretend shop. Words like scarcity and opportunity cost come later — and by then the child already understands the ideas, so the words feel like labels rather than new information.',
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Through Stories',
        lead: 'A story about a child running a small lemonade stand can introduce products, customers, costs and prices.',
        id: 'stories',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Shop stories', text: 'Familiar settings make the ideas obvious.' },
          { title: 'Family examples', text: 'A weekly shop, a bus fare, a birthday budget.' },
          { title: 'Classroom situations', text: 'Sharing limited supplies fairly.' },
          { title: 'Simple money challenges', text: 'Fictional amounts, real thinking.' },
        ],
        note: 'Story examples use fictional money. If a child wants to try a real small activity such as a stall, that should be planned and supervised by a parent, and any real selling must follow local rules.',
        band: true,
      },
      {
        eyebrow: 'Projects',
        title: 'Economics Projects for Kids',
        lead: 'Longer pieces of work that children plan and present themselves.',
        id: 'projects',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Create a simple shop',
            text: 'Pretend goods, pretend prices, pretend money.',
          },
          {
            title: 'Needs-and-wants poster',
            text: 'With at least two examples that could be either.',
          },
          { title: 'Create a weekly budget', text: 'A fictional amount planned across a week.' },
          {
            title: 'Compare prices',
            text: 'Record the same item in three places and explain the difference.',
          },
          {
            title: 'Supply-and-demand chart',
            text: 'Show what happens as availability changes.',
          },
          {
            title: 'Create a business idea',
            text: 'Product, customer, cost and price on one page.',
          },
          {
            title: 'Track fictional savings',
            text: 'A goal, a weekly amount, and how many weeks it takes.',
          },
          {
            title: 'Goods-and-services chart',
            text: 'Sort a week of family spending into the two categories.',
          },
        ],
        note: 'These are general project ideas for parents and children, not confirmed Brolly Juniors coursework. Where money is involved, use fictional amounts or supervise the activity. Contact Brolly Juniors for the latest details.',
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Economics classes for kids in Hyderabad',
          'Economics classes for children in Hyderabad',
          'Economics tuition for kids',
          'Economics learning classes in Hyderabad',
          'Economics tutors for kids in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Economics Class Experience',
      lead: 'One possible flow for an Economics session.',
      items: [
        {
          title: 'Warm-up question',
          text: '"If you had ₹100 today, what would you do with it — and why?"',
        },
        { title: 'Economics concept', text: 'The idea for the day, explained in plain words.' },
        {
          title: 'Simple real-life example',
          text: 'A shop, a bus fare, a snack — something the child knows.',
        },
        { title: 'Visual explanation', text: 'A chart, a picture or coins on the table.' },
        { title: 'Interactive activity', text: 'Sorting, budgeting or a comparison task.' },
        { title: 'Role play', text: 'Shopkeeper and customer, with pretend money.' },
        { title: 'Quick quiz', text: 'Short and low-pressure, to see what has stuck.' },
        { title: 'Recap', text: 'Children say what they learned, in their own words.' },
      ],
      note: 'This is an example structure, not a confirmed Brolly Juniors class format. Contact Brolly Juniors for the latest details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Economics Activities',
      lead: 'Games and tasks used during Economics sessions.',
      items: [
        {
          title: 'Need or Want sorting',
          icon: '📋',
          text: 'Sort examples, then argue about the tricky ones.',
        },
        {
          title: 'Price comparison',
          icon: '🏷',
          text: 'Same item, different prices. Which is better value, and why?',
        },
        {
          title: 'Simple budgeting',
          icon: '💰',
          text: 'A fixed fictional amount and a list of items to plan across.',
        },
        {
          title: 'Classroom shop',
          icon: '🏪',
          text: 'A pretend shop with pretend money and real decisions.',
        },
        {
          title: 'Buyer and seller role play',
          icon: '🤝',
          text: 'Swap sides and see how the transaction feels differently.',
        },
        {
          title: 'Resource matching',
          icon: '📦',
          text: 'Sort resources into natural, human and made.',
        },
        {
          title: 'Supply and demand game',
          icon: '📊',
          text: 'Change how many items are available and watch what happens.',
        },
        {
          title: 'Savings goal activity',
          icon: '🎯',
          text: 'Pick a fictional goal and work out how long saving would take.',
        },
        {
          title: 'Business idea activity',
          icon: '💡',
          text: 'Product, customer, cost, price — on one page.',
        },
        { title: 'Economics quiz', icon: '❓', text: 'Quick questions to check understanding.' },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. Economic terms are explained as they appear.',
        },
        {
          title: 'Activity-based learning',
          icon: '🎯',
          text: 'Sorting, budgeting, role play and comparison tasks.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: 'Shops, buses and snacks — things a child already knows.',
        },
        {
          title: 'Questions and activities',
          icon: '❓',
          text: 'Children are asked what they would choose, and why.',
        },
        {
          title: 'Parent-friendly communication',
          icon: '📞',
          text: 'Ask us anything about content, approach or fit before you decide.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors to check current Economics class formats and availability.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for the latest schedule.'],
      fees: [
        'Economics class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details.',
      ],
      feeTitle: 'Economics class fees',
    },
    trial: {
      title: 'Make Economics Easy and Interesting',
      paras: [
        'Want to see how Economics learning can work for your child? Book a free demo and speak with Brolly Juniors.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp. Please do not include any financial or bank details in this form.',
        'Help your child understand money, choices, resources, buying, selling and everyday economic ideas through simple learning.',
        'Demo availability may vary. Contact Brolly Juniors for the latest details.',
      ],
      includes: [
        'Your child tries an Economics activity at their level',
        'You see how concepts and examples are handled',
        'We discuss where your child is now and what would suit them',
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How to Help Your Child Learn Economics at Home',
      lead: 'You do not need to know any Economics. One question in a shop is enough to start. Next time you go shopping, ask your child: "Do we need this, or do we want it?" Then discuss the answer together — and let them argue the other side if they disagree.',
      items: [
        {
          title: 'Talk about needs and wants',
          text: 'Especially the items that could be either.',
        },
        {
          title: 'Let children compare prices',
          text: 'Two similar items, one question: which and why?',
        },
        {
          title: 'Give simple saving goals',
          text: 'A named thing, a weekly amount, a visible jar.',
        },
        {
          title: 'Discuss buying decisions',
          text: 'Explain your own choices out loud sometimes.',
        },
        { title: 'Explain where products come from', text: 'Farm, factory, transport, shop.' },
        {
          title: 'Talk about goods and services',
          text: "Sort the week's spending into the two groups.",
        },
        { title: 'Play shop games', text: 'Pretend money and a table of items is enough.' },
        { title: 'Ask them to explain', text: 'The reason matters more than the choice.' },
      ],
      cols: 3,
    },
    local: {
      title: 'Economics Classes in Hyderabad',
      paras: [
        "Parents searching for Economics classes for kids in Hyderabad can explore Brolly Juniors, a children's learning centre at Nizampet X Roads.",
        'Hyderabad gives children plenty of everyday economics to look at. Local vegetable markets, supermarkets, small shops, buses and the metro, and online deliveries all appear in the same week — which means children in Hyderabad can see markets, prices and services in several different forms without going far from home.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Economics Classes Near Me?',
      lead: 'If you are searching for Economics classes for kids near me, Economics tuition near me, Economics classes near me or Economics learning classes near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask about current availability. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation — directly useful for money work.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods for comparing prices and totals.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Presenting a business idea or explaining a choice clearly.',
        to: '/junior-skills/public-speaking',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Understanding online marketplaces and checking information properly.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'Includes checking what AI tools tell you — useful for project research.',
        to: '/ai-for-kids',
      },
      {
        icon: '📚',
        title: 'Phonics',
        text: 'Strong reading foundations for younger children.',
        to: '/junior-skills/phonics',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Economics sits alongside several other programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Economics Classes for Kids: FAQs',
    faqs: [
      {
        q: 'What are Economics classes for kids?',
        a: 'Economics classes for kids help children understand how people use money and resources, make choices, buy and sell things, and meet their needs and wants. Children learn through everyday examples, sorting activities, budgeting tasks and role play.',
      },
      {
        q: 'Why should children learn Economics?',
        a: 'Children already make economic decisions — they just do not have the words yet. Economics helps them understand everyday choices, basic money ideas, needs versus wants, and how buying, selling and work fit together in a community. It also builds decision-making skills.',
      },
      {
        q: 'What do kids learn in Economics?',
        a: 'Needs and wants, scarcity, choices, opportunity cost, goods and services, money, saving, spending, buying and selling, resources, producers and consumers, supply and demand basics, markets, jobs and simple business ideas. The exact topics depend on age and school level.',
      },
      {
        q: 'At what age can children start learning Economics?',
        a: 'Children can start from around 6 years with needs and wants, simple money ideas and a pretend shop. Scarcity and opportunity cost come later. Readiness and school level matter more than age. Contact Brolly Juniors for the latest details.',
      },
      {
        q: 'Do Economics classes teach money basics?',
        a: 'Yes — why people use money, what a price is, and what saving and spending mean, all using fictional amounts. This is educational content only. We do not give investment or financial-planning advice and we do not discuss any financial product.',
      },
      {
        q: 'Do children learn about needs and wants?',
        a: 'Yes, and it is usually the first topic. Children also learn that the line between the two can shift depending on the situation and the person, so they are taught to think about context rather than memorise a fixed list.',
      },
      {
        q: 'Do children learn about buying and selling?',
        a: 'Yes. Children learn the four parts of a transaction — buyer, seller, product and price — and practise both sides through pretend shop role play with fictional money.',
      },
      {
        q: 'Do Economics classes include activities?',
        a: 'Yes. Sessions use need-or-want sorting, price comparison, simple budgeting, a classroom shop, buyer and seller role play, resource matching, supply and demand games and savings goal tasks.',
      },
      {
        q: 'Can beginners learn Economics?',
        a: 'Yes. Beginners start with needs and wants, simple choices and a pretend shop. Technical words come later, by which point the child already understands the idea and the word is just a label.',
      },
      {
        q: 'Is this page or the class giving financial advice?',
        a: 'No. This is general education about economic ideas. We do not provide investment, tax, loan or financial-planning advice, we do not recommend stocks, cryptocurrencies or any financial product, we make no claims about profits, and we never ask children for financial information. All money examples are fictional.',
      },
      {
        q: 'Are Economics classes available in Hyderabad?',
        a: "Brolly Juniors is a children's learning centre at Nizampet X Roads, Hyderabad. For current Economics class availability, formats and schedules, please contact Brolly Juniors on 7036044555. We do not publish availability that may change.",
      },
      {
        q: 'Are Economics classes available near me?',
        a: 'Brolly Juniors operates from one centre at Nizampet X Roads, convenient for families in Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet. Call 7036044555 to check current availability and formats.',
      },
      {
        q: 'How much do Economics classes cost?',
        a: 'Economics class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for the latest schedule on 7036044555.',
      },
      {
        q: 'Is a free demo available?',
        a: 'You can request a free demo using the form on this page, or by calling 7036044555. Demo availability may vary, so please contact Brolly Juniors for the latest details before making travel plans.',
      },
      {
        q: 'How can I contact Brolly Juniors?',
        a: 'Call 7036044555, message on WhatsApp, email brollyjuniors.in@gmail.com, or fill in the enquiry form on this page. The centre is at Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad, Telangana 500072.',
      },
    ],
    quickAnswersTitle: 'Economics in Short',
    quickAnswers: [
      {
        q: 'What is Economics for kids?',
        a: 'Economics is about the choices people make when they cannot have everything. It covers needs, wants, money, resources, buying and selling.',
      },
      {
        q: 'Why is Economics important for children?',
        a: 'Children already make choices about money and time. Economics gives them a method for making those choices and explaining them.',
      },
      {
        q: 'What does Economics teach?',
        a: 'Needs and wants, scarcity, opportunity cost, goods and services, money, markets, producers and consumers, jobs and simple business ideas.',
      },
      {
        q: 'What are needs and wants?',
        a: 'Needs are things people need for basic living. Wants are things people would like but can live without. The line between them can depend on the situation.',
      },
      {
        q: 'What is scarcity for kids?',
        a: 'Scarcity means there is not enough of something for everyone who wants it — five apples and ten children.',
      },
      {
        q: 'What is a consumer?',
        a: 'A consumer is a person who uses or buys goods or services.',
      },
      {
        q: 'What is a producer?',
        a: 'A producer is a person or business that makes goods or provides services.',
      },
      {
        q: 'What is supply and demand?',
        a: 'Supply is how much of something is available. Demand is how much people want it. Together they often affect the price, though other things matter too.',
      },
      {
        q: 'Why do people make economic choices?',
        a: 'Because resources such as money and time are limited, while the list of things people would like is not.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a free demo.',
      },
      {
        q: '"Where can I find Economics classes for kids in Hyderabad?"',
        a: "Brolly Juniors is a children's learning centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to ask about current Economics class availability.",
      },
      {
        q: '"What do kids learn in Economics?"',
        a: 'Needs and wants, choices, scarcity, opportunity cost, money, saving and spending, buying and selling, markets, jobs and simple business ideas.',
      },
      {
        q: '"Why should children learn Economics?"',
        a: 'Because it gives them a method for making choices when they cannot have everything — a skill they use every week, with money and with time.',
      },
      {
        q: '"How can my child learn basic Economics?"',
        a: 'Start in a shop. Ask "do we need this or want it?", let them compare two prices, and give them a small fictional budget to plan.',
      },
      {
        q: '"Are there Economics classes near me?"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555 to check availability.',
      },
      {
        q: '"Is this about investing?"',
        a: 'No. This is general education about economic ideas. We do not give investment advice or discuss financial products, and all money examples are fictional.',
      },
    ],
  },

  /* ==================================================================
     Civics Tuition — /tuitions/civics
     ================================================================== */
  '/tuitions/civics': {
    h1: 'Civics tuition in Hyderabad that connects the textbook to this week’s news.',
    lead: 'The Constitution, the three branches, rights and duties and how elections run — taught with current examples so the definitions have something to stick to.',
    heroPills: ['Community', 'Rules and laws', 'Government', 'Local government'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 6–10', 'Batches of eight'],
    hero: {
      title: 'What are Civics classes for kids?',
      paras: [
        'Help children understand communities, rules, government, rights, responsibilities and how people work together.',
        'Civics classes for kids help children understand how communities and government work, along with basic rights, responsibilities, rules and good citizenship.',
      ],
    },
    facts: [
      { strong: 'Classes 6–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Current examples', span: 'Every chapter' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Civics Learning Looks Like',
      lead: 'Six things children do in a Civics session at Brolly Juniors.',
      items: [
        {
          title: 'Learn About Communities',
          icon: '🏫',
          text: 'Who is in a community, and how people depend on each other.',
        },
        {
          title: 'Understand Government',
          icon: '🏛',
          text: 'What government does, and the three levels in India.',
        },
        {
          title: 'Learn Rights & Duties',
          icon: '⚖',
          text: 'What children are entitled to, and what they owe others.',
        },
        {
          title: 'Build Civic Awareness',
          icon: '🤝',
          text: 'Noticing how a school, street or city actually works.',
        },
        {
          title: 'Share Ideas Respectfully',
          icon: '🗣',
          text: 'Disagreeing without being unkind is a Civics skill.',
        },
        {
          title: 'Become Responsible Citizens',
          icon: '🌍',
          text: 'Small actions that make a shared space better for everyone.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Are Civics Classes for Kids?',
      lead: 'Civics is the study of how people live together in a community and how they are governed.',
      paras: [
        'Here is a question every child has asked: "Why do we have rules at school?"',
        'Imagine a school with no rules at all. Everyone talks at once, so nobody can hear the lesson. Nobody queues, so lunch takes an hour. Nobody looks after the playground, so it becomes unusable. The rules are not there to spoil the fun. They are there so that a large number of people can share one place fairly and safely.',
        'That single idea — rules help people live and work together — is the door into the whole subject. A city works the same way as a classroom, just with more people and more rules.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        { tag: 'People', text: 'Everyone who lives, works or studies in a place.' },
        { tag: 'Communities', text: 'Groups of people who share a place or a purpose.' },
        { tag: 'Rules', text: 'Agreements that help a shared space work.' },
        { tag: 'Government', text: 'The system that organises public matters.' },
        { tag: 'Rights', text: 'Things every person should be able to expect.' },
        { tag: 'Responsibilities', text: 'Things we owe to other people.' },
        { tag: 'Public services', text: 'Services provided for everyone to use.' },
        { tag: 'Citizenship', text: 'Belonging to a country, and taking part in it.' },
        { tag: 'Working together', text: 'How groups make decisions and solve problems.' },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Civics?',
      lead: 'Because a child who understands why rules exist is far more likely to follow them thoughtfully — and to question the ones that are unfair.',
      items: [
        {
          title: 'Understand their community',
          text: 'Who is in it, and how it holds together.',
        },
        {
          title: 'Learn why rules exist',
          text: 'Not "because I said so", but a reason a child can follow.',
        },
        { title: 'Understand basic rights', text: 'What every child should be able to expect.' },
        {
          title: 'Learn responsibilities',
          text: 'Rights and responsibilities always travel together.',
        },
        {
          title: 'Understand how government helps',
          text: 'Roads, schools, water and safety all come from somewhere.',
        },
        { title: 'Build awareness', text: 'Noticing the systems that are usually invisible.' },
        { title: 'Learn respectful discussion', text: 'How to disagree without falling out.' },
        {
          title: 'Understand working together',
          text: 'How groups reach a decision everyone can accept.',
        },
        {
          title: 'Become thoughtful citizens',
          text: 'Taking responsibility for shared spaces and shared decisions.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, clear explanations and respectful discussion.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Civics for Kids',
      lead: 'Eight skills children practise while learning Civics.',
      items: [
        {
          title: 'Community Awareness',
          icon: '🏫',
          text: 'Seeing the people and services that keep a place working.',
        },
        {
          title: 'Critical Thinking',
          icon: '🧠',
          text: 'Asking whether a rule is fair, and why.',
        },
        {
          title: 'Teamwork',
          icon: '🤝',
          text: 'Reaching a decision a whole group can live with.',
        },
        {
          title: 'Understanding Rights',
          icon: '⚖',
          text: 'Knowing what everyone should be able to expect.',
        },
        {
          title: 'Social Awareness',
          icon: '📚',
          text: 'Noticing how decisions affect different people differently.',
        },
        {
          title: 'Communication',
          icon: '🗣',
          text: 'Explaining a view clearly and listening to another one.',
        },
        {
          title: 'Civic Responsibility',
          icon: '🌍',
          text: 'Taking care of things that belong to everyone.',
        },
        { title: 'Curiosity', icon: '💡', text: 'Wanting to know who decides, and how.' },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "The main Civics learning areas. The mix depends on your child's age and school level.",
      items: [
        'Community',
        'Rules and laws',
        'Government',
        'Local government',
        'State government',
        'Central government',
        'Elections',
        'Rights',
        'Responsibilities',
        'Public services',
        'Diversity',
        'Equality',
        'Citizenship',
        'Community responsibility',
        'Discussion',
        'Projects',
      ],
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Civics Curriculum',
      lead: 'Fifteen learning areas, grouped into a suggested order.',
      label: 'Civics Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Community',
          title: 'Our Community and Its Rules',
          bullets: [
            'Our community — who is in it and how it works',
            'Rules and responsibilities — why rules exist and who they protect',
            'Public services — services provided for everyone to use',
          ],
        },
        {
          key: 'stage-2',
          label: 'Government',
          title: 'Government and Democracy',
          bullets: [
            'What is government? — the system that organises public matters',
            'Local, state and central government — the three levels in India',
            'Democracy basics — how people take part in decisions',
            'Elections and voting basics — how representatives are chosen',
          ],
        },
        {
          key: 'stage-3',
          label: 'Rights & Duties',
          title: 'Rights, Duties and Fairness',
          bullets: [
            'Rights and duties — the two sides of the same idea',
            'Equality and respect — treating people fairly',
            'Diversity — the many languages and cultures in India',
          ],
        },
        {
          key: 'stage-4',
          label: 'Citizenship',
          title: 'Good Citizenship and Projects',
          bullets: [
            'Good citizenship — small actions that help everyone',
            'Community responsibility — looking after shared spaces',
            'Civics projects — models, maps, posters and a mock election',
          ],
        },
      ],
      note: 'Example learning structure. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for the latest details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Community',
            text: 'The people who share a place, and how they depend on each other.',
          },
          {
            title: 'Rules and laws',
            text: 'Why they exist, and the difference between the two.',
          },
          { title: 'Government', text: 'What it is and what it does.' },
          { title: 'Local government', text: 'The level closest to daily life.' },
          {
            title: 'State government',
            text: 'Decisions taken for a whole state, such as Telangana.',
          },
          {
            title: 'Central government',
            text: 'Also called the Union Government, for the whole country.',
          },
          {
            title: 'Elections',
            text: 'How representatives are chosen, at an age-appropriate level.',
          },
          { title: 'Rights', text: 'What every person should be able to expect.' },
          { title: 'Responsibilities', text: 'What we owe to the people around us.' },
          { title: 'Public services', text: 'Services provided for everyone to use.' },
          { title: 'Diversity', text: 'The many languages, cultures and traditions in India.' },
          { title: 'Equality', text: 'Treating people fairly, whatever their differences.' },
          { title: 'Citizenship', text: 'Belonging to a country and taking part in it.' },
          {
            title: 'Community responsibility',
            text: 'Looking after shared spaces and the environment.',
          },
          {
            title: 'Discussion',
            text: 'Listening, disagreeing politely and reaching a shared decision.',
          },
          { title: 'Projects', text: 'Maps, posters, charts and a mock class election.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Civics Learning by Age',
        lead: 'A general guide to what Civics can look like at different stages.',
        id: 'agewise',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Young Learners',
            list: [
              'Family and school rules',
              'Community helpers',
              'Sharing and cooperation',
              'Simple responsibilities',
            ],
          },
          {
            title: 'Middle Learners',
            list: [
              'Communities',
              'Government basics',
              'Rights and responsibilities',
              'Public services',
              'Rules and laws',
            ],
          },
          {
            title: 'Older Learners',
            list: [
              'Democracy basics',
              'Government structure',
              'Elections',
              'Citizenship',
              'Equality',
              'Civic responsibilities',
            ],
          },
        ],
        note: 'Actual class grouping may vary. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Community and Society',
        lead: 'A community is a group of people who share a place or something important to them.',
        id: 'community',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Your school',
            text: 'Students, teachers, staff and parents, all sharing one place.',
          },
          {
            title: 'Your apartment',
            text: 'Many families sharing a building, a lift and a gate.',
          },
          {
            title: 'Your neighbourhood',
            text: 'Shops, homes, streets and the people who use them.',
          },
          {
            title: 'Your city',
            text: 'Hyderabad: millions of people sharing roads, water and services.',
          },
        ],
        note: 'Every community depends on people doing their part. A teacher teaches. A doctor treats. A sanitation worker keeps streets clean. A shopkeeper sells what people need. A bus driver gets people to work. Nobody does all of it alone, and each of those jobs matters. That is why cooperation matters: a community only works when enough people do their part and look after what is shared.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Rules and Responsibilities',
        lead: 'Rules are agreements that help people share a place safely and fairly.',
        id: 'rules',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'School rules',
            text: 'Line up, listen, put things back. They make a busy building workable.',
          },
          {
            title: 'Road rules',
            text: 'Stop at red, wear a helmet, use the crossing. These ones keep people safe.',
          },
          {
            title: 'Public place rules',
            text: 'Queue, keep it clean, keep the noise reasonable.',
          },
          {
            title: 'Community rules',
            text: 'Park in your own spot, use the lift carefully, respect quiet hours.',
          },
        ],
        note: 'Children also learn that rules can be discussed. If a rule seems unfair, the right response is to ask why it exists and suggest a better one — not to ignore it quietly. That is a Civics skill too.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Rights and Responsibilities',
        lead: 'A right is something every person should be able to expect. A responsibility is something we owe to others. They always go together.',
        id: 'rights',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Rights children learn about',
            list: [
              'Education — in India, the Constitution provides for free and compulsory education for children aged six to fourteen',
              'Safety — being protected from harm',
              'Fair treatment — not being treated unfairly because of who you are',
              'Expressing ideas — being able to share a view respectfully',
            ],
          },
          {
            title: 'Responsibilities that go with them',
            list: [
              'Respect others, including those who disagree with you',
              'Follow reasonable rules',
              'Take care of shared spaces',
              'Help others when you can',
              'Listen properly before answering',
              'Be honest',
              'Care for the environment',
            ],
          },
        ],
        note: 'The pairing is the important part. If a child has a right to be listened to, then every other child has it too — which makes listening a responsibility. Children work this out for themselves surprisingly quickly once it is pointed out. This page explains ideas about rights in simple, general terms for children. It is not legal advice. For any question about a specific legal situation, please consult a qualified lawyer.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Government Basics',
        lead: 'Government is a system that helps organise public services, make and apply laws, and manage many things that affect communities.',
        id: 'government',
        kind: 'split',
        paras: [
          'A useful way to explain it to a child: some things are too big for one family to do alone. One family cannot build a road, run a hospital or supply water to a whole city. Government is how a large group of people organises those things together.',
          'Works at the level of a city, town or village. In cities this may be a municipal corporation or municipality; in rural areas, panchayat bodies.',
          'It deals with many day-to-day local matters.',
          'Works for a whole state. For children in Hyderabad, that is the Government of Telangana.',
          'States handle many subjects including a large role in education, health and local infrastructure.',
          'Also called the Union Government. It works for the whole of India.',
          'It handles national-level matters such as defence and national institutions.',
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Local Government and Everyday Life',
        lead: 'Local government is the level a child is most likely to notice, because it touches the street outside.',
        id: 'local',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Roads', text: 'Local streets and footpaths often come under local bodies.' },
          { title: 'Waste management', text: 'Collecting and disposing of household waste.' },
          {
            title: 'Water services',
            text: 'Supplying water and managing drainage in many areas.',
          },
          {
            title: 'Local facilities',
            text: 'Parks, community halls, street lighting and local markets.',
          },
        ],
        note: 'Local government structures differ across India, and arrangements can vary between cities, towns and villages. Not every local body handles every service listed here. Where a service sits can also change over time.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'State and Central Government',
        id: 'state-central',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'State government',
            text: 'A state government works for one state. It plays a large part in areas children encounter directly:',
            list: [
              'Education and schools',
              'Public health services',
              'State roads and transport',
              'Many other public services',
            ],
          },
          {
            title: 'Central or Union Government',
            text: 'The Union Government works for the whole country. Its role includes:',
            list: [
              'National-level policies',
              'National institutions',
              'Defence',
              'Matters handled at the national level',
            ],
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Democracy for Kids',
        lead: 'Democracy is a system in which people take part in choosing representatives and in public decision-making through established democratic processes.',
        id: 'democracy',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Everyone gets a say', text: "Each eligible person's vote counts the same." },
          {
            title: 'Representatives',
            text: 'Because millions cannot all decide every question, people choose others to represent them.',
          },
          {
            title: 'Accepting outcomes',
            text: 'Disagreeing with a result and still respecting the process is part of it.',
          },
        ],
        note: 'The classroom version children understand immediately: if a class must choose one game to play, three things can happen. One person decides for everyone. Nobody decides and nothing happens. Or the class votes, and the choice with the most support is played. The third one is closest to how a democracy works. Everyone gets a say, a decision is reached, and people who preferred something else still accept the outcome — while remaining free to argue for their choice next time.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Elections and Voting Basics',
        lead: 'An election is how people choose their representatives.',
        id: 'elections',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'What an election is',
            text: 'People vote for the candidate they want to represent them. Votes are counted, and the result decides who takes the position.',
          },
          {
            title: 'Why people vote',
            text: 'Voting is how an individual takes part in a decision that affects everyone.',
          },
          {
            title: 'What a representative is',
            text: 'Someone chosen to speak and decide on behalf of the people who elected them.',
          },
          {
            title: 'Why informed participation matters',
            text: 'A decision made after understanding the choices is a better decision than one made without.',
          },
          {
            title: 'Two facts children often ask about',
            list: [
              'In India, citizens can vote from the age of 18.',
              'Elections in India are conducted by the Election Commission of India.',
            ],
          },
          {
            title: 'How we teach elections',
            text: 'Through a mock class election with imaginary choices — which game to play, which project to do — so children experience voting, counting and accepting a result without any real-world political content.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Public Services',
        lead: 'Public services are services provided for everyone in a community to use.',
        id: 'services',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Schools',
            icon: '🏫',
            text: 'Government schools provide education for children in a community.',
          },
          {
            title: 'Healthcare services',
            icon: '🏥',
            text: 'Public hospitals and health centres.',
          },
          {
            title: 'Roads',
            icon: '🛣',
            text: 'Streets, footpaths and highways that everyone uses.',
          },
          { title: 'Public transport', icon: '🚌', text: 'Buses, trains and the metro.' },
          {
            title: 'Water and sanitation',
            icon: '💧',
            text: 'Water supply, drainage and waste collection.',
          },
          {
            title: 'Emergency services',
            icon: '🚨',
            text: 'Police, fire and ambulance services.',
          },
        ],
        note: 'Public services may include the examples above, and the exact list and who provides them can vary from place to place. Contact Brolly Juniors for the latest details on what is covered in class.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Equality and Respect',
        lead: 'Four ideas, taught plainly and without exception.',
        id: 'equality',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Everyone deserves respect',
            text: 'This applies to every person, with no conditions attached.',
          },
          {
            title: 'People can be different',
            text: 'In language, faith, food, ability, background and much else.',
          },
          {
            title: 'Differences are not a reason to be unfair',
            text: 'Treating someone worse because they are different is not acceptable.',
          },
          {
            title: 'Respect makes communities work',
            text: 'A shared place only works when people treat each other well.',
          },
        ],
        note: "Children practise this in discussion. When two children disagree, the exercise is not to decide who wins — it is to state the other person's view fairly before giving your own. That is harder than it sounds, and it is one of the most useful things Civics teaches.",
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Diversity in India',
        lead: 'India has an enormous variety of languages, cultures, food, festivals, traditions and regions.',
        id: 'diversity',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Languages',
            text: 'Many languages are spoken across the country. In Telangana, children may hear Telugu, Urdu, Hindi and English in a single day.',
          },
          {
            title: 'Cultures',
            text: 'Different regions have their own art, music, dance and dress.',
          },
          {
            title: 'Food',
            text: 'What is cooked depends on climate, crops and local tradition.',
          },
          {
            title: 'Festivals',
            text: 'Many festivals are celebrated across the country, at different times and in different ways.',
          },
          {
            title: 'Traditions',
            text: 'Practices passed down within families and communities.',
          },
          {
            title: 'Regions',
            text: 'Coastal, desert, mountain and plateau regions all shape how people live.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Good Citizenship',
        lead: 'Good citizenship is not a grand thing. It is a set of small, ordinary actions.',
        id: 'citizenship',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Follow rules', text: 'Especially the ones that keep other people safe.' },
          { title: 'Respect others', text: 'Including people you disagree with.' },
          { title: 'Keep shared spaces clean', text: 'Parks, footpaths, classrooms, lifts.' },
          { title: 'Help the community', text: 'Offer help before being asked.' },
          { title: 'Protect nature', text: 'Save water, avoid litter, look after trees.' },
          { title: 'Listen to others', text: 'Properly, before deciding what you think.' },
          {
            title: 'Share ideas respectfully',
            text: 'Say what you think without putting anyone down.',
          },
          { title: 'Take responsibility', text: 'Own your actions, including the mistakes.' },
        ],
        band: true,
      },
      {
        eyebrow: 'Try it now',
        title: 'Who Helps Our Community?',
        lead: 'Five everyday situations. Which kind of service or institution would you turn to first?',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'What is a community?',
            opts: [
              'A type of building',
              'A group of people who share a place or something important',
              'A government office',
              'A kind of rule',
            ],
            a: 'A group of people who share a place or something important',
            why: 'A community is a group of people who share a place or something important to them — a school, a street, an apartment block or a city.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why do we have rules?',
            opts: [
              "To spoil everyone's fun",
              'To help people share a place safely and fairly',
              'Because adults enjoy making them',
              'So that only some people benefit',
            ],
            a: 'To help people share a place safely and fairly',
            why: 'Rules are agreements that help people share a place safely and fairly. Without them, a shared space stops working for everyone.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a responsibility?',
            opts: [
              'Something you are expected to do because others depend on it',
              'Something you get for free',
              'A type of election',
              'A government building',
            ],
            a: 'Something you are expected to do because others depend on it',
            why: 'A responsibility is something we are expected to do because other people depend on it. Rights and responsibilities always go together.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What does democracy mean?',
            opts: [
              'One person decides everything',
              'People take part in choosing representatives and in public decisions',
              'Nobody makes any decisions',
              'Only adults over 60 may decide',
            ],
            a: 'People take part in choosing representatives and in public decisions',
            why: 'Democracy is a system in which people take part in choosing representatives and in public decision-making through established democratic processes.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Who are community helpers?',
            opts: [
              'Only police officers',
              'Only teachers',
              'People whose work keeps a community running',
              'Only elected representatives',
            ],
            a: 'People whose work keeps a community running',
            why: 'Community helpers are all the people whose work keeps a community running — teachers, doctors, sanitation workers, bus drivers, shopkeepers, police officers and many more.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a public service?',
            opts: [
              'A service provided for everyone in a community to use',
              'A private shop',
              'A family rule',
              'A school test',
            ],
            a: 'A service provided for everyone in a community to use',
            why: 'Public services are provided for everyone in a community to use. They may include schools, hospitals, roads, public transport, water and sanitation, and emergency services.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why is respecting others important?',
            opts: [
              'It is not important',
              'Because shared places only work when people treat each other well',
              'Only to avoid punishment',
              'Only for people who agree with you',
            ],
            a: 'Because shared places only work when people treat each other well',
            why: 'Everyone deserves respect. People can be different, and those differences are not a reason to treat anyone unfairly. Communities work better when people respect one another.',
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'Civics Quiz',
        lead: 'Seven quick questions, with the answer explained straight away.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 7', 'Question'],
        band: true,
      },
      {
        eyebrow: 'Getting started',
        title: 'Civics for Beginners',
        lead: 'Your child does not need to know anything about government to start.',
        id: 'beginners',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Family and community', text: 'The first groups any child belongs to.' },
          { title: 'Rules', text: 'The ones they already follow, and why.' },
          { title: 'Responsibilities', text: 'Small jobs at home and at school.' },
          { title: 'Community helpers', text: 'The people who keep a place working.' },
          { title: 'Government basics', text: 'Introduced once community makes sense.' },
          {
            title: 'Rights and respect',
            text: 'Fairness is something children feel strongly about already.',
          },
        ],
        note: 'Beginners start with what they already live inside: their family, their class, the rules they already follow. Government comes much later, and by then it feels like a bigger version of something familiar rather than a new subject.',
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Through Stories',
        lead: 'A story about children creating classroom rules can introduce fairness, responsibility and cooperation.',
        id: 'stories',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'School stories', text: 'Familiar settings make the ideas obvious.' },
          {
            title: 'Community stories',
            text: 'A street, a park, a market, a problem to solve.',
          },
          { title: 'Everyday situations', text: 'Queueing, sharing, waiting your turn.' },
          {
            title: 'Role play',
            text: 'Arguing the other side is the fastest way to understand it.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Everyday Civics',
        title: 'Civics and Real Life',
        lead: 'Civics shows up whenever a child shares a space with other people.',
        id: 'real-life',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Following traffic rules',
            icon: '🚦',
            text: 'Helmets, crossings and signals keep everyone safer.',
          },
          {
            title: 'Keeping public places clean',
            icon: '🗑',
            text: 'A park belongs to everyone, including the next person to use it.',
          },
          {
            title: 'Respecting others',
            icon: '🤝',
            text: 'In queues, in lifts, on buses, at school.',
          },
          {
            title: 'Community helpers',
            icon: '👷',
            text: 'Knowing who does what, and thanking them.',
          },
          {
            title: 'Knowing why rules exist',
            icon: '❓',
            text: 'Understanding beats obeying blindly.',
          },
          {
            title: 'Solving small problems',
            icon: '🧩',
            text: 'A blocked path, a broken swing, a disagreement over a game.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Civics and Critical Thinking',
        lead: 'Civics is a thinking subject, not a memorising subject.',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'Why do we need this rule? What would happen without it?',
          'Who helps our community? And who do we not usually notice?',
          'What makes a rule fair? Fair to whom, and decided by whom?',
          'How can people solve disagreements? Without anyone being humiliated.',
          'How can we help our neighbourhood? Starting with something small and real.',
        ],
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Civics and Communication',
        lead: 'Much of Civics happens in discussion, so discussion itself becomes the skill.',
        id: 'communication',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Listening', text: 'Hearing the whole point before starting to answer.' },
          { title: 'Sharing ideas', text: 'Saying what you think clearly and briefly.' },
          {
            title: 'Respectful discussion',
            text: 'Disagreeing with the idea, never attacking the person.',
          },
          {
            title: 'Asking questions',
            text: '"What do you mean by that?" is a good question, not a challenge.',
          },
          { title: 'Explaining opinions', text: 'Giving a reason, not just a position.' },
          {
            title: 'Understanding other viewpoints',
            text: "Stating someone else's view fairly, even when you disagree.",
          },
        ],
        note: 'Children who enjoy this side of Civics often also enjoy Public Speaking, where the same skills are practised in front of an audience.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Civics and Problem Solving',
        lead: 'Community problems make excellent practice, because they are real and they have no single obvious answer.',
        id: 'problem-solving',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Example problems',
            list: [
              'Litter in a park',
              'Noise in a shared space',
              'Sharing classroom materials',
              'Keeping public places clean',
            ],
          },
          {
            title: 'Four questions we work through',
            list: [
              'What exactly is the problem?',
              'Who is affected by it?',
              'What are the possible solutions?',
              'What responsible action could we actually take?',
            ],
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Projects',
        title: 'Civics Projects for Kids',
        lead: 'Longer pieces of work that children plan and present themselves.',
        id: 'projects',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Build a model community',
            text: 'Homes, school, hospital, park and roads — then explain the choices.',
          },
          {
            title: 'Make a community map',
            text: 'Mark the shared spaces and public services near home.',
          },
          {
            title: 'Create a classroom constitution',
            text: 'Rules the class writes, agrees and signs together.',
          },
          {
            title: 'Rights and responsibilities poster',
            text: 'Each right paired with the responsibility beside it.',
          },
          {
            title: 'Public service chart',
            text: 'Which services a family uses in one ordinary week.',
          },
          {
            title: 'Simple class election',
            text: 'A mock election with imaginary, non-political choices.',
          },
          {
            title: 'Good Citizen project',
            text: 'One civic action, tried for a week, then reported on.',
          },
          {
            title: 'Research a local service',
            text: 'Find out how one local service works and present it.',
          },
        ],
        note: 'These are general project ideas for parents and children, not confirmed Brolly Juniors coursework. Contact Brolly Juniors for the latest details.',
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Civics classes for kids in Hyderabad',
          'Civics classes for children in Hyderabad',
          'Civics tuition for kids',
          'Civics learning classes in Hyderabad',
          'Civics tutors for kids in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Civics Class Experience',
      lead: 'One possible flow for a Civics session.',
      items: [
        {
          title: 'Warm-up question',
          text: '"Name one rule at your school and tell me who it protects."',
        },
        { title: 'Civics concept', text: 'The idea for the day, explained in plain words.' },
        {
          title: 'Simple real-life example',
          text: "Something from the child's own school, street or city.",
        },
        { title: 'Visual explanation', text: 'A diagram, a map or a chart of who does what.' },
        {
          title: 'Interactive activity',
          text: 'Matching, sorting, a scenario or a mock election.',
        },
        {
          title: 'Discussion',
          text: 'Children share views and practise disagreeing respectfully.',
        },
        { title: 'Quick quiz', text: 'Short and low-pressure, to see what has stuck.' },
        { title: 'Recap', text: 'Children say what they learned, in their own words.' },
      ],
      note: 'This is an example structure, not a confirmed Brolly Juniors class format. Contact Brolly Juniors for the latest details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Civics Activities',
      lead: 'Games and tasks used during Civics sessions.',
      items: [
        {
          title: 'Make classroom rules',
          icon: '📝',
          text: 'The class writes its own rules and explains the reason for each one.',
        },
        {
          title: 'Community helper matching',
          icon: '🃏',
          text: 'Match each helper to the work they do.',
        },
        {
          title: 'Rights and responsibilities matching',
          icon: '⚖',
          text: 'Pair each right with the responsibility that goes with it.',
        },
        {
          title: 'Build a community map',
          icon: '🗺',
          text: 'Draw your area and mark the shared places on it.',
        },
        {
          title: 'Identify public services',
          icon: '🛠',
          text: 'Spot the public services on the map you just drew.',
        },
        {
          title: 'Government-level matching',
          icon: '🏛',
          text: 'Sort examples into local, state and central — and discuss the ones that fit more than one.',
        },
        {
          title: 'Civic responsibility quiz',
          icon: '🎯',
          text: 'Quick questions to check understanding.',
        },
        {
          title: 'Good Citizen poster',
          icon: '🎨',
          text: 'Design a poster showing one civic action and why it matters.',
        },
        {
          title: 'Community problem solving',
          icon: '🧩',
          text: 'Take a real local problem and work through possible responses.',
        },
        {
          title: 'Mock classroom election',
          icon: '🗳',
          text: 'Nominate, campaign politely, vote and count — with imaginary, non-political choices.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. Civics terms are explained as they appear.',
        },
        {
          title: 'Activity-based learning',
          icon: '🎯',
          text: 'Matching, mapping, scenarios and mock elections, not only listening.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: "Starting with the child's own school, street and city.",
        },
        {
          title: 'Questions and discussion',
          icon: '🗣',
          text: 'Children are asked what they think, and why.',
        },
        {
          title: 'Parent-friendly communication',
          icon: '📞',
          text: 'Ask us anything about content, approach or fit before you decide.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors to check current Civics class formats and availability.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for the latest schedule.'],
      fees: [
        'Civics class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details.',
      ],
      feeTitle: 'Civics class fees',
    },
    trial: {
      title: 'Make Civics Easy and Interesting',
      paras: [
        'Want to see how Civics learning can work for your child? Book a free demo and speak with Brolly Juniors.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'Help your child understand communities, rules, government, rights and responsibilities through simple Civics learning.',
        'Demo availability may vary. Contact Brolly Juniors for the latest details.',
      ],
      includes: [
        'Your child tries a Civics activity at their level',
        'You see how concepts and discussion are handled',
        'We discuss where your child is now and what would suit them',
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How to Help Your Child Learn Civics at Home',
      lead: 'You do not need to know any Civics. One question at dinner is enough to start. Ask your child: "What is one rule that helps your school work better?" Then discuss the answer together — who does that rule protect, and what would happen without it?',
      items: [
        {
          title: 'Talk about community rules',
          text: 'Lift rules, park rules, road rules. Ask why each one exists.',
        },
        {
          title: 'Ask about responsibilities',
          text: '"What is one thing you are responsible for at school?"',
        },
        { title: 'Discuss community helpers', text: 'Notice them, name them, and thank them.' },
        {
          title: 'Encourage respectful discussion',
          text: 'Let your child disagree with you, as long as they give a reason.',
        },
        {
          title: 'Visit public places',
          text: 'A library, a park, a bus station — discuss who it is for.',
        },
        {
          title: 'Talk about shared spaces',
          text: 'Who cleans this? What happens if nobody does?',
        },
        {
          title: 'Encourage questions',
          text: '"Let\'s find out together" is a perfectly good answer.',
        },
        {
          title: 'Keep it non-political',
          text: 'Focus on how things work rather than on who you support.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'Civics Classes in Hyderabad',
      paras: [
        "Parents searching for Civics classes for kids in Hyderabad can explore Brolly Juniors, a children's learning centre at Nizampet X Roads.",
        'Hyderabad gives children a lot to work with. It is a large city in Telangana, with local bodies, state government offices, public transport, public hospitals and schools all visible in daily life. Families in Hyderabad can point at a real example for almost every Civics idea on this page.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Civics Classes Near Me?',
      lead: 'If you are searching for Civics classes for kids near me, Civics tuition near me, Civics classes near me or Civics learning classes near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask about current availability. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'The closest match to Civics: stating a view clearly, listening properly and disagreeing well.',
        to: '/junior-skills/public-speaking',
      },
      {
        icon: '📚',
        title: 'Phonics',
        text: 'Strong reading foundations, useful before longer Civics passages.',
        to: '/junior-skills/phonics',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Looking things up properly and judging whether a source can be trusted.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'Includes checking what AI tools tell you — useful for any project research.',
        to: '/ai-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation confidence for children who also want number work.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods, a popular pairing with any tuition subject.',
        to: '/junior-skills/vedic-maths',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Civics sits alongside several other programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Civics Classes for Kids: FAQs',
    faqs: [
      {
        q: 'What are Civics classes for kids?',
        a: 'Civics classes for kids help children understand how communities and government work, along with basic rights, responsibilities, rules and good citizenship. Children learn through everyday examples, discussion and activities rather than long definitions.',
      },
      {
        q: 'Why should children learn Civics?',
        a: 'Civics helps children understand their own community, why rules exist, what rights and responsibilities mean, and how government helps people. It also builds respectful discussion, teamwork and critical thinking — skills that matter well beyond the subject.',
      },
      {
        q: 'What do kids learn in Civics?',
        a: 'Children learn about community, rules and laws, government at local, state and central level, elections at an age-appropriate level, rights, responsibilities, public services, diversity, equality, citizenship and community responsibility. The exact topics depend on age and school level.',
      },
      {
        q: 'At what age can children start learning Civics?',
        a: 'Children can start from around 6 years with family and school rules, community helpers, sharing and simple responsibilities. Government, elections and democracy come later. Readiness and school level matter more than age. Contact Brolly Juniors for the latest details.',
      },
      {
        q: 'Do Civics classes teach government basics?',
        a: 'Yes. Children learn what government is and about the three levels in India: local, state and central or Union. We explain that responsibilities are shared between these levels and that arrangements vary, rather than suggesting one level handles everything.',
      },
      {
        q: 'Do children learn about rights and responsibilities?',
        a: 'Yes, and always together. Children learn about rights such as education, safety, fair treatment and expressing ideas, alongside responsibilities such as respecting others, following reasonable rules, caring for shared spaces and listening. This page explains these ideas simply and is not legal advice.',
      },
      {
        q: 'Do children learn about democracy?',
        a: 'Yes, at an age-appropriate level. Democracy is explained as a system in which people take part in choosing representatives and in public decision-making. It is taught through examples such as a class vote, and it is taught neutrally.',
      },
      {
        q: 'Do Civics classes include activities?',
        a: 'Yes. Sessions use community helper matching, rights and responsibilities pairing, community maps, government-level sorting, scenario discussions, posters and mock class elections with imaginary, non-political choices.',
      },
      {
        q: 'Can beginners learn Civics?',
        a: 'Yes. Beginners start with what they already live inside — their family, their class, the rules they already follow. Government comes much later, by which time it feels like a bigger version of something familiar.',
      },
      {
        q: 'Is Civics taught neutrally, without politics?',
        a: 'Yes. Civics at Brolly Juniors is factual and neutral. We explain how communities, government and elections work. We do not promote any political party, candidate, leader or ideology, and we do not try to persuade children towards any political view.',
      },
      {
        q: 'Are Civics classes available in Hyderabad?',
        a: "Brolly Juniors is a children's learning centre at Nizampet X Roads, Hyderabad. For current Civics class availability, formats and schedules, please contact Brolly Juniors on 7036044555. We do not publish availability that may change.",
      },
      {
        q: 'Are Civics classes available near me?',
        a: 'Brolly Juniors operates from one centre at Nizampet X Roads, convenient for families in Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet. Call 7036044555 to check current availability and formats.',
      },
      {
        q: 'How much do Civics classes cost?',
        a: 'Civics class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for the latest schedule on 7036044555.',
      },
      {
        q: 'Is a free demo available?',
        a: 'You can request a free demo using the form on this page, or by calling 7036044555. Demo availability may vary, so please contact Brolly Juniors for the latest details before making travel plans.',
      },
      {
        q: 'How can I contact Brolly Juniors?',
        a: 'Call 7036044555, message on WhatsApp, email brollyjuniors.in@gmail.com, or fill in the enquiry form on this page. The centre is at Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad, Telangana 500072.',
      },
    ],
    quickAnswersTitle: 'Civics in Short',
    quickAnswers: [
      {
        q: 'What is Civics for kids?',
        a: 'Civics is the study of how people live together in a community and how they are governed. It covers rules, government, rights, responsibilities and citizenship.',
      },
      {
        q: 'Why is Civics important for children?',
        a: 'It helps children understand their community, why rules exist, and how to take part in shared decisions respectfully.',
      },
      {
        q: 'What does Civics teach?',
        a: 'Community, rules and laws, government, rights and duties, public services, equality, diversity and good citizenship.',
      },
      {
        q: 'What are rights and responsibilities?',
        a: 'A right is something every person should be able to expect. A responsibility is something we owe to other people. They always go together.',
      },
      {
        q: 'What is democracy for kids?',
        a: 'Democracy is a system in which people take part in choosing representatives and in public decision-making through established democratic processes.',
      },
      {
        q: 'What is government?',
        a: 'Government is a system that helps organise public services, make and apply laws, and manage many things that affect communities.',
      },
      {
        q: 'What is a community?',
        a: 'A community is a group of people who share a place or something important to them — a school, a street, a city.',
      },
      {
        q: 'What is good citizenship?',
        a: 'Following rules, respecting others, caring for shared spaces, helping the community and taking responsibility for your actions.',
      },
      {
        q: '"Where can I find Civics classes for kids in Hyderabad?"',
        a: "Brolly Juniors is a children's learning centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to ask about current Civics class availability.",
      },
      {
        q: '"What do kids learn in Civics?"',
        a: 'Community, rules and laws, government at local, state and central level, rights and responsibilities, public services, equality, diversity and citizenship.',
      },
      {
        q: '"Why should children learn Civics?"',
        a: 'Because a child who understands why rules exist follows them thoughtfully, questions unfair ones properly, and knows how shared decisions get made.',
      },
      {
        q: '"How can my child learn about government?"',
        a: 'Start with the three levels — local, state and central — using real examples: the street outside, the state of Telangana, and the country. Then discuss which level might handle what.',
      },
      {
        q: '"Are there Civics classes near me?"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555 to check availability.',
      },
      {
        q: '"Is Civics teaching political?"',
        a: 'Not here. Civics at Brolly Juniors explains how things work. It does not promote any party, candidate or political view.',
      },
    ],
  },

  /* ==================================================================
     Geography Tuition — /tuitions/geography
     ================================================================== */
  '/tuitions/geography': {
    h1: 'Geography tuition in Hyderabad built around the map, where the marks are.',
    lead: 'Map work practised properly, physical processes explained with diagrams, and case studies a student can actually recall in the exam hall.',
    heroPills: ['Earth', 'Continents', 'Oceans', 'Countries'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 6–10', 'Batches of eight'],
    hero: {
      title: 'What are Geography classes for kids?',
      paras: [
        'Help children understand the world around them through simple Geography lessons, maps, activities, stories and real-life examples.',
        'Geography classes for kids help children understand the Earth, places, maps, countries, landforms, weather, people and the world around them through simple lessons and activities.',
      ],
    },
    facts: [
      { strong: 'Classes 6–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Map work', span: 'Every session' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Geography Learning Looks Like',
      lead: 'Six things children do in a Geography session at Brolly Juniors.',
      items: [
        {
          title: 'Learn About Earth',
          icon: '🌎',
          text: 'Land and water, continents and oceans, and where we sit on the planet.',
        },
        {
          title: 'Explore Maps',
          icon: '🗺',
          text: 'Symbols, directions and how to find a place on a map.',
        },
        {
          title: 'Understand Landforms',
          icon: '🏔',
          text: 'Mountains, plains, plateaus, deserts and islands, with real examples.',
        },
        {
          title: 'Learn About Weather',
          icon: '🌤',
          text: 'Why today feels different from yesterday, and what climate means.',
        },
        {
          title: 'Discover Countries',
          icon: '🌏',
          text: 'Where countries are, and what makes each place different.',
        },
        {
          title: 'Build Thinking Skills',
          icon: '🧠',
          text: 'Asking why one place is hot and another is cold — and working it out.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Are Geography Classes for Kids?',
      lead: 'Geography is the study of the Earth and the places on it.',
      paras: [
        'Here is a question a child might ask: "Why is one place hot while another place is cold?"',
        'Geography gives the answer. Places near the middle of the Earth get more direct sunlight all year, so they are usually warmer. Places high up in the mountains are colder, because air gets colder as you go higher. Once a child knows those two ideas, they can start predicting the answer for a new place instead of just being told.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        { tag: 'Earth', text: 'The planet we live on, made of land, water and air.' },
        { tag: 'Places', text: 'Cities, villages, states and countries.' },
        { tag: 'People', text: 'Where people live, and how the place shapes their lives.' },
        { tag: 'Land', text: 'Mountains, plains, plateaus, deserts and islands.' },
        { tag: 'Water', text: 'Rivers, lakes, seas and oceans.' },
        { tag: 'Weather', text: 'What the air is doing today — sun, rain, wind or cloud.' },
        { tag: 'Maps', text: 'Pictures of places, drawn from above.' },
        { tag: 'Environment', text: 'How people and nature affect each other.' },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Geography?',
      lead: 'Because Geography is the subject that explains where your child actually lives.',
      items: [
        {
          title: 'Understand the world',
          text: 'Knowing what is where turns the news, travel and stories into something that makes sense.',
        },
        {
          title: 'Improve map skills',
          text: 'Reading a map is a practical skill children keep for life.',
        },
        {
          title: 'Learn about countries',
          text: 'Where they are, what they are like, and how they differ.',
        },
        {
          title: 'Understand nature',
          text: 'Rivers, mountains, forests and weather all follow patterns.',
        },
        {
          title: 'Build curiosity',
          text: 'One question about a river can lead to a whole term of interest.',
        },
        {
          title: 'Improve observation',
          text: 'Noticing the hills, the water, the direction the sun rises.',
        },
        {
          title: 'Connect school to real life',
          text: 'The chapter on rivers becomes the river you crossed last week.',
        },
        {
          title: 'Develop thinking skills',
          text: 'Why here and not there? That question is Geography in one line.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, clear explanations and useful skills.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Geography for Kids',
      lead: 'Eight skills children practise while learning Geography.',
      items: [
        {
          title: 'World Awareness',
          icon: '🌏',
          text: 'Knowing where places are and how they relate to each other.',
        },
        {
          title: 'Map Reading',
          icon: '🗺',
          text: 'Symbols, directions and scale, used properly.',
        },
        {
          title: 'Critical Thinking',
          icon: '🧠',
          text: 'Working out why a place is the way it is.',
        },
        {
          title: 'Observation Skills',
          icon: '👀',
          text: 'Noticing the land, water and weather around them.',
        },
        {
          title: 'Location Awareness',
          icon: '📍',
          text: 'Knowing their own place on the map, then the wider world.',
        },
        {
          title: 'Weather Understanding',
          icon: '🌤',
          text: 'Reading a forecast and knowing what it means.',
        },
        {
          title: 'Environmental Awareness',
          icon: '🌱',
          text: 'Understanding water, forests and why resources need care.',
        },
        { title: 'Curiosity', icon: '💡', text: 'Wanting to know what is over the next hill.' },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "The main Geography learning areas. The mix depends on your child's age and school level.",
      items: [
        'Earth',
        'Continents',
        'Oceans',
        'Countries',
        'States',
        'Cities',
        'Maps',
        'Directions',
        'Landforms',
        'Water bodies',
        'Weather',
        'Climate',
        'Natural resources',
        'Environment',
        'Human geography',
        'Projects',
      ],
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Geography Curriculum',
      lead: 'Fourteen learning areas, grouped into a suggested order.',
      label: 'Geography Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Our Earth',
          title: 'Our Earth, Maps and Directions',
          bullets: [
            'Our Earth — land, water and air, and the shape of the planet',
            'Continents and oceans — seven continents, five oceans',
            'Maps and directions — symbols, keys, north, south, east and west',
          ],
        },
        {
          key: 'stage-2',
          label: 'Places',
          title: 'Countries, India and Its States',
          bullets: [
            'Countries and capitals — where they are and how to find them',
            'India and its states — 28 states and 8 union territories',
            'People and places — how location shapes daily life',
          ],
        },
        {
          key: 'stage-3',
          label: 'Land & Water',
          title: 'Landforms and Water Bodies',
          bullets: [
            'Mountains and hills — how they look and where they are found',
            'Rivers and lakes — where water comes from and where it goes',
            'Deserts and forests — very dry places and very green ones',
          ],
        },
        {
          key: 'stage-4',
          label: 'People & Nature',
          title: 'Weather, Resources and Environment',
          bullets: [
            'Weather and climate — today versus the long-term pattern',
            'Natural resources — water, soil, forests, minerals and energy',
            'Environment — how human activity changes a place',
            'Geography projects — maps, models and fact cards',
          ],
        },
      ],
      note: 'Example learning structure. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for the latest details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Earth', text: 'Our planet, its land, water and air.' },
          { title: 'Continents', text: 'The seven large land areas of the world.' },
          { title: 'Oceans', text: 'The five great bodies of salt water.' },
          { title: 'Countries', text: 'Where they are and what makes each one different.' },
          { title: 'States', text: 'The parts that make up a country like India.' },
          { title: 'Cities', text: 'Large places where many people live and work.' },
          { title: 'Maps', text: 'Reading symbols, keys and scale.' },
          { title: 'Directions', text: 'North, south, east and west.' },
          {
            title: 'Landforms',
            text: 'Mountains, hills, plains, plateaus, valleys, deserts and islands.',
          },
          { title: 'Water bodies', text: 'Rivers, lakes, seas, oceans and waterfalls.' },
          { title: 'Weather', text: 'What the air is like today.' },
          { title: 'Climate', text: 'What weather is usually like in a place over many years.' },
          { title: 'Natural resources', text: 'Water, soil, forests, minerals and energy.' },
          { title: 'Environment', text: 'How people and nature affect each other.' },
          { title: 'Human geography', text: 'People, homes, jobs, transport and towns.' },
          { title: 'Projects', text: 'Maps, models and fact cards children make themselves.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Geography Learning by Age',
        lead: 'A general guide to what Geography can look like at different stages.',
        id: 'agewise',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Young Learners',
            list: ['Earth', 'Land and water', 'Simple maps', 'Places around them'],
          },
          {
            title: 'Middle Learners',
            list: ['Continents', 'Countries and states', 'Directions', 'Landforms', 'Weather'],
          },
          {
            title: 'Older Learners',
            list: [
              'Physical geography',
              'Human geography',
              'Climate',
              'Resources',
              'Environment',
              'Map-based learning',
            ],
          },
        ],
        note: 'Actual class grouping may vary. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Earth and Our Planet',
        lead: 'Earth is the planet we live on. It is shaped like a ball, slightly flattened at the top and bottom.',
        id: 'earth',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Water',
            text: "Most of the Earth's surface is covered by water. That is why the planet looks blue from space.",
          },
          {
            title: 'Land',
            text: 'The rest is land, divided into seven large areas called continents.',
          },
        ],
        note: 'Around all of it is a layer of air we cannot see. It gives us the wind, the clouds and the air we breathe. Earth also spins. That spin is what gives us day and night, and it is why the Sun seems to rise in the east and set in the west — the same in Hyderabad as everywhere else.',
        band: false,
      },
      {
        eyebrow: 'Interactive',
        title: 'Maps for Kids',
        lead: 'A map is a picture of a place, drawn as if you were looking down from above.',
        id: 'maps',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'North', text: 'Usually shown at the top of a map.' },
          { title: 'South', text: 'The opposite of north, at the bottom.' },
          { title: 'East', text: 'To the right when north is up. The Sun rises this way.' },
          { title: 'West', text: 'To the left when north is up. The Sun sets this way.' },
        ],
        note: 'Maps use small pictures called symbols instead of words, so a map can show a lot in a small space. The list explaining the symbols is called a key. Tap any symbol above and the explanation will appear here.',
        band: true,
      },
      {
        eyebrow: 'Interactive',
        title: 'Continents and Oceans',
        lead: 'There are seven continents and five oceans. Tap a continent to learn one simple fact.',
        id: 'continents',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Asia',
            text: 'Asia is the largest continent, and more people live here than on any other continent.',
          },
          {
            title: 'Africa',
            text: 'Africa is the second largest continent. The Sahara, the largest hot desert in the world, is in northern Africa.',
          },
          {
            title: 'Europe',
            text: 'Europe is joined to Asia by land. Together they are sometimes called Eurasia.',
          },
          {
            title: 'North America',
            text: 'North America stretches from the cold Arctic in the north down to the warm tropics in the south.',
          },
          {
            title: 'South America',
            text: 'The Amazon rainforest, the largest tropical rainforest in the world, is in South America.',
          },
          {
            title: 'Australia',
            text: 'Australia is the smallest continent. It is surrounded by ocean on every side.',
          },
          {
            title: 'Antarctica',
            text: 'Antarctica is at the very bottom of the Earth and is covered in thick ice.',
          },
          { title: 'Pacific Ocean', text: 'The largest ocean.' },
          { title: 'Atlantic Ocean', text: 'The second largest.' },
          { title: 'Indian Ocean', text: 'It touches the south of India.' },
          { title: 'Southern Ocean', text: 'Around Antarctica.' },
          { title: 'Arctic Ocean', text: 'The smallest and coldest.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Indian Geography',
        lead: 'India is a large country in southern Asia. It has 28 states and 8 union territories.',
        id: 'india',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Mountains',
            icon: '🏔',
            text: 'The Himalayas run along the north of India. They include some of the highest mountains in the world.',
          },
          {
            title: 'Rivers',
            icon: '🌊',
            text: 'Large rivers such as the Ganga, the Godavari and the Krishna flow across the country and support farming.',
          },
          {
            title: 'Plains',
            icon: '🌾',
            text: 'Wide flat land in the north, formed by rivers over a very long time. Good for growing crops.',
          },
          {
            title: 'Plateaus',
            icon: '⛰',
            text: 'The Deccan Plateau covers much of southern India — including the area around Hyderabad.',
          },
          {
            title: 'Deserts',
            icon: '🏜',
            text: 'The Thar Desert lies in the north-west, mainly in Rajasthan. Very dry, with little rainfall.',
          },
          {
            title: 'Coastal areas',
            icon: '🏖',
            text: 'India has a long coastline, with the Arabian Sea to the west and the Bay of Bengal to the east.',
          },
        ],
        note: 'Hyderabad is the capital of Telangana, one of those 28 states. That makes it a good place to start: children learn their own city first, then their state, then the country.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'World Geography',
        lead: 'Once children know their own country, the rest of the world becomes easier to place.',
        id: 'world',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Continents',
            text: "Seven large land areas. Children learn to name them and find India's one.",
          },
          {
            title: 'Oceans',
            text: 'Five great bodies of salt water that connect the continents.',
          },
          {
            title: 'Countries',
            text: 'Each continent is divided into countries, each with its own capital city.',
          },
          {
            title: 'Major regions',
            text: 'Broad areas such as the tropics, the deserts and the polar regions.',
          },
          {
            title: 'Different environments',
            text: 'Rainforests, grasslands, deserts, mountains and coasts.',
          },
          {
            title: 'Different landscapes',
            text: 'Flat, hilly, icy, sandy or green — and why each place looks the way it does.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Landforms',
        lead: "A landform is a natural shape on the Earth's surface.",
        id: 'landforms',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Mountains',
            icon: '🏔',
            text: 'Very high land with steep sides. The air is colder at the top.',
          },
          {
            title: 'Hills',
            icon: '⛰',
            text: 'Raised land too, but lower and gentler than a mountain.',
          },
          {
            title: 'Plains',
            icon: '🌾',
            text: 'Large flat areas of land. Easy to farm and to build on.',
          },
          {
            title: 'Plateaus',
            icon: '🗻',
            text: 'High land that is flat on top, like a table.',
          },
          {
            title: 'Valleys',
            icon: '🌋',
            text: 'Low land between hills or mountains. Rivers often run through them.',
          },
          {
            title: 'Deserts',
            icon: '🏜',
            text: 'Very dry places with very little rain. Some are hot, some are cold.',
          },
          { title: 'Islands', icon: '🏝', text: 'Land with water all around it.' },
          {
            title: 'Spot one',
            text: 'Which of these can your child see, or has seen on a journey?',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Water Bodies',
        lead: 'Water covers most of the Earth. It appears in several different forms.',
        id: 'water',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Rivers',
            text: 'Water flowing along a channel, usually from higher land towards the sea. The Musi flows through Hyderabad.',
          },
          {
            title: 'Lakes',
            text: 'Water with land all around it. Hyderabad has several well-known lakes.',
          },
          { title: 'Seas', text: 'Large areas of salt water, usually partly enclosed by land.' },
          { title: 'Oceans', text: 'The biggest bodies of salt water. There are five of them.' },
          { title: 'Waterfalls', text: 'Where a river drops suddenly over an edge of rock.' },
          {
            title: 'River or lake?',
            text: 'A river moves and goes somewhere. A lake mostly stays where it is.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Weather and Climate',
        lead: 'Weather tells us what the air is like today. Climate tells us what weather is usually like in a place over a long time.',
        id: 'weather',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Weather changes quickly',
            text: 'It can be different in the morning and the evening of the same day.',
            list: ['Sunny', 'Cloudy', 'Rainy', 'Windy'],
          },
          {
            title: 'Climate changes slowly',
            text: "Climate is worked out from many years of weather records. It is why we can say a desert is dry and a rainforest is wet, without checking today's forecast.",
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Natural Resources',
        lead: 'Natural resources are useful things that come from nature rather than from a factory.',
        id: 'resources',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Water', text: 'For drinking, farming, cooking and washing.' },
          { title: 'Soil', text: 'Plants grow in it, so most of our food depends on it.' },
          { title: 'Forests', text: 'They give wood, clean the air and are home to wildlife.' },
          { title: 'Minerals', text: 'Materials dug from the ground and used to make things.' },
          {
            title: 'Energy resources',
            text: 'Sunlight, wind and water can be used to make electricity.',
          },
        ],
        note: 'Children learn one important idea about all of these: some resources take a very long time to form, and can run short if used carelessly. Turning off a tap is a small thing, but it is the same idea at a smaller scale.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Geography and the Environment',
        lead: 'Geography is not only about where things are. It is also about how people and nature affect each other.',
        id: 'environment',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Nature',
            text: 'Land, water, plants and animals form a system that works together.',
          },
          {
            title: 'Pollution',
            text: 'When air, water or land is spoiled, it affects the people and wildlife living there.',
          },
          {
            title: 'Water',
            text: 'Where it comes from, how it is stored, and why it should not be wasted.',
          },
          {
            title: 'Forests',
            text: 'They hold soil in place and support a huge number of living things.',
          },
          {
            title: 'Climate',
            text: 'Long-term weather patterns, and why scientists watch them closely.',
          },
          {
            title: 'Human activities',
            text: 'Farming, building and travel all change the places where they happen.',
          },
        ],
        note: 'This is taught as observation and understanding, not as fear. Children finish with things they can actually do — save water, avoid litter, look after a plant.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Human Geography',
        lead: 'Human geography is about people: where they live, and how the place they live in shapes their daily lives.',
        id: 'human',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'People',
            text: 'Different places have different languages, food and clothing.',
          },
          {
            title: 'Homes',
            text: 'Houses are built to suit the local weather and available materials.',
          },
          {
            title: 'Jobs',
            text: 'Many jobs depend on the land nearby — farming, fishing, mining.',
          },
          {
            title: 'Cities',
            text: 'Large places where many people live, work and travel every day.',
          },
          { title: 'Villages', text: 'Smaller places, often surrounded by farmland.' },
          {
            title: 'Transport',
            text: 'Roads, rail, water and air connect places to each other.',
          },
          { title: 'Population', text: 'Simply how many people live in a place.' },
          {
            title: 'Start local',
            text: 'Hyderabad is a good first example of a large, busy city.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'Where Does It Belong?',
        lead: 'Is each one a landform or a water body? Tap your answer for all six.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'How many continents are there?',
            opts: ['Five', 'Six', 'Seven', 'Nine'],
            a: 'Seven',
            why: 'There are seven continents: Asia, Africa, Europe, North America, South America, Australia and Antarctica.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which is the largest ocean?',
            opts: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'],
            a: 'Pacific Ocean',
            why: 'The Pacific Ocean is the largest of the five oceans. The Arctic Ocean is the smallest.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What do we use to find directions?',
            opts: ['A calendar', 'A thermometer', 'A compass', 'A ruler'],
            a: 'A compass',
            why: 'A compass shows direction. Its needle points north, and from north you can work out south, east and west.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is a mountain?',
            opts: [
              'Flat low land',
              'Very high land with steep sides',
              'Water with land around it',
              'A dry sandy area',
            ],
            a: 'Very high land with steep sides',
            why: 'A mountain is very high land with steep sides. Flat low land is a plain, and a dry sandy area is a desert.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which continent is India in?',
            opts: ['Africa', 'Europe', 'Asia', 'Australia'],
            a: 'Asia',
            why: 'India is in Asia, the largest continent. That means Hyderabad is in Asia too.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Try it now',
        title: 'Geography Quiz',
        lead: 'Five quick questions, with the answer explained straight away.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 5', 'Question'],
        band: false,
      },
      {
        eyebrow: 'Getting started',
        title: 'Geography for Beginners',
        lead: 'Your child does not need to know a single country name to start.',
        id: 'beginners',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Earth', text: 'One planet, made of land, water and air.' },
          {
            title: 'Directions',
            text: 'North, south, east and west. Learned with a compass, not memorised.',
          },
          { title: 'Maps', text: 'Starting with a map of one room.' },
          { title: 'Continents', text: 'Seven names, learned a few at a time.' },
          { title: 'Countries', text: 'India first, then neighbours, then further out.' },
          {
            title: 'Land and water',
            text: 'The first big idea, and the one everything else hangs on.',
          },
        ],
        note: 'Beginners start close to home and work outwards. First the Earth, then directions, then simple maps, then continents and countries. Land and water is usually the very first idea, because it splits the whole planet into two things a child can already picture.',
        band: true,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Through Stories',
        lead: 'A journey is the easiest way to teach Geography, because a journey has a start, a route and an end. A story about travelling from Hyderabad to another country can introduce maps, directions and countries.',
        id: 'stories',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Travel stories', text: 'Real or imagined journeys with a clear route.' },
          { title: 'Characters', text: 'Someone to follow makes the route worth remembering.' },
          { title: 'Places', text: 'Each stop is a chance to look at the map.' },
          {
            title: 'Real-world examples',
            text: 'Places children have heard of, seen or visited.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Everyday Geography',
        title: 'Geography and Real Life',
        lead: 'Geography is one of the most practical subjects a child will study.',
        id: 'real-life',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Reading a map',
            icon: '🗺',
            text: 'Finding your way, on paper or on a phone.',
          },
          {
            title: 'Understanding weather',
            icon: '🌤',
            text: 'Knowing what a forecast actually means for tomorrow.',
          },
          {
            title: 'Planning a trip',
            icon: '✈',
            text: 'How far, which direction, what to pack.',
          },
          {
            title: 'Knowing directions',
            icon: '🧭',
            text: 'Useful long before anyone hands you a map.',
          },
          {
            title: 'Where food comes from',
            icon: '🍆',
            text: 'Different crops grow in different places, for geographic reasons.',
          },
          {
            title: 'Learning about places',
            icon: '🌏',
            text: 'Making sense of news, books and travel programmes.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Geography and Critical Thinking',
        lead: 'Geography trains children to ask four questions about any place.',
        id: 'critical-thinking',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Why?', text: 'Why do some places get more rain than others?' },
          { title: 'Where?', text: 'Where exactly is it, and what is around it?' },
          { title: 'How?', text: 'How did this mountain, river or city come to be here?' },
          {
            title: 'What if?',
            text: 'What happens if the river dries up, or the forest is cut down?',
          },
        ],
        note: 'These are not memory questions. A child who can answer them about one place can usually work out the answer for a place they have never heard of — which is the whole point.',
        band: false,
      },
      {
        eyebrow: 'Projects',
        title: 'Geography Projects for Kids',
        lead: 'Longer pieces of work that children make themselves.',
        id: 'projects',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Make a world map',
            text: 'Draw and label the seven continents and five oceans.',
          },
          {
            title: 'Create an India map',
            text: 'Mark the main physical features and find your own state.',
          },
          {
            title: 'Build a landform model',
            text: 'Make a mountain, valley and plain from clay or paper.',
          },
          {
            title: 'Track weekly weather',
            text: 'Record it daily, then present the pattern you found.',
          },
          { title: 'Country fact card', text: 'One country, six accurate facts, one picture.' },
          {
            title: 'Map your neighbourhood',
            text: 'Draw your street from above, with a proper key.',
          },
        ],
        note: 'These are general project ideas for parents and children, not confirmed Brolly Juniors coursework. Contact Brolly Juniors for the latest details.',
        band: true,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Geography classes for kids in Hyderabad',
          'Geography classes for children in Hyderabad',
          'Geography tuition for kids',
          'Geography learning classes in Hyderabad',
          'Geography tutors for kids in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: false,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Geography Class Experience',
      lead: 'One possible flow for a Geography session.',
      items: [
        {
          title: 'Warm-up question',
          text: '"Which direction does the Sun rise from?" Something everyone can attempt.',
        },
        { title: 'Geography concept', text: 'The idea for the day, explained in plain words.' },
        {
          title: 'Visual explanation',
          text: 'A globe, a map or a drawing, because Geography is a visual subject.',
        },
        { title: 'Map activity', text: 'Find it, mark it, or draw it.' },
        { title: 'Interactive game', text: 'Matching, sorting or a direction challenge.' },
        { title: 'Practice', text: 'A few questions to apply the idea independently.' },
        { title: 'Quick quiz', text: 'Short and low-pressure, to see what has stuck.' },
        { title: 'Recap', text: 'Children say what they learned, in their own words.' },
      ],
      note: 'This is an example structure, not a confirmed Brolly Juniors class format. Contact Brolly Juniors for the latest details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Geography Activities',
      lead: 'Games and tasks used during Geography sessions.',
      items: [
        {
          title: 'Make a simple map',
          icon: '🗺',
          text: 'Draw your room, your street or your route to school, from above.',
        },
        {
          title: 'Find countries on a globe',
          icon: '🌐',
          text: 'Start with India, then find one country on every continent.',
        },
        {
          title: 'Match countries to continents',
          icon: '🃏',
          text: 'Card matching, played against the clock.',
        },
        {
          title: 'Identify landforms',
          icon: '🏔',
          text: 'Look at pictures and name the landform in each one.',
        },
        {
          title: 'Map treasure hunt',
          icon: '💎',
          text: 'Follow directions and symbols on a map to find the marked spot.',
        },
        {
          title: 'Weather observation',
          icon: '🌤',
          text: 'Record the weather every day for a week and look for a pattern.',
        },
        {
          title: 'Build a paper map',
          icon: '📄',
          text: 'Make a map of the classroom, complete with a key.',
        },
        {
          title: 'Geography quiz',
          icon: '🎯',
          text: 'Quick questions to check what the group remembers.',
        },
        {
          title: 'Direction game',
          icon: '🧭',
          text: 'Move three steps north, two east — where did you end up?',
        },
        {
          title: 'State matching activity',
          icon: '🇮',
          text: 'Match Indian states to their capitals and their location.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. Geography terms are explained as they appear.',
        },
        {
          title: 'Activity-based learning',
          icon: '🗺',
          text: 'Maps, matching, models and games rather than only listening.',
        },
        {
          title: 'Practical examples',
          icon: '🏠',
          text: 'Starting with Hyderabad, then Telangana, then the wider world.',
        },
        {
          title: 'Learning through curiosity',
          icon: '❓',
          text: 'Sessions start with a question, not a definition.',
        },
        {
          title: 'Parent-friendly communication',
          icon: '📞',
          text: 'Ask us anything about level, format or fit before you decide.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors to check current Geography class formats and availability.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for the latest schedule.'],
      fees: [
        'Geography class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details.',
      ],
      feeTitle: 'Geography class fees',
    },
    trial: {
      title: 'Let Your Child Explore Geography',
      paras: [
        'Want to see how Geography learning can work for your child? Book a free demo and speak with Brolly Juniors.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'Help your child explore maps, places, Earth and the world through simple Geography learning.',
        'Demo availability may vary. Contact Brolly Juniors for the latest details.',
      ],
      includes: [
        'Your child tries a Geography activity at their level',
        'You see how maps and concepts are explained',
        'We discuss where your child is now and what would suit them',
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How to Help Your Child Learn Geography at Home',
      lead: 'You do not need to know any Geography. A map and a few questions will do.',
      items: [
        {
          title: 'Look at maps together',
          text: 'Find your own area first. Recognising home makes the rest feel possible.',
        },
        { title: 'Ask location questions', text: '"Which direction is your school from here?"' },
        {
          title: 'Watch weather changes',
          text: 'Predict tomorrow together, then check whether you were right.',
        },
        { title: 'Read about countries', text: 'One country a week, at their reading level.' },
        {
          title: 'Use a globe',
          text: 'A globe shows shape and size better than a flat map does.',
        },
        {
          title: 'Plan imaginary trips',
          text: '"If we went to Australia, which way would we travel?"',
        },
        {
          title: 'Encourage questions',
          text: '"Let\'s find out together" is a perfectly good answer.',
        },
        {
          title: 'Notice the land',
          text: 'On any journey, point out hills, rivers, fields and towns.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'Geography Classes in Hyderabad',
      paras: [
        "Parents searching for Geography classes for kids in Hyderabad can explore Brolly Juniors, a children's learning centre at Nizampet X Roads.",
        'Hyderabad is a useful place to learn Geography. Children in Hyderabad live on the Deccan Plateau, in the state of Telangana, in southern India — which means their own address already contains a landform, a state and a region. Families in Hyderabad can start Geography with the city outside the window.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Geography Classes Near Me?',
      lead: 'If you are searching for Geography classes for kids near me, Geography tuition near me, Geography classes near me or Geography learning classes near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask about current availability. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Presenting a country fact card or a map project clearly to an audience.',
        to: '/junior-skills/public-speaking',
      },
      {
        icon: '📚',
        title: 'Phonics',
        text: 'Strong reading foundations, useful before longer Geography passages.',
        to: '/junior-skills/phonics',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Using online maps and looking things up properly.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'Includes checking what AI tools tell you — useful for project research.',
        to: '/ai-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation confidence, useful for distances, areas and populations.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods, a popular pairing with any tuition subject.',
        to: '/junior-skills/vedic-maths',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Geography sits alongside several other programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Geography Classes for Kids: FAQs',
    faqs: [
      {
        q: 'What are Geography classes for kids?',
        a: 'Geography classes for kids help children understand the Earth, places, maps, countries, landforms, weather, people and the world around them through simple lessons and activities. Children learn using maps, globes, stories and hands-on tasks rather than long definitions.',
      },
      {
        q: 'Why should children learn Geography?',
        a: 'Geography helps children understand the world they live in. It builds map-reading skills, observation, curiosity and thinking skills, and connects school topics to real life. It also explains everyday things — why the weather changes, where food comes from, and why places differ.',
      },
      {
        q: 'What do kids learn in Geography?',
        a: "Children learn about the Earth, continents and oceans, countries, states and cities, maps and directions, landforms, water bodies, weather and climate, natural resources, the environment and human geography. The exact topics depend on the child's age and school level.",
      },
      {
        q: 'At what age can children start Geography?',
        a: 'Children can start from around 6 years with simple ideas such as land and water, directions and a map of their own room. More detailed topics like climate and resources come later. Readiness and school level matter more than age. Contact Brolly Juniors for the latest details.',
      },
      {
        q: 'Do Geography classes include map reading?',
        a: 'Yes. Map skills are one of the core parts of Geography learning. Children work on map symbols, keys, directions and finding places, starting with a map of one room and building up to maps of India and the world.',
      },
      {
        q: 'Do children learn about India?',
        a: "Yes. Indian Geography covers the 28 states and 8 union territories, along with major physical features: the Himalayas in the north, large rivers such as the Ganga, Godavari and Krishna, the northern plains, the Deccan Plateau, the Thar Desert and India's long coastline.",
      },
      {
        q: 'Do children learn about world Geography?',
        a: 'Yes. Children learn the seven continents and five oceans, where countries sit, and the main types of environment and landscape around the world. Broad themes come first, with detailed country facts added as children get older.',
      },
      {
        q: 'Are Geography lessons activity-based?',
        a: 'Geography is a visual and practical subject, so it suits activity-based learning: drawing maps, matching countries to continents, direction games, weather journals and landform models. Activities are used alongside explanations, not instead of them.',
      },
      {
        q: 'Can beginners learn Geography?',
        a: 'Yes. Beginners start with the Earth, land and water, directions and simple maps — nothing that needs memorising. A child who can point to their own street on a drawing is already doing Geography.',
      },
      {
        q: 'Are Geography classes available in Hyderabad?',
        a: "Brolly Juniors is a children's learning centre at Nizampet X Roads, Hyderabad. For current Geography class availability, formats and schedules, please contact Brolly Juniors on 7036044555. We do not publish availability that may change.",
      },
      {
        q: 'Are Geography classes available near me?',
        a: 'Brolly Juniors operates from one centre at Nizampet X Roads, convenient for families in Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet. Call 7036044555 to check current availability and what formats are being offered.',
      },
      {
        q: 'How much do Geography classes cost?',
        a: 'Geography class fees may vary based on the current program. Contact Brolly Juniors for the latest fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for the latest schedule on 7036044555.',
      },
      {
        q: 'Is a free demo available?',
        a: 'You can request a free demo using the form on this page, or by calling 7036044555. Demo availability may vary, so please contact Brolly Juniors for the latest details before making travel plans.',
      },
      {
        q: 'How can I contact Brolly Juniors?',
        a: 'Call 7036044555, message on WhatsApp, email brollyjuniors.in@gmail.com, or fill in the enquiry form on this page. The centre is at Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad, Telangana 500072.',
      },
      {
        q: 'How is Geography different from History and General Science?',
        a: 'Geography studies the Earth and its places — land, water, weather, maps and people today. History studies people, places and events from the past. General Science covers the natural world including Physics, Chemistry and Biology. They overlap, but each has a different focus.',
      },
    ],
    quickAnswersTitle: 'Geography in Short',
    quickAnswers: [
      {
        q: 'What is Geography for kids?',
        a: 'Geography is the study of the Earth and the places on it — land, water, weather, maps, countries and the people who live there.',
      },
      {
        q: 'Why is Geography important for children?',
        a: 'It helps children understand the world they live in, and builds map skills, observation and thinking skills they use in real life.',
      },
      {
        q: 'What does Geography teach?',
        a: 'Where places are, what they are like, and why they are that way.',
      },
      {
        q: 'What are the main Geography topics?',
        a: 'Earth, continents and oceans, countries and states, maps and directions, landforms, water bodies, weather and climate, resources, environment and human geography.',
      },
      {
        q: 'What are map skills?',
        a: 'Reading map symbols and keys, using directions, finding a place, and understanding what the map is showing.',
      },
      {
        q: 'What is the difference between weather and climate?',
        a: 'Weather is what the air is like today. Climate is what the weather is usually like in a place over a long time.',
      },
      {
        q: 'What are landforms?',
        a: "Natural shapes on the Earth's surface: mountains, hills, plains, plateaus, valleys, deserts and islands.",
      },
      {
        q: 'Why should children learn about countries?',
        a: 'Knowing where countries are and what they are like makes news, travel, books and school subjects far easier to follow.',
      },
      {
        q: '"Where can I find Geography classes for kids in Hyderabad?"',
        a: "Brolly Juniors is a children's learning centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to ask about current Geography class availability.",
      },
      {
        q: '"What do kids learn in Geography?"',
        a: 'The Earth, continents and oceans, countries and states, maps and directions, landforms, water bodies, weather and climate, resources and the environment.',
      },
      {
        q: '"Are Geography classes good for children?"',
        a: 'Geography builds map skills, observation, curiosity and thinking skills, and connects school learning to real life. Whether it suits your child is best judged with a free demo.',
      },
      {
        q: '"How can my child learn Geography?"',
        a: 'Start close to home: a map of their room, then their street, then the city, then India, then the world. Use a globe, watch the weather, and ask "why is it like that here?"',
      },
      {
        q: '"Are there Geography classes near me?"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555 to check availability.',
      },
      {
        q: '"What is the difference between weather and climate?"',
        a: 'Weather is today. Climate is the usual pattern over many years.',
      },
    ],
  },

  /* ==================================================================
     General Science — /tuitions/general-science
     ================================================================== */
  '/tuitions/general-science': {
    h1: 'Science tuition for Class 4 to 7 in Hyderabad, before the subjects split.',
    lead: 'Activity-led sessions covering the physics, chemistry and biology basics — building the habit of explaining an observation rather than memorising a fact.',
    heroPills: ['Living things', 'Plants', 'Animals', 'Human body basics'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–7', 'Batches of eight'],
    hero: {
      title: 'What are General Science Classes for Kids?',
      paras: [
        'Science is not one subject. It is the whole set of answers to the questions children already ask — why the moon changes shape, why ice melts, why a seed becomes a plant. General Science at Brolly Juniors in Hyderabad covers all of it, at a level that suits your child.',
        'General Science classes for kids are broad introductory science lessons covering several areas at once. Children learn basic Physics, Chemistry and Biology alongside Earth science, space and the environment, using everyday examples, observation and safe hands-on activities rather than one narrow subject.',
      ],
    },
    facts: [
      { strong: 'Classes 4–7', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Activity-led', span: 'Every session' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What General Science Learning Looks Like',
      lead: 'Six things children do in a General Science session at Brolly Juniors.',
      items: [
        {
          title: 'Explore Science',
          icon: '🔭',
          text: 'A wide sweep — living things, matter, energy, Earth and space — instead of one narrow topic.',
        },
        {
          title: 'Learn Through Activities',
          icon: '🧪',
          text: 'Children try things themselves and record what actually happened.',
        },
        {
          title: 'Understand Everyday Things',
          icon: '🏠',
          text: 'Cooking, cycling, weather and shadows all become examples.',
        },
        {
          title: 'Ask Questions',
          icon: '❓',
          text: 'Sessions start with a question, not a definition.',
        },
        {
          title: 'Try Safe Experiments',
          icon: '💧',
          text: 'Low-risk activities with everyday materials, supervised where needed.',
        },
        {
          title: 'Build Scientific Thinking',
          icon: '🧠',
          text: 'Predict, observe, compare, explain. The same method across every topic.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is General Science for Kids?',
      lead: 'General Science helps children understand the world around them.',
      paras: [
        'In school, science eventually splits into separate subjects. General Science comes before that split, and it draws on all of them:',
        'General Science is the broad introduction. It gives your child a working picture of all the main areas of science and helps you find out which ones they take to.',
        'Physics, Chemistry and Biology are separate, deeper programmes for children who are ready to go further in one area — usually because school has started splitting the subjects, or because a child has found the thing they love.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        {
          tag: 'Physics',
          text: 'How things move, work and interact — force, motion, light, sound, heat and energy.',
        },
        {
          tag: 'Chemistry',
          text: 'What things are made of and how they change — matter, materials and mixtures.',
        },
        {
          tag: 'Biology',
          text: 'Living things — plants, animals, the human body and habitats.',
        },
        { tag: 'Earth Science', text: 'Rocks, soil, water, air, weather and seasons.' },
        { tag: 'Space Science', text: 'The Sun, Moon, planets, stars and the solar system.' },
        {
          tag: 'Environmental Science',
          text: 'How living things and their surroundings depend on each other.',
        },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Science?',
      lead: 'Because children are already doing science. They are just not calling it that yet.',
      items: [
        {
          title: 'Curiosity',
          text: 'Science rewards the child who keeps asking why, and gives them ways to find out.',
        },
        {
          title: 'Observation',
          text: 'Looking carefully at what happened, rather than what they expected.',
        },
        {
          title: 'Asking questions',
          text: 'Learning to ask a question that can actually be answered by testing it.',
        },
        {
          title: 'Scientific thinking',
          text: 'Making a guess, checking it honestly, and changing it if needed.',
        },
        {
          title: 'Problem solving',
          text: 'Trying something, seeing the result, and adjusting.',
        },
        {
          title: 'Understanding everyday life',
          text: 'Rain, rust, shadows, brakes and boiling water all have reasons.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, safe exploration and clear explanations.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of General Science Learning',
      lead: 'Ten skills children practise while exploring science.',
      items: [
        { title: 'Curiosity', icon: '❓', text: 'Wanting the reason, not just the rule.' },
        {
          title: 'Observation',
          icon: '👀',
          text: 'Noticing the small change that explains the big result.',
        },
        {
          title: 'Scientific Thinking',
          icon: '🔬',
          text: 'Predict, test, observe, conclude — a method they can reuse anywhere.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Changing one thing and seeing what happens next.',
        },
        {
          title: 'Critical Thinking',
          icon: '⚖',
          text: 'Comparing two results and deciding what really caused the difference.',
        },
        {
          title: 'Questioning',
          icon: '💬',
          text: 'Asking things that can be tested rather than only wondered about.',
        },
        {
          title: 'Logical Thinking',
          icon: '🔢',
          text: 'Following cause to effect without skipping a step.',
        },
        {
          title: 'Creativity',
          icon: '🎨',
          text: 'Designing a way to test an idea with whatever is on the table.',
        },
        {
          title: 'Concept Understanding',
          icon: '💡',
          text: 'Knowing why something works, so it is not just memorised.',
        },
        {
          title: 'Nature Awareness',
          icon: '🌳',
          text: 'Seeing the living world as connected, not just as scenery.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible General Science areas for children. The mix depends on your child's age and school level.",
      items: [
        'Living things',
        'Plants',
        'Animals',
        'Human body basics',
        'Matter',
        'Materials',
        'Force and motion',
        'Light',
        'Sound',
        'Heat',
        'Energy',
        'Simple changes',
        'Earth',
        'Weather',
        'Environment',
        'Solar System and space',
      ],
      note: 'Topics are chosen to suit the child. A six-year-old may spend a session on shadows and living things, while an older child works on energy, ecosystems and the solar system. Contact Brolly Juniors for current details.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'General Science Curriculum',
      lead: 'A suggested learning progression, from first observations to school-level science.',
      label: 'General Science Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation',
          title: 'Foundation Science',
          intro: 'First ideas, learned mostly by looking, sorting and describing.',
          bullets: [
            'Living and non-living things',
            'Plants and animals',
            'Our body',
            'Water and air',
            'Weather',
            'Light and shadows',
            'Simple observation activities',
          ],
        },
        {
          key: 'stage-2',
          label: 'Basic',
          title: 'Basic Science',
          intro: 'Named concepts, still built on things a child can see and handle.',
          bullets: [
            'Matter',
            'Materials',
            'Force and motion',
            'Heat',
            'Sound',
            'Light',
            'Plants and animals',
            'Earth and space',
          ],
        },
        {
          key: 'stage-3',
          label: 'Intermediate',
          title: 'Intermediate Science',
          intro: 'Systems and structure, with measurement joining the explanations.',
          bullets: [
            'Energy',
            'Simple machines',
            'Atoms and elements basics',
            'Human body systems',
            'Ecosystems',
            'Weather and climate',
            'Solar system',
          ],
        },
        {
          key: 'stage-4',
          label: 'Advanced School',
          title: 'Advanced School Science',
          intro: 'The point where science starts splitting into separate subjects.',
          bullets: [
            'Physics basics',
            'Chemistry basics',
            'Biology basics',
            'Earth science',
            'Environmental science',
            'Space science',
            'Scientific investigation',
          ],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Living things', text: 'What makes something alive, and what does not.' },
          { title: 'Plants', text: 'Parts of a plant and how plants grow.' },
          { title: 'Animals', text: 'Animal groups and where they live.' },
          { title: 'Human body basics', text: 'Heart, lungs, bones, muscles and brain.' },
          { title: 'Matter', text: 'Solids, liquids and gases, and how they change.' },
          { title: 'Materials', text: 'What everyday objects are made of, and why.' },
          { title: 'Force and motion', text: 'Pushes, pulls, moving and stopping.' },
          { title: 'Light', text: 'Sources, shadows and reflection.' },
          { title: 'Sound', text: 'Vibrations, loud and soft, high and low.' },
          { title: 'Heat', text: 'Warm and cold, and how heat moves.' },
          { title: 'Energy', text: 'The different forms energy takes.' },
          { title: 'Simple changes', text: 'Melting, dissolving, rusting and cooking.' },
          { title: 'Earth', text: 'Rocks, soil, water and air.' },
          { title: 'Weather', text: 'Rain, clouds, wind and seasons.' },
          { title: 'Environment', text: 'Habitats, pollution, recycling and conservation.' },
          { title: 'Solar System and space', text: 'The Sun, Moon, planets and stars.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise General Science Learning',
        lead: 'A general guide to what science can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '6–8 Years',
            text: 'Sorting living and non-living things, naming plant parts, watching shadows move, testing magnets and talking about the weather. Mostly looking and describing.',
          },
          {
            title: '9–11 Years',
            text: 'States of matter, force and friction, light and sound, animal groups, the water cycle, and the planets of the solar system.',
          },
          {
            title: '12–14 Years',
            text: 'Energy and simple machines, first ideas about atoms and elements, body systems, ecosystems, and weather versus climate.',
          },
          {
            title: '14+ Years',
            text: 'Physics, Chemistry and Biology basics as separate strands, plus earth, environmental and space science, and how a scientific investigation is designed.',
          },
        ],
        note: 'These are general age guides for science learning, not fixed Brolly Juniors batch groups. Readiness and current school level matter more than age alone. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Interactive',
        title: 'Pick a Science Topic',
        lead: 'Tap any area of science to see what children learn in it.',
        id: 'topics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Physics for Kids',
            text: 'Physics is about how things move, work and interact.',
          },
          {
            title: 'Chemistry for Kids',
            text: 'Chemistry is about what things are made of and how they change.',
          },
          { title: 'Biology for Kids', text: 'Biology is the study of living things.' },
          {
            title: 'Earth Science for Kids',
            text: 'Earth science is about the planet we live on and what it is made of.',
          },
          {
            title: 'Space Science for Kids',
            text: 'Space science starts with two things every child has already seen: the Sun and the Moon.',
          },
          {
            title: 'Environmental Science',
            text: 'Environmental science is about how living things and their surroundings depend on each other.',
          },
        ],
        note: 'We teach what is well established about space and say plainly when something is still unknown. Children are not told that anything has been discovered when it has not.',
        band: false,
      },
      {
        eyebrow: 'Safe experiments',
        title: 'Science Experiments for Kids',
        lead: 'Low-risk activities using everyday materials, with an adult present.',
        id: 'experiments',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Seed Germination Observation',
            icon: '🌱',
            text: 'Put a soaked bean on damp cotton wool and draw what changes each day for a week.',
          },
          {
            title: 'Simple Shadow Activity',
            icon: '🌞',
            text: 'Shine a torch on a toy. Move it closer and further, and record the shadow size.',
          },
          {
            title: 'Floating and Sinking',
            icon: '💧',
            text: 'Predict which of a coin, a cork and a grape will float, then test all three.',
          },
          {
            title: 'Dissolving Observation',
            icon: '🥛',
            text: 'Stir sugar into cold water and into warm water. Which dissolves faster?',
          },
          {
            title: 'Magnet Exploration',
            icon: '🧲',
            text: 'Sort household objects into "magnet picks it up" and "it does not".',
          },
          {
            title: 'Water Absorption',
            icon: '🌼',
            text: 'Stand a white flower or celery stick in coloured water and watch the colour rise.',
          },
          {
            title: 'Simple Density Demonstration',
            icon: '⚖',
            text: 'Watch oil and water separate in a jar, and talk about why they do.',
          },
          {
            title: 'Plant Observation',
            icon: '📈',
            text: 'Measure a growing plant weekly and plot the heights on a chart.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Projects',
        title: 'Science Projects for Kids',
        lead: 'Longer pieces of work that build observation, creativity and the ability to explain.',
        id: 'projects',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Plant Growth Journal',
            text: 'Measure and draw one plant every week, then explain the pattern.',
          },
          {
            title: 'Solar System Model',
            text: 'Build the planets in order and present what makes each one different.',
          },
          {
            title: 'Weather Chart',
            text: 'Record the weather daily for a month and look for changes.',
          },
          {
            title: 'Water Cycle Poster',
            text: 'Draw evaporation, clouds and rain as one connected loop.',
          },
          {
            title: 'Food Chain Project',
            text: 'Build a chain starting with a plant and explain each arrow.',
          },
          {
            title: 'Simple Machine Model',
            text: 'Make a working lever, ramp or pulley from card and string.',
          },
          {
            title: 'Recycling Project',
            text: 'Sort household waste and present what can be used again.',
          },
          {
            title: 'States of Matter Poster',
            text: 'Show one substance as a solid, a liquid and a gas.',
          },
        ],
        note: 'Projects are judged on observation and explanation, not on how expensive the materials were. Card, paper and household objects are enough.',
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'What Happens?',
        lead: 'Five quick science questions. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'What happens when an ice cube is left in a warm place?',
            opts: [
              'It becomes hotter and stays solid',
              'It melts into water',
              'It becomes a rock',
              'It turns into soil',
            ],
            a: 'It melts into water',
            why: 'Heat from the warm room passes into the ice, and the ice melts into water. It is still the same substance — only the state has changed.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these is a living thing?',
            opts: ['A stone', 'A plastic chair', 'A mango tree', 'A steel spoon'],
            a: 'A mango tree',
            why: 'A mango tree grows, needs water and light, and produces seeds. Stones, chairs and spoons do none of those things.',
            hint: 'Choose one answer.',
          },
          {
            q: 'You push a toy car and it rolls forward. Which idea does this show?',
            opts: ['Force and motion', 'Photosynthesis', 'The water cycle', 'Digestion'],
            a: 'Force and motion',
            why: 'A push is a force, and the car changing position is motion. Force and motion is one of the first Physics ideas children meet.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Rain forms in clouds, falls, and later rises again as invisible vapour. What is this called?',
            opts: ['The food chain', 'The water cycle', 'A chemical reaction', 'Gravity'],
            a: 'The water cycle',
            why: 'That is the water cycle. Water evaporates, forms clouds, falls as rain, and the cycle repeats.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why do we have day and night?',
            opts: [
              'The Sun switches off',
              'Earth spins, so one side faces the Sun',
              'Clouds cover the Sun',
              'The Moon blocks the Sun',
            ],
            a: 'Earth spins, so one side faces the Sun',
            why: 'Earth spins on its axis. The side facing the Sun has day, and the side facing away has night.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Getting started',
        title: 'General Science for Beginners',
        lead: 'Your child does not need any background. Science begins with things they can already see.',
        id: 'beginners',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Plants and animals', text: 'Living things a child can see today.' },
          { title: 'Matter', text: 'Solid, liquid, gas — the first sorting task.' },
          { title: 'Light and sound', text: 'Shadows and vibrations, both easy to test.' },
          { title: 'Weather', text: 'Something new to record every single day.' },
          { title: 'Earth and space', text: 'The Sun and Moon are the easiest way in.' },
          {
            title: 'Not sure where to start?',
            text: 'A Free Demo helps us find the right level. Call 7036044555.',
          },
        ],
        note: 'A beginner can start with plants, animals, matter, light, sound, weather, Earth, space and everyday science. No formulas, no laboratory and no technical vocabulary. Just looking carefully and asking why.',
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Science Through Activities',
        lead: 'Science is hard to learn from words alone. Watching it happen makes the idea stick.',
        id: 'activity-learning',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Observation',
            text: 'Children report what they saw, not what they expected to see.',
          },
          {
            title: 'Questions',
            text: 'Every activity starts with a prediction, which is a question in disguise.',
          },
          {
            title: 'Hands-on activities',
            text: 'Holding, sorting, testing and measuring with their own hands.',
          },
          {
            title: 'Visual learning',
            text: 'Diagrams for the things too small, too big or too slow to see.',
          },
          {
            title: 'Safe demonstrations',
            text: 'When an activity is not suitable for children to do, the mentor shows it instead.',
          },
          {
            title: 'Real-life examples',
            text: "Every concept is tied to something in a child's own day.",
          },
          {
            title: 'Discussion',
            text: 'Explaining out loud is the real test of understanding.',
          },
          {
            title: 'Patience counts',
            text: 'Some results take a week to appear. Waiting is a skill too.',
          },
        ],
        note: 'Activity-based learning helps children understand concepts. It is not a promise of better marks, and we do not present it as one.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Science and Mathematics',
        lead: 'Science uses Maths as soon as a child starts recording what they observed.',
        id: 'science-maths',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Counting',
            text: 'How many seeds sprouted, how many legs, how many petals.',
          },
          {
            title: 'Measurement',
            text: 'Length, weight, time and temperature, always with the unit written down.',
          },
          {
            title: 'Graphs',
            text: 'Plotting plant height or daily temperature and reading the shape.',
          },
          {
            title: 'Patterns',
            text: 'Noticing that the same thing happens every time, or only sometimes.',
          },
          { title: 'Data', text: 'Keeping a neat table so results can be compared later.' },
          {
            title: 'Simple calculations',
            text: 'Averages, differences, and working out speed from distance and time.',
          },
        ],
        note: 'Children who enjoy the number side often also enjoy Abacus or Vedic Maths, which build calculation confidence. Ask us which suits your child.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Science and Problem Solving',
        lead: 'Every science question can be worked through in six moves. This is the method we use in every session.',
        id: 'problem-solving',
        kind: 'timeline',
        items: [
          { title: 'Observe', text: 'What is actually happening here?' },
          { title: 'Ask', text: 'What do I want to find out?' },
          { title: 'Think', text: 'What do I already know that might apply?' },
          { title: 'Try', text: 'Test it safely, changing one thing at a time.' },
          { title: 'Check', text: 'Does the result make sense? Did I predict correctly?' },
          {
            title: 'Explain',
            text: 'Say it out loud. If you can explain it, you understand it.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Science and Robotics',
        lead: 'A robot is science put to work. Everything it does depends on a concept from a science lesson.',
        id: 'science-robotics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Movement',
            text: 'Wheels, joints and gears — the same simple machines children meet in Physics.',
          },
          {
            title: 'Force',
            text: 'How hard a motor pushes decides what a robot can lift or move.',
          },
          {
            title: 'Energy',
            text: 'A battery stores energy, which becomes movement, light and sound.',
          },
          {
            title: 'Sensors',
            text: "A robot's way of observing — measuring light, distance or temperature.",
          },
          { title: 'Machines', text: 'Levers, pulleys and ramps appear inside real machines.' },
          {
            title: 'Problem solving',
            text: 'Build, test, fix, test again. The same loop as a science experiment.',
          },
        ],
        note: 'Robotics for kids is a separate, hands-on building programme rather than part of General Science. Ask us what is currently offered when you call.',
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Science and AI',
        lead: 'Modern science produces enormous amounts of information, and computers help make sense of it.',
        id: 'science-ai',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Data',
            text: 'Scientists record huge numbers of measurements. Computers help store and sort them.',
          },
          {
            title: 'Observation',
            text: 'Instruments can watch things that are too fast, too small or too far away for us.',
          },
          {
            title: 'Patterns',
            text: 'Finding patterns in data is something computers are genuinely good at.',
          },
          {
            title: 'Technology',
            text: 'Better tools have always led to better science, and still do.',
          },
          {
            title: 'Problem solving',
            text: 'The method does not change: ask, test, check, explain.',
          },
          {
            title: 'Checking still matters',
            text: 'AI tools can be wrong. Children learn to check what a tool tells them, exactly as they check an experiment.',
          },
        ],
        note: 'If your child is interested in how these tools work, AI for Kids is a separate programme covering it properly. We make no claims about careers or future job prospects — that is not something anyone can promise.',
        band: true,
      },
      {
        eyebrow: 'Everyday science',
        title: 'Real-Life Science',
        lead: 'Science is happening around your child all day. Most of it goes unnoticed.',
        id: 'real-life',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Cooking',
            icon: '🍳',
            text: 'Heat changes food permanently. A boiled egg cannot go back.',
          },
          {
            title: 'Plants',
            icon: '🌱',
            text: 'A pot on the balcony is a week-long science lesson.',
          },
          {
            title: 'Weather',
            icon: '🌤',
            text: 'Clouds, rain and wind, changing every single day.',
          },
          {
            title: 'Bicycles',
            icon: '🚴',
            text: 'Wheels, gears, brakes and balance in one machine.',
          },
          {
            title: 'Magnets',
            icon: '🧲',
            text: 'The fridge magnet is a real physics demonstration.',
          },
          {
            title: 'Shadows',
            icon: '🌞',
            text: 'They move and change size through the day, for a reason.',
          },
          { title: 'Sound', icon: '🔊', text: 'Every sound starts with something vibrating.' },
          {
            title: 'Water',
            icon: '💧',
            text: 'It dissolves so many things that it is called the universal solvent.',
          },
          {
            title: 'Electricity',
            icon: '⚡',
            text: 'Taught as a concept only, using small batteries. Never mains.',
          },
          { title: 'Animals', icon: '🐶', text: 'What a pet eats, and why that food suits it.' },
          {
            title: 'Space',
            icon: '🌚',
            text: 'The Moon changes shape through the month. Watch it and see.',
          },
          {
            title: 'Air',
            icon: '🌬',
            text: 'Invisible, but you can feel it and see what it moves.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Make Science Fun for Your Child',
        id: 'parent-guide',
        kind: 'pills',
        items: [
          'Ask questions instead of giving answers. "What do you think will happen?"',
          'Use everyday examples — the kettle, the fan, the fridge magnet, the rusty gate.',
          'Try safe activities with water, sugar, torches, magnets and seeds.',
          'Observe nature — ten minutes on a balcony or in a park counts.',
          'Build simple models from card and string. A working lever takes five minutes.',
          "Read science stories at your child's reading level.",
          'Watch age-appropriate science videos together, and talk about them afterwards.',
          'Encourage curiosity even when the question has no quick answer.',
          'Let children explain their ideas fully before you correct anything.',
        ],
        band: true,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'General Science classes in Hyderabad',
          'General Science classes for kids in Hyderabad',
          'Science classes for kids in Hyderabad',
          'Science learning for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: false,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for a General Science session at Brolly Juniors.',
      items: [
        {
          title: 'Ask a Question',
          text: 'The session opens with a question, such as "why do some things float and others sink?"',
        },
        {
          title: 'Learn the Concept',
          text: 'The idea is explained in plain words, with a drawing or an object in hand.',
        },
        {
          title: 'See an Everyday Example',
          text: 'The mentor connects it to something the child already knows.',
        },
        {
          title: 'Try a Safe Activity',
          text: 'Children test it with everyday materials, predicting before they start.',
        },
        {
          title: 'Observe the Result',
          text: 'What actually happened? Not what should have happened — what did.',
        },
        {
          title: 'Explain What We Learned',
          text: "The concept is restated in the children's own words before the session ends.",
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Science Activities for Kids',
      lead: 'Games and sorting tasks used during General Science sessions.',
      items: [
        {
          title: 'Science Mystery',
          icon: '🕵',
          text: 'Three clues, one answer. Work out what is being described.',
        },
        {
          title: 'Living or Non-Living?',
          icon: '🌿',
          text: 'Sort everyday objects, and argue about the tricky ones.',
        },
        {
          title: 'Sink or Float?',
          icon: '💧',
          text: 'Predict first, then drop each object into water and check.',
        },
        {
          title: 'Shadow Challenge',
          icon: '🌞',
          text: 'Move a torch and record how the shadow changes size.',
        },
        {
          title: 'Magnet Hunt',
          icon: '🧲',
          text: 'Find five things a magnet picks up and five it does not.',
        },
        {
          title: 'Weather Journal',
          icon: '🌤',
          text: 'Record the weather every day for a week and look for a pattern.',
        },
        {
          title: 'Plant Detective',
          icon: '🍃',
          text: 'Find and name the parts on a real plant.',
        },
        {
          title: 'Material Match',
          icon: '🃏',
          text: 'Match each object to what it is made of, and say why.',
        },
        { title: 'Planet Match', icon: '🪐', text: 'Put the planets in order from the Sun.' },
        {
          title: 'Simple Science Quiz',
          icon: '🎯',
          text: 'Quick questions to check what the group remembers.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. The scientific term comes once the idea is clear.',
        },
        {
          title: 'Concept-focused learning',
          icon: '💡',
          text: 'Understanding is the goal, not memorising a definition.',
        },
        {
          title: 'Activity-based learning',
          icon: '🧪',
          text: 'Children test ideas themselves, safely, instead of only hearing about them.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: "Every concept is tied to something in a child's own day.",
        },
        {
          title: 'Question-based learning',
          icon: '❓',
          text: 'Sessions start with a question, not a definition.',
        },
      ],
      cols: 3,
      note: 'Ask us anything about level, format, safety or fit before you decide. Call 7036044555.',
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'General Science class fees',
    },
    trial: {
      title: 'Let Your Child Explore the World of Science',
      paras: [
        'A Free Demo is one short session where your child tries a safe science activity and you see how the teaching works. Book a slot, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'Every "why?" your child asks already belongs to one of the sciences. Let them explore it through questions, observation, simple concepts, activities and safe learning experiences — and find out which part of it they love. Start with a Free Demo and see how they respond.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child explores one science concept with a safe activity',
        'You see how ideas are explained in simple language',
        'We discuss which areas of science your child responds to',
        'You ask about formats, timings, safety and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support Science Learning at Home',
      lead: 'You do not need to know any science. You mainly need to ask one good question.',
      items: [
        {
          title: 'Ask "why?"',
          text: 'This one question does more than any explanation you could give.',
        },
        {
          title: 'Observe everyday things',
          text: 'Steam from a pan, rust on a gate, ants on a wall.',
        },
        {
          title: 'Try safe activities',
          text: 'Torches, magnets, water, sugar and seeds are enough for months.',
        },
        {
          title: 'Look at plants and animals',
          text: 'From a safe distance, without touching or catching anything.',
        },
        {
          title: 'Talk about weather',
          text: 'Predict tomorrow together, then check whether you were right.',
        },
        {
          title: 'Watch shadows change',
          text: 'Mark one on the floor in the morning and check it at noon.',
        },
        {
          title: 'Discuss simple machines',
          text: 'The door handle, the scissors, the see-saw at the park.',
        },
        {
          title: 'Let them explain',
          text: 'Ask what they noticed before you say what you noticed.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'General Science Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Science Classes for Kids Near Me?',
      lead: 'If you are searching for general science classes for kids near me, science classes for kids near me, science classes near me or kids science classes near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'How AI tools work, how to use them thoughtfully, and how to check what they tell you.',
        to: '/ai-for-kids',
      },
      {
        icon: '💻',
        title: 'Python for Kids',
        text: 'Coding with Python. A natural next step for children who enjoy the methodical side of science.',
        to: '/python-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation, useful for the measurement side of science.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods, helpful once science involves data and graphs.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Safe, confident use of everyday digital tools, including looking things up properly.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Explaining ideas clearly out loud — exactly what we ask children to do after every activity.',
        to: '/junior-skills/public-speaking',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'General Science is the broad introduction. These are the programmes parents most often ask about alongside it.',
    faqTitle: 'General Science Classes for Kids: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are General Science classes for kids?',
        a: 'They are broad introductory science lessons covering several areas at once. Children learn basic Physics, Chemistry and Biology alongside Earth science, space and the environment, using everyday examples, observation and safe hands-on activities.',
      },
      {
        q: 'Why should children learn General Science?',
        a: 'Science builds curiosity, observation, scientific thinking and problem solving, and explains the everyday world — why ice melts, why a seed sprouts, why the Moon changes shape. A broad start also helps you find out which areas your child actually enjoys.',
      },
      {
        q: 'What age can children start learning Science?',
        a: 'Children can begin from around 6 years, sorting living and non-living things, watching shadows and testing magnets. Formulas and equations come much later. Readiness and school level matter more than age alone. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'What topics are taught in General Science classes?',
        a: 'Possible topics include living things, plants, animals, human body basics, matter, materials, force and motion, light, sound, heat, energy, simple changes, Earth, weather, environment and the solar system. The exact topics depend on age and school level.',
      },
      {
        q: 'Is General Science suitable for beginners?',
        a: 'Yes. It is designed as the starting point. A beginner works with things they can already see — a plant, a shadow, an ice cube — with no background knowledge needed.',
      },
      {
        q: 'Do children learn Physics basics?',
        a: 'Yes. Force and motion, push and pull, gravity, light, sound, heat, energy and simple machines are all covered at an introductory level, using everyday examples such as pushing a toy car.',
      },
      {
        q: 'Do children learn Chemistry basics?',
        a: 'Yes. Matter, solids, liquids and gases, materials, mixtures, first ideas about elements, and simple changes such as melting, dissolving and rusting, all through safe everyday activities.',
      },
      {
        q: 'Do children learn Biology basics?',
        a: 'Yes. Plants, animals, humans, cells, life cycles, habitats, food chains and nature are covered at an age-appropriate level.',
      },
      {
        q: 'Do kids learn about Earth and Space?',
        a: 'Yes. Earth science covers rocks, soil, water, air, weather, seasons and natural resources. Space science covers the Sun, Moon, Earth, planets, stars, the solar system, day and night, and space exploration.',
      },
      {
        q: 'Are Science activities included?',
        a: 'Yes. Sessions use sorting games, sink-or-float tests, shadow challenges, magnet hunts, weather journals and planet matching, alongside longer projects such as a plant growth journal or a solar system model.',
      },
      {
        q: 'Are Science experiments safe for children?',
        a: "The activities we use are chosen to be low-risk and are supervised. We never use fire, flames, explosives, toxic chemicals, concentrated acids or bases, or mains electricity. Electricity activities use small batteries only. We do not handle dangerous biological samples, culture microorganisms, handle wild animals, or mix household cleaning products. Where an activity is not suitable for a child's age, we demonstrate it or explain it instead.",
      },
      {
        q: 'Do children learn through real-life examples?',
        a: 'Yes, and this is the main teaching method. Cooking, cycling, weather, magnets, shadows, water and plants all appear as examples, because a concept tied to something familiar is far easier to remember.',
      },
      {
        q: 'Is General Science connected to Mathematics and Robotics?',
        a: 'Yes. Science uses Maths whenever children count, measure, graph or compare data. It connects to Robotics through movement, force, energy, sensors and machines. Robotics is a separate hands-on building programme — ask us what is currently offered.',
      },
      {
        q: 'How is General Science different from Physics, Chemistry, Biology, Maths and Robotics classes?',
        a: 'General Science is the broad introduction covering all the main areas at once. Physics, Chemistry and Biology are separate, deeper programmes for children ready to go further in one area, usually once school starts splitting the subjects. Maths programmes such as Abacus and Vedic Maths build number and calculation skills. Robotics is about building and programming machines.',
      },
      {
        q: 'Should my child take General Science or a single subject?',
        a: 'General Science suits younger children and anyone who has not yet found a favourite area. A single subject suits a child whose school has already split the subjects, or who is clearly drawn to one of them. If you are unsure, a Free Demo is the quickest way to decide. Call 7036044555.',
      },
      {
        q: 'What are the fees for General Science classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and school class, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'General Science in Short',
    quickAnswers: [
      {
        q: 'What is General Science for kids?',
        a: 'A broad introduction to science, covering living things, matter, energy, Earth, space and everyday science in one programme.',
      },
      {
        q: 'Why is General Science important for children?',
        a: 'It builds curiosity, observation, scientific thinking and problem solving, and helps a child discover which area of science they enjoy.',
      },
      {
        q: 'What do kids learn in General Science classes?',
        a: 'Basic Physics, Chemistry and Biology, plus Earth science, weather, the environment and the solar system.',
      },
      {
        q: 'What Science activities can kids do safely?',
        a: 'Seed germination, shadow tests, sink or float, dissolving comparisons, magnet sorting and coloured-water absorption — all supervised.',
      },
      {
        q: 'How can children learn Science easily?',
        a: 'Start with everyday examples, predict before testing, observe carefully, and explain what they noticed in their own words.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are General Science classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad learn basic Physics, Chemistry, Biology, Earth and space science together, through everyday examples and safe activities. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn Science in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is General Science suitable for young children?"',
        a: 'Yes. It is designed as the starting point, using plants, shadows, magnets and weather rather than formulas. Children from around 6 years can begin.',
      },
      {
        q: '"What do kids learn in General Science classes?"',
        a: 'Living things, matter and materials, force and motion, light, sound, heat, energy, Earth, weather, the environment and the solar system.',
      },
      {
        q: '"What Science activities can children do?"',
        a: 'Growing a bean on damp cotton wool, testing what floats, comparing how fast sugar dissolves, sorting magnetic objects and keeping a weather journal.',
      },
      {
        q: '"Science classes for kids near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     History Tuition — /tuitions/history
     ================================================================== */
  '/tuitions/history': {
    h1: 'History tuition in Hyderabad that teaches why it happened, not just when.',
    lead: 'Timelines a student can actually hold, cause-and-consequence reasoning, source questions and answers written to the marking scheme.',
    heroPills: ['Ancient History', 'Medieval History', 'Modern History', 'Indian History'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 6–10', 'Batches of eight'],
    hero: {
      title: 'What are History Classes for Kids?',
      paras: [
        'Children in Hyderabad walk past the Charminar and Golconda Fort without always knowing what they are looking at. History is the subject that turns those buildings back into stories about real people who once lived here.',
        'History classes for kids are lessons about people, places and events from the past, taught in language a child can follow. Children learn through stories, timelines and maps, covering Indian and World History, ancient civilizations, important people and major events, and how the past connects to the present.',
      ],
    },
    facts: [
      { strong: 'Classes 6–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Timelines', span: 'Built, not given' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What History Learning Looks Like',
      lead: 'Six things children do in a History session at Brolly Juniors.',
      items: [
        {
          title: 'Learn Through Stories',
          icon: '📜',
          text: 'A story about a real person is easier to remember than a list of dates.',
        },
        {
          title: 'Explore Historical Events',
          icon: '🎭',
          text: 'What happened, why it happened, and what changed afterwards.',
        },
        {
          title: 'Understand Timelines',
          icon: '📅',
          text: 'Putting events in order is the skill that makes everything else make sense.',
        },
        {
          title: 'Discover Great Civilizations',
          icon: '🏛',
          text: 'The Indus Valley, Egypt, Greece and Rome — how people lived long ago.',
        },
        {
          title: 'Explore Maps and Places',
          icon: '🗺',
          text: 'Where something happened often explains why it happened.',
        },
        {
          title: 'Build Critical Thinking',
          icon: '🧠',
          text: 'How do we know this? What evidence is there? Could there be another view?',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is History for Kids?',
      lead: 'History is the study of people, places and events from the past.',
      paras: [
        'A simple way to explain it: your grandparents grew up in a world without mobile phones. Their grandparents grew up without televisions. Go back far enough and people were building cities with no electricity at all. History is the study of all of that — and of how one thing led to the next.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        {
          tag: 'People',
          text: 'Rulers, farmers, traders, builders, writers, scientists — ordinary people as well as famous ones.',
        },
        {
          tag: 'Places',
          text: 'Cities, kingdoms, rivers and routes. Where people lived shaped how they lived.',
        },
        {
          tag: 'Events',
          text: 'Things that happened and mattered — a city being built, a discovery, a movement for change.',
        },
        { tag: 'Cultures', text: 'Languages, food, clothes, music, festivals and beliefs.' },
        {
          tag: 'Civilizations',
          text: 'Large, organised societies that lasted a long time and left things behind.',
        },
        {
          tag: 'Changes over time',
          text: 'The heart of the subject. What changed, and what caused the change?',
        },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn History?',
      lead: 'Because History is the school subject that is mostly made of stories, and children are already good at stories.',
      items: [
        {
          title: 'Understanding the past',
          text: 'Knowing why a city, a language or a festival exists in the form it does today.',
        },
        {
          title: 'Learning from events',
          text: 'People have faced difficult choices before. Looking at what followed is useful.',
        },
        {
          title: 'Curiosity',
          text: 'One good question about an old building can lead to a whole term of interest.',
        },
        {
          title: 'Critical thinking',
          text: 'How do we know this happened? Who wrote it down, and what might they have left out?',
        },
        {
          title: 'Cultural awareness',
          text: 'Meeting many ways of living, and learning to describe them without judging them.',
        },
        {
          title: 'Connecting past and present',
          text: 'Noticing that the road, the bridge and the market all have a reason for being there.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or school ranks. We focus on understanding, clear explanations and honest handling of evidence.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of History Learning',
      lead: 'Ten skills children practise while exploring History.',
      items: [
        {
          title: 'Critical Thinking',
          icon: '🧠',
          text: 'Weighing evidence instead of accepting the first version they hear.',
        },
        {
          title: 'Curiosity',
          icon: '❓',
          text: 'Wanting to know what came before, and what came after.',
        },
        {
          title: 'Memory',
          icon: '🧩',
          text: 'Remembering is easier when facts sit inside a story and a sequence.',
        },
        {
          title: 'Reading Skills',
          icon: '📖',
          text: 'History gives children a real reason to read longer passages.',
        },
        {
          title: 'Story Understanding',
          icon: '📜',
          text: 'Following characters, motives and consequences across a long account.',
        },
        {
          title: 'Cultural Awareness',
          icon: '🌍',
          text: 'Understanding that people have lived well in many different ways.',
        },
        {
          title: 'Questioning',
          icon: '💬',
          text: 'Learning to ask "how do we know that?" as a normal habit.',
        },
        {
          title: 'Research Skills',
          icon: '🔍',
          text: 'Finding information, checking it, and saying where it came from.',
        },
        {
          title: 'Communication',
          icon: '🎤',
          text: 'Retelling an event clearly, in the right order, to someone else.',
        },
        {
          title: 'Connecting Past and Present',
          icon: '🔗',
          text: 'Seeing today as one point on a very long line.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible History areas for children. The mix depends on your child's age and school level.",
      items: [
        'Ancient History',
        'Medieval History',
        'Modern History',
        'Indian History',
        'World History',
        'Civilizations',
        'Historical people',
        'Important events',
        'Culture',
        'Historical places',
        'Timelines',
        'Maps',
      ],
      note: 'Topics are chosen to suit the child. A six-year-old may work on "then and now" using family photographs, while an older child studies sources and cause and effect. Contact Brolly Juniors for current details.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'History Curriculum',
      lead: 'A suggested learning progression, from family stories to school-level historical analysis.',
      label: 'History Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation',
          title: 'Foundation History',
          intro: 'History starts with the past a child can actually reach — their own family.',
          bullets: [
            'My family and the past',
            'Then and now',
            'Important people',
            'Simple timelines',
            'Historical places',
            'Stories from the past',
          ],
        },
        {
          key: 'stage-2',
          label: 'Basic',
          title: 'Basic History',
          intro: 'The wider world arrives, still mostly through stories and pictures.',
          bullets: [
            'Ancient civilizations',
            'Indian History basics',
            'Important rulers and leaders',
            'Historical events',
            'Culture and traditions',
            'Maps and timelines',
          ],
        },
        {
          key: 'stage-3',
          label: 'Intermediate',
          title: 'Intermediate History',
          intro: 'Periods are named and ordered, and children start looking at where evidence comes from.',
          bullets: [
            'Ancient India',
            'Medieval India',
            'Modern India',
            'World civilizations',
            'Major historical events',
            'Historical sources',
          ],
        },
        {
          key: 'stage-4',
          label: 'Advanced School',
          title: 'Advanced School History',
          intro: 'Analysis matters as much as recall: causes, effects and different viewpoints.',
          bullets: [
            'Political and social change',
            'Major world events',
            'The Indian freedom movement',
            'The World Wars',
            'Historical analysis',
            'Cause and effect',
          ],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Ancient History', text: 'The earliest cities, kingdoms and ways of life.' },
          {
            title: 'Medieval History',
            text: 'The long middle stretch, with new kingdoms and new ideas.',
          },
          { title: 'Modern History', text: 'The centuries closest to our own.' },
          {
            title: 'Indian History',
            text: 'The story of the subcontinent, from ancient times to today.',
          },
          { title: 'World History', text: 'Major civilizations and events beyond India.' },
          {
            title: 'Civilizations',
            text: 'How large societies were organised and what they built.',
          },
          {
            title: 'Historical people',
            text: 'Who they were, what they did, why they are remembered.',
          },
          { title: 'Important events', text: 'What happened, and what changed afterwards.' },
          {
            title: 'Culture',
            text: 'Languages, food, clothing, art, architecture and festivals.',
          },
          {
            title: 'Historical places',
            text: 'Monuments, forts and cities, including some in Hyderabad.',
          },
          { title: 'Timelines', text: 'Putting events in the right order.' },
          { title: 'Maps', text: 'Seeing where things happened and why location mattered.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise History Learning',
        lead: 'A general guide to what History can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '6–8 Years',
            text: 'Family photographs, "then and now" comparisons, stories about people from the past, and a first simple timeline. Almost no dates.',
          },
          {
            title: '9–11 Years',
            text: 'Ancient civilizations, well-known rulers and leaders, monuments and festivals, and reading simple maps alongside timelines.',
          },
          {
            title: '12–14 Years',
            text: 'Ancient, medieval and modern periods in order, world civilizations, and the first work on historical sources and evidence.',
          },
          {
            title: '14+ Years',
            text: 'Social and political change, the Indian freedom movement, the World Wars, cause and effect, and comparing different accounts of the same event.',
          },
        ],
        note: 'These are general age guides for History learning, not fixed Brolly Juniors batch groups. Readiness and current school level matter more than age alone. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Indian History for Kids',
        lead: "India's story is very long. We break it into pieces a child can hold, and we go easy on the dates.",
        id: 'indian-history',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Ancient India',
            text: 'The Indus Valley cities with their planned streets and drains, and the later kingdoms and empires that followed.',
          },
          {
            title: 'Medieval India',
            text: 'New kingdoms across the north and south, new styles of building, and busy trade with distant places.',
          },
          {
            title: 'Modern India',
            text: 'European trading companies arriving, colonial rule, and the long movement that led to independence in 1947.',
          },
          {
            title: 'Indian culture',
            text: 'Many languages, many festivals, many kinds of music, food and clothing across different regions.',
          },
          {
            title: 'Historical places',
            text: 'Forts, temples, mosques, tombs and stepwells — buildings that are also historical evidence.',
          },
          {
            title: 'The freedom movement',
            text: 'Introduced as a movement involving very many people over many decades, not as a single story with one hero.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Close to home',
        title: 'History on Your Doorstep in Hyderabad',
        lead: 'One of the advantages of learning History in Hyderabad is that some of it is a short drive away.',
        id: 'hyderabad-history',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Charminar',
            text: 'Built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, as the new city of Hyderabad was laid out.',
          },
          {
            title: 'Golconda Fort',
            text: 'A hill fort that became the Qutb Shahi capital before the move to Hyderabad. Known for its water system and its acoustics.',
          },
          {
            title: 'Qutb Shahi Tombs',
            text: 'A group of tombs of the Qutb Shahi rulers, near Golconda. A whole dynasty in one place.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'World History for Kids',
        lead: 'Broad themes first. Names and dates can come later.',
        id: 'world-history',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Ancient civilizations',
            text: 'The first large, organised societies, usually growing up beside big rivers.',
          },
          {
            title: 'Egypt',
            text: 'Life along the Nile, the pyramids, and writing in pictures called hieroglyphs.',
          },
          {
            title: 'Greece',
            text: 'City-states, early ideas about citizens voting, theatre, and the first Olympic games.',
          },
          {
            title: 'Rome',
            text: 'A city that grew into a vast empire, famous for roads, aqueducts and law.',
          },
          {
            title: 'Exploration',
            text: 'Long sea voyages that connected distant parts of the world, and changed trade for everyone.',
          },
          {
            title: 'Industrial Revolution',
            text: 'Machines and factories changed how things were made and where people lived and worked.',
          },
          {
            title: 'Major world events',
            text: 'Turning points that affected many countries at once.',
          },
          {
            title: 'The World Wars',
            text: "Two large conflicts in the twentieth century, explained at a level suited to the child's age.",
          },
        ],
        note: 'We introduce difficult events such as wars carefully and without graphic detail, focusing on causes, consequences and the effect on ordinary people.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Ancient Civilizations',
        lead: 'For each civilization we ask the same four questions. That makes them easy to compare.',
        id: 'civilizations',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Indus Valley Civilization',
            text: 'Where: along the Indus river and nearby areas, including sites such as Harappa and Mohenjo-daro.',
          },
          { title: 'Ancient Egypt', text: 'Where: along the river Nile in north-east Africa.' },
          { title: 'Ancient Greece', text: 'Where: the Greek mainland and many islands.' },
          {
            title: 'Ancient Rome',
            text: 'Where: starting from the city of Rome in Italy, later spreading widely.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Important Historical People',
        lead: 'We look at categories of people rather than a fixed list of heroes, and we ask the same four questions each time.',
        id: 'people',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Leaders',
            text: 'Rulers and heads of movements, and the decisions they made.',
          },
          { title: 'Scientists', text: 'People who found out something new about the world.' },
          {
            title: 'Explorers',
            text: 'People who travelled far and brought back knowledge — and sometimes caused great disruption.',
          },
          { title: 'Reformers', text: 'People who worked to change unfair rules or practices.' },
          { title: 'Writers', text: 'People whose words shaped how others thought.' },
          {
            title: 'Artists',
            text: 'People who left behind buildings, paintings, music and poetry.',
          },
          {
            title: 'Social leaders',
            text: 'People who organised communities and spoke for those who were not heard.',
          },
          {
            title: 'A local example',
            text: 'The poet and independence-movement figure Sarojini Naidu was born in Hyderabad in 1879.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Historical Events',
        lead: 'Any event, big or small, can be understood using the same six questions.',
        id: 'events',
        kind: 'timeline',
        items: [
          { title: 'What happened?', text: 'Describe the event plainly, without opinion.' },
          {
            title: 'When did it happen?',
            text: 'Place it on the timeline. Before or after what else?',
          },
          {
            title: 'Where did it happen?',
            text: 'Find it on a map. Location often explains a great deal.',
          },
          { title: 'Who was involved?', text: 'Not only the leaders — who else was affected?' },
          { title: 'Why did it happen?', text: 'The causes. There is usually more than one.' },
          {
            title: 'What changed afterward?',
            text: 'The effects. This is where History stops being a list and starts being a story.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Interactive',
        title: 'Timelines for Kids',
        lead: 'A timeline is just a line with events placed in the order they happened. Tap a period to see what it covers.',
        id: 'timelines',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Ancient',
            text: 'The earliest cities and kingdoms. People learned to farm, built the first large settlements, invented writing, and traded over long distances.',
          },
          {
            title: 'Medieval',
            text: 'The long middle stretch. New kingdoms rose across many parts of the world, trade routes carried goods and ideas between them, and great forts, temples, mosques and cathedrals were built.',
          },
          {
            title: 'Modern',
            text: 'Long sea voyages linked distant continents. Machines and factories changed work. Empires grew and later ended, and many countries, including India in 1947, became independent.',
          },
          {
            title: 'Today',
            text: 'The present is simply the newest point on the line. Everything around your child — the city, the languages spoken at home, the festivals, the school — arrived here through the periods before it.',
          },
        ],
        note: 'Historians draw the boundaries between these periods in different ways, and the dates vary from region to region. We use them as a rough guide to keep events in order, not as exact lines.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Maps and History',
        lead: 'A timeline answers when. A map answers where — and where usually explains a lot of the why.',
        id: 'maps',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Locations',
            text: 'Finding the place on a map before hearing the story makes the story stick.',
          },
          {
            title: 'Ancient regions',
            text: "Old names and boundaries are often different from today's. Comparing the two is a useful exercise.",
          },
          { title: 'Kingdoms', text: "Seeing how a kingdom's area grew or shrank over time." },
          {
            title: 'Trade routes',
            text: 'Goods, money and ideas all travelled along the same roads and sea routes.',
          },
          {
            title: 'Migration',
            text: 'People have always moved, usually for work, safety, water or land.',
          },
          {
            title: 'Historical places',
            text: 'Marking monuments on a map turns a list into a journey.',
          },
        ],
        note: 'A simple example children enjoy: most early cities grew beside rivers. Once a child notices that on a map, they can predict where to look for the next one.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Culture and Heritage',
        lead: 'Culture is how people live — and it is part of History as much as any battle or treaty.',
        id: 'culture',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Languages',
            text: 'Words travel. Many everyday words came from other languages long ago.',
          },
          {
            title: 'Food',
            text: 'Dishes carry history. Ingredients arrived through trade from far away.',
          },
          {
            title: 'Clothing',
            text: 'What people wore depended on climate, work and available materials.',
          },
          {
            title: 'Architecture',
            text: 'Buildings show what people valued and what they knew how to build.',
          },
          {
            title: 'Art',
            text: 'Paintings, carvings and crafts are evidence as well as decoration.',
          },
          {
            title: 'Traditions',
            text: 'Practices passed down, sometimes for many generations.',
          },
          { title: 'Festivals', text: 'Many mark seasons, harvests or remembered events.' },
          {
            title: 'Historical places',
            text: 'Heritage sites belong to everyone, and looking after them matters.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Projects',
        title: 'History Projects for Kids',
        lead: 'Longer pieces of work that build research and presentation skills.',
        id: 'projects',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Family Timeline',
            text: 'Interview relatives and place family events in order. The easiest project to start with.',
          },
          {
            title: 'Historical Place Poster',
            text: 'Pick a monument, research it, and present what is known and what is uncertain.',
          },
          {
            title: 'Civilization Project',
            text: 'Answer the four questions — where, how, what they built, what we learn.',
          },
          {
            title: 'Historical Figure Profile',
            text: 'Who, what, why remembered, and what is debated about them.',
          },
          {
            title: 'Then-and-Now Comparison',
            text: 'One topic, two time periods, side by side with pictures.',
          },
          {
            title: 'History Timeline',
            text: 'A long paper timeline with events, drawings and short captions.',
          },
          {
            title: 'Map-Based History Project',
            text: 'Plot places, routes or kingdom boundaries on a map and explain the pattern.',
          },
          {
            title: 'Always name the source',
            text: 'Every project ends with where the information came from. That habit starts early.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Try it now',
        title: 'When Did It Happen?',
        lead: 'Five quick History questions. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'Which comes first on a timeline?',
            opts: ['Present day', 'Ancient History', 'Neither', 'Both together'],
            a: 'Ancient History',
            why: 'Ancient History comes first. A timeline runs from the earliest events on the left to the present day on the right.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Put these in order: Medieval, Ancient, Modern. Which order is correct?',
            opts: [
              'Modern, Medieval, Ancient',
              'Ancient, Medieval, Modern',
              'Medieval, Ancient, Modern',
              'Ancient, Modern, Medieval',
            ],
            a: 'Ancient, Medieval, Modern',
            why: 'Ancient, then Medieval, then Modern. Historians draw the boundaries between them differently, but the order never changes.',
            hint: 'Choose one answer.',
          },
          {
            q: 'The Indus Valley Civilization is known for its cities. What were those cities famous for?',
            opts: [
              'Tall glass towers',
              'Planned streets and covered drains',
              'Underground railways',
              'Steam factories',
            ],
            a: 'Planned streets and covered drains',
            why: 'Indus Valley cities such as Harappa and Mohenjo-daro had carefully planned streets and covered drainage, built from brick. Their writing has still not been deciphered.',
            hint: 'Choose one answer.',
          },
          {
            q: 'The Charminar in Hyderabad was built in 1591. Which period does that belong to?',
            opts: ['Ancient', 'Medieval', 'Modern', 'Today'],
            a: 'Medieval',
            why: '1591 falls in the medieval period. It was built by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, as the new city of Hyderabad was laid out.',
            hint: 'Choose one answer.',
          },
          {
            q: "A history book says a king was 'the greatest ruler who ever lived'. What kind of statement is that?",
            opts: ['A proven fact', 'An opinion or interpretation', 'A date', 'A map'],
            a: 'An opinion or interpretation',
            why: "That is an opinion, not a fact. Facts can be checked against evidence. Words like 'greatest' are judgements, and different historians judge differently. Spotting the difference is a key History skill.",
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Getting started',
        title: 'History for Beginners',
        lead: 'Your child does not need to know a single date to start. History begins with their own family.',
        id: 'beginners',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Then and now',
            text: 'How your grandparents travelled, cooked and studied.',
          },
          { title: 'Stories from the past', text: 'Real accounts of real people, told well.' },
          { title: 'People', text: 'Who they were and what they did.' },
          { title: 'Places', text: 'Starting with monuments in and around Hyderabad.' },
          {
            title: 'Simple timelines',
            text: 'Four or five events in the right order is plenty at first.',
          },
          {
            title: 'Historical objects',
            text: 'An old coin, an old photograph, an old letter.',
          },
          {
            title: 'Important events',
            text: 'One event, understood properly, beats ten skimmed.',
          },
          {
            title: 'Not sure where to start?',
            text: 'A Free Demo helps us find the right level. Call 7036044555.',
          },
        ],
        note: 'A beginner can start with "then and now", stories from the past, people, places, a simple timeline, old objects and a few important events. Nothing to memorise. Just noticing that things used to be different, and asking why.',
        band: true,
      },
      {
        eyebrow: 'Method',
        title: 'Learning History Through Stories',
        lead: 'Children remember stories far better than lists. So we teach History as stories — true ones.',
        id: 'stories',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Historical stories',
            text: 'Real events, told with a beginning, a middle and an end.',
          },
          { title: 'Characters', text: 'Real people with real reasons for what they did.' },
          {
            title: 'Places',
            text: 'Described well enough that a child can picture standing there.',
          },
          { title: 'Events', text: 'The turning point the whole story leads to.' },
          { title: 'Cause and effect', text: 'Why it happened, and what followed.' },
          {
            title: 'Simple timelines',
            text: 'The story placed on the line, so it connects to everything else.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'History and Geography',
        lead: 'History asks when and why. Geography asks where. Together they explain far more than either does alone.',
        id: 'geography',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Where people lived',
            text: 'Water, farmland and safety decided where settlements began.',
          },
          {
            title: 'Why cities developed',
            text: 'Ports, river crossings and crossroads grew into towns for practical reasons.',
          },
          {
            title: 'Trade routes',
            text: 'Routes carried goods, money, languages and ideas in both directions.',
          },
          {
            title: 'Rivers',
            text: 'Most early civilizations grew beside one. Water meant food.',
          },
          {
            title: 'Mountains',
            text: 'They protected some regions and cut others off from their neighbours.',
          },
          {
            title: 'Migration',
            text: 'People moved for work, water, land or safety, and took their culture with them.',
          },
        ],
        note: 'Geography classes for kids are a separate programme with a different focus — landforms, climate, resources and map skills in their own right, rather than as background to historical events. Ask us what is currently offered when you call.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'History and Civics',
        lead: 'History explains how the rules we live under today came to exist.',
        id: 'civics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Society',
            text: 'How communities have organised themselves in different times and places.',
          },
          {
            title: 'Government',
            text: 'Many forms have existed. Children learn to describe them, not to rank them.',
          },
          {
            title: 'Citizenship',
            text: 'What it has meant to belong to a place, and how that idea has changed.',
          },
          {
            title: 'Rights',
            text: 'Many rights people have today were argued for over long periods.',
          },
          {
            title: 'Responsibilities',
            text: 'What communities have expected of their members.',
          },
          {
            title: 'Changes in society',
            text: 'How and why the rules of a society shift over time.',
          },
        ],
        note: 'Civics classes for kids are a separate programme focused on how government and citizenship work today. Ask us what is currently offered when you call.',
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'History and Economics',
        lead: 'A surprising amount of History comes down to a simple question: who had what, and who wanted it?',
        id: 'economics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Trade',
            text: 'Goods travelling long distances shaped cities, languages and even wars.',
          },
          {
            title: 'Money',
            text: 'From barter to coins to notes to screens. Old coins are historical evidence too.',
          },
          {
            title: 'Jobs',
            text: 'What people did for a living, and how machines changed that.',
          },
          {
            title: 'Resources',
            text: 'Land, water, metals and spices. Access to them changed the fate of regions.',
          },
          {
            title: 'Markets',
            text: 'Places where people met to exchange things — and to exchange news.',
          },
          {
            title: 'Economic change',
            text: 'Why some places grew rich and others did not, at different times.',
          },
        ],
        note: 'Economics classes for kids are a separate programme covering money, needs and wants, and how an economy works today. Ask us what is currently offered when you call.',
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'History and Critical Thinking',
        lead: 'History is the subject where children learn to ask "how do we know that?"',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'What happened? Describe it plainly, before any opinion.',
          'Why did it happen? Usually more than one cause.',
          'Who was affected? Including people whose names were never written down.',
          'What changed? The effects are often the most interesting part.',
          'What evidence do we have? Buildings, coins, letters, records, objects.',
          'Could there be different viewpoints? Two people at the same event often describe it differently.',
        ],
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'History and Problem Solving',
        lead: 'Historical situations are real problems that real people had to solve, and we can look at how those choices turned out.',
        id: 'problem-solving',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Problems', text: 'A drought, a crowded city, a broken trade route.' },
          { title: 'Choices', text: 'What options did people actually have at the time?' },
          { title: 'Consequences', text: 'What followed the choice they made?' },
          { title: 'Cause and effect', text: 'Tracing the chain from decision to result.' },
          {
            title: 'Different solutions',
            text: 'What else might have been tried, given what they knew then?',
          },
          {
            title: 'Judging fairly',
            text: 'We judge past choices by what people knew at the time, not only by what we know now.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Everyday History',
        title: 'Real-Life History',
        lead: 'History is not only in books. Most of it is sitting in plain sight.',
        id: 'real-life',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Historical buildings',
            icon: '🏛',
            text: 'Forts, palaces, temples and mosques around Hyderabad.',
          },
          {
            title: 'Museums',
            icon: '🎓',
            text: 'Objects that survived, with the story of where they came from.',
          },
          {
            title: 'Monuments',
            icon: '🗼',
            text: 'Built to be remembered. Worth asking who built them, and why.',
          },
          {
            title: 'Old photographs',
            icon: '📷',
            text: 'Family albums are primary sources. So are old street photographs.',
          },
          {
            title: 'Family stories',
            icon: '💬',
            text: 'What your grandparents remember is history nobody else has written down.',
          },
          {
            title: 'Local traditions',
            icon: '🎉',
            text: 'Festivals and customs that have been passed on for generations.',
          },
          {
            title: 'Maps',
            icon: '🗺',
            text: 'Old maps show what a place used to be called and where its edges were.',
          },
          {
            title: 'Books',
            icon: '📖',
            text: 'Age-appropriate history books are still the best way in.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Make History Fun for Your Child',
        id: 'parent-guide',
        kind: 'pills',
        items: [
          'Use stories rather than facts to be memorised.',
          'Create timelines — even a paper strip on a wall works.',
          'Use maps so every story has a place attached to it.',
          'Explore historical places nearby, and read the information board together.',
          'Compare then and now using your own family as the example.',
          'Use pictures — photographs, paintings and drawings all help.',
          'Ask questions instead of testing them on dates.',
          'Let your child explain what they learned, in their own words.',
        ],
        band: true,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'History classes in Hyderabad',
          'History classes for kids in Hyderabad',
          'History learning for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: false,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for a History session at Brolly Juniors.',
      items: [
        {
          title: 'Ask a Question',
          text: 'The session opens with a question, such as "why did people build cities beside rivers?"',
        },
        {
          title: 'Learn the Story',
          text: 'The mentor tells the story of the people and the event, in plain language.',
        },
        {
          title: 'Explore the Timeline',
          text: 'Where does this sit? What came before it, and what came after?',
        },
        {
          title: 'Look at the Map',
          text: 'Find the place. Notice the river, the coast, the mountains.',
        },
        {
          title: 'Discuss the Event',
          text: 'Why did it happen? Who was affected? What do we actually know?',
        },
        {
          title: 'Explain What We Learned',
          text: 'Children retell it in their own words before the session ends.',
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'History Activities for Kids',
      lead: 'Games and tasks used during History sessions.',
      items: [
        {
          title: 'Timeline Builder',
          icon: '📅',
          text: 'Put a set of event cards into the correct order.',
        },
        {
          title: 'History Match Game',
          icon: '🃏',
          text: 'Match people, places and events to each other.',
        },
        { title: 'Who Am I?', icon: '❓', text: 'Guess the historical figure from three clues.' },
        {
          title: 'Historical Place Match',
          icon: '🏛',
          text: 'Match a monument to the period and place it belongs to.',
        },
        {
          title: 'Map Challenge',
          icon: '🗺',
          text: 'Mark ancient cities, rivers and trade routes on a blank map.',
        },
        {
          title: 'Then and Now',
          icon: '🔄',
          text: 'Compare how one thing — travel, school, cooking — has changed.',
        },
        {
          title: 'Civilization Match',
          icon: '🏙',
          text: 'Match each civilization to where it lived and what it built.',
        },
        {
          title: 'Event Sequence',
          icon: '🔗',
          text: 'Arrange the stages of one event from cause to effect.',
        },
        {
          title: 'History Quiz',
          icon: '🎯',
          text: 'Quick questions to check what the group remembers.',
        },
        {
          title: 'Historical Story Challenge',
          icon: '📜',
          text: 'Retell an event in your own words, keeping every fact accurate.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. Historical terms are explained when they appear.',
        },
        {
          title: 'Story-based learning',
          icon: '📜',
          text: 'True stories, told well, so events are remembered rather than crammed.',
        },
        {
          title: 'Concept-focused learning',
          icon: '💡',
          text: 'Cause and effect matter more than memorising a list of dates.',
        },
        {
          title: 'Activity-based learning',
          icon: '🎯',
          text: 'Timelines, maps, matching games and projects, not only listening.',
        },
        {
          title: 'Visual learning',
          icon: '🗺',
          text: 'Maps, timelines and pictures for children who learn best by seeing.',
        },
      ],
      cols: 3,
      note: 'Ask us anything about level, format or fit before you decide. Call 7036044555.',
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'History class fees',
    },
    trial: {
      title: 'Make History Interesting for Your Child',
      paras: [
        'A Free Demo is one short session where your child hears a real historical story, places it on a timeline and finds it on a map. Book a slot, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'History is not a list of dates to be memorised. It is thousands of real stories about real people, and your child already lives a short drive from some of them. Let them explore it through stories, timelines, maps, people, places and meaningful activities. Start with a Free Demo and see how they respond.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child explores one historical topic through a story',
        'You see how timelines and maps are used in the session',
        "We discuss your child's current level and what would suit them",
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support History Learning at Home',
      lead: 'You do not need to know any History. You need an old photograph and one good question.',
      items: [
        {
          title: 'Look at old family photographs',
          text: 'Ask who, when and where. Children love recognising relatives.',
        },
        {
          title: 'Create a family timeline',
          text: 'Births, moves, jobs, weddings. Their first real timeline.',
        },
        {
          title: 'Visit historical places',
          text: 'Age-appropriate monuments and museums. Hyderabad has several.',
        },
        {
          title: 'Read History stories',
          text: 'Well-written accounts of real events, at their reading level.',
        },
        { title: 'Look at maps', text: 'Find the place before you tell the story.' },
        {
          title: 'Ask "why do you think this happened?"',
          text: 'Even a wrong answer starts the right kind of thinking.',
        },
        {
          title: 'Compare then and now',
          text: 'How did you travel to school? What did a phone look like?',
        },
        {
          title: 'Encourage questions',
          text: '"Let\'s find out together" is a perfectly good answer.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'History Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for History Classes for Kids Near Me?',
      lead: 'If you are searching for history classes for kids near me, history classes near me, History tuition for kids near me or History classes in Hyderabad near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Retelling a historical event clearly to an audience is exactly the skill this programme builds.',
        to: '/junior-skills/public-speaking',
      },
      {
        icon: '📚',
        title: 'Phonics',
        text: 'Strong reading foundations, useful before children tackle longer historical passages.',
        to: '/junior-skills/phonics',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'How to look something up properly and judge whether a source can be trusted.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'Includes checking what AI tools tell you — a genuinely useful habit for history homework.',
        to: '/ai-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation for children who also want number work.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods, a popular pairing with any tuition subject.',
        to: '/junior-skills/vedic-maths',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'History sits alongside several other skill programmes. These are the ones parents most often ask about together.',
    faqTitle: 'History Classes for Kids: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are History classes for kids?',
        a: 'They are lessons about people, places and events from the past, taught in language a child can follow. Children learn through stories, timelines and maps, covering Indian and World History, ancient civilizations, important people and major events.',
      },
      {
        q: 'Why should children learn History?',
        a: 'History builds curiosity, critical thinking, reading and communication skills, and cultural awareness. It also explains the world children already live in — why a city exists, why a festival is celebrated, why a monument was built.',
      },
      {
        q: 'What age can children start learning History?',
        a: 'Children can start from around 6 years, beginning with family photographs, "then and now" comparisons and stories from the past. Dates and periods come later. Readiness and school level matter more than age alone. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'What topics are taught in History classes?',
        a: "Possible topics include ancient, medieval and modern History, Indian History, World History, civilizations, historical people, important events, culture, historical places, timelines and maps. The exact topics depend on the child's age and school level.",
      },
      {
        q: 'Is History suitable for beginners?',
        a: "Yes. A beginner starts with their own family's past, then stories about people and places, then a simple timeline of four or five events. No dates need to be memorised at the start.",
      },
      {
        q: 'Do children learn Indian History?',
        a: 'Yes. Ancient, medieval and modern India are covered at an age-appropriate level, along with Indian culture, historical places and the freedom movement. Children in Hyderabad also look at local history such as Golconda Fort and the Charminar.',
      },
      {
        q: 'Do children learn World History?',
        a: 'Yes, through broad themes rather than long lists of names and dates: ancient civilizations including Egypt, Greece and Rome, exploration, the Industrial Revolution, and major world events including the World Wars.',
      },
      {
        q: 'Do kids learn about historical people?',
        a: 'Yes — leaders, scientists, explorers, reformers, writers, artists and social leaders. For each person we ask who they were, what they did, why they are remembered, and what is debated about them. We avoid hero worship and unsupported claims.',
      },
      {
        q: 'Do children learn about civilizations?',
        a: 'Yes. The Indus Valley Civilization, Ancient Egypt, Ancient Greece and Ancient Rome are common starting points. For each one children answer the same four questions: where they lived, how they lived, what they built, and what we can learn from them.',
      },
      {
        q: 'Are timelines used in History learning?',
        a: 'Yes, constantly. Putting events in order is the skill that makes everything else in History make sense. Children build timelines from cards, on paper and as projects, starting with their own family.',
      },
      {
        q: 'Do children learn History through stories?',
        a: 'Yes. Stories are the main teaching method because children remember them far better than lists. We never change historical facts to make a story more exciting, and where a popular account is a legend rather than established fact, we say so.',
      },
      {
        q: 'Are History activities included?',
        a: 'Yes. Sessions use timeline building, matching games, "who am I?" clue rounds, map challenges, then-and-now comparisons and event sequencing, plus longer projects such as a family timeline or a historical place poster.',
      },
      {
        q: 'Can History help children develop critical thinking?',
        a: 'Yes, and this is one of its strongest benefits. Children learn to separate what we know from what we think, to ask what evidence exists, to notice that two accounts of the same event can differ, and to judge past choices by what people knew at the time.',
      },
      {
        q: 'How does Brolly Juniors handle sensitive or disputed historical topics?',
        a: 'Honestly, and in age-appropriate language, without graphic description of violence. Where historians disagree, we say so rather than presenting one view as settled. We do not use History lessons to promote any political party, position or religious view, and we do not teach cultural stereotypes.',
      },
      {
        q: 'How is History different from Geography, Civics, Economics and General Science classes?',
        a: 'History studies people, places and events from the past. Geography studies landforms, climate, resources and maps. Civics studies how government and citizenship work today. Economics studies money, resources and how an economy works. General Science covers the natural world. They connect, but each has a different focus.',
      },
      {
        q: 'What are the fees for History classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and school class, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'History in Short',
    quickAnswers: [
      {
        q: 'What is History for kids?',
        a: 'History is the study of people, places and events from the past. It helps children understand how the world changed over time.',
      },
      {
        q: 'Why is History important for children?',
        a: 'It builds critical thinking, curiosity, reading and communication skills, and cultural awareness, and connects the present to what came before.',
      },
      {
        q: 'What do kids learn in History classes?',
        a: 'Ancient, medieval and modern History, Indian and World History, civilizations, historical people, events, culture, timelines and maps.',
      },
      {
        q: 'How can children learn History easily?',
        a: "Through true stories, with every event placed on a timeline and found on a map, then retold in the child's own words.",
      },
      {
        q: 'What History activities can kids do?',
        a: 'Timeline building, matching games, map challenges, then-and-now comparisons, family timelines and historical place posters.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are History classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad learn about people, places and events from the past through stories, timelines and maps, covering Indian and World History. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn History in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is History suitable for young children?"',
        a: 'Yes, if it is taught through stories and family memories rather than dates. Children from around 6 years can begin with "then and now" comparisons.',
      },
      {
        q: '"What do kids learn in History classes?"',
        a: 'Ancient, medieval and modern History, Indian and World History, civilizations, important people and events, culture, timelines and maps.',
      },
      {
        q: '"How can I make History interesting for my child?"',
        a: 'Start with old family photographs and a family timeline, visit a nearby monument, find places on a map, and ask why things happened instead of testing dates.',
      },
      {
        q: '"History classes for kids near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     Biology Tuition — /tuitions/biology
     ================================================================== */
  '/tuitions/biology': {
    h1: 'Biology tuition in Hyderabad where diagrams and terminology earn the marks.',
    lead: 'Life processes taught as connected systems, with the labelled diagrams and precise vocabulary that decide a biology grade.',
    heroPills: ['Living things', 'Plants', 'Animals', 'Human body'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 8–10', 'Batches of eight'],
    hero: {
      title: 'What are Biology Classes for Kids?',
      paras: [
        'Why do leaves fall? How does a caterpillar become a butterfly? What happens to food after we eat it? Children ask these questions long before school calls it Biology. At Brolly Juniors in Hyderabad, we help them find the answers.',
        'Biology classes for kids are lessons about living things, explained in language a child can follow. Children learn about plants, animals, the human body, cells, life cycles, habitats, food and nature. The focus is on observing carefully, asking questions and understanding how living things grow and survive.',
      ],
    },
    facts: [
      { strong: 'Classes 8–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Diagram drill', span: 'Every week' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Biology Learning Looks Like',
      lead: 'Six things children do in a Biology session at Brolly Juniors.',
      items: [
        {
          title: 'Explore Living Things',
          icon: '🌿',
          text: 'What makes something alive? Children learn to tell living from non-living, and why it matters.',
        },
        {
          title: 'Learn About Nature',
          icon: '🌴',
          text: 'Trees, birds, insects and weather — the science that is already outside the window.',
        },
        {
          title: 'Understand the Human Body',
          icon: '🧠',
          text: 'Heart, lungs, bones, muscles and brain, explained simply and without medical jargon.',
        },
        {
          title: 'Discover Plants and Animals',
          icon: '🐢',
          text: 'How they are grouped, where they live, and how they are suited to their homes.',
        },
        {
          title: 'Build Scientific Thinking',
          icon: '🔬',
          text: 'Look, describe, compare, explain. The same method every time.',
        },
        {
          title: 'Learn Through Observation',
          icon: '👀',
          text: 'Watching a seed sprout over a week teaches more than reading about it once.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is Biology for Kids?',
      lead: 'Biology is the study of living things.',
      paras: [
        'A good first question for a child: how do you know if something is alive? Living things usually grow, need food and water, breathe in some way, respond to their surroundings, and produce young. A stone does none of those. A mango tree does all of them.',
        'Nature is where all of this happens together — plants, animals, soil, water and air, all connected.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        {
          tag: 'Living things',
          text: 'Anything that grows, feeds and responds — from an ant to a banyan tree.',
        },
        {
          tag: 'Plants',
          text: 'They make their own food using sunlight, and they cannot move to find it.',
        },
        {
          tag: 'Animals',
          text: 'They must find their food, and most can move to go and get it.',
        },
        {
          tag: 'Humans',
          text: 'We are animals too, with bodies that work in ways children can learn about.',
        },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Biology?',
      lead: 'Because Biology is the science children can walk outside and check for themselves.',
      items: [
        {
          title: 'Curiosity',
          text: 'Biology rewards the child who wants to know how a seed becomes a tree.',
        },
        {
          title: 'Observation',
          text: 'Noticing that the leaf has veins, or that the ants are all going the same way.',
        },
        {
          title: 'Understanding living things',
          text: 'What plants and animals need, and what happens when they do not get it.',
        },
        {
          title: 'Scientific thinking',
          text: 'Watching over days and weeks, and recording what actually changed.',
        },
        {
          title: 'Nature awareness',
          text: 'Children who notice nature tend to care about looking after it.',
        },
        {
          title: 'Logical thinking',
          text: 'If the plant near the window grew taller, what was different about it?',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, safe exploration and clear explanations.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Biology Learning',
      lead: 'Ten skills children practise while exploring Biology.',
      items: [
        {
          title: 'Curiosity',
          icon: '❓',
          text: 'Wanting to know how something lives, not just what it is called.',
        },
        {
          title: 'Observation',
          icon: '👀',
          text: 'Noticing the small detail that explains the big change.',
        },
        {
          title: 'Scientific Thinking',
          icon: '🔬',
          text: 'Watch, record, compare, conclude — a method children can reuse.',
        },
        {
          title: 'Nature Awareness',
          icon: '🌳',
          text: 'Seeing the living world as something connected, not just scenery.',
        },
        {
          title: 'Critical Thinking',
          icon: '⚖',
          text: 'Comparing two plants and deciding what really made the difference.',
        },
        {
          title: 'Questioning',
          icon: '💬',
          text: 'Asking a question that can be answered by looking carefully.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Working out why the plant on the shelf is not growing well.',
        },
        {
          title: 'Concept Understanding',
          icon: '💡',
          text: 'Knowing why a life cycle works the way it does.',
        },
        {
          title: 'Logical Thinking',
          icon: '🔢',
          text: 'Following a food chain from plant to predator without skipping a link.',
        },
        {
          title: 'Confidence',
          icon: '🌟',
          text: 'Being willing to explain what they observed, in their own words.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible Biology areas for children. The mix depends on your child's age and school level.",
      items: [
        'Living things',
        'Plants',
        'Animals',
        'Human body',
        'Cells',
        'Food and nutrition',
        'Habitats',
        'Ecosystems',
        'Life cycles',
        'Health and hygiene',
        'Nature',
        'Environment',
      ],
      note: 'Topics are chosen to suit the child. A six-year-old may spend a whole session sorting living and non-living things, while an older child studies cells and ecosystems. Contact Brolly Juniors for current details.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Biology Curriculum',
      lead: 'A suggested learning progression, from first ideas to school-level Biology.',
      label: 'Biology Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation',
          title: 'Foundation Biology',
          intro: 'First ideas, learned mostly by looking, naming and sorting.',
          bullets: [
            'Living and non-living things',
            'Plants around us',
            'Animals around us',
            'Human body basics',
            'Nature observation',
          ],
        },
        {
          key: 'stage-2',
          label: 'Basic',
          title: 'Basic Biology',
          intro: 'Named concepts, still built on things a child can see.',
          bullets: [
            'Plant parts',
            'Animal groups',
            'Human body systems',
            'Food and nutrition',
            'Life cycles',
            'Habitats',
          ],
        },
        {
          key: 'stage-3',
          label: 'Intermediate',
          title: 'Intermediate Biology',
          intro: 'Structure and relationships start to matter as much as the examples.',
          bullets: ['Cells', 'Tissues', 'Organs', 'Ecosystems', 'Adaptation', 'Reproduction basics'],
        },
        {
          key: 'stage-4',
          label: 'Advanced School',
          title: 'Advanced School Biology',
          intro: 'Topics that match upper school Biology, with concept clarity as the goal.',
          bullets: [
            'Cell structure',
            'Human body systems',
            'Genetics basics',
            'Ecology',
            'Classification',
            'Microorganisms',
          ],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Living things', text: 'What makes something alive, and what does not.' },
          { title: 'Plants', text: 'Parts of a plant and how plants grow.' },
          { title: 'Animals', text: 'Animal groups and where they live.' },
          { title: 'Human body', text: 'Heart, lungs, bones, muscles and brain.' },
          { title: 'Cells', text: 'The tiny building blocks of every living thing.' },
          {
            title: 'Food and nutrition',
            text: 'What food does for the body, in general terms.',
          },
          { title: 'Habitats', text: 'The places different living things call home.' },
          {
            title: 'Ecosystems',
            text: 'How plants and animals in one place depend on each other.',
          },
          { title: 'Life cycles', text: 'How living things change as they grow.' },
          {
            title: 'Health and hygiene',
            text: 'Clean habits, sleep and exercise as general science.',
          },
          { title: 'Nature', text: 'Observing what is growing and living nearby.' },
          {
            title: 'Environment',
            text: 'Why looking after air, water and green spaces matters.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise Biology Learning',
        lead: 'A general guide to what Biology can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '6–8 Years',
            text: 'Sorting living and non-living things, naming plant parts, grouping animals, and watching a seed sprout. Mostly looking and describing.',
          },
          {
            title: '9–11 Years',
            text: 'How plants make food, animal groups and adaptations, body systems, life cycles, habitats and simple food chains.',
          },
          {
            title: '12–14 Years',
            text: 'Cells, tissues and organs, ecosystems and energy flow, adaptation, and how living things are classified.',
          },
          {
            title: '14+ Years',
            text: 'Cell structure in detail, human body systems, genetics basics, ecology and microorganisms at school level.',
          },
        ],
        note: 'These are general age guides for Biology learning, not fixed Brolly Juniors batch groups. Readiness and current school level matter more than age alone. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Plants for Kids',
        lead: 'Every plant has parts, and each part has a job.',
        id: 'plants',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Roots',
            icon: '🌱',
            text: 'They hold the plant in the ground and drink water from the soil.',
          },
          {
            title: 'Stem',
            icon: '🌿',
            text: 'It holds the plant up and carries water to the rest of the plant.',
          },
          {
            title: 'Leaves',
            icon: '🍃',
            text: "The plant's kitchen. Leaves use sunlight to make the plant's food.",
          },
          {
            title: 'Flowers',
            icon: '🌼',
            text: 'They help the plant make seeds, often with help from insects.',
          },
          { title: 'Fruits', icon: '🍊', text: 'They grow around the seeds and protect them.' },
          { title: 'Seeds', icon: '🌱', text: 'Each seed can become a whole new plant.' },
        ],
        note: 'How plants grow: a seed gets water, warmth and air, and starts to sprout. Roots go down, a shoot goes up, leaves open and begin making food from sunlight. Given enough time and space, that one seed becomes a full plant. Why plants matter: they give us food, they release the oxygen we breathe, they provide shade and shelter, and they hold soil in place. Almost every food chain begins with a plant.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Animals for Kids',
        lead: 'Scientists put animals into groups based on what they have in common.',
        id: 'animals',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Mammals',
            text: 'Have hair or fur and feed their young with milk. Dogs, cows, bats — and humans.',
          },
          {
            title: 'Birds',
            text: 'Have feathers, wings and a beak, and lay eggs. Crows, sparrows, peacocks.',
          },
          {
            title: 'Fish',
            text: 'Live in water, have fins and gills for breathing. Rohu, catla, goldfish.',
          },
          {
            title: 'Reptiles',
            text: 'Have dry scaly skin and lay eggs on land. Lizards, snakes, turtles.',
          },
          {
            title: 'Amphibians',
            text: 'Start life in water and later live on land too. Frogs and toads.',
          },
          {
            title: 'Insects',
            text: 'Have six legs and a body in three parts. Ants, butterflies, beetles.',
          },
        ],
        note: 'Animals live in very different places, and their bodies suit their homes. A fish has fins for water. A camel stores fat in its hump for dry places. A polar bear has thick fur for the cold. That match between an animal and its home is called adaptation.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Human Body for Kids',
        lead: 'The body is a team. Each part has a job, and they all work together.',
        id: 'human-body',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Brain',
            icon: '🧠',
            text: 'The control centre. It thinks, remembers and sends messages to the whole body.',
          },
          {
            title: 'Heart',
            icon: '❤',
            text: 'A muscle that pumps blood all day and all night, without a break.',
          },
          {
            title: 'Lungs',
            icon: '💨',
            text: 'Two air bags that take in oxygen when you breathe in.',
          },
          {
            title: 'Bones',
            icon: '🦴',
            text: 'They give the body its shape and protect soft parts inside.',
          },
          {
            title: 'Muscles',
            icon: '💪',
            text: 'They pull on bones so you can move, smile and lift things.',
          },
          {
            title: 'Digestive system',
            icon: '🍳',
            text: 'It breaks food into pieces small enough for the body to use.',
          },
          {
            title: 'Circulatory system',
            icon: '💧',
            text: 'The heart and blood vessels, delivering food and oxygen everywhere.',
          },
          {
            title: 'Respiratory system',
            icon: '🌬',
            text: 'Nose, windpipe and lungs, moving air in and out.',
          },
        ],
        note: 'These sections are educational only. Nothing on this page is medical advice, and we do not diagnose or treat anything. For any health question about your child, please speak to a doctor.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Cells for Kids',
        lead: 'A cell is a tiny basic building block of living things.',
        id: 'cells',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Cell membrane',
            text: 'The outer layer. It holds the cell together and decides what goes in and out.',
          },
          {
            title: 'Nucleus',
            text: 'The control room. It holds the instructions for what the cell should do.',
          },
          {
            title: 'Cytoplasm',
            text: "The jelly-like filling where most of the cell's work happens.",
          },
        ],
        note: 'Younger children only need the wall-and-bricks picture. Older children go further into what each part does and how plant cells differ from animal cells.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Life Cycles',
        lead: 'A life cycle shows how a living thing changes as it grows.',
        id: 'life-cycles',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Butterfly',
            text: 'The change is so complete that the caterpillar and the butterfly look like different animals.',
          },
          {
            title: 'Frog',
            text: 'A tadpole breathes in water. As it grows legs and lungs, it can live on land too.',
          },
          {
            title: 'Plant',
            text: 'The adult plant makes new seeds, and the cycle starts again.',
          },
          {
            title: 'Chicken',
            text: 'The chick looks like a small version of the adult, unlike the butterfly.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Habitats and Ecosystems',
        lead: 'A habitat is the place where a plant or animal lives. A pond can be a home for fish, frogs, insects and plants.',
        id: 'habitats',
        kind: 'split',
        paras: [
          'Each arrow means "is eaten by". Notice that the chain starts with a plant. Almost every food chain does, because plants are the ones that can make their own food.',
          'If the grass disappeared, the grasshoppers would struggle, then the frogs, then the birds. That is why children learn that removing one link affects the whole chain.',
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Food and Nutrition',
        lead: 'Food is fuel. It gives the body energy and the materials it needs to grow and repair.',
        id: 'food',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Food', text: 'Everything we eat and drink to stay alive and active.' },
          {
            title: 'Nutrients',
            text: 'The useful parts inside food, such as carbohydrates, proteins, fats, vitamins and minerals.',
          },
          {
            title: 'Balanced diet',
            text: 'Eating a variety of foods, so the body gets a range of different nutrients.',
          },
          { title: 'Water', text: 'The body needs water for almost everything it does.' },
        ],
        note: "Children learn this as science, not as a set of rules about what they personally should eat. The interesting question is why the body needs different things — why proteins help you grow, why carbohydrates give quick energy. This section is general educational content about how the body uses food. It is not dietary advice for any particular child. For questions about your child's diet, nutrition or weight, please speak to a doctor or a qualified dietitian.",
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Health and Hygiene',
        lead: 'Some Biology is about looking after the living thing you already have — your own body.',
        id: 'health',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Hand washing',
            text: 'Soap and water remove germs that are too small to see. That is why we wash before eating.',
          },
          {
            title: 'Clean habits',
            text: 'Brushing teeth, bathing and keeping nails trimmed all reduce the germs we carry around.',
          },
          {
            title: 'Sleep',
            text: 'The body repairs itself during sleep, and the brain sorts what it learned that day.',
          },
          {
            title: 'Exercise',
            text: 'Moving keeps the heart and muscles strong. Playing outside counts.',
          },
          {
            title: 'Food safety',
            text: 'Covering food and washing fruit reduces the chance of germs getting in.',
          },
          {
            title: 'Germs',
            text: 'Tiny living things, far too small to see. Some are harmless. Some can make us unwell.',
          },
        ],
        note: "This is general science education about how bodies stay healthy. It is not medical advice, and we never diagnose illnesses or suggest treatments. If you are worried about your child's health, please speak to a doctor.",
        band: true,
      },
      {
        eyebrow: 'Safe activities',
        title: 'Biology Experiments and Safe Activities',
        lead: 'Low-risk observation activities using seeds, leaves, water and a notebook.',
        id: 'experiments',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Seed Germination Observation',
            icon: '🌱',
            text: 'Place a soaked bean on damp cotton wool. Look at it every day for a week and draw what changed.',
          },
          {
            title: 'Leaf Observation',
            icon: '🍃',
            text: 'Collect fallen leaves and compare shape, edges and veins. Sort them into groups you invent yourself.',
          },
          {
            title: 'Plant Growth Journal',
            icon: '📈',
            text: 'Measure a growing plant once a week and plot the heights on a chart.',
          },
          {
            title: 'Water Absorption Observation',
            icon: '💧',
            text: 'Stand a white flower or a celery stick in coloured water and watch the colour travel upwards.',
          },
          {
            title: 'Simple Food Chain Activity',
            icon: '🔗',
            text: 'Build a food chain from picture cards and explain each arrow out loud.',
          },
          {
            title: 'Flower Structure Observation',
            icon: '🌼',
            text: 'Look closely at a garden flower and identify the petals and the centre parts.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'Who Am I?',
        lead: 'Five quick Biology riddles. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'I have roots, leaves and a stem. I make my own food using sunlight. What am I?',
            opts: ['Fish', 'Plant', 'Bird', 'Insect'],
            a: 'Plant',
            why: 'Only plants make their own food using sunlight, and only plants have roots, a stem and leaves.',
            hint: 'Choose one answer.',
          },
          {
            q: 'I start as an egg, then become a tadpole, then grow legs. What am I?',
            opts: ['Butterfly', 'Chicken', 'Frog', 'Snake'],
            a: 'Frog',
            why: "That is a frog's life cycle: egg, tadpole, young frog, adult frog. A tadpole breathes in water before the frog can live on land too.",
            hint: 'Choose one answer.',
          },
          {
            q: 'I have feathers, wings and a beak, and I lay eggs. Which group do I belong to?',
            opts: ['Mammals', 'Birds', 'Reptiles', 'Amphibians'],
            a: 'Birds',
            why: 'Feathers are the giveaway. Only birds have them. Wings alone are not enough — bats have wings but are mammals.',
            hint: 'Choose one answer.',
          },
          {
            q: 'I am a tiny building block. Every living thing is made of me. What am I?',
            opts: ['A cell', 'A seed', 'A bone', 'A leaf'],
            a: 'A cell',
            why: 'A cell is the tiny basic building block of living things, like a brick in a wall.',
            hint: 'Choose one answer.',
          },
          {
            q: 'In the food chain grass → grasshopper → frog → bird, what does each arrow mean?',
            opts: ['Lives near', 'Is eaten by', 'Is bigger than', 'Runs away from'],
            a: 'Is eaten by',
            why: 'Each arrow means “is eaten by” and shows which way the energy travels. Notice the chain starts with a plant — almost every food chain does.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Getting started',
        title: 'Biology for Beginners',
        lead: 'Your child does not need any background. Biology begins with things they can already see.',
        id: 'beginners',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Living things', text: 'The first sorting task, and the most useful one.' },
          { title: 'Plants', text: 'Roots, stem, leaves — visible on any plant at home.' },
          { title: 'Animals', text: 'Grouping animals children already know by name.' },
          { title: 'Human body', text: 'Their own heart, lungs and bones to start with.' },
          { title: 'Nature', text: 'Ten minutes outside is a full lesson at this stage.' },
          { title: 'Life cycles', text: 'Egg to caterpillar to butterfly, in the right order.' },
          {
            title: 'Observation',
            text: 'Drawing what they saw, and writing one sentence about it.',
          },
          {
            title: 'Not sure where to start?',
            text: 'A Free Demo helps us find the right level. Call 7036044555.',
          },
        ],
        note: 'A beginner can start with living things, plants, animals, the human body, nature, life cycles and simple observation. No microscope. No laboratory. No technical vocabulary. Just looking carefully at what is alive nearby and asking what it needs.',
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Biology Through Activities',
        lead: 'Biology happens slowly. Activities let children watch the change instead of being told about it.',
        id: 'activity-learning',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Observation',
            text: 'Children report what they saw, not what they expected to see.',
          },
          {
            title: 'Questions',
            text: 'Every activity starts with a prediction, which is a question in disguise.',
          },
          {
            title: 'Visual learning',
            text: 'Diagrams for the parts that are too small or too hidden to see.',
          },
          { title: 'Hands-on activities', text: 'Planting, measuring, sorting and recording.' },
          {
            title: 'Nature examples',
            text: 'Real leaves and real plants beat pictures every time.',
          },
          {
            title: 'Classification',
            text: 'Grouping things is how biologists make sense of variety.',
          },
          {
            title: 'Discussion',
            text: 'Explaining out loud is the real test of understanding.',
          },
          {
            title: 'Patience is part of it',
            text: 'A seed takes days to sprout. Waiting is a skill too.',
          },
        ],
        note: 'Activity-based learning helps children understand concepts. It is not a promise of better marks, and we do not present it as one.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Biology and Mathematics',
        lead: 'Biology needs Maths as soon as a child starts recording what they observed.',
        id: 'biology-maths',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Counting',
            text: 'How many petals, how many legs, how many seeds sprouted.',
          },
          { title: 'Measurement', text: "Measuring a plant's height each week in centimetres." },
          {
            title: 'Graphs',
            text: 'Plotting growth over time and reading the shape of the line.',
          },
          {
            title: 'Data',
            text: 'Keeping a neat table so this week can be compared with last week.',
          },
          {
            title: 'Patterns',
            text: 'Noticing that most flowers of one kind have the same number of petals.',
          },
          {
            title: 'Maths first?',
            text: 'If your child finds Maths hard, we keep numbers light and build the concept first.',
          },
        ],
        note: 'Children who enjoy the counting and measuring side often also enjoy Abacus or Vedic Maths, which build number confidence. Ask us which suits your child.',
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Biology and Physics',
        lead: 'Living bodies obey the same rules of movement and energy as everything else.',
        id: 'biology-physics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Movement',
            text: 'Muscles pull on bones like ropes on levers. A bent arm is a lever in action.',
          },
          {
            title: 'Energy',
            text: 'Food gives the body energy, just as fuel gives a machine energy.',
          },
          {
            title: 'Light',
            text: 'Eyes work because light enters them. Plants grow towards light.',
          },
          {
            title: 'Sound',
            text: 'Vocal cords vibrate to make sound, and ears pick up those vibrations.',
          },
          {
            title: 'Body movement',
            text: 'Balance, push and pull all apply when you walk, jump or swim.',
          },
          {
            title: 'Different focus',
            text: 'Biology: living things and how they work. Physics: how things move, work and interact.',
          },
        ],
        note: 'If your child is more drawn to machines and movement than to living things, ask us about Physics classes when you call.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Biology and Chemistry',
        lead: 'Inside every living thing, chemistry is happening all the time.',
        id: 'biology-chemistry',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Food',
            text: 'Foods are made of substances the body can break down and use.',
          },
          {
            title: 'Digestion',
            text: 'Food is broken into smaller pieces — a chemical change inside the body.',
          },
          {
            title: 'Cells',
            text: 'Cells are constantly building and breaking down substances.',
          },
          {
            title: 'Water',
            text: 'Water carries substances around plants and around the body.',
          },
          {
            title: 'Materials in living things',
            text: 'Bone, wood, shell and leaf are all made of particular substances.',
          },
          {
            title: 'Different focus',
            text: 'Biology: living things. Chemistry: what things are made of and how they change.',
          },
        ],
        note: 'If your child is fascinated by what things are made of rather than by living things, ask us about Chemistry classes when you call.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Biology and Problem Solving',
        lead: 'Every Biology question can be worked through in six moves.',
        id: 'problem-solving',
        kind: 'timeline',
        items: [
          { title: 'Observe', text: 'What is actually there, and what is it doing?' },
          { title: 'Ask', text: 'What do I want to find out about it?' },
          {
            title: 'Think',
            text: 'Which idea applies — a life cycle, a habitat, an adaptation?',
          },
          { title: 'Explore', text: 'Look more closely, record, or look it up in a book.' },
          { title: 'Compare', text: 'How is this one different from the other one?' },
          {
            title: 'Explain',
            text: 'Say it out loud. If you can explain it, you understand it.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected ideas',
        title: 'Biology and the Environment',
        lead: 'Once children see how living things depend on each other, caring about the environment follows naturally.',
        id: 'environment',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Plants',
            icon: '🌿',
            text: 'They give food, shade and the oxygen we breathe.',
          },
          { title: 'Animals', icon: '🐢', text: 'Each one has a place in a food chain.' },
          {
            title: 'Water',
            icon: '💧',
            text: 'Every living thing needs it, and clean water matters.',
          },
          {
            title: 'Air',
            icon: '🌬',
            text: 'Plants and animals both depend on the air around them.',
          },
          {
            title: 'Habitats',
            icon: '🏠',
            text: 'When a habitat is damaged, the things living in it lose their home.',
          },
          {
            title: 'Food chains',
            icon: '🔗',
            text: 'Remove one link and the whole chain is affected.',
          },
          {
            title: 'Nature',
            icon: '🌳',
            text: 'Even a balcony plant or a city park is part of it.',
          },
          {
            title: 'Small actions',
            icon: '♻',
            text: 'Watering a plant, not littering, saving water — children can start there.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Everyday Biology',
        title: 'Real-Life Biology',
        lead: 'Biology is happening in your home right now, including inside your child.',
        id: 'real-life',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Growing plants',
            icon: '🌱',
            text: 'A pot on the balcony is a week-long science lesson.',
          },
          { title: 'Pets', icon: '🐶', text: 'What does your pet eat, and why that food?' },
          {
            title: 'Food',
            icon: '🍱',
            text: 'Which part of the plant are you eating — root, stem, leaf or fruit?',
          },
          {
            title: 'Exercise',
            icon: '🏃',
            text: 'Why does your heart beat faster after running?',
          },
          { title: 'Sleep', icon: '😴', text: 'The body repairs itself while you rest.' },
          {
            title: 'Breathing',
            icon: '💨',
            text: 'Count your breaths in a minute, then count again after skipping.',
          },
          { title: 'Digestion', icon: '🍳', text: 'What happens to food after you swallow it?' },
          {
            title: 'Gardening',
            icon: '🌴',
            text: 'Soil, seeds, water and patience — Biology you can hold.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Make Biology Fun for Your Child',
        id: 'parent-guide',
        kind: 'pills',
        items: [
          'Observe nature — ten minutes in a park or on a balcony counts as a lesson.',
          'Grow a plant together and let your child be responsible for watering it.',
          'Learn animal facts and take turns asking each other riddles.',
          'Create simple diagrams — a labelled drawing of a leaf or a flower.',
          'Use picture-based learning for younger children, before written definitions.',
          'Ask questions instead of giving answers. "What do you think that ant is doing?"',
          'Discuss everyday Biology — the vegetables at dinner, the tree on your street.',
          'Encourage curiosity even when the question has no quick answer.',
        ],
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Biology classes in Hyderabad',
          'Biology classes for kids in Hyderabad',
          'Science classes for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for a Biology session at Brolly Juniors.',
      items: [
        {
          title: 'Ask a Question',
          text: 'The session opens with a question, such as "how does a tiny seed become a tall tree?"',
        },
        {
          title: 'Learn the Concept',
          text: 'The idea is explained in plain words, with a diagram or a real leaf in hand.',
        },
        {
          title: 'See a Real-Life Example',
          text: 'The mentor connects it to something the child already knows — a plant at home, a pet, a bird outside.',
        },
        {
          title: 'Observe or Try a Safe Activity',
          text: 'Children look closely, sort, measure or record, and are asked to predict first.',
        },
        {
          title: 'Discuss What Happened',
          text: 'What did you actually see? Not what you expected — what happened.',
        },
        {
          title: 'Explain What We Learned',
          text: "The concept is restated in the children's own words before the session ends.",
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Biology Activities for Kids',
      lead: 'Games and sorting tasks used during Biology sessions.',
      items: [
        {
          title: 'Plant Parts Match',
          icon: '🌿',
          text: 'Match each plant part to the job it does.',
        },
        {
          title: 'Animal Classification Game',
          icon: '🐢',
          text: 'Sort animal cards into mammals, birds, fish, reptiles, amphibians and insects.',
        },
        {
          title: 'Human Body Puzzle',
          icon: '🦴',
          text: 'Place each organ where it belongs on a body outline.',
        },
        {
          title: 'Life Cycle Matching',
          icon: '🦋',
          text: 'Put the butterfly, frog and plant stages in the right order.',
        },
        {
          title: 'Living or Non-Living?',
          icon: '❓',
          text: 'Sort everyday objects, and argue about the tricky ones.',
        },
        {
          title: 'Habitat Match',
          icon: '🏠',
          text: 'Match each animal to the home its body is suited to.',
        },
        {
          title: 'Food Chain Challenge',
          icon: '🔗',
          text: 'Build a food chain from cards, starting with a plant.',
        },
        {
          title: 'Cell Diagram Activity',
          icon: '🔬',
          text: 'Label the membrane, nucleus and cytoplasm on a simple diagram.',
        },
        {
          title: 'Nature Observation',
          icon: '👀',
          text: 'Record five living things you can see from one spot.',
        },
        {
          title: 'Biology Quiz',
          icon: '🎯',
          text: 'Quick questions to check what the group remembers.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. The scientific term comes once the idea is clear.',
        },
        {
          title: 'Concept-focused learning',
          icon: '💡',
          text: 'Understanding is the goal, not memorising a definition.',
        },
        {
          title: 'Activity-based learning',
          icon: '👀',
          text: 'Children observe and record for themselves, safely.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: 'Every concept is tied to a plant, animal or body a child already knows.',
        },
        {
          title: 'Question-based learning',
          icon: '❓',
          text: 'Sessions start with a question, not a definition.',
        },
      ],
      cols: 3,
      note: 'Ask us anything about level, format, safety or fit before you decide. Call 7036044555.',
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'Biology class fees',
    },
    trial: {
      title: 'Let Your Child Discover the World of Biology',
      paras: [
        'A Free Demo is one short session where your child tries a Biology activity and you see how the teaching works. Book a slot, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'There is a whole science growing on your balcony and flying past your window. Let your child explore it through simple concepts, careful observation, their own questions and safe activities that show them how living things grow and survive. Start with a Free Demo and see how they respond.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child explores one Biology concept with a safe activity',
        'You see how ideas are explained in simple language',
        "We discuss your child's current level and what would suit them",
        'You ask about formats, timings, safety and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support Biology Learning at Home',
      lead: 'You do not need to know Biology. A plant on the windowsill and one good question will do.',
      items: [
        {
          title: 'Observe plants',
          text: 'Water one together and notice what changes over a week.',
        },
        {
          title: 'Watch birds and insects',
          text: 'From a safe distance, without touching or catching anything.',
        },
        {
          title: 'Ask "why do you think this happens?"',
          text: 'This one question does more than any explanation you could give.',
        },
        {
          title: 'Keep a simple nature journal',
          text: 'One drawing and one sentence a week is enough.',
        },
        {
          title: 'Talk about body parts',
          text: 'Why does your heart beat faster after running upstairs?',
        },
        {
          title: 'Use age-appropriate science books',
          text: 'Picture-led books work well for younger children.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'Biology Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Biology Classes for Kids Near Me?',
      lead: 'If you are searching for biology classes for kids near me, biology classes near me or science classes for kids near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'How AI tools work and how to use them thoughtfully. Built on the same habit of asking how things work.',
        to: '/ai-for-kids',
      },
      {
        icon: '💻',
        title: 'Python for Kids',
        text: 'Coding with Python. Useful for children who enjoy classifying, sorting and step-by-step method.',
        to: '/python-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation, which support the counting and measuring side of Biology.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods, helpful once Biology involves data and graphs.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Safe, confident use of everyday digital tools, including looking things up properly.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Explaining ideas clearly out loud — exactly what we ask children to do after every observation.',
        to: '/junior-skills/public-speaking',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Biology sits alongside several other skill programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Biology Classes for Kids: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are Biology classes for kids?',
        a: 'They are lessons about living things, explained in language a child can follow. Children learn about plants, animals, the human body, cells, life cycles, habitats, food and nature, with a focus on observing carefully and asking questions.',
      },
      {
        q: 'Why should children learn Biology?',
        a: 'Biology builds curiosity, careful observation, scientific thinking and nature awareness. It also explains things children see every day — how a seed becomes a plant, why a caterpillar changes, what their own heart and lungs are doing.',
      },
      {
        q: 'What age can children start learning Biology?',
        a: 'Children can begin exploring simple Biology ideas from around 6 years, by sorting living and non-living things and watching a seed sprout. Cells and body systems come later. Readiness and school level matter more than age alone. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'What topics are taught in Biology classes?',
        a: "Possible topics include living things, plants, animals, the human body, cells, food and nutrition, habitats, ecosystems, life cycles, health and hygiene, nature and the environment. The exact topics depend on the child's age and school level.",
      },
      {
        q: 'Is Biology suitable for beginners?',
        a: 'Yes. A beginner starts with things they can already see — a plant at home, a bird outside, their own hands. No microscope, no laboratory and no technical vocabulary are needed at the start.',
      },
      {
        q: 'Do children learn about plants?',
        a: 'Yes. Children learn the parts of a plant — roots, stem, leaves, flowers, fruits and seeds — what each part does, how plants grow from seeds, and why plants matter for food, air and shade.',
      },
      {
        q: 'Do children learn about animals?',
        a: 'Yes. Children learn the main animal groups — mammals, birds, fish, reptiles, amphibians and insects — with familiar examples, and how animals are suited to the places they live.',
      },
      {
        q: 'Do kids learn about the human body?',
        a: 'Yes, at an age-appropriate level. Topics can include the brain, heart, lungs, bones, muscles, and the digestive, circulatory and respiratory systems. This is educational content only. We do not give medical advice or diagnose anything.',
      },
      {
        q: 'Do children learn about cells?',
        a: 'Yes. A cell is introduced as a tiny building block of living things, like a brick in a wall. Older children go further into the cell membrane, nucleus and cytoplasm, and how plant and animal cells differ.',
      },
      {
        q: 'Do kids learn about ecosystems?',
        a: 'Yes. Children learn what a habitat is, build simple food chains starting with a plant, and see how the living things in one place depend on each other. A pond is a good first example.',
      },
      {
        q: 'Are Biology activities included?',
        a: 'Yes. Sessions use sorting games, matching activities, labelled diagrams, nature observation and simple record-keeping such as a plant growth journal, alongside the explanations.',
      },
      {
        q: 'What are safe Biology activities for kids?',
        a: 'Watching a soaked bean sprout on damp cotton wool, comparing fallen leaves, keeping a plant growth journal, standing a white flower in coloured water, building a food chain from picture cards, and looking closely at a garden flower. We never ask children to handle biological samples, culture microorganisms, taste experimental materials, carry out dissection or handle wild animals. Children observe wildlife from a safe distance and wash their hands after handling soil or plants.',
      },
      {
        q: 'Is Biology connected to Chemistry and Physics?',
        a: 'Yes. Biology meets Chemistry around food, digestion, cells and water. It meets Physics around movement, energy, light and sound. It also meets Maths whenever children count, measure or graph what they observed.',
      },
      {
        q: 'How is Biology different from Chemistry, Physics, General Science and Maths classes?',
        a: 'Biology focuses on living things — plants, animals, the human body and nature. Chemistry focuses on what things are made of and how they change. Physics focuses on how things move, work and interact. General Science covers all of these more broadly. Maths programmes such as Abacus and Vedic Maths build number and calculation skills. They overlap, but each has a different focus.',
      },
      {
        q: 'Does Biology involve dissection?',
        a: "No. Dissection is not part of children's Biology activities at Brolly Juniors. Body structures are taught using diagrams, models and discussion instead.",
      },
      {
        q: 'What are the fees for Biology classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and school class, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'Biology in Short',
    quickAnswers: [
      {
        q: 'What is Biology for kids?',
        a: 'Biology is the study of living things. It helps children understand plants, animals, people and the world around them.',
      },
      {
        q: 'Why is Biology important for children?',
        a: 'It builds curiosity, observation, scientific thinking and nature awareness, and explains the living world they see every day.',
      },
      {
        q: 'What do kids learn in Biology classes?',
        a: 'Living things, plants, animals, the human body, cells, life cycles, habitats, ecosystems, food, health and the environment.',
      },
      {
        q: 'What Biology activities can kids do safely?',
        a: 'Seed germination observation, leaf comparison, a plant growth journal, coloured-water absorption, food chain cards and flower observation — with adult supervision.',
      },
      {
        q: 'How can children learn Biology easily?',
        a: 'Start with living things they can see, observe over days rather than minutes, record what changed, and explain it in their own words.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are Biology classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad learn about living things — plants, animals, the human body, cells and habitats — through simple explanations and safe observation activities. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn Biology in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is Biology suitable for young children?"',
        a: 'Yes, if it is taught through plants, animals and nature rather than definitions. Sorting living and non-living things suits children from around 6 years.',
      },
      {
        q: '"What do kids learn in Biology classes?"',
        a: 'Plants and their parts, animal groups, the human body, cells, life cycles, habitats and food chains, food and nutrition, and health and hygiene.',
      },
      {
        q: '"What are some Biology activities for children?"',
        a: 'Growing a bean on damp cotton wool, comparing leaves, keeping a plant growth journal, watching coloured water rise up a flower stem, and building food chains from cards.',
      },
      {
        q: '"Biology classes for kids near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     Chemistry Tuition — /tuitions/chemistry
     ================================================================== */
  '/tuitions/chemistry': {
    h1: 'Chemistry tuition in Hyderabad that replaces memorising with reasoning.',
    lead: 'Balancing, reaction types, periodic trends and mole calculations — taught so a student can predict a product rather than recall one.',
    heroPills: ['Matter', 'Solids', 'Liquids', 'Gases'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 8–10', 'Batches of eight'],
    hero: {
      title: 'What are Chemistry Classes for Kids?',
      paras: [
        'Sugar vanishes into tea. Ice turns into water. An old gate turns orange. Children notice these things long before anyone calls it Chemistry. At Brolly Juniors in Hyderabad, we give those everyday changes a name and an explanation.',
        'Chemistry classes for kids are lessons about what things are made of and how they change, explained in language a child can follow. Children learn about matter, solids, liquids and gases, atoms, elements, compounds, mixtures, physical and chemical changes, acids and bases, and safe everyday reactions.',
      ],
    },
    facts: [
      { strong: 'Classes 8–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Weekly', span: 'Equation practice' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Chemistry Learning Looks Like',
      lead: 'Six things children do in a Chemistry session at Brolly Juniors.',
      items: [
        {
          title: 'Learn Chemistry Concepts',
          icon: '🧪',
          text: 'Matter, mixtures, changes and reactions explained in plain words before any technical terms.',
        },
        {
          title: 'Explore Everyday Science',
          icon: '🏠',
          text: 'Cooking, cleaning, rust and rain all become examples children already know.',
        },
        {
          title: 'Safe Activity-Based Learning',
          icon: '🛡',
          text: 'Low-risk activities with everyday materials, supervised where needed.',
        },
        {
          title: 'Build Scientific Thinking',
          icon: '🧠',
          text: 'Predict, observe, compare, explain. That order, every time.',
        },
        {
          title: 'Ask Questions',
          icon: '❓',
          text: '"Where did the sugar go?" is a real Chemistry question with a real answer.',
        },
        {
          title: 'Understand How Things Change',
          icon: '🔄',
          text: 'Some changes can be reversed. Some cannot. Children learn to tell them apart.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is Chemistry for Kids?',
      lead: 'Chemistry is the study of what things are made of, and how they change. Try this thought:',
      paras: ['From that one example, Chemistry opens up in several directions. Children learn about:'],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        { tag: 'Materials', text: 'What things are made of — wood, metal, plastic, glass.' },
        { tag: 'Changes', text: 'Melting, freezing, dissolving, rusting, burning.' },
        { tag: 'Mixtures', text: 'Two or more things together, like salt in water.' },
        { tag: 'Solids', text: 'Keep their own shape, like a stone or an ice cube.' },
        { tag: 'Liquids', text: 'Take the shape of the container, like water or oil.' },
        { tag: 'Gases', text: 'Spread out to fill all the space, like air or steam.' },
        { tag: 'Simple reactions', text: 'When substances interact and something new forms.' },
        { tag: 'Everyday substances', text: 'Water, salt, sugar, soap, vinegar, baking soda.' },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Chemistry?',
      lead: 'Because Chemistry turns "that\'s just how it is" into "here is why".',
      items: [
        {
          title: 'Curiosity',
          text: 'Chemistry rewards the child who wants to know what is inside things.',
        },
        {
          title: 'Observation',
          text: 'Noticing the colour change, the bubbles, the smell — and saying so.',
        },
        {
          title: 'Scientific thinking',
          text: 'Predicting what will happen, then checking honestly whether it did.',
        },
        {
          title: 'Logical thinking',
          text: 'If this changed and that did not, what was different between them?',
        },
        {
          title: 'Problem solving',
          text: 'How would you separate sand from water? There is more than one answer.',
        },
        {
          title: 'Understanding everyday materials',
          text: 'Why soap cleans, why food spoils, why iron rusts near water.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, safe exploration and clear explanations.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Chemistry Learning',
      lead: 'Ten skills children practise while exploring Chemistry.',
      items: [
        {
          title: 'Scientific Thinking',
          icon: '🔬',
          text: 'Predict, test, observe, conclude — a method children can reuse anywhere.',
        },
        {
          title: 'Observation',
          icon: '👀',
          text: 'Noticing the small change that explains the big result.',
        },
        {
          title: 'Curiosity',
          icon: '❓',
          text: 'Wanting to know what something is made of, not just what it is called.',
        },
        {
          title: 'Logical Reasoning',
          icon: '🔢',
          text: 'Working from cause to effect without skipping a step.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Finding a way to separate, sort or test something.',
        },
        {
          title: 'Questioning',
          icon: '💬',
          text: 'Asking a question that can actually be answered by looking.',
        },
        {
          title: 'Concept Understanding',
          icon: '💡',
          text: 'Knowing why a change happens, so the rule is not just memorised.',
        },
        {
          title: 'Critical Thinking',
          icon: '⚖',
          text: 'Comparing two materials and deciding what really made the difference.',
        },
        {
          title: 'Practical Thinking',
          icon: '🛠',
          text: 'Connecting a lesson to the kitchen, the bathroom and the garden.',
        },
        {
          title: 'Confidence',
          icon: '🌟',
          text: 'Being willing to say "I think it happened because…" and explain.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible Chemistry areas for children. The mix depends on your child's age and school level.",
      items: [
        'Matter',
        'Solids',
        'Liquids',
        'Gases',
        'Atoms',
        'Elements',
        'Compounds',
        'Mixtures',
        'Changes in matter',
        'Acids and bases',
        'Simple reactions',
        'Separation methods',
      ],
      note: 'Topics are chosen to suit the child. A six-year-old may spend a whole session sorting solids, liquids and gases, while an older child works on reactions and the periodic table. Contact Brolly Juniors for current details.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Chemistry Curriculum',
      lead: 'A suggested learning progression, from first ideas to school-level Chemistry.',
      label: 'Chemistry Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation',
          title: 'Foundation Chemistry',
          intro: 'First ideas, learned mostly by looking, sorting and describing.',
          bullets: [
            'Materials around us',
            'Solids, liquids and gases',
            'Changes in materials',
            'Simple mixtures',
            'Observation activities',
          ],
        },
        {
          key: 'stage-2',
          label: 'Basic',
          title: 'Basic Chemistry',
          intro: 'Named concepts, still explained through everyday substances.',
          bullets: [
            'Atoms',
            'Elements',
            'Compounds',
            'Mixtures',
            'Acids and bases',
            'Physical and chemical changes',
          ],
        },
        {
          key: 'stage-3',
          label: 'Intermediate',
          title: 'Intermediate Chemistry',
          intro: 'Structure and method start to matter as much as the examples.',
          bullets: [
            'Chemical reactions',
            'Periodic table basics',
            'Properties of materials',
            'Separation techniques',
            'Simple equations',
          ],
        },
        {
          key: 'stage-4',
          label: 'Advanced School',
          title: 'Advanced School Chemistry',
          intro: 'Topics that match upper school Chemistry, with concept clarity as the goal.',
          bullets: [
            'Atomic structure',
            'Chemical bonding basics',
            'Reactions',
            'Acids, bases and salts',
            'Basic organic chemistry concepts',
          ],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Matter', text: 'Everything around us that takes up space.' },
          { title: 'Solids', text: 'Fixed shape, like a coin or a brick.' },
          { title: 'Liquids', text: "They flow and take the container's shape." },
          { title: 'Gases', text: 'They spread out and fill the whole space.' },
          { title: 'Atoms', text: 'The tiny building blocks matter is made from.' },
          { title: 'Elements', text: 'Substances made of just one type of atom.' },
          { title: 'Compounds', text: 'Two or more elements joined together.' },
          { title: 'Mixtures', text: 'Substances together but not joined.' },
          { title: 'Changes in matter', text: 'Physical changes and chemical changes.' },
          {
            title: 'Acids and bases',
            text: 'Two groups of substances with different properties.',
          },
          {
            title: 'Simple reactions',
            text: 'When substances interact and something new forms.',
          },
          {
            title: 'Separation methods',
            text: 'Filtering, sieving, evaporating and picking out.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise Chemistry Learning',
        lead: 'A general guide to what Chemistry can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '6–8 Years',
            text: 'Sorting materials, naming solids, liquids and gases, watching ice melt, and mixing sugar into water. Mostly looking and describing.',
          },
          {
            title: '9–11 Years',
            text: 'Mixtures and how to separate them, physical versus chemical changes, first ideas about atoms, and everyday acids and bases.',
          },
          {
            title: '12–14 Years',
            text: 'Elements and compounds, reading the periodic table, chemical reactions, and properties of materials with simple measurement.',
          },
          {
            title: '14+ Years',
            text: 'Atomic structure, bonding basics, acids, bases and salts, and an introduction to organic chemistry concepts.',
          },
        ],
        note: 'These are general age guides for Chemistry learning, not fixed Brolly Juniors batch groups. Readiness and current school level matter more than age alone. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Matter for Kids',
        lead: 'Matter is anything that takes up space. Your desk, your water bottle and the air in the room are all matter.',
        id: 'matter',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Solid — Ice',
            text: 'Keeps its own shape. An ice cube stays a cube until something changes it.',
          },
          {
            title: 'Liquid — Water',
            text: 'Takes the shape of whatever holds it. Pour it into a glass and it becomes glass-shaped.',
          },
          { title: 'Gas — Steam', text: 'Spreads out to fill all the space it can reach.' },
        ],
        note: 'Here is the part children find surprising: ice, water and steam are all the same substance. Only the state has changed. Warm the ice and it becomes water. Warm the water enough and it becomes steam. Cool the steam and it becomes water again. Nothing new was made. That is why melting and boiling are called physical changes.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Atoms for Kids',
        lead: 'An atom is a very tiny building block that makes up matter.',
        id: 'atoms',
        kind: 'split',
        paras: [
          'That is enough for a young child. Older children go further into what an atom is made of, but only once the basic picture is comfortable.',
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Elements for Kids',
        lead: 'An element is a substance made of only one type of atom.',
        id: 'elements',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Oxygen',
            text: 'Part of the air we breathe. We cannot see it, but it is there.',
          },
          { title: 'Iron', text: 'Used in gates, tools and vehicles. Strong, and it can rust.' },
          {
            title: 'Gold',
            text: 'Used in jewellery. It does not rust, which is one reason it stays shiny.',
          },
          {
            title: 'Carbon',
            text: 'Found in pencil lead, in charcoal — and in every living thing.',
          },
        ],
        note: 'If you had a box containing only one kind of brick, that box would be an element. There are just over a hundred known elements. Everything else is built by combining them.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Compounds for Kids',
        lead: 'A compound forms when two or more elements join together.',
        id: 'compounds',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Water', text: 'Water is made from hydrogen and oxygen joined together.' },
          {
            title: 'Table salt',
            text: 'Salt is made from sodium and chlorine joined together.',
          },
        ],
        note: 'A compound behaves like a completely new substance, not like the elements it came from. That is what makes it different from a mixture.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Mixtures for Kids',
        lead: 'In a mixture, substances are combined but each one stays itself.',
        id: 'mixtures',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Sand and water',
            text: 'You can still see both. Leave it to settle and the sand sinks to the bottom.',
          },
          {
            title: 'Fruit salad',
            text: 'The apple is still apple and the banana is still banana. You could pick them apart.',
          },
          {
            title: 'Salt and water',
            text: 'You cannot see the salt any more, but it is still salt. Let the water dry and the salt comes back.',
          },
          {
            title: 'Mixture or compound?',
            text: 'In a mixture nothing new is made and the parts can usually be separated again. In a compound the elements join, and a new substance forms.',
          },
          {
            title: 'Separating mixtures',
            text: 'Sieving for big and small pieces. Filtering for solids in liquid. Evaporating to leave salt behind. Even picking stones out of rice counts.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Physical and Chemical Changes',
        lead: 'Some changes can be undone. Some cannot. That is the simplest way to tell them apart.',
        id: 'changes',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Physical change — ice melting',
            text: 'Ice melts into water. Nothing new has been made. Put the water back in the freezer and you get ice again.',
          },
          {
            title: 'Chemical change — iron rusting',
            text: 'An iron gate left in the rain turns orange and flaky. Rust is a new substance. You cannot turn it back into shiny iron by drying it.',
          },
        ],
        note: 'A useful question for children: can I get the original back? If yes, it was probably a physical change. If no, something new has formed.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Acids and Bases for Kids',
        lead: 'Acids and bases are two groups of substances with different properties.',
        id: 'acids-bases',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Acids',
            text: 'Many acids taste sour when they are found in food.',
            list: ['Lemon juice', 'Vinegar', 'Tamarind', 'Curd'],
          },
          {
            title: 'Bases',
            text: 'Many bases feel slippery and are used for cleaning.',
            list: ['Soap', 'Baking soda', 'Toothpaste'],
          },
        ],
        note: 'Children can learn to identify acids and bases using a safe indicator, such as water coloured by boiled red cabbage or a paper strip. The colour changes tell you which group a substance belongs to.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Chemical Reactions',
        lead: 'When some substances interact, they can form new substances. That is a chemical reaction.',
        id: 'reactions',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Baking soda and vinegar',
            text: 'Mix a little of each and bubbles appear straight away. The bubbles are a gas that was not there before.',
          },
          {
            title: 'Baking a cake',
            text: 'Flour, egg and sugar go in. Cake comes out. You cannot turn the cake back into the ingredients.',
          },
          {
            title: 'Iron rusting',
            text: 'Iron plus air plus water, given time, makes rust. Slow, but still a reaction.',
          },
        ],
        note: 'Signs a reaction may have happened: bubbles, a colour change, heat, a new smell, or a solid appearing in a liquid.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Periodic Table for Kids',
        lead: 'The periodic table is simply a way of organising all the known elements.',
        id: 'periodic-table',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Elements', text: 'Each box on the table is one element.' },
          { title: 'Symbols', text: 'A short code. O is oxygen, Fe is iron, Au is gold.' },
          {
            title: 'Atomic numbers',
            text: 'The small number that gives each element its place in order.',
          },
          { title: 'Groups', text: 'Columns of elements that behave in similar ways.' },
        ],
        note: 'Think of it as a very well-organised shelf. Elements that behave in similar ways are placed near each other, so you can find what you need. Younger children do not need to memorise the table. Recognising a few symbols and understanding why the table is organised at all is plenty.',
        band: false,
      },
      {
        eyebrow: 'Safe experiments',
        title: 'Chemistry Experiments for Kids',
        lead: 'Low-risk activities using ordinary kitchen materials, with an adult present.',
        id: 'experiments',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Observing Dissolving',
            icon: '🥛',
            text: 'Stir sugar into cold water and into warm water. Which dissolves faster, and why do you think that is?',
          },
          {
            title: 'Simple Density Activity',
            icon: '⚖',
            text: 'Drop a grape, a coin and a piece of cork into water. Predict first, then watch which float.',
          },
          {
            title: 'Safe Indicator Activity',
            icon: '🍆',
            text: 'Use water coloured by boiled red cabbage to test lemon juice and baking soda. Watch the colours change.',
          },
          {
            title: 'Mixture Separation',
            icon: '☕',
            text: 'Separate sand from water using a filter paper or a clean cloth.',
          },
          {
            title: 'State-of-Matter Observation',
            icon: '🧊',
            text: 'Leave an ice cube on a plate and record what happens every ten minutes.',
          },
          {
            title: 'Surface Tension Demonstration',
            icon: '💧',
            text: 'Float a paper clip on still water. Add one drop of soap and watch it sink.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Try it now',
        title: 'What Happens?',
        lead: 'Five quick Chemistry questions. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'What happens when sugar is mixed with water?',
            opts: [
              'It disappears completely',
              'It dissolves into the water',
              'It becomes a gas immediately',
              'It turns into metal',
            ],
            a: 'It dissolves into the water',
            why: 'The sugar breaks into pieces far too small to see and spreads evenly through the water. It is still there — the water tastes sweet. That is dissolving.',
            hint: 'Choose one answer.',
          },
          {
            q: 'An ice cube melts into water. What kind of change is this?',
            opts: [
              'A chemical change',
              'A physical change',
              'No change at all',
              'A new element forms',
            ],
            a: 'A physical change',
            why: 'Nothing new was made. It is the same substance in a different state, and freezing it turns it back into ice. That makes it a physical change.',
            hint: 'Choose one answer.',
          },
          {
            q: 'An iron gate is left out in the rain and turns orange and flaky. What has happened?',
            opts: [
              'The paint has faded',
              'It has rusted, which is a chemical change',
              'It has melted',
              'It has dissolved',
            ],
            a: 'It has rusted, which is a chemical change',
            why: 'Rust is a new substance formed from iron, air and water. You cannot dry it back into shiny iron, so this is a chemical change.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these is a mixture rather than a compound?',
            opts: ['Water', 'Table salt', 'Sand and water', 'Carbon dioxide'],
            a: 'Sand and water',
            why: 'In sand and water both substances stay themselves and can be separated again by filtering. Water and salt are compounds, where elements have joined to form a new substance.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Lemon juice and vinegar both belong to which group?',
            opts: ['Bases', 'Acids', 'Metals', 'Gases'],
            a: 'Acids',
            why: 'Both are acids, which is why they taste sour. Soap and baking soda are examples of bases. Children should only ever test well-known kitchen items, with an adult present.',
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Getting started',
        title: 'Chemistry for Beginners',
        lead: 'Your child does not need any background. Chemistry begins with things already in your kitchen.',
        id: 'beginners',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Materials', text: 'What is this made of, and how can you tell?' },
          {
            title: 'Solids, liquids, gases',
            text: 'The first sorting task, and the most useful one.',
          },
          { title: 'Mixtures', text: 'Sand and water, salt and water, a fruit salad.' },
          { title: 'Changes', text: 'Melting, dissolving, drying, rusting.' },
          { title: 'Simple observations', text: 'Writing down what changed, and when.' },
          { title: 'No equations yet', text: 'Symbols and formulas come much later.' },
          {
            title: 'Questions welcome',
            text: '"I don\'t know, let\'s check" is a good answer here.',
          },
          {
            title: 'Not sure where to start?',
            text: 'A Free Demo helps us find the right level. Call 7036044555.',
          },
        ],
        note: 'A beginner can start with materials, solids, liquids and gases, mixtures, simple changes and careful observation. No formulas. No equations. No laboratory. Just looking closely at ordinary things and asking what is going on.',
        band: true,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Chemistry Through Activities',
        lead: 'Chemistry is about change. Change is much easier to understand when you watch it happen.',
        id: 'activity-learning',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Observation',
            text: 'Children report what they saw, not what they expected to see.',
          },
          {
            title: 'Questions',
            text: 'Every activity begins with a prediction, which is a question in disguise.',
          },
          {
            title: 'Hands-on activities',
            text: 'Stirring, sorting, filtering and testing with their own hands.',
          },
          {
            title: 'Safe demonstrations',
            text: 'When an activity is not suitable for children to do, the mentor shows it instead.',
          },
          {
            title: 'Visual examples',
            text: 'Diagrams for the things that are too small to see.',
          },
          {
            title: 'Discussion',
            text: 'Children explain their reasoning aloud, which is the real test of understanding.',
          },
        ],
        note: 'Activity-based learning helps children understand concepts. It is not a promise of better marks, and we do not present it as one.',
        band: false,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Chemistry and Mathematics',
        lead: 'Chemistry uses Maths whenever the question becomes "how much?" rather than "what happened?".',
        id: 'chemistry-maths',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Measurement',
            text: 'How many millilitres of water, how many grams of salt.',
          },
          {
            title: 'Counting',
            text: 'Counting atoms in a simple formula, such as the two hydrogens in H₂O.',
          },
          {
            title: 'Ratios',
            text: 'Mixing two spoons of one thing to three of another, and keeping it consistent.',
          },
          {
            title: 'Data',
            text: 'Recording results in a neat table so they can be compared later.',
          },
          {
            title: 'Graphs',
            text: 'Drawing how much dissolved against how warm the water was.',
          },
          {
            title: 'Maths first?',
            text: 'If your child finds Maths hard, we keep the numbers light and build the concept first.',
          },
        ],
        note: 'Children who enjoy the number side often also enjoy Abacus or Vedic Maths, which build calculation confidence. Ask us which suits your child.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Chemistry and Physics',
        lead: 'These two subjects meet more often than most children expect.',
        id: 'chemistry-physics',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Matter',
            text: 'Chemistry asks what it is made of. Physics asks how it moves and behaves.',
          },
          {
            title: 'Energy',
            text: 'Some reactions give out energy. Some need energy to start.',
          },
          {
            title: 'Heat',
            text: 'Warm water dissolves sugar faster. That is Chemistry and Physics in one glass.',
          },
          {
            title: 'Movement of particles',
            text: 'Particles move faster when warmer, which is why smells spread across a room.',
          },
          {
            title: 'Properties of materials',
            text: 'Hard, soft, heavy, conducting — both subjects care about these.',
          },
          {
            title: 'Different focus',
            text: 'Chemistry: what things are made of and how they change. Physics: how things move, work and interact.',
          },
        ],
        note: 'If your child is drawn to how things move rather than what they are made of, ask us about Physics classes when you call.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Chemistry and Problem Solving',
        lead: 'Every Chemistry question can be worked through in six moves.',
        id: 'problem-solving',
        kind: 'timeline',
        items: [
          { title: 'Observe', text: 'What is actually happening here?' },
          { title: 'Understand', text: 'What is the question asking me to find out?' },
          { title: 'Think', text: 'Which idea applies — a mixture, a change, a reaction?' },
          { title: 'Try', text: 'Test it safely, or reason it out on paper.' },
          { title: 'Check', text: 'Does the answer fit everything I observed?' },
          {
            title: 'Explain',
            text: 'Say it out loud. If you can explain it, you understand it.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Chemistry and Critical Thinking',
        lead: 'Chemistry teaches children to trust careful observation over first impressions.',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'Ask why. Not just what changed, but what caused the change.',
          'Make observations. Write down what was actually seen, including surprises.',
          'Compare materials. Two substances, one test — what was different?',
          'Look for patterns. Does this happen every time, or only sometimes?',
          'Test ideas safely. Change one thing at a time, with an adult present.',
          'Explain what they noticed. In their own words, before anyone corrects them.',
        ],
        band: false,
      },
      {
        eyebrow: 'Everyday Chemistry',
        title: 'Real-Life Chemistry',
        lead: 'Chemistry is happening in your kitchen right now.',
        id: 'real-life',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Cooking',
            icon: '🍳',
            text: 'Heat changes food permanently. A boiled egg cannot go back.',
          },
          {
            title: 'Baking',
            icon: '🧁',
            text: 'Baking soda makes gas bubbles, which is why a cake rises.',
          },
          {
            title: 'Cleaning',
            icon: '🧼',
            text: 'Detergent helps water lift away dirt that water alone cannot.',
          },
          {
            title: 'Soap',
            icon: '🧼',
            text: 'One end of a soap particle grabs oil, the other end grabs water.',
          },
          {
            title: 'Food',
            icon: '🍎',
            text: 'A cut apple turns brown in air. That is a chemical change.',
          },
          {
            title: 'Water',
            icon: '💧',
            text: 'It dissolves so many things that it is called the universal solvent.',
          },
          {
            title: 'Rust',
            icon: '🚪',
            text: 'Iron plus air plus water, over time, makes rust.',
          },
          {
            title: 'Plants',
            icon: '🌱',
            text: 'Plants build their own food using sunlight, air and water.',
          },
        ],
        note: 'Children sometimes ask about medicines, since medicines are made using Chemistry. We keep that at the level of an idea only. Nothing on this page is medical advice, and questions about any medicine should go to a doctor or pharmacist.',
        band: true,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Make Chemistry Fun for Your Child',
        id: 'parent-guide',
        kind: 'pills',
        items: [
          'Ask questions instead of giving answers. "What do you think will happen?"',
          'Use everyday examples — the kettle, the soap, the rusty gate, the browning apple.',
          'Try safe activities with sugar, salt, water, lemon juice and baking soda.',
          'Talk about materials. What is this spoon made of? Why not plastic?',
          'Observe changes over time, such as an ice cube melting or bread going stale.',
          'Encourage curiosity even when the question has no quick answer.',
          'Let children explain their ideas fully before you correct anything.',
        ],
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Chemistry classes in Hyderabad',
          'Chemistry classes for kids in Hyderabad',
          'Science classes for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for a Chemistry session at Brolly Juniors.',
      items: [
        {
          title: 'Curiosity Question',
          text: 'The session opens with a question, such as "where does the sugar go when it disappears in tea?"',
        },
        {
          title: 'Learn the Concept',
          text: 'The idea behind it is explained in plain words, with a drawing or an object in hand.',
        },
        {
          title: 'See an Everyday Example',
          text: 'The mentor connects it to something the child already knows — cooking, cleaning, rust.',
        },
        {
          title: 'Try a Safe Activity',
          text: 'Children test it with everyday materials, and are asked to predict before they start.',
        },
        {
          title: 'Observe the Result',
          text: 'What actually happened? Not what should have happened — what did.',
        },
        {
          title: 'Discuss What We Learned',
          text: "The concept is restated in the children's own words before the session ends.",
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Chemistry Activities for Kids',
      lead: 'Games and sorting tasks used during Chemistry sessions.',
      items: [
        {
          title: 'State of Matter Sort',
          icon: '🧊',
          text: 'Sort picture cards into solid, liquid and gas. Argue about the tricky ones.',
        },
        {
          title: 'Mixture Matching',
          icon: '🥣',
          text: 'Match each mixture to the best way of separating it.',
        },
        {
          title: 'Element Symbol Game',
          icon: '🏷',
          text: 'Match symbols to names. O, Fe, Au, Na, C.',
        },
        {
          title: 'Material Detective',
          icon: '🕵',
          text: 'Pick up an object and work out what it is made of, and why.',
        },
        {
          title: 'Pattern Activity',
          icon: '📈',
          text: 'Spot the pattern in a row of the periodic table.',
        },
        {
          title: 'Change or No Change?',
          icon: '🔄',
          text: 'Decide whether each example is a physical or a chemical change.',
        },
        {
          title: 'Periodic Table Hunt',
          icon: '🔍',
          text: 'Find the element that matches each clue.',
        },
        {
          title: 'Observation Challenge',
          icon: '👀',
          text: 'Write down five things you noticed. Compare with a friend.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. The scientific term comes once the idea is clear.',
        },
        {
          title: 'Activity-based learning',
          icon: '🧪',
          text: 'Children test ideas themselves, safely, instead of only hearing about them.',
        },
        {
          title: 'Concept-focused learning',
          icon: '💡',
          text: 'Understanding is the goal, not memorising a definition.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: "Every concept is tied to something in a child's own home.",
        },
        {
          title: 'Parent-friendly communication',
          icon: '📞',
          text: 'Ask us anything about level, format, safety or fit before you decide. Call 7036044555.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'Chemistry class fees',
    },
    trial: {
      title: 'Let Your Child Explore the World of Chemistry',
      paras: [
        'A Free Demo is one short session where your child tries a safe Chemistry activity and you see how the teaching works. Book a slot, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'The kitchen is full of Chemistry, and most children walk past it every day. Let them explore simple concepts, ask their own questions, observe carefully and try safe activities that show them why things change. Start with a Free Demo and see how they respond.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child explores one Chemistry concept with a safe activity',
        'You see how ideas are explained in simple language',
        "We discuss your child's current level and what would suit them",
        'You ask about formats, timings, safety and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support Chemistry Learning at Home',
      lead: 'You do not need to know Chemistry. You mainly need to ask one good question.',
      items: [
        {
          title: 'Ask "why do you think this happened?"',
          text: 'This one question does more than any explanation you could give.',
        },
        {
          title: 'Observe everyday materials',
          text: 'Point out the rust on a gate, the steam from a pan, the bubbles in dough.',
        },
        {
          title: 'Use safe activities',
          text: 'Sugar, salt, water, lemon and baking soda are enough for months of learning.',
        },
        {
          title: 'Encourage questions',
          text: '"I don\'t know, let\'s find out together" is a perfectly good answer.',
        },
        {
          title: 'Let them observe first',
          text: 'Ask what they noticed before you say what you noticed.',
        },
        {
          title: 'Allow safe mistakes',
          text: 'A wrong prediction shows exactly where the understanding needs work.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'Chemistry Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Chemistry Classes for Kids Near Me?',
      lead: 'If you are searching for chemistry classes for kids near me, chemistry classes near me or science classes for kids near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'How AI tools work and how to use them thoughtfully. Built on the same habit of asking how things work.',
        to: '/ai-for-kids',
      },
      {
        icon: '💻',
        title: 'Python for Kids',
        text: 'Coding with Python. Useful for children who enjoy the step-by-step, methodical side of science.',
        to: '/python-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation, which support the measurement side of Chemistry.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods. Helpful once Chemistry starts involving numbers and ratios.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Safe, confident use of everyday digital tools.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Explaining ideas clearly out loud — exactly what we ask children to do after every activity.',
        to: '/junior-skills/public-speaking',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Chemistry sits alongside several other skill programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Chemistry Classes for Kids: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are Chemistry classes for kids?',
        a: 'They are lessons about what things are made of and how they change, explained in language a child can follow. Children learn about matter, solids, liquids and gases, atoms, elements, compounds, mixtures, physical and chemical changes, acids and bases, and safe everyday reactions.',
      },
      {
        q: 'Why should children learn Chemistry?',
        a: 'Chemistry builds curiosity, careful observation, scientific thinking and problem solving. It also explains ordinary things — why soap cleans, why iron rusts, why a cut apple turns brown. Children who understand the reasons behind everyday changes tend to keep asking good questions.',
      },
      {
        q: 'What age can children start learning Chemistry?',
        a: 'Children can begin exploring simple Chemistry ideas from around 6 years, by sorting materials and watching things melt or dissolve. Formulas and equations come much later. Readiness and school level matter more than age alone. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'What topics are taught in Chemistry classes?',
        a: "Possible topics include matter, solids, liquids and gases, atoms, elements, compounds, mixtures, changes in matter, acids and bases, simple chemical reactions, materials and separation methods. The exact topics depend on the child's age and school level.",
      },
      {
        q: 'Is Chemistry suitable for beginners?',
        a: 'Yes. A beginner starts with things already in the kitchen — sugar dissolving, ice melting, sand settling in water. No laboratory, no equations and no background knowledge are needed.',
      },
      {
        q: 'Do children learn Chemistry through activities?',
        a: 'Yes. Children predict what will happen, try a safe activity, observe the result and then discuss why it happened. Chemistry is about change, and change is far easier to understand when you watch it.',
      },
      {
        q: 'Are Chemistry experiments included?',
        a: "Safe, low-risk activities are included where they suit the topic and the child's age — dissolving, floating and sinking, filtering, and a red cabbage indicator test. We never use fire, flames, explosives, toxic chemicals, concentrated acids or bases, or laboratory reagents. Children are supervised throughout.",
      },
      {
        q: 'What are safe Chemistry activities for kids?',
        a: 'Stirring sugar into cold and warm water to compare dissolving, dropping objects into water to see which float, testing lemon juice and baking soda with a red cabbage indicator, filtering sand out of water, watching an ice cube melt, and floating a paper clip on water until soap is added.',
      },
      {
        q: 'Do kids learn about atoms and elements?',
        a: 'Yes, at an age-appropriate level. An atom is introduced as a very tiny building block, like a brick in a wall. An element is a substance made of only one type of atom, with examples such as oxygen, iron, gold and carbon.',
      },
      {
        q: 'Do children learn about mixtures and compounds?',
        a: 'Yes, and the difference between them is one of the most useful ideas we teach. In a mixture the substances stay themselves and can usually be separated again. In a compound the elements join and a new substance forms, such as hydrogen and oxygen joining to make water.',
      },
      {
        q: 'Do kids learn about acids and bases?',
        a: 'Yes, using safe everyday examples only — lemon juice and vinegar as acids, soap and baking soda as bases. Children may use a safe indicator such as red cabbage water. They are never asked to taste, touch or smell an unknown substance, and strong acids and bases are never used.',
      },
      {
        q: 'Do children learn about chemical reactions?',
        a: 'Yes, through safe examples such as baking soda and vinegar producing bubbles, a cake rising, or iron rusting over time. Children learn the signs that a reaction may have happened: bubbles, colour change, heat, a new smell, or a solid forming. We do not demonstrate dangerous reactions.',
      },
      {
        q: 'Is Chemistry connected to Physics and Mathematics?',
        a: 'Yes. Chemistry meets Physics around matter, energy, heat, particle movement and material properties. It meets Maths whenever we measure, count, use ratios, record data or draw a graph. For younger children we keep the numbers light and build the concept first.',
      },
      {
        q: 'How is Chemistry different from Physics, General Science, Maths and Robotics classes?',
        a: 'Chemistry focuses on what things are made of and how they change. Physics focuses on how things move, work and interact. General Science covers a wider range including living things. Maths programmes such as Abacus and Vedic Maths build number and calculation skills. Robotics is about building and programming machines. They overlap, but each has a different focus.',
      },
      {
        q: 'What are the fees for Chemistry classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and school class, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'Chemistry in Short',
    quickAnswers: [
      {
        q: 'What is Chemistry for kids?',
        a: 'Chemistry is the study of what things are made of and how they change — explained through everyday examples a child can see.',
      },
      {
        q: 'Why is Chemistry important for children?',
        a: 'It builds curiosity, observation, scientific thinking and problem solving, and explains the materials and changes around them.',
      },
      {
        q: 'What do kids learn in Chemistry classes?',
        a: 'Matter, solids, liquids and gases, atoms, elements, compounds, mixtures, physical and chemical changes, acids and bases, reactions and separation methods.',
      },
      {
        q: 'What Chemistry experiments can kids do safely?',
        a: 'Dissolving tests, floating and sinking, filtering sand from water, red cabbage indicator tests and melting observations — all with adult supervision.',
      },
      {
        q: 'How can children learn Chemistry easily?',
        a: 'Start with kitchen examples, predict before testing, observe carefully, and explain what they noticed in their own words.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are Chemistry classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad learn what things are made of and how they change — matter, mixtures, atoms, elements and safe reactions — through simple explanations and hands-on activities. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn Chemistry in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is Chemistry suitable for young children?"',
        a: 'Yes, if it is taught through kitchen examples rather than formulas. Sorting solids, liquids and gases, and watching sugar dissolve, suit children from around 6 years.',
      },
      {
        q: '"What do kids learn in Chemistry classes?"',
        a: 'Matter, states of matter, atoms, elements, compounds, mixtures, physical and chemical changes, acids and bases, reactions and how to separate mixtures.',
      },
      {
        q: '"What are safe Chemistry activities for children?"',
        a: 'Dissolving sugar in cold and warm water, testing which objects float, filtering sand from water, and using red cabbage water as a safe indicator — always with an adult present.',
      },
      {
        q: '"Chemistry classes for kids near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     Physics Tuition — /tuitions/physics
     ================================================================== */
  '/tuitions/physics': {
    h1: 'Physics tuition in Hyderabad where the concept comes before the formula.',
    lead: 'Motion, light, electricity and energy taught with demonstrations first, then numericals, then the diagrams that carry so many marks.',
    heroPills: ['Motion', 'Force', 'Energy', 'Light'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 8–10', 'Batches of eight'],
    hero: {
      title: 'What are Physics Classes for Kids?',
      paras: [
        'Children ask "why?" all day. Why does a ball roll? Why does a shadow follow me? Physics is the subject that answers those questions. At Brolly Juniors in Hyderabad, children explore Physics through simple concepts and real things they can see.',
        'Physics classes for kids are lessons that explain how things move, work and interact, in language a child can follow. Children learn about motion, force, gravity, light, sound, heat, magnets, electricity, energy and simple machines through everyday examples, observation and safe hands-on activities.',
      ],
    },
    facts: [
      { strong: 'Classes 8–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Demonstrations', span: 'Before formulae' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Physics Learning Looks Like',
      lead: 'Six things children do in a Physics session at Brolly Juniors.',
      items: [
        {
          title: 'Learn Physics Concepts',
          icon: '🔭',
          text: 'Ideas like force, motion and energy explained in plain words first, technical terms after.',
        },
        {
          title: 'Explore Through Activities',
          icon: '🧪',
          text: 'Children try safe, low-risk activities and watch what actually happens.',
        },
        {
          title: 'Understand Everyday Science',
          icon: '🏠',
          text: 'Fans, bicycles, swings, mirrors and doors all become examples.',
        },
        {
          title: 'Build Scientific Thinking',
          icon: '🧠',
          text: 'Observe, guess, test, compare. That is the habit we practise.',
        },
        {
          title: 'Solve Simple Problems',
          icon: '🧩',
          text: 'Short questions about distance, time and speed at an age-appropriate level.',
        },
        {
          title: 'Ask and Explore',
          icon: '❓',
          text: 'Questions are welcome. "Why did that happen?" is the start of every good lesson.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is Physics for Kids?',
      lead: 'Physics is the study of how things move, how they work and how they affect each other.',
      paras: [
        'That sounds big. In practice, for a child, Physics is simply the answer to questions they already ask.',
      ],
      answerRowsTitle: 'The questions this actually answers',
      answerRows: [
        {
          tag: 'Why does a ball roll?',
          text: 'Because it is round, and because something pushed it. Round shapes keep moving easily along the ground.',
        },
        {
          tag: 'Why does a toy car stop?',
          text: 'Rubbing between the wheels and the floor slows it down. We call that rubbing friction.',
        },
        {
          tag: 'Why does a shadow appear?',
          text: 'Your body blocks the light. The dark patch behind you is where the light could not reach.',
        },
        {
          tag: 'Why do objects fall?',
          text: 'The Earth pulls things towards it. That pull is called gravity.',
        },
        {
          tag: 'How does a swing move?',
          text: 'A push starts it. Then it swings back and forth until friction and air slow it down.',
        },
        {
          tag: 'So what is Physics?',
          text: 'Physics is looking closely at ordinary things and finding the reason behind them.',
        },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Physics?',
      lead: 'Because Physics rewards the thing children already do naturally: noticing and asking.',
      items: [
        {
          title: 'Curiosity',
          text: 'Physics gives children permission to keep asking why, and gives them ways to find out.',
        },
        {
          title: 'Observation',
          text: 'Looking carefully at what happened, rather than what they expected to happen.',
        },
        {
          title: 'Logical thinking',
          text: 'If I push harder, what changes? Cause and effect, tested step by step.',
        },
        {
          title: 'Problem solving',
          text: 'Working out why the toy car keeps stopping halfway, and what to try next.',
        },
        {
          title: 'Scientific thinking',
          text: 'Making a guess, testing it, and being willing to change the guess.',
        },
        {
          title: 'Understanding everyday events',
          text: 'Rain, shadows, fans, brakes, echoes — each one has a reason a child can grasp.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, exam results or ranks. We focus on understanding, safe exploration and clear explanations.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Physics Learning',
      lead: 'Ten skills children practise while exploring Physics.',
      items: [
        {
          title: 'Scientific Thinking',
          icon: '🔬',
          text: 'Guess, test, look, decide. A repeatable way of finding things out.',
        },
        {
          title: 'Observation',
          icon: '👀',
          text: 'Noticing small details that explain the big result.',
        },
        {
          title: 'Curiosity',
          icon: '❓',
          text: 'Wanting to know the reason, not just the rule.',
        },
        {
          title: 'Logical Reasoning',
          icon: '🔢',
          text: 'Following a cause through to its effect without skipping steps.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Trying a change, seeing the result, and adjusting.',
        },
        {
          title: 'Questioning',
          icon: '💬',
          text: 'Learning to ask a question that can actually be tested.',
        },
        {
          title: 'Critical Thinking',
          icon: '⚖',
          text: 'Comparing two results and deciding what really caused the difference.',
        },
        {
          title: 'Concept Understanding',
          icon: '💡',
          text: 'Knowing why a rule works, so it is not just memorised.',
        },
        {
          title: 'Practical Thinking',
          icon: '🛠',
          text: 'Connecting a classroom idea to a bicycle, a fan or a torch.',
        },
        {
          title: 'Confidence',
          icon: '🌟',
          text: 'Feeling able to say "I think it happened because…" out loud.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible Physics areas for children. The mix depends on your child's age and school level.",
      items: [
        'Motion',
        'Force',
        'Energy',
        'Light',
        'Sound',
        'Heat',
        'Magnets',
        'Electricity',
        'Gravity',
        'Simple Machines',
        'Measurement',
        'Matter',
      ],
      note: 'Topics are chosen to suit the child. A six-year-old may spend a whole session on shadows, while an older child works on speed and circuits. Contact Brolly Juniors for current details.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Physics Curriculum',
      lead: 'A suggested learning progression, from first ideas to school-level Physics.',
      label: 'Physics Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation',
          title: 'Foundation Physics',
          intro: 'First ideas, learned mostly by looking and trying.',
          bullets: ['Motion', 'Push and pull', 'Light and shadows', 'Sound', 'Magnets'],
        },
        {
          key: 'stage-2',
          label: 'Basic',
          title: 'Basic Physics',
          intro: 'Named concepts, still explained through everyday objects.',
          bullets: ['Force', 'Gravity', 'Energy', 'Heat', 'Simple machines'],
        },
        {
          key: 'stage-3',
          label: 'Intermediate',
          title: 'Intermediate Physics',
          intro: 'Measurement and numbers begin to join the explanations.',
          bullets: [
            'Motion and speed',
            'Electricity',
            'Light',
            'Sound',
            'Energy transfer',
            'Measurement',
          ],
        },
        {
          key: 'stage-4',
          label: 'Advanced School',
          title: 'Advanced School Physics',
          intro: 'Topics that match upper school Physics, with concept clarity as the goal.',
          bullets: ['Motion', 'Force', 'Work and energy', 'Electricity', 'Waves', 'Basic mechanics'],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age, school level and learning needs. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Motion', text: 'How and why things change position.' },
          { title: 'Force', text: 'Pushes and pulls that start, stop or turn things.' },
          { title: 'Energy', text: 'What makes things move, glow, heat or sound.' },
          { title: 'Light', text: 'Sources, shadows and reflection.' },
          { title: 'Sound', text: 'Vibrations, loud and soft, high and low.' },
          { title: 'Heat', text: 'Warm and cold, and how heat moves.' },
          { title: 'Magnets', text: 'Attraction, repulsion and magnetic materials.' },
          { title: 'Electricity', text: 'Simple circuits with batteries, safely.' },
          { title: 'Gravity', text: 'Why objects fall towards the ground.' },
          { title: 'Simple Machines', text: 'Levers, wheels, pulleys and ramps.' },
          { title: 'Measurement', text: 'Length, time, weight and speed.' },
          { title: 'Matter', text: 'Solids, liquids and gases around us.' },
        ],
        band: false,
      },
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise Physics Learning',
        lead: 'A general guide to what Physics can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '6–8 Years',
            text: 'Push and pull, rolling and sliding, shadows, loud and soft sounds, and which objects a magnet picks up. Mostly looking and trying.',
          },
          {
            title: '9–11 Years',
            text: 'Force and friction, gravity, forms of energy, reflection, simple machines, and first measurements of length and time.',
          },
          {
            title: '12–14 Years',
            text: 'Speed and distance-time thinking, simple circuits with batteries, heat versus temperature, and sound as vibration.',
          },
          {
            title: '14+ Years',
            text: 'Motion, force, work and energy, electricity and waves, with numerical problems at school level.',
          },
        ],
        note: 'These are general age guides for Physics learning, not fixed Brolly Juniors batch groups. Readiness and current school level matter more than age alone. Contact Brolly Juniors for current details.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Motion for Kids',
        lead: 'Motion means an object changes its position.',
        id: 'motion',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Running',
            icon: '🏃',
            text: 'Your child starts near the gate and ends near the tree. Position changed.',
          },
          {
            title: 'Cycling',
            icon: '🚴',
            text: 'The whole cycle moves forward while the wheels turn in place.',
          },
          {
            title: 'Rolling a ball',
            icon: '⚽',
            text: 'A round shape keeps moving until something slows it down.',
          },
          {
            title: 'A moving car',
            icon: '🚗',
            text: 'Fast or slow, the car covers distance in time.',
          },
          {
            title: 'A swing',
            icon: '🌱',
            text: 'Motion that goes forward and back, again and again.',
          },
          {
            title: 'Fast or slow?',
            text: 'Two children walk to the same shop. One takes 5 minutes, one takes 10. Same distance, different speed.',
          },
        ],
        note: 'If something is in one place, and a moment later it is somewhere else, it is in motion. That is the whole idea.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Force: Push and Pull',
        lead: 'A force is a push or a pull. That is the simplest way to say it.',
        id: 'force',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Push',
            list: [
              'Pushing a door to open it',
              'Pushing a toy car forward',
              'Kicking a ball — a quick push with your foot',
            ],
          },
          {
            title: 'Pull',
            list: [
              'Pulling a drawer open',
              'Pulling a bucket up from a well',
              "Pulling a friend's hand in a game",
            ],
          },
        ],
        note: "A force can start something moving, stop it, speed it up, slow it down, or change its direction. A goalkeeper stopping a ball is a force. A cricket bat changing the ball's direction is a force too.",
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Light and Shadows',
        lead: 'Light travels in straight lines. Almost everything about shadows follows from that.',
        id: 'light',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Light sources',
            text: 'The Sun, a bulb, a torch, a candle flame. These make their own light.',
          },
          {
            title: 'Shadows',
            text: 'Stand in sunlight and you block some light. The dark shape on the ground is your shadow.',
          },
          {
            title: 'Reflection',
            text: 'A mirror sends light back. That is why you can see yourself in it.',
          },
          {
            title: 'Transparent objects',
            text: 'Clear glass and water let light pass through, so you can see through them.',
          },
          {
            title: 'Opaque objects',
            text: 'A book or a door stops light completely, so it makes a clear shadow.',
          },
          {
            title: 'Try this',
            text: 'Move a torch closer to a toy and watch the shadow grow. Move it away and the shadow shrinks.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Sound for Kids',
        lead: 'Sound is made when something shakes quickly. That shaking is called vibration.',
        id: 'sound',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'How sounds are made',
            text: 'Pluck a rubber band stretched between your fingers. You can see it wobble and hear the sound at the same moment. Stop the wobble with a finger and the sound stops.',
          },
          {
            title: 'Vibrations you can feel',
            text: 'Put your fingers gently on your throat and hum. The tickle you feel is your voice vibrating.',
          },
          {
            title: 'Loud and soft',
            text: 'A bigger vibration makes a louder sound. Tap a table gently, then a little harder, and listen to the difference.',
          },
          {
            title: 'High and low',
            text: 'A faster vibration makes a higher sound. A small bell sounds higher than a big temple bell.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Heat and Temperature',
        lead: 'These two words sound the same but mean different things.',
        id: 'heat',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Heat',
            text: 'Heat is energy moving from a warmer thing to a cooler thing. Hold a warm cup and your hand gets warmer — heat moved from the cup to you.',
          },
          {
            title: 'Temperature',
            text: 'Temperature is how hot or cold something is. We measure it with a thermometer, in degrees.',
          },
        ],
        note: 'A simple way to picture it: a cup of hot tea and a bucket of warm water may have the same temperature, but the bucket holds much more heat because there is far more water in it.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Magnets',
        lead: 'A magnet pulls certain metals towards it. Children usually love this one.',
        id: 'magnets',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Magnetic materials',
            text: 'Iron, steel, nickel and cobalt are attracted. Paper, plastic, wood and cloth are not.',
          },
          {
            title: 'Attraction',
            text: 'Bring a magnet near a steel paper clip and the clip jumps towards it.',
          },
          {
            title: 'Repulsion',
            text: 'Bring two magnets together the wrong way and they push apart instead.',
          },
          {
            title: 'Magnetic poles',
            text: 'Every magnet has two ends, called north and south. Opposite poles attract, same poles repel.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Electricity for Kids',
        lead: 'Electricity is energy that flows along a path. The path is called a circuit.',
        id: 'electricity',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Circuit',
            text: 'A complete loop. If there is a gap anywhere, nothing flows.',
          },
          {
            title: 'Battery',
            text: 'A small, safe store of electrical energy that pushes the flow along.',
          },
          {
            title: 'Switch',
            text: 'A gap you can open and close. Closed means on, open means off.',
          },
          { title: 'Light bulb', text: 'Turns electrical energy into light and a little heat.' },
          {
            title: 'Conductors',
            text: 'Materials that let electricity pass, such as copper wire.',
          },
          {
            title: 'Insulators',
            text: 'Materials that stop it, such as the plastic covering on a wire.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Energy for Kids',
        lead: 'Energy is what makes things happen. It comes in several forms.',
        id: 'energy',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Light energy', icon: '💡', text: 'From the Sun, a bulb or a torch.' },
          { title: 'Heat energy', icon: '☀', text: 'From the Sun, a warm cup or a stove.' },
          { title: 'Sound energy', icon: '🔊', text: 'From a bell, a drum or a voice.' },
          {
            title: 'Movement energy',
            icon: '🏃',
            text: 'A rolling ball or a running child has it.',
          },
          {
            title: 'Electrical energy',
            icon: '⚡',
            text: 'Flowing through a circuit to light a bulb.',
          },
          {
            title: 'Energy changes form',
            text: 'A torch turns electrical energy into light. A drum turns movement into sound.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Simple Machines',
        lead: 'A simple machine makes a job easier. Children already use several every day.',
        id: 'machines',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Lever',
            text: 'A see-saw is a lever. So is a pair of scissors and a bottle opener.',
          },
          { title: 'Wheel and axle', text: 'A cycle wheel, a door handle, a steering wheel.' },
          {
            title: 'Pulley',
            text: 'The wheel and rope used to lift a bucket from a well, or to raise a flag.',
          },
          {
            title: 'Inclined plane',
            text: 'A ramp. Pushing a heavy bag up a slope is easier than lifting it straight up.',
          },
        ],
        note: 'Simple machines do not remove the work. They spread it out, so it feels easier. That is a genuinely useful idea for a child to hold on to.',
        band: false,
      },
      {
        eyebrow: 'Try it now',
        title: 'What Happens Next?',
        lead: 'Five quick Physics questions. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'Two ramps are the same height. One is steep, one is gentle. You roll the same ball down each. Which one usually reaches the bottom first?',
            opts: [
              'Ball on the steep ramp',
              'Ball on the gentle ramp',
              'Both always stop at the top',
              'Neither ball can move',
            ],
            a: 'Ball on the steep ramp',
            why: 'On the steeper ramp the pull along the slope is greater and the path is shorter, so the ball usually arrives first. This holds when both ramps are smooth and the balls are the same. Change the surface, the ball or the ramp length and the result can change.',
            hint: 'Choose one answer.',
          },
          {
            q: 'You hold your hand in front of a torch. What appears on the wall behind your hand?',
            opts: ['A rainbow', 'A shadow', 'Nothing at all', 'A reflection'],
            a: 'A shadow',
            why: 'Your hand blocks the light. The dark shape on the wall is where the light could not reach. That is a shadow.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these will a magnet attract?',
            opts: ['A plastic comb', 'A wooden pencil', 'A steel paper clip', 'A rubber band'],
            a: 'A steel paper clip',
            why: 'Magnets attract materials such as iron, steel, nickel and cobalt. Plastic, wood and rubber are not magnetic.',
            hint: 'Choose one answer.',
          },
          {
            q: 'A rubber band is stretched and plucked. You stop the wobble with your finger. What happens to the sound?',
            opts: ['It gets louder', 'It stays the same', 'It stops', 'It becomes higher'],
            a: 'It stops',
            why: 'Sound comes from vibration. Stop the vibration and the sound stops with it.',
            hint: 'Choose one answer.',
          },
          {
            q: 'In a simple battery circuit, the switch is left open so there is a gap. What happens to the bulb?',
            opts: [
              'It lights up brightly',
              'It does not light',
              'It lights up slowly',
              'It gets very hot',
            ],
            a: 'It does not light',
            why: 'Electricity needs a complete loop. An open switch leaves a gap, so nothing flows and the bulb stays off.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Getting started',
        title: 'Physics for Beginners',
        lead: 'Your child does not need any background to start. Physics begins with things they already know.',
        id: 'beginners',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Push and pull', text: 'The first force idea, and the easiest.' },
          { title: 'Movement', text: 'Fast, slow, starting, stopping.' },
          { title: 'Light and shadows', text: 'Visible, immediate and fun to test.' },
          { title: 'Sound', text: 'Vibrations children can feel with their own hands.' },
          { title: 'Magnets', text: 'Surprising results in the first minute.' },
          { title: 'Simple machines', text: 'See-saws, ramps and wheels from the playground.' },
          { title: 'No formulas yet', text: 'Numbers come later, once the idea is clear.' },
          {
            title: 'Not sure where to start?',
            text: 'A Free Demo helps us find the right level. Call 7036044555.',
          },
        ],
        note: 'A beginner can start with push and pull, movement, light, sound, magnets, shadows and simple machines. None of these need formulas. They need a curious child and something to look at.',
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Learning Physics Through Activities',
        lead: 'Physics is hard to learn from words alone. Watching it happen makes the idea stick.',
        id: 'activity-learning',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Observation',
            text: 'Children are asked what they saw, not what they think they should have seen.',
          },
          {
            title: 'Questions',
            text: 'Every activity starts with a prediction, which is really a question in disguise.',
          },
          {
            title: 'Hands-on activities',
            text: 'Holding, rolling, balancing and testing with their own hands.',
          },
          {
            title: 'Simple experiments',
            text: 'Safe, repeatable and small enough to finish in one session.',
          },
          {
            title: 'Visual examples',
            text: 'Diagrams and demonstrations for ideas that are hard to picture.',
          },
          {
            title: 'Discussion',
            text: 'Children explain their reasoning to each other, which tests understanding.',
          },
        ],
        note: 'Activity-based learning helps children understand concepts. It is not a promise of better marks, and we do not present it as one.',
        band: true,
      },
      {
        eyebrow: 'Connected subjects',
        title: 'Physics and Mathematics',
        lead: 'Physics uses Maths to measure things and to answer "how much?" rather than only "what happened?".',
        id: 'physics-maths',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Distance',
            text: 'How far did it travel? Measured in metres or kilometres.',
          },
          { title: 'Time', text: 'How long did it take? Measured in seconds or minutes.' },
          {
            title: 'Speed',
            text: 'Distance divided by time. A cycle covering 20 metres in 10 seconds moves at 2 metres per second.',
          },
          {
            title: 'Measurement',
            text: 'Using a scale or a ruler correctly, and writing the unit every time.',
          },
          {
            title: 'Graphs',
            text: 'Drawing a simple chart of distance against time, and reading the shape.',
          },
          {
            title: 'Maths first?',
            text: 'If your child finds Maths hard, we keep numbers light and build the concept first.',
          },
        ],
        note: 'Children who enjoy the number side of Physics often also enjoy Vedic Maths or Abacus, which build calculation confidence. Ask us which suits your child.',
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Physics and Problem Solving',
        lead: 'Every Physics question can be worked through in six moves.',
        id: 'problem-solving',
        kind: 'timeline',
        items: [
          { title: 'Observe', text: 'What is actually happening here?' },
          { title: 'Understand', text: 'What is the question asking me to find?' },
          { title: 'Think', text: 'Which idea applies — force, energy, light, something else?' },
          { title: 'Try', text: 'Test it, or work it out on paper.' },
          { title: 'Check', text: 'Does the answer make sense in the real world?' },
          {
            title: 'Explain',
            text: 'Say it out loud. If you can explain it, you understand it.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Physics and Critical Thinking',
        lead: 'Physics teaches children to trust what they observe over what they assumed.',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'Ask why. Not just what happened, but what caused it.',
          'Make observations. Watch carefully and write down what was actually seen.',
          'Compare results. Two ramps, two balls, two outcomes — what was different?',
          'Look for patterns. Does the same thing happen every time, or only sometimes?',
          'Test ideas. Change one thing at a time, so you know what caused the change.',
          'Explain what they noticed. In their own words, including the parts that surprised them.',
        ],
        band: false,
      },
      {
        eyebrow: 'Everyday Physics',
        title: 'Real-Life Physics',
        lead: 'Physics is not only in a textbook. It is in almost everything a child touches.',
        id: 'real-life',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Bicycles', icon: '🚴', text: 'Wheels, gears, brakes and balance.' },
          { title: 'Fans', icon: '🌬', text: 'Electrical energy turned into moving air.' },
          { title: 'Swings', icon: '🌱', text: 'Back-and-forth motion that slowly dies down.' },
          { title: 'Cars', icon: '🚗', text: 'Speed, braking and friction on the road.' },
          { title: 'Balls', icon: '⚽', text: 'Bouncing, rolling and changing direction.' },
          { title: 'Mirrors', icon: '🧠', text: 'Light bouncing back to your eyes.' },
          {
            title: 'Doors and wheels',
            icon: '🚪',
            text: 'Handles and hinges are levers and axles.',
          },
          {
            title: 'Mobile devices',
            icon: '📱',
            text: 'Screens make light; speakers make sound by vibrating.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Make Physics Fun for Your Child',
        id: 'parent-guide',
        kind: 'pills',
        items: [
          'Ask questions instead of giving answers. "What do you think will happen?"',
          'Use everyday examples — the ceiling fan, the bathroom mirror, the cycle brakes.',
          'Try safe activities with torches, magnets, paper and balls.',
          'Visit science-related places such as a science centre or planetarium when it suits your family.',
          'Encourage observation. Ask what changed, not just what happened.',
          'Let children explain what they noticed, in their own words, before you correct anything.',
        ],
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Physics classes in Hyderabad',
          'Physics classes for kids in Hyderabad',
          'Science classes for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If one of those brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for a Physics session at Brolly Juniors.',
      items: [
        {
          title: 'Curiosity Question',
          text: 'The session opens with a question, such as "why does a paper ball fall faster than a flat sheet?"',
        },
        {
          title: 'Learn the Concept',
          text: 'The idea behind it is explained in plain words, with a drawing or an object in hand.',
        },
        {
          title: 'See a Real-Life Example',
          text: 'The mentor connects it to something the child already knows — a fan, a cycle, a mirror.',
        },
        {
          title: 'Try an Activity',
          text: 'Children test it themselves with safe materials, and are asked to predict first.',
        },
        {
          title: 'Discuss What Happened',
          text: 'Was the prediction right? If not, what actually happened, and why?',
        },
        {
          title: 'Review the Idea',
          text: "The concept is restated in the children's own words before the session ends.",
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Physics Experiments for Kids',
      lead: 'Safe, low-risk activities children can do with everyday objects.',
      items: [
        {
          title: 'Shadow Investigation',
          icon: '🌞',
          text: 'Shine a torch on a toy. Move the torch closer and further, and record how the shadow changes size.',
        },
        {
          title: 'Magnet Test',
          icon: '🧲',
          text: 'Collect a spoon, a pencil, a coin, a plastic cap. Predict which the magnet will pick up, then test.',
        },
        {
          title: 'Rolling Object Test',
          icon: '⚽',
          text: 'Roll a ball, a bottle and a box down the same ramp. Which travels furthest, and why?',
        },
        {
          title: 'Simple Balance Activity',
          icon: '⚖',
          text: 'Balance a ruler on a pencil, then move objects along it to see how balance shifts.',
        },
        {
          title: 'Light Reflection Activity',
          icon: '🙈',
          text: 'Use a mirror to bounce torchlight onto a wall. Change the angle and watch the spot move.',
        },
        {
          title: 'Paper Air Movement Activity',
          icon: '💨',
          text: 'Drop a flat sheet of paper and a crushed ball of paper together. Which lands first, and why?',
        },
      ],
      cols: 3,
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are pitched at children, not shrunk-down adult lectures.',
        },
        {
          title: 'Simple explanations',
          icon: '💬',
          text: 'Plain words first. The scientific term comes once the idea is clear.',
        },
        {
          title: 'Activity-based learning',
          icon: '🧪',
          text: 'Children test ideas themselves instead of only hearing about them.',
        },
        {
          title: 'Concept-focused learning',
          icon: '💡',
          text: 'Understanding is the goal, not memorising a definition.',
        },
        {
          title: 'Real-life examples',
          icon: '🏠',
          text: "Every concept is tied to something in a child's own day.",
        },
        {
          title: 'Parent-friendly communication',
          icon: '📞',
          text: 'Ask us anything about level, format or fit before you decide. Call 7036044555.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'Physics class fees',
    },
    trial: {
      title: 'Let Your Child Explore the World of Physics',
      paras: [
        'A Free Demo is one short session where your child tries a Physics activity and you see how the teaching works. Book a slot, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'Every "why?" your child asks is a Physics question waiting for an answer. Let them explore simple concepts, ask their own questions and try safe activities that show them the reason behind everyday things. Start with a Free Demo and see how they respond.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child explores one Physics concept with a safe activity',
        'You see how ideas are explained in simple language',
        "We discuss your child's current level and what would suit them",
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support Physics Learning at Home',
      lead: 'You do not need to know Physics. You mainly need to ask one good question.',
      items: [
        {
          title: 'Ask "why do you think that happened?"',
          text: 'This one question does more than any explanation you could give.',
        },
        {
          title: 'Observe everyday events',
          text: 'Point out a shadow, a reflection, a fan slowing down.',
        },
        {
          title: 'Use safe activities',
          text: 'Torches, magnets, mirrors, balls and paper are enough.',
        },
        {
          title: 'Encourage questions',
          text: '"I don\'t know, let\'s find out" is a perfectly good answer.',
        },
        {
          title: 'Let them observe first',
          text: 'Ask what they noticed before you say what you noticed.',
        },
        {
          title: 'Allow safe mistakes',
          text: 'A wrong prediction is useful. It shows exactly where the idea needs work.',
        },
      ],
      cols: 3,
      note: "Discuss different ideas openly. If your child's explanation is different from yours, ask them how you could both test it.",
    },
    local: {
      title: 'Physics Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Physics Classes for Kids Near Me?',
      lead: 'If you are searching for physics classes for kids near me, physics classes near me or science classes for kids near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'How AI tools work and how to use them thoughtfully. Different from Physics, but built on the same habit of asking how things work.',
        to: '/ai-for-kids',
      },
      {
        icon: '💻',
        title: 'Python for Kids',
        text: 'Coding with Python. Useful for children who enjoy the logical, step-by-step side of Physics.',
        to: '/python-for-kids',
      },
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Calculation speed and mental visualisation, which support the measurement side of Physics.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Faster calculation methods. Helpful once Physics starts involving numbers.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Safe, confident use of everyday digital tools.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Explaining ideas clearly out loud — which is exactly what we ask children to do after every experiment.',
        to: '/junior-skills/public-speaking',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Physics sits alongside several other skill programmes. These are the ones parents most often ask about together.',
    faqTitle: 'Physics Classes for Kids: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are Physics classes for kids?',
        a: 'They are lessons that explain how things move, work and interact, in language a child can follow. Children learn about motion, force, gravity, light, sound, heat, magnets, electricity, energy and simple machines through everyday examples and safe hands-on activities.',
      },
      {
        q: 'Why should children learn Physics?',
        a: 'Physics builds curiosity, careful observation, logical thinking and problem solving. It also explains the everyday world — why shadows form, why a ball stops rolling, why a fan cools a room. Children who understand the reasons behind things tend to keep asking good questions.',
      },
      {
        q: 'What age can children start learning Physics?',
        a: 'Children can begin exploring simple Physics ideas from around 6 years, with topics like push and pull, shadows, sound and magnets. Numbers and formulas come much later. Readiness and school level matter more than age alone. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'What topics are taught in Physics classes?',
        a: "Possible topics include motion, force, energy, light, sound, heat, magnets, electricity, gravity, simple machines, measurement and matter. The exact topics depend on the child's age and school level.",
      },
      {
        q: 'Is Physics suitable for beginners?',
        a: 'Yes. A beginner starts with things they already see every day — pushing a door, watching a shadow, testing a magnet. No formulas are needed at the start.',
      },
      {
        q: 'Do children learn Physics through activities?',
        a: 'Yes. Children predict what will happen, try a safe activity, observe the result and then discuss why it happened. Watching a concept work is much more effective than only hearing about it.',
      },
      {
        q: 'Are Physics experiments included?',
        a: "Safe, low-risk activities are included where they suit the topic and the child's age. We do not use fire, flames, chemicals, mains electricity or sharp tools. Younger children are supervised.",
      },
      {
        q: 'What are simple Physics activities for kids?',
        a: 'Shadow investigations with a torch, magnet tests on household objects, rolling different objects down a ramp, balancing a ruler on a pencil, bouncing torchlight off a mirror, and dropping a flat sheet of paper against a crushed one.',
      },
      {
        q: 'Do kids learn about force and motion?',
        a: 'Yes. Force is introduced as pushes and pulls, using doors, drawers and balls. Motion is introduced as a change of position, using running, cycling and rolling. Speed is added later, once measurement makes sense.',
      },
      {
        q: 'Do children learn about light and sound?',
        a: 'Yes. Light topics include light sources, shadows, reflection, and transparent versus opaque objects. Sound topics include vibrations, loud and soft sounds, and high and low sounds.',
      },
      {
        q: 'Do kids learn about electricity?',
        a: 'Basic electricity is taught with simple circuits: battery, switch, bulb, conductors and insulators. Children are never asked to work with wall sockets or mains electricity, and battery activities are supervised.',
      },
      {
        q: 'Is Physics connected to Mathematics?',
        a: 'Yes, once children start measuring. Distance, time, speed, measurement and simple graphs all use Maths. For younger children we keep the numbers light and focus on the concept first.',
      },
      {
        q: 'Can Physics help children develop problem-solving skills?',
        a: 'Physics is largely problem-solving practice. Children observe, understand the question, think about which idea applies, try it, check whether the answer makes sense, then explain it. That routine is useful well beyond science.',
      },
      {
        q: 'How is Physics different from General Science, Maths and Robotics classes?',
        a: 'Physics focuses on how things move, work and interact. General Science covers a wider range including living things and materials. Maths programmes such as Abacus and Vedic Maths build calculation and number skills. Robotics is about building and programming machines. They overlap, but the focus of each is different.',
      },
      {
        q: 'What are the fees for Physics classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and school class, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'Physics in Short',
    quickAnswers: [
      {
        q: 'What is Physics for kids?',
        a: 'Physics is the study of how things move, work and interact — explained through everyday examples a child can see and test.',
      },
      {
        q: 'Why is Physics important for children?',
        a: 'It builds curiosity, observation, logical thinking and problem solving, and explains the ordinary world around them.',
      },
      {
        q: 'What do kids learn in Physics classes?',
        a: 'Motion, force, gravity, light, sound, heat, magnets, electricity, energy, simple machines, measurement and matter.',
      },
      {
        q: 'What Physics experiments can kids do?',
        a: 'Shadow tests with a torch, magnet tests, rolling objects down a ramp, balancing a ruler, and mirror reflection activities — all with adult supervision.',
      },
      {
        q: 'How can children learn Physics easily?',
        a: 'By starting with everyday examples, predicting before testing, observing carefully, and explaining what they noticed in their own words.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are Physics classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad learn how things move and work — motion, force, light, sound, magnets and electricity — through simple explanations and safe activities. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn Physics in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is Physics suitable for young children?"',
        a: 'Yes, if it is taught through everyday things rather than formulas. Shadows, magnets, sound and push-and-pull suit children from around 6 years.',
      },
      {
        q: '"What do kids learn in Physics classes?"',
        a: 'Motion, force, gravity, light and shadows, sound, heat, magnets, basic electricity, energy, simple machines and measurement.',
      },
      {
        q: '"What are simple Physics activities for children?"',
        a: 'Torch and shadow tests, magnet sorting, rolling objects down ramps, balancing a ruler, and mirror reflection games — all safe and supervised.',
      },
      {
        q: '"Physics classes for kids near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     Advanced Maths — /tuitions/advanced-maths
     ================================================================== */
  '/tuitions/advanced-maths': {
    h1: 'Advanced maths classes in Hyderabad for students the syllabus stopped challenging.',
    lead: 'Number theory, combinatorics, geometry and proof — real mathematics beyond the textbook, for students who finish the chapter and ask what else there is.',
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 7–10', 'Batches of eight'],
    hero: {
      title: 'What are Advanced Maths Classes for Kids?',
      paras: [
        'Some children finish their Maths homework and still want more. Advanced Maths gives them that "more". At Brolly Juniors in Hyderabad, children move beyond routine sums and start exploring patterns, multi-step problems and the reasons behind the rules.',
        'Advanced Maths classes for kids are lessons that take children beyond basic calculation into higher-level thinking. Children work on patterns, sequences, algebra basics, geometry, ratios and multi-step word problems. The focus is on reasoning, method and explanation — understanding why an answer works, not only getting it.',
      ],
    },
    facts: [
      { strong: 'Classes 7–10', span: 'Levels covered' },
      { strong: 'Beyond syllabus', span: 'Not revision' },
      { strong: 'Proof-based', span: 'Reasoning, not drills' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Quick highlights',
      title: 'What Advanced Maths Focuses On',
      lead: 'Six things children practise in an advanced Maths session at Brolly Juniors.',
      items: [
        {
          title: 'Higher-Level Thinking',
          icon: '🧠',
          text: 'Children look at a problem, ask what is really being asked, and choose a method before they start writing.',
        },
        {
          title: 'Advanced Problem Solving',
          icon: '🧩',
          text: 'Longer problems are broken into smaller steps, so a big question stops feeling scary.',
        },
        {
          title: 'Logical Reasoning',
          icon: '🔍',
          text: 'Spotting rules, relationships and what must be true — the thinking that sits underneath the numbers.',
        },
        {
          title: 'Maths Challenges',
          icon: '🎯',
          text: 'Puzzles and challenge questions that reward trying a second method when the first one stalls.',
        },
        {
          title: 'Concept-Based Learning',
          icon: '📚',
          text: 'Concepts are explained with simple examples first. Technical words come after the idea makes sense.',
        },
        {
          title: 'Step-by-Step Practice',
          icon: '🥋',
          text: 'New ideas are introduced in a sequence, so children build on what they already understand.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What Is Advanced Maths for Kids?',
      lead: 'Advanced Maths is Maths that asks a child to think a little harder than usual.',
      paras: [
        'Advanced Maths also stretches a pattern further than the first few numbers. Instead of stopping at 2, 4, 6, 8, a child is asked what the 20th number would be — and how they know without writing every number down.',
        'So "advanced" is not only about harder topics. It is about deeper questions on topics a child already knows, plus new topics such as algebra basics, ratios and geometry introduced at the right time.',
      ],
      panels: [
        { title: 'Regular Maths', paras: ['A child is given a sum and finds the answer.'] },
        { title: 'Advanced Maths', paras: ['The same child is asked something more open.'] },
      ],
    },
    whyLearn: {
      eyebrow: 'Why it helps',
      title: 'Why Should Kids Learn Advanced Maths?',
      lead: 'Because some children are ready for a bigger challenge, and a bigger challenge is what keeps them interested.',
      items: [
        {
          title: 'Deeper understanding',
          text: 'A child learns why a method works, not only the steps to copy. That understanding stays longer than a memorised rule.',
        },
        {
          title: 'Logical thinking',
          text: 'Advanced questions have rules to find. Finding rules is practice in thinking clearly, in order.',
        },
        {
          title: 'Problem solving',
          text: 'Long problems teach a useful habit: break it down, solve one part, then use that answer for the next part.',
        },
        {
          title: 'Mathematical reasoning',
          text: 'Children learn to say "this must be true because…" instead of "I think it is 12".',
        },
        {
          title: 'Pattern recognition',
          text: 'Once a child sees patterns in numbers, they start seeing them in shapes, in games and in everyday life.',
        },
        {
          title: 'Comfort with hard questions',
          text: 'Regular practice with challenging problems can make difficult work feel normal rather than frightening.',
        },
      ],
      cols: 3,
      note: 'Brolly Juniors does not promise higher marks, ranks or exam results. What we focus on is thinking, method and steady practice.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits of Advanced Maths',
      lead: 'Ten skills children practise while working through advanced Maths activities.',
      items: [
        {
          title: 'Advanced Thinking',
          icon: '🧠',
          text: 'Holding a bigger idea in mind while working through smaller steps.',
        },
        {
          title: 'Logical Reasoning',
          icon: '🔢',
          text: 'Following a rule from start to finish without skipping a step.',
        },
        {
          title: 'Problem Solving',
          icon: '🧩',
          text: 'Choosing a method, trying it, and switching if it does not work.',
        },
        {
          title: 'Pattern Recognition',
          icon: '📈',
          text: 'Noticing what repeats, what grows and what stays the same.',
        },
        {
          title: 'Analytical Skills',
          icon: '🔍',
          text: 'Pulling out the useful information from a long question.',
        },
        {
          title: 'Decision Making',
          icon: '⚖',
          text: 'Deciding which method is quickest for this particular problem.',
        },
        {
          title: 'Persistence',
          icon: '💪',
          text: 'Staying with a problem after the first attempt fails.',
        },
        {
          title: 'Mathematical Confidence',
          icon: '🌟',
          text: 'Feeling able to start a question even when the answer is not obvious.',
        },
        {
          title: 'Creative Thinking',
          icon: '🎨',
          text: 'Finding a second or third way to reach the same answer.',
        },
        {
          title: 'Independent Thinking',
          icon: '👥',
          text: 'Checking their own answer before asking whether it is right.',
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Learning areas',
      title: 'What Will Kids Learn?',
      lead: "Possible learning areas in an advanced Maths programme. The exact mix depends on your child's age and current level.",
      items: ['Number & Arithmetic', 'Reasoning & Patterns', 'Shapes & Structure'],
      note: 'Topics are chosen to suit the child. A younger learner may spend longer on patterns and number relationships before moving to algebra basics.',
    },
    curriculumTabs: {
      eyebrow: 'Curriculum',
      title: 'Advanced Maths Curriculum',
      lead: 'A suggested learning structure that moves from a strong foundation to open-ended challenge work.',
      label: 'Advanced Maths Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Level 1',
          title: 'Level 1 — Strong Maths Foundation',
          intro: 'Advanced work needs a solid base. This level makes sure the basics are quick and secure.',
          bullets: ['Number concepts', 'Operations', 'Fractions', 'Decimals', 'Percentages'],
        },
        {
          key: 'stage-2',
          label: 'Level 2',
          title: 'Level 2 — Mathematical Reasoning',
          intro: 'Children start looking for rules and relationships instead of only calculating.',
          bullets: ['Patterns', 'Sequences', 'Logic', 'Number relationships', 'Word problems'],
        },
        {
          key: 'stage-3',
          label: 'Level 3',
          title: 'Level 3 — Advanced Concepts',
          intro: 'New topics are introduced with simple examples before any technical language.',
          bullets: ['Algebra basics', 'Geometry', 'Ratios', 'Proportions', 'Multi-step problems'],
        },
        {
          key: 'stage-4',
          label: 'Level 4',
          title: 'Level 4 — Challenge-Based Maths',
          intro: 'Questions become open-ended. There may be more than one route to the answer.',
          bullets: [
            'Complex puzzles',
            'Mathematical reasoning',
            'Strategy problems',
            'Open-ended problems',
          ],
        },
      ],
      note: 'Example learning progression. Actual topics may vary based on age and learning level. Contact Brolly Juniors for current details.',
    },
    extras: [
      {
        eyebrow: 'Age guide',
        title: 'Age-Wise Advanced Maths',
        lead: 'A general guide to what advanced Maths can look like at different ages.',
        id: 'agewise',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: '8–10 Years',
            text: 'Number relationships, factors and multiples, simple patterns, two-step word problems and early fraction work. Plenty of puzzles.',
          },
          {
            title: '11–13 Years',
            text: 'Fractions, decimals and percentages together, ratios, algebra basics, angles and area, and longer multi-step problems.',
          },
          {
            title: '14+ Years',
            text: 'Harder algebra, proportional reasoning, geometry relationships, and open-ended challenge questions with more than one method.',
          },
        ],
        note: 'These are general age guides for advanced Maths learning, not fixed Brolly Juniors batch groups. Readiness matters more than age — a curious 9-year-old may be ready for work a 12-year-old is still building towards. Contact Brolly Juniors for current details.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Advanced Number Skills',
        lead: 'Numbers are not just things to add. They have relationships, and advanced Maths looks at those relationships.',
        id: 'number-skills',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Number relationships',
            text: '12 and 4 are connected. 12 can be split into three equal groups of 4. Seeing that link makes division feel natural.',
          },
          {
            title: 'Place value',
            text: 'In 4,382 the 3 is not just "three". It is 300. Place value is what makes big-number work possible.',
          },
          {
            title: 'Factors',
            text: 'Factors of 12 are 1, 2, 3, 4, 6 and 12. These are the numbers that divide 12 with nothing left over.',
          },
          {
            title: 'Multiples',
            text: 'Multiples of 7 are 7, 14, 21, 28… a counting pattern that keeps going.',
          },
          {
            title: 'Divisibility',
            text: 'A quick check: if a number ends in 0 or 5, it divides by 5. So 145 divides by 5 without any working.',
          },
          {
            title: 'Fractions, decimals, percentages',
            text: 'Three ways of writing the same idea. Children learn to move between them comfortably.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Patterns and Sequences',
        lead: 'A pattern is a rule that repeats. Find the rule and you can predict what comes next. Look at this line of numbers:',
        id: 'patterns',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Number patterns', text: '3, 6, 9, 12… adding the same amount each time.' },
          {
            title: 'Shape patterns',
            text: 'Circle, square, circle, square — then patterns that grow in size.',
          },
          {
            title: 'Sequence puzzles',
            text: '1, 4, 9, 16… where the rule is hiding a little deeper.',
          },
          {
            title: 'Rule finding',
            text: 'Writing the rule in words, so it can be used on any position in the sequence.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Algebra Basics for Kids',
        lead: 'Algebra sounds difficult. It starts as something children already do: finding a missing number.',
        id: 'algebra',
        kind: 'cards',
        cols: 4,
        items: [
          { title: 'Start with a box', text: '☐ + 3 = 8' },
          { title: 'Now use a letter', text: 'x + 3 = 8, so x = 5' },
        ],
        note: 'Once a child is comfortable with that idea, they can work on 2x = 10, then x &minus; 4 = 7, then problems where the letter appears twice. Each step is small. We keep this section beginner-friendly. No child is pushed into algebra before the number work underneath it is secure.',
        band: true,
      },
      {
        eyebrow: 'Topic',
        title: 'Geometry and Spatial Thinking',
        lead: 'Geometry is the Maths of shape and space. Children can see it around them every day.',
        id: 'geometry',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Shapes',
            text: 'A samosa is a triangle. A chapati is a circle. Naming shapes is where it starts.',
          },
          {
            title: 'Angles',
            text: "The corner of a book is a right angle. A clock at 3 o'clock makes one too.",
          },
          {
            title: 'Lines',
            text: 'Railway tracks stay the same distance apart. Those are parallel lines.',
          },
          {
            title: 'Symmetry',
            text: 'Fold a butterfly picture down the middle and both halves match.',
          },
          {
            title: 'Perimeter',
            text: 'Walking all the way around the edge of a room measures its perimeter.',
          },
          { title: 'Area', text: 'Counting the floor tiles in that room gives you the area.' },
        ],
        note: 'Spatial thinking — turning a shape in your head, or imagining how a box folds — is practised through building and drawing activities, not only through formulas.',
        band: false,
      },
      {
        eyebrow: 'Topic',
        title: 'Fractions, Decimals and Percentages',
        lead: 'These three look different but often mean exactly the same thing.',
        id: 'fdp',
        kind: 'cards',
        cols: 3,
        items: [
          { title: '1/2', text: 'Half of something' },
          { title: '0.5', text: 'The same half, as a decimal' },
          { title: '50%', text: 'The same half, out of 100' },
        ],
        note: 'A pizza cut into two equal pieces shows all three at once. One piece is 1/2 the pizza, 0.5 of the pizza, and 50% of the pizza. Once children can switch between these three forms, percentage questions in shops and discount problems become much easier.',
        band: true,
      },
      {
        eyebrow: 'Method',
        title: 'Advanced Word Problems',
        lead: 'Word problems are stories with Maths hidden inside. We teach children a simple six-step routine.',
        id: 'word-problems',
        kind: 'timeline',
        items: [
          {
            title: 'Read',
            text: 'Read the whole question once, slowly, without picking up a pencil.',
          },
          {
            title: 'Understand',
            text: 'Say in your own words what the question is asking for.',
          },
          {
            title: 'Find the information',
            text: 'Underline the numbers and the words that matter. Ignore the rest.',
          },
          {
            title: 'Choose a method',
            text: 'Add? Subtract? Multiply? Divide? More than one step?',
          },
          { title: 'Solve', text: 'Do the working neatly, one line at a time.' },
          {
            title: 'Check',
            text: 'Does the answer make sense? If a child spends money and ends up with more, something is wrong.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Method',
        title: 'Multi-Step Problem Solving',
        lead: 'Some problems cannot be finished in one calculation. They need two or three. A child has ₹100. They spend ₹35. Then they receive ₹20.',
        id: 'multi-step',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Another one to try',
            text: 'A box holds 8 crayons. There are 5 boxes. 12 crayons are broken.',
          },
          {
            title: 'And one more',
            text: 'A journey is 60 km. A car covers 25 km, stops, then covers 18 km.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Thinking',
        title: 'Logical Reasoning in Maths',
        lead: 'Reasoning is the part of Maths that happens before the calculation.',
        id: 'logical-reasoning',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Patterns', text: 'What repeats here, and what is the rule behind it?' },
          { title: 'Relationships', text: 'If one number goes up, what happens to the other?' },
          {
            title: 'Comparisons',
            text: 'Which is bigger: 3/4 or 0.7? Deciding needs reasoning, not guessing.',
          },
          {
            title: 'Rules',
            text: 'Every even number ends in 0, 2, 4, 6 or 8. So 4,317 cannot be even.',
          },
          {
            title: 'Sequences',
            text: 'Working out position 20 from a rule, instead of counting all the way.',
          },
          {
            title: 'Cause and effect',
            text: 'If the price doubles, the amount you can buy with ₹100 halves.',
          },
        ],
        note: 'Logical reasoning is also the skill behind Abacus training and strategy games. Different activity, same underlying habit of thinking in ordered steps.',
        band: false,
      },
      {
        eyebrow: 'Activities',
        title: 'Maths Puzzles and Challenges',
        lead: 'Activity types children may work on during advanced Maths sessions.',
        id: 'puzzles',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Number Puzzle',
            icon: '🔢',
            text: 'Fit numbers into a grid so every row follows the rule.',
          },
          {
            title: 'Logic Puzzle',
            icon: '🧩',
            text: 'Use clues to work out who has which item.',
          },
          {
            title: 'Pattern Challenge',
            icon: '📈',
            text: 'Continue a pattern and explain the rule in words.',
          },
          {
            title: 'Math Maze',
            icon: '🧭',
            text: 'Move through a maze by solving each step correctly.',
          },
          {
            title: 'Sequence Challenge',
            icon: '🔄',
            text: 'Find the missing term in a growing sequence.',
          },
          {
            title: 'Missing Number',
            icon: '❓',
            text: 'Balance an equation by finding the hidden value.',
          },
          {
            title: 'Shape Challenge',
            icon: '📐',
            text: 'Count sides, angles or lines of symmetry.',
          },
          {
            title: 'Mystery Number',
            icon: '🕵',
            text: 'Use clues about factors and digits to identify a number.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Try it now',
        title: 'Solve the Challenge',
        lead: 'Five quick advanced Maths questions. Let your child try them before you book a demo.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'What number comes next?',
            opts: ['13', '14', '15', '16'],
            a: '15',
            why: 'The numbers increase by 3 each time. 12 + 3 = 15.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What number is missing?',
            opts: ['20', '24', '30', '32'],
            a: '32',
            why: 'Each number is doubled. 16 × 2 = 32.',
            hint: 'Choose one answer.',
          },
          {
            q: 'If x + 7 = 12, what is x?',
            opts: ['4', '5', '6', '19'],
            a: '5',
            why: 'Take 7 away from both sides. 12 − 7 = 5, so x = 5.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which one equals 1/4?',
            opts: ['0.14', '0.25', '0.4', '2.5'],
            a: '0.25',
            why: 'One quarter is 25 out of 100, which is 0.25 or 25%.',
            hint: 'Choose one answer.',
          },
          {
            q: 'A child has ₹50. They spend ₹18, then get ₹12. How much now?',
            opts: ['₹20', '₹32', '₹44', '₹80'],
            a: '₹44',
            why: 'Step 1: 50 − 18 = 32. Step 2: 32 + 12 = 44.',
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Getting started',
        title: 'Advanced Maths for Beginners',
        lead: '"Advanced" does not mean your child jumps straight into the hardest topics.',
        id: 'beginners',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Current understanding',
            text: 'What your child already knows well is the starting line.',
          },
          {
            title: 'Age and level',
            text: 'Both matter, but neither decides everything on its own.',
          },
          {
            title: 'Readiness and interest',
            text: 'A child who enjoys a challenge will usually move faster than a child who is being pushed.',
          },
        ],
        note: 'Every child begins where they are. A beginner might start with number patterns and two-step word problems, and only later meet algebra or ratios. That is normal, and it is the right order. If your child is still building speed and accuracy in basic calculation, Abacus classes or Vedic Maths may be a better first step. Advanced Maths works best on top of a comfortable foundation.',
        band: true,
      },
      {
        eyebrow: 'Enrichment',
        title: 'Maths Enrichment',
        lead: 'Enrichment means going wider and deeper, not just doing more of the same worksheet.',
        id: 'enrichment',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Puzzles',
            text: 'Questions that need a bit of searching before the method becomes clear.',
          },
          {
            title: 'Challenge questions',
            text: 'One hard question, discussed properly, is worth twenty easy ones.',
          },
          {
            title: 'Patterns',
            text: 'Finding the rule and then using it to predict far ahead.',
          },
          { title: 'Logic games', text: 'Deduction and elimination, practised as a game.' },
          {
            title: 'Open-ended problems',
            text: 'Questions with several correct answers, where the reasoning matters most.',
          },
          {
            title: 'Real-life Maths',
            text: 'Bills, discounts, distances and time — Maths that leaves the notebook.',
          },
        ],
        note: 'The aim is deeper thinking rather than memorising answers. A child who can explain their method has learned more than a child who can only recite a result.',
        band: false,
      },
      {
        eyebrow: 'An honest note',
        title: 'Competitive Maths Context',
        lead: 'Many parents ask whether advanced Maths helps with Maths competitions.',
        id: 'competitive',
        kind: 'split',
        paras: [
          'Advanced Maths skills — reasoning, pattern recognition, multi-step problem solving and persistence — are the same skills that challenging competition questions test. In that sense, this kind of practice can be a useful foundation for a child who enjoys difficult Maths problems.',
        ],
        note: 'What we do not claim: Brolly Juniors does not promise Olympiad selection, competition qualification, guaranteed ranks or guaranteed scores. We do not claim to run preparation for any specific named competition. If you are looking for competition-specific coaching, please contact Brolly Juniors on 7036044555 to ask what is currently offered before you enrol.',
        band: true,
      },
      {
        eyebrow: 'Everyday Maths',
        title: 'Real-Life Advanced Maths',
        lead: 'Higher-level Maths ideas turn up in ordinary days more often than children expect.',
        id: 'real-life',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Shopping discounts',
            icon: '🏷',
            text: '"30% off ₹800" is a percentage problem in a shop.',
          },
          {
            title: 'Comparing prices',
            icon: '⚖',
            text: 'Which pack is better value? That is a ratio question.',
          },
          {
            title: 'Planning time',
            icon: '🕑',
            text: 'Working backwards from a start time is multi-step Maths.',
          },
          {
            title: 'Measuring',
            icon: '📏',
            text: 'Converting metres to centimetres before cutting.',
          },
          {
            title: 'Money',
            icon: '💰',
            text: 'Saving a little each week and predicting the total.',
          },
          {
            title: 'Patterns',
            icon: '📈',
            text: 'Calendars, timetables and rangoli designs all repeat by rule.',
          },
          {
            title: 'Games',
            icon: '🎮',
            text: 'Scoring, probability and strategy in board games.',
          },
          {
            title: 'Building and shapes',
            icon: '🛠',
            text: 'Area, angles and symmetry when making or drawing something.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Advanced Maths and Problem Solving',
        lead: 'Every advanced Maths question is really a problem-solving exercise in five moves.',
        id: 'problem-solving',
        kind: 'cards',
        cols: 3,
        items: [
          { title: 'Understand', text: 'What is the question actually asking?' },
          { title: 'Plan', text: 'Which method might work here?' },
          { title: 'Try', text: 'Start. A wrong start still teaches something.' },
          { title: 'Check', text: 'Does this answer make sense?' },
          { title: 'Improve', text: 'Is there a shorter or clearer way?' },
          {
            title: 'Beyond Maths',
            text: 'The same five moves help with science, coding and everyday decisions.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Connected skills',
        title: 'Advanced Maths and Critical Thinking',
        lead: 'Critical thinking shows up in the questions a child starts asking themselves.',
        id: 'critical-thinking',
        kind: 'pills',
        items: [
          'Ask why. Why does this method work, and not only how.',
          'Compare methods. Two children may solve the same problem differently. Both may be right.',
          'Check answers. Estimating first, then seeing whether the result is close.',
          'Find patterns. Noticing that this question is like one solved last week.',
          'Explain reasoning. Saying the steps out loud is the strongest test of understanding.',
          'Try another method. Getting unstuck by changing approach rather than giving up.',
        ],
        band: false,
      },
      {
        eyebrow: 'Mindset',
        title: 'Advanced Maths and Confidence',
        lead: 'Confidence in Maths usually comes from experience, not from encouragement alone.',
        id: 'confidence',
        kind: 'split',
        paras: [
          'When a child works through a hard problem, gets it wrong, tries again and finally solves it, something changes. The next hard problem feels a little less impossible. Over months of practice, difficult questions can start to feel normal rather than frightening.',
          'That is the honest version. Not every child grows in confidence at the same speed, and we do not promise a particular result. What we can do is make the challenges appropriate, the explanations clear, and the mistakes safe.',
        ],
        band: true,
      },
      {
        eyebrow: 'Parent guide',
        title: 'How to Know If Your Child Is Ready for Advanced Maths',
        lead: 'General signs that a child may be ready for more challenging Maths work.',
        id: 'readiness',
        kind: 'pills',
        items: [
          'Enjoys Maths challenges rather than avoiding them',
          'Asks "why does that work?"',
          'Likes puzzles, riddles and logic games',
          'Solves problems that go beyond routine textbook exercises',
          'Enjoys spotting and continuing patterns',
          'Asks for harder questions when work feels easy',
          'Can explain their thinking, at least roughly',
        ],
        note: 'These are general indicators for parents, not a formal assessment. If you are unsure, a Free Demo is usually the clearest way to find out. Call 7036044555.',
        band: false,
      },
      {
        id: 'searches',
        title: 'Parents often search for',
        kind: 'pills',
        items: [
          'Advanced Maths classes in Hyderabad',
          'Advanced Maths classes for kids in Hyderabad',
          'Maths classes for kids in Hyderabad',
          'Kids learning classes in Hyderabad',
        ],
        note: 'If that is what brought you here, this page is the right place to start.',
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample Class Experience',
      lead: 'A typical flow for an advanced Maths session at Brolly Juniors.',
      items: [
        {
          title: 'Warm-Up Challenge',
          text: 'A short puzzle to get thinking started — a missing number or a quick pattern.',
        },
        {
          title: 'Learn the Concept',
          text: 'The idea is explained in simple words first, with a picture or an everyday example.',
        },
        {
          title: 'Explore an Example',
          text: 'The mentor works through one problem out loud, showing the thinking, not just the answer.',
        },
        {
          title: 'Solve Guided Problems',
          text: 'Children try similar questions with support close by if they get stuck.',
        },
        {
          title: 'Try an Independent Challenge',
          text: 'A harder question with no hints, so children practise starting on their own.',
        },
        {
          title: 'Review the Solution',
          text: 'Answers are discussed. Different methods are compared — often more than one works.',
        },
      ],
      note: 'Session structure may vary by level and format. Contact Brolly Juniors for current details.',
    },
    whyUs: {
      eyebrow: 'Why us',
      title: 'Why Choose Brolly Juniors?',
      lead: "Brolly Juniors is a children's learning centre in Nizampet, Hyderabad, running activity-based skill programmes for children.",
      items: [
        {
          title: 'Child-friendly learning',
          icon: '🥴',
          text: 'Sessions are designed for children, with examples they can picture.',
        },
        {
          title: 'Concept-based explanations',
          icon: '💡',
          text: 'The idea comes first. The technical term comes after it makes sense.',
        },
        {
          title: 'Activity-based practice',
          icon: '✍',
          text: 'Puzzles, challenges and hands-on tasks rather than worksheets alone.',
        },
        {
          title: 'Problem-solving focus',
          icon: '🧩',
          text: 'Children are asked to explain their method, not just write the answer.',
        },
        {
          title: 'Age-appropriate learning',
          icon: '📈',
          text: 'Level is matched to readiness, so work is challenging but not crushing.',
        },
        {
          title: 'Parent-friendly communication',
          icon: '💬',
          text: 'Ask us anything about level, format or fit before you decide. Call 7036044555.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'Advanced Maths class fees',
    },
    trial: {
      title: 'Let Your Child Try an Advanced Maths Challenge',
      paras: [
        'The easiest way to know whether advanced Maths suits your child is to let them try one session. Book a Free Demo, or send an enquiry and we will call you back.',
        'Prefer to talk? Call 7036044555 or message us on WhatsApp.',
        'If your child finishes Maths homework and still wants more, advanced Maths may be the right next step. Start with a Free Demo, see how they respond to a harder question, and decide from there. No pressure, no commitment.',
        'Demo availability may vary. Contact Brolly Juniors for current details.',
      ],
      includes: [
        'Your child tries a few challenge questions at their level',
        'You see how the concepts are explained',
        'We talk about where your child is now and what would suit them',
        'You ask about formats, timings and fees directly',
        'No obligation to enrol afterwards',
      ],
    },
    homeGuide: {
      eyebrow: 'For parents',
      title: 'How Parents Can Support Advanced Maths at Home',
      lead: 'You do not need to be good at Maths to help. You mainly need good questions.',
      items: [
        {
          title: 'Ask them to explain',
          text: '"Tell me how you got that." Explaining is where understanding gets tested.',
        },
        {
          title: 'Use puzzles',
          text: 'Sudoku, number games and logic puzzles count as Maths practice.',
        },
        {
          title: 'Ask "How did you solve it?"',
          text: 'Ask this even when the answer is correct, not only when it is wrong.',
        },
        {
          title: 'Let them try other methods',
          text: 'If your method is different, let them finish theirs first.',
        },
        {
          title: 'Make mistakes safe',
          text: 'A wrong answer is information. Treat it that way and children keep trying.',
        },
        {
          title: 'Do not give the answer',
          text: 'Wait. Offer a hint. The struggle is where the learning happens.',
        },
      ],
      cols: 3,
      note: 'And celebrate effort and thinking, not only correct answers. "You kept going for ten minutes on that one" is worth saying out loud.',
    },
    local: {
      title: 'Advanced Maths Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from its centre at Nizampet X Roads.',
      ],
    },
    nearMe: {
      eyebrow: 'Near me',
      title: 'Looking for Advanced Maths Classes Near Me?',
      lead: 'If you are searching for advanced maths classes near me, advanced maths classes for kids near me or maths classes for kids near me, here is the straight answer.',
      items: [
        {
          title: 'Where we are',
          text: 'Brolly Juniors operates from one centre, at Nizampet X Roads in Hyderabad. Families from the surrounding areas — Nizampet, Bachupally, Pragathi Nagar, Kukatpally, Miyapur and Bowrampet — can reach it easily. We do not list branches we do not have.',
        },
        {
          title: 'Who can reach us',
          text: 'The quickest way to check whether we are convenient for you is to call 7036044555 and ask. If travel is difficult, ask about available learning formats when you call.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '🧮',
        title: 'Abacus Classes',
        text: 'Builds calculation speed and mental visualisation. A strong base before advanced Maths.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '➕',
        title: 'Vedic Maths',
        text: 'Shortcut methods for faster calculation. Different from advanced Maths, which focuses on reasoning.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '🤖',
        title: 'AI for Kids',
        text: 'Understanding how AI tools work, and using them thoughtfully and safely.',
        to: '/ai-for-kids',
      },
      {
        icon: '💻',
        title: 'Python for Kids',
        text: 'Coding with Python. Logical thinking that pairs naturally with advanced Maths.',
        to: '/python-for-kids',
      },
      {
        icon: '📱',
        title: 'Digital Literacy',
        text: 'Practical, safe and confident use of everyday digital tools.',
        to: '/junior-skills/digital-literacy',
      },
      {
        icon: '🎤',
        title: 'Public Speaking',
        text: 'Explaining ideas clearly out loud — useful for explaining Maths reasoning too.',
        to: '/junior-skills/public-speaking',
      },
    ],
    relatedTitle: 'Other Brolly Juniors Programmes',
    relatedLead: 'Advanced Maths sits alongside several other skill programmes. Some suit younger children, some suit different interests.',
    faqTitle: 'Advanced Maths Classes: Frequently Asked Questions',
    faqs: [
      {
        q: 'What are Advanced Maths classes for kids?',
        a: 'They are Maths lessons that go beyond routine calculation. Children work on patterns, sequences, algebra basics, geometry, ratios and multi-step word problems, with the focus on reasoning and method rather than only the final answer.',
      },
      {
        q: 'What is the difference between Maths and Advanced Maths?',
        a: 'Regular Maths usually asks a child to apply a known method to a known type of question. Advanced Maths asks harder or more open questions on those same topics, and adds new topics such as algebra basics and ratios. A regular question is "5 + 3 =?". An advanced one is "how many different ways can you make 8?".',
      },
      {
        q: 'What age can children start Advanced Maths?',
        a: 'Children often begin around 8 years, once basic number work is comfortable. But readiness matters more than age. A younger child who enjoys puzzles may be ready earlier, and an older child may need foundation work first. Contact Brolly Juniors for current details on 7036044555.',
      },
      {
        q: 'Is Advanced Maths suitable for beginners?',
        a: 'Yes, as long as the starting level is set correctly. "Advanced" does not mean a child starts with the hardest topics. A beginner may start with number patterns and two-step problems and move to algebra later.',
      },
      {
        q: 'What topics are taught in Advanced Maths?',
        a: "Possible topics include number systems, advanced arithmetic, fractions, decimals, ratios, percentages, patterns, sequences, geometry, algebra basics, logical reasoning, word problems, multi-step problems and mathematical puzzles. The exact topics depend on the child's age and level.",
      },
      {
        q: 'What skills can children practise through Advanced Maths?',
        a: 'Logical reasoning, problem solving, pattern recognition, analytical thinking, decision making, persistence, creative thinking and independent checking of their own work.',
      },
      {
        q: 'Do kids learn Algebra?',
        a: 'Algebra basics are introduced at the right stage, in simple language. It starts as filling in a missing number in a box, and the box is later replaced by a letter. For example, x + 3 = 8 means x is 5.',
      },
      {
        q: 'Do children learn Geometry?',
        a: 'Yes. Geometry topics can include shapes, angles, lines, symmetry, perimeter, area and spatial thinking, taught with everyday examples before any formulas.',
      },
      {
        q: 'Are Maths puzzles included?',
        a: 'Yes. Number puzzles, logic puzzles, pattern challenges, sequence challenges, missing-number questions and shape challenges are used as regular practice, not as an extra.',
      },
      {
        q: 'Can Advanced Maths help with problem solving?',
        a: 'Advanced Maths is largely problem-solving practice. Children repeatedly work through understand, plan, try, check and improve. That habit is useful in science, coding and everyday decisions as well.',
      },
      {
        q: 'Can Advanced Maths help with logical thinking?',
        a: 'Yes. Finding rules, testing whether something must be true, comparing values and continuing sequences are all exercises in ordered, logical thinking.',
      },
      {
        q: 'Is Advanced Maths useful for Maths competitions?',
        a: 'The reasoning and multi-step problem-solving skills built in advanced Maths are the same skills challenging competition questions test, so it can be a useful foundation. Brolly Juniors does not promise Olympiad selection, competition qualification, ranks or scores, and does not claim preparation for any specific named competition. Please ask us what is currently offered before enrolling.',
      },
      {
        q: 'How can parents know if their child is ready?',
        a: 'General signs include enjoying challenges, asking why a method works, liking puzzles, wanting harder questions, and being able to explain their thinking. These are indicators for parents, not a formal assessment. A Free Demo is usually the clearest way to check.',
      },
      {
        q: 'What are the fees for Advanced Maths classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details on 7036044555.',
      },
      {
        q: 'What are the class timings?',
        a: 'Class timings may vary. Contact Brolly Juniors for current availability on 7036044555.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message us on WhatsApp. Tell us your child's age and current Maths level, and we will suggest a suitable starting point.",
      },
    ],
    quickAnswersTitle: 'Advanced Maths in Short',
    quickAnswers: [
      {
        q: 'What is Advanced Maths for kids?',
        a: 'Maths that goes beyond basic calculation into patterns, algebra basics, geometry, ratios and multi-step problems, with reasoning at the centre.',
      },
      {
        q: 'Why should kids learn Advanced Maths?',
        a: 'It builds deeper understanding, logical thinking, problem solving and comfort with difficult questions — skills that carry beyond Maths.',
      },
      {
        q: 'What topics are included in Advanced Maths?',
        a: 'Number systems, fractions, decimals, percentages, ratios, patterns, sequences, algebra basics, geometry, logical reasoning and multi-step word problems.',
      },
      {
        q: 'Who should learn Advanced Maths?',
        a: 'Children who finish routine Maths comfortably, enjoy puzzles, and want harder questions. Readiness matters more than age.',
      },
      {
        q: 'How can children improve advanced Maths skills?',
        a: 'By practising challenge questions regularly, explaining their method out loud, checking answers, and trying a second approach when the first one stalls.',
      },
      {
        q: 'Where in Hyderabad?',
        a: 'Brolly Juniors, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"What are Advanced Maths classes for kids in Hyderabad?"',
        a: 'They are classes where children in Hyderabad work on higher-level Maths — patterns, algebra basics, geometry and multi-step problems — with a focus on reasoning. Brolly Juniors runs them from Nizampet X Roads.',
      },
      {
        q: '"Where can my child learn advanced Maths in Hyderabad?"',
        a: 'At the Brolly Juniors centre at Metro Pillar No. A689, Nizampet X Roads, Hyderabad. Call 7036044555 to book a Free Demo.',
      },
      {
        q: '"Is Advanced Maths suitable for my child?"',
        a: 'If your child finishes routine Maths comfortably and enjoys a challenge, it usually suits them. A Free Demo is the clearest way to check the right level.',
      },
      {
        q: '"What topics are taught in Advanced Maths for kids?"',
        a: 'Patterns and sequences, algebra basics, geometry, ratios, fractions, decimals, percentages, logical reasoning and multi-step word problems.',
      },
      {
        q: '"How can my child improve Maths problem-solving skills?"',
        a: 'Practise the same routine every time: read, understand, find the information, choose a method, solve, then check. Explaining the method out loud makes it stick.',
      },
      {
        q: '"Advanced Maths classes near me"',
        a: 'Brolly Juniors is at Nizampet X Roads, convenient for Nizampet, Bachupally, Pragathi Nagar, Kukatpally and Miyapur. Call 7036044555.',
      },
    ],
  },

  /* ==================================================================
     Maths Tuition — /tuitions/mathematics
     ================================================================== */
  '/tuitions/mathematics': {
    h1: 'Maths tuition in Hyderabad that goes back to the chapter where it broke.',
    lead: 'Every topic taught from the concept up, with graded practice, error analysis and past papers — and no pretending a gap two years back is not there.',
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–10', 'Batches of eight'],
    hero: {
      title: 'What Are Mathematics Classes for Kids?',
      paras: [
        'Maths becomes easier when a child understands it, not just memorises it. At Brolly Juniors, Mathematics classes for kids in Hyderabad use simple explanations, everyday examples, guided practice and hands-on activities.',
        'Mathematics classes for kids are guided learning sessions where children build number skills step by step. Children learn counting, addition, subtraction, multiplication, division, shapes, measurement and word problems through simple explanations, examples, activities and regular practice, so Maths becomes easier to understand and apply in everyday life.',
      ],
    },
    facts: [
      { strong: 'Classes 4–10', span: 'Levels covered' },
      { strong: 'CBSE · ICSE · State', span: 'Boards covered' },
      { strong: 'Diagnostic', span: 'Before enrolment' },
      { strong: 'Max 8', span: 'Students per batch' },
    ],
    trust: {
      title: 'Why Parents Look at Maths Classes for Kids',
      lead: 'Six things these Mathematics classes for children focus on.',
      items: [
        {
          title: 'Build Number Skills',
          icon: '123',
          text: 'Children work on counting, place value and number sense before moving to harder operations.',
        },
        {
          title: 'Learn Maths Step by Step',
          icon: '1→2',
          text: 'Each concept is explained, shown with an example, then practised. Nothing is rushed.',
        },
        {
          title: 'Practice Through Activities',
          icon: '★',
          text: 'Puzzles, games and hands-on tasks give children a reason to use the Maths they just learned.',
        },
        {
          title: 'Improve Logical Thinking',
          icon: '⚙',
          text: 'Patterns, sequences and comparisons help children reason instead of guess.',
        },
        {
          title: 'Solve Problems',
          icon: '?',
          text: 'A clear method for word problems: read, understand, choose, calculate, check.',
        },
        {
          title: 'Build Maths Confidence',
          icon: '👍',
          text: 'Regular practice and a calm pace can help children feel more comfortable with Maths over time.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      title: 'What Is Mathematics for Kids?',
      lead: 'Mathematics is the subject that helps children work with numbers and make sense of the world around them.',
      paras: [
        'Maths is not only about writing answers in a notebook. It is a way of thinking. It helps a child count, compare, measure, group and predict.',
        'The same thinking works everywhere. How many chocolates to share. How long until the school bus comes. Which bottle holds more water.',
      ],
      panels: [
        {
          title: 'Maths helps children understand',
          bullets: [
            'Numbers — counting, comparing and place value.',
            'Shapes — circles, squares, triangles and solids.',
            'Patterns — what comes next and why.',
            'Measurements — length, weight and volume.',
            'Time — the clock, the calendar and duration.',
            'Money — cost, change and simple budgeting.',
            'Problem solving — turning a question into steps.',
          ],
        },
      ],
    },
    whyLearn: {
      title: 'Why Should Kids Learn Mathematics?',
      lead: 'Maths shows up far more often than most children expect.',
      items: [
        {
          title: 'School and homework',
          text: 'Maths is part of school work every year. When the basics are clear, new chapters feel less heavy and homework takes less time.',
        },
        {
          title: 'Daily life',
          text: 'Counting change, checking a bill, reading a clock, dividing snacks between friends. Children use Maths without calling it Maths.',
        },
        {
          title: 'Games and puzzles',
          text: 'Scores, dice, levels, board games and card games all need quick counting and comparison.',
        },
        {
          title: 'Shopping',
          text: 'Which pack is bigger. What ten rupees can buy. How much change is due. Simple money Maths is a life skill.',
        },
        {
          title: 'Time management',
          text: 'Reading a timetable, planning study time and understanding how long a task takes all rest on Maths.',
        },
        {
          title: 'Future learning',
          text: 'Science, coding, data and many other subjects build on number sense and logical reasoning developed early.',
        },
      ],
      cols: 3,
    },
    benefits: {
      title: 'Benefits of Mathematics Learning',
      lead: 'What steady Maths learning can support in children. These are learning benefits, not guaranteed results.',
      items: [
        {
          title: 'Number Skills',
          icon: '#',
          text: 'Comfort with counting, place value and mental calculation.',
        },
        {
          title: 'Logical Thinking',
          icon: '⚙',
          text: 'Reasoning through a question instead of guessing an answer.',
        },
        {
          title: 'Problem Solving',
          icon: '✓',
          text: 'Breaking a problem into small, manageable steps.',
        },
        {
          title: 'Calculation Skills',
          icon: '+',
          text: 'Faster and more accurate work with the four operations.',
        },
        {
          title: 'Pattern Recognition',
          icon: '≈',
          text: 'Spotting rules in numbers, shapes and sequences.',
        },
        {
          title: 'Focus',
          icon: '◉',
          text: 'Multi-step sums ask children to hold attention a little longer each time.',
        },
        {
          title: 'Reasoning',
          icon: '∴',
          text: 'Explaining why an answer is correct, not only stating it.',
        },
        {
          title: 'Confidence',
          icon: '♥',
          text: 'Familiar work feels less frightening, which helps children attempt harder questions.',
        },
        {
          title: 'Decision Making',
          icon: '⇄',
          text: 'Comparing options using numbers rather than instinct.',
        },
        {
          title: 'Everyday Maths',
          icon: '₹',
          text: 'Using Maths naturally while shopping, cooking, travelling and playing.',
        },
      ],
      cols: 4,
    },
    curriculumTabs: {
      title: 'Mathematics Curriculum',
      lead: 'A suggested learning progression. Children usually move through these stages in order, but the starting point is decided by what the child already knows.',
      label: 'Mathematics Curriculum',
      outcomeLabel: 'Where this stage leads',
      items: [
        {
          key: 'stage-1',
          label: 'Foundation Maths',
          title: 'Foundation Maths',
          intro: 'The starting stage. The aim is for a child to feel comfortable with numbers before any formal calculation begins.',
          bullets: [
            'Counting — forward, backward and in groups.',
            'Number recognition — reading and writing numbers correctly.',
            'Basic comparisons — more, less, equal, bigger, smaller.',
            'Simple patterns — colours, shapes and repeating sequences.',
          ],
        },
        {
          key: 'stage-2',
          label: 'Basic Maths',
          title: 'Basic Maths',
          intro: 'The four operations, learned one at a time with plenty of examples before speed is ever discussed.',
          bullets: [
            'Addition — single digits, then carrying over.',
            'Subtraction — including borrowing.',
            'Multiplication — tables understood as repeated addition.',
            'Division — sharing equally and finding remainders.',
          ],
        },
        {
          key: 'stage-3',
          label: 'Intermediate Maths',
          title: 'Intermediate Maths',
          intro: 'Numbers get more detailed and questions get longer. Method matters as much as the answer here.',
          bullets: [
            'Fractions — halves, quarters, equivalent fractions.',
            'Decimals — place value after the point, money links.',
            'Geometry — shapes, lines, angles and symmetry.',
            'Measurements — length, weight, volume and units.',
            'Word problems — two-step and three-step questions.',
          ],
        },
        {
          key: 'stage-4',
          label: 'Advanced School Maths',
          title: 'Advanced School Maths',
          intro: 'Concepts that support senior school work, with attention to reasoning and clear written steps.',
          bullets: [
            'Algebra basics — letters as unknowns, simple equations.',
            'Geometry concepts — area, perimeter, angle properties.',
            'Logical reasoning — sequences, logic puzzles and proofs of a simple kind.',
            'Multi-step problems — questions needing more than one operation.',
          ],
        },
      ],
      note: "The exact curriculum can vary by age and learning level. This is a suggested learning structure, not a fixed syllabus. Contact Brolly Juniors on 7036044555 for the learning plan currently offered for your child's class.",
    },
    extras: [
      {
        title: 'Age-Wise Mathematics Learning',
        lead: 'A general guide to what suits each age. Readiness matters more than age, so a child may sit in a group slightly above or below their years.',
        id: 'agewise',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: '5–7 Years',
            text: 'Focus: number sense and confidence with counting.',
            list: [
              'Counting and number writing',
              'Simple addition and subtraction',
              'Basic shapes',
              'Repeating patterns',
              'Sorting and comparing',
            ],
          },
          {
            title: '8–10 Years',
            text: 'Focus: the four operations and early problem solving.',
            list: [
              'Multiplication and division',
              'Introduction to fractions',
              'Time and money',
              'Measurement basics',
              'Single and two-step word problems',
            ],
          },
          {
            title: '11–13 Years',
            text: 'Focus: accuracy, method and reasoning.',
            list: [
              'Fractions and decimals',
              'Percentages and ratio',
              'Area and perimeter',
              'Angles and symmetry',
              'Multi-step word problems',
            ],
          },
          {
            title: '14+ Years',
            text: 'Focus: senior school concepts and clear working.',
            list: [
              'Algebra basics',
              'Geometry concepts',
              'Data handling',
              'Logical reasoning',
              'Longer problem sets',
            ],
          },
        ],
        note: 'These age bands are shown as a learning guide for parents. For the age groups and batches currently running, contact Brolly Juniors on 7036044555.',
        band: false,
      },
      {
        title: 'Basic Maths for Kids',
        lead: 'Where every child starts, whatever their age. If the basics are shaky, everything after feels harder than it should.',
        id: 'basic-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Numbers',
            text: 'Reading, writing and understanding what a number actually means. 43 is four tens and three ones, not just two digits side by side.',
          },
          {
            title: 'Counting',
            text: 'Counting forward, backward, in twos, fives and tens. This is the base for multiplication later.',
          },
          {
            title: 'Addition',
            text: 'Putting groups together. 4 pencils and 3 pencils make 7 pencils.',
          },
          {
            title: 'Subtraction',
            text: 'Taking away or finding the difference. 9 balloons, 2 fly away, 7 are left.',
          },
          {
            title: 'Comparison',
            text: 'Which is more, which is less, which is equal. Children learn to use >, < and = correctly.',
          },
          {
            title: 'Patterns',
            text: '2, 4, 6, 8 … what comes next? Patterns teach children to look for a rule.',
          },
        ],
        band: true,
      },
      {
        title: 'Multiplication and Division',
        id: 'md-h',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Multiplication is repeated addition',
            text: 'Instead of memorising a table with no meaning, children see what the table is doing.',
          },
          {
            title: 'Division is sharing equally',
            text: 'Division answers the question: if I split this fairly, how much does each one get?',
          },
        ],
        note: 'Children who see multiplication and division as two sides of the same idea usually make fewer mistakes later with fractions, ratio and word problems.',
        band: false,
      },
      {
        title: 'Fractions and Decimals',
        lead: 'Two topics children often find confusing, made simpler with things they already know.',
        id: 'fd-h',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Fractions',
            text: 'A fraction is a part of a whole.',
            list: [
              'Half of a pizza is 1/2',
              'A quarter of a chocolate bar is 1/4',
              'Three slices out of four is 3/4',
            ],
          },
          {
            title: 'Decimals',
            text: 'A decimal is another way to write a part of a whole, using a point.',
            list: [
              'Half can also be written as 0.5',
              'A quarter can be written as 0.25',
              'Ten rupees and fifty paise is ₹10.50',
            ],
          },
        ],
        band: true,
      },
      {
        title: 'Geometry for Kids',
        lead: 'Geometry is Maths you can see and touch, which is why many children enjoy it.',
        id: 'geo-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Shapes',
            text: 'Circles, squares, rectangles and triangles. A chapati is a circle. A window is a rectangle.',
          },
          {
            title: 'Lines',
            text: 'Straight, curved, parallel and intersecting lines. Railway tracks are parallel lines.',
          },
          {
            title: 'Angles',
            text: 'The corner of a notebook is a right angle. A pair of scissors opens to make different angles.',
          },
          {
            title: 'Symmetry',
            text: 'Fold a butterfly picture in half and both sides match. That fold line is the line of symmetry.',
          },
          {
            title: 'Area',
            text: 'The space inside a shape. How many square tiles cover the floor of a room.',
          },
          {
            title: 'Perimeter',
            text: 'The distance around a shape. The length of fencing needed around a garden.',
          },
        ],
        band: false,
      },
      {
        title: 'Measurement for Kids',
        lead: 'Measurement links Maths directly to real objects, which helps children remember it.',
        id: 'mea-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Length',
            icon: '↔',
            text: 'The length of a pencil in centimetres. The distance to school in kilometres.',
          },
          {
            title: 'Weight',
            icon: '⚖',
            text: 'A packet of sugar in kilograms. A chocolate bar in grams.',
          },
          {
            title: 'Height',
            icon: '↑',
            text: 'How tall a child is now compared to last year, marked on a wall.',
          },
          {
            title: 'Volume',
            icon: '▢',
            text: 'A water bottle holds one litre. A spoon holds a few millilitres.',
          },
          {
            title: 'Time',
            icon: '⏰',
            text: 'Reading a clock, working out how many minutes until a programme starts.',
          },
          {
            title: 'Money',
            icon: '₹',
            text: 'Adding prices, working out change and comparing two packs for value.',
          },
        ],
        band: true,
      },
      {
        title: 'Maths Word Problems',
        lead: 'Many children can do the sum but freeze at the story around it. A fixed five-step method helps.',
        id: 'wp-h',
        kind: 'split',
        paras: [
          'Read the whole question once without trying to solve anything.',
          'Ask: what is the question actually asking me to find?',
          'Decide which operation fits — addition, subtraction, multiplication or division.',
          'Do the working neatly, one step at a time.',
          'Does the answer make sense? Re-read the question and confirm.',
        ],
        panel: {
          title: 'A worked example',
          bullets: [
            'Understand: we need the change, so we need the total cost first.',
            'Choose: multiplication, then subtraction.',
            'Calculate: 3 × 25 = 75, then 100 &minus; 75 = 25.',
            'Check: ₹75 spent plus ₹25 change equals ₹100. Correct.',
          ],
        },
        band: false,
      },
      {
        title: 'Logical Thinking and Mathematics',
        lead: 'Maths and logical thinking for kids grow together. Numbers give children something concrete to reason about.',
        id: 'log-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Patterns',
            text: 'Finding the rule behind 5, 10, 15, 20 and using it to predict what follows.',
          },
          {
            title: 'Sequences',
            text: 'Arranging numbers, shapes or steps in the correct order.',
          },
          {
            title: 'Comparisons',
            text: 'Deciding which is larger, cheaper, heavier or faster, and explaining why.',
          },
          {
            title: 'Reasoning',
            text: 'Justifying an answer instead of only stating it. "I know because …"',
          },
          {
            title: 'Classification',
            text: 'Grouping by a shared property — odd and even, 2D and 3D, more and less.',
          },
          {
            title: 'Problem solving',
            text: 'Breaking an unfamiliar question into steps the child already knows how to do.',
          },
        ],
        note: 'This is also where Maths connects with our other reasoning-led programmes, such as brain games for kids and chess classes in Hyderabad.',
        band: true,
      },
      {
        title: 'Solve the Maths',
        lead: 'Try a few questions with your child. There is no timer and no score to beat — the point is to think it through.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'There are 6 birds on a tree. 3 more birds come. How many birds are there?',
            opts: ['7', '8', '9', '10'],
            a: '9',
            why: '6 + 3 = 9 birds.',
            hint: 'Choose one answer.',
          },
          {
            q: '12 sweets are shared equally between 4 children. How many sweets does each child get?',
            opts: ['2', '3', '4', '6'],
            a: '3',
            why: '12 ÷ 4 = 3 sweets each.',
            hint: 'Choose one answer.',
          },
          {
            q: 'There are 3 boxes. Each box has 4 pencils. How many pencils in all?',
            opts: ['7', '10', '12', '14'],
            a: '12',
            why: '3 × 4 = 12 pencils.',
            hint: 'Choose one answer.',
          },
          {
            q: 'A pizza is cut into 2 equal parts. Riya eats one part. What fraction did she eat?',
            opts: ['1/4', '1/3', '1/2', '2/3'],
            a: '1/2',
            why: 'One of two equal parts is 1/2, or half.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which shape has 3 sides?',
            opts: ['Square', 'Triangle', 'Circle', 'Rectangle'],
            a: 'Triangle',
            why: 'A triangle has 3 sides.',
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        title: 'Mathematics for Beginners',
        lead: 'If your child finds Maths difficult right now, that is a normal place to begin.',
        id: 'beg-h',
        kind: 'split',
        paras: [
          'Beginners are not expected to arrive knowing tables or formulas. Learning starts from what the child can already do, and moves forward from there.',
          'A child who is not confident with subtraction will practise subtraction, not be pushed into fractions to keep up with a page number. Going back a step early usually saves months of confusion later.',
          'Beginners typically start with counting, numbers, simple addition, simple subtraction, shapes and patterns.',
        ],
        panel: {
          title: 'What beginners start with',
          bullets: [
            'Counting and number recognition',
            'Simple addition',
            'Simple subtraction',
            'Basic shapes',
            'Easy patterns',
            'Comparing bigger and smaller',
          ],
        },
        band: true,
      },
      {
        title: 'Learning Mathematics Through Activities',
        lead: 'Activity-based learning is not a break from Maths. It is how the Maths gets remembered.',
        id: 'thr-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Games',
            text: 'Dice, cards and board games turn addition and comparison into something children want to do.',
          },
          {
            title: 'Puzzles',
            text: 'Number grids and logic puzzles ask children to test ideas and correct themselves.',
          },
          {
            title: 'Stories',
            text: 'A sum inside a small story is easier to picture than the same sum on its own.',
          },
          {
            title: 'Visual examples',
            text: 'Drawings, blocks and number lines show what an operation is doing.',
          },
          {
            title: 'Hands-on activities',
            text: 'Counters, shapes and measuring tapes give abstract ideas a physical form.',
          },
          {
            title: 'Real-life examples',
            text: "Prices, timings and distances connect classroom Maths to the child's own day.",
          },
        ],
        band: false,
      },
      {
        title: 'Real-Life Mathematics',
        lead: 'Everyday moments where a child is already doing Maths.',
        id: 'rl-h',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Shopping',
            text: 'Adding up items and checking the change from a hundred rupee note.',
          },
          {
            title: 'Cooking',
            text: 'Two cups of rice, half a spoon of salt, thirty minutes on the stove.',
          },
          {
            title: 'Time',
            text: 'Working out how long until the bus arrives or how long homework took.',
          },
          {
            title: 'Money',
            text: 'Saving pocket money and working out how many weeks until a goal.',
          },
          {
            title: 'Sharing',
            text: 'Dividing sweets equally between friends, with or without a remainder.',
          },
          {
            title: 'Measuring',
            text: 'Checking height, weighing a bag, measuring a table before buying a cover.',
          },
          { title: 'Planning', text: 'Splitting study time across subjects during the week.' },
          { title: 'Travel', text: 'Reading distances, fares and travel times on a journey.' },
        ],
        band: true,
      },
      {
        title: 'Mathematics and Problem Solving',
        lead: 'Problem solving is a habit, and Maths is one of the easiest places to build it.',
        id: 'ps-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: '1. Understand the problem',
            text: 'Read carefully and say the question back in your own words.',
          },
          {
            title: '2. Find the information',
            text: 'Underline the numbers and facts that matter. Ignore what does not.',
          },
          {
            title: '3. Choose a method',
            text: 'Decide which operation or approach fits the situation.',
          },
          {
            title: '4. Solve',
            text: 'Work through the steps neatly so mistakes are easy to spot.',
          },
          { title: '5. Check', text: 'Ask whether the answer is sensible before moving on.' },
          {
            title: 'Carries over',
            text: 'The same five steps work in science, coding and everyday decisions.',
          },
        ],
        note: 'Children who enjoy this side of Maths often also do well in structured reasoning programmes such as abacus classes in Hyderabad and mental maths for kids.',
        band: false,
      },
      {
        title: 'Mathematics and Confidence',
        id: 'conf-h',
        kind: 'split',
        paras: [
          'Most children who say they are "bad at Maths" are not bad at Maths. They have a gap somewhere earlier that never got closed, and every new chapter sits on top of it.',
          'Regular, calm practice at the right level can help a child feel more comfortable with Maths over time. Familiar questions stop feeling threatening, and that makes children more willing to attempt unfamiliar ones.',
          'We do not promise marks, ranks or exam outcomes. What classes can offer is clear explanation, steady practice and a place where asking a question is normal.',
        ],
        note: 'An honest note for parents Progress in Maths depends on the child, the starting point, how regularly they attend and how much practice happens at home. Any centre that guarantees a specific result is guessing. What we can be clear about is the method and the effort.',
        band: true,
      },
      {
        title: 'How to Make Mathematics Easier for Your Child',
        lead: 'A short guide for parents in Hyderabad who want to help without adding pressure.',
        id: 'pg-h',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Start with simple examples',
            text: 'Go back a level if needed. A child who is confident at an easy step will move faster afterwards.',
          },
          {
            title: 'Use real-life situations',
            text: 'Prices, timings, distances and recipes make abstract Maths concrete.',
          },
          {
            title: 'Practise regularly',
            text: 'Short and frequent works better than long and occasional.',
          },
          {
            title: 'Avoid unnecessary pressure',
            text: 'Comparing with siblings or classmates usually makes a child more hesitant, not faster.',
          },
          {
            title: 'Ask questions',
            text: 'Get your child to talk through their method aloud. Gaps surface quickly.',
          },
          {
            title: 'Celebrate effort',
            text: 'Praise the working, the neatness and the attempt — not only the correct answer.',
          },
        ],
        band: false,
      },
      {
        id: 'searches',
        title: 'Visit or contact us',
        kind: 'pills',
        items: [
          'Address: Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad, Telangana 500072',
          'Phone: 7036044555',
          'WhatsApp: 918186844555',
          'Email: brollyjuniors.in@gmail.com',
        ],
        band: true,
      },
    ],
    session: {
      title: 'Sample Class Experience',
      lead: 'A typical shape for a Mathematics session. The exact structure can vary by age group and topic.',
      items: [
        {
          title: 'Warm-Up Activity',
          text: 'A short counting or pattern game to settle the class and recall what was learned last time.',
        },
        {
          title: 'Learn the Concept',
          text: 'The new idea is explained in simple language, with the reasoning behind it made visible.',
        },
        {
          title: 'See an Example',
          text: 'The mentor works through one full example on the board, saying each step aloud.',
        },
        {
          title: 'Practice',
          text: 'Children try similar questions themselves, with help available when they get stuck.',
        },
        {
          title: 'Solve a Challenge',
          text: 'One slightly harder question that asks children to apply the concept in a new setting.',
        },
        {
          title: 'Review What We Learned',
          text: 'A quick recap so children leave able to say what they worked on that day.',
        },
      ],
    },
    activities: {
      title: 'Mathematics Activities for Kids',
      lead: 'Maths activities for kids give practice a purpose. These are the kinds of activities used to reinforce a concept after it has been taught.',
      items: [
        {
          title: 'Number Puzzle',
          icon: '🧩',
          text: 'Fill missing numbers in a grid so every row and column follows the rule.',
        },
        {
          title: 'Pattern Challenge',
          icon: '…',
          text: 'Continue a number or shape pattern and explain the rule used.',
        },
        {
          title: 'Math Maze',
          icon: '☰',
          text: 'Move through a maze by solving a small sum at each turn.',
        },
        {
          title: 'Shape Hunt',
          icon: '▲',
          text: 'Find circles, rectangles and triangles around the room and count them.',
        },
        {
          title: 'Counting Game',
          icon: '⚇',
          text: 'Count objects in groups of two, five and ten to build multiplication sense.',
        },
        {
          title: 'Measurement Activity',
          icon: '↔',
          text: 'Measure classroom objects and compare lengths and weights.',
        },
        {
          title: 'Money Activity',
          icon: '₹',
          text: 'Play shop: add up prices, pay and work out the correct change.',
        },
        {
          title: 'Sequence Challenge',
          icon: '→',
          text: 'Arrange numbers or steps in the right order and justify the order chosen.',
        },
      ],
      cols: 4,
    },
    whyUs: {
      title: 'Why Choose Brolly Juniors?',
      lead: 'Our approach to Mathematics classes for children in Hyderabad.',
      items: [
        {
          title: 'Child-friendly learning',
          text: 'Sessions are built around how children actually learn: examples first, rules after.',
        },
        {
          title: 'Simple explanations',
          text: 'Plain language instead of textbook phrasing, so a child can follow without translating it twice.',
        },
        {
          title: 'Activity-based learning',
          text: 'Games, puzzles and hands-on tasks reinforce each concept after it has been taught.',
        },
        {
          title: 'Practice-focused',
          text: 'Understanding is the start. Practice is what makes it stick.',
        },
        {
          title: 'Parent-friendly communication',
          text: 'Parents can ask what their child worked on and what to practise at home.',
        },
        {
          title: 'Skill-focused learning',
          text: 'Number sense, reasoning and problem solving, not only finishing the next page.',
        },
      ],
      cols: 3,
    },
    practical: {
      options: ['Contact Brolly Juniors for currently available learning formats.'],
      timings: ['Class timings may vary. Contact Brolly Juniors for current availability.'],
      fees: [
        'Fees may vary based on the program and learning format. Contact Brolly Juniors for current fee details.',
      ],
      feeTitle: 'Mathematics Class Fees',
    },
    trial: {
      title: 'Let Your Child Experience Mathematics Learning',
      paras: [
        'A Free Demo is a single introductory session. Your child sits in, works on a few age-appropriate questions, and you get a clear sense of how the class is run before deciding anything.',
        'We use these details only to contact you about a demo session. Fields marked * are required.',
        'Let your child explore Mathematics through simple explanations, guided practice and engaging activities. Start with a Free Demo and see how your child responds before deciding anything.',
      ],
      includes: [
        'Your child tries a short set of questions at their own level.',
        'The mentor sees where the child is comfortable and where support is needed.',
        'You can ask about the learning approach, formats and fees.',
        'There is no obligation to enrol afterwards.',
      ],
    },
    homeGuide: {
      title: 'How Parents Can Support Maths at Home',
      lead: 'Ten minutes a day at home does more than an hour of pressure on a Sunday.',
      items: [
        {
          title: 'Practise small problems',
          text: 'Two or three questions daily beats a long session once a week.',
        },
        {
          title: 'Use Maths in daily activities',
          text: 'Ask your child to count change, read the clock or weigh ingredients.',
        },
        {
          title: 'Ask children to explain',
          text: '"How did you get that?" tells you far more than a right answer does.',
        },
        {
          title: 'Use games and puzzles',
          text: 'Card games, dice games and number puzzles are practice in disguise.',
        },
        {
          title: 'Encourage questions',
          text: 'A child who asks "why" is learning. Try not to shut that down for speed.',
        },
        {
          title: 'Allow mistakes',
          text: 'Wrong answers show exactly where the gap is. Fix the step, not the child.',
        },
      ],
      cols: 3,
    },
    local: {
      title: 'Mathematics Classes in Hyderabad',
      paras: [
        'Brolly Juniors runs kids learning classes in Hyderabad from our centre at Nizampet X Roads. Parents from the surrounding neighbourhoods bring children for both skill programmes and academic tuitions, including Maths classes for kids in Hyderabad.',
        'If you are comparing Mathematics classes in Hyderabad, the most useful thing you can do is visit or book a demo. Method, batch feel and how a mentor explains a concept are hard to judge from a website alone.',
      ],
    },
    nearMe: {
      title: 'Looking for Maths Classes for Kids Near Me?',
      lead: 'If you are searching for mathematics classes for kids near me or kids maths classes near me in this part of Hyderabad, here is what is worth checking before you decide.',
      items: [
        {
          title: 'How close is it, really?',
          text: 'A centre twenty minutes away that your child reaches calmly beats one across the city that becomes a weekly argument.',
        },
        {
          title: "Does the class match the child's level?",
          text: 'Ask whether the child will be taught at their current level or pushed to match the batch.',
        },
        {
          title: 'Can you see a session first?',
          text: 'A demo tells you more in forty minutes than any brochure.',
        },
        {
          title: 'Is the method explained clearly?',
          text: 'You should be able to understand how your child will be taught, in plain words.',
        },
      ],
      cols: 4,
    },
    related: [
      {
        icon: '→',
        title: 'Abacus Classes',
        text: 'Structured mental calculation using the abacus, building speed and number visualisation.',
        to: '/junior-skills/abacus',
      },
      {
        icon: '→',
        title: 'Vedic Maths',
        text: 'Shortcut techniques for faster calculation, useful alongside school Maths.',
        to: '/junior-skills/vedic-maths',
      },
      {
        icon: '→',
        title: 'Mental Maths',
        text: 'Calculating without paper, focused on speed and accuracy.',
        to: '/programs/mental-maths',
      },
      {
        icon: '→',
        title: 'Brain Games',
        text: 'Puzzles and reasoning activities that build focus and logical thinking.',
        to: '/programs/brain-games',
      },
      {
        icon: '→',
        title: 'Chess Classes',
        text: 'Planning, patience and consequence-thinking through structured play.',
        to: '/programs/chess',
      },
      {
        icon: '→',
        title: 'Coding for Kids',
        text: 'Logic and sequencing skills that sit close to mathematical thinking.',
        to: '/programs/coding',
      },
      {
        icon: '→',
        title: 'Robotics',
        text: 'Hands-on building where measurement and problem solving are used constantly.',
        to: '/programs/robotics',
      },
      {
        icon: '→',
        title: 'Public Speaking',
        text: 'Confidence building through structured speaking practice.',
        to: '/junior-skills/public-speaking',
      },
      {
        icon: '→',
        title: 'Academic Tuitions',
        text: 'Subject-wise tuition support for school classes at the same centre.',
        to: '/tuitions',
      },
    ],
    relatedTitle: 'Related Programs at Brolly Juniors',
    relatedLead: 'Other programmes that pair naturally with Mathematics learning.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What are Mathematics classes for kids?',
        a: 'Mathematics classes for kids are guided sessions where children learn number concepts step by step. Children work on counting, the four operations, shapes, measurement, time, money and word problems using simple explanations, examples, activities and regular practice.',
      },
      {
        q: 'Why should children learn Mathematics?',
        a: 'Maths is used in school work, homework, shopping, telling time, games and daily planning. It also supports later learning in science, coding and data. Beyond the subject itself, Maths builds logical thinking and a habit of solving problems in steps.',
      },
      {
        q: 'What age can children start Maths classes?',
        a: 'Children can begin simple Maths learning from around 5 years, starting with counting, number recognition and basic shapes. Readiness matters more than age. For the age groups currently running, contact Brolly Juniors on 7036044555.',
      },
      {
        q: 'What do kids learn in Mathematics classes?',
        a: 'Depending on age and level: counting, numbers, addition, subtraction, multiplication, division, fractions, decimals, shapes, measurements, time, money, patterns, word problems and logical thinking. Not every topic applies to every age group.',
      },
      {
        q: 'Are Maths classes useful for beginners?',
        a: 'Yes. Beginners start from what the child already knows, usually counting, simple addition and subtraction, shapes and patterns. A child is not expected to arrive with tables memorised. Closing an earlier gap first usually makes later chapters much easier.',
      },
      {
        q: 'What topics are included in the Maths curriculum?',
        a: 'The suggested progression moves from Foundation Maths (counting, number recognition, comparisons, patterns) to Basic Maths (the four operations), then Intermediate Maths (fractions, decimals, geometry, measurement, word problems) and Advanced School Maths (algebra basics, geometry concepts, logical reasoning, multi-step problems). The exact plan varies by age and level.',
      },
      {
        q: 'Do children learn through Maths activities?',
        a: 'Yes. Activities such as number puzzles, pattern challenges, shape hunts, counting games, measurement tasks and money activities are used to reinforce a concept after it has been taught. Activities give practice a purpose rather than replacing instruction.',
      },
      {
        q: 'Can Maths classes help with problem solving?',
        a: 'Maths is a good place to build problem-solving habits because every question has a method. Children practise a five-step approach: understand the problem, find the information, choose a method, solve, then check. The same steps transfer to other subjects.',
      },
      {
        q: 'Can children learn Maths through games?',
        a: 'Games are useful for practice and recall, especially for counting, addition, comparison and quick calculation. Games work best alongside clear teaching, not instead of it. The concept is explained first, then the game reinforces it.',
      },
      {
        q: 'How can parents support Maths learning at home?',
        a: 'Practise two or three small problems daily, use Maths during shopping and cooking, ask your child to explain how they got an answer, play number games, encourage questions and treat mistakes as information rather than failure.',
      },
      {
        q: 'Are classes suitable for different age groups?',
        a: 'Learning is grouped broadly by age and level, for example 5–7, 8–10, 11–13 and 14+ years, with content matched to each stage. A child may be placed slightly above or below their age band depending on readiness. Contact Brolly Juniors for the groups currently available.',
      },
      {
        q: 'What are Maths activities for kids?',
        a: 'Common Maths activities include number puzzles, pattern challenges, Maths mazes, shape hunts, counting games, measurement tasks, money and shopping role-play, and sequence challenges. Each targets a specific skill such as calculation, comparison or reasoning.',
      },
      {
        q: 'How do I choose Maths classes for my child?',
        a: "Check whether the class teaches at your child's current level, how concepts are explained, whether practice is built in, how far you have to travel and whether you can see a session first. A demo session usually answers more than a brochure.",
      },
      {
        q: 'What are the fees for Mathematics classes?',
        a: 'Fees may vary based on the program and learning format. Contact Brolly Juniors on 7036044555 for current fee details.',
      },
      {
        q: 'How can I book a Free Demo?',
        a: "Fill in the enquiry form on this page, call 7036044555, or message 918186844555 on WhatsApp. Share your child's age and class so a suitable demo session can be arranged.",
      },
    ],
    quickAnswersTitle: 'Quick Answers',
    quickAnswers: [
      {
        q: 'What is Mathematics for kids?',
        a: 'Mathematics for kids is the study of numbers, shapes, patterns and measurement at a child-appropriate level. It helps children count, compare, calculate and solve everyday problems in clear steps.',
      },
      {
        q: 'Why is Maths important for children?',
        a: 'Maths is used in school work, money, time, shopping and games. It also builds logical thinking and problem-solving habits that support later learning in science, coding and data.',
      },
      {
        q: 'What do kids learn in Maths classes?',
        a: 'Children learn counting, addition, subtraction, multiplication, division, fractions, decimals, shapes, measurement, time, money, patterns and word problems, matched to their age and level.',
      },
      {
        q: 'How can children improve Maths skills?',
        a: 'Short daily practice, learning at the correct level, explaining answers aloud, using Maths in real situations, and working through word problems using a fixed five-step method.',
      },
      {
        q: 'What are good Maths activities for kids?',
        a: 'Number puzzles, pattern challenges, Maths mazes, shape hunts, counting games, measuring objects, money role-play and sequence challenges all reinforce Maths concepts through play.',
      },
      {
        q: 'Where can I find Maths classes for kids in Hyderabad?',
        a: 'Brolly Juniors offers Mathematics classes for kids in Hyderabad at Nizampet X Roads. Call 7036044555 or book a Free Demo to see how classes are run.',
      },
      {
        q: '"What are the best Mathematics classes for kids in Hyderabad?"',
        a: 'The best class for your child is the one that teaches at their current level and explains clearly. Compare the method, the age grouping and the travel distance, then sit in on a demo before deciding. Brolly Juniors offers a Free Demo at our Nizampet X Roads centre.',
      },
      {
        q: '"Where can my child learn Maths in Hyderabad?"',
        a: 'Brolly Juniors runs Mathematics classes for children at Metro Pillar No. A689, Dr Atmaram Estates, 3rd Floor, Nizampet X Roads, Hyderabad. Call 7036044555 for current availability.',
      },
      {
        q: '"How can I improve my child\'s Maths skills?"',
        a: 'Find the earliest topic your child is unsure about and rebuild from there. Add ten minutes of daily practice, ask your child to explain their working aloud, and use everyday Maths like change, timings and measuring.',
      },
      {
        q: '"What should children learn in Mathematics?"',
        a: 'Younger children should build counting, number sense, simple operations, shapes and patterns. Older children move to fractions, decimals, geometry, measurement, algebra basics and multi-step word problems.',
      },
    ],
  },

  /* ==================================================================
     IIT Foundation — /tuitions/iit-foundation
     ================================================================== */
  '/tuitions/iit-foundation': {
    h1: 'IIT Foundation classes in Hyderabad, built on understanding rather than early cramming.',
    lead: 'Physics, chemistry and maths taken deeper than the board requires — so Class 11 starts from strength instead of from panic.',
    heroPills: ['Concept depth', 'Problem solving', 'Accuracy and speed', 'Board alignment'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 8–10', 'Batches of eight'],
    hero: {
      title: 'What are IIT Foundation classes for kids?',
      paras: [
        'Maths and science taught a little deeper than school asks for — so your child understands why an answer works, not just how to copy the steps. Built for Classes 8, 9 and 10.',
        'IIT Foundation classes teach maths and science more deeply than the school syllabus, so students build strong concepts, reasoning and problem-solving skills early. At Brolly Juniors in Hyderabad, IIT Foundation runs for Classes 8 to 10 and covers mathematics, physics and chemistry. The focus is on understanding ideas properly and solving unfamiliar problems — not on memorising shortcuts or starting Class 11 material early.',
      ],
      note: 'Please read Brolly Juniors is not affiliated with, endorsed by, or connected to any Indian Institute of Technology. "IIT Foundation" is a widely used name for early maths and science preparation. We do not promise marks, ranks, exam selection or admission of any kind.',
    },
    facts: [
      { strong: 'Classes 8–10', span: 'Levels covered' },
      { strong: 'PCM', span: 'Three subjects' },
      { strong: 'Reasoning-first', span: 'Not shortcut drills' },
      { strong: 'Max 10', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'Why parents choose it',
      title: 'What this programme is built on',
      items: [
        {
          title: 'Concepts first',
          text: 'Every topic starts with the idea behind it. Steps come after understanding, never before.',
        },
        {
          title: 'No early burnout',
          text: 'We do not start Class 11 physics in Class 8 or run long marathon classes. Pace stays sensible.',
        },
        {
          title: 'School marks protected',
          text: 'Everything maps back to the board syllabus, so foundation work lifts school results too.',
        },
        {
          title: 'Honest advice',
          text: 'If this route is not right for your child, we will tell you plainly instead of enrolling them.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What is IIT Foundation?',
      lead: 'IIT Foundation is early, deeper learning in maths and science. It builds the thinking skills that harder courses later depend on.',
      paras: [
        'School teaches a topic to the level the exam needs. IIT Foundation takes the same topic and goes further — asking why the rule works, where it stops working, and what happens if you change one part of the question.',
        'Think of it like learning to ride a bicycle. School teaches you to pedal and steer. Foundation learning teaches you to balance so well that you can ride on a bumpy road you have never seen before.',
        'At Brolly Juniors, this is a three-year path across Classes 8, 9 and 10. By the end, a student should be able to open an unfamiliar problem and start working on it without waiting to be shown a matching example.',
      ],
      panels: [
        {
          title: 'In one line',
          bullets: [
            'Goes beyond the textbook, inside the same topic',
            'Trains reasoning, not memorised tricks',
            'Runs alongside school, not against it',
            'Three years: Class 8 → Class 9 → Class 10',
          ],
        },
      ],
    },
    whyLearn: {
      eyebrow: 'The reason',
      title: 'Why should kids learn IIT Foundation concepts?',
      lead: 'Because Class 11 is a sharp jump. Students who already think in concepts handle it. Students who only memorised steps struggle.',
      items: [
        {
          title: 'The jump is real',
          text: 'Class 11 maths and science move faster and assume you understood Class 9 and 10 properly. Gaps that were hidden by memorising suddenly show.',
        },
        {
          title: 'Thinking takes time',
          text: 'Reasoning cannot be crammed in a month. It grows slowly, over years, through regular practice on problems that do not look familiar.',
        },
        {
          title: 'It helps everywhere',
          text: 'A child who reasons well does better in school exams, olympiads and any competitive test later — even if they never sit an engineering entrance.',
        },
      ],
      cols: 3,
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'What your child actually gains',
      items: [
        {
          title: 'Academic gains',
          list: [
            'Clearer understanding of maths and science topics',
            'Better performance in school and board exams',
            'Comfort with multi-step and multi-topic questions',
            'Accuracy under timed conditions',
            'A smoother move into Class 11',
          ],
        },
        {
          title: 'Thinking gains',
          list: [
            'Starts unfamiliar problems without help',
            'Checks whether an answer is sensible',
            'Explains reasoning in words, not just symbols',
            'Handles being stuck without panicking',
            'Asks better questions in class',
          ],
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Curriculum',
      title: 'What will kids learn?',
      lead: 'Four strands run across all three years. Each one builds on the last.',
      items: ['Concept depth', 'Problem solving', 'Accuracy and speed', 'Board alignment'],
      note: "What the syllabus covers Mathematics foundation · Science foundation (physics and chemistry) · logical reasoning · problem solving · concept-based questions · application-based questions · number sense · patterns and sequences · scientific thinking and estimation. This is a suggested learning structure that reflects how sessions are usually organised. It is not an official published syllabus. For the exact plan being taught in your child's batch, contact Brolly Juniors on 7036044555.",
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Concept depth',
            text: 'Board topics taken further — the reason behind each result, the proper derivation, and the cases the textbook quietly skips.',
          },
          {
            title: 'Problem solving',
            text: 'Multi-step problems where nobody tells you which method to use. Students learn to choose an approach on their own.',
          },
          {
            title: 'Accuracy and speed',
            text: 'Objective-format practice introduced gradually from Class 9. Accuracy is trained first; speed is added afterwards, never instead.',
          },
          {
            title: 'Board alignment',
            text: 'Every topic is mapped back to the school syllabus, so the extra depth strengthens board marks rather than competing with them.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Year by year',
        title: 'Age-wise IIT Foundation learning',
        lead: 'Readiness matters more than age. Two students in the same class can be at very different stages, and that is completely normal.',
        id: 'agewise',
        kind: 'table',
        head: ['Class', 'Usual age', 'Main focus', 'What good progress looks like'],
        rows: [
          [
            'Class 8',
            'About 13',
            'Building concepts properly. Number sense, patterns, basic scientific thinking.',
            'Explains why a method works, not only that it works.',
          ],
          [
            'Class 9',
            'About 14',
            'Multi-step problems. Objective-format practice begins gently.',
            'Starts an unfamiliar problem without waiting for an example.',
          ],
          [
            'Class 10',
            'About 15',
            'Depth plus board preparation. Accuracy under time.',
            'Holds accuracy in a timed paper and enters Class 11 confident.',
          ],
        ],
        note: 'Younger children IIT Foundation at Brolly Juniors begins in Class 8. If your child is younger and you want to build the same reasoning and maths thinking early, the better fits are Olympiad Foundation (Classes 4–10), Mental Maths or Problem Solving. Starting engineering-entrance preparation in primary school is not something we recommend.',
        band: true,
      },
      {
        eyebrow: 'Subject 1',
        title: 'Mathematics foundation',
        lead: 'Maths stops being a set of rules to remember and becomes a set of ideas that connect.',
        id: 'maths',
        kind: 'split',
        paras: [
          'Most students can factorise an expression. Fewer can say what factorising is for, or spot that a word problem needs it. Foundation maths closes that gap.',
          'Easy example: ask a class what 25 × 16 is. Some reach for a calculator. Some do long multiplication. A student with number sense sees 25 × 16 as 100 × 4 and answers 400 in their head. Same question, completely different thinking.',
          'Sessions cover number sense, algebraic thinking, geometry reasoning, patterns and sequences, ratio and proportion, and the habit of estimating an answer before calculating it.',
        ],
        panel: {
          title: 'Habits we build',
          bullets: [
            'Estimate first, calculate second',
            'Check if the answer is sensible',
            'Draw the problem before solving it',
            'Try a smaller version when stuck',
            'Explain the method out loud',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Subject 2',
        title: 'Science foundation',
        lead: 'Physics and chemistry taught as explanations of the real world, not as paragraphs to reproduce in an exam.',
        id: 'science',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Physics',
            text: 'Motion, force, energy, light, sound and electricity — always tied to something the student can picture or has actually seen.',
          },
          {
            title: 'Chemistry',
            text: 'Matter, atoms, reactions, acids and bases, and the periodic table as a pattern to read rather than a chart to memorise.',
          },
          {
            title: 'Scientific thinking',
            text: 'Observing carefully, guessing what will happen, testing the guess, and changing your mind when the evidence says so.',
          },
        ],
        note: 'Physics tuition → · Chemistry tuition → · General Science (Class 4–7) → Safety Sessions use demonstrations, models and worked examples. Students are not asked to handle hazardous chemicals, mains electricity or open flames, and no experiment is set as unsupervised homework. Anything involving heat, electricity or chemicals is done as a supervised demonstration only.',
        band: true,
      },
      {
        eyebrow: 'Core skills',
        title: 'Logical reasoning, problem solving and how we teach both',
        id: 'reasoning',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Logical reasoning',
            text: 'Reasoning is working out what must be true from what you already know.',
          },
          {
            title: 'Problem solving',
            text: 'Problem solving is what you do when you genuinely do not know the next step.',
          },
          {
            title: 'Concept-based learning',
            text: 'A concept question checks whether you understood the idea, not whether you remembered the formula.',
          },
          {
            title: 'Application-based learning',
            text: 'An application question puts the idea somewhere the textbook never put it.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Comparison',
        title: 'IIT Foundation vs regular school learning',
        lead: 'This is not a replacement for school. It is extra depth in the same topics.',
        id: 'vsschool',
        kind: 'table',
        head: ['Aspect', 'Regular school learning', 'IIT Foundation learning'],
        rows: [
          [
            'Goal',
            'Cover the syllabus and pass the exam',
            'Understand the topic deeply enough to use it anywhere',
          ],
          [
            'Questions',
            'Mostly similar to solved examples',
            'Often unfamiliar, with no matching example given',
          ],
          [
            'Depth',
            'To the level the board paper needs',
            'Beyond that level, inside the same topic',
          ],
          [
            'Method',
            'Learn the steps, then practise them',
            'Understand the idea, then work out the steps',
          ],
          [
            'Being stuck',
            'Usually means you missed a step',
            'Expected, and treated as part of the work',
          ],
        ],
        band: true,
      },
      {
        eyebrow: 'Important difference',
        title: 'IIT Foundation vs JEE Foundation',
        lead: 'They are two different programmes and should not be confused. IIT Foundation is the broader, depth-first option for Classes 8 to 10. JEE Foundation is more exam-shaped and suits Class 9 and 10 students who have already decided on that route.',
        id: 'vsjee',
        kind: 'table',
        head: ['Programme', 'Classes', 'Shape of the work', 'Best for'],
        rows: [
          [
            'IIT Foundation',
            '8–10',
            'Depth first. Concept clarity and reasoning across maths, physics and chemistry.',
            'Students who want stronger foundations and have not fixed on one exam yet.',
          ],
          [
            'JEE Foundation',
            '9–10',
            'Exam-shaped. Objective pattern, timed practice, weekly test and an error log.',
            'Students already set on the engineering-entrance route.',
          ],
          [
            'NEET Foundation',
            '9–10',
            'Biology-led, with physics and chemistry to matching depth. Diagram and terminology precision.',
            'Students leaning towards medicine.',
          ],
          [
            'Olympiad Foundation',
            '4–10',
            'Reasoning-led across maths, science, English and logic for IMO, NSO, IEO and NSTSE.',
            'Younger students, or anyone wanting reasoning practice early.',
          ],
        ],
        note: "Not sure which one fits? Tell us your child's class and what they enjoy, and we will suggest the closest fit — including telling you if none of them is right yet. Call 7036044555.",
        band: false,
      },
      {
        eyebrow: 'Try it yourself',
        title: 'Can you solve it?',
        lead: 'This is the kind of question we use in class. It needs no formula — only careful thinking.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'IIT Foundation at Brolly Juniors is for which classes?',
            opts: ['Classes 1 to 5', 'Classes 8 to 10', 'Class 11 and 12', 'Any age'],
            a: 'Classes 8 to 10',
            why: 'IIT Foundation runs across Classes 8, 9 and 10 — three years of building depth before Class 11.',
            hint: 'Choose one answer.',
          },
          {
            q: 'What is the main difference between IIT Foundation and JEE Foundation?',
            opts: [
              'They are exactly the same',
              'IIT Foundation is depth-first for Classes 8-10; JEE Foundation is exam-shaped for Classes 9-10',
              'JEE Foundation is only maths',
              'IIT Foundation has no science',
            ],
            a: 'IIT Foundation is depth-first for Classes 8-10; JEE Foundation is exam-shaped for Classes 9-10',
            why: 'IIT Foundation is broader and concept-led. JEE Foundation is more exam-shaped, with timed objective practice.',
            hint: 'Choose one answer.',
          },
          {
            q: 'A concept question is one that checks whether you...',
            opts: [
              'Remembered the formula',
              'Understood the idea',
              'Wrote neatly',
              'Finished fastest',
            ],
            a: 'Understood the idea',
            why: 'Concept questions cannot be answered from memory alone. They test whether the underlying idea is understood.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these does Brolly Juniors promise?',
            opts: [
              'A guaranteed IIT seat',
              'A guaranteed rank',
              'Clear teaching and honest feedback',
              'Guaranteed full marks',
            ],
            a: 'Clear teaching and honest feedback',
            why: 'No honest centre can guarantee marks, ranks or admission. What is promised is clear teaching, a sensible pace and truthful feedback.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Starting out',
        title: 'IIT Foundation for beginners',
        id: 'beginners',
        kind: 'split',
        paras: [
          'A student does not need to be a topper to begin. They need to be in Class 8, 9 or 10, and willing to sit with a problem for more than thirty seconds.',
          'New students usually spend the first few weeks getting used to two things: questions that do not look like the examples, and being told that a wrong answer with good reasoning is more useful than a right answer with none.',
          'If a student is struggling with the current school syllabus, regular maths tuition or science tuition is the better starting point. Foundation work sits on top of a stable base, not instead of one.',
        ],
        panel: {
          title: 'You are ready if your child',
          bullets: [
            'Is in Class 8, 9 or 10',
            'Is broadly keeping up with school maths and science',
            'Can stay with a hard question without giving up immediately',
            'Is curious about why things work',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Quick quiz',
        title: 'Test your understanding',
        lead: 'Four short questions on the ideas covered on this page.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 4 · Score 0'],
        band: true,
      },
      {
        eyebrow: 'For parents',
        title: 'Parent support and parent guide',
        id: 'parent-guide',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'How we keep you informed',
            list: [
              'Progress is discussed with you directly, not posted publicly',
              'Test scores shared privately with the family',
              'Honest feedback if a programme is not working',
              'You can ask to observe or discuss the approach at any time',
            ],
          },
          {
            title: 'What helps at home',
            list: [
              'Ask "how did you work it out?" instead of "did you get it right?"',
              'Let your child stay stuck for a few minutes before helping',
              'Treat a wrong answer with good reasoning as progress',
              'Protect sleep — tired students cannot reason well',
              'Avoid comparing marks with cousins or classmates',
            ],
          },
        ],
        note: "Our commitment Brolly Juniors does not promise marks, ranks or exam results. No coaching centre can honestly guarantee those. What we commit to is clear teaching, sensible pace, small batches and truthful feedback about your child's progress.",
        band: false,
      },
      {
        title: "Your child's free demo is one message away.",
        kind: 'split',
        paras: [
          "Tell us your child's class and what they enjoy. We will suggest the closest fit — with no pressure and no upfront payment.",
        ],
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample class experience',
      lead: 'A typical session moves through the same three stages: understand, practise, create.',
      items: [
        {
          title: 'Warm-up question',
          text: 'One short puzzle or estimation question on the board. It wakes up the thinking and shows who is comfortable with the previous topic.',
        },
        {
          title: 'Concept explained',
          text: 'The idea is built from something familiar, with the reasoning shown in full. Students are asked to explain it back in their own words.',
        },
        {
          title: 'Guided practice',
          text: 'Problems worked together, with the educator asking "why did you choose that step?" rather than supplying it.',
        },
        {
          title: 'Independent problems',
          text: 'Questions with no matching example. Being stuck here is expected and is where most of the learning happens.',
        },
        {
          title: 'Review and correction',
          text: 'Mistakes are sorted by cause — concept gap, careless slip, or ran out of time — because the three need different fixes.',
        },
      ],
    },
    activities: {
      eyebrow: 'Learning through activities',
      title: 'Activities, STEM links and real-life examples',
      items: [
        {
          title: 'Pattern hunts',
          text: 'Students are given a sequence and asked to predict the next term, then justify the prediction before checking it.',
        },
        {
          title: 'Estimation rounds',
          text: 'How many steps from the gate to the classroom? Estimate first, then measure. Trains number sense and honest checking.',
        },
        {
          title: 'Demonstration and predict',
          text: 'A physics demonstration is paused before the result. Everyone writes their prediction, then it is run. Wrong predictions get discussed properly.',
        },
        {
          title: 'Explain it back',
          text: 'A student teaches the topic to the class in ninety seconds. Gaps in understanding show up immediately.',
        },
        {
          title: 'Error log review',
          text: 'Mistakes are collected and revisited later, sorted by cause. Reviewing them is worth more than another fresh test.',
        },
        {
          title: 'Mini challenges',
          text: 'Small open problems — design a fair dice game, work out the cheapest way to tile a floor — that use several topics at once.',
        },
        {
          title: 'Real-life examples we use',
          list: [
            'Why a cricket ball swings in the air',
            'How a shop discount of "50% + 20% off" is not 70% off',
            'Why a metro train slows down long before the station',
            'How soap actually removes oil from a plate',
            'Why the same phone battery drains faster in summer',
          ],
        },
        {
          title: 'Mini projects and challenges',
          list: [
            'Measure the height of a building using only a shadow',
            'Build a working paper circuit model and explain the flow',
            'Design a survey, collect data, and present what it shows',
            'Find three ways to solve the same problem, then argue for the best one',
          ],
        },
      ],
      cols: 4,
      note: 'STEM connection The reasoning built here transfers directly into coding, robotics and AI for kids. Breaking a problem into steps is the same skill whether the answer is written on paper or typed into an editor.',
    },
    whyUs: {
      eyebrow: 'About the centre',
      title: 'Why choose Brolly Juniors?',
      items: [
        {
          title: 'We say no',
          text: 'We do not start Class 11 material in Class 8, run six-hour Sunday marathons, or publish rank predictions. Early pressure burns students out before the year that counts.',
        },
        {
          title: 'Scores stay private',
          text: 'Test results are shared with the family, never ranked publicly in front of the class.',
        },
        {
          title: 'Small batches',
          text: "Batches are kept small so every student can be seen and heard. Ask us for the current batch size for your child's class.",
        },
        {
          title: 'One centre, in person',
          text: 'Nizampet X Roads, beside Sri Bhramaramba Theatre, close to JNTU Metro. Easy for families across the north-west corridor.',
        },
        {
          title: 'School work comes first',
          text: 'The board syllabus is covered in full. Foundation depth is added on top, not swapped in.',
        },
        {
          title: 'Honest fit advice',
          text: 'If a different programme suits your child better, we will say so — even if it means a smaller enrolment for us.',
        },
      ],
      cols: 3,
      note: "Trainers and mentors Sessions are taken by Brolly Juniors educators. For current trainer details, qualifications and who will be teaching your child's batch, contact Brolly Juniors on 7036044555. We publish trainer information only where it can be verified, so you will not find invented profiles on this page.",
    },
    practical: {
      options: [
        'IIT Foundation is taught in person at the Nizampet centre. Schools can arrange delivery on their own campus through our school partnership programme.',
      ],
      timings: [
        'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
      fees: [
        'Fees depend on the class level and batch. We do not publish figures that may go out of date.',
      ],
      feeTitle: 'Fees',
    },
    trial: {
      title: 'Book a free demo class',
      paras: [
        'Every new family can attend one free trial class before deciding anything. There is no payment and no obligation.',
        'Come and see one class before you decide anything. No payment, no pressure.',
      ],
    },
    local: {
      title: 'IIT Foundation classes near me in Hyderabad',
      paras: [
        'Areas we commonly serve:',
        'If you are searching for IIT Foundation classes near you in the Nizampet, Bachupally or JNTU area, the Brolly Juniors centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads — beside Sri Bhramaramba Theatre, close to JNTU Metro Station, at metro pillar A689.',
        'Families travel to us from across the north-west corridor of Hyderabad. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
    },
    related: [
      {
        icon: '→',
        title: 'JEE Foundation',
        text: 'Classes 9–10. Exam-shaped PCM with timed objective practice.',
        to: '/tuitions/jee-foundation',
      },
      {
        icon: '→',
        title: 'NEET Foundation',
        text: 'Classes 9–10. Biology-led, with physics and chemistry alongside.',
        to: '/tuitions/neet-foundation',
      },
      {
        icon: '→',
        title: 'Olympiad Foundation',
        text: 'Classes 4–10. Reasoning for IMO, NSO, IEO and NSTSE.',
        to: '/tuitions/olympiad-foundation',
      },
      {
        icon: '→',
        title: 'Advanced Maths',
        text: 'Classes 7–10. Extra depth for students who want more.',
        to: '/tuitions/advanced-maths',
      },
      {
        icon: '→',
        title: 'General Science',
        text: 'Classes 4–7. Science foundations before specialising.',
        to: '/tuitions/general-science',
      },
      {
        icon: '→',
        title: 'Problem Solving',
        text: 'Strategy-led thinking practice for younger learners.',
        to: '/programs/problem-solving',
      },
    ],
    relatedTitle: 'Related programmes',
    faqTitle: 'IIT Foundation classes in Hyderabad: your questions answered',
    faqs: [
      {
        q: 'What is IIT Foundation?',
        a: 'IIT Foundation is early, deeper learning in maths and science. The same school topics are taken further, with the focus on understanding the reasoning rather than memorising steps. At Brolly Juniors it runs for Classes 8 to 10 and covers mathematics, physics and chemistry.',
      },
      {
        q: 'What age is IIT Foundation for?',
        a: 'Brolly Juniors runs IIT Foundation for Classes 8, 9 and 10 — usually ages 13 to 15. Readiness matters more than age, so a free demo class is the best way to check the fit. For younger children, Olympiad Foundation covers Classes 4 to 10.',
      },
      {
        q: 'Is IIT Foundation the same as JEE Foundation?',
        a: 'No. They are separate programmes. IIT Foundation is broader and depth-first, running across Classes 8 to 10. JEE Foundation is more exam-shaped, running in Classes 9 and 10 for students already set on the engineering-entrance route. They overlap in subject matter, but the shape of the work is different.',
      },
      {
        q: 'What subjects are included in IIT Foundation?',
        a: 'Mathematics, physics and chemistry, plus logical reasoning and problem solving woven through all three. Everything is mapped back to the board syllabus so school preparation is covered alongside.',
      },
      {
        q: 'Why should a child start foundation learning early?',
        a: 'Because reasoning cannot be crammed. Understanding builds slowly, over years of regular practice on unfamiliar problems. Starting in Class 8 gives a student three years to build that habit before Class 11, which is where the workload rises sharply.',
      },
      {
        q: 'Does Brolly Juniors guarantee IIT admission or a JEE rank?',
        a: 'No, and we would not trust anyone who did. We do not promise marks, ranks, exam selection or admission. Brolly Juniors is also not affiliated with or endorsed by any Indian Institute of Technology. What we offer is clear teaching, a sensible pace and honest feedback.',
      },
      {
        q: "Will this clash with my child's school work?",
        a: 'It should not. The board syllabus is covered in full and the extra depth sits inside the same topics, so foundation work generally strengthens school marks. Batches are scheduled around school hours, and we do not run long marathon sessions.',
      },
      {
        q: 'What are the fees for IIT Foundation classes?',
        a: 'Fees vary by class level and batch, and we do not publish figures that could go out of date. Contact Brolly Juniors on 7036044555 for current fee details.',
      },
      {
        q: 'What are the batch timings?',
        a: 'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm. Contact Brolly Juniors for current batch timings.',
      },
      {
        q: 'Can we attend a free demo before enrolling?',
        a: 'Yes. Every new family can book one free trial class to see the teaching approach, meet the educator and confirm the programme is a good fit. There is no payment and no obligation.',
      },
      {
        q: 'How large are the batches?',
        a: "Batches are kept small so every student can be seen and supported. Please contact Brolly Juniors for the current batch size for your child's class level, as this varies. School-delivery formats are planned separately with the school.",
      },
      {
        q: 'Who teaches the IIT Foundation classes?',
        a: "Sessions are taken by Brolly Juniors educators. Contact Brolly Juniors for current trainer details and to find out who will be teaching your child's batch. We do not publish trainer profiles that cannot be verified.",
      },
      {
        q: 'My child is in Class 6. Can they join?',
        a: 'Not this programme — IIT Foundation begins in Class 8. For a Class 6 student we would suggest Olympiad Foundation, Mental Maths or Problem Solving. We do not recommend starting engineering-entrance preparation in primary school.',
      },
      {
        q: 'My child is average in maths. Is this suitable?',
        a: 'Possibly, but it depends on the base. Foundation work sits on top of a stable understanding of the current syllabus. If your child is struggling with school maths right now, regular maths tuition is the better starting point, and we will tell you so honestly after the demo.',
      },
      {
        q: 'Where is the centre located?',
        a: 'Brolly Juniors is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre and close to JNTU Metro Station, at metro pillar A689. Open Monday to Saturday, 10:00 am to 7:00 pm.',
      },
    ],
    quickAnswersTitle: 'Quick answers',
    quickAnswers: [
      {
        q: 'What is IIT Foundation?',
        a: 'Early, deeper learning in maths and science that builds concepts, reasoning and problem solving before Class 11.',
      },
      {
        q: 'What age is it for?',
        a: 'Classes 8 to 10 at Brolly Juniors, usually ages 13 to 15. Readiness matters more than age.',
      },
      {
        q: 'Is it the same as JEE Foundation?',
        a: 'No. IIT Foundation is broader and depth-first for Classes 8–10. JEE Foundation is exam-shaped for Classes 9–10.',
      },
      {
        q: 'What subjects are included?',
        a: 'Mathematics, physics and chemistry, with logical reasoning and problem solving throughout.',
      },
      {
        q: 'Why start early?',
        a: 'Reasoning grows slowly. Three years of practice before Class 11 makes that jump manageable.',
      },
      {
        q: 'Where is it available?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad, near JNTU Metro. Monday to Saturday, 10:00 am – 7:00 pm.',
      },
    ],
  },

  /* ==================================================================
     Olympiad Foundation — /tuitions/olympiad-foundation
     ================================================================== */
  '/tuitions/olympiad-foundation': {
    h1: 'Olympiad foundation classes in Hyderabad that train reasoning, not question banks.',
    lead: 'Maths, science, English and logical reasoning for IMO, NSO, IEO and NSTSE — with the higher-order thinking section treated as the main event.',
    heroPills: ['Logical reasoning', 'Non-routine maths', 'Science application', 'English and exam craft'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 4–10', 'Batches of eight'],
    hero: {
      title: 'What are Olympiad Foundation classes?',
      paras: [
        'We train reasoning, not question banks. Children learn strategies that work on a question nobody has seen before — which is exactly what an olympiad paper asks for.',
        'Olympiad Foundation classes train the thinking that olympiad exams test — logical reasoning, non-routine maths, science application and English usage — rather than drilling past questions. At Brolly Juniors in Hyderabad this runs for Classes 4 to 10, covering IMO, NSO, IEO and NSTSE, with a timed practice paper each week and a full review of the higher-order thinking section.',
      ],
      note: 'Please read Brolly Juniors is an independent learning centre. We are not affiliated with, endorsed by or officially connected to the Science Olympiad Foundation, Unified Council, or any other olympiad-conducting body. Exam names are used only to describe what we prepare children for. We do not promise medals, ranks, selection or results of any kind.',
    },
    facts: [
      { strong: 'Classes 4–10', span: 'Levels covered' },
      { strong: 'IMO · NSO · IEO', span: 'Exams covered' },
      { strong: 'Weekly paper', span: 'Timed practice' },
      { strong: 'Max 10', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'How it works',
      title: 'What this programme is built on',
      items: [
        {
          title: 'Strategy before papers',
          text: 'Strategy is taught before any past paper is opened. Papers are then used to test the training, not to supply answers to memorise.',
        },
        {
          title: 'A paper every week',
          text: 'One timed practice paper weekly, then a full review — with the higher-order thinking section given proper attention rather than skipped.',
        },
        {
          title: 'Open to everyone',
          text: 'This suits any student in Classes 4 to 10, not only toppers. Nobody is screened out before they start.',
        },
        {
          title: 'Scores stay private',
          text: 'Practice paper results are shared with the family and never ranked publicly in front of the class.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What is Olympiad Foundation?',
      lead: 'Olympiad papers are largely a reasoning test wearing a subject costume. Train the reasoning, and it works across all four exams.',
      paras: [
        'School asks questions that look like the ones already solved in class. An olympiad paper deliberately does the opposite — it takes something your child knows and asks it in a shape they have never seen.',
        'Easy example: school asks "what is 7 × 8?" An olympiad asks "a number multiplied by itself gives 49. What is the number?" Same times table, completely different thinking. The second question cannot be answered by recall alone.',
        'At Brolly Juniors this runs across Classes 4 to 10, covering IMO (maths), NSO (science), IEO (English) and NSTSE.',
      ],
      panels: [
        {
          title: 'In one line',
          bullets: [
            'Strategies for questions nobody has seen',
            'One timed practice paper each week',
            'Higher-order thinking section treated as the main event',
            'Four exams covered: IMO, NSO, IEO, NSTSE',
            'Classes 4 to 10, all levels welcome',
          ],
        },
      ],
    },
    whyLearn: {
      eyebrow: 'The reason',
      title: 'Why should kids learn olympiad skills?',
      items: [
        {
          title: 'It lifts every subject',
          text: 'Reasoning is not a separate skill sitting beside maths and science. It is the thing underneath both, so training it raises school marks generally.',
        },
        {
          title: 'Timed papers stop being scary',
          text: 'Sitting a hard paper against the clock at ten or eleven makes the same experience at fifteen feel ordinary. That is a real, lasting advantage.',
        },
        {
          title: 'Being stuck becomes normal',
          text: 'Olympiad questions are meant to be hard. Children learn that not knowing the answer immediately is the start of the work, not a sign of failure.',
        },
      ],
      cols: 3,
      note: 'Because it is worth doing even without the medal. Most students will not place, and that is not the point. Reasoning practice at this age improves school performance across every subject, and a child who has sat a hard timed paper at eleven finds board exams considerably less frightening at fifteen.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'What your child actually gains',
      items: [
        {
          title: 'Thinking gains',
          list: [
            'Attacks a problem with no taught method',
            'Spots patterns and predicts what comes next',
            'Solves reasoning questions quickly and reliably',
            'Explains an unfamiliar scientific scenario',
            'Checks whether an answer is sensible',
          ],
        },
        {
          title: 'Exam and school gains',
          list: [
            'Completes a full paper within the time limit',
            'Manages timing across different sections',
            'Better accuracy under pressure',
            'Stronger performance in school tests generally',
            'Far less anxiety about big exams later',
          ],
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Curriculum',
      title: 'What will kids learn?',
      lead: 'Four strands, matched to how the papers are actually built.',
      items: [
        'Logical reasoning',
        'Non-routine maths',
        'Science application',
        'English and exam craft',
      ],
      note: "What the syllabus covers Mathematics · science · logical reasoning · patterns · number skills · analytical thinking · problem solving · application-based questions · challenge questions · English usage and comprehension. This is a suggested learning structure reflecting how sessions are usually organised. It is not an official published syllabus, and it is not the syllabus of any olympiad body. For the exact plan being taught in your child's batch, contact Brolly Juniors on 7036044555.",
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Logical reasoning',
            text: 'Patterns, series, analogies, coding-decoding, direction sense and spatial or figure reasoning — the section that appears in every paper, whatever the subject on the cover.',
          },
          {
            title: 'Non-routine maths',
            text: 'Problems that use school topics in ways the school textbook never does: counting puzzles, number puzzles and multi-step word problems.',
          },
          {
            title: 'Science application',
            text: 'Predicting and explaining in unfamiliar situations rather than recalling definitions, including interpreting experimental setups and reading data and graphs.',
          },
          {
            title: 'English and exam craft',
            text: 'Usage, idioms, vocabulary and comprehension for IEO, plus timing across sections and dedicated practice on the higher-order thinking section.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Year by year',
        title: 'Age-wise olympiad learning',
        lead: 'Readiness matters more than age. Two children in the same class can be at very different stages, and that is completely normal.',
        id: 'agewise',
        kind: 'table',
        head: ['Stage', 'Usual age', 'Main focus', 'What good progress looks like'],
        rows: [
          [
            'Classes 4–5',
            'About 9–10',
            'Patterns, number puzzles and simple reasoning. Getting comfortable with hard questions.',
            'Keeps trying after the first attempt fails.',
          ],
          [
            'Classes 6–7',
            'About 11–12',
            'Multi-step problems, analogies, coding-decoding and science application.',
            'Chooses a strategy without being told which one.',
          ],
          [
            'Classes 8–10',
            'About 13–15',
            'Harder non-routine maths, data interpretation, timing across sections.',
            'Completes a full timed paper and reviews it honestly.',
          ],
        ],
        note: 'Younger children Olympiad Foundation at Brolly Juniors begins in Class 4. For a younger child, Brain Games, Mental Maths, Chess or Problem Solving build the same reasoning habits in a way that suits their stage better.',
        band: true,
      },
      {
        eyebrow: 'Subject 1',
        title: 'Maths olympiad foundation',
        lead: 'Non-routine maths means using what your child already knows, in a way the textbook never showed them.',
        id: 'maths',
        kind: 'split',
        paras: [
          'A school maths question tells you which chapter it belongs to. An olympiad question does not — working out what kind of problem it even is becomes half the task.',
          'Easy example: "How many times does the digit 3 appear when you write out the numbers 1 to 100?" There is no formula in any chapter for this. You have to organise the counting yourself. That is exactly the skill being trained.',
          'Work covers number puzzles, counting problems, multi-step word problems, and applying syllabus topics in unusual arrangements.',
        ],
        panel: {
          title: 'Strategies we teach',
          bullets: [
            'Try a smaller version of the problem first',
            'Draw it, or make a table',
            'Work backwards from the answer',
            'Look for a pattern before calculating',
            'Organise the counting so nothing is missed',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Subject 2',
        title: 'Science olympiad foundation',
        lead: 'Science olympiad questions ask children to predict and explain, not to recall a definition.',
        id: 'science',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Apply to new situations',
            text: 'A concept learned in one setting is asked about in a completely different one. Understanding travels; memorised sentences do not.',
          },
          {
            title: 'Read the experiment',
            text: 'A setup is described or drawn, and the child works out what it is testing and what should happen.',
          },
          {
            title: 'Read data and graphs',
            text: 'Pulling the right information out of a table or chart, and noticing what it does not tell you.',
          },
        ],
        note: 'Easy example: instead of "define evaporation", the question shows two identical wet cloths, one in shade and one in sunlight, and asks which dries first and why. Same concept, real thinking required. General Science (Class 4–7) → Safety Sessions use demonstrations, diagrams, models and worked examples. Students are not asked to handle hazardous chemicals, mains electricity or open flames, and no experiment is set as unsupervised homework. Anything involving heat, electricity or chemicals is a supervised demonstration only.',
        band: true,
      },
      {
        eyebrow: 'The strand that appears in every paper',
        title: 'Logical reasoning, patterns and number puzzles',
        id: 'reasoning',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Logical reasoning',
            text: 'Working out what must be true from what you already know.',
          },
          {
            title: 'Pattern recognition',
            text: 'Noticing the rule behind a sequence, then using it to predict what comes next.',
          },
          {
            title: 'Number puzzles',
            text: 'Problems where the numbers hide a structure you have to uncover.',
          },
          {
            title: 'Problem solving',
            text: 'What you do when you do not know the next step. Children learn a small set of strategies and practise choosing between them.',
          },
          {
            title: 'Critical thinking',
            text: 'Asking whether an answer is sensible, whether a claim follows from the evidence, and what the question is really asking.',
          },
          {
            title: 'Application-based questions',
            text: 'Familiar ideas placed somewhere unfamiliar. Percentages live in a maths exercise, a shop discount, a battery icon and a cricket strike rate.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'How they link',
        title: 'The maths and science connection',
        lead: 'Olympiad papers blur the line between subjects on purpose, so we teach them together.',
        id: 'connection',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Science needs maths',
            text: 'Reading a graph, comparing two measurements or working out a rate is arithmetic wearing a lab coat. Weak number sense shows up as "weak science".',
          },
          {
            title: 'Maths needs observation',
            text: 'Spotting the pattern in a sequence is the same act of careful noticing that good science depends on.',
          },
          {
            title: 'Reasoning sits under both',
            text: 'Train it once and it pays off in both papers — which is why the reasoning strand is not treated as an optional extra.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Comparison',
        title: 'Olympiad Foundation vs regular school learning',
        lead: 'This runs alongside school, and generally makes school easier rather than harder.',
        id: 'vsschool',
        kind: 'table',
        head: ['Aspect', 'Regular school learning', 'Olympiad Foundation'],
        rows: [
          [
            'Questions',
            'Usually resemble a solved example',
            'Deliberately unfamiliar, with no matching example',
          ],
          ['Which chapter?', 'You are told', 'Working that out is part of the problem'],
          [
            'Being stuck',
            'Usually means a step was missed',
            'Expected, and treated as the start of the work',
          ],
          [
            'Reasoning',
            'Rarely tested on its own',
            'A section in its own right, in every paper',
          ],
          [
            'Goal',
            'Cover the syllabus and pass',
            'Think well enough to handle anything on the syllabus',
          ],
        ],
        band: false,
      },
      {
        eyebrow: 'Important difference',
        title: 'Olympiad Foundation vs IIT, JEE and NEET Foundation',
        lead: 'Olympiad Foundation is the only one of the four that starts in Class 4, and the only one that is not tied to a career route. The other three prepare for a specific direction later. Olympiad Foundation trains reasoning that helps whichever direction a child eventually chooses — or none of them.',
        id: 'vsother',
        kind: 'table',
        head: ['Olympiad Foundation', 'IIT Foundation', 'JEE Foundation', 'NEET Foundation'],
        rows: [
          ['Classes', '4–10', '8–10', '9–10', '9–10'],
          [
            'Subjects',
            'Maths, science, English, reasoning',
            'Maths, physics, chemistry',
            'Maths, physics, chemistry',
            'Biology, chemistry, physics',
          ],
          ['Shape', 'Reasoning-led, exam-agnostic', 'Depth-first', 'Exam-shaped', 'Biology-led'],
          [
            'Tied to a career route?',
            'No',
            'Loosely — engineering-leaning',
            'Yes — engineering',
            'Yes — medicine',
          ],
          [
            'Best for',
            'Any child aged roughly 9–15, including younger ones',
            'Undecided students from Class 8',
            'Students set on engineering',
            'Students leaning to medicine',
          ],
        ],
        note: 'These are not either-or choices for older students. A Class 9 student can take IIT Foundation, JEE Foundation or NEET Foundation as their main track, with olympiad work as reasoning practice alongside. For a Class 4 to 7 child, Olympiad Foundation is simply the right starting point — the others do not begin yet.',
        band: true,
      },
      {
        eyebrow: 'Try it yourself',
        title: 'Can you solve the challenge?',
        lead: 'Four real olympiad-style challenges. Use the hint if you need it — that is not cheating, it is how strategy is learned.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'Olympiad Foundation at Brolly Juniors is for which classes?',
            opts: ['Classes 1 to 3', 'Classes 4 to 10', 'Classes 9 and 10', 'Class 11 and 12 only'],
            a: 'Classes 4 to 10',
            why: 'Classes 4 to 10 — the earliest-starting of the four foundation programmes, and open to any student, not only toppers.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why does Brolly Juniors teach strategy before opening past papers?',
            opts: [
              'Past papers are banned',
              'Because memorised questions stop working when the paper changes each year',
              'To save time',
              'Because past papers are too easy',
            ],
            a: 'Because memorised questions stop working when the paper changes each year',
            why: 'Reasoning transfers; question banks do not. Papers are used to test the training rather than to supply answers to memorise.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these is true about olympiad results?',
            opts: [
              'Brolly Juniors guarantees a medal',
              'Most students will not place, and the reasoning gains are still worth it',
              'Only toppers may enrol',
              'Every student receives a rank',
            ],
            a: 'Most students will not place, and the reasoning gains are still worth it',
            why: 'Most students will not place, and that is not the point. Reasoning practice improves school performance across subjects regardless.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Is Brolly Juniors officially affiliated with an olympiad body?',
            opts: [
              'Yes, with SOF',
              'Yes, with the Unified Council',
              'No — it is an independent learning centre',
              'Yes, with all of them',
            ],
            a: 'No — it is an independent learning centre',
            why: 'Brolly Juniors is independent and is not affiliated with, endorsed by or connected to any olympiad-conducting body. Exam names describe only what children are prepared for.',
            hint: 'Choose one answer.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Starting out',
        title: 'Olympiad Foundation for beginners',
        id: 'beginners',
        kind: 'split',
        paras: [
          'Your child does not need to be top of the class. They need to be in Classes 4 to 10 and willing to sit with a question for more than thirty seconds.',
          'New students usually find one thing unfamiliar: questions that do not look like anything in their textbook. That feeling passes within a few weeks, and the confidence that replaces it is the main reason parents say it was worth doing.',
          'If your child is struggling with the current school syllabus, regular maths tuition or science tuition is a better place to begin. Olympiad work sits on top of a stable base.',
        ],
        panel: {
          title: 'You are ready if your child',
          bullets: [
            'Is in Classes 4 to 10',
            'Is broadly keeping up with school maths and science',
            'Enjoys puzzles, or is willing to try one',
            'Can stay with a hard question without giving up at once',
            'Is curious about why things work',
          ],
        },
        band: true,
      },
      {
        eyebrow: 'Quick quiz',
        title: 'Test your understanding',
        lead: 'Four short questions on the ideas covered on this page.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 4 · Score 0'],
        band: false,
      },
      {
        eyebrow: 'For parents',
        title: 'Parent support and parent guide',
        id: 'parent-guide',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'How we keep you informed',
            list: [
              'Weekly paper results shared privately with the family',
              'Progress discussed in terms of strategies gained, not rank',
              'Honest feedback if the programme is not working',
              'You can ask to discuss the approach at any time',
            ],
          },
          {
            title: 'What helps at home',
            list: [
              'Ask "how did you work it out?" instead of "did you get it right?"',
              'Let your child stay stuck for a few minutes before helping',
              'Praise the strategy, not the speed',
              'Do not treat a missing medal as a failure',
              'Avoid comparing results with cousins or classmates',
            ],
          },
        ],
        note: "Our commitment Brolly Juniors does not promise medals, ranks, selection or results, and we do not publish student achievement claims or competition statistics we cannot evidence. What we commit to is clear teaching, a sensible pace, small batches and truthful feedback about your child's progress.",
        band: true,
      },
      {
        title: "Your child's free demo is one message away.",
        kind: 'split',
        paras: [
          "Tell us your child's class and what they enjoy. We will suggest the closest fit — with no pressure and no upfront payment.",
        ],
        band: false,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample class experience',
      items: [
        {
          title: 'Warm-up puzzle',
          text: "One short reasoning question on the board. It wakes up the thinking and shows who is comfortable with last week's strategy.",
        },
        {
          title: 'Strategy taught',
          text: 'One approach — working backwards, drawing a table, trying a smaller case — explained with a worked example.',
        },
        {
          title: 'Guided practice',
          text: 'Problems attempted together, with the educator asking "why did you choose that strategy?" rather than supplying the next step.',
        },
        {
          title: 'Independent challenge',
          text: 'A genuinely hard question with no matching example. Being stuck here is expected and is where the learning happens.',
        },
        {
          title: 'Paper and review',
          text: 'The weekly timed paper, followed by a review sorted by what went wrong — strategy, calculation, or ran out of time.',
        },
      ],
    },
    activities: {
      eyebrow: 'Learning through games and challenges',
      title: 'Olympiad activities and mini challenges',
      items: [
        {
          title: 'Pattern hunts',
          text: 'A sequence goes on the board. Predict the next term, then justify the prediction before anyone checks it.',
        },
        {
          title: 'Odd one out',
          text: 'Four items, one does not belong. The interesting part is that there is often more than one defensible answer.',
        },
        {
          title: 'Estimation rounds',
          text: 'Guess before calculating. Builds the instinct that catches an answer which is wildly wrong.',
        },
        {
          title: 'Strategy relay',
          text: 'One problem, solved three different ways by three groups, then compared for which route was quickest.',
        },
        {
          title: 'Beat the clock',
          text: 'Short timed bursts on reasoning questions, introduced only once accuracy is steady.',
        },
        {
          title: 'Paper review clinic',
          text: 'The weekly paper is reviewed together, with the higher-order thinking section given the most time.',
        },
        {
          title: 'Real-life problem solving we use',
          list: [
            'Working out if "buy 2 get 1 free" beats "33% off"',
            'Splitting a bill fairly when everyone ordered differently',
            'Planning the fastest route with three stops to make',
            'Deciding how many autos a group of 13 children needs',
            'Judging whether an advertised claim actually adds up',
          ],
        },
        {
          title: 'Mini challenges',
          text: 'Brain Games → · Chess →',
          list: [
            'How many squares are there on a chessboard? (It is not 64)',
            'Weigh nine coins and find the light one in two weighings',
            'Cross a river with a fox, a hen and a sack of grain',
            'Find every three-digit number whose digits add to 5',
          ],
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'About the centre',
      title: 'Why choose Brolly Juniors?',
      items: [
        {
          title: 'Strategy, not question banks',
          text: 'We teach approaches that work on unseen questions. Past papers test the training rather than supply answers to memorise.',
        },
        {
          title: 'Honest about medals',
          text: 'Most students will not place, and we say so. The reasoning gains are real whether or not a certificate arrives.',
        },
        {
          title: 'Not only for toppers',
          text: 'Any student in Classes 4 to 10 can join. We do not screen children out before they have had a chance to learn.',
        },
        {
          title: 'Small batches',
          text: "Batches are kept small so every child is seen and heard. Ask us for the current batch size for your child's level.",
        },
        {
          title: 'Scores stay private',
          text: 'Weekly paper results are shared with the family and never ranked publicly in front of the class.',
        },
        {
          title: 'Honest fit advice',
          text: 'If Brain Games, Mental Maths or plain subject tuition suits your child better right now, we will tell you.',
        },
      ],
      cols: 3,
      note: "Trainers and mentors Sessions are taken by Brolly Juniors educators. For current trainer details, qualifications and who will be teaching your child's batch, contact Brolly Juniors on 7036044555. We publish trainer information only where it can be verified, so you will not find invented profiles or claimed student results on this page.",
    },
    practical: {
      options: [
        'Olympiad Foundation is taught in person at the Nizampet centre. Schools can arrange delivery on their own campus through our school partnership programme.',
      ],
      timings: [
        'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
      fees: [
        'Fees depend on the class level and batch. We do not publish figures that may go out of date.',
      ],
      feeTitle: 'Fees',
    },
    trial: {
      title: 'Book a free demo class',
      paras: [
        'Every new family can attend one free trial class before deciding anything. No payment, no obligation.',
        'This suits any student in Classes 4 to 10. Your child does not need to already be brilliant at maths — that is what the training is for.',
      ],
    },
    local: {
      title: 'Olympiad Foundation classes near me in Hyderabad',
      paras: [
        'Areas we commonly serve:',
        'If you are searching for olympiad classes near you in the Nizampet, Bachupally or JNTU area, the Brolly Juniors centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads — beside Sri Bhramaramba Theatre, close to JNTU Metro Station, at metro pillar A689.',
        'Families travel to us from across the north-west corridor of Hyderabad. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
    },
    related: [
      {
        icon: '→',
        title: 'IIT Foundation',
        text: 'Classes 8–10. Depth-first maths and science for undecided students.',
        to: '/tuitions/iit-foundation',
      },
      {
        icon: '→',
        title: 'JEE Foundation',
        text: 'Classes 9–10. Exam-shaped, for the engineering route.',
        to: '/tuitions/jee-foundation',
      },
      {
        icon: '→',
        title: 'NEET Foundation',
        text: 'Classes 9–10. Biology-led, for the medical route.',
        to: '/tuitions/neet-foundation',
      },
      {
        icon: '→',
        title: 'Advanced Maths',
        text: 'Classes 7–10. Extra depth for students who want more.',
        to: '/tuitions/advanced-maths',
      },
      {
        icon: '→',
        title: 'General Science',
        text: 'Classes 4–7. Science foundations before specialising.',
        to: '/tuitions/general-science',
      },
      {
        icon: '→',
        title: 'Problem Solving',
        text: 'Strategy-led thinking practice for younger learners.',
        to: '/programs/problem-solving',
      },
      {
        icon: '→',
        title: 'Brain Games',
        text: 'Puzzles and reasoning play for younger children.',
        to: '/programs/brain-games',
      },
      {
        icon: '→',
        title: 'Chess',
        text: 'Planning, patience and thinking several moves ahead.',
        to: '/programs/chess',
      },
    ],
    relatedTitle: 'Related programmes',
    faqTitle: 'Olympiad classes in Hyderabad: your questions answered',
    faqs: [
      {
        q: 'What is Olympiad Foundation?',
        a: 'Olympiad Foundation trains the thinking that olympiad exams test — logical reasoning, non-routine maths, science application and English usage — rather than drilling past questions. At Brolly Juniors it runs for Classes 4 to 10, with a timed practice paper each week.',
      },
      {
        q: 'Which olympiad exams does it cover?',
        a: 'Sessions prepare children for IMO (maths), NSO (science), IEO (English) and NSTSE. Because olympiad papers are largely a reasoning test in a subject costume, the training transfers across all four rather than being built separately for each.',
      },
      {
        q: 'What age or class is it for?',
        a: 'Classes 4 to 10 — usually ages 9 to 15. This is the earliest-starting of the four foundation programmes at Brolly Juniors. Readiness matters more than age, so a free demo class is the best way to check the fit.',
      },
      {
        q: 'Is Brolly Juniors affiliated with any olympiad organisation?',
        a: 'No. Brolly Juniors is an independent learning centre and is not affiliated with, endorsed by or officially connected to the Science Olympiad Foundation, Unified Council, or any other olympiad-conducting body. Exam names are used only to describe what we prepare children for.',
      },
      {
        q: 'Does Brolly Juniors guarantee a medal or a rank?',
        a: 'No, and we would advise caution about anyone who does. We do not promise medals, ranks, selection or results, and we do not publish student achievement claims or competition statistics we cannot evidence.',
      },
      {
        q: 'Is it worth doing if my child will not win anything?',
        a: 'Yes. Most students will not place, and that is not the point. Reasoning practice at this age improves school performance across every subject, and a child who has sat a hard timed paper at eleven finds board exams considerably less frightening at fifteen.',
      },
      {
        q: 'Does my child need to be very good at maths already?',
        a: 'No. This suits any student in Classes 4 to 10, not only toppers. What matters more is a willingness to stay with a hard question rather than give up in the first thirty seconds — and that itself is something the sessions build.',
      },
      {
        q: 'Why not just practise past olympiad papers at home?',
        a: 'Memorising past questions works until the paper changes, which it does every year. Sessions teach strategies that apply to a question nobody has seen, and past papers are then used to test that training rather than to supply answers.',
      },
      {
        q: 'Will this clash with school work?',
        a: 'It should not, and it usually helps. Batches are scheduled around school hours, and the reasoning trained here tends to lift performance in school tests across subjects rather than competing with them.',
      },
      {
        q: 'How is this different from IIT, JEE or NEET Foundation?',
        a: 'Olympiad Foundation starts in Class 4 and is not tied to a career route. IIT Foundation begins in Class 8, and JEE and NEET Foundation begin in Class 9 for students leaning towards engineering or medicine. Older students often take one of those as their main track with olympiad work alongside.',
      },
      {
        q: 'My child is in Class 2. Can they join?',
        a: 'Not this programme — it begins in Class 4. For a younger child, Brain Games, Mental Maths, Chess or Problem Solving build the same reasoning habits at a stage that suits them better.',
      },
      {
        q: 'What are the fees?',
        a: "Fees vary by class level and batch, and we do not publish figures that could go out of date. Contact Brolly Juniors on 7036044555 for current fee details. Olympiad exam registration fees are set and collected separately by the conducting bodies, usually through your child's school.",
      },
      {
        q: 'What are the batch timings?',
        a: 'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm. Contact Brolly Juniors for current batch timings.',
      },
      {
        q: 'Can we attend a free demo, and how large are batches?',
        a: "Yes — every new family can book one free trial class, with no payment and no obligation. Batches are kept small so every child can be seen and supported; please contact Brolly Juniors for the current batch size for your child's level.",
      },
      {
        q: 'Where is the centre located?',
        a: 'Brolly Juniors is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre and close to JNTU Metro Station, at metro pillar A689. Open Monday to Saturday, 10:00 am to 7:00 pm.',
      },
    ],
    quickAnswersTitle: 'Quick answers',
    quickAnswers: [
      {
        q: 'What is Olympiad Foundation?',
        a: 'Training in reasoning, non-routine maths, science application and English for olympiad papers — strategy first, not question banks.',
      },
      {
        q: 'What class is it for?',
        a: 'Classes 4 to 10 at Brolly Juniors, usually ages 9 to 15. Not only for toppers.',
      },
      {
        q: 'Which exams are covered?',
        a: 'IMO, NSO, IEO and NSTSE. The reasoning training transfers across all four.',
      },
      {
        q: 'Is it worth it without a medal?',
        a: 'Yes. Most students will not place. The reasoning gains lift school performance regardless.',
      },
      {
        q: 'Is Brolly Juniors olympiad-affiliated?',
        a: 'No. It is an independent centre and is not connected to any olympiad-conducting body.',
      },
      {
        q: 'Where is it available?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad, near JNTU Metro. Monday to Saturday, 10:00 am – 7:00 pm.',
      },
    ],
  },

  /* ==================================================================
     NEET Foundation — /tuitions/neet-foundation
     ================================================================== */
  '/tuitions/neet-foundation': {
    h1: 'NEET Foundation classes in Hyderabad, led by the subject that decides the score.',
    lead: 'Biology given the weight it deserves, with physics and chemistry to matching depth — plus the diagram and terminology precision NEET rewards.',
    heroPills: ['Biology depth', 'Chemistry', 'Physics', 'Objective practice and review'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 9–10', 'Batches of eight'],
    hero: {
      title: 'What are NEET Foundation classes?',
      paras: [
        'Biology given the time it deserves, with chemistry and physics to matching depth. Careful diagrams, precise words, and science explained so it makes sense — not so it can be feared.',
        'NEET Foundation classes build strong science foundations — biology, chemistry and physics — for students who may later prepare for medical entrance study. At Brolly Juniors in Hyderabad this runs for Classes 9 and 10. Biology takes the largest share of time, diagrams and terminology are practised weekly, and the board syllabus is covered in full alongside.',
      ],
      note: 'Please read Brolly Juniors is not affiliated with, endorsed by or connected to the National Testing Agency, NEET, or any medical council or college. We do not promise ranks, qualification, marks, or admission to MBBS or any medical course. This is a school-level science foundation programme, not entrance coaching, and nothing on this page is medical advice.',
    },
    facts: [
      { strong: 'Classes 9–10', span: 'Levels covered' },
      { strong: 'Biology-led', span: 'PCB covered' },
      { strong: 'Weekly test', span: 'Objective pattern' },
      { strong: 'Max 10', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'How it works',
      title: 'What this programme is built on',
      items: [
        {
          title: 'Biology leads',
          text: 'Biology gets the heaviest share of the timetable, because it is the part of science that rewards steady, early precision.',
        },
        {
          title: 'No fear marketing',
          text: 'We do not tell children their future depends on Class 9. It does not. Curiosity lasts longer than panic and works better.',
        },
        {
          title: 'Boards covered in full',
          text: 'School marks are not traded away for exam practice. Both are covered across the two years.',
        },
        {
          title: 'Scores stay private',
          text: 'Weekly test results go to the family. Students are never ranked publicly in front of the class.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What is NEET Foundation?',
      lead: 'NEET Foundation is Class 9 and 10 science taught with more care and more depth, especially in biology.',
      paras: [
        'School science covers a topic to the level the board paper needs. NEET Foundation takes the same topic and asks for more: the correct word rather than a nearby one, a diagram drawn from memory rather than copied, and the reason behind a process rather than its name alone.',
        'Easy example: most students can say the heart pumps blood. Fewer can draw its four chambers, label them correctly, and explain why the left side has a thicker wall than the right. That gap — between knowing of something and knowing it properly — is what this programme closes.',
        'At Brolly Juniors this runs across two years, Class 9 and Class 10, with the board syllabus covered in full throughout.',
      ],
      panels: [
        {
          title: 'In one line',
          bullets: [
            'Biology weighted heaviest in the timetable',
            'Chemistry and physics to matching depth',
            'Diagrams drawn from memory every week',
            'Precise terminology, not near-enough words',
            'Two years: Class 9 → Class 10',
          ],
        },
      ],
    },
    whyLearn: {
      eyebrow: 'The reason',
      title: 'Why build a NEET foundation?',
      items: [
        {
          title: 'Precision compounds',
          text: 'Learning one system properly makes the next one easier, because the words and the way diagrams work carry over. Two years of this adds up quietly.',
        },
        {
          title: 'Memory needs repetition',
          text: 'Biology asks you to hold a great deal in your head. Spaced, regular practice from Class 9 does that far better than a rush later.',
        },
        {
          title: 'It helps regardless',
          text: 'Even if your child later chooses engineering, research, agriculture or something unrelated, careful observation and accurate language are useful everywhere.',
        },
      ],
      cols: 3,
      note: 'Because biology rewards accumulated precision rather than problem-solving speed. Diagram work and terminology started in Class 9 build up in a way that late cramming simply cannot replicate. On pressure A Class 9 student does not need to have chosen a career. This programme is a good science education first and a preparation route second. If your child changes direction in Class 11, nothing learned here is wasted.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'What your child actually gains',
      items: [
        {
          title: 'Academic gains',
          list: [
            'Stronger command of Class 9 and 10 biology, chemistry and physics',
            'Board science preparation covered in full',
            'Accurate diagrams drawn from memory',
            'Correct scientific terminology as a habit',
            'Comfort with objective-format questions',
          ],
        },
        {
          title: 'Thinking gains',
          list: [
            'Observes carefully before concluding',
            'Explains a process rather than naming it',
            'Connects biology to chemistry and physics',
            'Knows why an answer was wrong, not just that it was',
            'Asks better questions about the living world',
          ],
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Curriculum',
      title: 'What will kids learn?',
      lead: 'Four strands run across the two years, with biology taking the largest share of the timetable.',
      items: ['Biology depth', 'Chemistry', 'Physics', 'Objective practice and review'],
      note: "What the syllabus covers Biology basics · chemistry basics · physics basics · scientific reasoning · concept understanding · observation · problem solving · application-based learning. This is a suggested learning structure reflecting how sessions are usually organised. It is not an official published syllabus. For the exact plan being taught in your child's batch, contact Brolly Juniors on 7036044555.",
    },
    extras: [
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Biology depth',
            text: 'Life processes, diagrams and terminology taken well past board depth. Diagrams are drawn from memory and labelled precisely, because that is the skill that compounds.',
          },
          {
            title: 'Chemistry',
            text: 'Bonding, the periodic table as a readable pattern, reaction prediction and calculations taken to the depth the later syllabus assumes.',
          },
          {
            title: 'Physics',
            text: 'Core mechanics, optics and electricity with numerical fluency — including rebuilding a formula from the idea rather than recalling it blindly.',
          },
          {
            title: 'Objective practice and review',
            text: 'A weekly timed test, an error log sorted by cause, and an individual review of repeated mistakes every fortnight.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Year by year',
        title: 'Age-wise NEET Foundation learning',
        lead: 'Readiness matters more than age. Two students in the same class can be at very different stages, and that is normal.',
        id: 'agewise',
        kind: 'table',
        head: ['Class', 'Usual age', 'Main focus', 'What good progress looks like'],
        rows: [
          [
            'Class 9',
            'About 14',
            'Biology depth begins. Diagram accuracy, terminology, and the habit of weekly practice.',
            'Draws and labels a system from memory, using the correct words.',
          ],
          [
            'Class 10',
            'About 15',
            'Harder material, board preparation, objective technique and error elimination.',
            'Answers NEET-style questions accurately and removes a repeated error type.',
          ],
        ],
        note: 'Younger children NEET Foundation at Brolly Juniors begins in Class 9. For a younger child, General Science (Classes 4–7), IIT Foundation (Classes 8–10) or Olympiad Foundation (Classes 4–10) is the better fit. We do not recommend starting entrance-shaped preparation in primary or middle school.',
        band: true,
      },
      {
        eyebrow: 'The lead subject',
        title: 'Biology foundation',
        lead: 'Biology gets the largest share of time because it is the part of science most open to careful early preparation.',
        id: 'biology',
        kind: 'split',
        paras: [
          'Biology is less about speed and more about accumulated accuracy. A student who has drawn the same diagram twenty times over two years does not need to cram it later — they simply know it.',
          "Easy example: ask a student to draw a leaf's cross-section. One copies it from the book. Another closes the book and draws it, then checks. Only the second student has actually learned anything, and it takes about the same amount of time.",
          'Work covers life processes, cell structure, nutrition, respiration, transport, control and coordination, reproduction in plants and animals, heredity basics and the environment.',
        ],
        panel: {
          title: 'Habits we build',
          bullets: [
            'Draw from memory first, check afterwards',
            'Label completely, not partially',
            'Use the precise word, not a nearby one',
            'Explain the process, not just its name',
            'Revisit older diagrams regularly',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Inside biology',
        title: 'Human body basics, plants and animals',
        id: 'body',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Human body basics',
            text: 'The main systems — digestive, respiratory, circulatory, nervous and excretory — taught as connected machinery rather than five separate chapters.',
          },
          {
            title: 'Plants and animals',
            text: 'How plants make food, move water, and reproduce; how animals are classified, how they adapt, and how living things depend on one another.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'The supporting subjects',
        title: 'Chemistry and physics foundations',
        id: 'chemphys',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Chemistry foundation',
            text: 'Matter, atomic structure, bonding, the periodic table as a pattern to read, reaction prediction, acids and bases, and calculations introduced carefully.',
          },
          {
            title: 'Physics foundation',
            text: 'Motion, force, work and energy, light and optics, sound, electricity and magnetism — with the numerical method and units treated as part of the subject.',
          },
        ],
        note: 'Safety Sessions use demonstrations, models, diagrams and worked examples. Students are not asked to handle hazardous chemicals, mains electricity or open flames, and no experiment is set as unsupervised homework. Anything involving heat, electricity or chemicals is a supervised demonstration only.',
        band: false,
      },
      {
        eyebrow: 'How they link',
        title: 'The biology, chemistry and physics connection',
        lead: 'These three are taught together because living things do not obey subject boundaries.',
        id: 'connection',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Chemistry explains biology',
            text: 'Digestion, respiration and photosynthesis are chemical reactions happening inside a body. Understanding bonds makes them far easier to hold on to.',
          },
          {
            title: 'Physics explains bodies',
            text: 'Blood flowing through vessels is fluid pressure. The eye focusing is a lens. Hearing is waves. The physics is not a separate topic — it is the mechanism.',
          },
          {
            title: 'Biology needs both',
            text: 'A student who avoids chemistry will hit a wall in life processes. The three subjects are taught together so that gap never opens up quietly.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Core skills',
        title: 'Scientific observation, problem solving and concepts',
        id: 'observation',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Scientific observation',
            text: 'Observation means noticing what is actually there, not what you expected.',
          },
          {
            title: 'Problem solving',
            text: 'Problem solving is what you do when you do not know the next step.',
          },
          {
            title: 'Concept-based learning',
            text: 'A concept question checks whether the idea was understood, not whether a definition was memorised.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'Comparison',
        title: 'NEET Foundation vs school learning',
        lead: 'This runs alongside school science, not instead of it.',
        id: 'vsschool',
        kind: 'table',
        head: ['Aspect', 'School science', 'NEET Foundation'],
        rows: [
          ['Diagrams', 'Usually copied from the book', 'Drawn from memory, then checked'],
          ['Words', 'A close-enough word often passes', 'The precise term is expected'],
          [
            'Depth',
            'To the level the board paper needs',
            'Past board depth, especially in biology',
          ],
          ['Format', 'Mostly written answers', 'Objective format added, with a time limit'],
          ['Wrong answers', 'Marked and moved on from', 'Logged by cause and revisited'],
        ],
        band: true,
      },
      {
        eyebrow: 'Important difference',
        title: 'NEET Foundation vs IIT Foundation vs JEE Foundation',
        lead: 'These are separate programmes, and most Class 9 students have not genuinely decided between them yet — which is completely fine. If your child is undecided, IIT Foundation covers physics, chemistry and maths at depth and keeps both routes open for another year.',
        id: 'vsother',
        kind: 'table',
        head: ['NEET Foundation', 'JEE Foundation', 'IIT Foundation'],
        rows: [
          ['Classes', '9–10', '9–10', '8–10'],
          [
            'Subjects',
            'Biology, chemistry, physics',
            'Maths, physics, chemistry',
            'Maths, physics, chemistry',
          ],
          [
            'Leading subject',
            'Biology, by a clear margin',
            'Balanced, exam-shaped',
            'Balanced, depth-first',
          ],
          [
            'Signature skill',
            'Diagram accuracy and precise terminology',
            'Objective technique and the error log',
            'Concept depth and reasoning',
          ],
          [
            'Best for',
            'Students leaning towards medicine',
            'Students set on the engineering route',
            'Students who have not decided',
          ],
        ],
        note: 'The key difference is maths. NEET Foundation replaces the maths emphasis with biology depth. If your child enjoys maths and is unsure about medicine, IIT Foundation is the safer starting point — moving across later is straightforward, and no time is lost.',
        band: false,
      },
      {
        eyebrow: 'Try it yourself',
        title: 'Who am I?',
        lead: 'Read the clues, then pick the answer. This is the kind of thinking we use in class — working from evidence rather than recall alone.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'NEET Foundation at Brolly Juniors is for which classes?',
            opts: [
              'Classes 4 to 7',
              'Classes 9 and 10',
              'Classes 11 and 12',
              'Any class from 6 upwards',
            ],
            a: 'Classes 9 and 10',
            why: 'NEET Foundation runs across Classes 9 and 10 — two years, with the board syllabus covered in full alongside.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Why does biology get the largest share of the timetable?',
            opts: [
              'It is the easiest subject',
              'It carries the largest share of the paper and rewards early, accumulated precision',
              'It needs no practice',
              'Because physics is not taught',
            ],
            a: 'It carries the largest share of the paper and rewards early, accumulated precision',
            why: 'Biology rewards steady accuracy built up over time rather than problem-solving speed, so starting early genuinely compounds.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Your child is in Class 9 and undecided between medicine and engineering. What would we suggest?',
            opts: [
              'Join NEET Foundation anyway',
              'Join both programmes',
              'IIT Foundation, which keeps both routes open',
              'Wait until Class 11',
            ],
            a: 'IIT Foundation, which keeps both routes open',
            why: 'Most Class 9 students have not truly decided. IIT Foundation covers physics, chemistry and maths at depth and keeps both routes open for another year.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these does Brolly Juniors promise?',
            opts: [
              'A guaranteed NEET rank',
              'A guaranteed MBBS seat',
              'Clear teaching, small batches and honest feedback',
              'Guaranteed full marks in boards',
            ],
            a: 'Clear teaching, small batches and honest feedback',
            why: 'No centre can honestly guarantee ranks, qualification or medical admission. What is promised is clear teaching, a sensible pace and truthful feedback.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Starting out',
        title: 'NEET Foundation for beginners',
        id: 'beginners',
        kind: 'split',
        paras: [
          'A student does not need to have decided on medicine, and they certainly do not need to be a topper. They need to be in Class 9 or 10, reasonably steady with school science, and willing to redraw a diagram they got wrong.',
          'New students usually find two things unfamiliar: being asked for the exact word rather than an approximate one, and drawing before checking rather than copying.',
          'If your child is currently struggling with school science itself, start with biology, chemistry or physics tuition. Foundation work sits on top of a stable base, never instead of one — and we will say so plainly after the demo.',
        ],
        panel: {
          title: 'This is likely a fit if your child',
          bullets: [
            'Is in Class 9 or Class 10',
            'Is broadly keeping up with school science',
            'Enjoys biology, or is curious about living things',
            'Is willing to practise something more than once',
            'Can look at a mistake without being crushed by it',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Quick quiz',
        title: 'Test your understanding',
        lead: 'Four short questions on the ideas covered on this page.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 4 · Score 0'],
        band: true,
      },
      {
        eyebrow: 'For parents',
        title: 'Parent support and parent guide',
        id: 'parent-guide',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'How we keep you informed',
            list: [
              'Weekly test scores shared privately with the family',
              'Progress discussed in terms of what improved, not rank',
              'Honest feedback if the programme is not working',
              'You can ask to discuss the approach at any time',
            ],
          },
          {
            title: 'What helps at home',
            list: [
              'Ask your child to explain one thing they learned, out loud',
              'Let them redraw a diagram rather than correcting it for them',
              'Treat a logged mistake as progress, because it is',
              'Protect sleep — memory consolidates during it',
              'Avoid talking about medical seats to a fourteen-year-old',
            ],
          },
        ],
        note: "Our commitment Brolly Juniors does not promise ranks, qualification, marks, or admission to MBBS or any medical course. No centre can honestly guarantee those, and you should be cautious of any that does. What we commit to is clear teaching, a sensible pace, small batches and truthful feedback about your child's progress.",
        band: false,
      },
      {
        title: "Your child's free demo is one message away.",
        kind: 'split',
        paras: [
          "Tell us your child's class and what they enjoy. We will suggest the closest fit — with no pressure and no upfront payment.",
        ],
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample class experience',
      items: [
        {
          title: 'Diagram recall',
          text: 'One diagram from a previous week, drawn from memory in five minutes. It shows instantly what has stuck and what has faded.',
        },
        {
          title: 'Concept taught properly',
          text: 'The process is explained with its reasoning, not just its name and stages. Students are asked to say it back in their own words.',
        },
        {
          title: 'Guided questions',
          text: 'Questions worked together, with the educator asking "how do you know?" rather than supplying the next line.',
        },
        {
          title: 'Objective practice',
          text: 'The same content in multiple-choice form, where precise wording separates the right option from a close-looking wrong one.',
        },
        {
          title: 'Error review',
          text: 'Mistakes sorted into concept, careless or time, and added to the log. This is where the learning is banked.',
        },
      ],
    },
    activities: {
      eyebrow: 'Learning through stories and activities',
      title: 'Science activities and mini projects',
      items: [
        {
          title: 'Blind diagram drills',
          text: 'Draw the system from memory, then compare against the correct version and mark your own gaps.',
        },
        {
          title: 'Name the process',
          text: 'An everyday event is described and students identify which process explains it — and which subject it belongs to.',
        },
        {
          title: 'Observation walks',
          text: 'Look closely at plants around the centre and record what is actually visible, separating observation from assumption.',
        },
        {
          title: 'Story of a discovery',
          text: 'How an idea was actually worked out, including the wrong turns. Science makes more sense when it has a plot.',
        },
        {
          title: 'Explain it back',
          text: 'Teach one process to the class in ninety seconds. Gaps in understanding surface immediately.',
        },
        {
          title: 'Error log clinic',
          text: 'Students revisit logged mistakes and sort them by cause — concept gap, careless slip, or ran out of time.',
        },
        {
          title: 'Real-life science examples we use',
          list: [
            'Why cut fruit turns brown when left out',
            'Why you feel warm and breathless after running',
            'Why a plant leans towards a window',
            'Why a straw looks bent in a glass of water',
            'Why soap lifts oil off a plate',
          ],
        },
        {
          title: 'Mini science projects',
          text: 'Projects use plants, observation, models and measurement only. No dissection, no handling of animals, no collecting blood or other biological samples, and no growing of bacteria or mould. Nothing requires chemicals or heat at home.',
          list: [
            "Track a plant's growth towards a light source over two weeks",
            'Record and graph your resting and post-activity breathing rate',
            'Build a labelled model of the heart or the eye',
            'Keep an observation diary of one plant across a month',
          ],
        },
      ],
      cols: 4,
    },
    whyUs: {
      eyebrow: 'About the centre',
      title: 'Why choose Brolly Juniors?',
      items: [
        {
          title: 'No fear-based selling',
          text: 'We do not tell fourteen-year-olds that their future is already at stake. It is not true, and frightened students learn worse than curious ones.',
        },
        {
          title: 'Biology gets real time',
          text: 'The timetable reflects that biology carries the largest share of the paper — rather than splitting the three subjects equally out of habit.',
        },
        {
          title: 'Scores stay private',
          text: 'Weekly test results are shared with the family and never ranked publicly in front of the class.',
        },
        {
          title: 'Small batches',
          text: "Batches are kept small so every student is seen and heard. Ask us for the current batch size for your child's class.",
        },
        {
          title: 'Boards are not sacrificed',
          text: 'The school syllabus is covered in full throughout both years, not squeezed out by exam practice.',
        },
        {
          title: 'Honest fit advice',
          text: 'If IIT Foundation or plain science tuition suits your child better, we will tell you — even though it means a smaller enrolment for us.',
        },
      ],
      cols: 3,
      note: "Trainers and mentors Sessions are taken by Brolly Juniors educators. For current trainer details, qualifications and who will be teaching your child's batch, contact Brolly Juniors on 7036044555. We publish trainer information only where it can be verified, so you will not find invented profiles or claimed past results on this page.",
    },
    practical: {
      options: [
        'NEET Foundation is taught in person at the Nizampet centre. Schools can arrange delivery on their own campus through our school partnership programme.',
      ],
      timings: [
        'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
      fees: [
        'Fees depend on the class level and batch. We do not publish figures that may go out of date.',
      ],
      feeTitle: 'Fees',
    },
    trial: {
      title: 'Book a free demo class',
      paras: [
        'Every new family can attend one free trial class before deciding anything. No payment, no obligation.',
        'Most Class 9 students have not truly chosen a route yet, and that is completely fine. Come and see one class first.',
      ],
    },
    local: {
      title: 'NEET Foundation classes near me in Hyderabad',
      paras: [
        'Areas we commonly serve:',
        'If you are searching for NEET Foundation classes near you in the Nizampet, Bachupally or JNTU area, the Brolly Juniors centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads — beside Sri Bhramaramba Theatre, close to JNTU Metro Station, at metro pillar A689.',
        'Families travel to us from across the north-west corridor of Hyderabad. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
    },
    related: [
      {
        icon: '→',
        title: 'IIT Foundation',
        text: 'Classes 8–10. Depth-first across maths and science. Best if undecided.',
        to: '/tuitions/iit-foundation',
      },
      {
        icon: '→',
        title: 'JEE Foundation',
        text: 'Classes 9–10. Exam-shaped, for the engineering route.',
        to: '/tuitions/jee-foundation',
      },
      {
        icon: '→',
        title: 'Olympiad Foundation',
        text: 'Classes 4–10. Reasoning for IMO, NSO, IEO and NSTSE.',
        to: '/tuitions/olympiad-foundation',
      },
      {
        icon: '→',
        title: 'Biology Tuition',
        text: 'Classes 8–10. School biology, taught with diagrams that stick.',
        to: '/tuitions/biology',
      },
      {
        icon: '→',
        title: 'Chemistry Tuition',
        text: 'Classes 8–10, with safety-first demonstrations.',
        to: '/tuitions/chemistry',
      },
      {
        icon: '→',
        title: 'Physics Tuition',
        text: 'Classes 8–10, with the reasoning kept intact.',
        to: '/tuitions/physics',
      },
      {
        icon: '→',
        title: 'General Science',
        text: 'Classes 4–7. Science foundations before specialising.',
        to: '/tuitions/general-science',
      },
    ],
    relatedTitle: 'Related programmes',
    faqTitle: 'NEET Foundation classes in Hyderabad: your questions answered',
    faqs: [
      {
        q: 'What is NEET Foundation?',
        a: 'NEET Foundation is Class 9 and 10 science taught with more depth and precision, especially in biology. It builds concept clarity, diagram accuracy and correct terminology for students who may later prepare for medical entrance study. At Brolly Juniors it runs over two years with the board syllabus covered in full alongside.',
      },
      {
        q: 'What age or class is NEET Foundation for?',
        a: 'Brolly Juniors runs NEET Foundation for Classes 9 and 10 — usually ages 14 to 16. Readiness matters more than age, so a free demo class is the best way to check the fit.',
      },
      {
        q: 'Why does biology get the most time?',
        a: 'Biology carries the largest share of the NEET paper, and it is the part of science most open to early preparation. It rewards accumulated precision rather than problem-solving speed, so diagram work and terminology started in Class 9 build up in a way late cramming cannot match.',
      },
      {
        q: 'Is NEET Foundation the same as IIT or JEE Foundation?',
        a: 'No. The main difference is maths. NEET Foundation replaces the maths emphasis with biology depth. JEE Foundation is exam-shaped for the engineering route, and IIT Foundation is broader and depth-first across Classes 8 to 10.',
      },
      {
        q: 'My child has not decided on medicine yet. Should we still join?',
        a: 'Most Class 9 students have not genuinely decided, and that is completely fine. If your child is undecided we would usually suggest IIT Foundation instead, because it covers physics, chemistry and maths at depth and keeps both routes open for another year. Moving across later is straightforward.',
      },
      {
        q: 'Does Brolly Juniors guarantee a NEET rank or a medical seat?',
        a: 'No, and we would advise caution about anyone who does. We do not promise ranks, qualification, marks, or admission to MBBS or any medical course. Brolly Juniors is also not affiliated with the National Testing Agency, NEET, or any medical council or college.',
      },
      {
        q: 'What subjects are included?',
        a: 'Biology, chemistry and physics. Biology takes the largest share of time, with chemistry and physics taught to matching depth. Scientific reasoning, observation and problem solving run through all three.',
      },
      {
        q: 'Do students do dissections or handle biological samples?',
        a: 'No. Sessions use observation, models, diagrams and photographs only. There is no dissection, no handling of animals, no collecting of blood or other biological samples, and no growing of bacteria or mould. Anything involving heat, chemicals or electricity is a supervised demonstration only.',
      },
      {
        q: "Will this clash with my child's board exam preparation?",
        a: 'It should not. The board syllabus is covered in full throughout both years and the extra depth sits inside the same topics, so foundation work generally supports school marks. Batches are scheduled around school hours.',
      },
      {
        q: 'My child is in Class 6. Can they start now?',
        a: 'Not this programme — it begins in Class 9. For a younger child, General Science (Classes 4–7), IIT Foundation (Classes 8–10) or Olympiad Foundation is a better use of the time. We do not recommend starting entrance-shaped preparation in primary or middle school.',
      },
      {
        q: 'What are the fees for NEET Foundation classes?',
        a: 'Fees vary by class level and batch, and we do not publish figures that could go out of date. Contact Brolly Juniors on 7036044555 for current fee details.',
      },
      {
        q: 'What are the batch timings?',
        a: 'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm. Contact Brolly Juniors for current batch timings.',
      },
      {
        q: 'Can we attend a free demo before enrolling?',
        a: 'Yes. Every new family can book one free trial class to see the teaching approach, meet the educator and confirm the programme is a good fit. There is no payment and no obligation.',
      },
      {
        q: 'How large are the batches, and who teaches?',
        a: "Batches are kept small so every student can be seen and supported. Sessions are taken by Brolly Juniors educators. Please contact Brolly Juniors for the current batch size and trainer details for your child's class level. We do not publish profiles or past results that cannot be verified.",
      },
      {
        q: 'Where is the centre located?',
        a: 'Brolly Juniors is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre and close to JNTU Metro Station, at metro pillar A689. Open Monday to Saturday, 10:00 am to 7:00 pm.',
      },
    ],
    quickAnswersTitle: 'Quick answers',
    quickAnswers: [
      {
        q: 'What is NEET Foundation?',
        a: 'Class 9 and 10 science taught with more depth and precision, led by biology, for students who may later prepare for medical entrance study.',
      },
      {
        q: 'What class is it for?',
        a: 'Classes 9 and 10 at Brolly Juniors, usually ages 14 to 16. Readiness matters more than age.',
      },
      {
        q: 'Why is biology first?',
        a: 'It carries the largest share of the paper and rewards steady early precision rather than speed.',
      },
      {
        q: 'Is it the same as JEE Foundation?',
        a: 'No. The difference is maths. NEET Foundation replaces the maths emphasis with biology depth.',
      },
      {
        q: 'What if my child is undecided?',
        a: 'Choose IIT Foundation. It keeps both routes open, and moving across later is straightforward.',
      },
      {
        q: 'Where is it available?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad, near JNTU Metro. Monday to Saturday, 10:00 am – 7:00 pm.',
      },
    ],
  },

  /* ==================================================================
     JEE Foundation — /tuitions/jee-foundation
     ================================================================== */
  '/tuitions/jee-foundation': {
    h1: 'JEE Foundation classes in Hyderabad for students who have already decided.',
    lead: 'Exam-pattern physics, chemistry and maths, objective technique and timed practice — with the board syllabus fully covered alongside, not sacrificed.',
    heroPills: ['Exam-depth concepts', 'Problem sets', 'Objective technique', 'Weekly testing and review'],
    ticks: ['Nizampet X Roads, Hyderabad', 'Classes 9–10', 'Batches of eight'],
    hero: {
      title: 'What are JEE Foundation classes?',
      paras: [
        'Maths, physics and chemistry taught to exam depth, with a weekly test and a proper review of what went wrong. The school syllabus is covered in full alongside — not sacrificed.',
        'JEE Foundation classes prepare students for future engineering-entrance study by teaching maths, physics and chemistry to exam depth, with objective-pattern practice and regular testing. At Brolly Juniors in Hyderabad, JEE Foundation runs for Classes 9 and 10 — two years — while the board syllabus is covered in full so school performance does not slip.',
      ],
      note: 'Please read Brolly Juniors is not affiliated with, endorsed by or connected to the National Testing Agency, JEE, or any Indian Institute of Technology. We do not promise ranks, marks, selection or admission of any kind. This is a school-level foundation programme, not entrance coaching.',
    },
    facts: [
      { strong: 'Classes 9–10', span: 'Levels covered' },
      { strong: 'PCM', span: 'Three subjects' },
      { strong: 'Weekly test', span: 'Objective pattern' },
      { strong: 'Max 10', span: 'Students per batch' },
    ],
    trust: {
      eyebrow: 'How it works',
      title: 'What this programme is built on',
      items: [
        {
          title: 'The error log',
          text: 'Every student logs what they got wrong and why. Reviewing that log is worth more than sitting another test.',
        },
        {
          title: 'Two years, not six',
          text: 'Class 9 and Class 10. We do not start this in Class 6, because that reliably produces tired students, not prepared ones.',
        },
        {
          title: 'Boards covered in full',
          text: 'School marks are not traded away for exam practice. Both are covered across the two years.',
        },
        {
          title: 'Scores stay private',
          text: 'Test results go to the family. Students are never ranked publicly in front of the class.',
        },
      ],
      cols: 3,
    },
    whatIs: {
      eyebrow: 'The basics',
      title: 'What is JEE Foundation?',
      lead: 'JEE Foundation is Class 9 and 10 maths, physics and chemistry taught to the depth that competitive papers assume — plus the technique those papers reward.',
      paras: [
        'School teaches a topic to the level the board paper needs. A competitive paper asks the same topic in a different shape: multiple choice, a time limit, and a wrong answer that costs you marks.',
        'Easy example: school asks you to solve an equation and show your working. A competitive paper gives you four options and ninety seconds. Sometimes the fastest route is not solving it at all — it is testing which option fits. That is a separate skill, and it has to be taught.',
        'At Brolly Juniors this runs across two years, Class 9 and Class 10. The aim is a student who arrives in Class 11 able to learn quickly — not one who has already seen Class 11 material badly.',
      ],
      panels: [
        {
          title: 'In one line',
          bullets: [
            'Maths, physics and chemistry to exam depth',
            'Objective technique taught properly',
            'A timed test every week',
            'Board syllabus covered in full throughout',
            'Two years: Class 9 → Class 10',
          ],
        },
      ],
    },
    whyLearn: {
      eyebrow: 'The reason',
      title: 'Why should kids build a JEE foundation?',
      lead: 'Not to start the race early. To make sure the base is solid before the workload rises in Class 11.',
      items: [
        {
          title: 'Class 11 assumes a lot',
          text: 'Class 11 physics and maths quietly assume you understood Class 9 and 10 properly. Gaps hidden by memorising show up immediately.',
        },
        {
          title: 'Technique is a skill',
          text: 'Handling multiple choice, eliminating options, deciding when to skip — none of this is taught in school, and none of it can be learned overnight.',
        },
        {
          title: 'It helps regardless',
          text: 'Even if your child later chooses medicine, commerce or design, the reasoning and accuracy built here transfer to any exam.',
        },
      ],
      cols: 3,
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'What your child actually gains',
      items: [
        {
          title: 'Academic gains',
          list: [
            'Deeper command of Class 9 and 10 maths, physics and chemistry',
            'Better board exam preparation, covered in full',
            'Comfort with multi-concept questions',
            'Accuracy held under timed conditions',
            'A calmer start to Class 11',
          ],
        },
        {
          title: 'Thinking and habit gains',
          list: [
            'Knows why they got something wrong, not just that they did',
            'Stops repeating the same error type',
            'Judges when to attempt and when to move on',
            'Works through a hard set without giving up',
            'Handles being tested without panic',
          ],
        },
      ],
      cols: 4,
    },
    topics: {
      eyebrow: 'Curriculum',
      title: 'What will kids learn?',
      lead: 'Four strands run across the two years. Each one supports the others.',
      items: [
        'Exam-depth concepts',
        'Problem sets',
        'Objective technique',
        'Weekly testing and review',
      ],
      note: "What the syllabus covers Mathematics · physics · chemistry · logical reasoning · problem solving · concept clarity · application-based questions · numerical thinking and estimation. This is a suggested learning structure reflecting how sessions are usually organised. It is not an official published syllabus. For the exact plan being taught in your child's batch, contact Brolly Juniors on 7036044555.",
    },
    extras: [
      {
        eyebrow: 'Important difference',
        title: 'JEE Foundation vs IIT Foundation',
        lead: 'These are two separate programmes and choosing between them matters. IIT Foundation is the broader, depth-first option running across Classes 8 to 10. JEE Foundation is more exam-shaped, runs across Classes 9 and 10, and suits students who have already settled on the engineering route.',
        id: 'vsiit',
        kind: 'table',
        head: ['JEE Foundation', 'IIT Foundation'],
        rows: [
          ['Classes', '9 and 10 (two years)', '8, 9 and 10 (three years)'],
          [
            'Shape of work',
            'Exam-shaped. Objective pattern, timed practice, weekly test.',
            'Depth-first. Concept clarity and reasoning.',
          ],
          [
            'Signature method',
            'The per-student error log, reviewed fortnightly.',
            'Beyond-syllabus depth in board topics.',
          ],
          [
            'Best for',
            'Students already set on the engineering-entrance route.',
            'Students who want stronger foundations but have not fixed on one exam.',
          ],
          [
            'Still unsure?',
            'Choose IIT Foundation. It keeps more doors open, and moving across later is straightforward.',
          ],
        ],
        band: false,
      },
      {
        eyebrow: 'Setting expectations',
        title: 'JEE Foundation vs regular JEE coaching',
        lead: 'This is the section most centres leave out. It matters, so please read it before enrolling anywhere.',
        id: 'vscoaching',
        kind: 'table',
        head: ['JEE Foundation (this programme)', 'Full JEE coaching'],
        rows: [
          ['When', 'Classes 9 and 10', 'Classes 11 and 12, usually'],
          [
            'Syllabus',
            'Class 9 and 10 syllabus, taken deeper',
            'Class 11 and 12 syllabus at entrance depth',
          ],
          [
            'Purpose',
            'Build the base and the technique',
            'Prepare directly for the entrance exam',
          ],
          ['Hours', 'Reasonable, alongside school', 'Typically much heavier'],
          [
            'What it is not',
            'Foundation is not entrance coaching, and it does not replace it. It is preparation for being able to do that work well later.',
          ],
        ],
        note: 'An honest word on timing Two years of foundation is enough. Starting in Class 6 does not help and frequently harms — students arrive at Class 11 already tired of the material. If your child is younger, IIT Foundation, Olympiad Foundation or simply strong maths and science tuition is the better use of the time.',
        band: true,
      },
      {
        id: 'topic-detail',
        title: 'What each of those actually covers',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Exam-depth concepts',
            text: 'Every board topic taken to the depth the competitive pattern assumes. Standard results are derived rather than handed over, and common exam traps are pointed out.',
          },
          {
            title: 'Problem sets',
            text: 'Graded problem sets each week, from routine through to genuinely difficult. Full solutions are discussed in class rather than distributed as a sheet.',
          },
          {
            title: 'Objective technique',
            text: 'Multiple-choice strategy: elimination, approximation, deciding when to skip a question, and managing negative marking sensibly.',
          },
          {
            title: 'Weekly testing and review',
            text: 'A timed objective test every week, followed by the part that actually matters — an individual review of what went wrong and why.',
          },
        ],
        band: false,
      },
      {
        eyebrow: 'The method',
        title: 'The error log is the whole method',
        id: 'errorlog',
        kind: 'split',
        paras: [
          'Most students who plateau are not lazy. They are repeating the same mistake without noticing it is the same mistake.',
          'So every student keeps a log of what they got wrong and, more importantly, why. Every error goes into one of three buckets:',
          'These three need completely different fixes. A concept gap needs re-teaching. A careless slip needs a checking habit. A time problem needs question selection. Marking all three simply "wrong" tells a student nothing.',
        ],
        panel: {
          title: 'How it runs',
          bullets: [
            'Log maintained by the student, not the teacher',
            'Reviewed fortnightly with the educator',
            'Repeated error types get individual attention',
            'Progress measured by errors eliminated, not marks alone',
          ],
        },
        band: true,
      },
      {
        eyebrow: 'Year by year',
        title: 'Age-wise JEE Foundation learning',
        lead: 'Readiness matters more than age. Two students in the same class can be at very different stages, and that is normal.',
        id: 'agewise',
        kind: 'table',
        head: ['Class', 'Usual age', 'Main focus', 'What good progress looks like'],
        rows: [
          [
            'Class 9',
            'About 14',
            'Exam-depth concepts. Objective technique introduced. Weekly tests begin.',
            'Completes a graded problem set with correct method, not guesswork.',
          ],
          [
            'Class 10',
            'About 15',
            'Harder problem sets, board preparation, timed accuracy and error elimination.',
            'Tracks and removes a repeated error type; enters Class 11 able to learn fast.',
          ],
        ],
        note: 'Younger children JEE Foundation at Brolly Juniors begins in Class 9. For younger students the better fits are IIT Foundation (Classes 8–10), Olympiad Foundation (Classes 4–10), Mental Maths or Problem Solving. We do not recommend beginning entrance-shaped preparation in primary or middle school.',
        band: false,
      },
      {
        eyebrow: 'The three subjects',
        title: 'Mathematics, physics and chemistry foundations',
        id: 'subjects',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Mathematics foundation',
            text: 'Algebra, geometry, trigonometry, coordinate basics, sequences and numerical thinking — taught so the method can be chosen, not recalled.',
          },
          {
            title: 'Physics foundation',
            text: 'Motion, force, work and energy, light, sound, electricity and magnetism — always with the numbers attached, because physics without calculation is only half the subject.',
          },
          {
            title: 'Chemistry foundation',
            text: 'Matter, atomic structure, the periodic table as a readable pattern, chemical reactions, acids and bases, and the mole concept introduced carefully.',
          },
        ],
        note: 'Safety Sessions use demonstrations, models and worked examples. Students are not asked to handle hazardous chemicals, mains electricity or open flames, and no experiment is set as unsupervised homework. Anything involving heat, electricity or chemicals is a supervised demonstration only.',
        band: true,
      },
      {
        eyebrow: 'How they link',
        title: 'The maths, physics and chemistry connection',
        lead: 'These three are taught together because in a competitive paper they behave like one subject wearing three costumes.',
        id: 'connection',
        kind: 'cards',
        cols: 3,
        items: [
          {
            title: 'Maths powers physics',
            text: 'A physics problem is usually a maths problem with a story attached. Weak algebra shows up as "weak physics" long before anyone notices the real cause.',
          },
          {
            title: 'Physics explains chemistry',
            text: 'Why electrons sit where they do, why bonds form, why reactions release heat — the reasons are physical, not something to memorise separately.',
          },
          {
            title: 'Chemistry needs numbers',
            text: 'The mole concept, concentration and stoichiometry are arithmetic in a lab coat. Students comfortable with ratio handle them easily.',
          },
        ],
        note: 'This is also why we do not let a student quietly avoid one subject. A gap in maths will surface as a physics problem two months later, and the error log is what makes that visible.',
        band: false,
      },
      {
        eyebrow: 'Core skills',
        title: 'Logical thinking, problem solving and how questions are built',
        id: 'skills',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'Logical thinking',
            text: 'Logical thinking is working out what must be true from what you already know.',
          },
          {
            title: 'Problem solving',
            text: 'Problem solving is what you do when you do not know the next step.',
          },
          {
            title: 'Concept-based learning',
            text: 'A concept question checks whether the idea was understood, not whether the formula was remembered.',
          },
          {
            title: 'Application-based learning',
            text: 'An application question puts a familiar idea somewhere unfamiliar.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Comparison',
        title: 'JEE Foundation vs school learning',
        lead: 'This runs alongside school, not instead of it.',
        id: 'vsschool',
        kind: 'table',
        head: ['Aspect', 'School learning', 'JEE Foundation learning'],
        rows: [
          [
            'Question format',
            'Mostly written, with working shown',
            'Objective format added, with a time limit',
          ],
          [
            'Depth',
            'To the level the board paper needs',
            'To the depth competitive papers assume',
          ],
          ['Wrong answers', 'Marked and moved on from', 'Logged, categorised and revisited'],
          ['Speed', 'Rarely a limiting factor', 'Trained deliberately, after accuracy'],
          [
            'Goal',
            'Pass the board exam well',
            'Pass the board exam well and build competitive technique',
          ],
        ],
        band: false,
      },
      {
        eyebrow: 'Try it yourself',
        title: 'Can you solve this?',
        lead: 'A real objective-technique question. You should not need to calculate much — that is the point.',
        id: 'try-it',
        kind: 'quiz',
        noun: 'Question',
        items: [
          {
            q: 'JEE Foundation at Brolly Juniors is for which classes?',
            opts: [
              'Classes 4 to 8',
              'Classes 9 and 10',
              'Classes 11 and 12',
              'Any class from 6 upwards',
            ],
            a: 'Classes 9 and 10',
            why: 'JEE Foundation runs across Classes 9 and 10 — two years, before the Class 11 workload arrives.',
            hint: 'Choose one answer.',
          },
          {
            q: 'How is JEE Foundation different from IIT Foundation?',
            opts: [
              'They are identical',
              'JEE Foundation is exam-shaped for Classes 9-10; IIT Foundation is broader and depth-first for Classes 8-10',
              'IIT Foundation has no maths',
              'JEE Foundation is only for Class 12',
            ],
            a: 'JEE Foundation is exam-shaped for Classes 9-10; IIT Foundation is broader and depth-first for Classes 8-10',
            why: 'IIT Foundation keeps more options open. JEE Foundation suits students already settled on the engineering route.',
            hint: 'Choose one answer.',
          },
          {
            q: 'In the error log, mistakes are sorted into which three causes?',
            opts: [
              'Easy, medium and hard',
              'Maths, physics and chemistry',
              'Concept, careless and time',
              'Right, wrong and skipped',
            ],
            a: 'Concept, careless and time',
            why: 'A concept gap needs re-teaching, a careless slip needs a checking habit, and a time problem needs better question selection. Three different fixes.',
            hint: 'Choose one answer.',
          },
          {
            q: 'Which of these does Brolly Juniors promise?',
            opts: [
              'A guaranteed JEE rank',
              'Guaranteed IIT admission',
              'Clear teaching, small batches and honest feedback',
              'Guaranteed full marks in boards',
            ],
            a: 'Clear teaching, small batches and honest feedback',
            why: 'No centre can honestly guarantee ranks, marks or admission. What is promised is clear teaching, a sensible pace and truthful feedback.',
            hint: 'Choose one answer.',
          },
        ],
        band: true,
      },
      {
        eyebrow: 'Starting out',
        title: 'JEE Foundation for beginners',
        id: 'beginners',
        kind: 'split',
        paras: [
          'A student does not need to be a topper to begin. They need to be in Class 9 or 10, reasonably steady with school maths and science, and willing to be told honestly what went wrong.',
          'New students usually find two things unfamiliar at first: questions with a clock attached, and the idea that a wrong answer is useful information rather than a failure.',
          'If your child is currently struggling with the school syllabus itself, start with regular maths tuition, physics or chemistry tuition. Foundation work sits on top of a stable base, never instead of one — and we will say so plainly after the demo.',
        ],
        panel: {
          title: 'This is likely a fit if your child',
          bullets: [
            'Is in Class 9 or Class 10',
            'Is broadly keeping up with school maths and science',
            'Is genuinely interested in the engineering route',
            'Can sit with a hard question rather than skipping it',
            'Is willing to look at their own mistakes',
          ],
        },
        band: false,
      },
      {
        eyebrow: 'Quick quiz',
        title: 'Test your understanding',
        lead: 'Four short questions on the ideas covered on this page.',
        id: 'quiz',
        kind: 'split',
        paras: ['Question 1 of 4 · Score 0'],
        band: true,
      },
      {
        eyebrow: 'For parents',
        title: 'Parent support and parent guide',
        id: 'parent-guide',
        kind: 'cards',
        cols: 4,
        items: [
          {
            title: 'How we keep you informed',
            list: [
              'Weekly test scores shared privately with the family',
              'Error-log progress discussed, not just marks',
              'Honest feedback if the programme is not working',
              'You can ask to discuss the approach at any time',
            ],
          },
          {
            title: 'What helps at home',
            list: [
              'Ask "what type of mistake was it?" instead of "what did you score?"',
              'Let your child sit with a hard question before stepping in',
              'Treat a logged error as progress, because it is',
              'Protect sleep — tired students cannot hold accuracy',
              'Avoid comparing scores with cousins or classmates',
            ],
          },
        ],
        note: "Our commitment Brolly Juniors does not promise marks, ranks, selection or admission. No centre can honestly guarantee those, and you should be cautious of any that does. What we commit to is clear teaching, a sensible pace, small batches and truthful feedback about your child's progress.",
        band: false,
      },
      {
        title: "Your child's free demo is one message away.",
        kind: 'split',
        paras: [
          "Tell us your child's class and what they enjoy. We will suggest the closest fit — with no pressure and no upfront payment.",
        ],
        band: true,
      },
    ],
    session: {
      eyebrow: 'Inside a session',
      title: 'Sample class experience',
      items: [
        {
          title: 'Quick recall check',
          text: "Three short questions on last week's topic. It shows instantly who needs a second pass before anything new begins.",
        },
        {
          title: 'Concept taught to depth',
          text: 'The idea is built and the standard result derived, not simply written on the board. Students are asked to explain it back.',
        },
        {
          title: 'Graded problem set',
          text: 'Routine questions first, then harder ones. The difficulty rises deliberately so nobody is thrown in at the deep end.',
        },
        {
          title: 'Technique practice',
          text: 'The same questions revisited in objective form — where elimination or approximation is faster than solving in full.',
        },
        {
          title: 'Error review',
          text: 'Mistakes sorted into concept, careless or time, and added to the log. This is where the actual learning is banked.',
        },
      ],
    },
    activities: {
      eyebrow: 'Learning through activities',
      title: 'Activities, STEM examples and mini challenges',
      items: [
        {
          title: 'Estimation rounds',
          text: "Guess the answer's size before calculating. Builds the instinct that catches an answer that is wildly wrong.",
        },
        {
          title: 'Predict the demonstration',
          text: 'A physics demonstration paused before the result. Everyone writes a prediction first, then it runs.',
        },
        {
          title: 'Spot the trap',
          text: 'Students are shown a question and asked to find the wrong option most people would fall for, and explain why.',
        },
        {
          title: 'Explain it back',
          text: 'Teach the topic to the class in ninety seconds. Gaps in understanding surface immediately.',
        },
        {
          title: 'Error log clinic',
          text: 'Students bring their logged mistakes and work out which of the three causes each one really was.',
        },
        {
          title: 'Timed sprints',
          text: 'Short bursts of questions against the clock, introduced only after accuracy is steady.',
        },
        {
          title: 'Real-life STEM examples we use',
          list: [
            'Why a metro train brakes long before the platform',
            'Why "50% off, then 20% off" is not 70% off',
            'How soap actually lifts oil off a plate',
            'Why a phone battery drains faster in Hyderabad summers',
            'Why a cricket ball swings in the air',
          ],
        },
        {
          title: 'Mini projects and challenges',
          list: [
            "Measure a building's height using only its shadow",
            'Estimate the water your household uses in a week, then check it',
            'Build a paper circuit model and explain the current flow',
            'Solve one problem three different ways, then argue for the best',
          ],
        },
      ],
      cols: 4,
      note: 'STEM connection The reasoning built here carries directly into coding, robotics and AI for kids. Breaking a problem into steps is the same skill whether the answer is written on paper or typed into an editor.',
    },
    whyUs: {
      eyebrow: 'About the centre',
      title: 'Why choose Brolly Juniors?',
      items: [
        {
          title: 'We say no',
          text: 'No rank predictions, no six-hour Sunday marathons, no starting this in Class 6. Early pressure produces tired students, not prepared ones.',
        },
        {
          title: 'Errors get attention',
          text: 'The per-student error log, reviewed fortnightly, is the core of the method rather than an add-on.',
        },
        {
          title: 'Scores stay private',
          text: 'Weekly test results are shared with the family and never ranked publicly in front of the class.',
        },
        {
          title: 'Small batches',
          text: "Batches are kept small so every student is seen and heard. Ask us for the current batch size for your child's class.",
        },
        {
          title: 'Boards are not sacrificed',
          text: 'The school syllabus is covered in full throughout both years, not squeezed out by exam practice.',
        },
        {
          title: 'Honest fit advice',
          text: 'If IIT Foundation or plain subject tuition suits your child better, we will tell you — even though it means a smaller enrolment for us.',
        },
      ],
      cols: 3,
      note: "Trainers and mentors Sessions are taken by Brolly Juniors educators. For current trainer details, qualifications and who will be teaching your child's batch, contact Brolly Juniors on 7036044555. We publish trainer information only where it can be verified, so you will not find invented profiles or claimed past results on this page.",
    },
    practical: {
      options: [
        'JEE Foundation is taught in person at the Nizampet centre. Schools can arrange delivery on their own campus through our school partnership programme.',
      ],
      timings: [
        'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
      fees: [
        'Fees depend on the class level and batch. We do not publish figures that may go out of date.',
      ],
      feeTitle: 'Fees',
    },
    trial: {
      title: 'Book a free demo class',
      paras: [
        'Every new family can attend one free trial class before deciding anything. No payment, no obligation.',
        'JEE Foundation suits students who have already decided on the engineering route. Come and see one class before committing.',
      ],
    },
    local: {
      title: 'JEE Foundation classes near me in Hyderabad',
      paras: [
        'Areas we commonly serve:',
        'If you are searching for JEE Foundation classes near you in the Nizampet, Bachupally or JNTU area, the Brolly Juniors centre is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads — beside Sri Bhramaramba Theatre, close to JNTU Metro Station, at metro pillar A689.',
        'Families travel to us from across the north-west corridor of Hyderabad. The centre is open Monday to Saturday, 10:00 am to 7:00 pm.',
      ],
    },
    related: [
      {
        icon: '→',
        title: 'IIT Foundation',
        text: 'Classes 8–10. Broader and depth-first, across three years.',
        to: '/tuitions/iit-foundation',
      },
      {
        icon: '→',
        title: 'NEET Foundation',
        text: 'Classes 9–10. Biology-led, for the medical route.',
        to: '/tuitions/neet-foundation',
      },
      {
        icon: '→',
        title: 'Olympiad Foundation',
        text: 'Classes 4–10. Reasoning for IMO, NSO, IEO and NSTSE.',
        to: '/tuitions/olympiad-foundation',
      },
      {
        icon: '→',
        title: 'Advanced Maths',
        text: 'Classes 7–10. Extra depth for students who want more.',
        to: '/tuitions/advanced-maths',
      },
      {
        icon: '→',
        title: 'Physics Tuition',
        text: 'School physics taught with the reasoning intact.',
        to: '/tuitions/physics',
      },
      {
        icon: '→',
        title: 'Chemistry Tuition',
        text: 'School chemistry, with safety-first demonstrations.',
        to: '/tuitions/chemistry',
      },
      {
        icon: '→',
        title: 'Problem Solving',
        text: 'Strategy-led thinking practice for younger learners.',
        to: '/programs/problem-solving',
      },
    ],
    relatedTitle: 'Related programmes',
    faqTitle: 'JEE Foundation classes in Hyderabad: your questions answered',
    faqs: [
      {
        q: 'What is JEE Foundation?',
        a: 'JEE Foundation is Class 9 and 10 maths, physics and chemistry taught to the depth competitive papers assume, together with objective technique and regular timed testing. At Brolly Juniors it runs over two years, with the board syllabus covered in full alongside.',
      },
      {
        q: 'What age or class is JEE Foundation for?',
        a: 'Brolly Juniors runs JEE Foundation for Classes 9 and 10 — usually ages 14 to 16. Readiness matters more than age, so a free demo class is the best way to check the fit.',
      },
      {
        q: 'Is JEE Foundation the same as IIT Foundation?',
        a: 'No. IIT Foundation is broader and depth-first, running across Classes 8 to 10. JEE Foundation is more exam-shaped, runs across Classes 9 and 10, and suits students already settled on the engineering route. If you are unsure which to pick, IIT Foundation keeps more options open.',
      },
      {
        q: 'Is JEE Foundation the same as JEE coaching?',
        a: 'No. Full JEE coaching usually happens in Classes 11 and 12 and covers the Class 11 and 12 syllabus at entrance depth. JEE Foundation works on the Class 9 and 10 syllabus, taken deeper, to build the base and the technique. Foundation does not replace entrance coaching later.',
      },
      {
        q: 'What subjects are included?',
        a: 'Mathematics, physics and chemistry, with logical reasoning, problem solving and numerical thinking woven through all three. Everything maps back to the board syllabus.',
      },
      {
        q: 'Does Brolly Juniors guarantee a JEE rank or IIT admission?',
        a: 'No, and we would advise caution about anyone who does. We do not promise ranks, marks, selection or admission. Brolly Juniors is also not affiliated with the National Testing Agency, JEE, or any Indian Institute of Technology.',
      },
      {
        q: 'What is the error log?',
        a: 'Each student keeps a record of what they got wrong and why, sorted into three causes: concept gap, careless slip, or ran out of time. The log is reviewed fortnightly with the educator. The three causes need different fixes, so simply marking an answer wrong tells a student very little.',
      },
      {
        q: "Will this clash with my child's board exam preparation?",
        a: 'It should not. The board syllabus is covered in full throughout both years and the extra depth sits inside the same topics, so foundation work generally supports school marks. Batches are scheduled around school hours.',
      },
      {
        q: 'My child is in Class 6. Can they start now?',
        a: 'We would advise against it. Two years of foundation is enough, and starting in Class 6 frequently harms — students arrive at Class 11 already tired of the material. For a younger child, IIT Foundation, Olympiad Foundation or strong maths and science tuition is a better use of the time.',
      },
      {
        q: 'What are the fees for JEE Foundation classes?',
        a: 'Fees vary by class level and batch, and we do not publish figures that could go out of date. Contact Brolly Juniors on 7036044555 for current fee details.',
      },
      {
        q: 'What are the batch timings?',
        a: 'Batches are scheduled around school hours. The centre is open Monday to Saturday, 10:00 am to 7:00 pm. Contact Brolly Juniors for current batch timings.',
      },
      {
        q: 'Can we attend a free demo before enrolling?',
        a: 'Yes. Every new family can book one free trial class to see the teaching approach, meet the educator and confirm the programme is a good fit. There is no payment and no obligation.',
      },
      {
        q: 'How large are the batches?',
        a: "Batches are kept small so every student can be seen and supported. Please contact Brolly Juniors for the current batch size for your child's class level. School-delivery formats are planned separately with the school.",
      },
      {
        q: 'Who teaches the JEE Foundation classes?',
        a: "Sessions are taken by Brolly Juniors educators. Contact Brolly Juniors for current trainer details and to find out who will be teaching your child's batch. We do not publish trainer profiles or past results that cannot be verified.",
      },
      {
        q: 'Where is the centre located?',
        a: 'Brolly Juniors is on the 3rd floor of Dr Atmaram Estates at Nizampet X Roads, Hyderabad — beside Sri Bhramaramba Theatre and close to JNTU Metro Station, at metro pillar A689. Open Monday to Saturday, 10:00 am to 7:00 pm.',
      },
    ],
    quickAnswersTitle: 'Quick answers',
    quickAnswers: [
      {
        q: 'What is JEE Foundation?',
        a: 'Class 9 and 10 maths, physics and chemistry taught to exam depth, with objective technique and weekly testing.',
      },
      {
        q: 'What class is it for?',
        a: 'Classes 9 and 10 at Brolly Juniors, usually ages 14 to 16. Readiness matters more than age.',
      },
      {
        q: 'Is it the same as IIT Foundation?',
        a: 'No. IIT Foundation is broader and covers Classes 8–10. JEE Foundation is exam-shaped and covers Classes 9–10.',
      },
      {
        q: 'Is it the same as JEE coaching?',
        a: 'No. Coaching covers Class 11 and 12 at entrance depth. Foundation builds the base beforehand.',
      },
      {
        q: 'What subjects are included?',
        a: 'Mathematics, physics and chemistry, with reasoning and problem solving throughout.',
      },
      {
        q: 'Where is it available?',
        a: 'At the Brolly Juniors centre at Nizampet X Roads, Hyderabad, near JNTU Metro. Monday to Saturday, 10:00 am – 7:00 pm.',
      },
    ],
  },
};
