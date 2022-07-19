/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk, sans-serif"],
      },
      colors: {
        "headerLight": "#f4fcfe",
        dark: {
          primary: '#000',
        },
      },
      container: {
        center: true,

        // or have default horizontal padding
        padding: '1rem',
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
          '2xl': '1300px',
        },
      },
    },
  },
  plugins: [],
}