/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: 'media', // or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
         poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

