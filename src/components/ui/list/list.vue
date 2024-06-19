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
    emits: ['update:model-value'],
    data () {
        return {
            last: null,
            open: {},
            selected: this.multiple
                ? []
                : null
        }
    },
    computed: {
        hasKeyword () {
            return !this.disableFiltering && this.keyword?.length
        },
        list () {
            return this.items.reduce((items, item) => {
                if (this.isGroup(item)) {
                    items.push({
                        ...item,
                        $$id: this.newId(),
                        value: item[this.itemValue].reduce((values, value) => (
                            !this.hasKeyword || this.match(value)
                                ? [...values, this.mapItem(value, this.newId())]
                                : values
                        ), [])
                    })
                } else if (!this.hasKeyword || this.match(item)) {
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
                if (this.multiple) {
                    const match = this.selected.find((selected) => {
                        return typeof item === 'object'
                            ? selected && selected[this.itemValue] === item[this.itemValue]
                            : selected && selected === item
                    })
                    return typeof match !== 'undefined'
                }
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
                if (this.multiple) {
                    const selected = !this.isSelected(item)
                        ? [ ...this.selected, item ]
                        : this.selected.filter((s) => {
                            return typeof item === 'object'
                                ? s && s[this.itemValue] !== item[this.itemValue]
                                : s && s !== item
                        })
                    this.selected = selected
                    this.$emit('update:model-value', this.selected)
                } else {
                    this.selected = this.isSelected(item)
                        ? null
                        : item
                    this.$emit('update:model-value', emit)
                }
                if (item.route) {
                    this.$router.push(item.route)
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
                        @click.stop="() => onClick(item)"
                    >
                        <slot
                            name="item"
                            :index="index"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            <i
                                v-if="item.icon"
                                :class="[
                                    'vui-list-items-item-label-icon',
                                    item.icon
                                ]"
                            />
                            <span>
                                {{ item[itemLabel] }}
                            </span>
                        </slot>
                    </div>
                </template>
                <template v-if="isGroup(item)">
                    <div
                        :class="[
                            'vui-list-items-item-group-label',
                            { 'vui-list-items-item-group-label--toggled': isToggled(index) },
                            { 'vui-list-items-item-group-label--animating': isAnimating(index) },
                            { 'vui-list-items-item-group-label--open': open[index] || hasKeyword }
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
                    <template v-if="open[index] || hasKeyword">
                        <div
                            v-for="(childitem, j) in item[itemValue]"
                            :key="childitem.$$id"
                            :class="[
                                'vui-list-items-item-label',
                                { 'vui-list-items-item-label--selectable': selectable },
                                { 'vui-list-items-item-label--selected': isSelected(childitem) },
                            ]"
                            @click.stop="() => onClick(childitem)"
                        >
                            <slot
                                name="item"
                                :index="j"
                                :item="childitem"
                                :item-label="itemLabel"
                                :item-value="itemValue"
                            >
                                <i
                                    v-if="childitem.icon"
                                    :class="[
                                        'vui-list-items-item-label-icon',
                                        childitem.icon
                                    ]"
                                />
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

<style lang="scss">
@import "@/scss/import.scss";

.vui-list {
    display: flex;
    flex-flow: column;
    padding: 0;
    border-radius: .25rem;

    &:not(.vui-list--flat) {
        @include vui-box-shadow;
    }

    &.vui-list--flat {
        border-top: 1px solid $vui-color-grey-light;
        border-left: 1px solid $vui-color-grey-light;
        border-right: 1px solid $vui-color-grey-light;
    }

    .vui-list-title {
        padding: 1rem;
        font-weight: bold;
    }

    .vui-list-items {

        .vui-list-items-group-item {

            .vui-list-items-item-group-label {
                @include animate('vui-list-items-item-group-label');
                position: relative;
                padding: .75rem;
                background-color: $vui-color-white;
                border-radius: 0;
                border-top: 1px solid $vui-color-grey-light;
                border-bottom: 1px solid $vui-color-grey-light;
                cursor: pointer;

                &:after {
                    @include vui-glyph-solid;
                    content: '\f078';
                    position: absolute;
                    top: .75rem;
                    right: 1rem;
                }

                &:hover {
                    border-top: 1px solid $vui-color-grey;
                    border-bottom: 1px solid $vui-color-grey;
                }

                &.vui-list-items-item-group-label--toggled {
                    border-top: 1px solid $vui-color-grey;
                    border-bottom: 1px solid $vui-color-grey;
                }

                &.vui-list-items-item-group-label--open {
                    &:after {
                        content: '\f077';
                    }
                }
            }

            .vui-list-items-item-label {
                padding-left: 1.5rem;
            }
        }

        .vui-list-items-item-label {
            display: flex;
            padding: .75rem;
            border-bottom: 1px solid $vui-color-grey-light;

            &:hover {
                background-color: $vui-color-grey-light;
                border-bottom: 1px solid $vui-color-grey;
            }

            &.vui-list-items-item-label--selectable {
                cursor: pointer;
            }

            &.vui-list-items-item-label--selected {
                color: $vui-color-green-dark;
                background-color: $vui-color-green-light;
            }

            .vui-list-items-item-label-icon {
                padding-right: .5rem;
            }
        }
    }
}
</style>
œx