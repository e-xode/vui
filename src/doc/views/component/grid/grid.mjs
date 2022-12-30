import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiGrid from '@/components/ui/grid/grid.vue'
import langs from '@/doc/views/component/grid/translate/index.mjs'
import doc from '@/doc/views/component/grid/grid.doc.mjs'

export default {
    name: 'ViewGrid',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiGrid, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
