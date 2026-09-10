import type { Metadata } from "next";
import { Young_Serif, Bitter } from "next/font/google";
import "./globals.css";

// Verified from the live site: font-family: 'Young Serif' (display) — only
// weight 400 is published by Google Fonts.
const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Verified from the live site: font-family: 'Bitter' (body).
const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.pan-lio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pan-Lio | Training, Leadership Coaching & Investment — East Africa",
    template: "%s | Pan-Lio",
  },
  description:
    "Pan-Lio delivers professional training, leadership coaching, real estate and investment services across Uganda, Rwanda, Kenya, Botswana and beyond.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pan-Lio",
    title: "Pan-Lio | Training, Leadership Coaching & Investment",
    description:
      "Professional training, leadership coaching, real estate and investment services across East and Southern Africa.",
    // No `images` here — the app/opengraph-image.tsx file convention
    // generates and injects a real og:image automatically. A page with its
    // own opengraph-image.tsx (none yet) would override it per-route.
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan-Lio | Training, Leadership Coaching & Investment",
    description:
      "Professional training, leadership coaching, real estate and investment services across East and Southern Africa.",
    // Same image is used automatically via the opengraph-image convention.
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-100 text-espresso-900">
        {children}
      </body>
    </html>
  );
}
