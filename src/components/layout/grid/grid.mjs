import langs from '@/components/layout/grid/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGrid',
    mixins: [
        composable
    ],
    props: {
        colXs: {
            type: [String, Number]
        },
        colSm: {
            type: [String, Number]
        },
        colMd: {
            type: [String, Number]
        },
        colXl: {
            type: [String, Number]
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
    },
    methods: {
    },
    components: {
    }
}
