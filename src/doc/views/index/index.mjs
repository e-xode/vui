import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/index/translate/index.mjs'
import jsonPackage from '@/../package.json'

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
    computed: {
        version () {
            return jsonPackage.version
        }
    },
    methods: {
    }
}
