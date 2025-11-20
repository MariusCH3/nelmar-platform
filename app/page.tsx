"use client";

import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-textMain">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 sm:px-6 lg:px-10">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PackagesSection />
        <PortfolioSection />

        <section className="mx-4 rounded-[40px] border border-white/10 bg-brand-surface/80 px-6 py-16 text-center shadow-[0_50px_120px_-60px_rgba(15,23,42,1)] backdrop-blur-2xl sm:px-10">
          <h2 className="font-display text-3xl font-semibold text-brand-textMain">
            Hai să ducem brandul tău la nivelul următor.
          </h2>
          <p className="mt-3 text-brand-textMuted">
            O echipă dedicată, un proces clar și rezultate pe care le poți măsura.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-slate-100"
          >
            Programează o discuție
          </Link>
        </section>
      </div>
    </main>
  );
}

