import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Quote } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CoachingCard } from "@/components/course/CoachingCard";
import { siteNav } from "@/lib/nav";
import { coachingPackages } from "@/content/coaching";

export const metadata: Metadata = {
  title: "Life Coaching — ZuluOne & ZuluTwo",
  description:
    "One-on-one life coaching with Coach DK Global. ZuluOne ($500/month) and ZuluTwo ($750/month) — mindset, leadership, wealth and purpose, delivered online or in person.",
};

const waMessage = encodeURIComponent(
  "Hi Coach DK, I'd like to know more about the ZuluOne / ZuluTwo coaching packages."
);

export default function CoachingPage() {
  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="clay" ctaLabel="Book a Session" ctaHref={`https://wa.me/256780424010?text=${waMessage}`} />

      {/* ============ HERO ============ */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-clay-100 text-clay-600">
              <Compass className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.18em] text-clay-600">
              Coach DK Global
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-espresso-900 sm:text-5xl">
              One-on-one coaching, built around where you want to go.
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-espresso-700">
              At Coach DK Global, in collaboration with Pan-Lio Ltd, coaching
              is delivered online or in person — two tracks, ZuluOne and
              ZuluTwo, both built on the same philosophy: clarity first, then
              transformation.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ QUOTE ============ */}
      <section className="bg-ink-950 py-12 sm:py-14">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <Quote className="mx-auto h-7 w-7 text-clay-500" aria-hidden="true" />
            <p className="font-display mt-5 text-xl leading-snug text-sand-50 sm:text-2xl">
              &ldquo;Zero to one is greater than one to a hundred.&rdquo;
            </p>
            <p className="mt-4 font-body text-sm text-sand-300">
              Deo Kateizi — Founder, Coach DK Global
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ PACKAGES ============ */}
      <section className="bg-clay-100 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Choose Your Track"
              title="ZuluOne & ZuluTwo"
              accent="clay"
            />
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-6 sm:grid-cols-2">
            {coachingPackages.map((pkg, i) => (
              <CoachingCard key={pkg.slug} pkg={pkg} featured={i === 1} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ ABOUT DEO ============ */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Your Coach"
              title="About Deo Kateizi"
              align="center"
              accent="clay"
              description="Deo Kateizi founded Coach DK Global to help people move from vision to impact — through mindset transformation, spiritual growth, leadership development, business mentorship and motivational speaking."
            />
            <div className="mt-6">
              <Button href="/about#founder" accent="clay" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
                Read the full story
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Ready to Start?"
              title="Book your first session"
              align="center"
              accent="clay"
              light
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href={`https://wa.me/256780424010?text=${waMessage}`} accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
              Chat on WhatsApp
            </Button>
            <Button href="/contact" accent="light" variant="outline">
              Other ways to reach us
            </Button>
          </Reveal>
          <p className="font-body text-xs text-sand-300">
            Looking for corporate training instead?{" "}
            <Link href="/courses" className="underline hover:text-sand-50">
              Browse the 2026 course calendar
            </Link>
            .
          </p>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
