import {
    demonstrable,
    locale
} from '@/composables/index.mjs'

import VuiInput from '@/components/html/input/input.vue'
import langs from '@/doc/views/component/input/translate/index.mjs'
import { examples } from '@/doc/views/component/input/input.examples.mjs'

export default {
    name: 'ViewInput',
    mixins: [demonstrable],
    setup() {
        locale(langs)
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
            return this.nodes(
                VuiInput,
                examples
            )
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
