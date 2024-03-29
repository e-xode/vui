<script>
import langs from '@/components/html/checkbox/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './checkbox.constant.mjs'

export default {
    name: 'VuiCheckbox',
    mixins: [
        composable
    ],
    props,
    emits: ['update:model-value'],
    data () {
        return {
            toggled: false
        }
    },
    computed: {
        isChecked () {
            if (this.hasProp('checked')) {
                return this.checked
            }
            if (this.hasProp('checkedValue')) {
                return this.toggled === this.checkedValue
            }
            return this.toggled
        }
    },
    watch: {
        modelValue (value) {
            this.toggled = value
        },
        value (value) {
            this.toggled = value
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.toggled = this.modelValue
        } else if (this.hasValue) {
            this.toggled = this.value
        }
    },
    methods: {
        onToggle () {
            if (!this.disabled) {
                if (this.hasProp('checkedValue')) {
                    this.toggled = this.isChecked
                        ? this.uncheckedValue
                        : this.checkedValue
                } else {
                    this.toggled = !this.isChecked
                }
                this.$emit('update:model-value', this.toggled)
            }
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-checkbox',
            { 'vui-checkbox--checked': isChecked },
            { 'vui-checkbox--disabled' : disabled },
            $props.class
        ]"
        @click="onToggle"
    >
        <slot name="prepend" />
        <input
            :name="name"
            :disabled="disabled"
            :required="hasAttribute('required')"
            type="checkbox"
        >
        <label
            v-if="$slots.default"
            :for="componentId"
        >
            <slot />
        </label>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-checkbox {
    position: relative;
    display: inline-flex;
    padding-left: 1rem;
    cursor: pointer;

    input[type="checkbox"] {
        display: none;
    }

    label {
        padding-left: 1rem;
    }

    &:before {
        @include vui-glyph-regular;
        content: '\f0c8';
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.5rem;
    }

    &.vui-checkbox--checked {
        &:before {
            content: '\f14a';
        }
    }

    &.vui-checkbox--disabled {
        cursor: not-allowed;

        &:before {
            color: darken($vui-color-grey-light, 25%);
            background-color: $vui-color-grey-extra-light;
        }
    }
}
</style>
