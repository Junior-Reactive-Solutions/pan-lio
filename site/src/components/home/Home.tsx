import { ArrowRight, Briefcase, Compass, Quote } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CourseGroupCard } from "@/components/course/CourseGroupCard";
import { CoachingCard } from "@/components/course/CoachingCard";
import { getSiteStats } from "@/lib/stats";
import { siteNav } from "@/lib/nav";
import { coachingPackages } from "@/content/coaching";
import { getCourseGroups } from "@/content/courses";
import { businessLines } from "@/content/business";

/**
 * The real homepage — a deliberate hybrid of Concept A ("The Calendar Is
 * the Product") and Concept B ("Two Doors"), per the user's direction after
 * reviewing all three concepts at /concepts.
 *
 * What's kept from each:
 *  - From B: the two-door hero split resolving the Pan-Lio Ltd / Coach DK
 *    Global brand ambiguity (audit §7.4) — organisations vs. individuals,
 *    right up top, so both audiences self-select immediately.
 *  - From A: "For Organisations" is built around the calendar, not a
 *    generic pitch — but the full, live, filterable 58-course explorer now
 *    lives on its own page at /courses (see that route for why: it's a
 *    heavy, genuinely separate concern from the homepage). This section
 *    shows the 3 soonest cohorts and links out to the full calendar, the
 *    same pattern Concept B used for course discovery.
 *  - Individuals get the ZuluOne/ZuluTwo coaching cards (from B).
 *  - The dark "Why Pan-Lio" band, business-line strip, and founder quote
 *    (from A) round out the page as shared, audience-neutral trust content.
 */


export function Home() {
  const stats = getSiteStats();
  const soonestCourses = getCourseGroups().slice(0, 3);

  return (
    <div id="top" className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Browse Calendar" ctaHref="/courses" />

      {/* ============ HERO — two doors ============ */}
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
              organisations, and one-on-one coaching for individuals. Pick
              the door that matches where you are.
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
                  strategy, HR and more. Searchable, filterable, right here.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-sage-600">
                Browse the 2026 calendar
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
            <Quote className="mx-auto h-7 w-7 text-sage-600" aria-hidden="true" />
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

      {/* ============ ORGANISATIONS — calendar preview ============ */}
      <section id="organisations" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="For Organisations"
              title="The 2026 training calendar"
              description={`${stats.totalDeliveries} course deliveries, ${stats.uniqueCourses} unique courses, ${stats.cities} cities, ${stats.countries} countries — searchable and filterable, not a scanned PDF.`}
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

      {/* ============ INDIVIDUALS — coaching ============ */}
      <section id="individuals" className="bg-clay-100 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="For Individuals"
              title="Coach DK Global — life coaching packages"
              description="Delivered online or in person. Two tracks, both built around the same philosophy: clarity first, then transformation."
              accent="clay"
            />
            <Button href="/coaching" accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
              Full coaching details
            </Button>
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-6 sm:grid-cols-2">
            {coachingPackages.map((pkg, i) => (
              <CoachingCard key={pkg.slug} pkg={pkg} featured={i === 1} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ WHY PAN-LIO — dark ink band ============ */}
      <section id="why" className="bg-ink-950 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Pan-Lio"
              title="Training built for people who lead"
              description="Our mission is to empower professionals with cutting-edge training and certification programs that drive success and foster a culture of excellence — with a commitment to innovation and quality in every cohort."
              accent="sage"
              light
            />
          </Reveal>
          <Reveal stagger delay={120} className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl text-sand-50">Expert-led</p>
              <p className="mt-2 font-body text-sm text-sand-300">
                Every course is built and delivered by practitioners in that
                field — governance, security, finance, marketing and more.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-sand-50">Regionally rooted</p>
              <p className="mt-2 font-body text-sm text-sand-300">
                Delivered in the cities where our clients actually operate —
                {" "}{stats.countryList.join(", ")}.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-sand-50">Built to scale</p>
              <p className="mt-2 font-body text-sm text-sand-300">
                From a single leader to a whole department — our calendar
                repeats popular courses across multiple cohorts and cities.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ BUSINESS LINES ============ */}
      <section id="services" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Beyond Training & Coaching"
              title="Pan-Lio Ltd builds more than people"
              description="A multi-industry enterprise unlocking opportunities, developing people, and deploying capital across real estate, transport, trade and insurance."
              accent="sage"
            />
            <Button href="/services" accent="dark" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
              All Pan-Lio services
            </Button>
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

      {/* ============ FOUNDER QUOTE ============ */}
      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Quote className="mx-auto h-8 w-8 text-sage-600" aria-hidden="true" />
            <p className="font-display mt-6 text-2xl leading-snug text-sand-50 sm:text-3xl">
              &ldquo;Zero to one is greater than one to a hundred.&rdquo;
            </p>
            <p className="mt-4 font-body text-sm text-sand-300">
              Deo Kateizi — Founder, Coach DK Global
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ CTA / CONTACT ============ */}
      <section id="contact" className="bg-sand-100 py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Whichever Door You Pick"
              title="We'll help you find the right fit"
              align="center"
              accent="sage"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
              Get in touch
            </Button>
            <Button href="https://wa.me/256780424010" accent="dark" variant="outline">
              Chat on WhatsApp
            </Button>
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
