import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiGrid from '@/components/layout/grid/grid.vue'
import langs from '@/doc/views/component/layout/grid/translate/index.mjs'
import doc from '@/doc/views/component/layout/grid/grid.doc.mjs'

export default {
    name: 'ViewGrid',
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
            return this.docExamples(VuiGrid, doc)
        }
    }
}
