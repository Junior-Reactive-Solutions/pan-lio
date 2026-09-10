import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { getSiteStats } from "@/lib/stats";
import { siteNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pan-Lio Ltd and Coach DK Global — WhatsApp, phone, email, or send a message directly. We operate across Uganda, Rwanda, Kenya, Botswana, Ethiopia and the UAE.",
};

const phones = ["+256 780 424010", "+256 782 459180", "+256 772 516890"];

export default function ContactPage() {
  const stats = getSiteStats();

  return (
    <div className="bg-sand-100">
      <SiteHeader links={siteNav} accent="sage" ctaLabel="WhatsApp Us" ctaHref="https://wa.me/256780424010" />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-sage-700">
              Get in Touch
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-espresso-900 sm:text-5xl">
              Let&rsquo;s talk about what you need.
            </h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-espresso-700">
              Whether it&rsquo;s corporate training, one-on-one coaching, or
              a question about Pan-Lio&rsquo;s wider business lines — reach
              us however&rsquo;s easiest.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="rounded-3xl border border-sand-300 bg-sand-50 p-6 sm:p-8">
              <ContactForm />
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <div className="rounded-3xl border border-sand-300 bg-sand-50 p-6 sm:p-8">
                <h2 className="font-display text-lg text-espresso-900">Reach us directly</h2>

                <a
                  href="https://wa.me/256780424010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-3 rounded-2xl bg-sage-100 p-4 transition-colors hover:bg-sage-100/70"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-600 text-sand-50">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-body text-sm font-semibold text-espresso-900">
                      WhatsApp — fastest response
                    </span>
                    <span className="block font-body text-xs text-espresso-700">+256 780 424010</span>
                  </span>
                </a>

                <div className="mt-6">
                  <h3 className="font-body text-xs font-bold uppercase tracking-[0.14em] text-espresso-700/70">
                    Call us
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="flex items-center gap-2.5 font-body text-sm text-espresso-900 hover:text-sage-700"
                        >
                          <Phone className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-body text-xs font-bold uppercase tracking-[0.14em] text-espresso-700/70">
                    Email
                  </h3>
                  <ul className="mt-3 space-y-3">
                    <li>
                      <a href="mailto:coachdk@pan-lio.com" className="flex items-center gap-2.5 font-body text-sm text-espresso-900 hover:text-sage-700">
                        <Mail className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                        coachdk@pan-lio.com
                      </a>
                      <p className="ml-6 font-body text-xs text-espresso-700/70">Coaching &amp; training enquiries</p>
                    </li>
                    <li>
                      <a href="mailto:pkateizi@pan-lio.com" className="flex items-center gap-2.5 font-body text-sm text-espresso-900 hover:text-sage-700">
                        <Mail className="h-4 w-4 shrink-0 text-sage-600" aria-hidden="true" />
                        pkateizi@pan-lio.com
                      </a>
                      <p className="ml-6 font-body text-xs text-espresso-700/70">Business &amp; investment enquiries</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-sand-300 bg-sand-50 p-6 sm:p-8">
                <h2 className="font-display text-lg text-espresso-900">Where we operate</h2>
                <p className="mt-2 font-body text-sm text-espresso-700">
                  Training delivered across {stats.countries} countries in 2026.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stats.cityList.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-3.5 py-1.5 font-body text-xs font-medium text-espresso-900"
                    >
                      <MapPin className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
