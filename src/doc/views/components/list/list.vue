<template>
    <div class="v-page-body">
        <h1>
            {{ $t('page.list.h1-1') }}
        </h1>
        <h2>
            {{ $t('page.list.h2-1') }}
        </h2>
        <v-cols cols="2">
            <v-card class="preview">
                <v-list
                    :disabled="false"
                    :items="items"
                    :onclick="(option) => {}"
                />
            </v-card>
            <v-card class="code">
                <v-code
                    :source="list1"
                />
            </v-card>
        </v-cols>
    </div>
    <div class="v-page-body">
        <h2>
            {{ $t('page.list.h2-2') }}
        </h2>
        <v-cols cols="2">
            <v-card class="preview">
                <v-list
                    :disabled="true"
                    :items="items"
                    :onclick="(option) => {}"
                />
            </v-card>
            <v-card class="code">
                <v-code
                    :source="list2"
                />
            </v-card>
        </v-cols>
    </div>
</template>

<script
    src="./list.mjs"
/>

<style
    lang="scss"
    src="./list.scss"
    scoped
/>
