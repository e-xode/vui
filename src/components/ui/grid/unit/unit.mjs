import langs from '@/components/ui/card/translate/index.mjs'
import {
    translatable,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiGridUnit',
    mixins: [
        uuid
    ],
    setup() {
        translatable(langs)
        return {}
    },
    props: {
        flex: {
            type: String,
            default: '0 0 49%'
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        style () {
            const {  flex } = this
            return [
                { flex }
            ]
        }
    },
    methods: {
    },
    components: {
    }
}
