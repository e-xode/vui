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
    props: {
        icon: {
            type: String
        },
        text: {
            type: String
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
    }
}
