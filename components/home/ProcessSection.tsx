"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Descoperire",
    description: "Înțelegem publicul, contextul și obiectivele brandului.",
  },
  {
    title: "Planificare",
    description: "Construim roadmap, arhitectură și prototipuri interactive.",
  },
  {
    title: "Dezvoltare",
    description: "Implementare iterativă cu QA continuu și rapoarte transparente.",
  },
  {
    title: "Lansare",
    description: "Go-live asistat, monitorizare și suport dedicat 24/7.",
  },
];

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function ProcessSection() {
  return (
    <section className="space-y-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easing }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
          Proces
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-textMain">
          Timeline premium. Claritate și control.
        </h2>
      </motion.div>
      <div className="relative flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="absolute left-5 top-8 h-[calc(100%-3rem)] w-px bg-brand-borderSubtle sm:left-auto sm:right-1/2 sm:h-px sm:w-4/6" />
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative flex gap-4 sm:flex-col sm:text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: easing,
            }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-borderSubtle bg-brand-glass text-lg font-semibold text-brand-primary">
              {index + 1}
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-brand-textMain">
                {step.title}
              </p>
              <p className="text-sm text-brand-textMuted">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

