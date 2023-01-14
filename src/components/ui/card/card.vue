<template>
    <div
        :id="componentId"
        class="vui-card"
    >
        <div
            v-if="$slots.header"
            class="vui-card-header"
        >
            <slot name="header" />
        </div>
        <div
            v-if="$slots.body || $slots.default"
            class="vui-card-body"
        >
            <slot name="body" />
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="vui-card-footer"
        >
            <slot name="footer" />
        </div>
    </div>
</template>

<script
    src="./card.mjs"
/>

<style
    lang="scss"
    src="./card.scss"
/>
