/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        serif: ["Times New Roman", "Times", "serif"],
        calibri: ["Calibri", "sans-serif"],
      },
      keyframes: {
        bounceCustom: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "70%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounceCustom: "bounceCustom 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
