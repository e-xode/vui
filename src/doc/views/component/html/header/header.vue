<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiHeader from '@/components/html/header/header.vue'
import doc from '@/doc/views/component/html/header/header.doc.mjs'
import langs from '@/doc/views/component/html/header/translate/index.mjs'

export default {
    name: 'ViewHeader',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiHeader, doc)
        }
    }
}
</script>

<template>
    <div class="view-header">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`header-${example.props.id}`"
                >
                    <vui-header
                        v-bind="example.props"
                    >
                        {{ $t(example.text) }}
                    </vui-header>
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

.view-header {
}
</style>
