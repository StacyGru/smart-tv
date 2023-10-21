export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBlue": "#86D3F4",
      },
      fontSize: {
        "text-3xl": "1.625rem", // 26px
        "text-4xl": "2rem"      // 32px
      },
      spacing: {
        "30px": "30px"
      }
    },
  },
  plugins: [],
}