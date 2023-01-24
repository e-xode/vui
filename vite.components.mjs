import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

const __dirname = dirname('./')

export default defineConfig({
    root: resolve(__dirname, 'src'),
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/components.mjs'),
            fileName: (format) => `vui.${format}.js`,
            formats: ['cjs', 'esm', 'umd'],
            name: 'vui'
        },
        rollupOptions: {
            external: Object.keys(pkg.dependencies || {})
        }
    },
    plugins: [
        vue()
    ]
})
