<script>
import langs from '@/components/html/header/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiHeader',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <header
        :id="componentId"
        :class="['vui-header', $props.class]"
    >
        <slot name="prepend" />
        <slot />
        <slot name="append" />
    </header>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-header {
    padding: 1rem;
    background-color: $vui-color-grey-extra-light;
    border: 1px solid $vui-color-grey;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

</style>
