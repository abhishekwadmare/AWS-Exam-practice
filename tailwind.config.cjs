/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aws-bg": "#0b0e14",
        "aws-bg2": "#111520",
        "aws-bg3": "#181d2a",
        "aws-border": "#232b3e",
        "aws-border2": "#2e3a52",
        "aws-text": "#e2e8f4",
        "aws-muted": "#6b7a99",
        "aws-orange": "#ff9900",
        "aws-orange-dim": "#b36d00",
        "aws-green": "#22c55e",
        "aws-red": "#ef4444",
        "aws-blue": "#60a5fa",
        "aws-yellow": "#facc15",
        "aws-purple": "#a78bfa",
        "aws-teal": "#34d399",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        "timer-pulse": { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.4 } },
        "slide-in": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "timer-pulse": "timer-pulse 0.8s infinite",
        "slide-in": "slide-in 0.3s ease",
      },
    },
  },
  plugins: [],
});
