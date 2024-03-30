import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'
import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

const __dirname = dirname('./')

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/components.mjs'),
            formats: ['cjs', 'esm', 'umd'],
            name: 'vui'
        },
        rollupOptions: {
            external: Object.keys(pkg.dependencies || {})
        }
    },
    plugins: [
        vue()
    ],
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    root: resolve(__dirname, 'src'),
    test: {
        coverage: {
            all: true,
            exclude: [
                'src/doc/**',
                'src/components.mjs',
                'src/composables/demonstrable.mjs',
                'vite.*.mjs',
                '**/*.json',
                '**/translate/**',
                '**/main.mjs'
            ],
            provider: 'istanbul',
            reporter: ['cobertura','html']
        },
        deps: {
            optimizer: {
                web: {
                    include: []
                }
            }
        },
        environment: 'jsdom',
        environmentOptions: {
            jsdom: {
                resources: 'usable'
            }
        },
        exclude: [...configDefaults.exclude, 'e2e/*'],
        hookTimeout: 10000,
        root: fileURLToPath(new URL('./', import.meta.url)),
        setupFiles: [
            './src/test/setup.mjs'
        ],
        server: {
            deps: {
                inline: []
            }
        },
        silent : false,
        testTimeout: 10000
    }
})
