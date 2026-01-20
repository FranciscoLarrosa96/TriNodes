/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        main: '#EC268F', // Rosa vibrante (elementos principales)
        secondary: '#848688', // Gris neutro (elementos secundarios)
        background: '#EEEDEE', // Gris muy claro para fondos
        text: '#2f2f2f', // Gris oscuro para texto principal
        border: '#e0dcd0', // Gris muy claro para bordes sutiles
        hover: '#f4a6d6', // Rosa más claro para efectos hover
      },
      fontFamily: {
        sans: ['Chopin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
