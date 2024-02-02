import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/index/translate/index.mjs'
import jsonPackage from '@/../package.json'

export default {
    name: 'ViewIndex',
    created () {
        translatable(langs)
    },
    computed: {
        version () {
            return jsonPackage.version
        }
    }
}
