export default {
    name: 'v-header',
    mounted() {
    },
    props: {
        onclick: {
            type: Function,
            required: false
        },
        items: {
            type: Array,
            default: [],
            required: false
        },
        translate: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
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
