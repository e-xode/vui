import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/header/translate/index.mjs'
export default {
    name: 'ViewHeader',
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
