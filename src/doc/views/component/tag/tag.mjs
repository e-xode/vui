import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/tag/translate/index.mjs'
export default {
    name: 'ViewTag',
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
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
