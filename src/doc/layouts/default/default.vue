<template>
    <vui-page class="layout-default">
        <template #header>
            <vui-header>
                <router-link
                    class="home"
                    :to="{ name: 'ViewIndex' }"
                >
                    {{ $t('component.header.home') }}
                </router-link>
                <vui-dropdown
                    v-model="component"
                    :items="components"
                    item-label="label"
                    item-value="path"
                    :placeholder="$t('component.header.dropdown.components')"
                    @update:model-value="toggleComponent"
                />
            </vui-header>
        </template>
        <template #body>
            <router-view />
        </template>
        <template #footer>
            <vui-footer>
                <span class="copyright">
                    {{ $t(('component.footer.copyright')) }}
                    <a href="https://www.e-xode.net">
                        www.e-xode.net
                    </a>
                </span>
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
