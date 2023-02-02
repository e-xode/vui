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
    props,
    created () {
        translatable(langs)
        this.selected = this.value
    },
    mounted () {
    },
    watch: {
        value (selected) {
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
        filteredItems () {
            if (!this.keyword) {
                return this.items
            }
            return this.items.reduce((items, item) => {
                if (this.isGroup(item)) {
                    items.push({
                        ...item,
                        value: item.value.reduce((values, value) =>
                            this.match(value)
                                ? [...values, value]
                                : values
                        , [])
                    })
                } else if (this.match(item)) {
                    items.push(item)
                }
                return items
            }, [])
        }
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
        match (item) {
            return this.itemValue
                ? `${item[this.itemValue]}`.includes(this.keyword)
                : `${item}`.includes(this.keyword)
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
