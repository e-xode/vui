<template>
    <div :class="[
        'v-dropdown'
    ]">
        <div
            @click.stop="focus"
            :class="[
                'v-form-field',
                { 'v-form-field--focus': isOpen }
            ]"
        >
            <v-input
                type="text"
                :onkey="onKey"
                :placeholder="placeholder"
                :value="text"
            />
            <div
                @click.stop="toggle()"
                class="toggler"
            />
        </div>
        <v-list
            class="options"
            v-if="isOpen"
            :items="items"
            :translate="translate"
            :onclick="select"
        />
    </div>
</template>

<script
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
/>
