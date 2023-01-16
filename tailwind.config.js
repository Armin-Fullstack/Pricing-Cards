/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      md: "853px"
    },
    extend: {
      fontFamily: {
        sans: ["Merriweather Sans" , "sans-serif"]
      },
      colors: {
        grayColor: "rgb(34, 39, 46)",
        lightGray: "rgb(68, 76, 86)"
      }
    },
  },
  plugins: [],
}
