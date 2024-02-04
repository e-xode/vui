<script>
import langs from '@/components/ui/progress/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './progress.constant.mjs'

export default {
    name: 'VuiProgress',
    mixins: [
        composable
    ],
    props,
    computed: {
        width () {
            const value = Math.abs(this.value)
            const min = Math.abs(this.min)
            const max = Math.abs(this.max)
            const percent = Math.round((value / (min + max)) * 100)
            return `${percent}%`
        }
    },
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-progress',$props.class]"
    >
        <slot name="prepend" />
        <div
            :class="[
                'vui-progress-bar',
                `vui-progress-bar--${layout}`
            ]"
        >
            <div
                class="vui-progress-bar-cursor"
                :style="{ width }"
            />
        </div>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./progress.scss"
/>
