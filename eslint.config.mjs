import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

// Flat-config port of the former package.json `eslintConfig` (eslintrc):
// extends plugin:vue/vue3-recommended, eslint:recommended, prettier — same order, same rules.
export default [
    ...pluginVue.configs['flat/recommended'],
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.{js,mjs,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.es2015 }
        },
        rules: {
            'comma-dangle': ['error', 'never'],
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'no-console': ['error'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'vue/attributes-order': ['error'],
            'vue/require-explicit-emits': ['error'],
            'vue/html-closing-bracket-newline': ['error'],
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/order-in-components': ['error'],
            'vue/require-default-prop': ['error'],
            'vue/require-prop-types': ['error'],
            'vue/v-on-event-hyphenation': ['error']
        }
    }
]
