import hljs from 'highlight.js'
import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/dropdown/translate/index.mjs'
import samples from './dropdown.json'

export default {
    name: 'ViewDropdown',
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
