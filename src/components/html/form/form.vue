<script>
import langs from '@/components/html/form/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiForm',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <form
        :id="componentId"
        :class="['vui-form', $props.class]"
    >
        <slot name="prepend" />
        <slot />
        <slot name="append" />
    </form>
</template>

<style
    lang="scss"
    src="./form.scss"
/>
