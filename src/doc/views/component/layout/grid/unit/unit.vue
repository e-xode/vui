<template>
    <div class="view-grid-unit">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">

            </vui-grid-unit>
            <vui-grid-unit class="api-options">
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
                            :items="docAttrs(doc)"
                        />
                    </template>
                </vui-card>
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./unit.mjs"
/>

<style
    lang="scss"
    src="./unit.scss"
/>
