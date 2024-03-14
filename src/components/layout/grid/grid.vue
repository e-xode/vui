<script>
import langs from '@/components/layout/grid/translate/index.mjs'
import { props } from './grid.constant.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGrid',
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
        :id="componentId"
        :class="[
            'vui-grid',
            { [`vui-grid--col-xs--${colXs}`]: colXs },
            { [`vui-grid--col-sm--${colSm}`]: colSm },
            { [`vui-grid--col-md--${colMd}`]: colMd },
            { [`vui-grid--col-xl--${colXl}`]: colXl },
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

@mixin col($classname) {
    @for $i from 1 through 12 {
        &.#{$classname}--#{$i} {
            > .vui-grid-unit:not([class*="vui-grid-unit-col--"]) {
                flex: 1 1 calc(100 / $i) * 1%;
            }
        }
    }
}

.vui-grid {
    display: flex;
    flex-wrap: wrap;
}


@media (min-width: 576px) {
    .vui-grid {
        @include col('vui-grid--col-xs');
    }
}

@media (min-width: 768px) {
    .vui-grid {
        @include col('vui-grid--col-sm');
    }
}

@media (min-width: 992px) {
    .vui-grid {
        @include col('vui-grid--col-md');
    }
}

@media(min-width: 1200px) {
    .vui-grid {
        @include col('vui-grid--col-xl');
    }
}

@media(min-width: 1400px) {
    .vui-grid {
        @include col('vui-grid--col-xxl');
    }
}
</style>
