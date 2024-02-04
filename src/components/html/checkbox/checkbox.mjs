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
            this.toggled = this.modelValue
        } else if (this.hasValue) {
            this.toggled = this.value
        }
    },
    watch: {
        modelValue (value) {
            this.toggled = value
        },
        value (value) {
            this.toggled = value
        }
    },
    data () {
        return {
            toggled: false
        }
    },
    computed: {
        isChecked () {
            if (this.hasProp('checked')) {
                return this.checked
            }
            if (this.hasProp('checkedValue')) {
                return this.toggled === this.checkedValue
            }
            return this.toggled
        }
    },
    methods: {
        onToggle () {
            if (this.hasProp('modelValue')) {
                if (this.hasProp('checkedValue')) {
                    this.toggled = this.isChecked
                    ? this.uncheckedValue
                    : this.checkedValue
                } else {
                    this.toggled = !this.isChecked
                }
                this.$emit('update:modelValue', this.toggled)
            }
        }
    }
}
