<template>
    <div class="view-table">
        <vui-grid
            col-sm="1"
            col-md="2"
        >>
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
                    </vui-card>
                    <component
                        :is="example.component"
                        v-bind="example.props"
                    />
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
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./table.mjs"
/>

<style
    lang="scss"
    src="./table.scss"
/>
