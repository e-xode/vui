<template>
    <div class="vui-input">
        <input
            v-bind="$attrs"
            :disabled="disabled"
            :placeholder="placeholderValue"
            :type="type"
            :value="modelValue"
            @input="onInput"
        >
    </div>
</template>

<script
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
