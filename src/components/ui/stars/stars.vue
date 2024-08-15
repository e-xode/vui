<script>
import langs from '@/components/ui/stars/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './stars.constant.mjs'

export default {
    name: 'VuiStars',
    mixins: [
        composable
    ],
    props,
    emits:['click'],
    created () {
        translatable(langs)
    }
}
</script>
<template>
    <div
        :id="componentId"
        :class="['vui-stars', $props.class]"
    >
        <slot name="prepend" />
        <div
            :class="[
                'stars',
                { 'stars--25': value >=0 && value <= 25 },
                { 'stars--50': value >=26 && value <= 50 },
                { 'stars--75': value >=51 && value <= 75 },
                { 'stars--100': value >=76 && value <= 100 }
            ]"
        >
            <div
                class="star star--1"
                @click="$emit('click', 25)"
            />
            <div
                class="star star--2"
                @click="$emit('click', 50)"
            />
            <div
                class="star star--3"
                @click="$emit('click', 75)"
            />
            <div
                class="star star--4"
                @click="$emit('click', 100)"
            />
        </div>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-stars {
    .stars {
        display: flex;
        height: 1rem;

        .star {
            margin: 0 .25rem;
            padding: .025rem 0;
            font-size: 1.5rem;

            &:before {
                @include vui-glyph-regular;
                content: '\f005';
            }
        }

        &.stars--25 {
            .star.star--1 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
        }
        &.stars--50 {
            .star.star--1 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--2 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
        }
        &.stars--75 {
            .star.star--1 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--2 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--3 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
        }
        &.stars--100 {
            .star.star--1 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--2 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--3 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
            .star.star--4 {
                color: $vui-color-green;
                &:before {
                   @include vui-glyph-solid;
                }
            }
        }
    }
}
</style>
