"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  icon,
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    damping: 40,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, target, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center gap-4 p-8",
        className
      )}
    >
      {icon && (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner mb-2">
          {icon}
        </div>
      )}
      <div className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
          {prefix}{displayValue}{suffix}
        </span>
      </div>
      <p className="text-foreground/60 font-medium text-lg md:text-xl tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
