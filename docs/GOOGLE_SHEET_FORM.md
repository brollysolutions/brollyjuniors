# Trial bookings → Google Sheet

Every "Book a free trial" button on the site opens a form. This is how that
form's answers end up as rows in a Google Sheet.

There is no server and no third-party form service in the middle. The browser
posts straight to a Google Apps Script web app that you own, running inside the
sheet itself. Nothing about it expires, and it costs nothing.

**One value has to be filled in before it works:** `formEndpoint` in
`src/data/site.js`. Until then the form still works — it hands the parent a
prefilled WhatsApp message instead, so no enquiry is lost — but nothing reaches
the sheet.

---

## Setup — about five minutes

### 1. Make the sheet

Create a Google Sheet on the account that should own the bookings
(`brollyjuniors.in@gmail.com`). Name it something like **Brolly Juniors — trial
bookings**. Leave it empty; the script creates its own tab and header row on the
first submission.

### 2. Add the script

In that sheet: **Extensions → Apps Script**.

Delete the sample `function myFunction() {}`, then paste the entire contents of
[`scripts/google-sheet-endpoint.gs`](../scripts/google-sheet-endpoint.gs) and
press **Save** (the disk icon).

### 3. Deploy it as a web app

**Deploy → New deployment**. Click the gear next to "Select type" and choose
**Web app**. Then:

| Field | Set it to |
| --- | --- |
| Description | `Trial bookings` (anything) |
| Execute as | **Me** |
| Who has access | **Anyone** |

Press **Deploy**. Google will ask you to authorise the script the first time —
it will warn that the app "isn't verified", because it is your own unpublished
script. Choose **Advanced → Go to (project name)** and allow it.

> **"Who has access: Anyone" is required.** It is what lets a parent's browser
> post to the endpoint without a Google login. It does *not* make the sheet
> public: this script only ever appends a row, and never reads one back out. If
> this is left as "Only myself", every submission fails — the endpoint answers
> with Google's sign-in page instead of the JSON the site expects, and the form
> will say so rather than pretending it worked.

### 4. Copy the URL into the site

Google shows a **Web app URL** ending in `/exec`:

```
https://script.google.com/macros/s/AKfycb...long.../exec
```

Open `src/data/site.js` and paste it in:

```js
formEndpoint: 'https://script.google.com/macros/s/AKfycb.../exec',
```

That is the only change. Every form on the site reads this one value.

### 5. Check it

Open that `/exec` URL in a browser tab. A correct deployment answers:

```json
{"result":"success","ok":true,"endpoint":"brolly-juniors trial bookings"}
```

If you get a Google sign-in page instead, "Who has access" is still set to
"Only myself" — go back to step 3.

Then run the site, click any **Book a free trial** button, submit the form, and
watch a row appear in the sheet.

---

## What lands in the sheet

One row per booking, on a tab called **Trial bookings**, in these columns:

| Column | From |
| --- | --- |
| Submitted at | The server clock, in IST |
| Parent name | required |
| Phone | required |
| Email | |
| Child's name | |
| Child's age | required |
| Class | |
| Program | Preselected when the form is opened from a programme page |
| Preferred mode | Classroom / Online / Not sure yet |
| Preferred batch | Weekday / Weekend / After school / Flexible |
| Area | |
| Notes | |
| Page | The page the parent was reading when they opened the form |

The columns are generated from the `COLUMNS` list at the top of
`scripts/google-sheet-endpoint.gs`, and the form fields from `TRIAL_FIELDS` in
`src/components/TrialForm.jsx`. **Adding a field means adding it in both** —
the names have to match.

---

## Getting an email when a booking arrives

The sheet can do this without any code. In the sheet:

**Tools → Notification settings → Edit notifications** → "Any changes are
made" → "Right away".

If you would rather have the details in the email body than a "your sheet
changed" nudge, add this to the Apps Script file and call it at the end of
`doPost`:

```js
function notify(data) {
  MailApp.sendEmail({
    to: 'brollyjuniors.in@gmail.com',
    subject: 'Trial booking — ' + data.parent_name,
    body: COLUMNS.map(function (c) { return c.label + ': ' + (data[c.key] || '—'); }).join('\n'),
  });
}
```

---

## Changing the script later

Editing the Apps Script file is **not** enough on its own — a web app serves the
version it was deployed with. After an edit:

**Deploy → Manage deployments → (pencil icon) → Version: New version → Deploy**

That keeps the same `/exec` URL, so nothing in `site.js` needs to change. Using
"New deployment" instead would give you a *different* URL and the site would
keep posting to the old one.

---

## Spam

The form carries a hidden honeypot field (`company`). It is off-screen and
skipped by keyboard and screen readers, so only an automated submitter fills it
in — and the endpoint silently drops anything that has it set. That is enough
for the volume of scripted spam a small local site attracts. If real spam ever
gets through, the next step is a per-IP rate limit in the script rather than a
CAPTCHA in front of a parent trying to book a class.

---

## How it hangs together

```
Any "Book a free trial" button on the site
   └─ TrialModal.jsx  intercepts the click, opens the modal
        └─ TrialForm.jsx  the fields, the states, the honeypot
             └─ lib/trialBooking.js  posts urlencoded (no CORS preflight)
                  └─ scripts/google-sheet-endpoint.gs  appends the row
                       └─ your Google Sheet
```

`/book-free-demo` renders the same `TrialForm` on a real page. That is what a
parent gets from a search result, from a shared link, or before the page has
hydrated — so the form works even when the modal never opens.
