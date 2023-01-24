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
    },
    mounted () {
        this.isVisible = this.modelValue
    },
    watch: {
        modelValue(value) {
            this.isVisible = value
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
            this.$emit('update:modelValue', this.isVisible)
        }
    }
}
