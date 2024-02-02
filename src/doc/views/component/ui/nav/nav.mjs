import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiNav from '@/components/ui/nav/nav.vue'
import langs from '@/doc/views/component/ui/nav/translate/index.mjs'
import doc from '@/doc/views/component/ui/nav/nav.doc.mjs'

export default {
    name: 'ViewNav',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data() {
        return {
            selected: null
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiNav, {
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
