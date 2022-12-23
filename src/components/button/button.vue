<template>
    <button
        :type="type"
        :class="[
            'vui-button',
            { 'vui-button--active' : animation }
        ]"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
