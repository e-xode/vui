import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiCard from '@/components/ui/card/card.vue'
import doc from '@/doc/views/component/ui/card/card.doc.mjs'
import langs from '@/doc/views/component/ui/card/translate/index.mjs'

export default {
    name: 'ViewCard',
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
            return this.docExamples(VuiCard, doc)
        }
    }
}
