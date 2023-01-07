import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/start/translate/index.mjs'
export default {
    name: 'ViewStart',
    created () {
        translatable(langs)
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
