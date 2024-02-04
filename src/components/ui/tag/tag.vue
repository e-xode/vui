<script>
import langs from '@/components/ui/tag/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tag.constant.mjs'

export default {
    name: 'VuiTag',
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
            'vui-tag',
            `vui-tag--${layout}`,
            { 'vui-tag--with-icon' : icon },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <i
            v-if="icon"
            :class="['vui-tag-icon', icon]"
        />
        <slot>
            {{ text }}
        </slot>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./tag.scss"
/>
