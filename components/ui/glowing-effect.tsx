"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });
  const glowY = useSpring(mouseY, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [disabled, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <motion.div
        className={`absolute -inset-[${spread}px] rounded-[inherit] ${
          glow ? "blur-xl" : ""
        }`}
        style={{
          x: glowX,
          y: glowY,
          background: glow
            ? `radial-gradient(${proximity * 2}px ${proximity * 2}px at center, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1) ${proximity * (1 - inactiveZone)}px, transparent)`
            : "transparent",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

