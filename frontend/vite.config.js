import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'clerk-vendor': ['@clerk/clerk-react'],
          'stream-vendor': ['@stream-io/video-react-sdk', 'stream-chat', 'stream-chat-react'],
          'ui-vendor': ['lucide-react', 'canvas-confetti', 'react-hot-toast'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Slightly increase limit due to heavy SDKs
  }
})
