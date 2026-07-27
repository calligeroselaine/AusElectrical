import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        charcoal: {
          DEFAULT: "#1B1E1C",
          light: "#2A2E2B",
        },
        emerald: {
          DEFAULT: "#0B4F3A",
          dark: "#083B2B",
          light: "#0E6349",
        },
        gold: {
          DEFAULT: "#C9A66B",
          light: "#DCC08F",
          dark: "#AD8A52",
        },
        mist: "#F5F5F3",
        slate: {
          DEFAULT: "#26292B",
          muted: "#5B615E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(27, 30, 28, 0.06)",
        "card-hover": "0 12px 32px -4px rgba(11, 79, 58, 0.24)",
        nav: "0 1px 0 0 rgba(27, 30, 28, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
