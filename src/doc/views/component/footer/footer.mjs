import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/footer/translate/index.mjs'
export default {
    name: 'ViewFooter',
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