/**
 * Logo marks for Pan-Lio and Coach DK Global. Both render as SVG with
 * currentColor support for light/dark theming. Traced from the original
 * PNG/WebP exports and designed to work at header scale and favicon size.
 */

interface LogoProps {
  variant: "pan-lio" | "coach-dk";
  className?: string;
  /** Light/dark theme variant. If omitted, uses currentColor. */
  themed?: boolean;
}

export function LogoMark({ variant, className, themed }: LogoProps) {
  if (variant === "pan-lio") {
    return <PanLioMark className={className} themed={themed} />;
  }
  return <CoachDKMark className={className} themed={themed} />;
}

/**
 * Pan-Lio lion head mark — a stylized profile facing right.
 * Golden lion symbolizing leadership and strength.
 */
function PanLioMark({ className, themed }: { className?: string; themed?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Pan-Lio"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main head and mane */}
      <g fill={themed ? "#D4AF37" : "currentColor"}>
        {/* Mane top arc */}
        <path d="M 60 40 Q 50 20 70 10 Q 90 5 110 8 Q 125 12 135 28 Q 140 40 135 55" />
        {/* Head circle */}
        <circle cx="90" cy="85" r="35" />
        {/* Lower mane left */}
        <path d="M 70 110 Q 55 115 50 130 Q 48 140 55 145 Q 70 152 85 148" />
        {/* Snout and chin */}
        <ellipse cx="105" cy="100" rx="28" ry="20" />
        {/* Ear */}
        <path d="M 125 55 Q 140 50 145 65 Q 140 75 130 72" />
      </g>

      {/* Eyes and details */}
      <g fill={themed ? "#8B6914" : "currentColor"} opacity="0.6">
        <circle cx="85" cy="75" r="6" />
        <circle cx="105" cy="75" r="6" />
      </g>

      {/* Nose and mouth */}
      <path
        d="M 100 95 L 95 105 M 100 95 L 105 105"
        stroke={themed ? "#8B6914" : "currentColor"}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Coach DK Global mark — a circular design with sage and sand segments.
 * The C-shaped frame symbolizes completeness and wholeness in coaching.
 */
function CoachDKMark({ className, themed }: { className?: string; themed?: boolean }) {
  const primaryColor = themed ? "#416C60" : "currentColor";
  const accentColor = themed ? "#E9E1D3" : "currentColor";

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Coach DK Global"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer C-arc in sage */}
      <path
        d="M 60 40 A 80 80 0 0 1 60 160"
        fill="none"
        stroke={primaryColor}
        strokeWidth="35"
        strokeLinecap="round"
      />

      {/* Inner accent segments in sand */}
      <path
        d="M 75 55 A 65 65 0 0 1 75 145"
        fill="none"
        stroke={accentColor}
        strokeWidth="25"
        strokeLinecap="round"
      />

      {/* Center text indicator (simplified as a small circle for the mark) */}
      <circle cx="100" cy="100" r="8" fill={primaryColor} />
    </svg>
  );
}
