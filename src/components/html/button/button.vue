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
                if (this.route) {
                    this.$router.push(this.route)
                }
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

<style lang="scss">
@import "@/scss/import.scss";

.vui-button {
    @include vui-box-shadow;
    @include compose-ui('vui-button');
    @include animate('vui-button');
    position: relative;
    display: inline-flex;
    padding: 0 1rem;
    justify-content: center;
    cursor: pointer;

    .vui-button-holder {
        position: relative;
        margin-top: .15rem;
        font-size: .85rem;
        font-weight: 600;
        line-height: 2rem;
        color: inherit;
        background-color: transparent;
        text-transform: uppercase;
        border: none;
        cursor: pointer;

        .vui-button-icon {
            color: $vui-color-grey-dark;
        }
    }

    &.vui-button--flat {
        box-shadow: none;
    }

    &.vui-button--with-label {
        .vui-button-holder {
            .vui-button-icon {
                margin-right: .75rem;
            }
        }
    }

    &.vui-button--with-icon {
    }

    &.vui-button--disabled {
        color: $vui-color-grey-dark;
        background-color: $vui-color-grey;
        border: 1px solid $vui-color-grey-dark;
        opacity: .4;
        cursor: default;

        button {
            color: inherit;
            cursor: default;

            .vui-button-icon {
                color: inherit;
            }
        }
    }
}
</style>
