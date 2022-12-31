import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiModal from '@/components/ui/modal/modal.vue'
import langs from '@/doc/views/component/ui/modal/translate/index.mjs'
import doc from '@/doc/views/component/ui/modal/modal.doc.mjs'

export default {
    name: 'ViewModal',
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
            return this.docExamples(VuiModal, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
