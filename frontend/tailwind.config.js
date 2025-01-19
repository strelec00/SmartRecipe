/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Text", "serif"],
        robotnik: ['"Robotnik"', "sans-serif"],
      },
      screens: {
        xs: "500px", // Add a custom 'xs' breakpoint
      },
    },
  },
  plugins: [],
};
