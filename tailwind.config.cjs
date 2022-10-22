/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 10,
      sm: 12,
      md: 13,
      lg: 16,
      xl: 20,
      "2xl": 24,
    },
    colors: {
      transparent: 'transparent',
      "white-500": "#FDFFFF",
      black: {
        900: "#0A0A0A",
        800: "#161616",
        700: "#161616",
        600: "#222222",
      },
      purple: {
        900: "#8E24AA",
        700: "#A140BB",
      },
      "gray-400": "#949496",
      "green-500": "#00B37E",
      "red-700": "#B3002B",
      "golden-100": "#B38100",
      "black-hover-700": "#323238",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
