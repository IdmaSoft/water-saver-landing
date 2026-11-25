import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

// Simple phone mock around a 720x1440 screenshot.
// The outer box takes its position (relative/absolute) from className.
export default function PhoneFrame({ src, alt, sizes, priority = false, className = "relative" }: Props) {
  return (
    <div
      className={`rounded-[2.6rem] bg-ink p-[7px] shadow-[0_30px_60px_-20px_rgba(0,76,104,0.45)] ring-1 ring-black/10 ${className}`}
    >
      <div className="relative aspect-[1/2] overflow-hidden rounded-[2.2rem] bg-card">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="object-cover"
        />
        <span className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/50" aria-hidden />
      </div>
    </div>
  );
}
