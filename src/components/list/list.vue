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
                    { 'vui-list-items-item--active': item[itemValue] === selected[itemValue] }
                ]"
                @click="() => onClick(item)"
            >
                <span class="vui-list-items-item-label">
                    {{ item[itemLabel] }}
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
