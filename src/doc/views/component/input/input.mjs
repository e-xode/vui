import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/component/input/translate/index.mjs'
import { examples } from '@/doc/views/component/input/input.examples.mjs'

export default {
    name: 'ViewInput',
    mixins: [demonstrable],
    setup() {
        translatable(langs)
        return {}
    },
    mounted() {
    },
    data() {
        return {
            form: {
                email: null,
                text: null,
            }
        }
    },
    computed: {
        examples() {
            return this.nodes(examples)
        },
        emailValue () {
            return this.form.email?.length
                ? `${this.form.email.substr(0, 10)}...`
                : this.$t('page.component.input.vmodel.none')
        },
        textValue () {
            return this.form.text?.length
                ? `${this.form.text.substr(0, 10)}...`
                : this.$t('page.component.input.vmodel.none')
        }
    },
    methods: {

    },
    components: {
    }
}
