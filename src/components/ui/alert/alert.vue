<template>
    <div
        :id="componentId"
        :class="[
            'vui-alert',
            `vui-alert--${layout}`,
            { 'vui-alert--with-icon' : icon },
            $props.class
        ]"
    >
        <i
            v-if="icon"
            :class="['vui-alert-icon', icon]"
        />
        <slot>
            {{ text }}
        </slot>
    </div>
</template>

<script
    src="./alert.mjs"
/>

<style
    lang="scss"
    src="./alert.scss"
/>
