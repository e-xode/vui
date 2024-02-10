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
    emits: ['input', 'update:modelValue'],
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
        onChange (value) {
            this.typed = value
            if (this.hasProp('modelValue')) {
                this.$emit('update:modelValue', value)
            }
        },
        onInput (event) {
            this.$emit('input', event)
            this.onChange(event.target.value)
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
            @input="onChange"
        >
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./input.scss"
/>
