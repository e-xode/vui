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

<style
    lang="scss"
    src="./footer.scss"
/>
