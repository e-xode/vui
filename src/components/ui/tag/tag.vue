<template>
    <div
        :id="componentId"
        :class="[
            'vui-tag',
            { 'vui-tag--with-icon' : icon }
        ]"
    >
        <i
            v-if="icon"
            :class="['vui-tag-icon', icon]"
        />
        <slot v-if="!!$slots.default" />
        <template v-if="text">
            {{ text }}
        </template>
    </div>
</template>

<script
    src="./tag.mjs"
/>

<style
    lang="scss"
    src="./tag.scss"
/>
