<script>
import langs from '@/components/ui/alert/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './alert.constant.mjs'

export default {
    name: 'VuiAlert',
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
            'vui-alert',
            `vui-alert--${layout}`,
            { 'vui-alert--with-icon' : icon },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <i
            v-if="icon"
            :class="['vui-alert-icon', icon]"
        />
        <slot>
            {{ text }}
        </slot>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./alert.scss"
/>
