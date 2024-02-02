import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiToggle from '@/components/ui/toggle/toggle.vue'
import langs from '@/doc/views/component/ui/toggle/translate/index.mjs'
import doc from '@/doc/views/component/ui/toggle/toggle.doc.mjs'

export default {
    name: 'ViewToggle',
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
            return this.docExamples(VuiToggle, {
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
    }
}
