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
        if (this.hasModelValue) {
            this.selected = this.modelValue
        } else if (this.hasValue) {
            this.selected = this.value
        }
        this.autoexpand()
    },
    mounted () {
    },
    watch: {
        items () {
            this.autoexpand()
        },
        modelValue (value) {
            this.selected = value
        },
        value (selected) {
            this.selected = selected
        }
    },
    data () {
        return {
            last: null,
            open: {},
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
        autoexpand () {
            this.open = this.items.reduce((open, item, i) => {
                if (this.isGroup(item)) {
                    const items = item[this.itemValue]
                    const index = items.findIndex((v) => this.isSelected(v))
                    if (this.expanded || index > -1) {
                        return { ...open, [i]: true }
                    }
                }
                return open
            }, {})
        },
        isAnimating (index) {
            const { animating, last } = this
            return last === index && animating
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
            const { last, open, toggled } = this
            return last === index && open[index] && toggled
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
                this.$emit('update:modelValue', item)
            }
        },
        onToggle (index) {
            if (!this.disabled) {
                this.last = index
                if (this.autoclose) {
                    this.open = { [index]: !this.open[index] }
                } else {
                    this.open[index] = !this.open[index]
                }
                this.onAnimate(this.open[index])
            }
        }
    }
}
