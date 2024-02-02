import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiDropdown from '@/components/ui/dropdown/dropdown.vue'
import langs from '@/doc/views/component/ui/dropdown/translate/index.mjs'
import doc from '@/doc/views/component/ui/dropdown/dropdown.doc.mjs'

export default {
    name: 'ViewDropdown',
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
            return this.docExamples(VuiDropdown, doc)
        }
    }
}
