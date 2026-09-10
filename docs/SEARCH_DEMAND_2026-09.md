# Measured search demand — September 2026

The first real demand data this repository has had. Every number below was
pulled from the **Semrush India database on 10 September 2026** via the Semrush
connector. Nothing here is estimated, inferred from SERP inspection, or carried
over from a previous document.

The September 9 audit recorded that Ahrefs and Semrush both returned
`Insufficient plan` and correctly refused to substitute guesswork. Semrush
answered this time. Ahrefs still returns `Insufficient plan`, and there is still
no Search Console access.

**Read the caveat in §4 before acting on §2.** The Semrush API unit balance hit
zero partway through this research, so the question-level and related-term
expansion for each cluster was never retrieved.

---

## 1. Where the site actually stands

`domain_rank`, database `in`, 10 September 2026:

| Metric | Value |
|---|---|
| Semrush Rank | 5,846,752 |
| Organic keywords (India) | **3** |
| Organic traffic (India, est.) | **0** |
| Positions 1–3 / 4–10 / 11–20 | 0 / 0 / 0 |
| Positions 41–50 | 2 |
| Positions 61–70 | 1 |

The three keywords, in full — this is the entire organic footprint:

| Keyword | Position | Volume/mo | Ranking URL |
|---|--:|--:|---|
| public speaking classes for kids | 41 | 210 | `/junior-skills/public-speaking` |
| public speaking courses for kids | 50 | 210 | `/junior-skills/public-speaking` |
| cbse ai curriculum | 64 | 170 | `/resources/cbse-ai-curriculum-class-9-explained/` |

**Two things follow from this, and they matter more than any keyword choice.**

First, the site is pre-visibility. It is not underperforming against a mature
position — it has essentially no position to defend. The correct priority is
therefore indexing, crawl integrity and local presence, not keyword tuning.
That is what makes the 24 redirected sitemap URLs found in
[SEO_AUDIT_2026-09-10.md](SEO_AUDIT_2026-09-10.md) §2 the most expensive thing
on any list here.

Second, look at the third URL: Google indexed
`/resources/cbse-ai-curriculum-class-9-explained/` **with a trailing slash**,
while the canonical tag, the sitemap and `llms.txt` all name the slash-free
form. The server answered 200 at both. This is direct evidence — not a
prediction — that the duplicate was live and that Google resolved it *against*
the declared canonical. Fixed in `nginx.conf`; see the same audit, F9.

---

## 2. Measured volume and difficulty

Semrush India, 10 September 2026. KD is Semrush's 0–100 keyword difficulty.
Blank difficulty means Semrush returned no difficulty for a term at that volume.

### 2.1 The terms the site already targets

| Keyword | Volume/mo | KD | Targeted by |
|---|--:|--:|---|
| abacus classes | 18,100 | 11 | `/junior-skills/abacus` (as a national term, incidentally) |
| phonics classes | 6,600 | 14 | `/junior-skills/phonics` (same) |
| abacus classes in hyderabad | 320 | 8 | `/junior-skills/abacus` ← **declared target** |
| public speaking classes for kids | 210 | 14 | `/junior-skills/public-speaking` |
| public speaking course for kids | 210 | 16 | same |
| dance classes for kids in hyderabad | 30 | – | `/programs/dance` |
| phonics classes in hyderabad | 20 | – | `/junior-skills/phonics` ← **declared target** |
| vedic maths classes in hyderabad | 20 | – | `/junior-skills/vedic-maths` ← **declared target** |
| maths tuition in hyderabad | 10 | – | `/tuitions/mathematics` ← **declared target** |
| drawing classes for kids in hyderabad | 10 | – | `/programs/drawing-and-painting` |
| music classes for kids in hyderabad | 10 | – | `/programs/music` |
| summer camp for kids in hyderabad | 10 | – | – |
| **coding classes for kids in hyderabad** | **0** | – | `/python-for-kids` ← **declared target** |
| **public speaking classes for kids in hyderabad** | **0** | – | `/junior-skills/public-speaking` ← **declared target** |

### 2.2 Terms with real demand that nothing currently targets

| Keyword | Volume/mo | KD | Intent | Honest read |
|---|--:|--:|--:|---|
| phonics classes near me | 14,800 | 33 | local | Local Pack. Needs a verified GBP, not a page. |
| abacus classes near me | 8,100 | 33 | local | Same. |
| abacus class near me | 8,100 | 33 | local | Same query, same SERP. |
| vedic maths | 33,100 | 51 | informational | National, broad, mostly not a buyer. |
| coding for kids | 33,100 | 66 | informational | Dominated by national ed-tech. Not winnable. |
| abacus online classes | 4,400 | 18 | commercial | **The site genuinely offers online abacus.** Truthful and unclaimed. |
| abacus for kids | 4,400 | 35 | informational | Covered in substance by the abacus page. |
| vedic maths classes | 3,600 | 22 | commercial | Realistic within a year. |
| phonics for kids | 3,600 | 50 | informational | Harder. |
| coding classes for kids | 1,600 | 54 | commercial | Harder. |
| abacus training | 1,000 | 19 | informational | Winnable. |
| classes near me for kids | 880 | 24 | local | Local Pack again. |
| robotics classes for kids | 720 | **9** | commercial | **Lowest difficulty of anything with real volume.** |
| abacus levels | 590 | **5** | informational | Already answered on the abacus page ("Ten levels, grouped into five clear stages"). |
| extracurricular activities for kids | 390 | 15 | informational | Plausible. |
| chess classes for kids | 260 | 44 | commercial | – |
| abacus classes in kukatpally | 20 | – | local | Neighbourhood page exists. |

