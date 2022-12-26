<template>
    <div
        class="vui-page"
        @click="outclick"
    >
        <div class="vui-page-header">
            <slot name="header" />
        </div>
        <div class="vui-page-body">
            <slot name="body" />
        </div>
        <div class="vui-page-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script
    src="./page.mjs"
/>

<style
    lang="scss"
    src="./page.scss"
/>
