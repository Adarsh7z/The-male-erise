/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
        serif: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
      },
      colors: {
        ink: '#0a0a0a',
        'ink-2': '#131313',
        paper: '#ffffff',
        bone: '#f5f5f3',
        silver: {
          100: '#e8e8e8',
          200: '#d5d7d9',
          300: '#a9abae',
          400: '#8a8c90',
          500: '#6e7074',
        },
        muted: '#5c5e61',
        'muted-dark': '#a9abae',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
