import langs from '@/components/ui/list/translate/index.mjs'
import { props } from '@/components/ui/list/list.constant.mjs'

import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiList',
    mixins: [
        animable,
        composable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    props,
    mounted () {
        if (this.value) {
            this.selected = this.value
        }
    },
    watch: {
        value(selected) {
            this.selected = selected
        }
    },
    data () {
        return {
            open: null,
            selected: null
        }
    },
    computed: {
    },
    methods: {
        isAnimating (index) {
            return this.open === index && this.animating
        },
        isGroup (item) {
            return Array.isArray(item?.[this.itemValue])
        },
        isSelected (item) {
            const { itemValue, selected } = this
            return itemValue && selected
                ? selected[itemValue] === item[itemValue]
                : selected === item
        },
        isToggled (index) {
            return this.open === index && this.toggled
        },
        onClick (item) {
            if (!this.disabled && this.selectable) {
                this.selected = this.isSelected(item)
                    ? null
                    : item
                this.$emit('input', item)
            }
        },
        onToggle (index) {
            if (!this.disabled) {
                this.open = this.open === index
                    ? null
                    : index
                this.onAnimate(this.open !== null)
            }
        }
    }
}
