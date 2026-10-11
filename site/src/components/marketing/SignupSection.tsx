import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SignupForm } from "./SignupForm";

export function SignupSection() {
  // Stays hidden until the email service is connected, so visitors never see a form that can't work.
  if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID) return null;

  return (
    <section id="guide" className="bg-sage-100 py-16 sm:py-20">
      <Container className="grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Free guide"
            title="Get the Leadership Starter Guide"
            description="Twelve short pages on leading with clarity. Free, with one helpful email a month after that."
            accent="sage"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-sand-300 bg-sand-50 p-6 sm:p-8">
            <SignupForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
