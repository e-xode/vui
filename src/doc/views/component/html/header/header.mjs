import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiHeader from '@/components/html/header/header.vue'
import doc from '@/doc/views/component/html/header/header.doc.mjs'
import langs from '@/doc/views/component/html/header/translate/index.mjs'

export default {
    name: 'ViewHeader',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiHeader, doc)
        }
    }
}
