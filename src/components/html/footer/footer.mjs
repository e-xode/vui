import langs from '@/components/html/footer/translate/index.mjs'
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
