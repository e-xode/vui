import langs from '@/components/ui/nav/translate/index.mjs'
import { props } from '@/components/ui/nav/nav.constant.mjs'

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
    mounted () {
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
    computed: {
    },
    methods: {
        onClick (item) {
            if (!this.disabled) {
                this.$emit('input', item)
                this.$emit('update:modelValue', item)
            }
        }
    }
}
