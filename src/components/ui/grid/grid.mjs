import langs from '@/components/ui/card/translate/index.mjs'
import {
    translatable,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiGrid',
    mixins: [
        uuid
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
