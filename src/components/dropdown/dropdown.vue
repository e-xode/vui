<template>
    <div class="vui-dropdown">
        <div
            :class="[
                'ui-dropdown-placeholder',
                { 'ui-dropdown-placeholder--active': animation }
            ]"
            @click.stop="toggle"
        >
            <span class="ui-dropdown-placeholder-label">
                {{ getPlaceholder }}
            </span>
        </div>
        <vui-list
            v-show="open"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
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
