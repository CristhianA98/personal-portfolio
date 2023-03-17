/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "content-image": "url('/src/assets/content.jpg')"
      }
    },
    colors: {
      "main": "#2B3C4D",
      "second": "#1AB595",
      "background-main": "#E1E1E1"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
