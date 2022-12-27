import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rewrite from 'vite-plugin-rewrite-all'

const __dirname = dirname('./')

export default defineConfig({
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        }
    },
    build: {
        outDir: resolve(__dirname, 'dist/doc'),
        emptyOutDir: true
    },
    plugins: [
        vue(),
        rewrite()
    ]
})
