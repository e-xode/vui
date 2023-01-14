<template>
    <div
        :id="componentId"
        :class="[
            'vui-button',
            { 'vui-button--with-icon' : icon },
            { 'vui-button--toggled' : toggled },
            { 'vui-button--animating' : !disabled && animating },
            { 'vui-button--loading' : !disabled && loading },
            { 'vui-button--disabled' : disabled }
        ]"
        @click.stop="onClick"
    >
        <button
            class="vui-button-holder"
            :disabled="disabled"
            :type="type"
        >
            <i
                v-if="icon"
                :class="['vui-button-icon', icon]"
            />
            <slot>
                {{ text }}
            </slot>
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
