<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiCard from '@/components/ui/card/card.vue'
import doc from '@/doc/views/component/ui/card/card.doc.mjs'
import langs from '@/doc/views/component/ui/card/translate/index.mjs'

export default {
    name: 'ViewCard',
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
            return this.docExamples(VuiCard, doc)
        }
    }
}
</script>

<template>
    <div class="view-card">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`card-${example.props.id}`"
                >
                    <vui-card
                        v-bind="example.props"
                    >
                        <template
                            v-if="example.header"
                            #header
                        >
                            {{ $t(example.header) }}
                        </template>
                        <template
                            v-if="example.body"
                            #body
                        >
                            {{ $t(example.body) }}
                        </template>
                        <template
                            v-if="example.footer"
                            #footer
                        >
                            {{ $t(example.footer) }}
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

.view-card {

}
</style>
