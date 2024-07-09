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
            selected: this.multiple
                ? []
                : null
        }
    },
    computed: {
        listTitle () {
            return this.selected
                ? this.placeholderLabel
                : null
        },
        placeholderValue () {
            const { itemValue, multiple, selected } = this
            const first = multiple
                ? selected[0]
                : selected
            const value = typeof first?.[itemValue] !== 'undefined'
                ? first[itemValue]
                : first
            const placeholder = [null, undefined].includes(value)
                ? this.placeholderLabel
                : this.labelFromItem(value)
            return multiple && selected.length > 1
                ? `${placeholder} (+${selected.length - 1})`
                : placeholder
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
                if (Array.isArray(item[itemValue])) {
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
            this.keyword = null
            if (!this.multiple) {
                this.blur()
            }
            if (!this.hasProp('value')) {
                this.selected = selected
            }
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
                    :with-icon="false"
                    :value="keyword"
                    type="text"
                    class="vui-dropdown-placeholder-label"
                    :placeholder="`${placeholderValue}`"
                    @input="onInput"
                />
            </slot>
        </div>
        <vui-list
            v-if="toggled"
            :value="selected"
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
            :multiple="multiple"
            @update:model-value="onToggle"
        >
            <template
                v-if="$slots.placeholder"
                #placeholder="slotProps"
            >
                <slot
                    name="placeholder"
                    :index="slotProps.index"
                    :item="slotProps.item"
                    :item-label="slotProps.itemLabel"
                    :item-value="slotProps.itemValue"
                />
            </template>
            <template
                v-if="$slots['group-item']"
                #group-item="slotProps"
            >
                <slot
                    name="group-item"
                    :index="slotProps.index"
                    :item="slotProps.item"
                    :item-label="slotProps.itemLabel"
                    :item-value="slotProps.itemValue"
                />
            </template>
            <template
                v-if="$slots.item"
                #item="slotProps"
            >
                <slot
                    name="item"
                    :index="slotProps.index"
                    :item="slotProps.item"
                    :item-label="slotProps.itemLabel"
                    :item-value="slotProps.itemValue"
                />
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

                &::placeholder {
                    color: $vui-color-black;
                }
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
