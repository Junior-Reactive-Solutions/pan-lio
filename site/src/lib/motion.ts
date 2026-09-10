/**
 * Shared anime.js v4 helpers.
 *
 * anime.js v4 is a breaking rewrite of v3 — there is no default `anime(...)`
 * export. Always import named exports (`animate`, `createScope`, `stagger`,
 * `onScroll`, ...) from "animejs". See /docs/MASTER_PROMPT.md §3.3.
 *
 * Every animated component must:
 *   1. Build its animations inside a `createScope({ root }).add(...)` block
 *      in a `useEffect`, and call `scope.revert()` in the cleanup function.
 *   2. Bail out entirely when the user has requested reduced motion.
 *   3. Animate only `transform`/`opacity` — never layout properties.
 */

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Standard easing/duration tokens so every component feels like one system. */
export const motion = {
  ease: {
    out: "out(3)",
    inOut: "inOut(2)",
  },
  duration: {
    fast: 300,
    base: 600,
    slow: 800,
  },
  staggerMs: 80,
} as const;
