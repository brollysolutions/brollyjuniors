# Brolly Juniors — Search & Marketing Strategy

**Goal:** Rank #1 in Google for Hyderabad kids-education searches and beat local + national competitors.
**Prepared:** 30 July 2026 · **Implementation:** 31 July 2026
**Data source:** Ubersuggest (Hyderabad locId 1007740), live SERP analysis, site audit.

> ### Status, in one paragraph
>
> **Both technical blockers are fixed and deployed in the codebase.** The site now
> generates 137 real HTML pages at build time — every one with its own title,
> description, canonical and structured data — up from a single empty shell with
> one title shared across 35 pages. Four neighbourhood pages and six long-form
> guides have been written and published, analytics and conversion tracking are
> wired, and two scripts now check all of it on every build.
>
> **What is left is not code.** It is the Google Business Profile, fifty reviews
> from your two hundred families, and the link work — and those were always going
> to be the parts that decide this. See [§8](#8-what-has-been-implemented) for
> exactly what shipped and [docs/90_DAY_PLAN.md](docs/90_DAY_PLAN.md) for what
> remains
### The supporting documents

Each one is written to be executed, not read.

| Document | What it is for |
|---|---|
| [docs/GBP_SETUP.md](docs/GBP_SETUP.md) | The complete Google Business Profile content pack — description, services, Q&A, photo list, post calendar. Everything except the clicking. |
| [docs/REVIEWS_PLAYBOOK.md](docs/REVIEWS_PLAYBOOK.md) | 0 → 50 reviews: when to ask, the words to use, reply templates, and the mistake that gets listings suspended |
| [docs/CITATIONS.md](docs/CITATIONS.md) | The 20 directory listings, with the exact text to paste into each |
| [docs/LINK_BUILDING.md](docs/LINK_BUILDING.md) | 6 → 50 referring domains, with the outreach emails written |
| [docs/COMPETITORS.md](docs/COMPETITORS.md) | Who you are up against, what was built against each, and a quarterly monitoring routine |
| [docs/ANALYTICS_SETUP.md](docs/ANALYTICS_SETUP.md) | Search Console and GA4, step by step, 30 minutes |
| [docs/KEYWORD_MAP.md](docs/KEYWORD_MAP.md) | Generated: every page, its target keyword, and whether the keyword is actually in the title, H1 and opening copy |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | How to build and upload — **the build changed, read this before the next deploy** |

---

## 0. The honest answer on "#1 rank"

You asked for rank #1. Here is what the data says is actually achievable, because chasing the wrong #1 wastes a year.

| Target | Realistic? | Why |
|---|---|---|
| **#1 in Google Maps / Local Pack for Hyderabad terms** | ✅ **Yes — 3–6 months** | Top 3 results for your money keywords are the Local Pack. Your competitors there are weak. **This is where you win.** |
| **#1 organic for "abacus classes in hyderabad"** | ✅ **Yes — 4–8 months** | Current #1 organic has **Domain Authority 4**. You have DA 5. You can outrank them on content quality alone. |
| **#1 organic for "coding classes for kids in hyderabad"** | ✅ **Likely — 6–9 months** | Held by aggregators (Codingal DA 59, UrbanPro DA 49) with thin location pages. Beatable with a genuinely local page. |

**Strategic conclusion:** Your #1 is a *local* #1. Hyderabad search volumes are small (170/mo for abacus, 210/mo for "phonics classes near me") but the intent is red-hot and the CPC is ₹70 — meaning advertisers pay ₹70 a click because these searchers *enrol*. Owning 90% of a small, high-intent local market beats 0.1% of a national one.

---

## 1. Where you stand today (baseline)

Measured on `brollyjuniors.com`, 30 July 2026:

| Metric | Your site | What it means |
|---|---|---|
| Domain Authority | **5** | Effectively new. Not fatal — key rivals sit at DA 4–10. |
| Organic keywords ranking | **0** | You rank for nothing. |
| Monthly organic traffic | **0** | Zero search visibility. |
| Backlinks / referring domains | **7 / 6** | Nearly no authority signal. |
| Google Search Console connected | **❌ No** | You are flying blind. |
| Google Analytics connected | **❌ No** | No conversion data. |
| robots.txt | **❌ Missing** | |
| sitemap.xml | **❌ Missing** | Google must guess your 35 pages exist. |
| Structured data (schema) | **❌ None** | No rich results, no entity understanding. |
| Unique title/description per page | **❌ No — all 35 pages share one** | **Critical. See §2.** |
| Content in raw HTML | **❌ No — JavaScript-only** | **Critical. See §2.** |

### The most important number in this document

> **Your closest local competitor, littleinventors.in, has 237 referring domains. You have 6.**
> They get ~695 organic visits/month at DA 10. That is the benchmark to beat, and it is beatable — but the link gap is the single largest structural deficit.

---

## 2. ✅ The two blockers — both now fixed

Nothing in this strategy worked until these were fixed, because **Google had almost nothing to rank.** Both are now resolved in the codebase and take effect on the next deploy.

### Blocker 1 — The site was a JavaScript-only SPA · **FIXED**

Fetching `https://brollyjuniors.com` used to return an empty shell:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

No H1. No body copy. No address. No phone number. All 35 pages of your excellent curriculum content were invisible in the raw HTML.

Google *can* render JavaScript, but it does so on a delayed second pass, inconsistently, and with lower confidence. Bing, and every AI search engine (ChatGPT Search, Perplexity, Google's AI Overviews) largely **cannot**. In 2026, being invisible to AI search is as costly as being invisible to Google.

**What was built.** The site is prerendered to static HTML at build time. `npm run build` now runs three steps — the normal Vite build, an SSR build of `src/entry-server.jsx`, then `scripts/prerender.mjs`, which renders every route with `renderToString` and writes a real HTML file per URL.

```
prerender: 137 pages written (136 indexable) + 404.html
sitemap:   136 URLs -> dist/sitemap.xml
```

Notes on the approach, because they matter for maintenance:

- **No new dependency.** `react-snap` and `vite-plugin-prerender` both drive a headless Chrome — around 300MB installed, and prone to breaking on hosts without the system libraries. The content here is entirely static, so `renderToString` produces identical HTML in about a second for the whole site.
- **It is still a normal SPA in the browser.** `src/main.jsx` hydrates the prerendered markup instead of rendering from scratch, so navigation stays instant. The dev server is unchanged.
- **The build fails loudly** if any route throws, rather than quietly shipping the empty shell it used to.
- **Soft 404s are gone.** Unknown URLs now return a real 404 status and a `noindex` page, instead of serving a 200 copy of the home page for every typo.

⚠️ **Deploy with `npm run build`, not `vite build`.** The second one only does step one and puts the empty shell back. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

### Blocker 2 — One title and description for all 35 pages · **FIXED**

Every route used to return:

```
Title:       Brolly Juniors — Where curiosity finds shelter
Description: Brolly Juniors — Hyderabad's joyful learning home where children build...
```

Your abacus page, your Class 8 Python page, and your schools page were identical to Google. **You cannot rank for "abacus classes in hyderabad" on a page whose title does not contain those words.**

**What was built.** 136 indexable pages, 136 unique titles, 136 unique descriptions — verified on every build:

```
audit: 136 indexable pages checked
unique titles: 136   unique descriptions: 136
No problems found.
```

Beyond the titles, each page now carries the keyword in its **H1 and opening copy** as well, which is the part that actually decides relevance. `node scripts/keyword-map.mjs` reads the built HTML and reports any page where that is not true — the result is [docs/KEYWORD_MAP.md](docs/KEYWORD_MAP.md), and every commercial page currently passes all three checks.

Each page also emits a full structured-data graph: `EducationalOrganization` + `LocalBusiness`, `WebSite`, `BreadcrumbList`, and then `Course`, `FAQPage`, `Article` or `Service` depending on what the page is.

> **One deliberate omission.** There is no `AggregateRating` in the schema. Publishing a rating you cannot substantiate is a documented way to get rich results disabled for a domain permanently. It goes in when there are real reviews to generate it from — which is another reason [docs/REVIEWS_PLAYBOOK.md](docs/REVIEWS_PLAYBOOK.md) is the priority.

### ⚠️ A third issue worth knowing

Your `.htaccess` shows the old site used keyword-rich URLs that now 301-redirect into generic SPA routes:

```
abacus-classes-in-hyderabad.html   →  /junior-skills/abacus
ai-classes-for-kids-in-hyderabad.html → /ai-for-kids
```

The redirects are correctly implemented (good — equity is preserved). But note that the *old* URLs contained your target keywords and the new ones do not. This is survivable — on-page titles and H1s matter far more than URL slugs — but it means the new pages must work harder. Do **not** change these URLs again; repeated migrations compound the damage.

The existing 301s were left exactly as they were. The new rules added to `.htaccess` sit *after* them, so nothing about the legacy redirects changed.

---

## 3. Competitor intelligence

> **Acted on.** Full analysis, the counter built for each competitor, and a quarterly monitoring routine: **[docs/COMPETITORS.md](docs/COMPETITORS.md)**. Summary below.

### Tier 1 — National aggregators (do not fight head-on)

| Competitor | DA | Threat | How to handle |
|---|---|---|---|
| **JustDial** | 60 | Ranks #5 for abacus Hyderabad | **Join them.** Get listed, collect reviews. Cheaper than outranking. |
| **Codingal** | 59 | Ranks #5 for kids coding Hyderabad via `/locations/in/hyderabad/` | Beat on *local depth*. Their page is a template with no real Hyderabad presence — no address, no local staff, no local photos. |
| **UrbanPro** | 49 | Ranks #6, "Top 10 Coding for Kids in Hyderabad" | **Get listed on it.** Be one of their top 10. |
| **WhiteHatJr / Cuemath** | High | Brand awareness | Trust is damaged post-Byju's. Your brief's "calm competence" positioning is the direct counter. |

**Key insight:** aggregators occupy organic slots but *cannot occupy the Local Pack* — they have no Hyderabad premises. The top 3 visual slots are structurally reserved for real local businesses. That is your lane.

### Tier 2 — Hyderabad abacus incumbents (directly beatable)

| Competitor | DA | Position | Weakness to exploit |
|---|---|---|---|
| **Sharp Minds Abacus** (Narayanaguda) | — | **Local Pack #1** | Single-subject, single-location. No AI/coding. |
| **SIP Abacus** (Himayatnagar) | — | Local Pack #2 | Franchise sub-page on `centres.sipabacus.com` — no independent authority. |
| **Little Achievers** | — | Local Pack #3 | **No website at all.** Pure GBP listing. |
| **abacusclass.in** | **4** | **Organic #1** — 81 clicks/mo | **DA 4. You are DA 5.** Their page is thin. This ranking is yours to take. |
| **UCMAS Telangana** | 7 | Organic #8 | Franchise, single subject. |
| **Aristokids** | 34 | Organic #9 | Listicle/blog, not a real provider. Get *featured on it*. |

### Tier 3 — Hyderabad coding/STEM (your real rival)

| Competitor | DA | Backlinks / Ref domains | Traffic | Notes |
|---|---|---|---|---|
| **littleinventors.in** | **10** | **501 / 237** | ~695/mo | **The benchmark.** 121 ranking keywords. Robotics + coding + tuition. |
| **Acharya Coding School** | — | — | — | Local Pack #3 for kids coding. |

**Exploitable weakness at LittleInventors:** they rank for `robotics classes for kids hyderabad` and `coding classes for kids in hyderabad` **on their `/contact-us/` page** — a page with no curriculum content, built to convert nobody. A real, deep, dedicated program page will outrank a contact page on relevance every time.

### 🎯 The single biggest gap in the market

Search **"coding classes for kids in hyderabad"** and the Local Pack returns:

1. NextGen Coding Academy — **medical coding** training
2. Transcode Solutions — **medical coding** institute
3. Acharya Coding School

Two of the top three results are for *medical billing coding*, not children. **Google has no strong local business entity for kids' coding in Hyderabad.** The category is unclaimed. A properly configured Google Business Profile can take it.

**What was built against each competitor:**

| Competitor weakness | The counter, now live |
|---|---|
| Codingal's Hyderabad page is a template with no local presence | `/python-for-kids` carries a local-depth section — in-person batches of eight, the same educator weekly, batch times built around Hyderabad traffic — plus four neighbourhood pages and a NAP block with map |
| LittleInventors ranks on a `/contact-us/` page with no curriculum | 51 Python pages with real depth: a hub, five class pages, and 45 module pages each with their own hook, big idea, misconception and word bank |
| abacusclass.in holds organic #1 at DA 4 with a thin page | `/junior-skills/abacus` — keyword in title, H1 and opening copy, ten-level curriculum, `Course` schema, a linked 1,400-word guide, and four area pages pointing at it |
| Two of three local results for kids coding are *medical* coding | `/python-for-kids` opens a section headed "Coding for children, not medical coding", and the schema `knowsAbout` names Python and AI for children explicitly |
| Post-Byju's distrust of the national brands | `/ai-for-kids` says plainly that parents are fairly wary and declines to make the claim a competitor would make. The guides do the same at length |
| Aristokids (DA 34) ranks #9 — a link target, not a rival | Outreach email written, [docs/LINK_BUILDING.md](docs/LINK_BUILDING.md) source 2 |

---

## 4. Keyword strategy

> **Mapped and shipped.** Every keyword below now has a page, and [docs/KEYWORD_MAP.md](docs/KEYWORD_MAP.md) — regenerated from the built HTML — confirms the keyword is present in each page's title, H1 and opening copy.

### Priority 1 — "Near me" & Maps terms (highest value, Maps-driven)

| Keyword | Volume/mo | Difficulty | CPC | Notes |
|---|---|---|---|---|
| `phonics classes near me` | **210** | 16 | **₹70** | Highest commercial value found. Won via GBP. |
| `abacus classes near me` | High | Low | — | Won via GBP. |
| `coding classes for kids near me` | High | Low | — | Category is **unclaimed** locally. |

> "Near me" searches are resolved almost entirely by Google Business Profile, not by your website. **This is why §5 is the most important section in this document.**

### Priority 2 — Hyderabad commercial terms (your money pages)

| Keyword | Volume/mo | SEO Difficulty | Target page |
|---|---|---|---|
| `abacus classes in hyderabad` | **170** | **14** (easy) | `/junior-skills/abacus` |
| `best abacus classes in hyderabad` | 20 | **11** (easy) | `/junior-skills/abacus` |
| `phonics classes in hyderabad` | 20 | 17 | `/junior-skills/phonics` |
| `coding classes for kids in hyderabad` | Low | **4** (very easy) | `/python-for-kids` |
| `robotics classes for kids hyderabad` | Low | **4** | Consider a page |
| `vedic maths classes in hyderabad` | Low | Low | `/junior-skills/vedic-maths` |
| `ai classes for kids in hyderabad` | Low | **4** | `/ai-for-kids` |
| `public speaking classes for kids hyderabad` | Low | Low | `/junior-skills/public-speaking` |

**Note on low volumes:** Ubersuggest under-reports city-level data, and these terms *are* being searched — the ₹70 CPC on phonics proves advertisers see real volume. Treat these as directionally correct, not absolute. Google Search Console (once connected) will give you the true numbers.

### Priority 3 — Neighbourhood long-tail (fast, uncontested wins) · **4 pages live**

Zero competition. One page per area you actually serve.

| Page | Targets |
|---|---|
| `/kids-classes-in-kondapur` | abacus / phonics / coding classes in Kondapur |
| `/kids-classes-in-madhapur` | classes in Madhapur and HITEC City |
| `/kids-classes-in-gachibowli` | classes in Gachibowli |
| `/kids-classes-in-kukatpally` | classes in Kukatpally and KPHB |

Each has genuinely distinct content — who enquires from that area and why, the travel reality at 5pm, area-specific questions, `Service` structured data naming the area, and the neighbouring localities. They are linked from the footer, `/contact` and `/resources`.

⚠️ **Thin, duplicated location pages are a known Google penalty pattern**, so two safeguards are built in:

1. `src/data/locations.js` has a `published` flag per area. Set it to `false` and the route, the sitemap entry and every internal link disappear together. **Only publish areas you can honestly take an enquiry from.**
2. The heading says "classes **for** Kondapur families" and only becomes "classes **in** Kondapur" when `address.neighbourhood` matches. Overstating where the room is gets Business Profiles suspended.

Each page also carries three `TODO` fields — a real parent quote, the actual route from your centre, and the schools your students there attend. **Filling those in is what turns a good area page into an unbeatable one**, and it is information no competitor has.

Remaining areas to consider once these prove out: Hitech City, Miyapur, Manikonda, Nallagandla. Adding one is an entry in `locations.js` and nothing else.

### Priority 4 — Informational content (authority building) · **6 guides live**

Long-tail, low competition, builds topical authority and earns links. All six are written and published at `/resources`:

| Guide | Targets |
|---|---|
| `/resources/what-age-should-a-child-start-phonics` | at what age should a child start phonics |
| `/resources/is-abacus-good-for-kids` | is abacus good for kids |
| `/resources/abacus-vs-vedic-maths-for-children` | abacus vs vedic maths for children |
| `/resources/should-my-child-learn-ai-or-coding-first` | should my child learn AI or coding first |
| `/resources/teach-kids-to-use-chatgpt-safely` | how to teach kids to use ChatGPT safely |
| `/resources/python-projects-for-class-8-students` | python projects for class 8 students |
| `/resources/cbse-ai-curriculum-class-9-explained` | CBSE class 9 AI curriculum |

`/resources` itself was a page that described guides without linking to any — thin by any definition. It is now a real hub with `ItemList` schema.

Each guide opens with a **quick answer written to stand alone**, because that passage is what a featured snippet or an AI Overview lifts, and it has to make sense with no page around it. Each carries `Article` and `FAQPage` schema.

The editorial rule is the thing that makes them work: **say the inconvenient part**. "Is abacus good for kids?" has a section headed *What it is oversold as*, listing claims we could have made and did not. That costs a little in the short term and is the most persuasive thing on the site.

**The 90 curriculum module pages are also now live and indexed.** `aiModuleDetails.js` and `pythonModuleDetails.js` are 70KB and 75KB of genuine curriculum — the hook, the big idea, the common misconception, the word bank, written per module. **Almost no competitor in this market has content of this depth**, and until now all of it was locked inside JavaScript where Google could not see it. A module page with no unique seed content stays out of the index rather than diluting the ones that have it.

---

## 5. 🥇 Google Business Profile — where your #1 actually lives

**This is the highest-ROI action in this entire document, it is free, and it does not require a single line of code.**

> 📋 **Every word you need to paste has been written for you: [docs/GBP_SETUP.md](docs/GBP_SETUP.md).** Business description, all nine service entries, ten seeded Q&As, a 20-shot photo list, a year of post ideas, and the exact category set that claims the unoccupied kids-coding slot. About 90 minutes of clicking. The checklist below is the summary.

The data proves it: for `abacus classes in hyderabad`, positions **1, 2 and 3 are all Local Pack**. The #1 *organic* result gets 81 clicks — the Local Pack results above it get far more, and one of them (Little Achievers) has **no website at all**. They outrank everyone on GBP strength alone.

### Setup checklist

- [ ] **Claim & verify** your Google Business Profile (video verification is standard in India now).
- [ ] **Primary category:** `Educational institution`. **Secondary:** `Tutoring service`, `Computer training school`, `After school program`, `Coaching center`.
- [ ] **Exact NAP** (Name, Address, Phone) — must match your website footer *character for character*. Use `+91 70360 44555` consistently everywhere.
- [ ] **Full opening hours**, including batch times.
- [ ] **Services:** add all seven programs as individual service entries with descriptions and pricing.
- [ ] **Photos — 20+ minimum.** Real classroom, real children (with parental consent), the abacus, the whiteboard, the entrance, the street view. Geotagged. **Add new photos weekly** — freshness is a documented ranking factor.
- [ ] **Products:** list each program as a Product with image + price.
- [ ] **Q&A:** seed 8–10 questions yourself and answer them (your existing FAQs are ready-made).
- [ ] **Google Posts:** publish weekly — student projects, batch announcements, tips.
- [ ] **Booking link** → `/book-free-demo`.

### Reviews — the deciding factor

> 📋 **Full playbook, with the ask scripted and five reply templates: [docs/REVIEWS_PLAYBOOK.md](docs/REVIEWS_PLAYBOOK.md).**

Local Pack ranking is driven more by review **quantity, velocity and recency** than by anything else.

- **Target: 50+ reviews at 4.8★ within 6 months.** You have 200+ families — this is entirely achievable.
- Ask in person at the end of a class, when the parent has just seen their child present something. Not by cold SMS.
- Send a **direct review link** (get it from your GBP dashboard) — every extra tap loses ~30% of people.
- **Aim for ~5–8 new reviews per month, steadily.** 40 reviews in one week looks like fraud and can suspend the listing.
- **Reply to every review within 48 hours**, using the program name in your reply ("So glad Aarvi is enjoying Vedic Maths…"). Replies are indexed and reinforce keyword relevance.
- Coach parents gently to mention specifics: the program name, the area they travel from, their child's outcome. *"Best abacus class in Kondapur, my daughter finished Level 3"* is worth ten generic 5-star ratings.

### Local citations — build these 20

> 📋 **The full list, with the exact NAP text to paste into each: [docs/CITATIONS.md](docs/CITATIONS.md).**

Consistent NAP across directories is a core Local Pack signal. Your competitors rank on JustDial; you should be there too.

**Tier 1 (do first):** Google Business Profile · JustDial · UrbanPro · Sulekha · Bing Places
**Tier 2:** Apple Maps · IndiaMART · Yellow Pages India · Hotfrog · Tupalo · Cylex · TradeIndia
**Tier 3:** Hyderabad-specific — LBB Hyderabad, parenting groups, apartment communities, school directories

The website side is ready for this: `src/data/site.js` holds the address once, the footer and contact page render it, and each directory URL you paste into `socialProfiles` is emitted as `sameAs` in the structured data — which is how Google connects the site, the listings and the Business Profile into one entity.

---

## 6. The 90-day execution plan

> 📋 **Live version with current status: [docs/90_DAY_PLAN.md](docs/90_DAY_PLAN.md).**

### Phase 1 — Weeks 1–2: Foundation

| # | Action | Owner | Impact | Status |
|---|---|---|---|:-:|
| 1 | **Claim & fully populate Google Business Profile** | Marketing | 🔴 Highest | ☐ |
| 2 | Fill in the address block in `src/data/site.js` | Marketing → Dev | 🔴 High | ☐ |
| 3 | **Connect Google Search Console + Analytics 4** | Dev | 🔴 Critical — you are blind without it | ☐ |
| 4 | Ship `robots.txt` + `sitemap.xml` | Dev | 🔴 High | ✅ Generated at build, 136 URLs |
| 5 | Ship unique title/meta per page | Dev | 🔴 Highest on-page | ✅ 136/136 unique |
| 6 | Ship LocalBusiness + Course + FAQ schema | Dev | 🟠 High | ✅ Plus Article, Service, Breadcrumb, ItemList |
| 7 | Submit sitemap in Search Console | Dev | 🔴 High | ☐ |
| 8 | Add full NAP + embedded Google Map to `/contact` | Dev | 🟠 High | ✅ Renders once item 2 is done |

### Phase 2 — Weeks 3–6: Content & proof

| # | Action | Impact | Status |
|---|---|---|:-:|
| 9 | **Enable prerendering** so all content is in raw HTML | 🔴 Highest technical | ✅ 137 pages |
| 10 | Rewrite the program pages around their target keyword — keyword in H1, first 100 words, and title | 🔴 High | ✅ Audited by `scripts/keyword-map.mjs` |
| 11 | **Review campaign: reach 25 Google reviews** | 🔴 Highest local | ☐ |
| 12 | Build the top 20 citations (Tier 1 first) | 🟠 High | ☐ |
| 13 | Publish 4 neighbourhood pages | 🟠 High | ✅ Kondapur, Madhapur, Gachibowli, Kukatpally |
| 14 | Add real photos of the centre & students throughout the site | 🟠 Medium | ☐ Needs a camera and consent |
| 15 | Weekly Google Posts begin | 🟡 Medium | ☐ A year of ideas in GBP_SETUP.md |

### Phase 3 — Weeks 7–12: Authority & links

| # | Action | Impact | Status |
|---|---|---|:-:|
| 16 | **Link building: 6 → 50+ referring domains** (see §7) | 🔴 Highest long-term | ☐ |
| 17 | Publish informational articles from your curriculum data | 🟠 High | ✅ 6 guides + 90 module pages |
| 18 | **Reach 50 Google reviews** | 🔴 High | ☐ |
| 19 | Get featured on Aristokids-style "best of Hyderabad" listicles | 🟠 High | ☐ Email written |
| 20 | Get listed in UrbanPro's "Top 10 Coding for Kids in Hyderabad" | 🟠 High | ☐ |
| 21 | Launch Google Ads on `phonics classes near me` (₹70 CPC, small budget) to buy data while SEO matures | 🟡 Medium | ☐ |

---

## 7. Closing the link gap (6 → 50 referring domains)

> 📋 **Seven sources, with the outreach emails written: [docs/LINK_BUILDING.md](docs/LINK_BUILDING.md).**

This is your largest structural deficit and the slowest thing to fix, so start now. **Never buy links** — in this niche, a manual penalty would be terminal.

**Realistic sources, in order of ease:**

1. **School partnerships** — you already run these. Every partner school's website should link to you as their curriculum partner. *Highest-authority links available to you, and you have earned them.* Make it a clause in the partnership agreement.
2. **Local press** — Telangana Today, The Hans India, Deccan Chronicle Hyderabad. Pitch a real story: *"Hyderabad children are learning AI safety before their teachers"* — that is a genuine news hook.
3. **Parenting blogs & Hyderabad city sites** — LBB Hyderabad, local mom-blogger networks. Offer a free workshop in exchange for coverage.
4. **"Best of" listicles** — Aristokids (DA 34), delightedchamps (DA 12) and similar already rank for your keywords. Email them; being *featured on* a page ranking #9 is faster than outranking it.
5. **Free community workshops** — a free AI-safety session at a school, library, or apartment complex generates a link, a press mention, *and* leads.
6. **Student project showcase** — publish real student work publicly. Parents share it. Schools link to it. This is the most natural link magnet you have and costs nothing.
7. **Original local research** — survey your 200+ families on screen time / AI use and publish the findings. Journalists cite data.

---

## 8. What has been implemented

### Both blockers, closed

| # | Blocker | Resolution |
|---|---|---|
| 1 | JavaScript-only SPA — no content in raw HTML | **Prerendered.** 137 static HTML pages generated by `npm run build`. No headless browser, no new dependency |
| 2 | One title and description across 35 pages | **136 unique titles, 136 unique descriptions**, plus keyword in H1 and opening copy on every commercial page |

### Files added

| File | What it does |
|---|---|
| `src/entry-server.jsx` | SSR entry: renders a route to HTML and serialises its head tags |
| `scripts/prerender.mjs` | Writes one HTML file per route, plus `404.html` and `sitemap.xml` |
| `scripts/audit-seo.mjs` | `npm run audit:seo` — fails the build check on a missing title, description, canonical, H1, structured data, prerendered content, or a duplicate title. Also warns on the Google starter-guide items: skipped heading levels, link text that describes nothing, missing or empty `alt`, and pages nothing links to |
| `scripts/keyword-map.mjs` | Reads the built HTML and reports whether each page's target keyword is in its title, H1 and opening copy → `docs/KEYWORD_MAP.md` |
| `src/lib/routes.js` | The single route manifest driving prerendering and the sitemap. Throws on duplicates |
| `src/lib/head.js` | One description of `<head>` per route, shared by the prerenderer and the client |
| `src/lib/schema.js` | The JSON-LD graph. Omits any field not filled in rather than guessing |
| `src/lib/faqs.js` | Resolves FAQs by route, so the visible FAQ and the `FAQPage` markup can never disagree |
| `src/lib/analytics.js` | GA4, SPA page views, and conversion tracking on every WhatsApp, phone and email tap |
| `src/data/locations.js` | Four neighbourhood pages, with a `published` flag and honest "in" vs "for" wording |
| `src/data/articles.js` | Six long-form parent guides |
| `src/pages/LocationPage.jsx`, `Article.jsx`, `Resources.jsx` | The pages that render them |
| `.env.example`, `.gitignore` | Analytics configuration, kept out of version control |
| `docs/` × 8 | The execution playbooks listed at the top of this document |

### Files changed

| File | What changed |
|---|---|
| `package.json` | `npm run build` is now client → SSR → prerender. **`vite build` alone no longer produces a deployable site** |
| `index.html` | SEO tags replaced by a `<!--head-->` marker the prerenderer fills in per page |
| `vite.config.js` | Optional Search Console verification tag injected from the environment |
| `src/main.jsx` | Hydrates prerendered markup; still client-renders in dev |
| `src/lib/seo.js` | Extended to module, location and article routes; adds keyword, breadcrumb and course data |
| `src/components/Seo.jsx` | Now applies the shared head description and reports page views |
| `public/.htaccess` | Serves prerendered pages with no trailing-slash redirect; returns a real 404 instead of a soft one. Legacy 301s untouched |
| `public/robots.txt` | Notes that AI crawlers are deliberately welcome |
| `public/sitemap.xml` | **Deleted** — generated at build time now, so it cannot go stale |
| `src/data/site.js` | Address, opening hours, areas served, social profiles — one source of truth for NAP |
| `src/data/infoPages.js` | Keyword-led H1s and opening copy; the thin `/resources` entry removed |
| `src/pages/Contact.jsx`, `Footer.jsx` | NAP block, opening hours, map embed, area and guide links |
| `src/pages/*.jsx` | Target keyword in the H1 and first 100 words; competitor-counter sections on the AI and Python hubs |
| `src/styles/global.css` | Styles for the NAP block, hours, map, link lists and article layout |

### Verified

```
prerender: 137 pages written (136 indexable) + 404.html
sitemap:   136 URLs -> dist/sitemap.xml
audit:     136 indexable pages checked
           unique titles: 136   unique descriptions: 136
           No problems found.
```

---

### Still requires your action

Four things, in order of how much they matter. The first two are worth more than everything above.

**1. Google Business Profile — the biggest single win, and only you can do it.**
Positions 1, 2 and 3 for your money keywords are Local Pack, and one business currently holding one of them has no website at all. Every word to paste is written in [docs/GBP_SETUP.md](docs/GBP_SETUP.md) — description, nine services, ten Q&As, the 20-shot photo list, the category set that claims the vacant kids-coding slot, and a year of post ideas. About 90 minutes.

**2. Reviews — the deciding factor within the Local Pack.**
You have 200+ families and no reviews. Target 50 at 4.8★ within six months, at **five to ten a month** — forty in one week looks like fraud and can suspend the listing. The ask is scripted and there are five reply templates in [docs/REVIEWS_PLAYBOOK.md](docs/REVIEWS_PLAYBOOK.md).

**3. Search Console & Analytics — 30 minutes, and the code is already in place.**
Create the accounts, paste the GA4 ID into `.env`, rebuild, submit the sitemap. Step by step in [docs/ANALYTICS_SETUP.md](docs/ANALYTICS_SETUP.md). Then use URL Inspection on `/junior-skills/abacus` to confirm with your own eyes that Google now sees a full page instead of an empty div.

**4. Citations and links.**
[docs/CITATIONS.md](docs/CITATIONS.md) — 20 listings, about four hours, text supplied. [docs/LINK_BUILDING.md](docs/LINK_BUILDING.md) — start with your school partners, because you have already earned those links and a clause in the partnership agreement makes every future one automatic.

**Plus one small unblocking edit:** fill in the address block in `src/data/site.js`. It is currently blank by design — a wrong address in structured data is worse than none, so nothing was invented. Filling it in switches on the map, the NAP block, the geo tags and the complete LocalBusiness schema in one edit.

**And one thing worth doing when you can:** photograph the real centre and real students, with written parental consent. The site currently uses illustrations, which are fine — but photographs of a room a parent can picture their child in convert better, and they give the Business Profile something to publish every week.

---

## 9. How to measure success

Track monthly. Ignore vanity metrics.

| Metric | Now | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Google reviews | ? | 25 | 50 | 100 |
| Local Pack top-3 (core terms) | 0 | 2 | 5 | 8 |
| Organic keywords ranking | **0** | 40 | 120 | 300 |
| Monthly organic sessions | **0** | 150 | 600 | 1,500+ |
| Referring domains | **6** | 20 | 50 | 100 |
| Domain Authority | **5** | 8 | 12 | 18 |
| **Free trial bookings from organic** | **0** | 8/mo | 25/mo | 60/mo |

Two rows to add now that they can actually be measured:

| Metric | Now | 3 months | 6 months |
|---|---|---|---|
| Pages indexed (of 136 submitted) | 0 | 100 | 136 |
| WhatsApp + phone taps from organic | unmeasured | 30/mo | 100/mo |

> The free-trial row is the only one that pays salaries. **This is already tracked** — there is no booking form on the site, so the conversion is the WhatsApp or phone tap, and `src/lib/analytics.js` fires a `generate_lead` event on every one of them, tagged with the method and the page. The one thing you must still do is mark `generate_lead` as a key event in GA4, which takes two minutes and is step 1 of [docs/ANALYTICS_SETUP.md](docs/ANALYTICS_SETUP.md). Until you do, GA4 records the events but will not count them as conversions.

---

## 10. The one-paragraph version

Your website ranked for nothing because Google could not read it — every page shared one title and all the content was locked behind JavaScript. **That is now fixed: 137 real HTML pages, 136 unique titles and descriptions, structured data throughout, four neighbourhood pages and six long-form guides, all verified on every build.** You are competing against rivals with Domain Authority 4–10, and on page quality you now beat them. But your real prize was never organic rank: the top three slots for your money keywords are Google Maps results, one current winner has no website whatsoever, and the "kids coding" local category in Hyderabad is so unclaimed that Google is filling it with *medical billing* institutes. **What remains is the part no code can do — claim your Google Business Profile, get 50 genuine reviews from your 200+ families, and close the 6-vs-237 referring-domain gap with your school partners.** The site is now ready to convert that work into rank. Do those three things and #1 in Hyderabad is realistic within two quarters.

---

## 11. Deploy checklist

The build changed. Before the next release:

```bash
npm run build          # client → SSR → prerender. NOT `vite build`
npm run audit:seo      # must print "No problems found."
```

Then upload the whole of `dist/` to `/public_html`, **including the `.htaccess` dotfile** — most FTP clients hide it, and without it every page except the home page will 404.

Then verify in production:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://brollyjuniors.com/junior-skills/abacus   # 200, no redirect
curl -s -o /dev/null -w "%{http_code}\n" https://brollyjuniors.com/does-not-exist         # 404, not 200
curl -s https://brollyjuniors.com/sitemap.xml | grep -c "<loc>"                           # 136
```

Full instructions and the four post-deploy checks: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

*Data: Ubersuggest, Hyderabad (locId 1007740), July 2026. Volumes are directional; confirm against Search Console once connected.*
