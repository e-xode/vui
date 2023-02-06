<template>
    <div
        :id="componentId"
        :name="componentId"
        :class="[
            'vui-toggle',
            { 'vui-toggle--checked': toggled }
        ]"
        @click="onToggle"
    >
        <div class="vui-toggle-slider">
            <div class="vui-toggle-slider-button" />
        </div>
    </div>
</template>

<script
    src="./toggle.mjs"
/>

<style
    lang="scss"
    src="./toggle.scss"
/>
