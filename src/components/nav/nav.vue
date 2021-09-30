<template>
    <div :class="[
        'v-nav'
    ]">
        <v-list
            class="v-list--nav"
            :disabled="disabled"
            :items="items"
            :onclick="onClick"
            :translate="translate"
        />
    </div>
</template>

<script
    src="./nav.mjs"
/>

<style
    lang="scss"
    src="./nav.scss"
/>
