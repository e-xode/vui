<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.cols.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-cols cols="2">
                    <v-col>col1</v-col>
                    <v-col>col2</v-col>
                </v-cols>
            </v-card>
            <v-card class="code">
                <v-code :source="code" />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./cols.mjs"
/>

<style
    lang="scss"
    src="./cols.scss"
    scoped
/>
