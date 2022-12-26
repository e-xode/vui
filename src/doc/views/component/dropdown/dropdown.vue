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
            </template>
        </vui-card>
        <vui-card>
            <template #header>
                {{  $t('page.component.dropdown.example-2') }}
            </template>
            <template #body>
                <vui-dropdown
                    :items="[
                        { label: 'foo', value: 'foo' },
                        { label: 'bar', value: 'bar' }
                    ]"
                    itemLabel="label"
                    itemValue="value"
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
