import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiCheckbox from '@/components/html/checkbox/checkbox.vue'
import langs from '@/doc/views/component/html/checkbox/translate/index.mjs'
import doc from '@/doc/views/component/html/checkbox/checkbox.doc.mjs'

export default {
    name: 'ViewCheckbox',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    mounted() {
        this.states = this.examples.reduce((obj, example) => ({
            ...obj,
            [example.props.id]: false
        }), {})
    },
    data() {
        return {
            states: {}
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiCheckbox, {
                attrs: doc.attrs,
                examples: doc.examples.map((example) => ({
                    ...example,
                    props: {
                        ...example.props,
                        text: example.props.text
                            ? this.$t(example.props.text)
                            : null
                    }
                }))
            })
        }
    },
    methods: {
    }
}
