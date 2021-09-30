<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.tabs.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-tabs>
                    <v-tab>tab1</v-tab>
                    <v-tab>tab2</v-tab>
                </v-tabs>
            </v-card>
            <v-card class="code">
                <v-code :source="code" />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./tabs.mjs"
/>

<style
    lang="scss"
    src="./tabs.scss"
    scoped
/>
