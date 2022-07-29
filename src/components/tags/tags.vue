<template>
    <div :class="[
        'v-tags'
    ]">
        <v-tag
            v-for="(item,i) in items"
            :key="`tag-${i}`"
            :item="item.value"
        />
        <slot />
    </div>
</template>

<script
    src="./tags.mjs"
/>

<style
    lang="scss"
    src="./tags.scss"
/>
