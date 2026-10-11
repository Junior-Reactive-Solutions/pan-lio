"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const options = [
  { value: "courses", label: "Training courses" },
  { value: "coaching", label: "Coaching" },
  { value: "both", label: "Both" },
] as const;

type Status = "idle" | "sending" | "done" | "error";

export function SignupForm() {
  const [interest, setInterest] = useState<string>("courses");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, interest, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-sand-50">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl text-espresso-900">You&rsquo;re in!</h3>
        <p className="font-body text-espresso-700">
          Your free guide is on its way to <strong>{email}</strong>. Check your inbox in a minute or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <fieldset className="flex flex-col gap-2">
        <legend className="font-body text-sm font-bold text-espresso-700">I&rsquo;m most interested in</legend>
        <div className="flex flex-wrap gap-2">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              aria-pressed={interest === o.value}
              onClick={() => setInterest(o.value)}
              className={`rounded-full border-2 px-4 py-2 font-body text-sm transition-colors ${
                interest === o.value
                  ? "border-sage-600 bg-sage-100 font-bold text-espresso-900"
                  : "border-sand-300 bg-sand-50 text-espresso-700 hover:border-sage-600"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-email" className="font-body text-sm font-bold text-espresso-700">
          Your email
        </label>
        <input
          id="signup-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full rounded-xl border-2 border-sand-300 bg-white px-4 py-3 font-body text-base text-espresso-900 focus:border-sage-600 focus:outline-none"
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="signup-website">Leave this field empty</label>
        <input id="signup-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-clay-100 px-4 py-3 font-body text-sm text-clay-600">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-sage-600 px-6 py-3 font-body text-sm font-semibold tracking-wide text-sand-50 transition-colors hover:bg-sage-700 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send me the guide"}
      </button>

      <p className="font-body text-xs text-espresso-700">
        We only email about Pan-Lio and Coach DK Global. Leave any time with one click. See our{" "}
        <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
