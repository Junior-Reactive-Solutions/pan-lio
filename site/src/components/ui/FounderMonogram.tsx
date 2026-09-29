import Image from "next/image";

export function FounderMonogram({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-64 w-64 sm:h-80 sm:w-80" : "h-56 w-56 sm:h-72 sm:w-72";
  const imageSize = size === "lg" ? 320 : 224;

  return (
    <div
      className={`relative mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-clay-500 to-sage-600 p-1.5 ${dims}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-ink-950">
        <Image
          src="/images/deo-portrait.jpg"
          alt="Deo Kateizi"
          width={320}
          height={320}
          sizes={`(max-width: 640px) ${imageSize}px, ${imageSize}px`}
          priority
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
