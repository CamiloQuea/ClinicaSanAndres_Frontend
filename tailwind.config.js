module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'] 
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  darkMode: 'class'
}