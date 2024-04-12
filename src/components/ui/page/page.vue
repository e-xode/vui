<script>
import langs from '@/components/ui/page/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiPage',
    mixins: [
        animable,
        composable
    ],
    created () {
        translatable(langs)
    },
    methods: {
        outclick ()  {
            this.$bus.emit('outclick', this.componentGroupId)
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-page',
            `vui-page--${layout}`,
            { 'vui-page--flat': hasAttribute('flat') },
            $props.class
        ]"
        @click="outclick"
    >
        <slot name="prepend" />
        <div
            v-if="$slots.header"
            class="vui-page-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-page-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-page-footer"
        >
            <slot name="footer" />
        </div>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-page {
    @include compose-ui('vui-page');
    display: flex;
    flex-flow: column;
    border-radius: .25rem;

    &:not(.vui-page--flat) {
        @include vui-box-shadow;
    }

    .vui-page-header {
        padding: 1rem;
        font-size: 1.15rem;
        line-height: 1.2rem;
        font-weight: 500;
        text-transform: none;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: inherit;
    }

    .vui-page-body {
        flex: 1 1 auto;
        padding: 2rem 1rem;;
    }

    .vui-page-footer {
        padding: .5rem;
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: inherit;
    }
}
</style>
