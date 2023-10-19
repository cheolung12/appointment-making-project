/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],   // js, jsx만 사용
  theme: {
    extend: {
      fontFamily: {
        LogoFont: ["yg-jalnan"],
        BoldFont: ['SUITE-Bold'],
      },
    },
  },
  plugins: [],
}