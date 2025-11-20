"use client";

import { useFormStatus } from "react-dom";

type AuthSubmitButtonProps = {
  label: string;
};

export function AuthSubmitButton({ label }: AuthSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Se procesează..." : label}
    </button>
  );
}

