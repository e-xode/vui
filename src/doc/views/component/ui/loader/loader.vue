<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiLoader from '@/components/ui/loader/loader.vue'
import doc from '@/doc/views/component/ui/loader/loader.doc.mjs'
import langs from '@/doc/views/component/ui/loader/translate/index.mjs'

export default {
    name: 'ViewLoader',
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
            return this.docExamples(VuiLoader, doc)
        }
    }
}
</script>

<template>
    <div class="view-loader">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`loader-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
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
                    {{ $t('page.component.h2.attrs') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docAttrsHeaders"
                    :items="docAttrs"
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

.view-loader {

}
</style>
