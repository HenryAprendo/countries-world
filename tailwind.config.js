/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      'dark-blue-elements-dm': '#2B3945', //dark mode elements
      'very-dark-blue-background-dm': '#202C37', //dark mode background
      'very-dark-blue-text-lm': '#111517',  //light mode text
      'dark-gray-input-lm': '#858585',  //light mode input
      'very-light-gray-background-lm': '#FAFAFA', //light mode background
      'white-text-dm': '#FFFFFF', //dark mode text
      'white-elements-lm': '#FFFFFF' //light mode elements
    },

    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    }
  },
  plugins: [],
  darkMode: 'class',
}
