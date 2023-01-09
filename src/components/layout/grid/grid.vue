<template>
    <div
        :id="componentId"
        :class="[
            'vui-grid',
            { [`vui-grid--col-xs--${colXs}`]: colXs },
            { [`vui-grid--col-sm--${colSm}`]: colSm },
            { [`vui-grid--col-md--${colMd}`]: colMd },
            { [`vui-grid--col-xl--${colXl}`]: colXl }
        ]"
    >
        <slot />
    </div>
</template>

<script
    src="./grid.mjs"
/>

<style
    lang="scss"
    src="./grid.scss"
/>
