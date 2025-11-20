import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#050608",
          surface: "#0B0F19",
          glass: "rgba(255,255,255,0.05)",
          primary: "#8B5CF6",
          secondary: "#22D3EE",
          accent: "#F97316",
          textMain: "#F9FAFB",
          textMuted: "#9CA3AF",
          borderSubtle: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glass: "0 30px 60px -30px rgba(15,23,42,0.8)",
      },
      borderRadius: {
        glass: "32px",
      },
    },
  },
  plugins: [],
};

export default config;

