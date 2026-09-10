type Accent = "sage" | "clay";

const eyebrowAccent: Record<Accent, string> = {
  sage: "text-sage-700",
  clay: "text-clay-600",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "sage",
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: Accent;
  align?: "left" | "center";
  /** Use light (sand) text — for dark-background sections. */
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`font-body text-xs font-bold uppercase tracking-[0.18em] ${eyebrowAccent[accent]}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display mt-3 text-3xl leading-tight sm:text-4xl ${
          light ? "text-sand-50" : "text-espresso-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-sand-200" : "text-espresso-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
