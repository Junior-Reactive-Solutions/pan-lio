import { ImageResponse } from "next/og";

/**
 * Favicon for the site — rendered at 32×32 and cached by the browser.
 * Uses the Pan-Lio lion mark in the site's sage colour against the sand ground.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#F6F3EC",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lion head in sage */}
          <g fill="#416C60">
            {/* Mane */}
            <path d="M 60 40 Q 50 20 70 10 Q 90 5 110 8 Q 125 12 135 28 Q 140 40 135 55" />
            {/* Head */}
            <circle cx="90" cy="85" r="35" />
            {/* Lower mane */}
            <path d="M 70 110 Q 55 115 50 130 Q 48 140 55 145 Q 70 152 85 148" />
            {/* Snout */}
            <ellipse cx="105" cy="100" rx="28" ry="20" />
            {/* Ear */}
            <path d="M 125 55 Q 140 50 145 65 Q 140 75 130 72" />
          </g>
          {/* Eyes */}
          <g fill="#221E1A" opacity="0.5">
            <circle cx="85" cy="75" r="5" />
            <circle cx="105" cy="75" r="5" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
