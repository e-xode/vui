import langs from '@/components/form/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiHeader',
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
