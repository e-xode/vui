import hljs from 'highlight.js'

import samples from './dropdown.json'

export default {
    name: 'ViewDropdown',
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
