# Competitor intelligence, and what was done about it

Baseline data: Ubersuggest, Hyderabad (locId 1007740), July 2026, plus live SERP inspection.

This document does two things. It records who you are actually competing with, and — for each one — the specific thing that was built in response. The second half is the part that matters; competitor research nobody acts on is just reading.

---

## The one structural fact

**Aggregators cannot occupy the Local Pack.** JustDial, Codingal and UrbanPro hold organic positions for your keywords, but none of them has premises in Hyderabad, and the top three visual slots are structurally reserved for businesses that do.

That single asymmetry decides the strategy. You do not fight the aggregators for organic position 5; you take the three slots above them that they can never have, and you get listed *on* them in the meantime.

---

## Tier 1 — National aggregators: join, do not fight

| Competitor | DA | Position held | What was done |
|---|---|---|---|
| **JustDial** | 60 | #5 for abacus Hyderabad | Listing is Tier 1 in [CITATIONS.md](CITATIONS.md). Being in their top results is cheaper than outranking them. |
| **Codingal** | 59 | #5 for kids coding Hyderabad, via `/locations/in/hyderabad/` | Countered on local depth — see below. |
| **UrbanPro** | 49 | #6, "Top 10 Coding for Kids in Hyderabad" | Listing is Tier 1. The objective is to be *in* the top ten. |
| **WhiteHatJr / Cuemath** | High | Brand awareness | Countered on trust — see below. |

### Codingal's weakness, and the page built against it

Their Hyderabad page is a template. No address, no local staff, no photograph of a room in this city. It ranks on domain authority alone.

**Built:** `/python-for-kids` now carries an explicit local-depth section — in-person batches of eight, the same educator weekly, batch times built around Hyderabad school and traffic patterns, a curriculum that continues next year. Plus four neighbourhood pages with travel notes, and a NAP block and map on `/contact`.

A national template cannot answer "which batch suits a child coming from Kondapur at 5pm". That is the entire wedge.

### WhiteHatJr / Cuemath, and the trust counter

Trust in this category was damaged by several years of celebrity advertising, scripted teachers and promises about app-building nine-year-olds. Parents arriving at your site have often already been through that.

**Built:** `/ai-for-kids` now says so directly — that parents are fairly wary, that we will not claim your child will build a startup, and what a year actually produces. The brand brief calls this positioning "calm competence"; on the page it takes the form of declining to make the claim a competitor would make.

The guides at `/resources` do the same job at scale. "Is abacus good for kids?" contains a section titled *What it is oversold as* — including things we could have sold. That is the most persuasive thing on the site precisely because it costs us something.

---

## Tier 2 — Hyderabad abacus incumbents: directly beatable

| Competitor | DA | Position | Weakness |
|---|---|---|---|
| **Sharp Minds Abacus** (Narayanaguda) | — | Local Pack #1 | Single subject, single location, no AI or coding |
| **SIP Abacus** (Himayatnagar) | — | Local Pack #2 | Franchise sub-page on `centres.sipabacus.com` — no independent domain authority |
| **Little Achievers** | — | Local Pack #3 | **No website at all.** Pure Business Profile strength |
| **abacusclass.in** | 4 | **Organic #1**, 81 clicks/mo | DA 4 against your DA 5. Thin page |
| **UCMAS Telangana** | 7 | Organic #8 | Franchise, single subject |
| **Aristokids** | 34 | Organic #9 | A listicle, not a provider — a link target, not a rival |

**Little Achievers is the most instructive entry in this table.** They hold a top-three position with no website whatsoever. That is proof that the Local Pack is won on Business Profile strength and reviews, not on web pages — which is why [GBP_SETUP.md](GBP_SETUP.md) is the highest-priority document in this repository.

**abacusclass.in is the most winnable.** They hold organic #1 with DA 4 and a thin page. `/junior-skills/abacus` now has: the exact keyword in the title, H1 and opening copy; a ten-level curriculum broken out stage by stage; Course structured data; a linked long-form guide answering "is abacus good for kids"; and four area pages pointing at it. That is a materially better page than theirs on every axis Google measures.

**Aristokids is not a competitor.** It is a DA 34 page ranking #9 for your keyword — a link opportunity. The outreach email is in [LINK_BUILDING.md](LINK_BUILDING.md), source 2.

---

## Tier 3 — The real rival

### littleinventors.in — DA 10, 501 backlinks, 237 referring domains, ~695 visits/month, 121 ranking keywords

This is the benchmark. They are beating you on one thing and one thing only: **links**. 237 referring domains against your 6.

That is why [LINK_BUILDING.md](LINK_BUILDING.md) exists and why it starts in week one rather than month three. Links are the slowest asset to build, so the clock starts now.

**Their exploitable weakness:** they rank for `robotics classes for kids hyderabad` and `coding classes for kids in hyderabad` **on their `/contact-us/` page**. A contact page. No curriculum, no depth, built to convert nobody.

**Built against it:** `/python-for-kids` plus five class pages plus 45 Python module pages, each with its own unique content — the hook, the big idea, the common misconception, the word bank, the eight-session breakdown. A dedicated, deep, genuinely local program page outranks a contact page on relevance, given enough authority to be considered at all. The relevance side is now done; the authority side is the link work.

---

## 🎯 The unclaimed category

Search **"coding classes for kids in hyderabad"** and the Local Pack returns:

1. NextGen Coding Academy — **medical coding** training
2. Transcode Solutions — **medical coding** institute
3. Acharya Coding School

Two of the top three are for medical billing, not children. **Google has no strong local business entity for children's coding in Hyderabad.** The category is genuinely vacant.

**Built:**
- `/python-for-kids` opens a section headed *"Coding for children, not medical coding"*, stating plainly which one this is. It helps a confused parent and it helps Google classify the page.
- `EducationalOrganization` + `LocalBusiness` structured data with `knowsAbout` naming Python and AI for children.
- [GBP_SETUP.md](GBP_SETUP.md) specifies the exact category set that claims this space: `Educational institution` primary, with `Computer training school` and `After school program` secondary.

**This is the largest single opportunity in the market, and it closes.** Someone will claim it. It should be you, and the Business Profile is how.

---

## Monitoring — 20 minutes a quarter

Do this from a logged-out incognito window, with location set to Hyderabad. Personalised results will otherwise flatter you.

### Positions to record

| Keyword | Your Local Pack | Your organic | Who holds LP #1 | Who holds organic #1 |
|---|---|---|---|---|
| `abacus classes in hyderabad` | | | | |
| `abacus classes near me` | | | | |
| `phonics classes in hyderabad` | | | | |
| `phonics classes near me` | | | | |
| `coding classes for kids in hyderabad` | | | | |
| `vedic maths classes in hyderabad` | | | | |
| `ai classes for kids in hyderabad` | | | | |
| `public speaking classes for kids hyderabad` | | | | |

### The four questions to ask each quarter

1. **Has littleinventors' referring-domain count moved, and has yours closed any of the gap?** This is the real race.
2. **Has anyone claimed the kids-coding local category?** Check whether the medical coding institutes are still in the Local Pack. If a genuine children's coding centre appears there, the window is closing.
3. **What is abacusclass.in doing?** They hold organic #1 with a thin page. If it improves, so must yours.
4. **Are any new "best of Hyderabad" listicles ranking?** Each one is a link target — add it to the tracking table in [LINK_BUILDING.md](LINK_BUILDING.md).

### Tools

Ubersuggest's free tier is sufficient at this scale. Check: your referring domains, littleinventors', and the DA of any newcomer in the top ten. Once Search Console has three months of data it becomes the better source for your own positions — it reports actual impressions rather than a sampled estimate.
