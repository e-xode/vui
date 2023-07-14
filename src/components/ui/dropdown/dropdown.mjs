import langs from '@/components/ui/dropdown/translate/index.mjs'
import { props } from '@/components/ui/dropdown/dropdown.constant.mjs'

import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    mixins: [
        animable,
        composable
    ],
    props,
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.selected = this.modelValue
        } else if (this.hasValue) {
            this.selected = this.value
        }
    },
    watch: {
        modelValue (value) {
            this.selected = value
        },
        value (value) {
            this.selected = value
        }
    },
    data () {
        return {
            keyword: null,
            selected: null
        }
    },
    computed: {
        listTitle () {
            return typeof this.selected !== 'undefined'
                ? this.placeholderLabel
                : null
        },
        placeholderValue () {
            const { selected } = this
            const key = this.itemValue || 'value'
            const label = this.itemLabel || 'label'
            const value = typeof selected?.[key] !== 'undefined'
                ? selected[key]
                : selected
            return this.items.reduce((current, item) => {
                if (typeof item[key] === 'object') {
                    return item[key].reduce((subcurrent, subitem) => {
                        return subitem[key] === value
                            ? subitem[label]
                            : subcurrent
                    }, current)
                }
                return item[key] === value
                    ? item[label]
                    : current
            }, value)
        },
        placeholderLabel () {
            return this.placeholder
                ? this.placeholder
                : this.$t('component.dropdown.placeholder')
        }
    },
    methods: {
        onClick () {
            if (!this.disabled) {
                this.onAnimate(true)
            }
        },
        onToggle (selected) {
            this.selected = selected
            this.$emit('update:value', selected)
            this.$emit('update:modelValue', selected)
            this.blur()
        }
    }
}
