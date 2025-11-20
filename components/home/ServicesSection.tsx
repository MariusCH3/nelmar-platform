"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    title: "Web Development",
    description:
      "Site-uri de prezentare rapide, optimizate pentru conversii și experiențe fluide.",
  },
  {
    title: "Shopify Stores",
    description:
      "Magazine online scalabile cu funnel-uri personalizate și integrare logistică.",
  },
  {
    title: "Marketing & Social Media",
    description:
      "Campanii orchestrate, paid + organic, cu rapoarte clare și optimizări continue.",
  },
  {
    title: "Editare Foto/Video & Content",
    description:
      "Producție și post-producție premium pentru campanii memorabile.",
  },
];

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function ServicesSection() {
  return (
    <section>
      <motion.div
        className="space-y-3 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easing }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
          Servicii
        </p>
        <h2 className="font-display text-3xl font-semibold text-brand-textMain">
          Suite completă pentru branduri digitale.
        </h2>
        <p className="text-brand-textMuted">
          Strategie, design, code și marketing în aceeași echipă.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <GlassCard
            key={service.title}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.1,
              duration: 0.7,
              ease: easing,
            }}
          >
            <div className="text-2xl text-brand-secondary">●</div>
            <h3 className="mt-4 font-display text-xl font-semibold text-brand-textMain">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-brand-textMuted">
              {service.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

