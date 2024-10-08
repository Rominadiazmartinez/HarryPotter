/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "harry": ['harryPotter', 'sans-serif'], // Agrega la nueva fuente aquí
      },
    },
  },
  plugins: [],
}