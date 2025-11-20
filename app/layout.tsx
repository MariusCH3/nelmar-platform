import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/pachete", label: "Pachete" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
  { href: "/client", label: "Client" },
];

export const metadata: Metadata = {
  title: "Nelmar Studio",
  description: "Studio digital cu soluții complete pentru branduri moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-brand-background text-brand-textMain antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#111827_0,_#020617_45%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-32 left-6 h-[24rem] w-[24rem] rounded-full bg-brand-primary/30 blur-[200px]" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-secondary/25 blur-[230px]" />
        </div>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-brand-borderSubtle bg-brand-surface/70 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
              <Link
                href="/"
                className="font-display text-2xl font-semibold tracking-tight text-brand-textMain"
              >
                Nelmar Studio
              </Link>
              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-textMuted">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 transition duration-200 hover:bg-brand-glass hover:text-brand-textMain"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-brand-borderSubtle bg-brand-surface/60">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-brand-textMuted sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
              <span>© {new Date().getFullYear()} Nelmar Studio</span>
              <span>Experiențe digitale care inspiră.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
