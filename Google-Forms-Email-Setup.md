# Google Forms email collector – setup guide

The contact page has an **email signup** section at the top that sends addresses to a **Google Form**. Follow these steps to connect your own form and get the IDs you need.

---

## 1. Create or sign in to your Google account

- Go to [Google](https://www.google.com) and sign in (or create a free account).
- You need a **Google account** to use Google Forms. No paid plan is required.

---

## 2. Create a new Google Form

1. Open **Google Forms**: [forms.google.com](https://forms.google.com).
2. Click **Blank** (or choose a template) to create a new form.
3. Give the form a title, e.g. **FurBuddy – Email signups**.
4. Add a short description if you like (e.g. “Contact page signup”).

---

## 3. Add the email question

1. Click **+ Add question** (or use the first default question).
2. Set the question type to **Short answer**.
3. Set the question text to **Email** (or “Email address”).
4. Turn **Required** on (toggle in the bottom-right of the question).
5. (Optional) Add a second **Short answer** question for **Name** for marketing. If you add it, you’ll need its **entry ID** too (same process as below).

---

## 4. Get your Form ID

The form’s URL looks like:

`https://docs.google.com/forms/d/e/ **1FAIpQLSe...long_string...** /viewform`

The **Form ID** is the long string between `/e/` and `/viewform`.

1. Click **Send** (top right) → choose the **link** icon.
2. Copy the link. It will look like:  
   `https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform`
3. The part **between** `/e/` and `/viewform` is your **Form ID** (e.g. `1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXXXXXXXX`).

---

## 5. Get the Entry ID for the email field

Each question has an **entry ID** (a number). You need it for the email field.

**Option A – From the form’s “preview” page (recommended)**

1. Click the **eye** icon (Preview) so the form opens in a new tab.
2. **Right‑click** the email input field → **Inspect** (or Inspect element).
3. In the Elements/Inspector panel, find the `<input>` for that question. It will look like:  
   `name="entry.1234567890"`  
   The number after `entry.` is the **Entry ID** (e.g. `1234567890`).

**Option B – From the form editor (view source)**

1. In the form **editor** tab, right‑click the page → **View page source**.
2. Press **Ctrl+F** (or **Cmd+F**) and search for `entry.`
3. You’ll see something like `"entry.1234567890"`. The number is the **Entry ID** for that question.

Use the **email** question’s entry ID. If you added a “Name” question, find its `entry.XXXX` as well for the optional name field.

---

## 6. Put the IDs into your site

Open **contact.html** and replace the placeholders with your real IDs.

**6.1 Form action URL**

Find this line:

```html
action="https://docs.google.com/forms/d/e/PASTE_FORM_ID_HERE/formResponse"
```

Replace **PASTE_FORM_ID_HERE** with your Form ID (the long string from step 4).  
Example:

```html
action="https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse"
```

**6.2 Email input name**

Find:

```html
name="entry.PASTE_ENTRY_ID_HERE"
```

Replace **PASTE_ENTRY_ID_HERE** with the email question’s Entry ID (the number from step 5).  
Example:

```html
name="entry.1234567890"
```

Save **contact.html**. When someone enters an email and clicks **Subscribe**, the response will be sent to your Google Form.

---

## 7. View responses

1. Open your form in [forms.google.com](https://forms.google.com).
2. Go to the **Responses** tab.
3. You’ll see each submission there. You can also connect **Google Sheets** (Responses → link to Sheets) to export and use the list for email marketing.

---

## 8. Account access and sharing (optional)

- **Who can submit:** By default, “Anyone with the link” can submit. In the form editor, click the **three dots** (⋮) → **Settings** → under **Responses**, choose whether to collect emails and limit to one response per person.
- **No extra “account access”** is required for people submitting the form; they only need the contact page. **You** need a Google account to create the form and see responses.
- If you use **Google Workspace**, the same form works; Form ID and Entry ID steps are the same.

---

## Quick checklist

- [ ] Google account created / signed in  
- [ ] New form created at forms.google.com  
- [ ] Email question added (Short answer, Required)  
- [ ] Form ID copied from the form’s share link  
- [ ] Entry ID copied from the email field (Inspect or View source)  
- [ ] **contact.html** updated: `PASTE_FORM_ID_HERE` and `PASTE_ENTRY_ID_HERE` replaced  
- [ ] Test: submit an email on the contact page and check the form’s **Responses** tab  

If submissions don’t appear, double-check that the Form ID and Entry ID are correct (no spaces, full ID). The form must be set to accept responses (no “Form closed” or similar).
