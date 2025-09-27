/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Custom Utility: font-montserrat
        lato: ['Lato', 'sans-serif'], // Custom Utility: font-lato
        playfair: ['Playfair Display', 'serif'], // Custom Utility: font-playfair
      },
    },
  },
  plugins: [],
};
