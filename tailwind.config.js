/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: { 
      colors:{
        "main":'#F3F4F6',
        "sub":'#202020',
        "card":'#F5F6F9',
      }
    },
    fontFamily:{
      'poppins': ['"Poppins", sans-serif'],
      'bugrasimo': ['"Lugrasimo", cursive'],
    }
  },
  plugins: [require("daisyui")],
  
}
/*
daisyui: {
    themes: ["light", "dark"],
  },

  */