<template>
    <div
        :id="componentId"
        :class="[
            'vui-checkbox',
            { 'vui-checkbox--checked': isChecked },
            $attrs.class
        ]"
        @click="onToggle"
    >
        <input
            :name="name"
            :disabled="disabled"
            :required="hasAttribute('required')"
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
