import type { Metadata } from "next";
import { ArrowRight, Globe2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FounderMonogram } from "@/components/ui/FounderMonogram";
import { getSiteStats } from "@/lib/stats";
import { siteNav } from "@/lib/nav";
import { businessLines } from "@/content/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pan-Lio Ltd is a multi-industry enterprise across real estate, transport, trade and international life insurance — home of Coach DK Global, the leadership coaching and training practice founded by Deo Kateizi.",
};

export default function AboutPage() {
  const stats = getSiteStats();

  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/contact" />

      {/* ============ HERO ============ */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="order-2 lg:order-1">
            <FounderMonogram size="lg" />
          </Reveal>
          <Reveal delay={100} className="order-1 text-center lg:order-2 lg:text-left">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
              About Pan-Lio
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.08] text-espresso-900 sm:text-5xl">
              A multi-industry enterprise, and the coaching practice at its
              heart.
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-espresso-700">
              Pan-Lio Ltd is a dynamic, multi-industry enterprise
              strategically positioned at the intersection of real estate,
              transport, trade, coaching, leadership development, and
              strategic investments — unlocking opportunities, developing
              people, and deploying capital into ventures that generate
              sustainable growth and long-term wealth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#founder" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
                Meet Deo Kateizi
              </Button>
              <Button href="/courses" accent="dark" variant="outline">
                Browse courses
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ PROOF BAND ============ */}
      <section className="bg-ink-950 py-12 sm:py-16">
        <Container>
          <Reveal stagger delay={80} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatTile icon={GraduationCap} value={String(stats.totalDeliveries)} label="Course deliveries in 2026" accent="sage" light />
            <StatTile icon={MapPin} value={String(stats.cities)} label="Cities" accent="sage" light />
            <StatTile icon={Globe2} value={String(stats.countries)} label="Countries" accent="sage" light />
            <StatTile icon={Sparkles} value="5" label="Business lines" accent="sage" light />
          </Reveal>
        </Container>
      </section>

      {/* ============ OUR PURPOSE ============ */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Our Purpose" title="Why Pan-Lio exists" accent="sage" />
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-espresso-700">
              <p>
                Pan-Lio exists to build wealth, empower people, and create
                systems that sustain growth across generations. We believe
                that true prosperity comes from the alignment of assets (real
                estate &amp; investments), systems (trade &amp; transport),
                and people (leadership &amp; coaching) — and Pan-Lio sits at
                the centre of this ecosystem.
              </p>
              <p>
                With a strong foundation in both business execution and human
                capital development, Pan-Lio uniquely combines
                infrastructure, enterprise, and leadership to drive
                transformation across markets and communities.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ MEET DEO KATEIZI ============ */}
      <section id="founder" className="bg-sage-100 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="About the Founder" title="Meet Deo Kateizi" accent="sage" />
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-espresso-700">
              <p>
                Deo Kateizi founded Coach DK Global to help people move from
                vision to impact — through mindset transformation, spiritual
                growth, leadership development, business mentorship and
                motivational speaking.
              </p>
              <p>
                Under the philosophy &ldquo;Zero to one is greater than one
                to a hundred,&rdquo; Coach DK Global inspires breakthrough
                thinking, resilience, and sustainable personal and
                professional growth — one-on-one, through the ZuluOne and
                ZuluTwo coaching tracks, and at scale, through the{" "}
                {stats.totalDeliveries}-course Pan-Lio training calendar
                delivered across {stats.countries} countries in 2026.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/coaching" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
                Explore coaching with Deo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ BUSINESS LINES ============ */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pan-Lio Ltd"
              title="Five business lines, one ecosystem"
              description="Unlocking opportunities, developing people, and deploying capital into ventures that generate sustainable growth."
              accent="sage"
            />
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {businessLines.map((line) => (
              <div key={line.title} className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <line.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-4 text-base text-espresso-900">{line.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-espresso-700">{line.blurb}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Let's Talk"
              title="Ready to work with Pan-Lio?"
              align="center"
              accent="sage"
              light
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
              Get in touch
            </Button>
            <Button href="/courses" accent="light" variant="outline">
              Browse the 2026 calendar
            </Button>
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
