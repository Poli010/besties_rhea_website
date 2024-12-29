/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shoe-trading': "url('/src/assets/shoes.jpg)",
      }
    },
  },
  plugins: [],
}

