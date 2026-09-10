import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteNav } from "@/lib/nav";
import { businessLines } from "@/content/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pan-Lio Ltd's five business lines: international life insurance, real estate & investment, strategic leadership training, transport & mobility, and trade & commerce.",
};

export default function ServicesPage() {
  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/contact" />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
              Pan-Lio Ltd
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-espresso-900 sm:text-5xl">
              Five business lines, one ecosystem.
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-espresso-700">
              Pan-Lio Ltd is strategically positioned at the intersection of
              real estate, transport, trade, coaching, leadership
              development, and strategic investments — unlocking
              opportunities, developing people, and deploying capital into
              ventures that generate sustainable growth.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal stagger delay={100} className="grid gap-6 sm:grid-cols-2">
            {businessLines.map((line) => (
              <div key={line.title} className="rounded-3xl border border-sand-300 bg-sand-100 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <line.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-display mt-5 text-xl text-espresso-900">{line.title}</h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-espresso-700">{line.blurb}</p>
              </div>
            ))}

            {/* Cross-links to the two lines that have their own dedicated pages */}
            <div className="rounded-3xl border border-sage-600/30 bg-ink-950 p-7 text-sand-50 sm:col-span-2">
              <p className="font-body text-sm text-sand-300">
                Strategic Leadership Training is the business line behind
                Pan-Lio&rsquo;s full 2026 course calendar, and the coaching
                side of the business runs as Coach DK Global.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Button href="/courses" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
                  Browse the training calendar
                </Button>
                <Button href="/coaching" accent="light" variant="outline">
                  Explore Coach DK coaching
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Let's Talk"
              title="Have a question about any of these?"
              align="center"
              accent="sage"
            />
          </Reveal>
          <Reveal delay={100}>
            <Button href="/contact" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
              Get in touch
            </Button>
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
