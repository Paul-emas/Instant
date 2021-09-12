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
        },
        primary: {
          base: '#347F95',
          light: '#F3F7F8',
          lighter: '#379C8B',
          hover: '#2C6E81',
          active: '#275562',
        },
        secondary: {},
        twitter: '#55ACEE',
        linkedin: '#0077B5',
        youtube: '#FF0000',
      },
      width: {
        'w-modal': '474px',
      },
      height: {
        'h-modal': '718px',
      },
      borderColor: {
        base: '#347F95',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
