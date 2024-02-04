<script>
import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiCard',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="[
            'vui-card',
            { 'vui-card--flat': hasAttribute('flat') },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <div
            v-if="$slots.header"
            class="vui-card-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-card-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-card-footer"
        >
            <slot name="footer" />
        </div>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./card.scss"
/>
