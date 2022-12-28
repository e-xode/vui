import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/card/translate/index.mjs'
export default {
    name: 'ViewCard',
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
