/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f3',
          100: '#ebeeda',
          200: '#d6dbb8',
          300: '#bac290',
          400: '#9da56e',
          500: '#848c53',
          600: '#6a7141',
          700: '#545936',
          800: '#454730',
          900: '#3b3c29',
          950: '#1f2015',
        },
        khaki: {
          50: '#f9f8f2',
          100: '#f1efe0',
          200: '#e3ddc2',
          300: '#d2c79d',
          400: '#c1ac75',
          500: '#b49759',
          600: '#a58249',
          700: '#886a3d',
          800: '#705736',
          900: '#5e4931',
          950: '#322617',
        },
        'medical-red': {
          DEFAULT: '#b02a37',
          dark: '#9b2226',
        },
        'medical-green': {
          DEFAULT: '#2a914e',
          dark: '#1f7a3f',
        }
      },
      fontFamily: {
        stencil: ['Stencil Std', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
