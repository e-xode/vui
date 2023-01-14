import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiFooter from '@/components/html/footer/footer.vue'
import doc from '@/doc/views/component/html/footer/footer.doc.mjs'
import langs from '@/doc/views/component/html/footer/translate/index.mjs'

export default {
    name: 'ViewFooter',
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
            return this.docExamples(VuiFooter, doc)
        }
    },
    methods: {
        isLoading () {
        }
    },
    components: {
    }
}
