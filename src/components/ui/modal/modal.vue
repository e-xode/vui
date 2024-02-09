<script>
import langs from '@/components/ui/modal/translate/index.mjs'
import { props } from '@/components/ui/modal/modal.constant.mjs'
import VuiButton from '@/components/html/button/button.vue'

import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiModal',
    components: {
        VuiButton
    },
    mixins: [
        composable
    ],
    props,
    emits: ['update:modelValue'],
    data () {
        return {
            isVisible: false
        }
    },
    computed: {
        isHeaderVisible () {
            return this.$slots.header ||
                this.showHeader ||
                this.showHeaderClose
        },
        isFooterVisible () {
            return this.$slots.footer ||
                this.showFooter ||
                this.showFooterClose
        }
    },
    watch: {
        modelValue(isVisible) {
            this.isVisible = isVisible
        },
        value (isVisible) {
            this.isVisible = isVisible
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.isVisible = this.modelValue
        } else if (this.hasValue) {
            this.isVisible = this.value
        }
    },
    methods: {
        onToggle () {
            if (!this.disabled) {
                this.isVisible = !this.isVisible
                if (this.hasProp('modelValue')) {
                    this.$emit('update:modelValue', this.isVisible)
                }
            }
        }
    }
}
</script>
<template>
    <div
        v-if="isVisible"
        :id="componentId"
        :class="['vui-modal', $props.class]"
    >
        <slot name="prepend" />
        <div class="vui-modal-content">
            <div
                v-if="isHeaderVisible"
                class="vui-modal-content-header"
            >
                <template v-if="title">
                    <span class="vui-modal-content-header-title">
                        {{ title }}
                    </span>
                </template>
                <template v-if="showHeaderClose">
                    <i
                        class="fa-regular fa-circle-xmark"
                        @click="onToggle"
                    />
                </template>
                <slot name="header" />
            </div>
            <div
                v-if="$slots.body || $slots.default"
                class="vui-modal-content-body"
            >
                <slot name="body" />
                <slot />
            </div>
            <div
                v-if="isFooterVisible"
                class="vui-modal-content-footer"
            >
                <template v-if="showHeaderClose">
                    <vui-button
                        :text="$t('component.button.close')"
                        @click="onToggle"
                    />
                </template>
                <slot name="footer" />
            </div>
        </div>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./modal.scss"
/>
