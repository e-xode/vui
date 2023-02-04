import { h } from 'vue'
import hljs from 'highlight.js'

const demonstrable = {
    computed: {
        docAttrs () {
            return this.doc.attrs.map((item) => ({
                ...item,
                text: item.text ? this.$t(item.text) : null
            }))
        },
        docAttrsHeaders () {
            return [
                {
                    label: this.$t('page.component.doc.attr.name'),
                    value: 'name'
                },
                {
                    label: this.$t('page.component.doc.attr.text'),
                    value: 'text'
                }
            ]
        },
        docProps () {
            return this.doc.props.map((item) => ({
                ...item,
                text: item.text ? this.$t(item.text) : null
            }))
        },
        docPropsHeaders () {
            return [
                {
                    label: this.$t('page.component.doc.prop.tag'),
                    value: 'tag'
                },
                {
                    label: this.$t('page.component.doc.prop.type'),
                    value: 'type'
                },
                {
                    label: this.$t('page.component.doc.prop.text'),
                    value: 'text'
                }
            ]
        },
        docSlots () {
            return this.doc.slots.map((item) => ({
                ...item,
                text: item.text ? this.$t(item.text) : null
            }))
        },
        docSlotsHeaders () {
            return [
                {
                    label: this.$t('page.component.doc.slot.name'),
                    value: 'name'
                },
                {
                    label: this.$t('page.component.doc.slot.text'),
                    value: 'text'
                }
            ]
        }
    },
    methods: {
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
