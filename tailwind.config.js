/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f7f8',
          100: '#efeef1',
          200: '#d8d7dd',
          300: '#b6b4be',
          400: '#8c8996',
          500: '#6f6b7b',
          600: '#5a5664',
          700: '#4a4752',
          800: '#2f2d34',
          900: '#1a191d',
        },
        accent: {
          50: '#fdf4f1',
          100: '#f9e5df',
          200: '#f5c8bc',
          300: '#eda18e',
          400: '#e67a61',
          500: '#d44c2e',
          600: '#bc3921',
          700: '#9c2f1c',
          800: '#7d261b',
          900: '#66211a',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}