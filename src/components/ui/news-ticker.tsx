"use client";

import { cn } from "@/lib/utils";

interface NewsTickerProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function NewsTicker({ items, className, speed = 30 }: NewsTickerProps) {
  // Duplicate the items to create seamless loop
  const duplicated = [...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-primary/10 backdrop-blur-xl border-b border-white/5",
        className
      )}
    >
      <div
        className="flex items-center whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 text-sm font-medium text-foreground/70 tracking-wide"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(165,0,68,0.8)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
