import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTooltip',
    mixins: [
        composable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    props: {
        icon: {
            type: String
        },
        holder: {
            type: String
        },
        text: {
            type: String
        },
        visible: {
            type: Boolean
        }
    },
    mounted () {
    },
    data () {
        return {
        }
    },
    computed: {
        position () {
            // const left = this.ref.getBoundingClientRect().left
            // const top = this.ref.getBoundingClientRect().top
            // return { left, top }
        }
    },
    methods: {
    }
}
