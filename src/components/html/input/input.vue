<template>
    <div class="vui-input">
        <input
            v-bind="$attrs"
            :type="type"
            :value="modelValue"
            @input="onInput"
        />
    </div>
</template>

<script
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>