import react from '@vitejs/plugin-react'
import { defineConfig, transformWithEsbuild } from 'vite'


export default defineConfig({
  root: './', // Root is your library project
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    {
      name: 'fix-import-order',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.css') && code.includes('@import')) {
          return code.replace(
            /@import url\('https:\/\/fonts.googleapis.com\/css2[^']+\'\);/,
            ''
          )
        }
      },
    },
    react(),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      process: 'process/browser', // Alias `process` to the browser polyfill
    },
  },
  define: {
    global: {}, // Some libraries expect `global` to exist
    'process.env': {}, // Provide an empty `process.env` object
  },
})
