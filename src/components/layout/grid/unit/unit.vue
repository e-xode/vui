<template>
    <div
        :class="[
            'vui-grid-unit',
            { [`vui-grid-unit-col--${col}`]: col }
        ]">
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
