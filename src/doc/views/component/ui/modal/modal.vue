<template>
    <div class="view-modal">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`modal-example--${example.props.id}`"
                >
                    <vui-card>
                        <template #header>
                            {{ $t('page.component.modal.example-1') }}
                        </template>
                        <template #body>
                            <vui-modal />
                            <vui-button
                                :text="$t('page.component.modal.click-top-open')"
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
    src="./modal.mjs"
/>

<style
    lang="scss"
    src="./modal.scss"
/>
