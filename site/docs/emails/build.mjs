// Generates the welcome-series email HTML for pasting into Brevo ("Code your own" template).
// Run: node site/docs/emails/build.mjs
import { writeFileSync } from "node:fs";

const LOGO = "https://www.pan-lio.com/images/pan-lio-wordmark.webp";

const emails = [
  {
    file: "1-welcome-guide.html",
    subject: "Your Leadership Starter Guide is here",
    preview: "Thank you for joining Pan-Lio. Your free guide is ready.",
    paras: [
      "Thank you for joining us. Your free guide is ready, and you can read it in about twenty minutes.",
      "Over the next week I'll send you two short notes so you know what we do and how we can help.",
    ],
    button: ["Download the guide", "https://www.pan-lio.com/leadership-starter-guide.pdf"],
    sign: "Deo and the Pan-Lio team",
  },
  {
    file: "2a-courses.html",
    subject: "Three courses starting soon",
    preview: "58 training courses across 7 cities. Here are three coming up.",
    paras: [
      "We run 58 training courses across 7 cities this year. Here are three starting soon:",
      "&bull; Strategic Marketing and Business Success, Kampala<br>&bull; Physical Security and Innovation, Kigali<br>&bull; Security Coordination and Management, Mombasa",
    ],
    button: ["See the 2026 calendar", "https://www.pan-lio.com/courses"],
    sign: "The Pan-Lio team",
  },
  {
    file: "2b-coaching.html",
    subject: "What a first coaching session feels like",
    preview: "A calm, honest conversation about where you want to go.",
    paras: [
      "A lot of people wonder what a first session is like. It's a calm, honest conversation about where you are and where you want to go.",
      "You leave with a clear next step, not a long to-do list.",
    ],
    button: ["Read about coaching", "https://www.pan-lio.com/coaching"],
    sign: "Coach DK",
  },
  {
    file: "3a-courses.html",
    subject: "Which course fits you?",
    preview: "Reply with your role and we'll suggest the best fit.",
    paras: [
      "Not sure which course suits you? Reply to this email with your role and what you want to improve. A real person will suggest the best fit.",
      "Or go straight to the calendar and book your seat in a few minutes.",
    ],
    button: ["Book a course", "https://www.pan-lio.com/courses"],
    sign: "The Pan-Lio team",
  },
  {
    file: "3b-coaching.html",
    subject: "ZuluOne or ZuluTwo? How to choose",
    preview: "Clarity and a fresh start, or deeper leadership and purpose.",
    paras: [
      "ZuluOne is for clarity and a fresh start. ZuluTwo goes deeper into leadership, money and purpose.",
      "Not sure which is right? Send us a message and we'll talk it through, no pressure.",
    ],
    button: ["Chat on WhatsApp", "https://wa.me/256780424010"],
    sign: "Coach DK",
  },
];

const html = (e) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e.subject}</title></head>
<body style="margin:0;padding:0;background:#ece4da;">
<div style="display:none;max-height:0;overflow:hidden;">${e.preview}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ece4da;"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#f6f3ec;border-radius:16px;">
<tr><td align="center" style="padding:28px 32px 8px;"><img src="${LOGO}" width="72" height="72" alt="Pan-Lio" style="display:block;"></td></tr>
<tr><td style="padding:8px 32px 0;font-family:Georgia,serif;font-size:26px;line-height:1.2;color:#36302a;">${e.subject}</td></tr>
<tr><td style="padding:16px 32px 0;font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#4a413a;">
<p style="margin:0 0 14px;">Hi there,</p>
${e.paras.map((p) => `<p style="margin:0 0 14px;">${p}</p>`).join("\n")}
</td></tr>
<tr><td style="padding:8px 32px 8px;"><a href="${e.button[1]}" style="display:inline-block;background:#58766c;color:#ffffff;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;text-decoration:none;padding:13px 26px;border-radius:999px;">${e.button[0]}</a></td></tr>
<tr><td style="padding:16px 32px 28px;font-family:Georgia,serif;font-size:16px;color:#4a413a;">${e.sign}</td></tr>
</table>
<p style="max-width:560px;margin:18px auto 0;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:#6b645b;text-align:center;">Pan-Lio Ltd, Kampala, Uganda. You're receiving this because you asked for the guide on pan-lio.com.<br><a href="{{ unsubscribe }}" style="color:#6b645b;">Unsubscribe</a></p>
</td></tr></table>
</body></html>
`;

const dir = new URL(".", import.meta.url);
for (const e of emails) writeFileSync(new URL(e.file, dir), html(e));
console.log(emails.map((e) => `${e.file}  |  ${e.subject}`).join("\n"));
