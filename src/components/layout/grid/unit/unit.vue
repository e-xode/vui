<script>
import langs from '@/components/layout/grid/unit/translate/index.mjs'
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

<style
    lang="scss"
    src="./unit.scss"
/>
