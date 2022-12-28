import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/grid/translate/index.mjs'
export default {
    name: 'ViewGrid',
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
