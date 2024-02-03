<template>
    <div
        :id="componentId"
        ref="tooltip"
        :class="[
            'vui-tooltip',
            { 'vui-tooltip--with-icon': icon },
            $props.class
        ]"
        :style="{
            position: 'fixed',
            display,
            top: `${top}px`,
            left: `${left}px`
        }"
    >
        <i
            :class="[
                'vui-tooltip-pointer',
                `vui-tooltip-pointer--${position}`
            ]"
        />
        <i
            v-if="icon"
            :class="['vui-tooltip-icon', icon]"
        />
        <slot v-if="!!$slots.default" />
        <template v-if="text">
            {{ text }}
        </template>
    </div>
</template>

<script
    src="./tooltip.mjs"
/>

<style
    lang="scss"
    src="./tooltip.scss"
/>
