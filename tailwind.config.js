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
        worksans: ["Work-sans", "sans-serif", "Arial"],
        gtamerica: ["GT America Regular", "Helvetica", "sans-serif", "Arial"],
        ibarra: ["IbarraRealNova-Regular", "Helvetica", "sans-serif", "Arial"],
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
