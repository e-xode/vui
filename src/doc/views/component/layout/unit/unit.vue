<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiGridUnit from '@/components/layout/unit/unit.vue'
import langs from '@/doc/views/component/layout/unit/translate/index.mjs'
import doc from '@/doc/views/component/layout/unit/unit.doc.mjs'

export default {
    name: 'ViewGridUnit',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiGridUnit, doc)
        }
    }
}
</script>

<template>
    <div class="view-grid-unit">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`grid-unit-${example.gridid}`"
                >
                    <vui-grid
                        :id="example.gridid"
                        col-sm="1"
                        col-md="2"
                    >
                        <vui-grid-unit
                            col="30"
                        >
                            <p>
                                {{ $t('page.component.grid-unit.left') }}
                            </p>
                        </vui-grid-unit>
                        <vui-grid-unit
                            col="70"
                        >
                            <p>
                                {{ $t('page.component.grid-unit.right') }}
                            </p>
                        </vui-grid-unit>
                    </vui-grid>
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
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.view-grid-unit {
    #vui-grid-1 {
        padding: 1rem;
        border: 1px solid $vui-color-grey;

        .vui-grid-unit {
            border: 1px solid $vui-color-grey;
        }
    }
}
</style>
