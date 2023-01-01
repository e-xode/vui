<template>
    <div class="view-page">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`header-example--${example.props.id}`"
                >
                    <vui-page>
                        <template #header>
                            {{ $t(example.header) }}
                        </template>
                        <template #body>
                            {{ $t(example.body) }}
                        </template>
                        <template #footer>
                            {{ $t(example.footer) }}
                        </template>
                    </vui-page>
                    <div
                        class="highlighted-code"
                        v-html="example.highlighted"
                    />
                </template>
            </vui-grid-unit>
            <vui-grid-unit class="api-options">
                <h2 class="title">
                    {{ $t('page.component.h2.api') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docHeaders"
                    :items="docAttrs(doc)"
                />
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./page.mjs"
/>

<style
    lang="scss"
    src="./page.scss"
/>
