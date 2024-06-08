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
        "backgra":"#F6F6F6",
      }
    },
  },
  plugins: [],
}

