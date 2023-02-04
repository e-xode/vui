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
            <slot
                name="keyword"
                :keyword="keyword"
            >
                <input
                    v-model="keyword"
                    type="text"
                    class="vui-dropdown-placeholder-label"
                    :placeholder="placeholderValue"
                >
            </slot>
        </div>
        <vui-list
            v-if="toggled"
            v-model="selected"
            class="vui-dropdown-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :items="items"
            :item-label="itemLabel"
            :item-value="itemValue"
            :keyword="keyword"
            :selectable="true"
            :title="listTitle"
            @input="onToggle"
        >
            <template
                v-if="$slots.placeholder"
                #placeholder
            >
                <slot name="placeholder" />
            </template>
            <template
                v-if="$slots['group-item']"
                #group-item
            >
                <slot name="group-item" />
            </template>
            <template
                v-if="$slots.item"
                #item
            >
                <slot name="item" />
            </template>
        </vui-list>
    </div>
</template>

<script
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
/>
