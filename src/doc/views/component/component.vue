<template>
    <div class="view-component">
        <div class="h1">
            <vui-nav
                item-label="label"
                item-value="name"
                :items="[
                    {
                        label: $t('page.component.nav.start'),
                        name: 'ViewStart'
                    },
                    {
                        label: component.label,
                        name: component.name
                    }
                ]"
                :value="component"
                @input="onRoute"
            />
            <h1>
                <i class="fa-brands fa-vuejs" />
                {{ $t('page.component.h1') }}
                <span
                    v-if="component"
                    class="view-component-name"
                >
                    {{ component.label }}
                </span>
            </h1>
        </div>
        <router-view />
    </div>
</template>

<script
    src="./component.mjs"
/>

<style
    lang="scss"
    src="./component.scss"
/>
