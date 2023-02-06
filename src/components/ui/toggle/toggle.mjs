import langs from '@/components/ui/toggle/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './toggle.constant.mjs'

export default {
    name: 'VuiToggle',
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
    },
    methods: {
        onToggle () {
            this.toggled = !this.toggled
            const value = this.toggled
                ? this.checkedValue
                : this.uncheckedValue
            this.$emit('input', value)
            this.$emit('update:modelValue', value)
        }
    }
}
