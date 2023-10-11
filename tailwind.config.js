/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#94a3b8",
        secondary_bold: "#64748b",
        dark: "#313237",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        ping_custom: {
          "60%": { transform: "scale(1.2)"},
          "80%": { transform: "scale(1.2)"},
          "100%": { transform: "scale(1)"},
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.91)" },
          "17%": { transform: "scale(0.98)" },
          "33%": { transform: "scale(0.87)" },
          "45%": { transform: "scale(1)" },
        },
        fade_in: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        up_down: {
          "0%": { transform: "translate(0, -10px)" },
          "50%": { transform: "translate(0, 10px)" },
          "100%": { transform: "translate(0, -10px)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "ping-slow": "ping_custom 2s linear infinite",
        heart: "heartbeat 3s linear infinite",
        fade_in: "fade_in 3s linear infinite",
        up_down: "up_down 3s linear infinite",
      },
    },
  },
  plugins: [],
};
