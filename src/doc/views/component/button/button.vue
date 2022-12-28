<template>
    <div class="view-button">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="(example, i) in examples"
                    :key="`button-example--${i}`"
                >
                    <template #header>
                        {{ $t(example.title) }}
                    </template>
                    <template #body>
                        {{  test  }}
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
            <vui-grid-unit class="api-options">
                <vui-card>
                    <template #header>
                        <h2>
                            {{ $t('page.component.button.h2.api') }}
                        </h2>
                    </template>
                </vui-card>
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
