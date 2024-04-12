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
            $props.class
        ]"
    >
        <slot name="prepend" />
        <slot name="icon">
            <i
                v-if="icon"
                :class="['vui-alert-icon', icon]"
            />
        </slot>
        <slot>
            {{ text }}
        </slot>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-alert {
    @include compose-ui('vui-alert');
    position: relative;
    width: 100%;
    padding: .75rem;

    .vui-alert-icon {
        font-size: 1rem;
        margin-right: .75rem;

        &:before {
            color: $vui-color-grey-dark;
        }
    }
}
</style>
