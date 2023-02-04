<template>
    <div class="view-grid">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`grid-${example.gridid}`"
                >
                    <vui-grid
                        :id="example.gridid"
                        col-sm="1"
                        col-md="2"
                    >
                        <vui-grid-unit>
                            <p>
                                {{ $t('page.component.grid.left') }}
                            </p>
                        </vui-grid-unit>
                        <vui-grid-unit>
                            <p>
                                {{ $t('page.component.grid.right') }}
                            </p>
                        </vui-grid-unit>
                    </vui-grid>
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
    src="./grid.mjs"
/>

<style
    lang="scss"
    src="./grid.scss"
/>