---

## 3. What this changes

### 3.1 The keyword contracts are aimed at phrases nobody searches

`src/lib/seo.js` records one `keyword` per route, and
[KEYWORD_MAP.md](KEYWORD_MAP.md) verifies it appears in the title, H1 and
opening copy. That mechanism works. What was never checked is whether the
phrase has any demand — and several of the most commercially important ones
have **zero measured volume**: `coding classes for kids in hyderabad` and
`public speaking classes for kids in hyderabad` both return 0.

Note the irony in the second: the page ranks 41st for
`public speaking classes for kids` (210/mo) — the term *without* "in hyderabad"
— which it was never aimed at.

**This is not an argument for rewriting the titles.** "X in Hyderabad" is the
correct framing for a single-centre business, it is what a local searcher types
into the Local Pack path, and the "near me" volumes in §2.2 confirm the local
intent is where the demand actually is. The finding is narrower and more
useful: *the declared keyword is a placement contract, not a demand estimate,
and it should not be read as one.* Where a zero-volume phrase and a real one
differ only by "in hyderabad", the page already contains both.

### 3.2 The realistic targets, in order

Ranked by demand × winnability × how truthfully the site can serve it today:

1. **The Local Pack** — `phonics classes near me` (14,800) and
   `abacus classes near me` (8,100) dwarf every other term here, and no on-page
   work reaches them. A verified Google Business Profile with reviews is the
   only route. This was already the top recommendation in the September 9 audit;
   the numbers now show *how much* is behind it.
2. **`robotics classes for kids`** — 720/mo at **KD 9**. The lowest-difficulty
   term with meaningful volume anywhere in this dataset, and
   `/programs/robotics` already exists and is substantial. It was also one of
   the 24 pages being 301'd away in production until this pass.
3. **`abacus online classes`** (4,400, KD 18) — the abacus page already has an
   "Online abacus classes" section, so this is truthful today. It is the single
   largest piece of demand the site can serve without a GBP.
4. **`vedic maths classes`** (3,600, KD 22) and **`abacus training`** (1,000,
   KD 19).
5. **`abacus levels`** (590, KD 5) — already answered on the page.

**Nothing above requires a new page**, and none should get one. Each is an
intent an existing page already serves; a page per keyword variation is the
doorway pattern Google's spam policies name explicitly.

---

## 4. What this data is not

- **It is not Search Console.** Semrush estimates from its own crawl and click
  model. It cannot show impressions, CTR, the queries the site is *nearly*
  ranking for, or anything about indexing. The positions-4–20 opportunity set
  the brief asks for still requires GSC and still does not exist.
- **It is incomplete, and stopped mid-research.** The Semrush API unit balance
  reached zero during this pass (`ERROR 132 :: API UNITS BALANCE IS ZERO`),
  before the question-level (`phrase_questions`) and related-term
  (`phrase_related`) reports for any cluster were retrieved. §2 is therefore a
  measured sample of terms chosen from the site's own declared targets, **not an
  exhaustive keyword universe**. Treat absence from this table as "not looked
  up", never as "no demand".
- **Zero volume is not zero searches.** Semrush reports 0 for terms below its
  reporting floor. `coding classes for kids in hyderabad` almost certainly gets
  a handful of searches a month; what the 0 rules out is that it is a *primary*
  target worth optimising a page around.
- **India database, desktop.** No mobile-specific or Telugu/Hindi-language
  figures were retrieved.

### To complete this properly

1. Top up Semrush API units, then run `phrase_questions` and `phrase_related`
   for: abacus, phonics, vedic maths, coding for kids, robotics for kids,
   public speaking for kids.
2. Grant Search Console access, or export: Performance → Search results → last
   16 months → **Queries** and **Pages**, plus Indexing → Pages. Drop the CSVs
   in `docs/data/`.
3. Re-run `phrase_these` for the same keyword list in 90 days to measure
   movement rather than position.

---

## 5. Sources

- Semrush `domain_rank`, `resource_organic`, `phrase_these` — database `in`,
  retrieved 10 September 2026.
- Volumes are Semrush's monthly average; KD is Semrush's 0–100 index.
- Ahrefs connector: `Insufficient plan` (unavailable, as in the previous audit).
- Google Search Console: no access.
