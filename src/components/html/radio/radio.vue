<script>
import langs from '@/components/html/radio/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './radio.constant.mjs'

export default {
    name: 'VuiRadio',
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
            'vui-radio',
            `vui-radio--${layout}`,
            { 'vui-radio--flat': hasAttribute('flat') },
            { 'vui-radio--with-label': hasLabel },
            { 'vui-radio--with-icon': icon },
            { 'vui-radio--checked': isChecked },
            { 'vui-radio--disabled': disabled },
            { 'vui-radio--loading': !disabled && loading },
            $props.class
        ]"
        @click="onToggle"
    >
        <slot name="prepend" />
        <i
            v-if="icon && !isChecked"
            :class="['vui-radio-icon', icon]"
        />
        <i
            v-if="iconChecked && isChecked"
            :class="['vui-radio-icon', iconChecked]"
        />
        <input
            :name="name"
            :disabled="disabled"
            :required="hasAttribute('required')"
            type="checkbox"
        >
        <label
            v-if="hasLabel"
            class="vui-radio-label"
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

.vui-radio {
    @include compose-input('vui-radio');
    position: relative;
    display: inline-flex;
    cursor: pointer;

    input[type="checkbox"] {
        width: 0;
        height: 0;
        opacity: 0;
    }

    .vui-radio-icon {
        &:before {
            @include vui-glyph-regular;
            margin-top: -.15rem;
            font-size: 1.25rem;
        }
    }

    label {
        padding-left: .5rem;
    }

    &.vui-radio--disabled {
        label {
            color: darken($vui-color-grey-light, 25%);
        }
    }
}
</style>
