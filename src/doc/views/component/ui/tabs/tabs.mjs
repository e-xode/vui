import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTabs from '@/components/ui/tabs/tabs.vue'
import langs from '@/doc/views/component/ui/tabs/translate/index.mjs'
import doc from '@/doc/views/component/ui/tabs/tabs.doc.mjs'

export default {
    name: 'ViewTabs',
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
            return this.docExamples(VuiTabs, {
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
