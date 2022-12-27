<template>
    <div
        class="vui-grid"
        :style="{
            'justify-content': justifyContent
        }"
    >
        <slot />
    </div>
</template>

<script
    src="./grid.mjs"
/>

<style
    lang="scss"
    src="./grid.scss"
/>
