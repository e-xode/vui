<template>
    <footer
        :id="componentId"
        :class="['vui-footer', $props.class]"
    >
        <slot />
    </footer>
</template>

<script
    src="./footer.mjs"
/>

<style
    lang="scss"
    src="./footer.scss"
/>
