<template>
    <div
        :id="componentId"
        :class="['vui-page', $attrs.class]"
        @click="outclick"
    >
        <div
            v-if="$slots.header"
            class="vui-page-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-page-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-page-footer"
        >
            <slot name="footer" />
        </div>
    </div>
</template>

<script
    src="./page.mjs"
/>

<style
    lang="scss"
    src="./page.scss"
/>
