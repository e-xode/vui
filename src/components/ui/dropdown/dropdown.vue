<template>
    <div class="vui-dropdown">
        <div
            :class="[
                'ui-dropdown-placeholder',
                { 'ui-dropdown-placeholder--toggled': toggled },
                { 'ui-dropdown-placeholder--animating': animating },
                { 'ui-dropdown-placeholder--disabled': disabled }
            ]"
            @click.stop="onToggle"
        >
            <span class="ui-dropdown-placeholder-label">
                {{ placeholderValue }}
            </span>
        </div>
        <vui-list
            v-if="toggled"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
            :title="listTitle"
            :value="selected"
            class="ui-dropdown-list"
            @input="toggleItem"
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
