import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappNumbers, whatsappUrl } from "@/lib/contact";

type ButtonAccent = "sage" | "clay" | "dark" | "light";

/** One WhatsApp button per company number. */
export function WhatsAppButtons({
  accent = "sage",
  variant = "solid",
  encodedText,
}: {
  accent?: ButtonAccent;
  variant?: "solid" | "outline" | "ghost";
  encodedText?: string;
}) {
  return (
    <>
      {whatsappNumbers.map((n) => (
        <Button
          key={n.digits}
          href={whatsappUrl(n.digits, encodedText)}
          accent={accent}
          variant={variant}
          icon={<MessageCircle className="h-4 w-4" />}
        >
          WhatsApp {n.display}
        </Button>
      ))}
    </>
  );
}
