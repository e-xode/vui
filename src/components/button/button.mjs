import langs from '@/components/button/translate/index.mjs'
import {
    animated,
    locale
} from '@/composables/index.mjs'

export default {
    name: 'VuiButton',
    mixins: [animated],
    setup() {
        locale(langs)
        return {}
    },
    props: {
        type: {
            type: String,
            default: 'button'
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
        onClick () {
            this.animate()
            this.$emit('click')
        }
    },
    components: {
    }
}
