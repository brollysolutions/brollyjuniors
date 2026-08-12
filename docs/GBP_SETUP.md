# Google Business Profile — the complete content pack

**This is the highest-return action available to you, it is free, and it is the one thing in the strategy that cannot be done for you.** Everything you need to type has been written below. Your job is the claiming, the verification, and the pasting.

Why it matters, in one line: for `abacus classes in hyderabad`, positions 1, 2 and 3 are all Local Pack results — and one of the businesses holding those positions has no website whatsoever. They outrank everyone on Business Profile strength alone.

Budget about 90 minutes for the initial setup, then 15 minutes a week.

---

## Step 0 — Before you start, collect these four things

You cannot complete the setup without them, and two of them also unblock work on the website.

| # | What | Why |
|---|---|---|
| 1 | **The exact street address**, as you want it to appear everywhere, forever | It must match the website character for character |
| 2 | **Latitude and longitude** — right-click your centre's pin in Google Maps, the first menu item is the two numbers | Used by the map, the geo tags and the structured data |
| 3 | **20+ photographs** — see the shot list in step 6 | Google weights photo count and freshness |
| 4 | **Your batch timings**, as opening hours | GBP and the website are cross-checked against each other |

### Then put items 1 and 2 into the website

Open `src/data/site.js` and fill in the `address` block. It is the only place the address is written; the footer, the contact page, the map and the structured data all read from it.

```js
export const address = {
  streetAddress: 'Plot 12, 3rd Floor, ...',   // exactly as on GBP
  neighbourhood: 'Kondapur',                   // the area the centre is in
  locality: 'Hyderabad',
  region: 'Telangana',
  regionCode: 'IN-TG',
  postalCode: '500084',
  country: 'IN',
  latitude: 17.4620,                           // from Google Maps
  longitude: 78.3560,
  mapEmbedSrc: '',                             // Maps → Share → Embed a map → copy the src
  placeUrl: '',                                // your "View on Google Maps" short link
  reviewUrl: '',                               // your direct review link (step 8)
};
```

Then rebuild and deploy: `npm run build`. Nothing else needs editing.

> **Setting `neighbourhood` also changes wording.** The area pages say "classes **in** Kondapur" when the centre is in Kondapur and "classes **for** Kondapur families" when it is not. That difference is deliberate — overstating a location is one of the documented reasons Business Profiles get suspended.

---

## Step 1 — Claim and verify

1. Go to **google.com/business** and search for "Brolly Juniors" first — a listing may already exist from a customer or a data aggregator. If it does, **claim** it rather than creating a duplicate. Duplicate listings compete with each other and both lose.
2. Verification in India is usually **video verification**: a live recording where you show the premises, the signage, the street outside, and some evidence you run the business (keys, equipment, a bill in the business name).
3. Have the signage installed before you record. A verification failure puts you into a slow appeal queue.

---

## Step 2 — Categories

Categories are the single biggest ranking factor after proximity. Get them exactly right.

| Slot | Category |
|---|---|
| **Primary** | `Educational institution` |
| Secondary | `Tutoring service` |
| Secondary | `Computer training school` |
| Secondary | `After school program` |
| Secondary | `Coaching center` |

Do not add `Software company`, `Training centre` (generic) or anything about medical coding. Two of the three current Local Pack results for "coding classes for kids in Hyderabad" are **medical billing** institutes — the category for children's programming is genuinely unclaimed in this city, and precise categories are how you claim it.

---

## Step 3 — Business name

```
Brolly Juniors
```

That is the whole name. Do **not** use "Brolly Juniors — Abacus, Coding & Phonics Classes in Hyderabad". Keyword-stuffed names are against the guidelines, are trivially reported by competitors, and are a common cause of suspension. Your competitors who do this are borrowing ranking against a debt that comes due.

---

## Step 4 — Business description (750 characters max)

Paste this exactly. It comes in at roughly 730 characters.

