import hljs from 'highlight.js'
import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/input/translate/index.mjs'
import samples from './input.json'

export default {
    name: 'ViewInput',
    setup() {
        locale(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
            form: {
                email: null,
                text: null,
            },
            codes: samples.map((json) => {
                return hljs.highlight(
                    json.code,
                    { language: 'html' }
                ).value
            })
        }
    },
    computed: {
    },
    methods: {
    },
    components: {
    }
}
