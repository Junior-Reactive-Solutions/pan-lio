import { ImageResponse } from "next/og";
import { getSiteStats } from "@/lib/stats";

export const alt = "Pan-Lio — Achieve Excellence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide default social share card, generated at build/request time
 * instead of a static asset — replaces the `/og-image.png` path that was
 * referenced in metadata but never actually existed (audit §7 finding: no
 * og:image anywhere on the live site, so every WhatsApp/LinkedIn share
 * rendered as a bare grey box). Real, live-computed numbers only.
 */
export default async function OpengraphImage() {
  const stats = getSiteStats();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#221e1a",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              color: "#a9c2ba",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Pan-Lio mark */}
            <svg viewBox="0 0 200 200" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <g fill="#a9c2ba">
                <path d="M 60 40 Q 50 20 70 10 Q 90 5 110 8 Q 125 12 135 28 Q 140 40 135 55" />
                <circle cx="90" cy="85" r="35" />
                <path d="M 70 110 Q 55 115 50 130 Q 48 140 55 145 Q 70 152 85 148" />
                <ellipse cx="105" cy="100" rx="28" ry="20" />
                <path d="M 125 55 Q 140 50 145 65 Q 140 75 130 72" />
              </g>
            </svg>
            <div>PAN-LIO &amp; COACH DK GLOBAL</div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 78,
              lineHeight: 1.08,
              color: "#f6f3ec",
              display: "flex",
              maxWidth: 980,
            }}
          >
            Achieve Excellence.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#d8cec0",
              display: "flex",
              marginBottom: 36,
            }}
          >
            Training, leadership coaching &amp; investment across East and Southern Africa
          </div>
          <div style={{ display: "flex", gap: 56 }}>
            {[
              [String(stats.totalDeliveries), "Courses in 2026"],
              [String(stats.cities), "Cities"],
              [String(stats.countries), "Countries"],
            ].map(([value, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 52, color: "#f6f3ec", display: "flex" }}>{value}</div>
                <div style={{ fontSize: 22, color: "#a9c2ba", display: "flex" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
