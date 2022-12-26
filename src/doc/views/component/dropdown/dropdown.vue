<template>
    <div class="view-dropdown">
        <vui-card>
            <template #header>
                {{  $t('page.component.dropdown.example-1') }}
            </template>
            <template #body>
                <vui-dropdown
                    :items="[1,2,3,4]"
                />
                <div class="code"
                    v-html="codes[0]"
                />
            </template>
        </vui-card>
        <vui-card>
            <template #header>
                {{  $t('page.component.dropdown.example-2') }}
            </template>
            <template #body>
                <vui-dropdown
                    :items="[
                        { label: 'label1', value: 'value1' },
                        { label: 'lable2', value: 'value2' }
                    ]"
                    itemLabel="label"
                    itemValue="value"
                />
                <div class="code"
                    v-html="codes[1]"
                />
            </template>
        </vui-card>
    </div>
</template>

<script
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
/>
