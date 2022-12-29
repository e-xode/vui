import langs from '@/components/ui/dropdown/translate/index.mjs'
import { props } from '@/components/ui/dropdown/dropdown.constant.mjs'

import {
    composable,
    animable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    mixins: [
        animable,
        composable
    ],
    setup() {
        translatable(langs)
        return {}
    },
    props,
    mounted () {
    },
    watch: {
        modelValue(value) {
            this.selected = value
        }
    },
    data () {
        return {
            selected: null
        }
    },
    computed: {
        listTitle () {
            return this.selected
                ? this.placeholderLabel
                : null
        },
        placeholderValue () {
            const { itemLabel, selected } = this
            if (selected) {
                return itemLabel
                    ? selected[itemLabel]
                    : selected
            }
            return this.placeholderLabel
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
                this.onAnimate()
                this.$emit('click')
            }
        },
        toggleItem (selected) {
            this.selected = selected
            this.$emit('update:modelValue', selected)
            this.$emit('input', selected)
            this.blur()
        }
    },
    components: {
    }
}
