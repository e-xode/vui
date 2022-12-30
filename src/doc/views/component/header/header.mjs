import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiHeader from '@/components/html/header/header.vue'
import doc from '@/doc/views/component/header/header.doc.mjs'
import langs from '@/doc/views/component/header/translate/index.mjs'

export default {
    name: 'ViewHeader',
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
            return this.docExamples(VuiHeader, doc)
        }
    },
    methods: {
        isLoading () {
        }
    },
    components: {
    }
}
