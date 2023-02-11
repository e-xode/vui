import langs from '@/components/html/input/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './input.constant.mjs'

export default {
    name: 'VuiInput',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.typed = this.modelValue
        } else if (this.hasValue) {
            this.typed = this.value
        }
    },
    watch: {
        value (value) {
            this.typed = value
        },
        modelValue (value) {
            this.typed = value
        }
    },
    data() {
        return {
            typed: null
        }
    },
    computed: {
        placeholderValue () {
            return this.placeholder
                ? this.placeholder
                : this.$t('component.input.placeholder')
        }
    },
    methods: {
        onInput ($e) {
            $e.preventDefault()
            const { value } = $e.target
            this.typed = value
        }
    },
    components: {
    }
}
