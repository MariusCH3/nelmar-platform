"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

const stats = [
  { label: "Proiecte active", value: "18" },
  { label: "Clienți", value: "42" },
  { label: "SLA uptime", value: "99.98%" },
  { label: "Timp mediu răspuns", value: "1h 12m" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden rounded-[40px] border border-white/10 bg-brand-surface/80 px-6 py-16 shadow-[0_50px_120px_-60px_rgba(15,23,42,1)] backdrop-blur-2xl sm:px-12">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[40px]"
        style={{ backgroundSize: "250% 250%" }}
        initial={{ opacity: 0.85, backgroundPosition: "0% 50%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-brand-background via-brand-primary/20 to-brand-secondary/30" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute -top-10 -left-6 h-48 w-48 rounded-full bg-brand-primary/30 blur-[140px]"
        animate={{ y: [-10, 12, -10], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-6 right-0 h-60 w-60 rounded-full bg-brand-secondary/30 blur-[150px]"
        animate={{ y: [8, -12, 8], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-brand-primary/20 blur-[130px]"
        animate={{ y: [-6, 10, -6], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
        >
          <p className="text-xs uppercase tracking-[0.55em] text-brand-textMuted">
            Nelmar Studio
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-textMain sm:text-5xl lg:text-6xl">
            Experiențe digitale care mută branduri înainte
          </h1>
          <p className="max-w-2xl text-lg text-brand-textMuted">
            Construim site-uri, magazine și campanii end-to-end, completate de
            suport IT și automatizări pentru branduri care vor să domine piața.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pachete"
              className="rounded-full bg-white px-10 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:shadow-glass"
            >
              Începe proiectul
            </Link>
            <Link
              href="/portofoliu"
              className="rounded-full border border-brand-borderSubtle px-10 py-3 text-sm font-semibold text-brand-textMain transition duration-300 hover:-translate-y-1 hover:bg-brand-glass"
            >
              Vezi portofoliul
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, rotateX: -12, y: 60 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, ease: easing }}
        >
          <GlassCard className="p-7 bg-gradient-to-br from-white/15 via-white/5 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
                  Dashboard client
                </p>
                <p className="font-display text-2xl font-semibold text-brand-textMain">
                  Pulse Nelmar
                </p>
              </div>
              <span className="rounded-full bg-brand-secondary/20 px-3 py-1 text-xs text-brand-secondary">
                Live
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-borderSubtle bg-brand-glass p-4"
                >
                  <p className="text-xs text-brand-textMuted">{stat.label}</p>
                  <p className="text-2xl font-semibold text-brand-textMain">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-secondary/25 to-brand-primary/25 p-4 text-sm text-brand-textMain">
              Roadmap, livrabile și suport într-un singur panou cu notificări în
              timp real.
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

