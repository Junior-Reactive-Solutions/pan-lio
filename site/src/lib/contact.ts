export const whatsappNumbers = [
  { display: "+256 780 424010", digits: "256780424010" },
  { display: "+256 782 459180", digits: "256782459180" },
] as const;

/** `encodedText` must already be URL-encoded (use encodeURIComponent). */
export function whatsappUrl(digits: string, encodedText?: string) {
  return `https://wa.me/${digits}${encodedText ? `?text=${encodedText}` : ""}`;
}

/** Single-link spots (header buttons) use the first number. */
export const primaryWhatsappDigits = whatsappNumbers[0].digits;
