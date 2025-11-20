import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { loginAction } from "@/lib/auth/actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-20 pt-16 text-brand-textMain sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-textMuted">
          Nelmar Studio
        </p>
        <h1 className="font-display text-4xl font-semibold">
          Intră în contul tău Nelmar.
        </h1>
        <p className="max-w-2xl text-brand-textMuted">
          Accesează dashboard-ul tău, vezi proiectele active și ține legătura cu
          echipa Nelmar.
        </p>
        <GlassCard className="w-full max-w-md space-y-6 p-8">
          <div className="space-y-1 text-left">
            <h2 className="font-display text-2xl font-semibold text-brand-textMain">
              Autentificare
            </h2>
            <p className="text-sm text-brand-textMuted">
              Introdu datele contului tău Nelmar Studio.
            </p>
          </div>
          <LoginForm action={loginAction} />
          <p className="text-sm text-brand-textMuted">
            Ai întrebări?{" "}
            <Link
              href="/contact"
              className="text-brand-secondary underline transition hover:text-brand-secondary/80"
            >
              Vorbește cu un consultant
            </Link>
            .
          </p>
        </GlassCard>
      </div>
    </main>
  );
}

