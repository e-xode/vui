<template>
    <div class="view-index">
        <h1>
            {{ $t('page.index.h1') }}
        </h1>
        <i class="fa-brands fa-vuejs" />
        <div class="description">
            <p>
                {{ $t('page.index.description') }}
            </p>
        </div>
        <vui-button
            icon="fa-sharp fa-solid fa-book-open-reader"
        >
            {{ $t('page.index.button') }}
        </vui-button>
    </div>
</template>

<script
    src="./index.mjs"
/>

<style
    lang="scss"
    src="./index.scss"
/>
