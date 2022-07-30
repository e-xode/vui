import alias from '@rollup/plugin-alias'
import autoprefixer from 'autoprefixer'
import commonjs from '@rollup/plugin-commonjs'
import inject from 'rollup-plugin-inject-process-env'
import json from '@rollup/plugin-json'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue'

const production = process.env.NODE_ENV === 'production'
const __dirname = process.cwd()

export default {
    input: 'src/components.mjs',
    output: [
        {
            name: 'vui',
            file: 'dist/index.esm.mjs',
            format: 'esm',
            globals: {
                'vue': 'Vue'
            }
        },
        {
            name: 'vui',
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
            globals: {
                'vue': 'Vue'
            }
        },
        {
            name: 'vui',
            file: 'dist/index.umd.js',
            format: 'umd',
            globals: {
                'vue': 'Vue'
            }
        }
    ],
    plugins: [
        alias({
            resolve: ['', '.css', '.js', '.vue', '.scss', '.json'],
            entries: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'src')
                }
            ]
        }),
        json(),
        scss({
            output: 'dist/index.esm.css'
        }),
        vue(),
        commonjs(),
        inject({
            NODE_ENV: process.env.NODE_ENV
        }),
        resolve({
            browser: true
        })
    ],
    external: ['vue']
}
