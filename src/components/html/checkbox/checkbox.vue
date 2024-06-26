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
        hasLabel () {
            return this.$slots.default || this.text
        },
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
            `vui-checkbox--${layout}`,
            { 'vui-checkbox--flat': hasAttribute('flat') },
            { 'vui-checkbox--with-label': hasLabel },
            { 'vui-checkbox--with-icon': icon },
            { 'vui-checkbox--checked': isChecked },
            { 'vui-checkbox--disabled': disabled },
            { 'vui-checkbox--loading': !disabled && loading },
            $props.class
        ]"
        @click="onToggle"
    >
        <slot name="prepend" />
        <i
            v-if="icon && !isChecked"
            :class="['vui-checkbox-icon', icon]"
        />
        <i
            v-if="iconChecked && isChecked"
            :class="['vui-checkbox-icon', iconChecked]"
        />
        <input
            :name="name"
            :disabled="disabled"
            :required="hasAttribute('required')"
            type="checkbox"
        >
        <label
            v-if="hasLabel"
            class="vui-checkbox-label"
            :for="name"
        >
            <slot>
                {{ text }}
            </slot>
        </label>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-checkbox {
    @include compose-input('vui-checkbox');
    position: relative;
    display: inline-flex;
    cursor: pointer;

    input[type="checkbox"] {
        width: 0;
        height: 0;
        opacity: 0;
    }

    .vui-checkbox-icon {
        &:before {
            @include vui-glyph-regular;
            margin-top: -.15rem;
            font-size: 1.25rem;
        }
    }

    label {
        padding-left: .5rem;
    }

    &.vui-checkbox--disabled {
        label {
            color: darken($vui-color-grey-light, 25%);
        }
    }
}
</style>
