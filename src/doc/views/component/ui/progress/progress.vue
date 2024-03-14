<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiProgress from '@/components/ui/progress/progress.vue'
import langs from '@/doc/views/component/ui/progress/translate/index.mjs'
import doc from '@/doc/views/component/ui/progress/progress.doc.mjs'

export default {
    name: 'ViewProgress',
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
            return this.docExamples(VuiProgress, {
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
    <div class="view-progress">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="(example) in examples"
                    :key="`card-${example.props.id}`"
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
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.view-progress {

}
</style>
