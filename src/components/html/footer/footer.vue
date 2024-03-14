<script>
import langs from '@/components/html/footer/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiFooter',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <footer
        :id="componentId"
        :class="['vui-footer', $props.class]"
    >
        <slot name="prepend" />
        <slot />
        <slot name="append" />
    </footer>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-footer {
    padding: 1rem;
    text-align: right;
    background-color: $vui-color-grey-extra-light;
    border: 1px solid $vui-color-grey;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
}
</style>
