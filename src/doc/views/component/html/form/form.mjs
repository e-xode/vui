import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiForm from '@/components/html/form/form.vue'
import langs from '@/doc/views/component/html/form/translate/index.mjs'
import doc from '@/doc/views/component/html/form/form.doc.mjs'

export default {
    name: 'ViewForm',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    mounted () {
    },
    data () {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiForm, doc)
        }
    },
    methods: {
        submit () {
        }
    },
    components: {
    }
}
