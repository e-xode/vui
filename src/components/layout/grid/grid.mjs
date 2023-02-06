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
            types: [String, Number]
        },
        colSm: {
            types: [String, Number]
        },
        colMd: {
            types: [String, Number]
        },
        colXl: {
            types: [String, Number]
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
    }
}
