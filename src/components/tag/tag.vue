<template>
    <div :class="[
        'v-tag'
    ]">
        {{ item }}
        <slot />
    </div>
</template>

<script
    src="./tag.mjs"
/>

<style
    lang="scss"
    src="./tag.scss"
/>
