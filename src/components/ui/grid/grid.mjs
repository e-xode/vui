import langs from '@/components/ui/card/translate/index.mjs'
import {
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiGrid',
    mixins: [
        uuid
    ],
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
