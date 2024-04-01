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
        :class="['vui-input', $props.class]"
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
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";
.vui-input {
    border: 1px solid $vui-color-grey;
    border-radius: .25rem;

    input[type="date-time-local"],
    input[type="date"],
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="password"] {
        width: 100%;
        padding: .5rem .25rem .25rem .5rem;
        color: $vui-color-black;
        outline: none;
        border: none;

        &:disabled {
            color: darken($vui-color-grey, 25%);
            background-color: $vui-color-grey-extra-light;
            cursor: not-allowed;
        }
    }
}
</style>
