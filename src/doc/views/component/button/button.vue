<template>
    <div class="view-button">
        <vui-card>
            <template #header>
                {{ $t('page.component.button.example-1') }}
            </template>
            <template #body>
                <vui-button
                    type="button"
                >
                    {{ $t('page.component.button.click') }}
                </vui-button>
                <div
                    class="code"
                    v-html="codes[0]"
                />
            </template>
        </vui-card>
        <vui-card>
            <template #header>
                {{ $t('page.component.button.example-2') }}
            </template>
            <template #body>
                <vui-button
                    type="submit"
                >
                    {{ $t('page.component.button.click') }}
                </vui-button>
                <div
                    class="code"
                    v-html="codes[1]"
                />
            </template>
        </vui-card>
    </div>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
