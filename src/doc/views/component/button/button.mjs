import hljs from 'highlight.js'
import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/button/translate/index.mjs'
import samples from './button.json'

export default {
    name: 'ViewButton',
    setup() {
        locale(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
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
