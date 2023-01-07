import langs from '@/components/html/button/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiButton',
    mixins: [
        animable,
        composable
    ],
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
    created () {
        translatable(langs)
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
                this.onAnimate()
            }
        }
    }
}
