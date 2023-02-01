import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTooltip from '@/components/ui/tooltip/tooltip.vue'
import langs from '@/doc/views/component/ui/tooltip/translate/index.mjs'
import doc from '@/doc/views/component/ui/tooltip/tooltip.doc.mjs'

export default {
    name: 'ViewTooltip',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    mounted () {
        this.tooltips = doc.examples.map(() => false)
    },
    data () {
        return {
            tooltips: []
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiTooltip, {
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
        holder (index) {
            return this.tooltips?.length
                ? this.$el.querySelector(`#button-holder-${index}`)
                : null
        },
        onClick (index) {
            const tooltip = this.tooltips[index]
            this.tooltips[index] = !tooltip
        }
    }
}
