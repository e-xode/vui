<template>
    <div class="view-button">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`button-example--${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        :loading="isLoading(example.props.id)"
                        v-bind="example.props"
                        @click="() => onClick(example.props.id)"
                    >
                        <template v-if="example.text">
                            {{ $t(example.text) }}
                        </template>
                    </component>
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
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
