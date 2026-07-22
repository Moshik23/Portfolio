/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0F1729",
        elevated: "#161F38",
        elevated2: "#1D2A4A",
        line: "#2E3B5E",
        ink: "#F1EDE4",
        muted: "#9AA6C4",
        amber: "#E8A33D",
        azure: "#6FA8DC",
        good: "#5FBE8A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

