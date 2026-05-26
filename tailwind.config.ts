import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#000000",
          secondary: "#08080A",
          tertiary: "#121215",
          elevated: "#1A1A1E",
          card: "rgba(255,255,255,0.04)",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#A1A1A6",
          muted: "#6E6E73",
        },
        accent: {
          blue: "#007AFF",
          "blue-light": "#40A9FF",
          purple: "#5856D6",
          pink: "#FF2D55",
          orange: "#FF9500",
          green: "#34C759",
          teal: "#5AC8FA",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        article: "680px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal": "reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "gradient-flow": "gradientFlow 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(24px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(48px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-16px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.16, 1, 0.3, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bounce-soft": "cubic-bezier(0.6, 1.8, 0.8, 1.2)",
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot": "24px 24px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        "card-hover":
          "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
        glow: "0 0 60px rgba(0,122,255,0.15)",
        "glow-purple": "0 0 60px rgba(88,86,214,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
