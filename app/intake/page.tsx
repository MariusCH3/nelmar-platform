import { IntakeForm } from "@/components/intake/IntakeForm";

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-textMuted">
          Nelmar Studio
        </p>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Brieful tău pentru Nelmar
        </h1>
        <p className="max-w-3xl text-brand-textMuted">
          Răspunsurile tale ne permit să-ți creăm automat contul, proiectul și
          roadmap-ul inițial imediat după trimitere.
        </p>
        <IntakeForm />
      </div>
    </main>
  );
}

