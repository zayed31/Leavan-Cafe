/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#6F4E37',
          light: '#8B6F47',
          dark: '#4A2F1A',
          cream: '#D4B896',
          roast: '#3E2723',
        },
        coorg: {
          DEFAULT: '#2D5016',
          light: '#4A7C2A',
          dark: '#1A3009',
        },
        brown: {
          DEFAULT: '#6B4423',
          dark: '#4A2F1A',
        },
        stone: {
          DEFAULT: '#57534E',
          50: '#FAF8F5',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'float-delayed': 'float-delayed 20s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(-15px)' },
          '66%': { transform: 'translateY(-25px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}
