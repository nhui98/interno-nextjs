const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
        serif: [
          "var(--font-dm-serif-display)",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      dropShadow: {
        btn: "0 10px 20px rgba(192, 192, 192, 1)",
        "btn-secondary": "0 10px 20px rgba(31, 32, 32, 1)",
      },
    },
    fontSize: {
      sm: ["18px", 1.5],
      md: ["20px", 1.5],
      lg: ["22px", 1.5],
      xl: ["18px", 1.25],
      "2xl": ["20px", 1.25],
      "3xl": ["22px", 1.25],
      "4xl": ["25px", 1.25],
      "5xl": ["35px", 1.25],
      "6xl": ["50px", 1.25],
      "7xl": ["85px", 1.25],
    },
    colors: {
      white: "#fff",
      brown: "#cda274",
      black: "#292f36",
      grey: "#f3f0ec",
    },
  },
  plugins: [],
};
