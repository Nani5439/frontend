import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react'
    }),
    // Add visualizer for bundle analysis (only in analyze mode)
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'bundle-stats.html',
        gzipSize: true,
        brotliSize: true
      })
  ].filter(Boolean),
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'monaco-editor': ['monaco-editor'],
          'monaco-react': ['@monaco-editor/react'],
          'vendor-charts': ['recharts'],
          'vendor-flow': ['reactflow', 'dagre'],
          'vendor-fontawesome': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/react-fontawesome',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/pro-light-svg-icons',
            '@fortawesome/pro-regular-svg-icons',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/pro-thin-svg-icons'
          ],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-tabs',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-slot'
          ],
          'vendor-utils': [
            'axios',
            'zod',
            'zustand',
            'immer',
            '@tanstack/react-query',
            '@tanstack/react-table'
          ],
          'vendor-motion': ['motion']
        }
      }
    }
  },
  esbuild: {
    // ? If production mode, then drop console and debugger statements
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
}))
