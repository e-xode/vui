<template>
    <div class="view-toggle">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`toggle-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                        v-model="models[example.props.id]"
                        :checked-value="true"
                        :unchecked-value="false"
                    >
                        <template v-if="example.text">
                            {{ $t(example.text) }}
                        </template>
                    </component>
                    &nbsp;
                    <vui-tag>
                        {{ $t('page.component.toggle.label') }}:
                        {{ models[example.props.id] }}
                    </vui-tag>
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
    src="./toggle.mjs"
/>

<style
    lang="scss"
    src="./toggle.scss"
/>
