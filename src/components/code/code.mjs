import hljs from 'highlight.js'

export default {
    name: 'v-code',
    mounted() {
        this.value = hljs.highlight(
            this.source,
            {
                language: this.language
            }

        ).value
    },
    props: {
        language: {
            type: String,
            default: 'javascript',
            required: false,
        },
        source: {
            type: String,
            default: '',
            required: true,
        }
    },
    data() {
        return {
            value: ''
        }
    },
    computed: {
    },
    components: {
    }
}
