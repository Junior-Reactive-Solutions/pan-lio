import { siInstagram, siTiktok } from "simple-icons";

/**
 * Accurate brand marks for social links (audit §7 / master prompt: "make the
 * icons representing the social links very appealing" + brand-correct).
 *
 * Instagram and TikTok come from Simple Icons (official path data + brand
 * hex, MIT licensed). LinkedIn is NOT available in Simple Icons — it was
 * withdrawn from the library following a legal request from LinkedIn — and
 * Lucide ships no brand/logo icons at all. LinkedIn's mark below is the
 * industry-standard "in" glyph on brand blue (#0A66C2), the same mark used
 * by virtually every icon library that still ships one (Font Awesome,
 * react-icons, etc.) for the sole purpose of a functional "visit our
 * LinkedIn" link.
 */
export type BrandName = "instagram" | "tiktok" | "linkedin";

const LINKEDIN_HEX = "0A66C2";
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 " +
  "0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 " +
  "1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 " +
  "7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 " +
  "20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 " +
  "1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 " +
  "22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const brandData: Record<BrandName, { hex: string; path: string; title: string }> = {
  instagram: { hex: siInstagram.hex, path: siInstagram.path, title: "Instagram" },
  tiktok: { hex: siTiktok.hex, path: siTiktok.path, title: "TikTok" },
  linkedin: { hex: LINKEDIN_HEX, path: LINKEDIN_PATH, title: "LinkedIn" },
};

interface BrandIconProps {
  name: BrandName;
  className?: string;
  /** Render the icon in its own official brand color instead of currentColor. */
  brandColor?: boolean;
}

export function BrandIcon({ name, className, brandColor }: BrandIconProps) {
  const data = brandData[name];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-hidden="true"
      fill={brandColor ? `#${data.hex}` : "currentColor"}
    >
      <title>{data.title}</title>
      <path d={data.path} />
    </svg>
  );
}
