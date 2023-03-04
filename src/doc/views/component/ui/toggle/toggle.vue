<template>
    <div class="view-toggle">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`toggle-${example.props.id}`"
                >
                    <template v-if="example.props.id === 'vui-toggle-1'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            v-model="states[example.props.id]"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                        &nbsp;
                        <vui-tag>
                            {{ $t('page.component.toggle.label') }}:
                            {{ states[example.props.id] }}
                        </vui-tag>
                    </template>
                    <template v-if="example.props.id === 'vui-toggle-2'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            :checked="states['vui-toggle-1']"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                    </template>
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
