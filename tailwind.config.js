/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#020626",
        cyan: "#01e1c6",
        yellow: "#feb203",
        lightGray: "#eaf3fb",
        lightBlue: "#031334",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        rele: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};