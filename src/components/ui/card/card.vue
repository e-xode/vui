<template>
    <div class="vui-card">
        <div class="vui-card-header">
            <slot name="header" />
        </div>
        <div class="vui-card-body">
            <slot name="body" />
        </div>
        <div class="vui-card-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script
    src="./card.mjs"
/>

<style
    lang="scss"
    src="./card.scss"
/>
