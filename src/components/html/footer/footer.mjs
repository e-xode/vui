import langs from '@/components/html/footer/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiFooter',
    mixins: [
        composable
    ],
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
    components: {
    }
}
