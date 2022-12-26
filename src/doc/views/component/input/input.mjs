import hljs from 'highlight.js'

import samples from './input.json'

export default {
    name: 'ViewInput',
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
