import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTag from '@/components/ui/tag/tag.vue'
import langs from '@/doc/views/component/tag/translate/index.mjs'
import doc from '@/doc/views/component/tag/tag.doc.mjs'

export default {
    name: 'ViewTag',
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
            return this.docExamples(VuiTag, {
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
        submit () {
        }
    },
    components: {
    }
}
