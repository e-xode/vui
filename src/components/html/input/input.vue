<template>
    <div :class="['vui-input', $attrs.class]">
        <input
            :id="componentId"
            v-model="typed"
            :disabled="disabled"
            :maxlength="maxlength"
            :name="$attrs.name"
            :placeholder="placeholderValue"
            :required="$attrs.required"
            :type="type"
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
