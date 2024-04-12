<script>
import langs from '@/components/ui/loader/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './loader.constant.mjs'
import VuiAlert from '@/components/ui/alert/alert.vue'

export default {
    name: 'VuiLoader',
    components: {
        VuiAlert
    },
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <vui-alert
        :id="componentId"
        :class="[
            'vui-loader',
            `vui-loader--${layout}`,
            { 'vui-loader--flat': hasAttribute('flat') },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <slot name="icon">
            <i
                :class="['vui-loader-icon', icon]"
            />
        </slot>
        <slot>
            <span class="vui-loader-body">
                {{ text
                    ? text
                    : $t('component.loader.text')
                }}
            </span>
        </slot>
        <slot name="append" />
    </vui-alert>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-loader {
    @include vui-box-shadow;
    @include compose-ui('vui-loader');
    position: relative;
    display: inline-flex;
    padding: .75rem;
    justify-content: start;

    &.vui-loader--flat {
        box-shadow: none;
    }

    .vui-loader-icon {
        @include rotating;
    }

    .vui-loader-body {
        padding-left: 1rem;
    }
}
</style>
