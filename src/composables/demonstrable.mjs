import { h } from 'vue'
import hljs from 'highlight.js'

const demonstrable = {
    computed: {
        docHeaders () {
            return [
                {
                    label: this.$t('page.component.doc.tag'),
                    value: 'tag'
                },
                {
                    label: this.$t('page.component.doc.type'),
                    value: 'type'
                },
                {
                    label: this.$t('page.component.doc.text'),
                    value: 'text'
                }
            ]
        }
    },
    methods: {
        docItems (doc) {
            return doc.attrs.map((item) => ({
                ...item,
                text: this.$t(item.text)
            }))
        },
        docExamples (component, values) {
            return values.examples.map(example => ({
                ...example,
                component: h(component, example.props),
                highlighted: hljs.highlight(
                    example.markup,
                    { language: 'html' }
                ).value
            }))
        }
    }
}
export {
    demonstrable
}
