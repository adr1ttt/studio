"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MagneticHover({
  children,
  className,
  strength = 30, // How far it moves heavily influences physics weighting
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Position state
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Physics springs for ultra-smooth buttery motion
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (-0.5 to 0.5 roughly)
    setX(((clientX - centerX) / width) * strength);
    setY(((clientY - centerY) / height) * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setX(0);
    setY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      {children}
    </motion.div>
  );
}
