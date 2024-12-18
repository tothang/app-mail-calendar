/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        border: {
          100: "#D0D5DD",
        },
        primary: {
          main: "#0074F1",
          800: "#0E62DE",
          200: "#8BCBFF",
        },
        accent: "#EAECF0",
        error: {
          main: "#D92D20",
        },
        warning: {
          100: "#FEF0C7",
        },
      },
    },
  },
  plugins: [],
};
