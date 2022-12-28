import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/grid/unit/translate/index.mjs'
export default {
    name: 'ViewGridUnit',
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
