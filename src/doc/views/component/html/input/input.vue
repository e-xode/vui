<template>
    <div class="view-input">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`button-${example.props.id}`"
                >
                    <vui-card>
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
                        </template>
                    </vui-card>
                    <div
                        class="highlighted-code"
                        v-html="example.highlighted"
                    />
                </template>
            </vui-grid-unit>
            <vui-grid-unit>
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
    src="./input.mjs"
/>

<style
    lang="scss"
    src="./input.scss"
/>
