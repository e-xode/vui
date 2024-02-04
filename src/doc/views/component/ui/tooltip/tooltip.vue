<template>
    <div class="view-tooltip">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="tooltip in examples"
                    :key="`tooltip-${tooltip.props.id}`"
                >
                    <vui-button
                        :id="`button-tooltip-${tooltip.props.id}`"
                        :text="$t(tooltip.button)"
                        @click="() => onClick(tooltip.props.id)"
                    >
                        <template #prepend>
                            <component
                                :is="tooltip.component"
                                v-model="tooltips[tooltip.props.id]"
                                v-bind="tooltip.props"
                            />
                        </template>
                    </vui-button>
                    <div
                        class="highlighted-code"
                        v-html="tooltip.highlighted"
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
    src="./tooltip.mjs"
/>

<style
    lang="scss"
    src="./tooltip.scss"
/>
