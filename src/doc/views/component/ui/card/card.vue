<template>
    <div class="view-card">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`button-example--${example.props.id}`"
                >
                    <vui-card>
                        <template #header>
                            {{ $t(example.header) }}
                        </template>
                        <template #body>
                            {{ $t(example.body) }}
                        </template>
                        <template #footer>
                            {{ $t(example.footer) }}
                        </template>
                    </vui-card>
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
    src="./card.mjs"
/>

<style
    lang="scss"
    src="./card.scss"
/>
