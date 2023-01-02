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
        <router-link
            :to="{ name: 'ViewStart' }"
            class="vui-button vui-button--with-icon vui-button--get-started"
        >
            <span class="vui-button-holder">
                <i class="vui-button-icon fa-solid fa-book-open-reader" />
                {{ $t('page.index.get-started') }}
            </span>
        </router-link>
        <a
            class="vui-button vui-button--with-icon vui-button--github"
            href="https://github.com/e-xode/v-ui"
        >
            <span class="vui-button-holder">
                <i class="vui-button-icon fa-brands fa-github" />
                {{ $t('page.index.github') }}
            </span>
        </a>
    </div>
</template>

<script
    src="./index.mjs"
/>

<style
    lang="scss"
    src="./index.scss"
/>
