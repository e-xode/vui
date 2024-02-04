<script>
import langs from '@/components/ui/page/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiPage',
    mixins: [
        animable,
        composable
    ],
    created () {
        translatable(langs)
    },
    methods: {
        outclick ()  {
            this.$bus.emit('outclick', this.componentGroupId)
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-page', $props.class]"
        @click="outclick"
    >
        <slot name="prepend" />
        <div
            v-if="$slots.header"
            class="vui-page-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-page-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-page-footer"
        >
            <slot name="footer" />
        </div>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./page.scss"
/>
