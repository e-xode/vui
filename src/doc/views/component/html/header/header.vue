<template>
    <div class="view-header">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`header-example--${example.props.id}`"
                >
                    <vui-header>
                        {{ $t(example.text) }}
                    </vui-header>
                    <div
                        class="highlighted-code"
                        v-html="example.highlighted"
                    />
                </template>
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
    src="./header.mjs"
/>

<style
    lang="scss"
    src="./header.scss"
/>
