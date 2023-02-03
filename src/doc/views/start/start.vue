<template>
    <div class="view-start">
        <vui-list
            flat
            :autoclose="false"
            :expanded="true"
            :items="components"
            item-label="label"
            item-value="value"
        >
            <template #group-item="{ item }">
                {{ item.label }}
            </template>
            <template #item="{ item }">
                <router-link :to="{ name: item.doc.name }">
                    {{ item.label }}
                </router-link>
            </template>
        </vui-list>
    </div>
</template>

<script
    src="./start.mjs"
/>

<style
    lang="scss"
    src="./start.scss"
/>
