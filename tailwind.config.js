/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#484848",
          200: "#404040",
          300: "#313136",
          400: "#000000",
        },
        blue: "#2680EB",
        white: "#fff",
        gray: {
          100: "#F1F2F7",
          200: "#F8F8F8",
          300: "#EBEDF2",
          400: "#B2B2B2",
          500: "#A2A3B7",
          600: "#0000001F",
          700: "#999999",
          800: "#00000029",
          900: "#7F7F7F",
        },
        green: "#99CA3B",
      },
      fontFamily: {
        sans: ["Open Sans", "sans"],
      },
    },
  },
  plugins: [],
};
