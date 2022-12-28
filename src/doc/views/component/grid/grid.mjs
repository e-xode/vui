import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/grid/translate/index.mjs'
export default {
    name: 'ViewGrid',
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
