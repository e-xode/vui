import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/page/translate/index.mjs'
export default {
    name: 'ViewPage',
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
