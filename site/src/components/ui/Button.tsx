import Link from "next/link";
import type { ReactNode } from "react";

type Accent = "sage" | "clay" | "dark" | "light";
type Variant = "solid" | "outline" | "ghost";

const accentSolid: Record<Accent, string> = {
  sage: "bg-sage-600 text-sand-50 hover:bg-sage-700",
  clay: "bg-clay-500 text-sand-50 hover:bg-clay-600",
  dark: "bg-ink-950 text-sand-50 hover:bg-espresso-900",
  light: "bg-sand-50 text-espresso-900 hover:bg-sand-200",
};

const accentOutline: Record<Accent, string> = {
  sage: "border-sage-600 text-sage-700 hover:bg-sage-100",
  clay: "border-clay-500 text-clay-600 hover:bg-clay-100",
  dark: "border-ink-950 text-ink-950 hover:bg-sand-200",
  light: "border-sand-50 text-sand-50 hover:bg-white/10",
};

const accentGhost: Record<Accent, string> = {
  sage: "text-sage-700 hover:bg-sage-100",
  clay: "text-clay-600 hover:bg-clay-100",
  dark: "text-ink-950 hover:bg-sand-200",
  light: "text-sand-50 hover:bg-white/10",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  accent?: Accent;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

export function Button({
  href,
  children,
  accent = "sage",
  variant = "solid",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClasses =
    variant === "solid"
      ? accentSolid[accent]
      : variant === "outline"
        ? `border-2 bg-transparent ${accentOutline[accent]}`
        : accentGhost[accent];

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("https://wa.me");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${variantClasses} ${className}`}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variantClasses} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
