import Image from "next/image";

interface LogoProps {
  variant: "pan-lio" | "coach-dk";
  className?: string;
  themed?: boolean;
}

export function LogoMark({ variant, className, themed }: LogoProps) {
  if (variant === "pan-lio") {
    return (
      <span
        className={className}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      >
        <Image
          src="/images/pan-lio-logo.webp"
          alt="Pan-Lio"
          width={200}
          height={200}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          priority
        />
      </span>
    );
  }

  // Coach DK — placeholder ring until a transparent asset is supplied
  const color = themed ? "#416C60" : "currentColor";
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Coach DK Global"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="80" fill="none" stroke={color} strokeWidth="20" />
      <text
        x="100"
        y="115"
        textAnchor="middle"
        fontSize="52"
        fontWeight="700"
        fontFamily="Georgia, serif"
        fill={color}
      >
        DK
      </text>
    </svg>
  );
}
