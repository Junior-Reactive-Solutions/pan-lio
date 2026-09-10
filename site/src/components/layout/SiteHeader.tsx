"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export interface NavLink {
  label: string;
  href: string;
}

type Accent = "sage" | "clay";

/** A link is a same-page anchor ("#section") only when it starts with "#";
 * everything else — including a homepage-section link like "/#individuals"
 * — is a real navigation and should use next/link. */
function isAnchor(href: string) {
  return href.startsWith("#");
}

/**
 * Shared header shell used across the site. Each page passes its own nav
 * links and accent colour, per the 60:30:10 rule (header sits inside the
 * 30% structural band; the CTA button is the 10% accent hit).
 */
export function SiteHeader({
  links,
  accent = "sage",
  ctaLabel = "Book a Course",
  ctaHref = "#courses",
}: {
  links: NavLink[];
  accent?: Accent;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-300/70 bg-sand-100/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-xl text-espresso-900 sm:text-2xl">
          Pan-Lio
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
            isAnchor(link.href) ? (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-espresso-700 transition-colors hover:text-espresso-900"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-espresso-700 transition-colors hover:text-espresso-900"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href={ctaHref} accent={accent} className="!px-5 !py-2.5 !text-xs">
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-espresso-900 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-300/70 bg-sand-100 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) =>
              isAnchor(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 font-body text-base font-medium text-espresso-900 hover:bg-sand-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 font-body text-base font-medium text-espresso-900 hover:bg-sand-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button href={ctaHref} accent={accent} className="mt-2 justify-center">
              {ctaLabel}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
