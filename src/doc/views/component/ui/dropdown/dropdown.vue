<template>
    <div class="view-dropdown">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="(example,i) in examples"
                    :key="`dropdown-sample--${i}`"
                >
                    <template #header>
                        <span class="title">
                            {{ $t(example.title) }}
                        </span>
                    </template>
                    <template #body>
                        <component
                            :is="example.component"
                            v-bind="example.props"
                        />
                        <div
                            class="highlighted-code"
                            v-html="example.highlighted"
                        />
                    </template>
                </vui-card>
            </vui-grid-unit>
            <vui-grid-unit class="api-options">
                <vui-card>
                    <template #header>
                        <h2 class="title">
                            {{ $t('page.component.h2.api') }}
                        </h2>
                    </template>
                    <template #body>
                        <vui-table
                            item-label="label"
                            item-value="value"
                            :headers="docHeaders"
                            :items="docItems(doc)"
                        />
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
