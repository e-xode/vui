import langs from '@/components/html/checkbox/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './checkbox.constant.mjs'

export default {
    name: 'VuiCheckbox',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
    },
    mounted () {
    },
    data () {
        return {
            toggled: false
        }
    },
    computed: {
        isChecked () {
            if (typeof this.checked !== 'undefined') {
                return this.checked
            }
            return this.toggled
        }
    },
    methods: {
        onToggle () {
            this.toggled = !this.toggled
            const value = this.isChecked
                ? this.checkedValue
                : this.uncheckedValue
            this.$emit('input', value)
            this.$emit('update:modelValue', value)
        }
    }
}
