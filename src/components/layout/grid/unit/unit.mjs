import langs from '@/components/layout/grid/unit/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGridUnit',
    mixins: [
        composable
    ],
    props: {
        flex: {
            type: String,
            default: '0 0 49%'
        }
    },
    created () {
        translatable(langs)
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
