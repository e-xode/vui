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

<style
    lang="scss"
    src="./grid.scss"
/>
