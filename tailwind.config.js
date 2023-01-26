/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        sm: "5px 5px",
      },
      colors: {
        offWhite: "#FAF9F5",
      },
    },
  },
  plugins: [],
};
