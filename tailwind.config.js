/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
],
  theme: {
    extend: {},
    
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
],

}
