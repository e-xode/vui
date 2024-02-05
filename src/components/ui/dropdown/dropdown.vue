<script>
import langs from '@/components/ui/dropdown/translate/index.mjs'
import { props } from '@/components/ui/dropdown/dropdown.constant.mjs'

import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    mixins: [
        animable,
        composable
    ],
    props,
    emits: ['update:modelValue'],
    data () {
        return {
            keyword: null,
            selected: null
        }
    },
    computed: {
        listTitle () {
            return typeof this.selected !== 'undefined'
                ? this.placeholderLabel
                : null
        },
        placeholderValue () {
            const { itemValue = 'value', itemLabel = 'label', selected } = this
            const value = typeof selected?.[itemValue] !== 'undefined'
                ? selected[itemValue]
                : selected
            return value === null
                ? this.placeholderLabel
                : this.items.reduce((current, item) => {
                    if (typeof item[itemValue] === 'object') {
                        return item[itemValue].reduce((subcurrent, subitem) => {
                            return subitem[itemValue] === value
                                ? subitem[itemLabel]
                                : subcurrent
                        }, current)
                    }
                    return item[itemValue] === value
                        ? item[itemLabel]
                        : current
                }, value)
        },
        placeholderLabel () {
            return this.placeholder
                ? this.placeholder
                : this.$t('component.dropdown.placeholder')
        }
    },
    watch: {
        modelValue (value) {
            this.selected = value
        },
        value (value) {
            this.selected = value
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.selected = this.modelValue
        } else if (this.hasValue) {
            this.selected = this.value
        }
    },
    methods: {
        onClick () {
            if (!this.disabled) {
                this.onAnimate()
            }
        },
        onToggle (selected) {
            this.selected = selected
            this.$emit('update:modelValue', selected)
            this.blur()
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-dropdown', $props.class]"
    >
        <slot name="prepend" />
        <div
            :class="[
                'vui-dropdown-placeholder',
                { 'vui-dropdown-placeholder--toggled': toggled },
                { 'vui-dropdown-placeholder--animating': animating },
                { 'vui-dropdown-placeholder--disabled': disabled }
            ]"
            @click.stop="onClick"
        >
            <slot
                name="keyword"
                :keyword="keyword"
            >
                <vui-input
                    v-model="keyword"
                    type="text"
                    class="vui-dropdown-placeholder-label"
                    :placeholder="placeholderValue"
                />
            </slot>
        </div>
        <vui-list
            v-if="toggled"
            v-model="selected"
            v-bind="$attrs"
            class="vui-dropdown-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
            :keyword="keyword"
            :selectable="true"
            :title="listTitle"
            @update:model-value="onToggle"
        >
            <template
                v-if="$slots.placeholder"
                #placeholder
            >
                <slot name="placeholder" />
            </template>
            <template
                v-if="$slots['group-item']"
                #group-item
            >
                <slot name="group-item" />
            </template>
            <template
                v-if="$slots.item"
                #item
            >
                <slot name="item" />
            </template>
        </vui-list>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./dropdown.scss"
/>
