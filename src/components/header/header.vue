<template>
    <header :class="[
        'v-header'
    ]">
        <v-nav
            :onclick="onClick"
            :items="items"
        />
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
