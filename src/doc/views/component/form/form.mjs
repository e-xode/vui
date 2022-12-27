import { locale } from '@/composables/index.mjs'

import langs from '@/doc/views/component/form/translate/index.mjs'
export default {
    name: 'ViewForm',
    setup() {
        locale(langs)
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
