/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oxanium: ["Oxanium", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgb(96 96 96 / 12%) 44%,#1e293be8 68%,#1e293be3 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
