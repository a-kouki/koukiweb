/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        inclusive: ['"Inclusive Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),

  ],
}
