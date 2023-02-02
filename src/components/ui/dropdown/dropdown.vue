<template>
    <div
        :id="componentId"
        class="vui-dropdown"
    >
        <div
            :class="[
                'vui-dropdown-placeholder',
                { 'vui-dropdown-placeholder--toggled': toggled },
                { 'vui-dropdown-placeholder--animating': animating },
                { 'vui-dropdown-placeholder--disabled': disabled }
            ]"
            @click.stop="onClick"
        >
            <input
                type="text"
                class="vui-dropdown-placeholder-label"
                :placeholder="placeholderValue"
                v-model="keyword"
            />
        </div>
        <vui-list
            v-if="toggled"
            class="vui-dropdown-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
            :keyword="keyword"
            :selectable="true"
            :title="listTitle"
            :value="selected"
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
