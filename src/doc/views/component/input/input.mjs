import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiInput from '@/components/html/input/input.vue'
import langs from '@/doc/views/component/input/translate/index.mjs'
import doc from '@/doc/views/component/input/input.doc.mjs'

export default {
    name: 'ViewInput',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    mounted () {
    },
    data () {
        return {
            form: {
                email: '',
                text: ''
            }
        }
    },
    computed: {
        examples() {
            return this.render(VuiInput, doc)
        }
    },
    methods: {

    },
    components: {
    }
}
