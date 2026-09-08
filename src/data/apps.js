/* Mobile apps built by the Brolly team.
 *
 * These are practice companions, not a second product line. A child gets two
 * hours of phonics a week at the centre and a hundred and sixty-six waking
 * hours away from it, and the gap between those two numbers is where reading
 * either consolidates or fades. An app that a parent already has on their phone
 * is the only practice tool that survives contact with a real family evening.
 *
 * For search, this is a genuinely different intent from the class pages.
 * "phonics classes in hyderabad" is a local, high-commitment query with maybe a
 * few hundred searches a month in this city. "phonics app for kids" is a
 * national, zero-commitment query an order of magnitude larger, and nothing on
 * this site currently answers it. The app pages are also the only pages here a
 * parent outside Hyderabad has any reason to link to or share, which matters
 * because referring domains are this site's weakest structural signal
 * (SEO_STRATEGY.md). Treat them as top-of-funnel: they earn the visit, the
 * class pages convert it.
 *
 * Rule for this file, inherited from src/data/site.js: never invent a value.
 * Every number below is taken from the app's own product page. Anything not
 * confirmed is left blank and simply not rendered.
 */

/* The Google Play listing.
 *
 * Live in production since 16 Aug 2026 (verified against the listing itself:
 * Play serves HTTP 200 and its own structured data reports price 0 INR,
 * availability InStock and a "Rated for 3+" content rating).
 *
 * Setting this is half of going live; `status` below is the other half. Both
 * are required, deliberately — see isLive() at the foot of this file. If the
 * listing is ever unpublished or rolled back to a testing track, blank this
 * string and every surface reverts to the honest testing state in one edit.
 */
export const SPARK_PHONICS_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.sparkphonics.app';

/* The tester opt-in link, used only while an app is on a closed testing track.
 *
 * Blank now that Spark Phonics has reached production: there is no test group
 * left to join, and the Play button below is the real route in. Kept rather
 * than deleted because the field is part of the app shape, and the next app
 * will spend a testing window here before it too goes live.
 */
export const SPARK_PHONICS_TEST_URL = '';

/* The company that develops the apps. Named separately and honestly rather than
   folded into the Brolly Juniors organisation node — they share a name and a
   team, but they are not the same entity, and asserting that they are (via
   sameAs, or a shared @id) would be a structured-data claim nobody asked us to
   make. See docs/APPS.md if the relationship is ever formalised. */
export const developer = {
  name: 'Brolly Software Solutions Pvt Ltd',
  url: 'https://brollysolutions.in',
  productPage: 'https://brollysolutions.in/spark-phonics',
};

