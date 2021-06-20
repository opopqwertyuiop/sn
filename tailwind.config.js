module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      width: {
        '21/100': '21%',
        '23/100': '23%',
        '24/100': '24%',
        '30/100': '30%',
        '48/100': '48%',
      },
      maxWidth: {
        container: '1080px',
      },
      colors: {
        'main-bg': '#E7F6FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
