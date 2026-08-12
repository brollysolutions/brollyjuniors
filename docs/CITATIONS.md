# Local citations — the 20 listings, and the exact text for each

A citation is any listing of your name, address and phone number on another site. Google uses the consistency of those listings to decide how confident it is that the business is real and where it says it is. Consistency matters more than volume: five perfectly matching listings beat twenty with three different phone numbers.

Budget: about four hours total, spread over two weeks. Do Tier 1 first.

---

## The master record — copy from here every time

**Do not retype these fields. Copy and paste them.** A single "Rd." where the website says "Road" is a mismatch, and mismatches are the entire failure mode of this exercise.

| Field | Value |
|---|---|
| **Business name** | `Brolly Juniors` |
| **Street address** | *(from `src/data/site.js` → `address.streetAddress` — fill it in first)* |
| **Area** | *(→ `address.neighbourhood`)* |
| **City** | `Hyderabad` |
| **State** | `Telangana` |
| **PIN** | *(→ `address.postalCode`)* |
| **Country** | `India` |
| **Phone** | `+91 81868 44555` |
| **Email** | `brollyjuniors.in@gmail.com` |
| **Website** | `https://brollyjuniors.com` |
| **Category** | Educational institution / Tutoring service |
| **Founded** | *(year — fill in)* |

> **Fill in `src/data/site.js` before you start.** The website footer and the structured data both read from it, so getting it right there once is what makes every listing below consistent with the site.

### Short description (150 characters, for listings with tight limits)

```
Abacus, Phonics, Vedic Maths, Public Speaking, Python and AI classes for children aged 4 to Class 10 in Hyderabad. Batches of eight. Free trial class.
```

### Medium description (300 characters)

```
Brolly Juniors is a children's learning centre in Hyderabad for ages 4 to Class 10 — Abacus, Phonics, Vedic Maths, Public Speaking, Creative and Digital Skills, Python coding and Artificial Intelligence. Every batch is capped at eight children. Every new family gets one free trial class.
```

### Long description (750 characters)

Use the Google Business Profile description from [GBP_SETUP.md](GBP_SETUP.md) step 4, unchanged. Reusing the same text is correct here — this is not content that needs to be unique.

---

## Tier 1 — do these first (highest value in this market)

Your competitors rank on JustDial and UrbanPro. Rather than trying to outrank a DA 60 directory, be listed on it: for these searches, being one of the top results *inside* JustDial is faster and cheaper than beating JustDial.

| # | Directory | Notes | Done |
|---|---|---|:-:|
| 1 | **Google Business Profile** | See [GBP_SETUP.md](GBP_SETUP.md). Everything else is secondary to this. | ☐ |
| 2 | **JustDial** | Currently ranks #5 for "abacus classes in hyderabad". Free listing available; you will be called about paid options — the free listing is what matters here. | ☐ |
| 3 | **UrbanPro** | Ranks #6 with "Top 10 Coding for Kids in Hyderabad". Create a full institute profile; ask about inclusion in the top-10 listing once you have reviews. | ☐ |
| 4 | **Sulekha** | Strong in Hyderabad for tuition and classes. | ☐ |
| 5 | **Bing Places** | Ten minutes, and it can import directly from your Google listing. Bing cannot render JavaScript, which is one more reason the prerendering work mattered. | ☐ |

## Tier 2 — general directories

| # | Directory | Notes | Done |
|---|---|---|:-:|
| 6 | **Apple Maps** (Apple Business Connect) | Every iPhone parent asking Siri for "abacus classes near me". Routinely forgotten. | ☐ |
| 7 | **IndiaMART** | Broad Indian business directory with real domain strength. | ☐ |
| 8 | **Yellow Pages India** | | ☐ |
| 9 | **Hotfrog India** | | ☐ |
| 10 | **Tupalo** | | ☐ |
| 11 | **Cylex India** | | ☐ |
| 12 | **TradeIndia** | | ☐ |
| 13 | **Fyple / Bizidex** or similar | Low value individually; they add up as consistency signals. | ☐ |

## Tier 3 — Hyderabad and category specific (the ones that actually convert)

These are worth more per listing than Tier 2, because the audience is exactly right.

| # | Where | How | Done |
|---|---|---|:-:|
| 14 | **LBB Hyderabad** | City guide with real readership. Pitch an inclusion rather than filling a form. | ☐ |
| 15 | **Hyderabad parenting Facebook groups** | Join, participate honestly for a few weeks, then answer questions where you genuinely know the answer. Do not open with an advertisement. | ☐ |
| 16 | **Local apartment community groups** (MyGate, WhatsApp) | The Kondapur/Gachibowli belt runs on these. Offer a free workshop, not a flyer. | ☐ |
| 17 | **Local school directories** for the schools you partner with | | ☐ |
| 18 | **SkillClasses / class-finder aggregators** | Search "abacus classes hyderabad" and list on whatever appears on page one. | ☐ |
| 19 | **Practo-style / local service aggregators** covering education | | ☐ |
| 20 | **Telangana / Hyderabad business chamber listings**, if you are a member | | ☐ |

---

## The five rules

1. **Copy, never retype.** Every field, every time.
2. **One phone number everywhere.** `+91 81868 44555`. Not a second mobile, not a landline "for enquiries".
3. **Website URL with `https://` and no trailing slash**, exactly: `https://brollyjuniors.com`
4. **Never create a second listing** because you cannot log into the first. Recover the account instead. Duplicates split your signal and both rank worse.
5. **Fix the source first.** If the address ever changes, change `src/data/site.js`, deploy, update Google, *then* work through this list. Doing it in the other order guarantees a period where the site and the listings disagree.

---

## Also link these back into the website

As each profile goes live, paste its URL into the `socialProfiles` array in `src/data/site.js`. They are emitted as `sameAs` in the structured data, which is how Google connects "this website" to "that listing" to "this Business Profile" as one entity.

```js
export const socialProfiles = [
  'https://maps.app.goo.gl/…',        // Google Business Profile
  'https://www.facebook.com/…',
  'https://www.instagram.com/…',
  'https://www.justdial.com/…',
  'https://www.urbanpro.com/…',
  'https://www.sulekha.com/…',
];
```

Blank entries are skipped, so add them as you go and rebuild.

---

## Audit every quarter

Search Google for `"Brolly Juniors" "81868 44555"` and check the top 30 results. Any listing with an old address, a different phone number or a misspelled name is actively working against you. Correct it or get it removed.
