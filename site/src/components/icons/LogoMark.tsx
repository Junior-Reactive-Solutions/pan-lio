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
    <Image
      src={src}
      alt={alt}
      width={variant === "coach-dk" ? 400 : 200}
      height={200}
      className={className}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
