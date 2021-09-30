<template>
    <div :class="[
        'v-list'
    ]">
        <div :class="[
            'items',
            { 'items--disabled': disabled }
        ]">
            <div
                v-for="item in items"
                v-on:click="onClick(item)"
                :key="item.value"
                :class="[
                    'item',
                    { 'item--active': current.value === item.value }
                ]"
            >
                {{ label(item) }}
            </div>
        </div>
    </div>
</template>

<script
    src="./list.mjs"
/>

<style
    lang="scss"
    src="./list.scss"
/>
