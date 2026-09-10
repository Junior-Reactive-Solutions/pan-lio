import { ArrowRight, Briefcase, Compass, Quote } from "lucide-react";
import { SiteHeader, type NavLink } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CourseGroupCard } from "@/components/course/CourseGroupCard";
import { CoachingCard } from "@/components/course/CoachingCard";
import { businessLineIcons } from "@/lib/icons";
import { getSiteStats } from "@/lib/stats";
import { getCourseGroups } from "@/content/courses";
import { coachingPackages } from "@/content/coaching";

const navLinks: NavLink[] = [
  { label: "Organisations", href: "#organisations" },
  { label: "Individuals", href: "#individuals" },
  { label: "Beyond Training", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const businessLines = [
  { icon: businessLineIcons.insurance, title: "International Life Insurance" },
  { icon: businessLineIcons.realEstate, title: "Real Estate & Investment" },
  { icon: businessLineIcons.transport, title: "Transport & Mobility" },
  { icon: businessLineIcons.trade, title: "Trade & Commerce" },
];

export function ConceptB() {
  const stats = getSiteStats();
  const soonestCourses = getCourseGroups().slice(0, 3);

  return (
    <div id="top" className="bg-sand-100">
      <SiteHeader links={navLinks} accent="clay" ctaLabel="Get in Touch" ctaHref="#contact" />

      {/* ============ HERO — two doors, dual accent ============ */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-espresso-700/70">
              Pan-Lio &amp; Coach DK Global
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-espresso-900 sm:text-5xl">
              Two ways to grow with Pan-Lio.
            </h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-espresso-700">
              One company, two clear paths — corporate training for
              organisations, and one-on-one coaching for individuals. Pick the
              door that matches where you are.
            </p>
          </Reveal>

          <Reveal stagger delay={100} className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Door 1 — Organisations (sage) */}
            <a
              href="#organisations"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sage-600/30 bg-ink-950 p-8 text-sand-50 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-600/20 text-sage-600">
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="font-display mt-6 text-3xl">For Organisations</h2>
                <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-sand-300">
                  {stats.totalDeliveries} corporate training courses across{" "}
                  {stats.cities} cities — governance, security, finance,
                  strategy, HR and more. Built for teams and leaders who need
                  to scale.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-sage-600">
                Explore the training calendar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>

            {/* Door 2 — Individuals (clay) */}
            <a
              href="#individuals"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-clay-500/30 bg-sand-50 p-8 text-espresso-900 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="font-display mt-6 text-3xl">For Individuals</h2>
                <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-espresso-700">
                  One-on-one life coaching with Coach DK Global — mindset,
                  leadership, wealth and purpose. Two tracks, ZuluOne and
                  ZuluTwo, built around where you want to go.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-clay-600">
                Explore coaching
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ============ UNIFIED BRAND STATEMENT ============ */}
      <section className="bg-ink-950 py-14 sm:py-16">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Quote className="mx-auto h-7 w-7 text-clay-500" aria-hidden="true" />
            <p className="font-display mt-5 text-xl leading-snug text-sand-50 sm:text-2xl">
              &ldquo;Zero to one is greater than one to a hundred.&rdquo;
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-sand-300">
              Pan-Lio Ltd is a multi-industry enterprise — real estate,
              transport, trade and investment — built alongside Coach DK
              Global, the transformational coaching and leadership practice
              founded by Deo Kateizi. Two brands, one philosophy: unlock
              purpose, then build the systems that sustain it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ ORGANISATIONS TRACK — sage tint ============ */}
      <section id="organisations" className="bg-sage-100 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="For Organisations"
              title="The 2026 training calendar"
              description={`${stats.totalDeliveries} course deliveries, ${stats.uniqueCourses} unique courses, ${stats.cities} cities, ${stats.countries} countries.`}
              accent="sage"
            />
            <Button href="/courses" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
              View full calendar
            </Button>
          </Reveal>

          <Reveal stagger delay={100} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soonestCourses.map((g) => (
              <CourseGroupCard key={g.slug} group={g} accent="sage" />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ INDIVIDUALS TRACK — clay tint ============ */}
      <section id="individuals" className="bg-clay-100 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="For Individuals"
              title="Coach DK Global — life coaching packages"
              description="Delivered online or in person. Two tracks, both built around the same philosophy: clarity first, then transformation."
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

      {/* ============ BEYOND TRAINING & COACHING ============ */}
      <section id="services" className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Beyond Training & Coaching"
              title="Pan-Lio Ltd builds more than people"
              description="Real estate, transport, trade and international life insurance — the infrastructure and enterprise side of the business."
              accent="clay"
            />
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {businessLines.map((line) => (
              <div key={line.title} className="flex flex-col items-center gap-3 rounded-2xl border border-sand-300 bg-sand-100 p-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <line.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-body text-sm font-semibold text-espresso-900">{line.title}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-ink-950 py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Whichever Door You Pick"
              title="We'll help you find the right fit"
              align="center"
              accent="clay"
              light
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/256780424010" accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
              Chat on WhatsApp
            </Button>
            <Button href="mailto:coachdk@pan-lio.com" accent="light" variant="outline">
              Email us
            </Button>
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
