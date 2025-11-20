import { GlassCard } from "@/components/ui/GlassCard";

const mockProjects = [
  { name: "Clinica Astra", status: "În derulare", nextStep: "Livrare ecosistem blog" },
  { name: "Luna Beauty", status: "Onboarding", nextStep: "Workshop funnel    " },
];

const mockTickets = [
  { title: "Optimizare Shopify", priority: "High", eta: "În curs" },
  { title: "Setup cont Meta Ads", priority: "Normal", eta: "Planificat" },
];

export default function ClientDashboardPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Nelmar Studio
          </p>
          <h1 className="font-display text-4xl font-semibold">
            Bun venit în spațiul tău, Nelmar Client.
          </h1>
          <p className="text-brand-textMuted">
            Vezi rapid proiectele active, tichetul tău curent și abonamentul Nelmar. (Datele sunt momentan mock – aici vom conecta API-ul.)
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-textMuted">
                  Proiectele tale
                </p>
                <h2 className="font-display text-2xl font-semibold">
                  Status Nelmar Pulse
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {mockProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-brand-borderSubtle/60 bg-brand-glass/40 p-4"
                >
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-semibold text-brand-textMain">{project.name}</p>
                    <span className="text-brand-secondary">{project.status}</span>
                  </div>
                  <p className="text-sm text-brand-textMuted">
                    Următorul pas: {project.nextStep}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-textMuted">
              Abonamentul tău
            </p>
            <h2 className="font-display text-2xl font-semibold">Growth+</h2>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>• 40h / lună echipă dedicată</li>
              <li>• Shopify & campanii integrate</li>
              <li>• Support IT cu SLA 24/7</li>
            </ul>
            <button className="rounded-full border border-brand-borderSubtle px-6 py-2 text-sm font-semibold text-brand-textMain transition hover:bg-brand-glass">
              Gestionează abonamentul
            </button>
          </GlassCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">
                Tichete deschise
              </h3>
              <button className="rounded-full border border-brand-borderSubtle px-4 py-2 text-xs font-semibold text-brand-textMain transition hover:bg-brand-glass">
                Deschide tichet
              </button>
            </div>
            <div className="space-y-3">
              {mockTickets.map((ticket) => (
                <div
                  key={ticket.title}
                  className="rounded-2xl border border-brand-borderSubtle/50 bg-brand-glass/40 p-4 text-sm"
                >
                  <p className="font-semibold text-brand-textMain">{ticket.title}</p>
                  <p className="text-brand-textMuted">
                    Prioritate: {ticket.priority} • ETA: {ticket.eta}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="space-y-4">
            <h3 className="font-display text-xl font-semibold">
              Notițe & livrabile recente
            </h3>
            <ul className="space-y-3 text-sm text-brand-textMuted">
              <li>• Livrare wireframes pentru landing nova-med.ro (ieri)</li>
              <li>• MVP roadmap aprobat pentru Q2 (acum 2 zile)</li>
              <li>• Export rapoarte Meta Ads februarie (acum 5 zile)</li>
            </ul>
            <p className="rounded-2xl border border-brand-borderSubtle/50 bg-brand-glass/40 p-4 text-xs text-brand-textMuted">
              Aceasta este o secțiune placeholder — aici vom integra API-ul Nelmar
              Pulse imediat ce avem schema finală.
            </p>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

