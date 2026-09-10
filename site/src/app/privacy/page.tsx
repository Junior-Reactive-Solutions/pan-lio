import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { siteNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pan-Lio Ltd and Coach DK Global handle information on this website.",
};

const h2 = "font-display mt-10 text-xl text-espresso-900";
const p = "mt-3 font-body text-sm leading-relaxed text-espresso-700";
const ul = "mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-espresso-700";

export default function PrivacyPage() {
  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="Contact Us" ctaHref="/contact" />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
            Legal
          </p>
          <h1 className="font-display mt-4 text-4xl text-espresso-900">Privacy Policy</h1>
          <p className="mt-3 font-body text-sm text-espresso-700/70">Last updated: 10 September 2026</p>

          <p className={p}>
            This policy describes what actually happens on this website —
            written to match this site&rsquo;s real, current behaviour, not
            a generic template.
          </p>

          <h2 className={h2}>What we collect, and how</h2>
          <p className={p}>
            This site has no user accounts, no database, and no server that
            stores anything you submit. Specifically:
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-espresso-900">Contact and booking forms.</strong>{" "}
              When you fill in the contact form or a course booking link, the
              details you type (name, email, phone, message) are used to
              open your own email app or WhatsApp with that message
              pre-filled. Nothing is sent anywhere, and nothing is stored on
              our servers, until <em>you</em> press send in your own email
              app or WhatsApp. From that point, your message is handled as
              an ordinary email or WhatsApp conversation with Pan-Lio Ltd /
              Coach DK Global.
            </li>
            <li>
              <strong className="text-espresso-900">WhatsApp links.</strong> Clicking a
              &ldquo;Chat on WhatsApp&rdquo; button opens WhatsApp with a
              pre-filled message. Once you send it, that conversation is
              subject to WhatsApp&rsquo;s own privacy policy, not this one.
            </li>
            <li>
              <strong className="text-espresso-900">Social links.</strong> Links to our
              Instagram, TikTok, and LinkedIn take you to those platforms,
              which are governed by their own privacy policies.
            </li>
          </ul>

          <h2 className={h2}>Cookies and tracking</h2>
          <p className={p}>
            This site does not set cookies, does not run analytics or
            advertising scripts, and does not track you across visits.
          </p>
          <p className={p}>
            The one exception: page fonts are loaded from Google Fonts&rsquo;
            servers, which — like any external resource — receives your
            device&rsquo;s IP address as part of that request. Google&rsquo;s
            handling of that request is covered by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-espresso-900"
            >
              Google&rsquo;s own privacy policy
            </a>
            , not ours.
          </p>

          <h2 className={h2}>Payments</h2>
          <p className={p}>
            No payments are processed on this website. Course and coaching
            fees are arranged directly with Pan-Lio Ltd / Coach DK Global by
            phone, email, or WhatsApp.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p className={p}>
            Because no personal data is stored by this website itself, there
            is nothing on our servers to request, correct, or delete. If
            you&rsquo;ve previously emailed or messaged us directly and want
            that correspondence deleted, contact us using the details below
            and we&rsquo;ll action it in our email/WhatsApp inbox.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about this policy: <a href="mailto:coachdk@pan-lio.com" className="underline hover:text-espresso-900">coachdk@pan-lio.com</a>
          </p>

          <p className="mt-10 font-body text-xs leading-relaxed text-espresso-700/70">
            This policy is written in good faith to accurately describe this
            site&rsquo;s current, actual behaviour. It is not a substitute
            for legal advice — Pan-Lio Ltd should have it reviewed by a
            qualified lawyer before relying on it, particularly if the site
            later adds analytics, online payments, or account features.
          </p>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
