/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackDefault: "#1B1B25",
        blueDefault: "#4F4CEE",
      },
    },
  },
  plugins: [],
});
