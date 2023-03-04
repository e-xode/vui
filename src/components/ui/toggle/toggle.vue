<template>
    <div
        :id="componentId"
        :name="componentId"
        :class="[
            'vui-toggle',
            { 'vui-toggle--checked': isChecked }
        ]"
        @click="onToggle"
    >
        <div class="vui-toggle-slider">
            <div class="vui-toggle-slider-button" />
        </div>
        <label
            v-if="$slots.default"
            class="vui-toggle-label"
            :for="componentId"
        >
            <slot />
        </label>
    </div>
</template>

<script
    src="./toggle.mjs"
/>

<style
    lang="scss"
    src="./toggle.scss"
/>
