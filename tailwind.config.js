module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: {
          darker: '#1E1E1E',
          dark: '#0F0E0E',
        },
        primary: {
          base: '#347F95',
          light: '#F3F7F8',
        },
        secondary: {},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
