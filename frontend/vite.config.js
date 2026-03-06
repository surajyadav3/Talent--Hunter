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
    // Enable source maps only in dev, disable in prod for smaller bundles
    sourcemap: false,
    // Use terser for better dead code elimination
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached across all pages
          'react-vendor': ['react', 'react-dom', 'react-router'],
          // Auth — loaded early
          'clerk-vendor': ['@clerk/clerk-react'],
          // Stream SDKs — loaded only when entering a session
          'stream-video': ['@stream-io/video-react-sdk'],
          'stream-chat': ['stream-chat', 'stream-chat-react'],
          // UI utilities — relatively small
          'ui-vendor': ['lucide-react', 'react-hot-toast'],
          // Data layer
          'query-vendor': ['@tanstack/react-query', 'axios'],
          // Monaco editor (heavy) — only loaded on session page
          'monaco-vendor': ['@monaco-editor/react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      '@clerk/clerk-react',
      '@tanstack/react-query',
      'axios',
      'react-hot-toast',
      'lucide-react',
    ],
  },
})
