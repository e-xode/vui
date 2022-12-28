import langs from '@/components/html/header/translate/index.mjs'
import {
    translatable,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiHeader',
    mixins: [
        uuid
    ],
    setup() {
        translatable(langs)
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
