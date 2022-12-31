<template>
    <div class="view-input">
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
                        <vui-tag>
                            {{ $t('page.component.input.vmodel') }}:
                            {{ form[example.props.type] }}
                        </vui-tag>
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            v-model="form[example.props.type]"
                            maxlength="15"
                        />
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
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
