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
    emits: ['update:modelValue'],
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
            if (!this.disabled && this.hasProp('modelValue')) {
                if (this.hasProp('checkedValue')) {
                    this.toggled = this.isChecked
                    ? this.uncheckedValue
                    : this.checkedValue
                } else {
                    this.toggled = !this.isChecked
                }
                this.$emit('update:modelValue', this.toggled)
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

<style
    lang="scss"
    src="./toggle.scss"
/>
