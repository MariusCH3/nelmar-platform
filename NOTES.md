# Nelmar Studio – Progress Log

## Design System & Global Setup
- **Fonts:** Inter (body) + Space Grotesk (display) via `next/font`. Variables `--font-inter` and `--font-space-grotesk` applied în `app/layout.tsx` / `globals.css`.
- **Tailwind Tokens:** `tailwind.config.ts` definește brand colors (`brand.background`, `brand.surface`, `brand.glass`, `brand.primary`, `brand.secondary`, `brand.accent`, `brand.textMain`, `brand.textMuted`, `brand.borderSubtle`), `fontFamily` (sans/display) și utilities `shadow-glass`, `rounded-glass`.
- **Global Styles:** `globals.css` gestionează culorile de bază + familiile de font. `app/layout.tsx` setează fundalul cu `bg-brand-background` + un overlay `bg-[radial-gradient(circle_at_top,_#111827_0,_#020617_45%)]` și bloburi blur violet/cyan; paginile publice folosesc `bg-transparent` ca să lase gradientul să se vadă. Anchor-urile nu mai forțează `color: inherit`, astfel încât clasele Tailwind (`text-*`) pot seta culoarea corectă (ex. butonul primar alb cu text închis).
- **Buttons:** Primare = `bg-white text-brand-background`; secundare = border `brand-borderSubtle` + hover `bg-brand-glass`.

## Shared Components
- **GlassCard (`components/ui/GlassCard.tsx`):** Base glass card cu gradient brand, blur, blob-uri și hover lift. E reutilizat peste tot.
- **HeroSection buttons:** butonul primar folosește `text-slate-900` pentru lizibilitate pe fond alb.
- **HeroVisual (`components/home/HeroVisual.tsx`):** Mesh gradient/blur fără borduri suplimentare (evită “dublul chenar” în hero).
- **Hero Sections & Homepage (`app/page.tsx` + `components/home/*`):**
  - Hero, Services, Process, Packages, Portfolio sections strictly use tokens, `font-display` headings, and `GlassCard`.
  - CTA block uses gradient background + primary/secondary accents.

## Auth & Client Area (status)
- `.env.local` trebuie să conțină `NEXT_PUBLIC_SUPABASE_URL` și `NEXT_PUBLIC_SUPABASE_ANON_KEY` (vezi valorile deja setate local).
- Fluxul public de înregistrare a fost eliminat (`/register` + `RegisterForm` + `registerAction`). A rămas doar `/login`, iar middleware-ul nu mai tratează ruta `/register`.
- `lib/auth/actions.ts` exportă doar `loginAction` și folosește `createServerActionClient({ cookies })` direct în același modul.
- Ruta `app/logout/route.ts` creează clientul Supabase în handler, cu `cookies()` pentru a invalida sesiunea corect.
- Middleware-ul (`middleware.ts`) protejează `/client/*` și redirecționează utilizatorii autentificați doar de pe `/login`.

## Completed Pages
- `app/page.tsx`: Full landing page (hero, services, process, packages, portfolio, CTA) aligned to design system.
- `app/servicii/page.tsx`: Detailed services clusters + process recap using glass cards.
- `app/pachete/page.tsx`: Pricing cards (Essential, Growth, Premium) with onboarding explanation and CTA.
- `app/portofoliu/page.tsx`: Highlighted projects + CTA for case study.
- `app/despre/page.tsx`: Story, stats, values, “how we work”.
- `app/contact/page.tsx`: Contact info + glass contact form.
- `app/client/page.tsx`: Placeholder teaser for future client portal.
- `app/intake/page.tsx`: Public intake questionnaire (4 pași) cu GlassCard, animații Framer Motion și submit către `/api/intake`.

## Pending / Upcoming
- Implement Supabase auth, Prisma schema, onboarding flow, AI roadmap, and client dashboard (per project plan).
- Continue applying design rules whenever new components/pages sunt create.

## Realizat până acum & tehnologii folosite

| Zonă                         | Ce s-a implementat                                                                                                  | Tehnologii |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------|------------|
| Design System global        | Fonts (Inter + Space Grotesk), Tailwind tokens, gradient radial pe body, GlassCard reutilizabil                     | Next.js 14 (App Router), Tailwind CSS 4, TypeScript |
| Homepage                    | Secțiuni Hero/Services/Process/Packages/Portfolio/CTA cu animații Framer Motion și butoane standardizate            | Next.js, Tailwind, Framer Motion |
| Pagini publice secundare    | `/servicii`, `/pachete`, `/portofoliu`, `/despre`, `/contact`, `/client` – layout premium, glass cards, copy în RO  | Next.js, Tailwind |
| Hero Pulse Nelmar           | Panou glass 3D (gradient animat, blur blobs, hover tilt), dashboard card animat                                     | Next.js, Tailwind, Framer Motion |
| CTA-uri & formulare         | Butoane primare/ secundare consistente, formular contact glass                                                      | Next.js, Tailwind |
| Autentificare & portal      | Supabase Auth (login/logout), middleware protejat, dashboard client `/client/dashboard` (mock data)                 | Next.js App Router, Supabase (`@supabase/auth-helpers-nextjs`), Tailwind, Framer Motion |
| Intake public + API         | `/intake` multi-step form (GlassCard, Framer Motion) + `/api/intake` care salvează `IntakeLead` și pregătește provisioning | Next.js, Framer Motion, Prisma, Supabase (`@supabase/supabase-js`) |

## Prisma & DB setup
- Adăugat `prisma/schema.prisma` cu modelul `IntakeLead`.
- Instalate `prisma@5.19.1` (dev) și `@prisma/client@5.19.1` (runtime) pentru compatibilitate cu schema existentă (Prisma 7 cere config nouă).
- Rulat `npx prisma generate` (OK).
- Încercarea de `npx prisma migrate dev --name add_intake_lead_model` necesită un `DATABASE_URL` valid; fără acces la baza de date, comanda a eșuat (autentificare/host inaccesibil). Va trebui rerulată după ce primim connection string-ul real.
- Creat `lib/db.ts` cu singleton `PrismaClient` (`log: ["warn","error"]`).
- `/api/intake` folosește `prisma.intakeLead.create` și încearcă să creeze utilizator Supabase via `SUPABASE_SERVICE_ROLE_KEY` (dacă e setat). Provisionarea Client/Project e momentan un placeholder.

_Ultima actualizare: configurat `.env.local`, refăcut clienții Supabase pentru Server Actions (Next 16) și logout route, eliminat helperul vechi care genera erori `nextCookies.set`._

Use this log as reference for current state before continuing with next milestones.

