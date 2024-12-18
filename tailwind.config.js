/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "/**/*.{js,jsx,ts,tsx}",
      "./App.{js,jsx,ts,tsx}", /// Include the main App.js and App.tsx files 
      "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
      "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
      "./app/(tabs)/meditate.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
      extend: {
          fontFamily: {
              rmono: ["Roboto-Mono", "sans-serif"],
          },
      },
  },
  plugins: [],
};