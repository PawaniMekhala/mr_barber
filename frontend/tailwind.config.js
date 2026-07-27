/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffaf0',
          100: '#fff0d9',
          200: '#ffe0a8',
          300: '#ffd078',
          400: '#ffc048',
          500: '#d39a08', // main gold, tweak as needed
          600: '#b07a05',
          700: '#876806',
        }},
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
         poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

