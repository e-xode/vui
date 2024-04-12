<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiInput from '@/components/html/input/input.vue'
import langs from '@/doc/views/component/html/input/translate/index.mjs'
import doc from '@/doc/views/component/html/input/input.doc.mjs'

export default {
    name: 'ViewInput',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data () {
        return {
            form: {
            }
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples() {
            return this.docExamples(VuiInput, doc)
        }
    }
}
</script>

<template>
    <div class="view-input">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`button-${example.props.id}`"
                >
                    <vui-card>
                        <template #header>
                            <span class="title">
                                {{ $t(example.title) }}
                            </span>
                        </template>
                        <template #body>
                            <component
                                :is="example.component"
                                v-bind="example.props"
                                :id="example.props.id"
                                required
                                class="test"
                                @update:model-value="(v) => form[example.props.id] = v"
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

<style lang="scss">
@import "@/scss/import.scss";

.view-input {
    .vui-card {
        .vui-card-body {
            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            justify-content: space-between;

            .vui-input {
                flex: 0 0 49%;
            }
        }
    }
}
</style>
