import { ArrowRight, Globe2, GraduationCap, MapPin, Sparkles, Quote } from "lucide-react";
import { SiteHeader, type NavLink } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarExplorer } from "@/components/course/CalendarExplorer";
import { businessLineIcons } from "@/lib/icons";
import { getSiteStats } from "@/lib/stats";

const navLinks: NavLink[] = [
  { label: "Calendar", href: "#courses" },
  { label: "Why Pan-Lio", href: "#why" },
  { label: "Cities", href: "#cities" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const businessLines = [
  {
    icon: businessLineIcons.insurance,
    title: "International Life Insurance",
    blurb: "Protecting individuals, families and businesses across borders — Protecting today, securing tomorrow.",
  },
  {
    icon: businessLineIcons.realEstate,
    title: "Real Estate & Investment",
    blurb: "High-value residential and commercial development, from land banking to income-generating assets.",
  },
  {
    icon: businessLineIcons.leadership,
    title: "Strategic Leadership Training",
    blurb: "The programs behind this calendar — training, workshops and executive coaching that build discipline and strategy.",
  },
  {
    icon: businessLineIcons.transport,
    title: "Transport & Mobility",
    blurb: "Car hire, fleet management and mobility services that keep business operations moving.",
  },
  {
    icon: businessLineIcons.trade,
    title: "Trade & Commerce",
    blurb: "Connecting markets and opportunity across East and Southern Africa.",
  },
];

export function ConceptA() {
  const stats = getSiteStats();

  return (
    <div id="top" className="bg-sand-100">
      <SiteHeader links={navLinks} accent="sage" ctaLabel="Browse Calendar" ctaHref="#courses" />

      {/* ============ HERO — 60% sand surface, sage 10% accent ============ */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
              2026 Training Calendar
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-espresso-900 sm:text-5xl lg:text-6xl">
              Achieve Excellence.
              <br />
              Every Course, Every Date, Right Here.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-espresso-700">
              {stats.totalDeliveries} training courses across {stats.cities} cities in{" "}
              {stats.countries} countries — searchable, filterable, and finally
              readable on your phone. No PDFs, no screenshots.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#courses" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
                Browse the calendar
              </Button>
              <Button href="#contact" accent="dark" variant="outline">
                Talk to us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-sand-300 bg-sand-50 p-6 sm:p-8">
              <StatTile icon={GraduationCap} value={String(stats.uniqueCourses)} label="Unique courses" accent="sage" />
              <StatTile icon={MapPin} value={String(stats.cities)} label="Host cities" accent="sage" />
              <StatTile icon={Globe2} value={String(stats.countries)} label="Countries" accent="sage" />
              <StatTile icon={Sparkles} value="9" label="Practice areas" accent="sage" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ CALENDAR — the flagship feature ============ */}
      <section id="courses" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Calendar"
              title="Find your course in seconds"
              description="Filter by practice area or city, or just search. Every course listed here links out to its own page with the full syllabus and every upcoming cohort — this replaces five scanned PDF pages with something Google, and your phone, can actually read."
              accent="sage"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <CalendarExplorer />
          </Reveal>
        </Container>
      </section>

      {/* ============ WHY PAN-LIO — dark ink band, 30% structure ============ */}
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

      {/* ============ CITIES — sage tinted band ============ */}
      <section id="cities" className="bg-sage-100 py-16 sm:py-20">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeading
              eyebrow="Where We Train"
              title="Six countries, one calendar"
              accent="sage"
            />
            <div className="flex flex-wrap gap-3">
              {stats.cityList.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-full bg-sand-50 px-4 py-2 font-body text-sm font-medium text-espresso-900"
                >
                  <MapPin className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
                  {city}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ BUSINESS LINES ============ */}
      <section id="services" className="bg-sand-50 py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Beyond Training"
              title="Pan-Lio Ltd is more than a calendar"
              description="A multi-industry enterprise unlocking opportunities, developing people, and deploying capital across real estate, transport, trade and insurance."
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

      {/* ============ FOUNDER QUOTE (real, verified) ============ */}
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
              eyebrow="Ready When You Are"
              title="Book your seat on the 2026 calendar"
              align="center"
              accent="sage"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/256780424010" accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
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
