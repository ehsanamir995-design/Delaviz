import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#C9A96E",
          600: "#B8944D",
          700: "#A07D3B",
          800: "#8A6A2E",
          900: "#6B5123",
        },
        champagne: {
          50: "#FBF8F1",
          100: "#F5EFE0",
          200: "#EDE0C6",
          300: "#E0CCA3",
          400: "#D4B87F",
          500: "#C9A46C",
        },
        onyx: {
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#303030",
          800: "#1A1A1A",
          900: "#0D0D0D",
          950: "#050505",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(201, 164, 110, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(201, 164, 110, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E8D5A3 50%, #C9A96E 100%)",
        "dark-gradient": "linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        "gold-glow": "0 0 30px rgba(201, 164, 110, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
