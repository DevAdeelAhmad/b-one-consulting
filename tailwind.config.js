/** @type {import('tailwindcss').Config} */
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
        headingFamily: ["Titillium Web", "sans-serif"],
        textFamily: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
