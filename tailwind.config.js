/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#FAF8F7",
        PalatinateBlue: "#304DDB",
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif", "Arial"],
        davidlibre: ["David Libre", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
