import * as R from 'ramda'
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
            this.selected = this.mapItem(this.modelValue)
        } else if (this.hasValue) {
            this.selected = this.mapItem(this.value)
        }
        this.autoexpand()
    },
    mounted () {
    },
    watch: {
        items () {
            this.autoexpand()
        },
        modelValue (selected) {
            this.selected = this.mapItem(selected)
        },
        value (selected) {
            this.selected = this.mapItem(selected)
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
        isObject () {
            const item = this.items?.[0]
            return this.isGroup(item)
                ? typeof item[this.itemValue][0] === 'object'
                : typeof item === 'object'
        },
        list () {
            return this.items.reduce((items, item) => {
                if (this.isGroup(item)) {
                    items.push({
                        ...item,
                        $$id: this.newId(),
                        value: item.value.reduce((values, value) =>
                            !this.keyword || this.match(value)
                                ? [...values, this.mapItem(value, this.newId())]
                                : values
                        , [])
                    })
                } else if (!this.keyword || this.match(item)) {
                    items.push(this.mapItem(item, this.newId()))
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
            return typeof item === 'object'
                ? selected && selected[itemValue] === item[itemValue]
                : selected && selected === item
        },
        isToggled (index) {
            const { last, open, toggled } = this
            return last === index && open[index] && toggled
        },
        match (item) {
            return typeof item === 'object'
                ? `${item[this.itemLabel]}`.includes(this.keyword)
                : `${item}`.includes(this.keyword)
        },
        mapItem (value, $$id) {
            const item = typeof value === 'object'
                ? value
                : { [this.itemLabel]: value, [this.itemValue]: value }
            return $$id
                ? { ...item, $$id }
                : item
        },
        onClick (value) {
            if (!this.disabled && this.selectable) {
                const item = R.omit(['$$id'], value)
                this.selected = this.isSelected(item)
                    ? null
                    : item
                const emit = this.isObject
                    ? item
                    : item[this.itemValue]
                this.$emit('input', emit)
                this.$emit('update:modelValue', emit)
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
