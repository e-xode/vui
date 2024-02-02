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
        if (this.hasValue) {
            this.typed = this.value
        }
        if (this.hasModelValue) {
            this.typed = this.modelValue
        }
        this.$watch('typed', (value) => {
            this.$emit('update:modelValue', value)
        })
    },
    watch: {
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
            const { placeholder = null } = this
            return placeholder !== null
                ? placeholder
                : this.$t('component.input.placeholder')
        }
    }
}
