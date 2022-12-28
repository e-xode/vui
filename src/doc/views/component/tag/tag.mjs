import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/tag/translate/index.mjs'
export default {
    name: 'ViewTag',
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
