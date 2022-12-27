<template>
    <div class="vui-list">
        <div
            v-if="title"
            class="vui-list-title"
        >
            {{ title }}
        </div>
        <ul class="vui-list-items">
            <li
                v-for="(item, index) in items"
                :key="`item--${index}`"
                :class="[
                    'vui-list-items-item',
                    { 'vui-list-items-item--selected': isSelected(item) }
                ]"
                @click="() => onClick(item)"
            >
                <span class="vui-list-items-item-label">
                    <i
                        v-if="item.icon"
                        :class="[
                            'vui-list-items-item-label',
                            item.icon
                        ]"
                    />
                    {{
                        itemValue
                            ? item[itemLabel]
                            : item
                    }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script
    src="./list.mjs"
/>

<style
    lang="scss"
    src="./list.scss"
/>
