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
            this.typed = event.target.value
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

<style
    lang="scss"
    src="./input.scss"
/>
