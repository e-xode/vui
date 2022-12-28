import {
    demonstrable,
    locale
} from '@/composables/index.mjs'

import VuiDropdown from '@/components/ui/dropdown/dropdown.vue'
import langs from '@/doc/views/component/dropdown/translate/index.mjs'
import { examples } from '@/doc/views/component/dropdown/dropdown.examples.mjs'

export default {
    name: 'ViewDropdown',
    mixins: [demonstrable],
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
        examples() {
            return this.nodes(
                VuiDropdown,
                examples
            )
        }
    },
    methods: {
    },
    components: {
    }
}
