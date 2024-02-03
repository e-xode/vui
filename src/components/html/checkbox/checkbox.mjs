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
        if (this.hasModelValue) {
            this.setToggled(this.modelValue)
        } else if (this.hasValue) {
            this.setToggled(this.value)
        }
    },
    watch: {
        modelValue (value) {
            this.setToggled(value)
        },
        value (value) {
            this.setToggled(value)
        }
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
            this.$emit('update:modelValue', value)
        },
        setToggled (value) {
            this.toggled = typeof this.checkedValue !== 'undefined'
                ? value === this.checkedValue
                : value
        }
    }
}
