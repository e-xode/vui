import langs from '@/components/html/table/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTable',
    mixins: [
        animable,
        composable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    props: {
        disabled: {
            type: Boolean
        },
        headers: {
            type: Array
        },
        itemLabel: {
            type: String
        },
        itemValue: {
            type: String
        },
        items: {
            type: Array
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
    },
    components: {
    }
}
