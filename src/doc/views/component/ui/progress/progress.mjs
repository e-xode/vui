import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiProgress from '@/components/ui/progress/progress.vue'
import langs from '@/doc/views/component/ui/progress/translate/index.mjs'
import doc from '@/doc/views/component/ui/progress/progress.doc.mjs'

export default {
    name: 'ViewProgress',
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
            return this.docExamples(VuiProgress, {
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
