<template>
    <div class="vui-dropdown">
        <div
            :class="[
                'ui-dropdown-placeholder',
                { 'ui-dropdown-placeholder--active': animation }
            ]"
            @click.stop="onToggle"
        >
            <span class="ui-dropdown-placeholder-label">
                {{ placeholderValue }}
            </span>
        </div>
        <vui-list
            v-if="open"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
            :value="selected"
            class="ui-dropdown-list"
            @set="toggleItem"
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
