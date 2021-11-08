module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '13': '52px',
        '20': '80px',
        '75': '300px',
        '120': '480px',
        '150': '600px'
      },
      minWidth: {
        '75': '300px',
        '150': '600px'
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
