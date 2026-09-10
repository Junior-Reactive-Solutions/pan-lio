import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { siteNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Pan-Lio Ltd and Coach DK Global website.",
};

const h2 = "font-display mt-10 text-xl text-espresso-900";
const p = "mt-3 font-body text-sm leading-relaxed text-espresso-700";

export default function TermsPage() {
  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/contact" />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
            Legal
          </p>
          <h1 className="font-display mt-4 text-4xl text-espresso-900">Terms of Use</h1>
          <p className="mt-3 font-body text-sm text-espresso-700/70">Last updated: 10 September 2026</p>

          <p className={p}>
            These terms cover use of this website (pan-lio.com). By browsing
            it, you agree to them.
          </p>

          <h2 className={h2}>Site content</h2>
          <p className={p}>
            Text, course listings, and design on this site belong to Pan-Lio
            Ltd / Coach DK Global unless stated otherwise. You&rsquo;re
            welcome to link to it; please don&rsquo;t reproduce it elsewhere
            without asking first.
          </p>

          <h2 className={h2}>Course and coaching information</h2>
          <p className={p}>
            Course dates, cities, and titles on this site reflect the 2026
            training calendar as planned at the time of publishing. Dates,
            venues, and availability can change — always confirm directly
            with us before making travel arrangements around a course.
          </p>
          <p className={p}>
            <strong className="text-espresso-900">Booking, cancellation, and refund terms</strong>{" "}
            are confirmed individually when you book a course or coaching
            package, and are not yet published on this website. Ask for
            these in writing before you pay for anything.
          </p>

          <h2 className={h2}>No online payments</h2>
          <p className={p}>
            This site does not process payments. Any request for payment
            claiming to come from this site, outside a direct conversation
            with Pan-Lio Ltd / Coach DK Global, should be treated as
            suspicious — verify it by phone before paying anything.
          </p>

          <h2 className={h2}>External links</h2>
          <p className={p}>
            Links to WhatsApp, Instagram, TikTok, LinkedIn, and other
            third-party sites are provided for convenience. We don&rsquo;t
            control and aren&rsquo;t responsible for their content or
            availability.
          </p>

          <h2 className={h2}>No warranty</h2>
          <p className={p}>
            This site is provided as-is. We work to keep the information on
            it accurate and current, but don&rsquo;t guarantee it&rsquo;s
            free of errors at every moment.
          </p>

          <h2 className={h2}>Governing law</h2>
          <p className={p}>
            These terms are governed by the laws of Uganda, where Pan-Lio
            Ltd operates.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about these terms: <a href="mailto:coachdk@pan-lio.com" className="underline hover:text-espresso-900">coachdk@pan-lio.com</a>
          </p>

          <p className="mt-10 font-body text-xs leading-relaxed text-espresso-700/70">
            This is a general-purpose terms page appropriate for a
            marketing/informational website. It is not a substitute for
            legal advice, and doesn&rsquo;t itself constitute a course or
            coaching services contract — Pan-Lio Ltd should have specific
            booking, cancellation, and refund terms drafted and reviewed by
            a qualified lawyer before publishing them.
          </p>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
