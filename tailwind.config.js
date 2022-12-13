/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "900px" },
        md: { min: "900px", max: "1400px" },
      },
    },
  },
  plugins: [],
};
