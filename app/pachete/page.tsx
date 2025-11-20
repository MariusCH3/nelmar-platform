import { GlassCard } from "@/components/ui/GlassCard";

const packages = [
  {
    name: "Essential",
    audience: "Pentru startup-uri și clinici care au nevoie de o lansare premium rapidă.",
    price: "de la 1.900 €",
    bullets: [
      "Audit inițial + workshop de descoperire",
      "Design personalizat și copywriting",
      "Site de prezentare / landing page în Next.js",
      "Integrare formulare, booking și Google Analytics",
      "Setup SEO tehnic și training pentru echipa internă",
    ],
  },
  {
    name: "Growth",
    audience: "Pentru branduri în creștere ce vor ecommerce, marketing și automatizări.",
    price: "de la 3.900 €",
    bullets: [
      "Strategie omnichannel și roadmap trimestrial",
      "Shopify store custom + funnel email/SMS",
      "Campanii paid & social media coordonate lunar",
      "Dashboard Pulse cu KPI și rapoarte live",
      "Optimizări A/B, automatizări și suport prioritar",
    ],
  },
  {
    name: "Premium",
    audience: "Pentru companii ce doresc parteneriat complet digital + IT & suport.",
    price: "de la 6.900 €",
    bullets: [
      "Echipă dedicată (PM, design, dev, marketing, IT)",
      "Platforme web + Shopify avansate, integrare sisteme",
      "Studio content (foto, video, social) inclus lunar",
      "Suport IT & infrastructură cu SLA garantat",
      "Roadmap generat cu AI și monitorizare 24/7",
    ],
  },
];

export default function PachetePage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Pachete
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-textMain">
            Alege ritmul potrivit și noi ne ocupăm de restul.
          </h1>
          <p className="text-lg text-brand-textMuted">
            Fiecare pachet pornește cu un onboarding ghidat. După ce confirmi
            pachetul, vei crea un cont, vei completa chestionarul inteligent și
            vom genera automat roadmap-ul proiectului tău.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {packages.map((pack) => (
            <GlassCard key={pack.name} className="flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-textMuted">
                    {pack.price}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-brand-textMain">
                    {pack.name}
                  </h2>
                </div>
                <span className="rounded-full bg-brand-secondary/20 px-4 py-1 text-xs text-brand-textMain">
                  Nelmar
                </span>
              </div>
              <p className="mt-4 text-sm text-brand-textMuted">
                {pack.audience}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-textMain">
                {pack.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-brand-secondary">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/client"
                className="mt-8 inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-glass"
              >
                Alege acest pachet
              </a>
            </GlassCard>
          ))}
        </section>

        <GlassCard className="bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-transparent px-6 py-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-brand-textMain">
            Nu ești sigur ce pachet ți se potrivește?
          </h2>
          <p className="mt-3 text-brand-textMuted">
            Scrie-ne pe{" "}
            <a className="text-brand-secondary underline" href="mailto:hello@nelmar.studio">
              hello@nelmar.studio
            </a>{" "}
            și îți propunem varianta optimă în 24h, în funcție de obiectivele tale.
          </p>
        </GlassCard>
      </div>
    </main>
  );
}
