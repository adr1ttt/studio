import Link from "next/link";
import { cn } from "@/lib/utils";
import { NewsItem } from "@/lib/types";

interface NewsTickerProps {
  items: NewsItem[];
  className?: string;
  speed?: number;
}

export function NewsTicker({ items, className, speed = 30 }: NewsTickerProps) {
  // Duplicate the items to create seamless loop
  const duplicated = [...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden relative z-[60] py-2",
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
          <Link
            key={i}
            href={`/news/${item.id}`}
            className="inline-flex items-center gap-4 px-8 text-sm font-medium text-foreground/70 hover:text-white transition-colors tracking-wide group"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(165,0,68,0.8)] group-hover:scale-125 transition-transform" />
            {item.headline}
          </Link>
        ))}
      </div>
    </div>
  );
}
