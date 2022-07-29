export default {
    name: 'v-list',
    mounted() {
    },
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        onclick: {
            type: Function,
            required: false
        },
        items: {
            type: Array,
            default: [],
            required: true
        },
        translate: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
            current: {}
        }
    },
    computed: {
    },
    methods: {
        label(item) {
            const label = item.label || item.value
            return this.translate
                ? this.$t(label)
                : label
        },
        onClick(item) {
            if (!this.disabled) {
                this.current = item
                if (this.onclick) {
                    this.onclick(item)
                }
            }
        }
    },
    components: {
    }
}
