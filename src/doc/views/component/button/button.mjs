import hljs from 'highlight.js'

import samples from './button.json'

export default {
    name: 'ViewButton',
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
