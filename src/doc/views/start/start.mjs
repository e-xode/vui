import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/start/translate/index.mjs'
import components from '@/components.json'

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
    computed: {
        components () {
            return components
        }
    },
    methods: {
    }
}
