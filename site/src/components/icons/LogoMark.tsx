import Image from "next/image";

interface LogoProps {
  variant: "pan-lio" | "coach-dk";
  className?: string;
  /** When true, applies mix-blend-mode:screen so the logo works on dark backgrounds */
  themed?: boolean;
}

export function LogoMark({ variant, className, themed }: LogoProps) {
  const src = variant === "pan-lio" ? "/images/2.webp" : "/images/1.webp";
  const alt = variant === "pan-lio" ? "Pan-Lio" : "Coach DK Global";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          mixBlendMode: themed ? "screen" : undefined,
        }}
        priority
      />
    </span>
  );
}
