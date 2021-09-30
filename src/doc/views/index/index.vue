<template>
    <v-page class="page-index">
        <v-header
            :items="navItems"
            :onclick="(option) =>  $router.push({
                name: option.value
            })"
        />
        <router-view></router-view>
        <div class="v-page-body" v-if="$route.name === 'pageIndex'">
            <h1>
                {{ $t('page.index.h1-1') }}
            </h1>
            <v-card>
                <v-list
                    :items="routes"
                    :translate="true"
                    :onclick="(option) => $router.push({
                        name: option.value
                    })"
                />
            </v-card>
        </div>
    </v-page>
</template>

<script
    src="./index.mjs"
/>

<style
    lang="scss"
    src="./index.scss"
    scoped
/>
