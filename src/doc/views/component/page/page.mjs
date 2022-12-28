import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/page/translate/index.mjs'
export default {
    name: 'ViewPage',
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
