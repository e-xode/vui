<template>
    <header
        :id="componentId"
        :class="['vui-header', $props.class]"
    >
        <slot />
    </header>
</template>

<script
    src="./header.mjs"
/>

<style
    lang="scss"
    src="./header.scss"
/>
