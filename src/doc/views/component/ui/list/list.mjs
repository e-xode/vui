import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiInput from '@/components/ui/list/list.vue'
import langs from '@/doc/views/component/ui/list/translate/index.mjs'
import doc from '@/doc/views/component/ui/list/list.doc.mjs'

export default {
    name: 'ViewList',
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
        examples() {
            return this.docExamples(VuiInput, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
