<template>
    <vui-page class="layout-default">
        <template #header>
            <vui-header>
                <router-link
                    class="legend"
                    :to="{ name: 'ViewIndex' }"
                >
                    {{ $t('page.index.header.home') }}
                </router-link>
                <vui-dropdown
                    :items="components"
                    item-label="name"
                    item-value="path"
                    :placeholder="$t('component.header.dropdown.components')"
                    @input="toggleComponent"
                />
            </vui-header>
        </template>
        <template #body>
            <router-view />
        </template>
        <template #footer>
            <vui-footer>
                {{ $t('page.index.footer') }}
            </vui-footer>
        </template>
    </vui-page>
</template>

<script
    src="./default.mjs"
/>

<style
    lang="scss"
    src="./default.scss"
/>
