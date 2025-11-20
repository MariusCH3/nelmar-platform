"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

type IntakeFormData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  projectTypes: string[];
  otherProjectType: string;
  goals: string;
  budgetRange: string;
  needsIT: boolean;
};

const projectTypeOptions = [
  "Website de prezentare",
  "Magazin online / Shopify",
  "Marketing digital",
  "Foto / Video / Content Creation",
  "Branding / Identitate vizuală",
  "Audit IT + infrastructură",
  "Mentenanță & suport IT",
];

const budgetOptions = [
  "sub 500€",
  "500–1500€",
  "1500–3000€",
  "3000–5000€",
  "peste 5000€",
];

const stepTitles = [
  "Date de contact",
  "Tipul proiectului",
  "Obiective & buget",
  "Rezumat",
];

const initialState: IntakeFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  websiteUrl: "",
  projectTypes: [],
  otherProjectType: "",
  goals: "",
  budgetRange: "",
  needsIT: false,
};

export function IntakeForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<IntakeFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isLastStep = step === stepTitles.length - 1;

  const canContinue = useMemo(() => {
    if (step === 0) {
      return Boolean(formData.email.trim());
    }
    if (step === 1) {
      return (
        formData.projectTypes.length > 0 ||
        Boolean(formData.otherProjectType.trim())
      );
    }
    return true;
  }, [step, formData]);

  const toggleProjectType = (value: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(value);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((item) => item !== value)
          : [...prev.projectTypes, value],
      };
    });
  };

  const handleSubmit = async () => {
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      ...formData,
      projectTypes: [
        ...formData.projectTypes,
        ...(formData.otherProjectType.trim()
          ? [formData.otherProjectType.trim()]
          : []),
      ],
    };

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "A apărut o eroare neașteptată.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Nu am reușit să trimitem formularul. Încearcă din nou."
      );
    }
  };

  const handleNext = () => {
    if (!canContinue) return;
    setStep((prev) => Math.min(prev + 1, stepTitles.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const summaryProjectTypes = [
    ...formData.projectTypes,
    ...(formData.otherProjectType.trim()
      ? [formData.otherProjectType.trim()]
      : []),
  ];

  if (status === "success") {
    return (
      <GlassCard className="w-full max-w-3xl px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-textMuted">
            Mulțumim
          </p>
          <h1 className="font-display text-3xl font-semibold text-brand-textMain">
            Am primit cererea ta
          </h1>
          <p className="text-brand-textMuted">
            Echipa Nelmar analizează informațiile și pregătește proiectul tău.
            Vei primi un email cu pașii următori și un link de acces în platformă.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-brand-textMain transition hover:bg-white/10"
            >
              Înapoi la homepage
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-background transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
            >
              Contact direct
            </Link>
          </div>
        </motion.div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="w-full max-w-3xl px-6 py-8 sm:px-10 sm:py-12">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-textMuted">
          Intake Nelmar Studio
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-textMain sm:text-4xl">
          Începe proiectul tău
        </h1>
        <p className="text-brand-textMuted">
          Completează pașii de mai jos. După trimitere îți creăm contul, proiectul
          și roadmap-ul inițial automat.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-textMuted">
        {stepTitles.map((title, index) => (
          <div
            key={title}
            className={`h-[2px] w-16 rounded-full ${
              index <= step ? "bg-brand-secondary" : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-brand-textMuted">
        Pas {step + 1} din {stepTitles.length}: {stepTitles[step]}
      </p>

      <AnimatePresence mode="wait">
        <motion.form
          key={step}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-8 space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (isLastStep) {
              void handleSubmit();
            }
          }}
        >
          {step === 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">Nume complet</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: event.target.value,
                    }))
                  }
                  placeholder="Alex Marin"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">
                  Email (va fi folosit pentru cont)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  placeholder="tu@companie.com"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: event.target.value,
                    }))
                  }
                  placeholder="+40 712 345 678"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">Nume afacere</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      companyName: event.target.value,
                    }))
                  }
                  placeholder="Nelmar Creative SRL"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm text-brand-textMuted">
                  Website existent?
                </label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      websiteUrl: event.target.value,
                    }))
                  }
                  placeholder="https://proiectul-tau.ro"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-brand-textMuted">
                Selectează toate direcțiile care te interesează.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {projectTypeOptions.map((option) => {
                  const checked = formData.projectTypes.includes(option);
                  return (
                    <label
                      key={option}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-sm text-brand-textMain transition hover:border-white/30"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleProjectType(option)}
                        className="h-4 w-4 rounded border-brand-borderSubtle text-brand-secondary focus:ring-brand-secondary"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">
                  Altceva? (opțional)
                </label>
                <input
                  type="text"
                  value={formData.otherProjectType}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherProjectType: event.target.value,
                    }))
                  }
                  placeholder="Descrie rapid alt tip de proiect"
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">
                  Care sunt principalele obiective?
                </label>
                <textarea
                  rows={4}
                  value={formData.goals}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      goals: event.target.value,
                    }))
                  }
                  placeholder="Ex: lansare website nou, automatizări marketing, campanii paid media..."
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-brand-textMuted">Buget orientativ</label>
                <select
                  value={formData.budgetRange}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      budgetRange: event.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-brand-textMain focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                >
                  <option value="">Selectează o plajă de buget</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-background/60 px-4 py-3 text-sm text-brand-textMain">
                <input
                  type="checkbox"
                  checked={formData.needsIT}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      needsIT: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 rounded border-brand-borderSubtle text-brand-secondary focus:ring-brand-secondary"
                />
                <span>Ai nevoie și de audit / mentenanță IT & rețea?</span>
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl text-brand-textMain">
                Rezumatul răspunsurilor
              </h3>
              <div className="space-y-3 text-sm text-brand-textMuted">
                <p>
                  <span className="text-brand-textMain">Contact:</span>{" "}
                  {formData.fullName || "—"} / {formData.email}
                </p>
                <p>
                  <span className="text-brand-textMain">Telefon:</span>{" "}
                  {formData.phone || "—"}
                </p>
                <p>
                  <span className="text-brand-textMain">Companie:</span>{" "}
                  {formData.companyName || "—"}
                </p>
                <p>
                  <span className="text-brand-textMain">Website:</span>{" "}
                  {formData.websiteUrl || "—"}
                </p>
                <p>
                  <span className="text-brand-textMain">Tip proiect:</span>{" "}
                  {summaryProjectTypes.length > 0
                    ? summaryProjectTypes.join(", ")
                    : "Nu a fost selectat"}
                </p>
                <p>
                  <span className="text-brand-textMain">Obiective:</span>{" "}
                  {formData.goals || "—"}
                </p>
                <p>
                  <span className="text-brand-textMain">Buget:</span>{" "}
                  {formData.budgetRange || "—"}
                </p>
                <p>
                  <span className="text-brand-textMain">Audit / mentenanță IT:</span>{" "}
                  {formData.needsIT ? "Da" : "Nu"}
                </p>
              </div>
              <p className="text-xs text-brand-textMuted">
                După trimitere primești un email cu acces în platformă. Toate datele sunt
                stocate în siguranță.
              </p>
            </div>
          )}

          {errorMessage && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}

          <div className="flex flex-wrap justify-between gap-4 pt-4">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-brand-textMain transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Înapoi
            </button>
            <button
              type={isLastStep ? "submit" : "button"}
              onClick={!isLastStep ? handleNext : undefined}
              disabled={!canContinue || status === "submitting"}
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-background transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLastStep ? "Trimite cererea" : "Continuă"}
            </button>
          </div>
        </motion.form>
      </AnimatePresence>
    </GlassCard>
  );
}

