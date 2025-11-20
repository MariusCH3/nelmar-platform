import { GlassCard } from "@/components/ui/GlassCard";

const stats = [
  { label: "Ani de experiență combinată", value: "12+" },
  { label: "Specialiști în echipă", value: "18" },
  { label: "Proiecte livrate în 2024", value: "44" },
  { label: "NPS clienți", value: "92/100" },
];

const values = [
  {
    title: "Transparență radicală",
    detail:
      "Status-uri zilnice în Pulse Nelmar, acces în timp real la livrabile și calendare partajate.",
  },
  {
    title: "Design cu sens",
    detail:
      "Estetică Apple-style, dar mereu legată de obiective clare de business și experiență utilizator.",
  },
  {
    title: "Tehnologie potrivită",
    detail:
      "Next.js, Shopify, Supabase și instrumente low/no-code pentru a lansa mai repede fără compromisuri.",
  },
  {
    title: "Parteneriat real",
    detail:
      "Audităm, sfătuim, livrăm și rămânem aproape pentru a ajusta strategia trimestrial.",
  },
];

export default function DesprePage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Despre Nelmar Studio
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-textMain">
            Suntem studio-ul digital care îți ține brandul într-un flux continuu
            de inovație.
          </h1>
          <p className="text-lg text-brand-textMuted">
            Nelmar = o echipă de strategi, designeri, developeri, marketeri și
            specialiști IT care lucrează și în clinici, și în ecommerce, și în
            SaaS. Ne place să combinăm rigurozitatea tehnică cu estetica premium.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-brand-textMain">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-textMuted">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-brand-textMain">
            Valorile noastre
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <GlassCard key={value.title} className="h-full">
                <h3 className="font-display text-xl font-semibold text-brand-textMain">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-brand-textMuted">
                  {value.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        <GlassCard className="bg-gradient-to-br from-brand-surface/80 to-brand-background/60 p-6">
          <h2 className="font-display text-3xl font-semibold text-brand-textMain">
            Cum lucrăm
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-textMuted">
            <li>
              • Pornim fiecare proiect cu un audit și definim clar succesul împreună
              cu stakeholderii.
            </li>
            <li>
              • Formăm echipa potrivită și sincronizăm calendarul în sprints
              bilunare.
            </li>
            <li>
              • Comunicăm asimetric (async) în Pulse Nelmar cu recaps video și
              rapoarte interactive.
            </li>
            <li>
              • După lansare, rămânem aproape cu suport IT, growth și optimizări
              creative.
            </li>
          </ul>
        </GlassCard>
      </div>
    </main>
  );
}

