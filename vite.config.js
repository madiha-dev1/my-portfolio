import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// public/assets holds the video, photos and resume (served at /assets/...),
// so Vite's own bundles go to /bundle to avoid mixing the two.
export default defineConfig({
  plugins: [react()],
  build: { assetsDir: 'bundle' },
})
