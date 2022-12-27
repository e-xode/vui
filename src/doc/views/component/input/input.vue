<template>
    <div class="view-input">
        <vui-card>
            <template #header>
                {{ $t('page.component.input.example-1') }}
            </template>
            <template #body>
                <vui-input
                    v-model="form.text"
                    type="text"
                />
                <div
                    class="code"
                    v-html="codes[0]"
                />
            </template>
        </vui-card>
        <vui-card>
            <template #header>
                {{ $t('page.component.input.example-2') }}
            </template>
            <template #body>
                <vui-input
                    v-model="form.email"
                    type="email"
                />
                <div
                    class="code"
                    v-html="codes[1]"
                />
            </template>
        </vui-card>
    </div>
</template>

<script
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
