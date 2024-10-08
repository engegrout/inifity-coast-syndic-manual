const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#308AA0",
          contrast: "#308AA0",
        },
        white: "#E8E8EA",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "custom-inner": "inset 2px 7px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
