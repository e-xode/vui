<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTable from '@/components/html/table/table.vue'
import langs from '@/doc/views/component/html/table/translate/index.mjs'
import doc from '@/doc/views/component/html/table/table.doc.mjs'

export default {
    name: 'ViewTable',
    mixins: [demonstrable],
    setup() {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples() {
            return this.docExamples(VuiTable, doc)
        }
    }
}
</script>

<template>
    <div class="view-table">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`table-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                    >
                        <template #[`item.endQuantity`]="{ item }">
                            <td>{{ item.endQuantity }} units</td>
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

<style lang="scss">
@import "@/scss/import.scss";

.view-table {
    .vui-table {
        table {
            width: 100%;
        }
    }
}
</style>
