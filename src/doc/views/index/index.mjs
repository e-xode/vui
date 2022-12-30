import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/index/translate/index.mjs'
export default {
    name: 'ViewIndex',
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
    },
    components: {
    }
}
