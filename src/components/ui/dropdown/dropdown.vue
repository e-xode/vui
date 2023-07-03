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
                <vui-input
                    v-model="keyword"
                    type="text"
                    class="vui-dropdown-placeholder-label"
                    :placeholder="placeholderValue"
                />
            </slot>
        </div>
        <vui-list
            v-if="toggled"
            v-model="selected"
            class="vui-dropdown-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :items="items"
            :keyword="keyword"
            :selectable="true"
            :title="listTitle"
            @update:value="onToggle"
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
