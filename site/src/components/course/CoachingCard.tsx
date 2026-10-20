import { ChevronDown, Users } from "lucide-react";
import type { CoachingPackage } from "@/content/coaching";

export function CoachingCard({
  pkg,
  featured = false,
}: {
  pkg: CoachingPackage;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
        featured
          ? "border-2 border-clay-500 bg-sand-50 shadow-xl shadow-clay-500/10"
          : "border border-sand-300 bg-sand-50"
      }`}
    >
      {featured && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-clay-500 px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wide text-sand-50">
          Most Transformational
        </span>
      )}
      <h3 className="font-display text-2xl text-espresso-900">{pkg.name}</h3>
      <p className="mt-1 font-body text-sm text-espresso-700">{pkg.format}</p>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-3xl text-espresso-900">{pkg.price}</span>
        <span className="font-body text-sm text-espresso-700">for {pkg.duration}</span>
      </div>

      {pkg.groupSize && (
        <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-sage-100 px-3 py-1 font-body text-xs font-bold text-sage-700">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {pkg.groupSize}
        </p>
      )}

      <p className="mt-4 font-body text-sm leading-relaxed text-espresso-700">
        <strong className="text-espresso-900">Focus:</strong> {pkg.focus}
      </p>

      {pkg.includes && (
        <p className="mt-6 rounded-xl bg-clay-100 px-4 py-2.5 font-body text-sm font-semibold text-clay-600">
          {pkg.includes}
        </p>
      )}

      <ul className={`${pkg.includes ? "mt-3" : "mt-6"} divide-y divide-sand-300 border-y border-sand-300`}>
        {pkg.modules.map((m) => (
          <li key={m.number}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start gap-3 py-3 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay-500 font-body text-[11px] font-bold text-sand-50">
                  {m.number}
                </span>
                <span className="flex-1 font-body text-sm font-semibold text-espresso-900">{m.title}</span>
                <ChevronDown
                  className="mt-0.5 h-4 w-4 shrink-0 text-espresso-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <ul className="space-y-1.5 pb-4 pl-9">
                {m.topics.map((t) => (
                  <li key={t} className="list-disc font-body text-sm text-espresso-700 marker:text-clay-500">
                    {t}
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-body text-xs leading-relaxed text-espresso-700/80">
        <strong className="text-espresso-900">Outcome:</strong> {pkg.outcome}
      </p>
    </div>
  );
}
