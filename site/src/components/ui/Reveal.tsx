"use client";

import { useId, useLayoutEffect, useRef } from "react";
import { animate, createScope, stagger, onScroll, type Scope } from "animejs";
import { motion, prefersReducedMotion } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  /** Animate direct children in sequence instead of the wrapper as one block. */
  stagger?: boolean;
  className?: string;
  as?: "div" | "section" | "ul";
  delay?: number;
}

/**
 * Scroll-triggered reveal, built on anime.js v4's `createScope` + `onScroll`.
 * See /docs/MASTER_PROMPT.md §3.3 for the required pattern: animations live
 * inside a scope created in an effect, `scope.revert()` runs on cleanup, and
 * the whole thing bails out under prefers-reduced-motion.
 *
 * Elements are hidden (opacity-0 + translate-y) via a Tailwind class applied
 * synchronously in useLayoutEffect *before paint* — not in static CSS — so a
 * reduced-motion visitor, or anyone before hydration, never sees content
 * withheld. anime.js then animates from that pre-paint state to visible.
 */
export function Reveal({
  children,
  stagger: shouldStagger = false,
  className,
  as = "div",
  delay = 0,
}: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope | null>(null);
  const reactId = useId().replace(/:/g, "");

  useLayoutEffect(() => {
    const rootEl = root.current;
    if (prefersReducedMotion() || !rootEl) return;

    const targets = shouldStagger
      ? rootEl.querySelectorAll<HTMLElement>(":scope > *")
      : [rootEl];

    for (const el of targets) {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
    }

    scope.current = createScope({ root }).add(() => {
      animate(targets, {
        translateY: 0,
        opacity: 1,
        delay: shouldStagger ? stagger(motion.staggerMs, { start: delay }) : delay,
        duration: motion.duration.slow,
        ease: motion.ease.out,
        autoplay: onScroll({
          target: rootEl,
          enter: "bottom-=80 top",
          repeat: false,
        }),
      });
    });

    return () => scope.current?.revert();
  }, [reactId, shouldStagger, delay]);

  const Tag = as;
  return (
    <Tag ref={root as never} className={className}>
      {children}
    </Tag>
  );
}
