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
        bg: "#190E06",
        "bg-2": "#1f1209",
        "bg-3": "#26160b",
        orange: "#FF5D00",
        "orange-light": "#FF7A2E",
        gold: "#FFC702",
        "gold-light": "#FFD54F",
        cream: "#F9F3F0",
        blue: "#2E8FE3",
        "blue-light": "#5AAAF0",
        cyan: "#2DD1DA",
        "cyan-light": "#5DDEEA",
        "text-main": "#F9F3F0",
        "text-sub": "#B8A99A",
        "text-muted": "#7A6358",
        "border-glass": "rgba(249,243,240,0.10)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "float-slow": "floatSlow 20s ease-in-out infinite",
        "float-mid": "floatMid 15s ease-in-out infinite",
        "float-fast": "floatFast 10s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "spin-slow": "spin 30s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(60px, -40px) scale(1.05)" },
          "66%": { transform: "translate(-40px, 30px) scale(0.95)" },
        },
        floatMid: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-80px, 60px) scale(1.08)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(50px, -30px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
