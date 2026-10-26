import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { founders, foundersIntro } from "@/content/founders";

export function FoundersSection() {
  return (
    <section id="founders" className="scroll-mt-24 bg-sage-100 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow={foundersIntro.eyebrow}
            title={foundersIntro.title}
            description={foundersIntro.description}
            accent="sage"
          />
          <p className="font-display mt-6 max-w-2xl text-xl leading-snug text-espresso-900 sm:text-2xl">
            {foundersIntro.tagline}
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {founders.map((f) => (
            <Reveal key={f.name}>
              <article className="grid items-start gap-8 md:grid-cols-[18rem_1fr] md:gap-12">
                <div className="mx-auto w-full max-w-[18rem] overflow-hidden rounded-3xl border border-sand-300 bg-sand-50 shadow-lg shadow-espresso-900/5">
                  <Image
                    src={f.photo.src}
                    alt={f.photo.alt}
                    width={f.photo.width}
                    height={f.photo.height}
                    sizes="(min-width: 768px) 288px, 90vw"
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-tight text-espresso-900">{f.name}</h3>
                  <p className="mt-3 font-body text-sm font-semibold leading-relaxed text-sage-700">{f.roles}</p>
                  <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-espresso-700">
                    {f.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
