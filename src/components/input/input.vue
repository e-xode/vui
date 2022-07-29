<template>
    <div :class="[
        'v-input'
    ]">
        <input
            v-model="current"
            @keyup="onkey"
            :placeholder="placeholder"
            :type="$attrs.type"
        />
    </div>
</template>

<script
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
