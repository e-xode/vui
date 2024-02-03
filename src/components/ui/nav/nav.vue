<template>
    <div
        :id="componentId"
        :class="[
            'vui-nav',
            { 'vui-nav--flat' : hasAttribute('flat') },
            $props.class
        ]"
    >
        <vui-list
            v-model="selected"
            class="vui-nav-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :item-label="itemLabel"
            :item-value="itemValue"
            :items="items"
            :selectable="!disabled"
            @update:modelValue="onClick"
        >
            <template
                #item="{
                    index,
                    item,
                    itemValue,
                    itemLabel
                }"
            >
                <slot
                    name="item"
                    :index="index"
                    :item="item"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                >
                    <i
                        :class="[
                            'fa-solid',
                            { 'fa-location-dot': !index },
                            { 'fa-chevron-right': index }
                        ]"
                    />
                    <span class="vui-list-items-item-label-text">
                        {{ itemValue
                            ? item[itemLabel]
                            : item
                        }}
                    </span>
                </slot>
            </template>
        </vui-list>
    </div>
</template>

<script
    src="./nav.mjs"
/>

<style
    lang="scss"
    src="./nav.scss"
/>
