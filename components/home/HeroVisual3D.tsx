"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type HeroVisual3DProps = {
  className?: string;
  children: React.ReactNode;
};

export function HeroVisual3D({ className = "", children }: HeroVisual3DProps) {
  const [enableParallax, setEnableParallax] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const parallaxX = useTransform(pointerX, [-40, 40], [-12, 12]);
  const parallaxY = useTransform(pointerY, [-40, 40], [12, -12]);
  const parallaxRotateX = useTransform(pointerY, [-40, 40], [6, -6]);
  const parallaxRotateY = useTransform(pointerX, [-40, 40], [-6, 6]);

  useEffect(() => {
    const update = () => {
      setEnableParallax(window.innerWidth >= 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!enableParallax) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      pointerX.set(Math.max(-40, Math.min(40, offsetX / 8)));
      pointerY.set(Math.max(-40, Math.min(40, offsetY / 8)));
    },
    [enableParallax, pointerX, pointerY]
  );

  const handlePointerLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-brand-surface/70 p-[1px] shadow-glass backdrop-blur-2xl ${className}`}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[32px]"
        style={{ backgroundSize: "200% 200%" }}
        initial={{ backgroundPosition: "0% 50%", opacity: 0.9 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-background via-brand-primary/20 to-brand-secondary/25" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-6 h-40 w-40 rounded-full bg-brand-primary/25 blur-[120px]"
        animate={{ y: [-12, 8, -12], opacity: [0.7, 0.85, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-brand-secondary/25 blur-[130px]"
        animate={{ y: [10, -8, 10], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-brand-primary/15 blur-[140px]"
        animate={{ y: [-6, 6, -6], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 blur-[2px]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/25 opacity-50 blur-[3px]" />
      </motion.div>

      <motion.div
        className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-2xl"
        style={
          enableParallax
            ? {
                x: parallaxX,
                y: parallaxY,
                rotateX: parallaxRotateX,
                rotateY: parallaxRotateY,
              }
            : {}
        }
        animate={
          enableParallax
            ? undefined
            : { y: [-4, 4, -4] }
        }
        transition={
          enableParallax
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

