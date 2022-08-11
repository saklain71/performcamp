/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}
