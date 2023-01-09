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
        colXs() {
            type: Number
        },
        colSm() {
            type: Number
        },
        colMd() {
            type: Number
        },
        colXl() {
            type: Number
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
