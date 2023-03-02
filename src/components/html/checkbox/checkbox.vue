<template>
    <div
        :id="componentId"
        :name="componentId"
        :class="[
            'vui-checkbox',
            { 'vui-checkbox--checked': isChecked }
        ]"
        @click="onToggle"
    >
        <input
            type="checkbox"
        >
        <label
            v-if="$slots.default"
            :for="componentId"
        >
            <slot />
        </label>
    </div>
</template>

<script
    src="./checkbox.mjs"
/>

<style
    lang="scss"
    src="./checkbox.scss"
/>
