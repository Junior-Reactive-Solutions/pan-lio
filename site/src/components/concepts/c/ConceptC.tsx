import { ArrowRight, Globe2, GraduationCap, MapPin, Sparkles, Quote } from "lucide-react";
import { SiteHeader, type NavLink } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FounderMonogram } from "@/components/ui/FounderMonogram";
import { CourseGroupCard } from "@/components/course/CourseGroupCard";
import { CoachingCard } from "@/components/course/CoachingCard";
import { businessLineIcons } from "@/lib/icons";
import { getSiteStats } from "@/lib/stats";
import { getCourseGroups } from "@/content/courses";
import { coachingPackages } from "@/content/coaching";

const navLinks: NavLink[] = [
  { label: "About Deo", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "Coaching", href: "#coaching" },
  { label: "Calendar", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

const businessLines = [
  {
    icon: businessLineIcons.insurance,
    title: "International Life Insurance",
    blurb: "Protecting individuals, families and businesses across borders.",
  },
  {
    icon: businessLineIcons.realEstate,
    title: "Real Estate & Investment",
    blurb: "High-value residential and commercial development.",
  },
  {
    icon: businessLineIcons.leadership,
    title: "Strategic Leadership Training",
    blurb: "High-impact programs, workshops and executive coaching.",
  },
  {
    icon: businessLineIcons.transport,
    title: "Transport & Mobility",
    blurb: "Car hire, fleet management and mobility services.",
  },
  {
    icon: businessLineIcons.trade,
    title: "Trade & Commerce",
    blurb: "Connecting markets across East and Southern Africa.",
  },
];

export function ConceptC() {
  const stats = getSiteStats();
  const upcoming = getCourseGroups().slice(0, 3);

  return (
    <div id="top" className="bg-sand-100">
      <SiteHeader links={navLinks} accent="clay" ctaLabel="Contact Us" ctaHref="#contact" />

      {/* ============ HERO — founder-forward ============ */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="order-2 lg:order-1">
            <FounderMonogram />
          </Reveal>

          <Reveal delay={100} className="order-1 text-center lg:order-2 lg:text-left">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-clay-600">
              Deo Kateizi — Founder, Coach DK Global
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.08] text-espresso-900 sm:text-5xl">
              &ldquo;Zero to one is greater than one to a hundred.&rdquo;
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-espresso-700">
              Coach DK Global is a transformational life coaching and
              strategic leadership company, built to help individuals,
              entrepreneurs, leaders and organisations unlock purpose,
              maximize potential and achieve holistic success — backed by
              Pan-Lio Ltd&rsquo;s wider enterprise across real estate,
              transport, trade and investment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#founder" accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
                Meet Deo Kateizi
              </Button>
              <Button href="#coaching" accent="dark" variant="outline">
                Explore coaching
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ PROOF BAND — real, verifiable numbers only ============ */}
      <section className="bg-ink-950 py-12 sm:py-16">
        <Container>
          <Reveal stagger delay={80} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatTile icon={GraduationCap} value={String(stats.totalDeliveries)} label="Course deliveries in 2026" accent="clay" light />
            <StatTile icon={MapPin} value={String(stats.cities)} label="Cities" accent="clay" light />
            <StatTile icon={Globe2} value={String(stats.countries)} label="Countries" accent="clay" light />
            <StatTile icon={Sparkles} value="5" label="Business lines" accent="clay" light />
          </Reveal>
        </Container>
      </section>

      {/* ============ MEET DEO KATEIZI ============ */}
      <section id="founder" className="bg-clay-100 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="About the Founder" title="Meet Deo Kateizi" accent="clay" />
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-espresso-700">
              <p>
                Deo Kateizi founded Coach DK Global to help people move from
                vision to impact — through mindset transformation, spiritual
                growth, leadership development, business mentorship and
                motivational speaking.
              </p>
              <p>
                Under the philosophy &ldquo;Zero to one is greater than one to
                a hundred,&rdquo; Coach DK Global inspires breakthrough
                thinking, resilience, and sustainable personal and
                professional growth — one-on-one, through the ZuluOne and
                ZuluTwo coaching tracks, and at scale, through the {stats.totalDeliveries}-course
                Pan-Lio training calendar delivered across {stats.countries} countries in 2026.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pan-Lio Ltd"
              title="A multi-industry enterprise"
              description="Unlocking opportunities, developing people, and deploying capital into ventures that generate sustainable growth."
              accent="clay"
            />
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {businessLines.map((line) => (
              <div key={line.title} className="rounded-2xl border border-sand-300 bg-sand-100 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <line.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-base text-espresso-900">{line.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-espresso-700">{line.blurb}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ COACHING SPOTLIGHT ============ */}
      <section id="coaching" className="bg-ink-950 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Work With Deo"
              title="ZuluOne & ZuluTwo coaching"
              description="Delivered online or in person, one-on-one."
              accent="clay"
              light
            />
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-6 sm:grid-cols-2">
            {coachingPackages.map((pkg, i) => (
              <CoachingCard key={pkg.slug} pkg={pkg} featured={i === 1} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ UPCOMING COURSES PREVIEW ============ */}
      <section id="courses" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Train With Us"
              title="Next up on the 2026 calendar"
              accent="clay"
            />
            <Button href="/courses" accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
              View all {stats.uniqueCourses} courses
            </Button>
          </Reveal>
          <Reveal stagger delay={100} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((g) => (
              <CourseGroupCard key={g.slug} group={g} accent="clay" />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-clay-100 py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <Quote className="mx-auto h-7 w-7 text-clay-600" aria-hidden="true" />
            <SectionHeading
              eyebrow="Let's Talk"
              title="Start your zero-to-one moment"
              align="center"
              accent="clay"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/256780424010" accent="clay" icon={<ArrowRight className="h-4 w-4" />}>
              Chat on WhatsApp
            </Button>
            <Button href="mailto:coachdk@pan-lio.com" accent="dark" variant="outline">
              Email us
            </Button>
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
