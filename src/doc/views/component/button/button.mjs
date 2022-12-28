import {
    demonstrable,
    locale
} from '@/composables/index.mjs'

import VuiButton from '@/components/html/button/button.vue'
import langs from '@/doc/views/component/button/translate/index.mjs'
import { examples } from '@/doc/views/component/button/button.examples.mjs'

export default {
    name: 'ViewButton',
    mixins: [demonstrable],
    setup () {
        locale(langs)
        return {
        }
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
                VuiButton,
                examples
            )
        }
    },
    methods: {
    },
    components: {
    }
}
