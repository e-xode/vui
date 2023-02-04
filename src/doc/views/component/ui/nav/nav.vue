<template>
    <div class="view-nav">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="nav in examples"
                    :key="`nav-${nav.props.id}`"
                >
                    <component
                        :is="nav.component"
                        v-bind="nav.props"
                        v-model="selected"
                    />
                    <div
                        class="highlighted-code"
                        v-html="nav.highlighted"
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
    src="./nav.mjs"
/>

<style
    lang="scss"
    src="./nav.scss"
/>
