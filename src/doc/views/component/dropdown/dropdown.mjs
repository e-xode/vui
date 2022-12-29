import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiDropdown from '@/components/ui/dropdown/dropdown.vue'
import langs from '@/doc/views/component/dropdown/translate/index.mjs'
import doc from '@/doc/views/component/dropdown/dropdown.doc.mjs'

export default {
    name: 'ViewDropdown',
    mixins: [demonstrable],
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
        examples() {
            return this.render(VuiDropdown, doc)
        }
    },
    methods: {
    },
    components: {
    }
}
