<template>
    <div class="view-dropdown">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="(example,i) in examples"
                    :key="`dropdown-sample--${i}`"
                >
                    <template #header>
                        {{ $t(example.title) }}
                    </template>
                    <template #body>
                        <component
                            :is="example.vnode"
                            :key="`dropdown--${i}`"
                        />
                        <div
                            class="code"
                            v-html="example.highlighted"
                        />
                    </template>
                </vui-card>
            </vui-grid-unit>
            <vui-grid-unit class="api-options">
                <vui-card>
                    <template #header>
                        <h2>
                            {{ $t('page.component.dropdown.h2.api') }}
                        </h2>
                    </template>
                </vui-card>
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
/>
