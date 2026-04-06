"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function LiquidGlassCard({
  children,
  className,
  tiltStrength = 15,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setX(xPct * tiltStrength);
    setY(-(yPct * tiltStrength));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "liquid-glass relative overflow-hidden rounded-2xl group",
        className
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
