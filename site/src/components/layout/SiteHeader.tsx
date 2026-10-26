"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
      {/* Phones: a 3-column grid keeps the logos truly centred between an empty cell and the menu button.
          Laptops: Pan-Lio sits on the left, Coach DK on the right, and the menu links + button are centred between them. */}
      <Container className="grid h-16 grid-cols-[2.5rem_1fr_2.5rem] items-center sm:h-20 lg:flex lg:justify-between lg:gap-8">
        <span aria-hidden="true" className="lg:hidden" />
        <div className="flex items-center justify-center gap-3 sm:gap-4 lg:contents">
          <Link
            href="/"
            aria-label="Pan-Lio, home"
            className="transition-opacity hover:opacity-80 lg:order-1"
          >
            <Image
              src="/images/pan-lio-wordmark-tight.webp"
              alt="Pan-Lio"
              width={1162}
              height={985}
              sizes="80px"
              className="h-11 w-auto sm:h-14"
              priority
            />
          </Link>
          <span aria-hidden="true" className="h-8 w-px bg-sand-300 sm:h-10 lg:hidden" />
          <Link
            href="/"
            aria-label="Coach DK Global, home"
            className="transition-opacity hover:opacity-80 lg:order-3"
          >
            <Image
              src="/images/coach-dk-logo-tight.webp"
              alt="Coach DK Global"
              width={1425}
              height={592}
              sizes="120px"
              className="h-7 w-auto sm:h-9 lg:h-11"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-8 lg:order-2 lg:flex lg:flex-1 lg:justify-center xl:gap-10">
          <nav className="flex items-center gap-8 xl:gap-10">
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
          <Button href={ctaHref} accent={accent} className="!px-5 !py-2.5 !text-xs">
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center justify-self-end rounded-full text-espresso-900 lg:hidden"
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
