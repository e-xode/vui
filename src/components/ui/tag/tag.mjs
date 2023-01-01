import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTag',
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
        text: {
            type: String
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
    }
}
