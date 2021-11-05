module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        120: '480px',
        150: '600px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
