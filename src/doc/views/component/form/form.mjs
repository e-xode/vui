import { translatable } from '@/composables/index.mjs'

import langs from '@/doc/views/component/form/translate/index.mjs'
export default {
    name: 'ViewForm',
    setup() {
        translatable(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
            form: {
                email: null,
                password: null
            }
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
