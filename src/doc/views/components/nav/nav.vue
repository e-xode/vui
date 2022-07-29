<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.nav.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-nav
                    :items="items"
                    :onclick="(option) => {}"
                />
            </v-card>
            <v-card class="code">
                <v-code
                    :source="nav"
                />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./nav.mjs"
/>

<style
    lang="scss"
    src="./nav.scss"
    scoped
/>
