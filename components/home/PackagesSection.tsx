"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

const packages = [
  {
    name: "Essential",
    price: "de la 1.900 €",
    description: "Perfect pentru lansări rapide cu impact premium.",
  },
  {
    name: "Growth",
    price: "de la 3.900 €",
    description: "Suite completă: site, Shopify și campanii coordonate.",
  },
  {
    name: "Premium",
    price: "de la 6.900 €",
    description: "Parteneriat complet cu echipă dedicată și suport IT.",
  },
];

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function PackagesSection() {
  return (
    <section>
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
          Pachete
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-textMain">
          Ritmul tău, cu resursele potrivite.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((pack, index) => (
          <GlassCard
            key={pack.name}
            className="flex h-full flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.1,
              duration: 0.7,
              ease: easing,
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-brand-textMain">
                {pack.name}
              </h3>
              <span className="rounded-full bg-brand-glass px-4 py-1 text-xs text-brand-textMain">
                {pack.price}
              </span>
            </div>
            <p className="mt-4 text-sm text-brand-textMuted">
              {pack.description}
            </p>
            <div className="mt-6">
              <Link
                href="/pachete"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-brand-textMain transition hover:bg-white/10 hover:border-white"
              >
                Vezi pachetele
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

