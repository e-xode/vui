<template>
    <div class="view-button">
        <vui-grid>
            <vui-grid-unit class="examples">
                <vui-card
                    v-for="example in examples"
                    :key="`button-example--${example.props.id}`"
                >
                    <template #header>
                        <span class="title">
                            {{ $t(example.title) }}
                        </span>
                    </template>
                    <template #body>
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
    src="./button.mjs"
/>

<style
    lang="scss"
    src="./button.scss"
/>
