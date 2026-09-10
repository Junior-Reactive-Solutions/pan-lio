import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarRange, DoorOpen, UserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Homepage Concepts",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    href: "/concepts/a",
    icon: CalendarRange,
    label: "Concept A",
    title: "The Calendar Is the Product",
    accent: "text-sage-700 bg-sage-100",
    description:
      "Utility-first. A live, filterable 2026 course calendar sits right on the homepage — this is the direct fix for the audit's #1 finding (the calendar existing only as unreadable images).",
    bestFor: "SEO reach and direct booking conversion.",
  },
  {
    href: "/concepts/b",
    icon: DoorOpen,
    label: "Concept B",
    title: "Two Doors",
    accent: "text-clay-600 bg-clay-100",
    description:
      "Audience-split. The homepage opens into two clear tracks — corporate training for organisations, one-on-one coaching for individuals — resolving the brand ambiguity between Pan-Lio Ltd and Coach DK Global.",
    bestFor: "Two distinct audiences, zero confusion.",
  },
  {
    href: "/concepts/c",
    icon: UserRound,
    label: "Concept C",
    title: "Founder-Led Authority",
    accent: "text-clay-600 bg-clay-100",
    description:
      "Trust-first. Leads with Deo Kateizi and the company philosophy before any product — built for the audit's finding that the site had zero trust signals for a financial-services business.",
    bestFor: "High-consideration trust, coaching-led visitors.",
  },
];

export default function ConceptsIndexPage() {
  return (
    <main className="min-h-screen bg-sand-100 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
          Pan-Lio Rebuild — Phase 1
        </p>
        <h1 className="font-display mt-4 text-4xl text-espresso-900 sm:text-5xl">
          Three homepage concepts
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-espresso-700">
          Same design tokens, same fonts, same anime.js motion system — three
          genuinely different structures. Pick the one to build the rest of
          the site around.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {concepts.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex flex-col rounded-3xl border border-sand-300 bg-sand-50 p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso-900/5"
          >
            <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${c.accent}`}>
              <c.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-5 font-body text-xs font-bold uppercase tracking-wide text-espresso-700/70">
              {c.label}
            </p>
            <h2 className="font-display mt-1 text-xl text-espresso-900">{c.title}</h2>
            <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-espresso-700">
              {c.description}
            </p>
            <p className="mt-5 font-body text-xs font-semibold text-espresso-900">
              Best for: <span className="font-normal text-espresso-700">{c.bestFor}</span>
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-sage-700">
              View concept
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
