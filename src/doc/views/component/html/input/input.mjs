import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiInput from '@/components/html/input/input.vue'
import langs from '@/doc/views/component/html/input/translate/index.mjs'
import doc from '@/doc/views/component/html/input/input.doc.mjs'

export default {
    name: 'ViewInput',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    mounted () {
        this.form = doc.examples.reduce((obj, { props }) => {
            obj[props.id] = 'test'
            return obj
        }, {})
    },
    data () {
        return {
            form: {
            }
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples() {
            return this.docExamples(VuiInput, doc)
        }
    },
    methods: {

    },
    components: {
    }
}
