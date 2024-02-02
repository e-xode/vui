<template>
    <form
        :id="componentId"
        :class="['vui-form', $attrs.class]"
    >
        <slot />
    </form>
</template>

<script
    src="./form.mjs"
/>

<style
    lang="scss"
    src="./form.scss"
/>
