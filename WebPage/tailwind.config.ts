import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        estate: {
          bg: "#F9F8F4",
          primary: "#171B21",
          secondary: "#73716C",
          gold: "#A99362",
          border: "#E6E3DC",
          dark: "#111620",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Bodoni Moda", "Didot", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        editorial: ".18em",
        nav: ".14em",
      },
    },
  },
  plugins: [],
};
export default config;
