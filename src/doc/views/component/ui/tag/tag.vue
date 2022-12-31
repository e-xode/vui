<template>
    <div class="view-tag">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="(example) in examples"
                    :key="`button-${example.props.id}`"
                >
                    <template #header>
                        <span class="title">
                            {{ $t(example.title) }}
                        </span>
                    </template>
                    <template #body>
                        <component
                            :is="example.component"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                        <div
                            class="highlighted-code"
                            v-html="example.highlighted"
                        />
                    </template>
                </vui-card>
            </vui-grid-unit>
            <vui-grid-unit>
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
    src="./tag.mjs"
/>

<style
    lang="scss"
    src="./tag.scss"
/>
