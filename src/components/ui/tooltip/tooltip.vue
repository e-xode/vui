<template>
    <div
        v-if="visible"
        :id="componentId"
        :class="[
            'vui-tooltip',
            { 'vui-tooltip--with-icon': icon }
        ]"
    >
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
