import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    name: "Clinica Astra",
    type: "Website medical + platformă pacienți",
    metric: "+132% programări online",
    description:
      "Am reconstruit experiența digitală end-to-end: site ultra-rapid, integrare cu CRM și formulare inteligente pentru pacienți.",
    services: ["Next.js", "Marketing medical", "Automatizări CRM"],
  },
  {
    name: "Luna Beauty",
    type: "Shopify DTC global",
    metric: "2.4x conversii în 90 de zile",
    description:
      "Shopify Plus cu bundling dinamic, storytelling video și campanii orchestrate pentru lansarea în 3 piețe.",
    services: ["Shopify Plus", "Content studio", "Paid media"],
  },
  {
    name: "Volt Labs",
    type: "Platformă SaaS B2B",
    metric: "+78% retenție clienți",
    description:
      "Am redesenat produsul, am creat hub-ul de onboarding și un program automatizat de customer success.",
    services: ["Product redesign", "Customer success", "Video onboarding"],
  },
  {
    name: "Nova Medical",
    type: "Video + campanie omnichannel",
    metric: "Mai multe programări la premium services",
    description:
      "Documentare video, asset library și campanie integrată care a repoziționat clinica pe segmentul premium.",
    services: ["Video production", "Social media", "Media buying"],
  },
];

export default function PortofoliuPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Portofoliu
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-textMain">
            Proiecte construite pentru rezultate concrete.
          </h1>
          <p className="text-lg text-brand-textMuted">
            Colaborăm cu clinici, e-commerce, startup-uri și branduri care vor
            să accelereze digital. Mai jos sunt câteva favorite recente.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <GlassCard key={project.name} className="h-full p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-textMuted">{project.type}</p>
                  <h2 className="font-display text-2xl font-semibold text-brand-textMain">
                    {project.name}
                  </h2>
                </div>
                <span className="rounded-full bg-brand-secondary/15 px-3 py-1 text-xs text-brand-textMain">
                  {project.metric}
                </span>
              </div>
              <p className="mt-4 text-sm text-brand-textMuted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-brand-textMuted">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-brand-borderSubtle px-4 py-1"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </section>

        <GlassCard className="bg-gradient-to-br from-brand-primary/15 via-brand-secondary/15 to-transparent px-6 py-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-brand-textMain">
            Vrei să vezi un studiu de caz complet?
          </h2>
          <p className="mt-3 text-brand-textMuted">
            Trimite-ne un mesaj și îți arătăm exact cum ar putea arăta transformarea
            brandului tău.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-slate-100"
          >
            Programează o discuție
          </a>
        </GlassCard>
      </div>
    </main>
  );
}

