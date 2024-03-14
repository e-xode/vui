<script>
import langs from '@/components/layout/unit/translate/index.mjs'
import { props } from './unit.constant.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGridUnit',
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
    <div
        :class="[
            'vui-grid-unit',
            { [`vui-grid-unit-col--${col}`]: col },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <slot />
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

@mixin col() {
    @for $i from 1 through 100 {
        &.vui-grid-unit-col--#{$i} {
            flex: 1 1 calc($i * 1%);
        }
    }
}

.vui-grid-unit {
    padding: 1rem;
    @include col();
}
</style>
