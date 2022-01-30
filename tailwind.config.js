const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'home-h': { raw: '(min-height: 900px)' },
      'home-h-small': { raw: '(min-height: 768px)' },
      xzms: '320px',
      xzs: '360px',
      xxzs: '376px',
      xxs: '415px',
      xs: '601px',
      sm: '640px',
      md: '769px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1356px',
      '3xl': '1440px',
      '3.5xl': '1536px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
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
          darker: '#0D3643',
          darkest: '#0B232A',
          active: '#275562',
          border: '#ffffff1f',
          label: '#ffffff5e',
          gray: '#959595',
          lightGray: '#F6F6F6',
        },
        secondary: {
          lightBlue: '#F1F4F9',
          blue: '#2F56D8',
          paleBlue: '#CFEEF8',
          green: '#149852',
          lightGreen: '#1498520f',
          lighterGreen: '#1498520d',
          teal: '#149879',
          tealGreen: '#28C572',
          purple: '#722FD8',
          lighterPurple: '#3e34950d',
          transparentWhite: '#ffffff1a',
          label: '#0d364377',
          yellow: '#FFF1CF',
          yellowLight: '#F9AA34',
          twitter: '#55ACEE',
          linkedin: '#0077B5',
          youtube: '#FF0000',
          modal: '#001319',
        },
      },
      width: {
        'w-modal': '474px',
        modal: '468px',
        sidebar: '300px',
        detailbar: '350px',
        auth: '460.44px',
        446: '446px',
        fund: '78px',
        74: '305px',
        279: '279px',
        257: '257px',
        48: '48rem',
      },
      height: {
        'modal-sm': '403px',
        'modal-md': '640px',
        modal: '718px',
        224: '224px',
        274: '274px',
        282: '282px',
        562: '562px',
        banner: '885px',
        chart: {
          default: '359px',
        },
      },
      borderColor: {
        base: '#347F95',
      },
      fontSize: {
        '2.5xl': '28px',
        '3.5xl': '32px',
        '4.5xl': '40px',
        heading: '1.75rem',
        xxs: '10px',
        '32xl': '32px',
      },
    },
    fontFamily: {
      sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
