import langs from '@/components/ui/modal/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiModal',
    mixins: [
        composable
    ],
    setup() {
        translatable(langs)
        return {}
    },
    props: {
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
