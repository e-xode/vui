import langs from '@/components/html/button/translate/index.mjs'
import {
    animated,
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiButton',
    mixins: [
        animated,
        uuid
    ],
    setup () {
        locale(langs)
        return {}
    },
    props: {
        disabled: {
            type: Boolean
        },
        icon: {
            type: String
        },
        text: {
            type: String
        },
        type: {
            type: String,
            default: 'button'
        }
    },
    mounted () {

    },
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
        onClick () {
            if (!this.disabled) {
                this.onToggle()
                this.$emit('click')
            }
        }
    },
    components: {
    }
}
