import Image from "next/image";

interface LogoProps {
  variant: "pan-lio" | "coach-dk";
  className?: string;
  themed?: boolean;
}

export function LogoMark({ variant, className, themed: _themed }: LogoProps) {
  const src =
    variant === "pan-lio"
      ? "/images/pan-lio-logo.webp"
      : "/images/coach-dk-logo.webp";
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
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        priority
      />
    </span>
  );
}
