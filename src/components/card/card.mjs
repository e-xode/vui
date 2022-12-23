import langs from '@/components/card/translate/index.mjs'
import {
    locale
} from '@/composables/index.mjs'

export default {
    name: 'VuiCard',
    setup() {
        locale(langs)
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
