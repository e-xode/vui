import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/start/translate/index.mjs'
export default {
    name: 'ViewStart',
    setup () {
        translatable(langs)
        return {
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {},
    methods: {
    }
}
