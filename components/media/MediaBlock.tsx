import { cn } from "@/lib/utils";

interface MediaBlockProps {
  children: React.ReactNode;
  className?: string;
  /** Apply subtle shadow */
  shadow?: boolean;
}

export function MediaBlock({ children, className, shadow }: MediaBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-secondary border border-border rounded-2xl p-0",
        shadow && "shadow-[0_1px_2px_hsla(0,0%,0%,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}
