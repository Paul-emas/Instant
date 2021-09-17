const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        font: {
          darker: '#1E1E1E',
          dark: '#0F0E0E',
          green: '#149852',
          muted: '#7E7E7E',
          grey: '#959595',
        },
        primary: {
          base: '#347F95',
          light: '#F3F7F8',
          lighter: '#379C8B',
          hover: '#2C6E81',
          dark: '#0E323D',
          active: '#275562',
          border: '#ffffff5e',
        },
        secondary: {
          yellow: '#FFF1CF',
          twitter: '#55ACEE',
          linkedin: '#0077B5',
          youtube: '#FF0000',
        },
      },
      width: {
        'w-modal': '474px',
        sidebar: '280px',
        detailbar: '350px',
      },
      height: {
        'h-modal': '718px',
        chart: {
          default: '359px',
        },
      },
      borderColor: {
        base: '#347F95',
      },
      fontSize: {
        heading: '1.75rem',
        xxs: '10px',
      },
    },
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
