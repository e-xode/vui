import langs from '@/components/ui/grid/unit/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGridUnit',
    mixins: [
        composable
    ],
    setup() {
        translatable(langs)
        return {}
    },
    props: {
        flex: {
            type: String,
            default: '0 0 49%'
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        style () {
            const {  flex } = this
            return [
                { flex }
            ]
        }
    },
    methods: {
    },
    components: {
    }
}
