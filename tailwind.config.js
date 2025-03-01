/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-blue": "#0E1B4D",
        "page-color": "#EFF0F5",
      },
    },
  },
  plugins: [],
};
