<template>
    <header
        :id="componentId"
        :class="['vui-header', $attrs.class]"
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
