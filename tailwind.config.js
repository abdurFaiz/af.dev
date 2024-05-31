/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 300ms ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      colors: {
        primary: "#f8fafc",
        dark: "#070707",
        light: "#e9e9e9	",
      },
      fontFamily: {
        kanit: ["Kanit"],
        monserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
}