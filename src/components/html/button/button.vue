<script>
import langs from '@/components/html/button/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './button.constant.mjs'

export default {
    name: 'VuiButton',
    mixins: [
        animable,
        composable
    ],
    props,
    computed: {
        hasLabel() {
            return this.text?.length > 0 || this.$slots.default
        }
    },
    created () {
        translatable(langs)
    },
    methods: {
        onClick () {
            if (!this.disabled) {
                this.onAnimate()
            }
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-button',
            `vui-button--${layout}`,
            { 'vui-button--flat': hasAttribute('flat') },
            { 'vui-button--with-label' : hasLabel },
            { 'vui-button--with-icon' : icon },
            { 'vui-button--toggled' : toggled },
            { 'vui-button--animating' : !disabled && animating },
            { 'vui-button--loading' : !disabled && loading },
            { 'vui-button--disabled' : disabled },
            $props.class
        ]"
        @click.stop="onClick"
    >
        <slot name="prepend" />
        <button
            class="vui-button-holder"
            :disabled="disabled"
            :type="type"
        >
            <i
                v-if="icon"
                :class="['vui-button-icon', icon]"
            />
            <slot>
                {{ text }}
            </slot>
        </button>
        <div class="vui-button-loader" />
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./button.scss"
/>
