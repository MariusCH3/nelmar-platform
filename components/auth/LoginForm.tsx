"use client";

import { useActionState } from "react";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton";
import type { AuthFormState } from "@/lib/auth/actions";

type LoginFormProps = {
  action: (state: AuthFormState, formData: FormData) => Promise<AuthFormState>;
};

export function LoginForm({ action }: LoginFormProps) {
  const [state, formAction] = useActionState(action, { error: undefined });

  return (
    <>
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-brand-textMuted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@nelmar.com"
            className="w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm text-brand-textMuted">
            Parolă
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="********"
            className="w-full rounded-2xl border border-brand-borderSubtle/60 bg-brand-background/60 px-4 py-3 text-brand-textMain placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>
        {state?.error && (
          <p className="text-sm text-red-400">{state.error}</p>
        )}
        <AuthSubmitButton label="Autentifică-te" />
      </form>
    </>
  );
}

