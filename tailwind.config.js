/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#F1F1F1",
        textSecondary: "#646464",
      },
      fontFamily: {
        Titillium: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
        Prompt: ['"Prompt"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
