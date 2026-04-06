/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#2f7a3d", // adjust to match your packaging
        brandWhite: "#ffffff",
        brandCream: "#fffaf0",
      },
      fontFamily: {
        sfpro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};


