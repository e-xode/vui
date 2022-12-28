import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/grid/unit/translate/index.mjs'
export default {
    name: 'ViewGridUnit',
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
        submit () {
        }
    },
    components: {
    }
}
