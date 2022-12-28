import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/component/dropdown/translate/index.mjs'
import { examples } from '@/doc/views/component/dropdown/dropdown.examples.mjs'

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
            return this.nodes(examples)
        }
    },
    methods: {
    },
    components: {
    }
}
