/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Background1: "url(./img/bg.jpg)",
        Background2: "url(./img/about-bg.jpg)",
      },
    },
  },
  plugins: [],
};
