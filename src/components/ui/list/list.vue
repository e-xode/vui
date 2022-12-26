<template>
    <div class="vui-list">
        <div
            class="vui-list-title"
            v-if="title"
        >
            {{  title }}
        </div>
        <ul class="vui-list-items">
            <li
                v-for="(item, index) in items"
                :key="`item--${index}`"
                :class="[
                    'vui-list-items-item',
                    { 'vui-list-items-item--active': isActive(item) }
                ]"
                @click="() => onClick(item)"
            >
                <span class="vui-list-items-item-label">
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
