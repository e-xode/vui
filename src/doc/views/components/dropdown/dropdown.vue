<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.dropdown.h1-1') }}
        </h1>
        <v-cols cols="2">
            <v-card class="preview">
                <v-dropdown
                    :onchange="() => {}"
                    :items="[
                        { value: 'item-1' },
                        { value: 'item-2' },
                        { value: 'item-3' },
                    ]"
                />
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
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
    scoped
/>
