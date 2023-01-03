<template>
    <div class="view-dropdown">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="(example,i) in examples"
                    :key="`dropdown-sample--${i}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                        :placeholder="$t(example.title)"
                    />
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
    src="./dropdown.mjs"
/>

<style
    lang="scss"
    src="./dropdown.scss"
/>
