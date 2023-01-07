<template>
    <div class="view-tooltip">
        <vui-grid>
            <vui-grid-unit class="examples">
                <template
                    v-for="(example, index) in examples"
                    :key="`button-${example.props.id}`"
                    >
                    <vui-button
                        :id="`button-holder-${index}`"
                        :text="$t(example.button)"
                        @click="() => onClick(index)"
                    />
                    <component
                        v-bind="example.props"
                        :is="example.component"
                        :holder="holder(index)"
                        :visible="tooltips[index]"
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
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docHeaders"
                    :items="docAttrs(doc)"
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
