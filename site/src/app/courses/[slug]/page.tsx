import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CourseGroupCard } from "@/components/course/CourseGroupCard";
import { getCourseGroupBySlug, getCourseGroups, getRelatedCourseGroups } from "@/content/courses";
import { categoryIcons } from "@/lib/icons";
import { siteNav } from "@/lib/nav";

const monthFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });
function formatDate(iso: string) {
  return monthFmt.format(new Date(`${iso}T00:00:00`));
}

export function generateStaticParams() {
  return getCourseGroups().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = getCourseGroupBySlug(slug);
  if (!group) return {};

  const cities = Array.from(new Set(group.deliveries.map((d) => d.city)));
  const cohortWord = group.deliveries.length === 1 ? "cohort" : "cohorts";
  const description = `${group.title} — a ${group.category} course from Pan-Lio. ${group.deliveries.length} ${cohortWord} in 2026, delivered in ${cities.join(", ")}.`;

  return {
    title: group.title,
    description,
    openGraph: { title: group.title, description },
    twitter: { title: group.title, description },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getCourseGroupBySlug(slug);
  if (!group) notFound();

  const Icon = categoryIcons[group.category];
  const related = getRelatedCourseGroups(slug);
  const waMessage = encodeURIComponent(
    `Hi Pan-Lio, I'd like to book a seat on "${group.title}".`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: group.title,
    description: `${group.title} — a ${group.category} course delivered by Pan-Lio Ltd.`,
    provider: {
      "@type": "Organization",
      name: "Pan-Lio Ltd",
      sameAs: "https://www.pan-lio.com",
    },
    hasCourseInstance: group.deliveries.map((d) => ({
      "@type": "CourseInstance",
      courseMode: "onsite",
      startDate: d.startDate,
      endDate: d.endDate,
      location: {
        "@type": "Place",
        name: `${d.city}, ${d.country}`,
      },
    })),
  };

  return (
    <div className="bg-sand-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/#contact" />

      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-xs text-espresso-700/70">
              <Link href="/" className="hover:text-espresso-900">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/courses" className="hover:text-espresso-900">Courses</Link>
              <span aria-hidden="true">/</span>
              <span className="text-espresso-900">{group.title}</span>
            </nav>

            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              {group.category}
            </p>
            <h1 className="font-display mt-3 text-3xl leading-tight text-espresso-900 sm:text-4xl">
              {group.title}
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-espresso-700">
              Delivered in-person as part of Pan-Lio&rsquo;s 2026 professional
              training calendar. {group.deliveries.length}{" "}
              {group.deliveries.length === 1 ? "cohort is" : "cohorts are"}{" "}
              currently scheduled — pick the date and city that works for you
              below.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href={`https://wa.me/256780424010?text=${waMessage}`} accent="sage" icon={<ArrowRight className="h-4 w-4" />}>
                Book this course on WhatsApp
              </Button>
              <Button href="/courses" accent="dark" variant="outline" icon={<ArrowLeft className="h-4 w-4" />}>
                Back to all courses
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand-50 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-xl text-espresso-900">2026 cohorts</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-sand-300">
              <table className="w-full min-w-[420px] border-collapse font-body text-sm">
                <thead>
                  <tr className="border-b border-sand-300 bg-sand-100 text-left text-xs font-semibold uppercase tracking-wide text-espresso-700/70">
                    <th className="px-5 py-3">Dates</th>
                    <th className="px-5 py-3">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {group.deliveries.map((d) => (
                    <tr key={d.id} className="border-b border-sand-200 last:border-0">
                      <td className="px-5 py-4 text-espresso-900">
                        <span className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                          {formatDate(d.startDate)} – {formatDate(d.endDate)}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-espresso-700">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                          {d.city}, {d.country}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-14 sm:py-20">
          <Container>
            <Reveal>
              <h2 className="font-display text-xl text-espresso-900">
                More in {group.category}
              </h2>
            </Reveal>
            <Reveal stagger delay={100} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((g) => (
                <CourseGroupCard key={g.slug} group={g} accent="sage" />
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
