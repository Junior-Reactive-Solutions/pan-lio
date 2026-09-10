"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const REASONS = [
  { value: "training", label: "Corporate training", email: "coachdk@pan-lio.com" },
  { value: "coaching", label: "Personal coaching", email: "coachdk@pan-lio.com" },
  { value: "business", label: "Business & investment", email: "pkateizi@pan-lio.com" },
  { value: "other", label: "Something else", email: "coachdk@pan-lio.com" },
] as const;

const inputClass =
  "w-full rounded-xl border border-sand-300 bg-sand-50 px-4 py-3 font-body text-sm text-espresso-900 placeholder:text-espresso-700/50 focus-visible:outline-2 focus-visible:outline-sage-600";
const labelClass = "font-body text-xs font-semibold text-espresso-900";

/**
 * No booking/contact backend is wired up yet (see PROJECT_LOG). Rather than
 * ship a form that silently does nothing, this builds a pre-filled mailto:
 * link from the real fields and hands it to the visitor's own mail client —
 * genuinely functional today, honest about what it does, and routes to the
 * right inbox (coachdk@ vs. pkateizi@) based on the enquiry type.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState<(typeof REASONS)[number]["value"]>("training");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const target = REASONS.find((r) => r.value === reason) ?? REASONS[0];
    const subject = `Enquiry from ${name || "the Pan-Lio website"}: ${target.label}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Enquiry type: ${target.label}`,
      "",
      message,
    ].filter(Boolean);
    const mailto = `mailto:${target.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+256 7xx xxx xxx"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reason" className={labelClass}>What&apos;s this about?</label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value as typeof reason)}
            className={inputClass}
          >
            {REASONS.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about what you're looking for…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3 font-body text-sm font-semibold text-sand-50 transition-colors hover:bg-sage-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
      >
        Send message
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      <p className="font-body text-xs text-espresso-700/70">
        Sending opens your email app with this message pre-filled to the
        right team — you&apos;ll see it before it sends.
      </p>

      {sent && (
        <p role="status" className="font-body text-xs font-semibold text-sage-700">
          Opening your email app now…
        </p>
      )}
    </form>
  );
}
