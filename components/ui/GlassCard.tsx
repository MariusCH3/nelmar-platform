"use client";

import { motion, type MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;

export function GlassCard({
  children,
  className,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_50px_90px_-45px_rgba(15,23,42,1)] ${className ?? ""}`}
      {...motionProps}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

