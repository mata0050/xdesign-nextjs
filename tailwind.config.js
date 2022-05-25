module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        darkGrey: '#191919',
        lightGrey: '#f7f7f7',
        silver: '#B7B4B9',
        lightBrown: '#F9EFE7',
        warning: '#ffd200',
        danger: 'rgb(250, 7, 7)',
        success: 'rgb(118, 170, 14)',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
