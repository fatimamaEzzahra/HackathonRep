/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow":"#FACC27",
        "backgra":"#343A40",
        "black":'black',
      }
    },
  },
  plugins: [],
}

