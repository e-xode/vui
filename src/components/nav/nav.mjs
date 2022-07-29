export default {
    name: 'v-nav',
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
        onClick(option) {
            if(this.onclick) {
                this.onclick(option)
            }
        }
    },
    components: {
    }
}
