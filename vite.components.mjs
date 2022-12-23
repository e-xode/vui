import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname('./')

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/components.mjs'),
      name: 'vui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
    //       dest: resolve(__dirname, 'public')
    //     }
    //   ]
    // })
  ]
})
