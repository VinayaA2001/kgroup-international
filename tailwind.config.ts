import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0F1A2B",
        accent: "#F97316",
        "accent-2": "#14B8A6",
        success: "#16A34A",
        background: "#F5F1EA",
        surface: "#FFFFFF",
        "text-primary": "#0F1A2B",
        "text-secondary": "#4B5563",
        border: "#E6DED4",
        warning: "#F59E0B",
        error: "#DC2626",
        sand: "#F8F4ED",
        ink: "#0B1220",
        mint: "#CFFAFE",
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 26, 43, 0.12)",
        card: "0 8px 20px rgba(15, 26, 43, 0.08)",
        lift: "0 16px 40px rgba(15, 26, 43, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
