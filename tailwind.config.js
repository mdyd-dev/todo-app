const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      },
      screens: {
        xxl: '1410px'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: [require('@tailwindcss/custom-forms')]
};
