/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "show 2s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      black: "#1E1E1E",
      orange: "#FFAA00",
      ash: "#282828",
    },
    screens: {
      "2xl": "1840px",
      "xl": "1440px",
      "lg": "1280px",
      "md": "1024px",
      "sm": "580px",
      "xs": "390px",
    }
  },
  plugins: [],
};
