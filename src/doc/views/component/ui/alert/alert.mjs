import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiAlert from '@/components/ui/alert/alert.vue'
import langs from '@/doc/views/component/ui/alert/translate/index.mjs'
import doc from '@/doc/views/component/ui/alert/alert.doc.mjs'

export default {
    name: 'ViewAlert',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiAlert, {
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
