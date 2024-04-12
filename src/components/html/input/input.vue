<script>
import langs from '@/components/html/input/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './input.constant.mjs'

export default {
    name: 'VuiInput',
    mixins: [
        composable
    ],
    props,
    emits: ['input', 'update:model-value'],
    data () {
        return {
            typed: null
        }
    },
    computed: {
        placeholderValue () {
            return this.placeholder
                ? this.placeholder
                : this.$t('component.input.placeholder')
        }
    },
    watch: {
        value (value) {
            this.typed = value
        },
        modelValue (value) {
            this.typed = value
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.typed = this.modelValue
        } else if (this.hasValue) {
            this.typed = this.value
        }
    },
    methods: {
        onInput (event) {
            this.typed = this.type === 'number'
                ? event.target.valueAsNumber
                : event.target.value
            this.$emit('input', event)
            this.$emit('update:model-value', this.typed)
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-input',
            `vui-input--${layout}`,
            { 'vui-input--flat': hasAttribute('flat') },
            { 'vui-input--with-icon': withIcon },
            { 'vui-input--disabled': disabled },
            { 'vui-input--loading': !disabled && loading },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <input
            :value="typed"
            :disabled="disabled"
            :maxlength="maxlength"
            :name="name"
            :placeholder="placeholderValue"
            :required="hasAttribute('required')"
            :type="type"
            @input="onInput"
        >
        <i
            v-if="withIcon && icon"
            :class="['vui-input-icon', icon]"
        />
        <i
            v-if="withIcon && !icon && type === 'text'"
            :class="['vui-input-icon', 'fa-font']"
        />
        <i
            v-if="withIcon && !icon && type === 'email'"
            :class="['vui-input-icon', 'fa-at']"
        />
        <i
            v-if="withIcon && !icon && type === 'password'"
            :class="['vui-input-icon', 'fa-key']"
        />
        <i
            v-if="withIcon && !icon && type === 'number'"
            :class="['vui-input-icon', 'fa-arrow-down-1-9']"
        />
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-input {
    @include compose-input('vui-input');
    display: inline-flex;
    border: 1px solid $vui-color-grey;
    border-radius: .15rem;

    input {
        width: 100%;
        padding: .5rem .25rem .25rem .5rem;
        outline: none;
        border: none;

        &:disabled {
            color: darken($vui-color-grey, 25%);
            background-color: $vui-color-grey-extra-light;
            border-color: $vui-color-grey-extra-light;
            cursor: not-allowed;

            &::placeholder {
                color: $vui-color-grey;
            }
        }
    }

    .vui-input-icon {
        padding: 0 .5rem;
        background-color: $vui-color-grey-extra-light;
        border-left: 1px solid $vui-color-grey;

        &:before {
            @include vui-glyph-solid;
            line-height: 1.75rem;
        }
    }
}
</style>
