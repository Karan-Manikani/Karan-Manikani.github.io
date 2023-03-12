/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        offWhite: "#f0efeb",
        darkGray: "#373737",
      },
      width: {
        0.25: "0.0625rem",
      },
    },
  },
  plugins: [],
};
