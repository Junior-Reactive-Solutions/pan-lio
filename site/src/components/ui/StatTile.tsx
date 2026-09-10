import type { LucideIcon } from "lucide-react";

type Accent = "sage" | "clay";

const accentBg: Record<Accent, string> = {
  sage: "bg-sage-100 text-sage-700",
  clay: "bg-clay-100 text-clay-600",
};

export function StatTile({
  icon: Icon,
  value,
  label,
  accent = "sage",
  light = false,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  accent?: Accent;
  light?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accentBg[accent]}`}>
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </span>
      <div>
        <p className={`font-display text-2xl sm:text-3xl ${light ? "text-sand-50" : "text-espresso-900"}`}>
          {value}
        </p>
        <p className={`font-body text-sm ${light ? "text-sand-300" : "text-espresso-700"}`}>{label}</p>
      </div>
    </div>
  );
}
