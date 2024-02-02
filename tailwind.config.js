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
        BentoBoxBlue: "#171952",
        BentoBoxIronMetal: "#283338",
        BentoBoxCircle:
          "radial-gradient(circle, rgba(101,139,158,1) 0%, rgba(101,139,158,0.8225665266106442) 35%, rgba(101,139,158,0.23153011204481788) 100%);",
        BentoBoxPaleMauve: "#d7baf5",

        BentoBoxPaleCeladon: "#b9edbd",
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif", "Arial"],
        davidlibre: ["David Libre", "serif"],
        spacemono: ["Space Mono", "monospace"],
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
