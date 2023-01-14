<template>
    <div class="view-start">
        <vui-list
            flat
            :items="components"
            item-label="label"
            item-value="name"
        >
            <template #default="{ item }">
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
