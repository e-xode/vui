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
    emits: ['update:modelValue'],
    data() {
        return {
            typed: null
        }
    },
    computed: {
        placeholderValue () {
            const { placeholder = null } = this
            return placeholder !== null
                ? placeholder
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
        if (this.hasValue) {
            this.typed = this.value
        }
        if (this.hasModelValue) {
            this.typed = this.modelValue
        }
        this.$watch('typed', (value) => {
            this.$emit('update:modelValue', value)
        })
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
            v-model="typed"
            :disabled="disabled"
            :maxlength="maxlength"
            :name="name"
            :placeholder="placeholderValue"
            :required="hasAttribute('required')"
            :type="type"
        >
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./input.scss"
/>
