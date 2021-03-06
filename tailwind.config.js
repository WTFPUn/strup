const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Kanit']
      },
      colors: {
        noiceyellow: '#CEB250',
        buttonblue: '#0080FF'
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
    },
    screens: {
      'mobile': {'min': '320px', 'max': '767px'},
      'medium-tablet': {'min': '540px', 'max': '1024px'},
      'big-device': {'min': '1025px'},
    },
    fontSize: {
      'xss': '.45rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',

  }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"),
  require('tailwind-scrollbar')],
}
