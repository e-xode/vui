<template>
    <div
        :id="componentId"
        :class="[
            'vui-nav',
            { 'vui-nav--flat' : hasAttribute('flat') }
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
            :selectable="true"
            @update:value="onClick"
        >
            <template
                #item="{
                    index,
                    item,
                    itemValue,
                    itemLabel
                }"
            >
                <slot name="item">
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
