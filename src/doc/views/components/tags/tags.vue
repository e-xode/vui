<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.tags.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-tags :items="items">
                    <v-tag>tag3</v-tag>
                    <v-tag>tag4</v-tag>
                </v-tags>
            </v-card>
            <v-card class="code">
                <v-code :source="code" />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./tags.mjs"
/>

<style
    lang="scss"
    src="./tags.scss"
    scoped
/>
