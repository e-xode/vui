import langs from '@/components/ui/modal/translate/index.mjs'
import { props } from '@/components/ui/modal/modal.constant.mjs'

import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiModal',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.isVisible = this.modelValue
        } else if (this.hasValue) {
            this.isVisible = this.value
        }
    },
    watch: {
        modelValue(isVisible) {
            this.isVisible = isVisible
        },
        value (isVisible) {
            this.isVisible = isVisible
        }
    },
    data () {
        return {
            isVisible: false
        }
    },
    computed: {
        isHeaderVisible () {
            return this.$slots.header ||
                this.showHeader ||
                this.showHeaderClose
        },
        isFooterVisible () {
            return this.$slots.footer ||
                this.showFooter ||
                this.showFooterClose
        }
    },
    methods: {
        onToggle () {
            this.isVisible = !this.isVisible
            this.$emit('update:value', this.isVisible)
            this.$emit('update:modelValue', this.isVisible)
        }
    }
}
