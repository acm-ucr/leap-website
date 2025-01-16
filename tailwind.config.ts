/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leap: {
          "dark-green": "#324935",
          "mid-green": "#4F8C6C",
          "light-green": "#6FA36A",
          yellow: "#F2AE01",
          grey: "#C3C5B8",
        },
      },
      fontFamily: {
        leap: "var(--krub-font)",
      },
    },
  },
  plugins: [],
};
