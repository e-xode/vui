<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiList from '@/components/ui/list/list.vue'
import langs from '@/doc/views/component/ui/list/translate/index.mjs'
import doc from '@/doc/views/component/ui/list/list.doc.mjs'

export default {
    name: 'ViewList',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples() {
            return this.docExamples(VuiList, doc)
        }
    }
}
</script>

<template>
    <div class="view-list">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`list-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                        :title="$t(example.title)"
                    />
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

.view-list {
    .examples {
        .highlighted-code {
            margin-bottom: 2.5rem;
        }
    }
}
</style>
