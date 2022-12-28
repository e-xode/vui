import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/list/translate/index.mjs'
export default {
    name: 'ViewList',
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
