import { GlassCard } from "@/components/ui/GlassCard";

const serviceClusters = [
  {
    title: "Experiențe Web & Shopify",
    description:
      "Site-uri de prezentare și magazine Shopify optimizate pentru conversii, cu infrastructură scalabilă.",
    items: [
      "Arhitectură UX, wireframes și design high-fidelity",
      "Site-uri în Next.js și magazine Shopify Plus",
      "Integrare CRM, ERP, plăți și logistică",
      "Optimizare Core Web Vitals & SEO tehnic",
      "Mentenanță și îmbunătățiri continue",
    ],
  },
  {
    title: "Marketing & Social Studio",
    description:
      "Campanii orchestrate cap-coadă: research, strategie, content și raportare.",
    items: [
      "Campanii paid media (Meta, Google, TikTok)",
      "Content calendar și management social media",
      "Automatizări email/SMS și funnel-uri de nurturare",
      "Rapoarte live în dashboard-ul Nelmar",
      "Growth experiments și optimizări A/B",
    ],
  },
  {
    title: "Content, Foto & Video",
    description:
      "Producție premium pentru lansări, campanii și employer branding.",
    items: [
      "Concept creativ + storyboard",
      "Ședințe foto și filmări on-site",
      "Editare, motion graphics și subtitrare",
      "Livrabile pentru social, ads și OOH",
      "Asset library accesibilă în cloud",
    ],
  },
  {
    title: "IT & Infrastructură pentru clinici",
    description:
      "Suport tehnic, securitate și digitalizare a fluxurilor operaționale.",
    items: [
      "Audit rețea, servere și echipamente",
      "Implementare sisteme de backup și monitorizare",
      "Helpdesk cu SLA și intervenții remote",
      "Digitalizare formulare + integrare DMS",
      "Training pentru echipe și politici de securitate",
    ],
  },
];

const process = [
  {
    title: "Întelegere & diagnostic",
    detail:
      "Workshop cu stakeholderii pentru a cartografia obiectivele, publicul și capabilitățile existente.",
  },
  {
    title: "Strategie și roadmap",
    detail:
      "Livrăm planul cu priorități, timeline și ownership clar, sincronizat cu resursele echipei tale.",
  },
  {
    title: "Execuție și QA continuu",
    detail:
      "Iterăm transparent, cu sprint reviews, rapoarte live în Pulse Nelmar și QA tehnic/funcțional.",
  },
  {
    title: "Lansare și suport",
    detail:
      "Go-live asistat, monitorizare 24/7 și sesiuni de knowledge transfer pentru echipa internă.",
  },
];

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Servicii
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-textMain">
            Soluții end-to-end pentru branduri care vor viteză și claritate.
          </h1>
          <p className="text-lg text-brand-textMuted">
            Combinăm strategie, design, tehnologie și marketing sub aceeași
            umbrelă ca să construim experiențe coerente, măsurabile și scalabile.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {serviceClusters.map((cluster) => (
            <GlassCard key={cluster.title} className="h-full">
              <h2 className="font-display text-2xl font-semibold text-brand-textMain">
                {cluster.title}
              </h2>
              <p className="mt-2 text-sm text-brand-textMuted">
                {cluster.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-textMain">
                {cluster.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-secondary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </section>

        <GlassCard className="bg-gradient-to-br from-brand-surface/80 to-brand-background/50">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-textMain">
            Procesul nostru, calibrat pe business-ul tău
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {process.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-borderSubtle text-lg font-semibold text-brand-primary">
                  {index + 1}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-brand-textMain">
                    {step.title}
                  </p>
                  <p className="text-sm text-brand-textMuted">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  );
}

