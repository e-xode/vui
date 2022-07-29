export default {
    name: 'v-input',
    mounted() {
        this.current = this.vInitial
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        onkey: {
            type: Function,
            required: false
        },
        value: {
            type: String,
            default: null
        }
    },
    watch: {
        'value': {
            handler(value) {
                if (value && value !== this.current) {
                    this.current = value
                }
            }
        }
    },
    data() {
        return {
            current: null
        }
    },
    computed: {
    },
    methods: {
        onKey() {
            if(this.onkey) {
                this.onkey(this.current)
            }
        }
    },
    components: {
    }
}
