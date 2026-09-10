import type { Metadata } from "next";
import { GraduationCap, MapPin, Globe2, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarExplorer } from "@/components/course/CalendarExplorer";
import { getSiteStats } from "@/lib/stats";
import { siteNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "2026 Training Calendar",
  description:
    "Browse every Pan-Lio training course for 2026 — 58 course deliveries across governance, strategy, marketing, security, finance, technology, HR, customer experience and operations, in 7 cities across 6 countries. Search and filter to find your course.",
};

export default function CoursesPage() {
  const stats = getSiteStats();

  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/#contact" />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
              2026 Training Calendar
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] text-espresso-900 sm:text-5xl">
              Every course, every date, in one place.
            </h1>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-espresso-700">
              {stats.totalDeliveries} course deliveries across {stats.cities}{" "}
              cities in {stats.countries} countries — search or filter below,
              or open any course for its full list of 2026 cohorts.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <StatTile icon={GraduationCap} value={String(stats.uniqueCourses)} label="Unique courses" accent="sage" />
            <StatTile icon={MapPin} value={String(stats.cities)} label="Host cities" accent="sage" />
            <StatTile icon={Globe2} value={String(stats.countries)} label="Countries" accent="sage" />
            <StatTile icon={Sparkles} value="9" label="Practice areas" accent="sage" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand-50 py-12 sm:py-16">
        <Container>
          <Reveal>
            <CalendarExplorer />
          </Reveal>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
