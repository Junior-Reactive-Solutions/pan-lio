import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import type { CourseGroup } from "@/content/courses";
import { categoryIcons } from "@/lib/icons";

const monthFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" });

function formatRange(startISO: string, endISO: string) {
  const start = new Date(`${startISO}T00:00:00`);
  const end = new Date(`${endISO}T00:00:00`);
  return `${monthFmt.format(start)}–${monthFmt.format(end)}`;
}

type Accent = "sage" | "clay";

const accentText: Record<Accent, string> = {
  sage: "text-sage-700 bg-sage-100",
  clay: "text-clay-600 bg-clay-100",
};

export function CourseGroupCard({
  group,
  accent = "sage",
}: {
  group: CourseGroup;
  accent?: Accent;
}) {
  const Icon = categoryIcons[group.category];
  const next = group.deliveries[0];
  const moreCount = group.deliveries.length - 1;

  return (
    <Link
      href={`/courses/${group.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-sand-300 bg-sand-50 p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-espresso-900/5"
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${accentText[accent]}`}>
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </div>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-espresso-700/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-espresso-700"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 font-body text-xs font-semibold uppercase tracking-wide text-espresso-700/70">
        {group.category}
      </p>
      <h3 className="font-display mt-1 text-lg leading-snug text-espresso-900">
        {group.title}
      </h3>

      <div className="mt-4 space-y-2 font-body text-sm text-espresso-700">
        <p className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 shrink-0 text-espresso-700/60" aria-hidden="true" />
          {formatRange(next.startDate, next.endDate)}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-espresso-700/60" aria-hidden="true" />
          {next.city}, {next.country}
        </p>
      </div>

      {moreCount > 0 && (
        <p className="mt-4 font-body text-xs font-medium text-espresso-700/70">
          +{moreCount} more {moreCount === 1 ? "cohort" : "cohorts"} in 2026
        </p>
      )}
    </Link>
  );
}
