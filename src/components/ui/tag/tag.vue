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

<style lang="scss">
@import "@/scss/import.scss";

.vui-tag {
    @include compose-ui('vui-tag');
    position: relative;
    padding: .5rem;

    &.vui-tag--with-icon {
        padding-left: 2.5rem;
    }

    .vui-tag-icon {
        position: absolute;
        top: .5rem;
        left: .75rem;
        font-size: 1.1rem;
        margin-right: .75rem;
        color: $vui-color-grey-dark;

        &:before {
            color: $vui-color-grey-dark;
        }
    }
}
</style>
