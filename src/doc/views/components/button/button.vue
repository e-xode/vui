<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.btn.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-btn>button</v-btn>
            </v-card>
            <v-card class="code">
                <v-code
                    :source="code"
                />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
    scoped
/>
