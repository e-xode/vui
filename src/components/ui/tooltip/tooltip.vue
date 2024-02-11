<script>
import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tooltip.constant.mjs'

export default {
    name: 'VuiTooltip',
    mixins: [
        composable
    ],
    props,
    emits: ['update:model-value'],
    data () {
        return {
            dimension: {
                content: {},
                holder: {}
            },
            show: false
        }
    },
    computed: {
        display () {
            return this.show
                ? 'block'
                : 'none'
        },
        left () {
            const { content, holder } = this.dimension
            switch (this.position) {
                case 'left':
                    return holder.left - (content.width + 15)
                case 'bottom':
                case 'top': {
                    const diff = content.width - holder.width
                    return holder.left - (diff / 2)
                }
                case 'right':
                default:
                    return holder.right + 15
            }

        },
        top () {
            const { content, holder } = this.dimension
            switch (this.position) {
                case 'bottom':
                    return holder.top + holder.height + 15
                case 'top':
                    return holder.top - content.height - 15
                case 'left':
                case 'right':
                default:
                    return holder.top - (holder.height / 2)
            }
        }
    },
    watch: {
        async modelValue (show) {
            this.show = show
            if (show) {
                await this.$nextTick()
                this.setPosition()
            }
        },
        async value (show) {
            this.show = show
            if (show) {
                await this.$nextTick()
                this.setPosition()
            }
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.show = this.modelValue
        }
        if (this.hasValue) {
            this.show = this.value
        }
        this.$bus.on('outclick', () => {
            if (!this.disabled) {
                this.show = false
                this.$emit('update:model-value', this.show)
            }
        })
    },
    methods: {
        setPosition () {
            this.dimension.content = this.$refs.tooltip.getBoundingClientRect()
            this.dimension.holder = this.$parent.$el.getBoundingClientRect()
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        ref="tooltip"
        :class="[
            'vui-tooltip',
            { 'vui-tooltip--with-icon': icon },
            $props.class
        ]"
        :style="{
            position: 'fixed',
            display,
            top: `${top}px`,
            left: `${left}px`
        }"
    >
        <i
            :class="[
                'vui-tooltip-pointer',
                `vui-tooltip-pointer--${position}`
            ]"
        />
        <i
            v-if="icon"
            :class="['vui-tooltip-icon', icon]"
        />
        <slot v-if="!!$slots.default" />
        <template v-if="text">
            {{ text }}
        </template>
    </div>
</template>

<style
    lang="scss"
    src="./tooltip.scss"
/>
