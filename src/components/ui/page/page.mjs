import langs from '@/components/ui/page/translate/index.mjs'
import {
    translatable,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiPage',
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
    methods: {
        outclick ()  {
            this.$bus.emit('outclick', this.uuid)
        }
    },
    components: {
    }
}
