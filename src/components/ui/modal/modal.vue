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
    emits: ['update:model-value'],
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
                this.$emit('update:model-value', this.isVisible)
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

<style lang="scss">
@import "@/scss/import.scss";

.vui-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2rem;
    background-color: $vui-color-grey-light;
    z-index: 3;

    .vui-modal-content {
        display: flex;
        flex-flow: column;
        min-height: calc(100vh - 4rem);
        background-color: $vui-color-white;
        border-radius: .25rem;
        @include vui-box-shadow;

        .vui-modal-content-header {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            font-size: 1.15rem;
            line-height: 1.2rem;
            font-weight: 500;
            text-transform: none;
            background-color: $vui-color-grey-extra-light;
            border-bottom: 1px solid $vui-color-grey-light;

            .fa-regular.fa-circle-xmark {
                font-size: 1.2rem;
                cursor: pointer;
            }
        }

        .vui-modal-content-body {
            flex: 1 1 auto;
            padding: 2rem 1rem;
        }

        .vui-modal-content-footer {
            padding: .5rem 1rem .5rem 1rem;
            text-align: center;
            background-color: $vui-color-grey-extra-light;
            border-top: 1px solid $vui-color-grey-light;
        }
    }
}
</style>
