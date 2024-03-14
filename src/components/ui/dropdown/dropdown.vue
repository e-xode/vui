<script>
import langs from '@/components/ui/dropdown/translate/index.mjs'
import { props } from '@/components/ui/dropdown/dropdown.constant.mjs'
import VuiInput from '@/components/html/input/input.vue'
import VuiList from '@/components/ui/list/list.vue'

import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    components: {
        VuiInput,
        VuiList
    },
    mixins: [
        animable,
        composable
    ],
    props,
    emits: ['input', 'update:model-value'],
    data () {
        return {
            keyword: null,
            selected: null
        }
    },
    computed: {
        listTitle () {
            return this.selected
                ? this.placeholderLabel
                : null
        },
        placeholderValue () {
            const { itemValue, selected } = this
            const value = typeof selected?.[itemValue] !== 'undefined'
                ? selected[itemValue]
                : selected
            return value === null
                ? this.placeholderLabel
                : this.labelFromItem(value)
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
        labelFromChild (child, defvalue, value) {
            const { itemValue, itemLabel } = this
            return child[itemValue].reduce((current, item) => (
                item[itemValue] === value
                    ? item[itemLabel]
                    : current
            ), defvalue)
        },
        labelFromItem (value) {
            const { itemValue, itemLabel } = this
            return this.items.reduce((current, item) => {
                if (typeof item[itemValue] === 'object') {
                    return this.labelFromChild(item, current, value)
                }
                return item[itemValue] === value
                    ? item[itemLabel]
                    : current
            }, value)
        },
        onClick () {
            if (!this.disabled) {
                this.onAnimate()
            }
        },
        onInput (event ) {
            this.$emit('input', event)
            this.onAnimate(true)
            this.keyword = event.target.value
                ? event.target.value
                : null
        },
        onToggle (selected) {
            this.selected = selected
            this.keyword = null
            this.blur()
            this.$emit('update:model-value', selected)
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
                    :value="keyword"
                    type="text"
                    class="vui-dropdown-placeholder-label"
                    :placeholder="placeholderValue"
                    @input="onInput"
                />
            </slot>
        </div>
        <vui-list
            v-if="toggled"
            v-model="selected"
            v-bind="$attrs"
            class="vui-dropdown-list"
            :group-id="componentGroupId"
            :disable-filtering="disableFiltering"
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

<style lang="scss">
@import "@/scss/import.scss";

.vui-dropdown {
    position: relative;
    display: inline-flex;
    min-width: 200px;
    border-radius: .25rem;

    .vui-dropdown-placeholder {
        @include animate('vui-dropdown-placeholder');
        @include vui-box-shadow;
        background-color: $vui-color-white;
        width: 100%;
        cursor: pointer;

        &:before {
            @include vui-glyph-solid;
            position: absolute;
            top: .5rem;
            right: 1rem;
            content: '\f0dd';
            color: $vui-color-grey;
        }

        &:hover:before {
            color: $vui-color-grey-dark;
        }

        &.vui-dropdown-placeholder--toggled:before {
            content: '\f0d8';
            top: .7rem;
            color: $vui-color-grey-dark;
        }

        .vui-input.vui-dropdown-placeholder-label {
            width: 100%;
            padding: .25rem .5rem .25rem 1rem;
            margin: 0;
            background-color: transparent;

            input[type=text] {
                cursor: pointer;
                border: none;
                background-color: transparent;
            }
        }
    }

    .vui-list.vui-dropdown-list {
        position: absolute;
        top: 2.5rem;
        left: 0;
        right: 0;
        background-color: $vui-color-white;
        z-index: 2;

        .vui-list-items {
            .vui-list-items-item {
                cursor: pointer;
            }
        }
    }
}
</style>
