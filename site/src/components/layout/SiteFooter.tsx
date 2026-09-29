import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandIcon, type BrandName } from "@/components/icons/BrandIcon";
import { LogoMark } from "@/components/icons/LogoMark";

const socials: { name: BrandName; href: string; handle: string }[] = [
  { name: "instagram", href: "https://www.instagram.com/coachdkateizi", handle: "@coachdkateizi" },
  { name: "tiktok", href: "https://www.tiktok.com/@coach.dk7", handle: "@coach.dk7" },
  { name: "linkedin", href: "https://www.linkedin.com/in/coachdeokateizi/", handle: "Deo Kateizi" },
];

/** Verified from the live site's /contact-1 page during the Sep 2026 audit. */
const phones = ["+256 780 424010", "+256 782 459180", "+256 772 516890"];
const emails = ["coachdk@pan-lio.com", "pkateizi@pan-lio.com"];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-sand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-1">
          <div className="h-10 w-10 text-sand-50">
            <LogoMark variant="pan-lio" className="h-full w-full" themed />
          </div>
          <p className="mt-3 font-display text-sm text-sand-50">Pan-Lio Ltd</p>
          <p className="mt-3 font-body text-sm leading-relaxed text-sand-300">
            Real estate, transport, trade, international life insurance and
            strategic leadership — built by Pan-Lio Ltd, home of Coach DK
            Global coaching and training.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-[0.16em] text-sand-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3">
            {phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 font-body text-sm text-sand-100 hover:text-sand-50"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            ))}
            {emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 font-body text-sm text-sand-100 hover:text-sand-50"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-[0.16em] text-sand-300">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 font-body text-sm">
            <li><Link href="/courses" className="text-sand-100 hover:text-sand-50">2026 Training Calendar</Link></li>
            <li><Link href="/coaching" className="text-sand-100 hover:text-sand-50">Coach DK Coaching</Link></li>
            <li><Link href="/services" className="text-sand-100 hover:text-sand-50">Pan-Lio Services</Link></li>
            <li><Link href="/about" className="text-sand-100 hover:text-sand-50">About Pan-Lio</Link></li>
            <li><Link href="/contact" className="text-sand-100 hover:text-sand-50">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-[0.16em] text-sand-300">
            Follow
          </h3>
          <ul className="mt-4 flex gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pan-Lio on ${s.name}`}
                  title={s.handle}
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-sand-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-sand-50"
                >
                  <BrandIcon name={s.name} className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 font-body text-xs text-sand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pan-Lio Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-sand-50">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sand-50">Terms of Use</Link>
            <span className="text-sand-300/50">|</span>
            <a
              href="https://jrcom.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-300/60 transition-colors hover:text-sand-200"
            >
              Built by Junior Reactive Solutions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
