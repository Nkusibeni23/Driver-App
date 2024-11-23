/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        error: "#FF0000",
        dark: "#2c3e50",
        light: "#ecf0f1",
        black: "#000",
      },
    },
  },
  plugins: [],
};