export const apps = [
  {
    slug: 'spark-phonics',
    name: 'Spark Phonics',
    tagline: 'Phonics that speaks, in a real human voice.',

    /* The H1, kept here rather than in the component because it carries the
       keyword the page is held to — "phonics app for kids" — and docs/KEYWORD_MAP.md
       audits that the keyword appears in the H1 and the opening copy. */
    h1: 'A phonics app for kids that speaks with a real human voice.',
    heroSubtitle:
      'Spark Phonics teaches children aged 3 to 7 to read, one sound at a time. No ads, no internet needed, and every single sound recorded by a real person.',

    /* Search metadata, in the same shape articles.js uses. The keyword is
       national and non-local by design — "phonics app for kids" is a far larger
       term than anything with "hyderabad" in it, and it is the only kind of term
       this site has a page capable of answering. */
    seoTitle: 'Spark Phonics: Free Phonics App for Kids | Brolly Juniors',
    seoDescription:
      'A free offline phonics app for kids aged 3 to 7. Every sound is a real human recording, not text-to-speech. 17 modules, 142 lessons, and no ads.',
    keyword: 'phonics app for kids',

    platform: 'Android',
    packageId: 'com.sparkphonics.app',
    playUrl: SPARK_PHONICS_PLAY_URL,
    testUrl: SPARK_PHONICS_TEST_URL,

    /* 'testing' until the app reaches production on Google Play, then 'live'.
       This drives the download CTA, the availability in the structured data and
       the status wording on both pages. Nothing infers status from playUrl
       being set, because "the URL is filled in" and "the app is downloadable"
       are not the same claim and should not be silently conflated — which is
       why going live took two edits, this flag and the URL above.

       No statusNote: the field exists to explain why an app cannot be
       downloaded, and there is nothing left to explain. Add one back only if
       the listing is ever pulled. */
    status: 'live',

    ages: 'Ages 3–7',
    price: 'Free to start',

    /* Real artwork, not an illustration. spark-phonics.svg is a composite of
       three genuine device screenshots on the brand background, sized 480x360
       so it drops into the landscape image slot every other page here uses
       (PageHero, MediaSplit, the app card, the program callout) without any
       layout special-casing. The screenshots themselves are below. */
    image: '/images/apps/spark-phonics.svg',
    imageAlt:
      'Three screens from the Spark Phonics app side by side: the module list, the Beginning Blends lessons and the Word Families lessons',

    /* The launcher icon, exactly as it appears on the Play listing and on a
       parent's home screen after install. Worth showing rather than inventing a
       site-side badge: it is the thing they will be looking for in a store
       search, and matching it here is what makes the site and the listing read
       as the same product.

       Served at 256px and never rendered above 96px, so it stays crisp on a 2x
       screen without shipping the 512px original for a thumbnail. */
    icon: '/images/apps/spark-phonics/icon.png',
    iconAlt: 'The Spark Phonics app icon: a friendly cartoon tiger in a red scarf',

    /* Actual device screenshots, shown full-bleed on the app page and emitted
       as `screenshot` in the SoftwareApplication markup — which is what that
       property means, and the reason it was left out while the only artwork
       here was a drawing (see the note in src/lib/schema.js).

       Captured from the published Play listing, so what the site shows and what
       a parent sees on the store are the same screens. Native size 716x1600.
       Re-pull them if the app's UI changes: a stale screenshot is the same
       category of error as a stale price. */
    screenshots: [
      {
        src: '/images/apps/spark-phonics/welcome.jpg',
        alt: 'The Spark Phonics opening screen: the app logo, the line "Learn your letter sounds the fun way!" and a large "Let’s Play!" button',
        caption: 'One button to start. A four-year-old can open the app without being able to read it.',
      },
      {
        src: '/images/apps/spark-phonics/home.jpg',
        alt: 'The Spark Phonics module list, headed "Tap any letter to hear its sound", showing Single Letters with 26 sounds, Two-Letter Sounds, Word Families with 116 words, Beginning Blends with 139 words and End Blends',
        caption: 'Every module, with how much is in it. Single Letters through to blends and digraphs.',
      },
      {
        src: '/images/apps/spark-phonics/beginning-blends.jpg',
        alt: 'The Beginning Blends lesson list in Spark Phonics, showing bl-, cl-, fl-, pl-, sl-, gl- and br-, each with six words',
        caption: 'Inside a module: one lesson per blend, six words each, in the order they build on each other.',
      },
      {
        src: '/images/apps/spark-phonics/word-families.jpg',
        alt: 'The Word Families lesson list in Spark Phonics, showing the -am, -ap, -ag, -an, -ed, -en and -eg families with the number of words in each',
        caption: 'Word families are where blending starts to feel like reading rather than decoding.',
      },
    ],
    /* Reuses the phonics share card. One card per section, not per route — see
       the note in src/lib/seo.js. */
    ogImage: 'phonics',

    /* The class program this app practises. Drives the cross-links in both
       directions: the app page points at the program, and the program page
       renders an app callout. */
    program: {
      path: '/junior-skills/phonics',
      label: 'Phonics & Early Reading classes',
    },

    /* Used as the page's quick answer, so it has to stand alone as a complete
       response to "what is this app" for a featured snippet or an AI overview. */
    quickAnswer:
      'Spark Phonics is a free Android app that teaches children aged 3 to 7 to read, one sound at a time. Every letter, sound and word is a recording of a real person rather than text-to-speech, so children hear phonics pronounced the way it should be. All 1,900+ recordings install with the app, so it works with no internet at all.',

    intro:
      'Spark Phonics teaches children aged 3 to 7 to read, one sound at a time. Every letter, sound and word in the app is voiced by a real person — never robotic text-to-speech — so children hear phonics exactly the way it should be spoken. And because every recording lives inside the app itself, it works anywhere, with no internet at all.',

    stats: [
      { value: '3–7', label: 'Ages' },
      { value: '17', label: 'Modules' },
      { value: '142', label: 'Lessons' },
      { value: '1,900+', label: 'Voice recordings' },
    ],

    steps: [
      {
        tag: 'Step 1',
        icon: '📲',
        title: 'Download and set up',
        text: 'Install Spark Phonics and create a quick profile. The entire app — including every sound recording — installs onto the device in one go.',
      },
      {
        tag: 'Step 2',
        icon: '👂',
        title: 'Tap, listen, learn',
        text: 'Children tap letters, coloured sound tiles and whole words to hear real human pronunciation, and watch how separate sounds blend together into a word.',
      },
      {
        tag: 'Step 3',
        icon: '🎮',
        title: 'Practise and play',
        text: 'Every sound is reinforced with practice words, games and rewards across 142 structured lessons that grow with the child.',
      },
    ],

    features: [
      {
        icon: '🎙️',
        title: 'Real human recordings',
        text: 'Every sound, letter and word is voiced by a real person — never text-to-speech — so children hear accurate, natural pronunciation from the very first tap.',
      },
      {
        icon: '✈️',
        title: 'Works fully offline',
        text: 'All audio ships inside the app. After a one-time setup it runs with no internet at all — car journeys, flights and screen time on the go.',
      },
      {
        icon: '🌈',
        title: 'Sounds you can see',
        text: 'Words break apart into colour-coded sound tiles, so children learn how separate sounds blend together to build every word they read.',
      },
      {
        icon: '📚',
        title: 'A complete curriculum',
        text: '17 modules and 142 lessons carry a learner from single letters through blends, digraphs, diphthongs, long vowels and tricky sight words.',
      },
      {
        icon: '🏅',
        title: 'Games and rewards',
        text: 'Playful games and a built-in rewards system keep young learners motivated, confident and coming back for the next lesson.',
      },
      {
        icon: '🛡️',
        title: 'Safe for children',
        text: 'No ads, no third-party tracking and no purchases inside the child experience — just phonics, in a calm, distraction-free space.',
      },
    ],

    /* The sound groups the app works through. The full curriculum is 17 modules;
       these are the groups a parent would recognise by name, which is what the
       page needs to show. Presented as coverage, never as "all 17". */
    soundGroups: [
      'Single Letters',
      'Two-Letter Sounds',
      'Word Families',
      'Words ending in "x"',
      'Beginning Blends',
      'End Blends',
      'Digraphs',
      'Diphthongs',
      'Long Vowels',
      'R-Controlled Sounds',
      'Alternate Sounds',
      'Tricky / Sight Words',
      'Practice Words',
    ],

    pricing:
      'Single Letters, Two-Letter Sounds and Rewards are free forever. The full curriculum unlocks with a simple one-time step through the Spark Phonics team — no in-app payment and no subscription.',

    /* Answered on the page and emitted as FAQPage structured data, which is the
       only reason Google honours them: markup that is not visible is discarded.
       Every answer here is checkable against the app itself. */
    faqs: [
      /* First, because it is the first thing a visitor arriving from search
         wants to know. Kept rather than deleted now that the answer is yes: the
         question is a real query, and a plain "yes, here is where" is a better
         snippet than no answer at all. */
      {
        q: 'Can I download Spark Phonics today?',
        a: 'Yes. Spark Phonics is live on Google Play and free to download on any Android phone or tablet. The Single Letters and Two-Letter Sounds modules and the rewards system are free forever, so you can see whether it suits your child before anything else happens. There is no iOS version yet.',
      },
      {
        q: 'Is Spark Phonics free?',
        a: 'The Single Letters and Two-Letter Sounds modules, and the rewards system, are free forever — enough to find out whether the app suits your child before anything else happens. The full curriculum unlocks through a one-time step with the Spark Phonics team. There is no in-app payment and no subscription.',
      },
      {
        q: 'Does the app work without internet?',
        a: 'Yes, completely. Every one of the 1,900+ voice recordings installs with the app rather than streaming, so after the one-time setup it needs no connection at all. It is designed for car journeys, flights and anywhere the signal is unreliable.',
      },
      {
        q: 'Is the voice text-to-speech?',
        a: 'No. Every letter, sound and word is a recording of a real person. This is the reason the app exists: text-to-speech engines routinely mispronounce isolated phonemes — reading the letter name instead of its sound, or adding a vowel that is not there — and a child who learns "buh" instead of /b/ has to unlearn it before they can blend.',
      },
      {
        q: 'What age is Spark Phonics for?',
        a: 'Ages 3 to 7. Younger children start with single letter sounds and listening games, while older ones move through blends, digraphs and sight words. Children aged 8 and above who are still building reading confidence are usually better served by taught sessions than by an app.',
      },
      {
        q: 'Is there an iPhone or iPad version?',
        a: 'Not at the moment. Spark Phonics is an Android app. An iOS version is not currently available, and we would rather say so plainly than leave families checking the App Store for something that is not there.',
      },
      {
        q: 'Does my child need to attend Brolly Juniors classes to use the app?',
        a: 'No. Spark Phonics is a standalone app that any family can use, wherever you live. Children in our Hyderabad phonics batches use it as practice between sessions, and the sound sequence lines up with how the classes teach — but it is not a members-only tool and there is nothing to enrol in first.',
      },
    ],
  },
];

export const appPath = (slug) => `/apps/${slug}`;

/* Downloadable by the public. Requires both the status flag and a store URL, so
   neither a forgotten flag nor a pasted-in-early link can make the site claim
   the app is available when it is not. */
export const isLive = (app) => app.status === 'live' && Boolean(app.playUrl);

export function getApp(slug) {
  return apps.find((a) => a.slug === slug) || null;
}

/* The app that practises a given program page, so the program page can render a
   callout without knowing which apps exist. Returns null for programs that do
   not have one — most of them, today. */
export function appForProgram(path) {
  return apps.find((a) => a.program?.path === path) || null;
}
