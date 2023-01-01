import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTable from '@/components/html/table/table.vue'
import langs from '@/doc/views/component/html/table/translate/index.mjs'
import doc from '@/doc/views/component/html/table/table.doc.mjs'

export default {
    name: 'ViewTable',
    mixins: [demonstrable],
    setup() {
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
        examples() {
            return this.docExamples(VuiTable, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}