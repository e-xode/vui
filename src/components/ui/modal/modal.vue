<template>
    <div
        v-if="isVisible"
        :id="componentId"
        :class="['vui-modal', $attrs.class]"
    >
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
    </div>
</template>

<script
    src="./modal.mjs"
/>

<style
    lang="scss"
    src="./modal.scss"
/>
