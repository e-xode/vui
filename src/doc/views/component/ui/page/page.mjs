import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiPage from '@/components/ui/page/page.vue'
import doc from '@/doc/views/component/ui/page/page.doc.mjs'
import langs from '@/doc/views/component/ui/page/translate/index.mjs'

export default {
    name: 'ViewPage',
    mixins: [
        demonstrable
    ],
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
            return this.docExamples(VuiPage, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
