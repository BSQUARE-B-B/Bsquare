import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Aspect ratio as "width/height", e.g. "16/10", "4/5", "21/9" */
  aspect: string;
  /** Rounded corners class, default rounded-2xl */
  rounded?: string;
  className?: string;
  /** Optional overlay label (e.g. "Case Study Visual", "Map") */
  label?: string;
  /** Sizes hint for next/image (responsive) */
  sizes?: string;
}

export function PlaceholderImage({
  aspect,
  rounded = "rounded-2xl",
  className,
  label,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PlaceholderImageProps) {
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
        src="/placeholder.svg"
        alt=""
        fill
        className="object-contain"
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
