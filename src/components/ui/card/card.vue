<script>
import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiCard',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-card',
            `vui-card--${layout}`,
            { 'vui-card--flat': hasAttribute('flat') },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <div
            v-if="$slots.header"
            class="vui-card-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-card-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-card-footer"
        >
            <slot name="footer" />
        </div>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-card {
    @include compose-ui('vui-card');
    display: flex;
    flex-flow: column;
    background-color: $vui-color-white;
    border-radius: .25rem;

    &:not(.vui-card--flat) {
        @include vui-box-shadow;
    }

    .vui-card-header {
        padding: .75rem 1rem .75rem 1rem;
        font-size: 1.15rem;
        line-height: 1.2rem;
        font-weight: 500;
        text-transform: none;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: inherit;
    }

    .vui-card-body {
        flex: 1 1 auto;
        padding: 2rem 1rem;
    }

    .vui-card-footer {
        padding: .5rem 1rem .5rem 1rem;
        text-align: right;
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: inherit;
    }
}
</style>
