import Image from "next/image";
import { cn } from "@/lib/utils";

export interface PlaceholderImageProps {
  /** Aspect ratio as "width/height", e.g. "16/10", "4/5", "21/9" */
  aspect: string;
  /** Rounded corners class, default rounded-2xl */
  rounded?: string;
  className?: string;
  /** Optional overlay label (e.g. "Case Study Visual", "Map") */
  label?: string;
  /** Sizes hint for next/image (responsive) */
  sizes?: string;
  /** Optional real image path or URL; when absent, uses /placeholder.svg */
  src?: string | null;
  /** Alt text for real image; ignored when using placeholder */
  alt?: string;
}

export function PlaceholderImage({
  aspect,
  rounded = "rounded-2xl",
  className,
  label,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  src,
  alt = "",
}: PlaceholderImageProps) {
  const imageSrc = src || "/placeholder.svg";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-secondary border border-border shadow-card-glow",
        rounded,
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={imageSrc}
        alt={src ? alt : ""}
        fill
        className="object-cover"
        sizes={sizes}
        priority={false}
      />
      {label && (
        <span className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
          {label}
        </span>
      )}
    </div>
  );
}
