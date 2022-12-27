import langs from '@/components/ui/card/translate/index.mjs'
import {
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiUnit',
    mixins: [
        uuid
    ],
    setup() {
        locale(langs)
        return {}
    },
    props: {
        flexBasis: {
            type: String,
            default: 'auto'
        },
        flexGrow: {
            type: String,
            default: "0"
        },
        flexShrink: {
            type: String,
            default: "0"
        }
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