```
Brolly Juniors is a children's learning centre in Hyderabad for ages 4 to Class 10. We teach Abacus, Phonics and early reading, Vedic Maths, Public Speaking, Creative and Digital Skills, Python coding and Artificial Intelligence — all under one roof, so a family does not need four different centres.

Every regular batch is capped at eight children, so each learner is heard in every session. AI and Python run as separate annual pathways of 72 sessions each, with a distinct curriculum for every class from 6 to 10, and a project the student builds and explains at the end of every module.

Every new family can attend one free trial class before deciding. We also partner with Hyderabad schools on curriculum, clubs and teacher training.
```

---

## Step 5 — Services

Add each as a separate service entry. Descriptions are capped at 300 characters; these fit.

| Service name | Description |
|---|---|
| **Abacus Classes** | A 10-level Soroban pathway for ages 5 to 11, building concentration, working memory and mental calculation. Two to three years at consistent practice. Batches capped at eight children. |
| **Phonics & Early Reading** | Synthetic phonics for ages 4 to 9. Six levels from the 44 English sounds to reading a levelled storybook aloud. Typically 9 to 12 months. Every child reads aloud in every session. |
| **Vedic Maths** | A 12-week program for ages 7 to 13. Pattern-based mental calculation taught with the reasoning behind each method, not as tricks to memorise. |
| **Public Speaking for Kids** | A five-stage confidence ladder for Classes 1 to 5, from show-and-tell to a prepared presentation with questions. Weekly sessions in small batches. |
| **Creative & Digital Skills** | For Classes 1 to 5. Devices, typing, files, safe searching, online safety and creative digital projects. Six modules, each ending in something the child made. |
| **Python Coding for Kids** | Real typed Python for Classes 6 to 10. 72 sessions a year, nine modules, a working project every module and an annual capstone. Not block-based coding. |
| **Artificial Intelligence for Kids** | AI literacy for Classes 6 to 10. Prompting, research and verification, images and audio, data, ethics and safety. 72 sessions a year. No programming required. |
| **Free Trial Class** | One free trial class for every new family. Meet the educator, see the format, and decide without obligation. |
| **School Partnerships** | Annual AI and Python curricula, coding clubs and teacher training, delivered inside Hyderabad schools around the existing timetable. |

---

## Step 6 — Photographs (the 20-shot list)

Photo count and **recency** are documented ranking inputs, and photos are what a parent looks at before they call. Take these on a phone, in daylight, and upload them in this order.

**Exterior and finding you (5)**
1. The building from across the street, signage visible
2. The signage close up, readable
3. The entrance door
4. The stairwell or lift lobby a parent will use
5. The parking or drop-off spot

**Inside (6)**
6. The classroom, empty, lights on, wide shot
7. The classroom set up for a batch — eight chairs, visibly eight
8. The whiteboard mid-lesson
9. The abacus shelf or equipment
10. The computers or laptops used for coding
11. The waiting area where parents sit

**Teaching (5) — parental consent in writing before any child appears**
12. A child working on an abacus, hands in focus
13. A small group in a phonics session
14. A child at a keyboard typing Python
15. A child presenting to the class
16. An educator working one-to-one with a child

**Proof of work (4)**
17. Student projects on screen
18. A wall of student work or certificates
19. A completed workbook or progress sheet
20. The team — real faces, no stock photos

**Then: add one new photo every week.** Set a recurring reminder. A profile that stops adding photos looks dormant, and freshness is measurable.

> ⚠️ **Consent.** Get written parental permission before posting any photograph of a child, and keep it on file. Shots framed on hands, workbooks and screens carry most of the persuasive value without the risk — use those where consent is uncertain.

---

## Step 7 — Q&A: seed these ten yourself

Google lets the business post and answer its own questions. Do it — otherwise the section stays empty or gets filled by strangers. Post the question from one account, answer it from the business account.

