import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // relative asset URLs, so `dist/` also works when opened straight from disk
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    // keep the videos/images as real files instead of inlining them as base64
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 900,
  },
})
