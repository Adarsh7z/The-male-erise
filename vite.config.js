import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'out',
    emptyOutDir: true,
  },
  base: './', // Ensures relative assets work on any static host (Netlify, Cloudflare, GitHub Pages, or local file)
});
