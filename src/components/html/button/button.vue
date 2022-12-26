<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="[
            'vui-button',
            { 'vui-button--toggled' : toggled },
            { 'vui-button--animating' : animating },
            { 'vui-button--disabled' : disabled }
        ]"
        @click.stop="onClick"
    >
        <i
            v-if="icon"
            :class="['vui-button-icon', icon]"
        />
        <slot />
    </button>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
