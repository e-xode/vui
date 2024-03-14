<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiPager from '@/components/ui/pager/pager.vue'
import doc from '@/doc/views/component/ui/pager/pager.doc.mjs'
import langs from '@/doc/views/component/ui/pager/translate/index.mjs'

export default {
    name: 'ViewPager',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {}
    },
    data() {
        return {
            pages: {}
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiPager, doc)
        }
    },
    mounted() {
        this.pages = this.examples.reduce((obj, example) => ({
            ...obj,
            [example.props.id]: example.modelValue
        }), {})
    },
    methods: {
    }
}
</script>>

<template>
    <div class="view-pager">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`pager-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                        v-model="pages[example.props.id]"
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

.view-pager {

}
</style>
