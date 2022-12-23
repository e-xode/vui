<template>
    <div class="view-component">
        <vui-card>
            <template #header>
                <h1>
                    {{ $t('page.component.h1') }}
                    {{  $route.name }}
                </h1>
            </template>
            <template #body>
                <router-view />
            </template>
            <template #footer>

            </template>
        </vui-card>
    </div>
</template>

<script
    src="./component.mjs"
/>

<style
    lang="scss"
    src="./component.scss"
/>
