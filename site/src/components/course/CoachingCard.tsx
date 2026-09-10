import { CheckCircle2 } from "lucide-react";
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

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-3xl text-espresso-900">{pkg.price}</span>
        <span className="font-body text-sm text-espresso-700">/ {pkg.duration}</span>
      </div>

      <p className="mt-4 font-body text-sm leading-relaxed text-espresso-700">{pkg.focus}</p>

      <ul className="mt-6 space-y-3">
        {pkg.modules.map((m) => (
          <li key={m} className="flex items-start gap-2.5 font-body text-sm text-espresso-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-clay-500" aria-hidden="true" />
            {m}
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-sand-300 pt-5 font-body text-xs leading-relaxed text-espresso-700/80">
        <strong className="text-espresso-900">Outcome:</strong> {pkg.outcome}
      </p>
    </div>
  );
}
