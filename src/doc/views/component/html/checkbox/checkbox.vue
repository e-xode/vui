<template>
    <div class="view-checkbox">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`checkbox-${example.props.id}`"
                >
                    <template v-if="example.props.id === 'vui-checkbox-1'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            :value="states[example.props.id]"
                            @update:change="(value) => states[example.props.id] = value"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                        &nbsp;
                        <vui-tag>
                            {{ $t('page.component.checkbox.label') }}:
                            {{ states[example.props.id] }}
                        </vui-tag>
                    </template>
                    <template v-if="example.props.id === 'vui-checkbox-2'">
                        <component
                            :is="example.component"
                            disabled
                            v-bind="example.props"
                            :checked="states['vui-checkbox-1']"
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
                <h2 class="title">
                    {{ $t('page.component.h2.slots') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docSlotsHeaders"
                    :items="docSlots"
                />
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./checkbox.mjs"
/>

<style
    lang="scss"
    src="./checkbox.scss"
/>
