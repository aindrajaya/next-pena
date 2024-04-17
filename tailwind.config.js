const typographyPlugin = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      pena: {
        50: '#fef9ec',
        100: '#fcecc9',
        200: '#f9d78e',
        300: '#f6bc53',
        400: '#f39f21',
        500: '#ed8213',
        600: '#d25e0d',
        700: '#ae410f',
        800: '#8d3213',
        900: '#742a13',
        950: '#431405',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      sky: colors.sky,
      pink: colors.pink,
      teal: colors.teal,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      // fontFamily: {
      //   sans: 'var(--font-inter)',
      //   display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }],
      // },
      fontFamily: {
        sans: [
          'Circular',
          'custom-font',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['Office Code Pro', 'Source Code Pro', 'Menlo', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [typographyPlugin],
};
