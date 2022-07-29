<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.card.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
            </v-card>
            <v-card class="code">
                <v-code :source="code" />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./card.mjs"
/>

<style
    lang="scss"
    src="./card.scss"
    scoped
/>
