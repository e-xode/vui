<template>
    <div class="view-modal">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
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
                            <vui-modal
                                :visible="isVisible"
                                v-bind="example.props"
                                :on-close="onClose"
                                :title="$t('page.component.modal.title')"
                            >
                                <template #body>
                                    <p>
                                        {{ $t('page.component.modal.content') }}
                                    </p>
                                </template>
                            </vui-modal>
                            <vui-button
                                :text="$t('page.component.modal.click-to-open')"
                                @click="onClick"
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
    src="./modal.mjs"
/>

<style
    lang="scss"
    src="./modal.scss"
/>
