module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myGreen: `#77B900`
      },
      fontFamily: {
        'roboto': 'Roboto',
        'play': 'Play',
      },
      backgroundImage: {
        'main-bg': "url('./img/bg.jpg')"
      },
      boxShadow: {
        custom: '0 0 10px rgba(119, 185, 0, 1)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
