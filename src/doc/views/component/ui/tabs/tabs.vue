<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTabs from '@/components/ui/tabs/tabs.vue'
import langs from '@/doc/views/component/ui/tabs/translate/index.mjs'
import doc from '@/doc/views/component/ui/tabs/tabs.doc.mjs'

export default {
    name: 'ViewTabs',
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
            return this.docExamples(VuiTabs, {
                attrs: doc.attrs,
                examples: doc.examples.map((example) => ({
                    ...example,
                    props: {
                        ...example.props,
                        text: example.props.text
                            ? this.$t(example.props.text)
                            : null
                    }
                }))
            })
        }
    }
}
</script>

<template>
    <div class="view-tabs">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <component
                    :is="examples[0].component"
                    v-bind="examples[0].props"
                >
                    <template
                        v-for="(slot, index) in examples[0].props.items"
                        #[slot.value]
                        :key="`${examples[0].props.id}-slot-${index}`"
                    >
                        {{ slot.label }}
                    </template>
                </component>
                <div
                    class="highlighted-code"
                    v-html="examples[0].highlighted"
                />
                <component
                    :is="examples[1].component"
                    v-bind="examples[1].props"
                />
                <div
                    class="highlighted-code"
                    v-html="examples[1].highlighted"
                />
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

.view-tabs {

}
</style>
