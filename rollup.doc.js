import alias from '@rollup/plugin-alias'
import autoprefixer from 'autoprefixer'
import commonjs from '@rollup/plugin-commonjs'
import inject from 'rollup-plugin-inject-process-env'
import json from '@rollup/plugin-json'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'
import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'

const production = process.env.NODE_ENV === 'production'
const __dirname = process.cwd()

export default {
    input: 'src/doc/main.mjs',
    output: [
        {
            name: 'doc',
            file: 'dist/doc/doc.esm.mjs',
            format: 'esm'
        },
        {
            name: 'doc',
            file: 'dist/doc/doc.cjs.js',
            format: 'cjs'
        },
        {
            name: 'doc',
            file: 'dist/doc/doc.umd.js',
            format: 'umd'
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
        copy({
            targets: [
                {
                    src: 'src/doc/index.html',
                    dest: 'dist'
                },
                {
                    src: 'node_modules/@fortawesome/fontawesome-free/webfonts',
                    dest: 'dist'
                }
            ]
        }),
        json(),
        scss({
            output: 'dist/doc/doc.umd.css'
        }),
        vue(),
        commonjs(),
        inject({
            NODE_ENV: process.env.NODE_ENV
        }),
        resolve({
            browser: true
        }),
        !production && serve({
            contentBase: ['dist'],
            port: 3001,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    ]
}
