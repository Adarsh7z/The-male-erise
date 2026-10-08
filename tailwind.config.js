/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Lobster Two"', '"Playfair Display"', 'cursive', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
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