1. **What ages do you teach?** → Ages 4 to Class 10. Abacus starts from age 5, phonics from age 4, and the AI and Python pathways run from Class 6 to Class 10.
2. **How many children are in a batch?** → Eight, at most, in regular centre batches. It is the reason a child gets noticed in the same session rather than three weeks later.
3. **Do you offer a free trial class?** → Yes. Every new family can attend one free trial class before deciding whether to enrol.
4. **Is the coding class real programming or block-based?** → Real typed Python from the first module — variables, loops, functions, files and data. Not drag-and-drop blocks.
5. **Do I need to bring my own laptop?** → Regular access to a laptop or desktop at home is recommended for practice. Ask us about what is available at the centre.
6. **What age should a child start abacus?** → Usually five to seven. The child needs to recognise numbers to ten and sit with one activity for about fifteen minutes. We will say honestly if a child is not ready yet.
7. **How long does the phonics program take?** → Six levels, usually nine to twelve months at two sessions a week. Children who already read are placed at a later level after a readiness check.
8. **Are AI and Python one combined course?** → No. They are separate annual pathways of 72 sessions each, with a distinct curriculum per class. A child can take one or both.
9. **Do you work with schools?** → Yes — annual AI and Python curricula, coding clubs and teacher training, delivered inside the school timetable.
10. **Which areas do you serve?** → Families travel to us from Kondapur, Madhapur, Gachibowli, Kukatpally, Hitech City, Miyapur and Manikonda, among others.

Every one of these already exists on the website, which is deliberate: the answers must match.

---

## Step 8 — Get your direct review link, then read the reviews playbook

In the GBP dashboard: **Ask for reviews** → copy the short link (it looks like `https://g.page/r/…/review`).

Two things to do with it immediately:

1. Paste it into `src/data/site.js` as `address.reviewUrl`, and paste the "View on Google Maps" link as `address.placeUrl`. Rebuild and deploy.
2. Turn it into a QR code (any free generator) and print it on a card for the centre's reception desk.

Then follow **[REVIEWS_PLAYBOOK.md](REVIEWS_PLAYBOOK.md)**. Reviews are the deciding factor in Local Pack ranking, and there is a right and a wrong way to collect them — 40 reviews in one week reads as fraud and can get the listing suspended.

---

## Step 9 — Weekly, from now on

15 minutes. Put it in the calendar as a recurring appointment, because this is where most businesses quietly stop.

- [ ] Post one Google Post — a student project, a batch announcement, a tip from a class
- [ ] Upload one new photo
- [ ] Reply to every new review, within 48 hours, naming the program
- [ ] Answer any question a member of the public has asked
- [ ] Check the Insights tab: how many people called, asked for directions, or clicked the website

### A year of Google Post ideas, so you never stare at a blank box

Rotate through these. Each one is a real thing that happens at a learning centre.

| Type | Example |
|---|---|
| Student project | "A Class 8 student finished her Python quiz game this week — she wrote the questions herself." |
| Batch opening | "Two places open in the Saturday morning abacus batch, ages 6 to 8." |
| Teaching tip | "Five minutes of reading a day beats forty minutes on Sunday. Here is why." |
| Milestone | "A phonics learner read a whole levelled book aloud today. Nine months ago he did not know the sounds." |
| Myth-busting | "Abacus does not make a child good at maths. It makes them good at arithmetic — and here is why that still matters." |
| Seasonal | "Summer batches now open." / "Planning the new academic year?" |
| Behind the scenes | "Why our batches stop at eight children." |
| Guide link | Link to one of the guides at `/resources` — they are written to be shared. |

---

## What to expect, and when

| Timeframe | What normally happens |
|---|---|
| Week 1–2 | Verification completes; the listing appears |
| Week 3–6 | You start appearing for branded and very local searches |
| Month 2–3 | With 20+ reviews, Local Pack appearances for the money keywords begin |
| Month 4–6 | With 50+ reviews and consistent posting, top-3 Local Pack is realistic |

Track it in the table in `SEO_STRATEGY.md` §9. The only row that matters is the last one.
