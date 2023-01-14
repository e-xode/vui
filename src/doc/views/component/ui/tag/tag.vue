<template>
    <div class="view-tag">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`button-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
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
            </vui-grid-unit>
            <vui-grid-unit class="api-options">
                <h2 class="title">
                    {{ $t('page.component.h2.api') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docPropsHeaders"
                    :items="docProps"
                />
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
