<script>
import langs from '@/components/ui/toggle/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './toggle.constant.mjs'

export default {
    name: 'VuiToggle',
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
        :name="componentId"
        :class="[
            'vui-toggle',
            { 'vui-toggle--checked': isChecked },
            { 'vui-toggle--disabled' : disabled },
            $props.class
        ]"
        @click.stop="onToggle"
    >
        <slot name="prepend" />
        <div class="vui-toggle-slider">
            <div class="vui-toggle-slider-button" />
        </div>
        <label
            v-if="$slots.default"
            class="vui-toggle-label"
            :for="componentId"
        >
            <slot />
        </label>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-toggle {
    position: relative;
    display: inline-flex;
    height: 1.45rem;

    .vui-toggle-slider {
        position: absolute;
        bottom: 0;
        width: 4.5rem;
        padding: .25rem .5rem;
        background-color: $vui-color-grey;
        border-radius: 2.1rem;
        transition: .4s;
        cursor: pointer;

        .vui-toggle-slider-button {
            width: 1.65rem;
            height: 1.65rem;
            background-color: $vui-color-white;
            border-radius: 50%;
            transition: .4s;
        }
    }

    .vui-toggle-label {
        padding-left: 5rem;
    }

    &.vui-toggle--checked {
        .vui-toggle-slider {
            background-color: $vui-color-green;

            .vui-toggle-slider-button {
                -webkit-transform: translateX(1.65rem);
                -ms-transform: translateX(1.65rem);
                transform: translateX(1.65rem);
            }
        }
    }

    &.vui-toggle--disabled {
        .vui-toggle-slider {
            background-color: $vui-color-grey-light;
            cursor: not-allowed;

            .vui-toggle-slider-button {
                background-color: $vui-color-grey-extra-light;
            }
        }

        &.vui-toggle--checked {
            .vui-toggle-slider {
                background-color: lighten($vui-color-green, 30%);
            }
        }
    }
}
</style>
