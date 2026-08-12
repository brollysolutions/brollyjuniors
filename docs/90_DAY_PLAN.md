# The 90-day execution plan

Rewritten to reflect what has actually been built. Everything marked ✅ is done and in the repository. Everything marked ☐ needs a person — and in most cases only one person can do it.

**The short version:** the engineering is finished. What decides whether this works now is the Google Business Profile and the reviews, and neither of those can be written in code.

---

## Phase 1 — Weeks 1–2: foundation

| # | Action | Owner | Status |
|---|---|---|:-:|
| 1 | **Claim & fully populate Google Business Profile** | Marketing | ☐ **Do this first** — [GBP_SETUP.md](GBP_SETUP.md) has every word to paste |
| 2 | Fill in the address block in `src/data/site.js` | Marketing → Dev | ☐ Blocks items 6 and 8 |
| 3 | **Connect Search Console + Analytics 4** | Dev | ☐ 30 min — [ANALYTICS_SETUP.md](ANALYTICS_SETUP.md) |
| 4 | `robots.txt` + `sitemap.xml` | Dev | ✅ Sitemap now generated at build time from the route manifest — 136 URLs |
| 5 | Unique title + meta description per page | Dev | ✅ 136 pages, 136 unique titles, 136 unique descriptions, verified by `npm run audit:seo` |
| 6 | LocalBusiness + Course + FAQ + Breadcrumb schema | Dev | ✅ Emitted as one `@graph` per page |
| 7 | Submit the sitemap in Search Console | Dev | ☐ Two minutes, immediately after verifying |
| 8 | Full NAP + map + opening hours on `/contact` | Dev | ✅ Built. Renders the address as soon as step 2 is done |

### Week 1, in order, honestly

1. Collect the address, coordinates, and 20 photographs *(1 hour)*
2. Claim and verify the Business Profile *(1 hour + waiting)*
3. Fill in `src/data/site.js`, rebuild, deploy *(15 min)*
4. Search Console + GA4 + submit the sitemap *(30 min)*
5. Start asking for reviews at the end of every class *(ongoing, from day one)*

---

## Phase 2 — Weeks 3–6: content and proof

| # | Action | Status |
|---|---|:-:|
| 9 | **Prerender the site so content is in raw HTML** | ✅ **Blocker 1 fixed.** 137 static pages generated at build. No headless browser, no new dependency |
| 10 | Rewrite the program pages around their target keyword | ✅ Keyword in title, H1 and opening copy on every commercial page — audited by `scripts/keyword-map.mjs` |
| 11 | **Review campaign: reach 25 Google reviews** | ☐ [REVIEWS_PLAYBOOK.md](REVIEWS_PLAYBOOK.md) — the highest-value remaining item |
| 12 | Build the top 20 citations | ☐ [CITATIONS.md](CITATIONS.md) — about 4 hours, Tier 1 first |
| 13 | Publish 4 neighbourhood pages | ✅ Kondapur, Madhapur, Gachibowli, Kukatpally — unique copy each, `Service` schema, `published` flag |
| 14 | Real photographs of the centre and students throughout the site | ☐ Needs a camera and parental consent. Currently illustrations |
| 15 | Weekly Google Posts begin | ☐ A year of post ideas is in [GBP_SETUP.md](GBP_SETUP.md) step 9 |

### On the neighbourhood pages

They deliberately say "classes **for** Kondapur families" rather than "classes **in** Kondapur", and flip to "in" automatically when `address.neighbourhood` in `src/data/site.js` matches the area. Overstating a location is a documented cause of Business Profile suspension, and it is not worth the keyword.

They also carry three `TODO` fields — a real parent quote per area, the actual travel route from your centre, and the schools your students there attend. Filling those in is what turns a good area page into one that outranks everything else for that search. Nobody else in this market has that information.

---

## Phase 3 — Weeks 7–12: authority and links

| # | Action | Status |
|---|---|:-:|
| 16 | **Link building: 6 → 50+ referring domains** | ☐ [LINK_BUILDING.md](LINK_BUILDING.md). Start with school partners — you have already earned those |
| 17 | Publish informational articles from the curriculum | ✅ Six long-form guides at `/resources`, plus a real hub page replacing the previous thin one |
| 18 | **Reach 50 Google reviews** | ☐ |
| 19 | Get featured on "best of Hyderabad" listicles | ☐ Outreach email written — source 2 in [LINK_BUILDING.md](LINK_BUILDING.md) |
| 20 | Get listed in UrbanPro's "Top 10 Coding for Kids in Hyderabad" | ☐ Tier 1 citation |
| 21 | Google Ads on `phonics classes near me` (₹70 CPC, small budget) | ☐ Optional. Buys keyword data while SEO matures |

---

## What actually shipped

| Area | Before | Now |
|---|---|---|
| Pages in raw HTML | 0 | 137 |
| Unique titles | 1, shared across 35 pages | 136 |
| Unique meta descriptions | 1 | 136 |
| Structured data | none | Organization, LocalBusiness, WebSite, Course, FAQPage, Article, Service, BreadcrumbList, ItemList |
| Sitemap | hand-written, 35 URLs | generated, 136 URLs |
| Indexable pages | ~35, invisible to non-JS crawlers | 136, fully readable |
| Neighbourhood pages | 0 | 4 |
| Long-form guides | 0 | 6 |
| Analytics | none | GA4 with conversion tracking on every WhatsApp and phone tap |
| Soft 404s | every unknown URL served the site with a 200 | real 404 status, `noindex` 404 page |
| Automated checks | none | `npm run audit:seo`, `node scripts/keyword-map.mjs` |

---

## The honest ranking of what is left

1. **Google Business Profile.** Positions 1, 2 and 3 for your money keywords are Local Pack, and one current holder has no website at all. Nothing else comes close.
2. **Reviews.** The deciding factor within the Local Pack. You have 200+ families and no reviews. Five to ten a month, asked in person.
3. **The address in `src/data/site.js`.** One edit unlocks the map, the NAP block, the geo tags and the complete LocalBusiness schema.
4. **Search Console.** Not a ranking factor, but you cannot manage what you cannot see — and it will tell you within two weeks whether the prerendering worked.
5. **Links.** Slowest to build, so start now even though the payoff lands in month six. School partners first.
6. **Real photographs.** Illustrations are fine; photographs of a real room with real children convert better and give the Business Profile something to publish weekly.

Items 1, 2 and 6 cannot be done in code. That is not a limitation of the work — it is where the actual advantage is, because they are also the hardest things for a national competitor to copy.
