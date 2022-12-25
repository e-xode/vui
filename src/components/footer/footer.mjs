import langs from '@/components/footer/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiFooter',
    setup() {
        locale(langs)
        return {}
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
