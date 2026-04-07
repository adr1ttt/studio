"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 1.2,
  distance = 40,
  blur = true,
  once = true,
}: FadeInProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: blur ? "blur(4px)" : "blur(0px)",
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-5% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("will-change-transform opacity-will-change", className)}
      style={{ transform: "translateZ(0)" }}
    >
      {children}
    </motion.div>
  );
}
