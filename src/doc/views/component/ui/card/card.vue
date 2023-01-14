<template>
    <div class="view-card">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`button-example--${example.props.id}`"
                >
                    <vui-card>
                        <template #header v-if="example.header">
                            {{ $t(example.header) }}
                        </template>
                        <template #body v-if="example.body">
                            {{ $t(example.body) }}
                        </template>
                        <template #footer v-if="example.footer">
                            {{ $t(example.footer) }}
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
                <h2 class="title">
                    {{ $t('page.component.h2.attrs') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docAttrsHeaders"
                    :items="docAttrs"
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
    src="./card.mjs"
/>

<style
    lang="scss"
    src="./card.scss"
/>
