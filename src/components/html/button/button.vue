<template>
    <div
        :id="identifier"
        :class="[
            'vui-button',
            { 'vui-button--toggled' : toggled },
            { 'vui-button--animating' : !disabled && animating },
            { 'vui-button--loading' : !disabled && loading },
            { 'vui-button--disabled' : disabled }
        ]"
        @click.stop="onClick"
    >
        <button
            :disabled="disabled"
            :type="type"
        >
            <i
                v-if="icon"
                :class="['vui-button-icon', icon]"
            />
            <slot />
        </button>
        <div class="vui-button-loader" />
    </div>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
