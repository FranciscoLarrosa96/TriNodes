/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--color-main)', // Rosa vibrante (elementos principales)
        secondary: 'var(--color-secondary)', // Gris neutro (elementos secundarios)
        background: 'var(--color-background)', // Fondos
        text: 'var(--color-text)', // Texto principal
        border: 'var(--color-border)', // Bordes sutiles
        hover: 'var(--color-hover)', // Efectos hover
      },
      fontFamily: {
        sans: ['Chopin', 'sans-serif'],
      },
      backgroundColor: {
        background: 'var(--color-background)',
      },
      textColor: {
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [],
};
