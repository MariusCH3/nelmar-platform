"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const portfolio = [
  { title: "Clinica Astra", type: "Website medical", result: "+132% programări" },
  { title: "Luna Beauty", type: "Shopify DTC", result: "2.4x conversii" },
  { title: "Volt Labs", type: "Platformă digitală", result: "+78% retenție" },
];

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function PortfolioSection() {
  return (
    <section className="space-y-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easing }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
          Portofoliu
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-textMain">
          Colaborări care setează standardul.
        </h2>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-3">
        {portfolio.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: easing }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-textMuted">{item.type}</p>
                  <h3 className="font-display text-xl font-semibold text-brand-textMain">
                    {item.title}
                  </h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-brand-textMain">
                  {item.result}
                </span>
              </div>
              <p className="mt-6 text-sm text-brand-textMuted">
                Studiu de caz complet disponibil la cerere.
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

