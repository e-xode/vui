<template>
    <div class="view-input">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="(example,i) in examples"
                    :key="`button-example--${i}`"
                >
                    <template #header>
                        {{ $t(example.title) }}
                    </template>
                    <template #body>
                        <vui-tag>
                            {{ $t('page.component.input.vmodel') }}:
                        </vui-tag>
                        <component
                            :is="example.vnode"
                            :key="`button--${i}`"
                        />
                        <div
                            class="code"
                            v-html="example.highlighted"
                        />
                    </template>
                </vui-card>
            </vui-grid-unit>
            <vui-grid-unit>
                <vui-card>
                    <template #header>
                        <h2>
                            {{ $t('page.component.input.h2.api-options') }}
                        </h2>
                    </template>
                </vui-card>
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
