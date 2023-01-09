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
