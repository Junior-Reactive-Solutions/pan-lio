export function FounderMonogram({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-64 w-64 sm:h-80 sm:w-80" : "h-56 w-56 sm:h-72 sm:w-72";

  return (
    <div
      className={`relative mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-clay-500 to-sage-600 p-1.5 ${dims}`}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-950">
        <span className="font-display text-5xl font-bold tracking-tight text-sand-50 sm:text-6xl">
          DK
        </span>
      </div>
    </div>
  );
}
