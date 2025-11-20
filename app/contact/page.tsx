import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
            Contact
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-textMain">
            Hai să discutăm despre următorul tău proiect.
          </h1>
          <p className="text-lg text-brand-textMuted">
            Completează formularul, scrie-ne pe{" "}
            <a href="mailto:hello@nelmar.studio" className="text-brand-secondary underline">
              hello@nelmar.studio
            </a>{" "}
            sau sună-ne la{" "}
            <span className="font-semibold text-brand-textMain">+40 749 123 456</span>.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <h2 className="font-display text-2xl font-semibold text-brand-textMain">
              De ce informații avem nevoie?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-textMuted">
              <li>• Contextul brandului și obiectivele pentru următoarele luni.</li>
              <li>• Ce tip de produs/serviciu te interesează (web, Shopify, marketing etc.).</li>
              <li>• Deadline-uri sau evenimente importante (lansări, campanii, audituri).</li>
              <li>• Echipa disponibilă din partea ta și cum preferi să lucrăm împreună.</li>
            </ul>
            <p className="mt-6 text-sm text-brand-textMuted">
              În 24 de ore revenim cu un call de clarificare și un plan de lucru propus.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm text-brand-textMuted" htmlFor="name">
                  Nume & companie
                </label>
                <input
                  id="name"
                  className="mt-1 w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain outline-none focus:border-brand-secondary/60"
                  placeholder="ex: Ana Ionescu, Clinica Astra"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-brand-textMuted" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain outline-none focus:border-brand-secondary/60"
                    placeholder="tu@companie.ro"
                  />
                </div>
                <div>
                  <label className="text-sm text-brand-textMuted" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    className="mt-1 w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain outline-none focus:border-brand-secondary/60"
                    placeholder="+40..."
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-brand-textMuted" htmlFor="project">
                  Despre ce vrei să discutăm?
                </label>
                <textarea
                  id="project"
                  rows={5}
                  className="mt-1 w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain outline-none focus:border-brand-secondary/60"
                  placeholder="Spune-ne câteva detalii despre business și ce vrei să construim."
                />
              </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-slate-100"
            >
                Trimite mesajul
              </button>
            </form>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}

