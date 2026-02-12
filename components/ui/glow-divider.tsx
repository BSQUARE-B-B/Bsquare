"use client";

import { cn } from "@/lib/utils";

interface GlowDividerProps {
  className?: string;
}

/** Horizontal divider: thin border line with an animated teal glow moving left to right. */
export function GlowDivider({ className }: GlowDividerProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height: "6px" }}
      role="presentation"
      aria-hidden
    >
      {/* Base line */}
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
      {/* Animated glow traveling left to right */}
      <div
        className="absolute top-1/2 h-2 w-1/3 -translate-y-1/2 rounded-full bg-[#45d9a3] opacity-70 blur-[6px] animate-glow-slide motion-reduce:animate-none"
        style={{ left: "-33%" }}
      />
    </div>
  );
}
