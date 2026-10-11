# Email follow-ups: setup

How it works: a visitor fills in the "Free guide" form on the home page. The site sends their address to Brevo (free plan, 300 emails/day). Brevo emails them the guide and runs the welcome series by itself.

The form stays hidden on the site until both settings below exist, so nothing broken is ever shown.

## 1. Brevo account (one-time)
1. Sign up at brevo.com with the Pan-Lio email address.
2. Contacts > Lists > create a list called **Pan-Lio newsletter**. Note its ID number.
3. Contacts > Settings > Contact attributes > add a **Text** attribute named `INTEREST`.
4. Senders, domains > add sender (for example `hello@pan-lio.com`, name "Coach DK, Pan-Lio") and confirm the verification email.
5. Authenticate the domain: Brevo shows a few DNS records. Add them in Squarespace DNS as **custom records**. If Brevo asks for an SPF `TXT` record, merge it into the existing one instead of adding a second. Do not touch the Google MX records.
6. SMTP & API > API keys > create a key.

## 2. Connect the site (Vercel)
Project pan-lio > Settings > Environment Variables (Production), then redeploy:

| Name | Value |
| --- | --- |
| `BREVO_API_KEY` | the key from step 6 |
| `BREVO_LIST_ID` | the list ID from step 2 |

## 3. Welcome series (Brevo > Automations > Create a workflow)
Trigger: "Contact added to list" Pan-Lio newsletter. Add the steps below. Use a condition on `INTEREST` for the Day 3 and Day 7 emails.

**Day 0, right away. Subject: Your Leadership Starter Guide is here**
> Hi there,
> Thank you for joining us. Your free guide is ready, and you can read it in about twenty minutes. [Download the guide]
> Over the next week I'll send you two short notes so you know what we do and how we can help.
> Deo and the Pan-Lio team

**Day 3 (INTEREST = courses or both). Subject: Three courses starting soon**
> We run 58 training courses across 7 cities this year. Here are three starting soon: Strategic Marketing and Business Success (Kampala), Physical Security and Innovation (Kigali), Security Coordination and Management (Mombasa).
> [See the 2026 calendar] https://www.pan-lio.com/courses

**Day 3 (INTEREST = coaching). Subject: What a first coaching session feels like**
> A lot of people wonder what a first session is like. It's a calm, honest conversation about where you are and where you want to go. You leave with a clear next step, not a long to-do list.
> [Read about coaching] https://www.pan-lio.com/coaching

**Day 7 (courses or both). Subject: Which course fits you?**
> Not sure which course suits you? Reply to this email with your role and what you want to improve. A real person will suggest the best fit.
> [Book a course] https://www.pan-lio.com/courses

**Day 7 (coaching). Subject: ZuluOne or ZuluTwo? How to choose**
> ZuluOne is for clarity and a fresh start. ZuluTwo goes deeper into leadership, money and purpose. Not sure which is right? Send us a message and we'll talk it through, no pressure.
> [Chat on WhatsApp] https://wa.me/256780424010

Every email must include Brevo's unsubscribe link (added automatically by the template).

## 4. Monthly newsletter
Brevo > Campaigns > Email. Brevo's built-in AI writer can draft it from a few notes. Read it, edit it, then schedule it to the Pan-Lio newsletter list.
