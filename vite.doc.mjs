import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname('./')

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'dist/doc'),
        emptyOutDir: true
    },
    plugins: [
        vue()
    ],
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
    },
    server: {
        port: 3001,
        watch: {
            usePolling: true
        }
    }
})
