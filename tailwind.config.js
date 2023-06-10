/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "900px" },
        md: { min: "900px", max: "1400px" },
      },
      colors: {
        primary: "#dcc5a7",
      },
      boxShadow: {
        "3xl": "1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)",
      },
      spacing: {
        "7/10": "70%",
      },
    },
  },
  plugins: [],
};
