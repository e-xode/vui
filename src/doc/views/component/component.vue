<template>
    <div class="view-component">
        <h1>
            {{ $t('page.component.h1') }}
            {{ component.label }}
        </h1>
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
