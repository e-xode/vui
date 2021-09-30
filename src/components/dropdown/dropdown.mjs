export default {
    name: 'v-dropdown',
    beforeUnmount() {
    },
    mounted() {
        if (this.vInitial) {
            this.select(this.vInitial)
        } else {

        }
    },
    props: {
        onchange: {
            type: Function
        },
        items: {
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: ''
        },
        translate: {
            type: Boolean,
            default: false,
            required: false
        },
        value: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            current: {},
            isOpen: false,
            text: ''
        }
    },
    computed: {
        options() {
            return this.items.filter((item) => {
                const label = item.label || item.value
                return !this.text.length || label.includes(this.text)
            })
        }
    },
    methods: {
        blur() {
            this.isOpen = false
        },
        focus() {
            this.isOpen = true
        },
        label(item) {
            const label = item.label || item.value
            return this.translate
                ? this.$t(label)
                : label
        },
        onKey(e) {
            this.text = e.target.value
            if (e.keyCode === 13) {
                const { vOptions, current } = this
                const option = vOptions.find((item) => {
                    return item.label && item.label.includes(current.label)
                })
                if (item) {
                    this.select(item)
                }
                this.isOpen = false
            }
        },
        select(item) {
            this.current = item
            this.text = item.value
            this.onchange(this.current)
            this.isOpen = false
        },
        toggle() {
            this.isOpen = !this.isOpen
        }
    },
    components: {
    }
}
