/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["poppins", "sans-serif"],
      },
      colors: {
        primaryDark: "#071013",
        primaryGreen: "#519872",
        primaryGreenDarker: "#3B5249",
        primaryGreenLighter: "#A4B494",
        white: "#FFFFFF",
        unhighlighted: "#D8D4D5",
        secondaryDark: "#1C1C1C",
        primaryLightMode: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
