import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiButton from '@/components/html/button/button.vue'
import langs from '@/doc/views/component/html/button/translate/index.mjs'
import doc from '@/doc/views/component/html/button/button.doc.mjs'

export default {
    name: 'ViewButton',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {
        }
    },
    mounted () {
        this.buttons = doc.examples.map((button) => ({
            id: button.props.id
        }))
    },
    data () {
        return {
            buttons: []
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiButton, {
                attrs: doc.attrs,
                examples: doc.examples.map((example) => ({
                    ...example,
                    props: {
                        ...example.props,
                        text: example.props.text
                            ? this.$t(example.props.text)
                            : undefined
                    }
                }))
            })
        }
    },
    methods: {
        isLoading (id) {
            const button = this.buttons.find((button) => button.id === id )
            return button?.loading
        },
        onClick (id) {
            const { buttons } = this
            this.buttons = buttons.map((button) => {
                return button.id === id
                    ? { ...button, loading: !button.loading }
                    : button
            })
        }
    }
}
