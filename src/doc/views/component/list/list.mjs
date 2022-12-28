import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/list/translate/index.mjs'
export default {
    name: 'ViewList',
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
