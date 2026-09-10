/**
 * Stand-in for a founder photograph. This build doesn't carry rights to
 * re-host pan-lio.com's own proprietary photography under a new deployment,
 * so identity is represented with a monogram instead — swap for a real
 * portrait on launch. Shared between /about and Concept C (see PROJECT_LOG).
 */
export function FounderMonogram({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-64 w-64 sm:h-80 sm:w-80" : "h-56 w-56 sm:h-72 sm:w-72";
  return (
    <div className={`relative mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-clay-500 to-sage-600 p-1.5 ${dims}`}>
      <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-950">
        <span className="font-display text-6xl text-sand-50 sm:text-7xl">DK</span>
      </div>
    </div>
  );
}
