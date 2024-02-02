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
                                {{ form[example.props.id] }}
                            </vui-tag>
                            <component
                                :is="example.component"
                                v-bind="example.props"
                                v-model="form[example.props.id]"
                                required
                                class="test"
                            />
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
                    :headers="docPropsHeaders"
                    :items="docProps"
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
