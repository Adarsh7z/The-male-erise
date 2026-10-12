/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', 'var(--font-fallback)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-fallback)', 'sans-serif'],
        serif: ['var(--font-display)', 'var(--font-fallback)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#8b24d6',
          purpleHover: '#7a1ec0',
          whatsapp: '#25D366',
          whatsappHover: '#20bd5a',
          dark: '#111111',
          card: '#18181b',
        }
      }
    },
  },
  plugins: [],
}
