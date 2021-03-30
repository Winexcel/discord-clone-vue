const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        2.5: '3px',
      },
      outline: {
        online: '2px solid #171717',
      },
      display: ['group-hover'],
      lineHeight: {
        wide: '1.25rem',
      },
      letterSpacing: {
        button: '0.1em',
      },
      fontSize: {
        md: '0.825rem',
      },
      inset: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      width: {
        4.5: '1.125rem',
        18: '4.5rem',
      },
      borderRadius: {
        100: '100%',
      },
      fontFamily: {
        poppins: ['Quicksand', 'Poppins', 'system-ui'],
        whitney: ['Whitney', 'system-ui'],
      },
      colors: {
        lime: colors.lime,
        gray: colors.trueGray,
        green: colors.green,
        teal: colors.teal,
        'gray-750': '#36393f',
        'gray-850': '#2f3136',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      display: ['group-hover'],
      borderWidth: ['first'],
      borderRadius: ['hover', 'group-hover'],
      transitionDuration: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],
      transitionTimingFunction: ['hover', 'focus'],
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
