<template>
    <div class="vui-input">
        <input
            v-bind="$attrs"
            :id="componentId"
            :disabled="disabled"
            :placeholder="placeholderValue"
            :type="type"
            :value="typed"
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
