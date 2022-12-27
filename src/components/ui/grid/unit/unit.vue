<template>
    <div
        class="vui-unit"
        :style="{
            'flex-basis': flexBasis,
            'flex-grow': flexGrow,
            'flex-shrink': flexShrink
        }"
    >
        <slot />
    </div>
</template>

<script
    src="./unit.mjs"
/>

<style
    lang="scss"
    src="./unit.scss"
/>
