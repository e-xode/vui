<script>
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
    emits: ['update:modelValue'],
    data () {
        return {
            last: null,
            open: {},
            selected: null
        }
    },
    computed: {
        list () {
            return this.items.reduce((items, item) => {
                if (this.isGroup(item)) {
                    items.push({
                        ...item,
                        $$id: this.newId(),
                        value: item[this.itemValue].reduce((values, value) =>
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
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.selected = this.mapItem(this.modelValue)
        } else if (this.hasValue) {
            this.selected = this.mapItem(this.value)
        }
        this.autoexpand()
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
        isObject (item) {
            const key = this.itemValue
            return this.isGroup(item)
                ? typeof item[key][0] === 'object'
                : typeof item === 'object'
        },
        isSelected (item) {
            if (!item.disabled && typeof this.selected !== 'undefined') {
                return typeof item === 'object'
                    ? this.selected && this.selected[this.itemValue] === item[this.itemValue]
                    : this.selected && this.selected === item
            }
            return false
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
                const emit = this.isObject(item) && this.hasAttribute('return-object')
                    ? item
                    : item[this.itemValue]
                this.selected = this.isSelected(item)
                    ? null
                    : item
                if (this.hasProp('modelValue')) {
                    this.$emit('update:modelValue', emit)
                }
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
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-list',
            { 'vui-list--flat': hasAttribute('flat') },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <div
            v-if="title"
            class="vui-list-title"
        >
            <slot
                name="placeholder"
                :item="title"
            >
                {{ title }}
            </slot>
        </div>
        <div class="vui-list-items">
            <div
                v-for="(item, index) in list"
                :key="item.$$id"
                :class="[
                    { 'vui-list-items-item': !isGroup(item) },
                    { 'vui-list-items-group-item': isGroup(item) }
                ]"
            >
                <template v-if="!isGroup(item)">
                    <div
                        :class="[
                            { 'vui-list-items-item-label': !isGroup(item) },
                            { 'vui-list-items-item-label--selectable': selectable },
                            { 'vui-list-items-item-label--selected': isSelected(item) }
                        ]"
                        @click="() => onClick(item)"
                    >
                        <i
                            v-if="item.icon"
                            :class="[
                                'vui-list-items-item-label-icon',
                                item.icon
                            ]"
                        />
                        <slot
                            name="item"
                            :index="index"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            {{ item[itemLabel] }}
                        </slot>
                    </div>
                </template>
                <template v-if="isGroup(item)">
                    <div
                        :class="[
                            'vui-list-items-item-group-label',
                            { 'vui-list-items-item-group-label--toggled': isToggled(index) },
                            { 'vui-list-items-item-group-label--animating': isAnimating(index) },
                            { 'vui-list-items-item-group-label--open': open[index] || keyword?.length }
                        ]"
                        @click.stop="() => onToggle(index)"
                    >
                        <slot
                            name="group-item"
                            :index="index"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            {{ item[itemLabel] }}
                        </slot>
                    </div>
                    <template v-if="open[index] || keyword?.length">
                        <div
                            v-for="(childitem, j) in item[itemValue]"
                            :key="childitem.$$id"
                            :class="[
                                'vui-list-items-item-label',
                                { 'vui-list-items-item-label--selectable': selectable },
                                { 'vui-list-items-item-label--selected': isSelected(childitem) },
                            ]"
                            @click="() => onClick(childitem)"
                        >
                            <i
                                v-if="childitem.icon"
                                :class="[
                                    'vui-list-items-item-label-icon',
                                    childitem.icon
                                ]"
                            />
                            <slot
                                name="item"
                                :index="j"
                                :item="childitem"
                                :item-label="itemLabel"
                                :item-value="itemValue"
                            >
                                {{ childitem[itemLabel] }}
                            </slot>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./list.scss"
/>
