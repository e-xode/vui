<template>
    <div
        :id="componentId"
        :class="['vui-input', $props.class]"
    >
        <input
            v-model="typed"
            :disabled="disabled"
            :maxlength="maxlength"
            :name="name"
            :placeholder="placeholderValue"
            :required="hasAttribute('required')"
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
