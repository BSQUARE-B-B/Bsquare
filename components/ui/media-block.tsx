"use client";

import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export interface MediaBlockProps {
  /** Image URL or path; when set, shows image */
  imageUrl?: string | null;
  /** Video URL (self-hosted path or YouTube/Vimeo); when set, shows video */
  videoUrl?: string | null;
  /** Aspect ratio when showing placeholder or image, e.g. "16/10", "21/9" */
  aspect?: string;
  /** Overlay label when showing placeholder */
  placeholderLabel?: string;
  /** Extra class on wrapper */
  className?: string;
  /** Apply subtle shadow */
  shadow?: boolean;
  /** Sizes for image/placeholder */
  sizes?: string;
  /** Rounded corners, e.g. rounded-t-2xl rounded-b-none for cards */
  rounded?: string;
  children?: React.ReactNode;
}

function isEmbedUrl(url: string): boolean {
  return /youtube\.com|youtu\.be|vimeo\.com/i.test(url);
}

function embedSrc(url: string): string {
  if (/youtu\.be\//.test(url)) {
    const id = url.split(/youtu\.be\//)[1]?.split("?")[0] ?? "";
    return `https://www.youtube.com/embed/${id}`;
  }
  if (/youtube\.com\/watch/.test(url)) {
    const m = url.match(/[?&]v=([^&]+)/);
    return m ? `https://www.youtube.com/embed/${m[1]}` : url;
  }
  if (/vimeo\.com/.test(url)) {
    const id = url.split("vimeo.com/")[1]?.split("?")[0] ?? "";
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
}

export function MediaBlock({
  imageUrl,
  videoUrl,
  aspect = "16/9",
  placeholderLabel,
  className,
  shadow,
  sizes,
  rounded = "rounded-2xl",
  children,
}: MediaBlockProps) {
  const wrapperCn = cn(
    "overflow-hidden bg-secondary border border-border",
    rounded,
    shadow && "shadow-[0_1px_2px_hsla(0,0%,0%,0.04)]",
    className
  );

  if (children) {
    return <div className={wrapperCn}>{children}</div>;
  }

  if (imageUrl) {
    return (
      <div className={wrapperCn}>
        <PlaceholderImage
          src={imageUrl}
          aspect={aspect}
          sizes={sizes}
          rounded={rounded}
          className="border-0"
        />
      </div>
    );
  }

  if (videoUrl) {
    if (isEmbedUrl(videoUrl)) {
      return (
        <div className={cn(wrapperCn, "relative")} style={{ aspectRatio: aspect }}>
          <iframe
            src={embedSrc(videoUrl)}
            title="Video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className={wrapperCn}>
        <div className="relative w-full" style={{ aspectRatio: aspect }}>
          <video
            src={videoUrl}
            controls
            className="absolute inset-0 h-full w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperCn}>
      <PlaceholderImage
        aspect={aspect}
        label={placeholderLabel}
        sizes={sizes}
        rounded={rounded}
        className="border-0"
      />
    </div>
  );
}
