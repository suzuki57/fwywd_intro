const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'about': "url('/images/bg-about.png')",
      'skills': "url('/images/bg-skills.png')",
      'future': "url('/images/bg-future.png')",
      }),

      colors: {
          transparent: "transparent",
          current: "currentColor",
          black: colors.black,
          white: colors.white,
          "text-black": "#243c5a",
          "text-green": "#008c8d",
          "bg-green": "#6bc2c3",
          "bg-black": "#262c3a",
          "progress-pale": "#c5eaea",
          "progress-deep": "#2bb9ba",
          "border-green": "#c5eaea",
      }, 

      container: {
        center: true,
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
