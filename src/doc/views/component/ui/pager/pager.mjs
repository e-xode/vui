import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiPager from '@/components/ui/pager/pager.vue'
import doc from '@/doc/views/component/ui/pager/pager.doc.mjs'
import langs from '@/doc/views/component/ui/pager/translate/index.mjs'

export default {
    name: 'ViewPager',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    mounted() {
        this.pages = this.examples.reduce((obj, example) => ({
            ...obj,
            [example.props.id]: example.modelValue
        }), {})
    },
    data() {
        return {
            pages: {}
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiPager, doc)
        }
    },
    methods: {
    }
}
