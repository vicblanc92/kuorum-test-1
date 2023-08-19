/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: { inter: ['Inter'] },

    minWidth: {
      104: '104px',
    },
    colors: {
      grey: {
        50: '#E0E0E0',
        100: '#838383',
        200: '#575757',
      },
      blue: '#4D7AE3',
    },
    extend: {
      width: {
        374: '374px',
        418: '418px',
      },
      height: { 136: '136px', 108: '108px', 156: '156px' },
    },
  },
  plugins: [],
};
