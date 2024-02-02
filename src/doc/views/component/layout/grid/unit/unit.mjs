import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiGridUnit from '@/components/layout/grid/unit/unit.vue'
import langs from '@/doc/views/component/layout/grid/unit/translate/index.mjs'
import doc from '@/doc/views/component/layout/grid/unit/unit.doc.mjs'

export default {
    name: 'ViewGridUnit',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiGridUnit, doc)
        }
    }
}
