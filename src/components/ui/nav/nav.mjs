import langs from '@/components/ui/nav/translate/index.mjs'
import {
    props
} from '@/components/ui/nav/nav.constant.mjs'

import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiNav',
    mixins: [
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
        value (selected) {
            this.selected = selected
        }
    },
    data () {
        return {
            selected: null
        }
    },
    methods: {
        onClick (value) {
            if (!this.disabled) {
                this.$emit('update:modelValue', value)
                const item = this.items.find((item) => item.value === value)
                if (item?.route) {
                    this.$router.push(item.route)
                }
            }
        }
    }
}
