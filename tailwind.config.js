/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          tiktokPink: '#ff0050',
          tiktokBlue: '#00f2ea',
          tiktokGray: '#161823',
        },
      },
    },
    plugins: [],
  };