import langs from '@/components/ui/page/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiPage',
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
    methods: {
        outclick ()  {
            this.$bus.emit('outclick')
        }
    },
    components: {
    }
}
