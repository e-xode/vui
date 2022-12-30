<template>
    <div class="view-grid">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card>
                    <template #header>
                        {{ $t('page.component.grid.example-1') }}
                    </template>
                    <template #body>
                        <!-- -->
                    </template>
                </vui-card>
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
                            :items="docItems(doc)"
                        />
                    </template>
                </vui-card>
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
