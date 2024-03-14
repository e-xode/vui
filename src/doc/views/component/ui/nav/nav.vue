<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiNav from '@/components/ui/nav/nav.vue'
import langs from '@/doc/views/component/ui/nav/translate/index.mjs'
import doc from '@/doc/views/component/ui/nav/nav.doc.mjs'

export default {
    name: 'ViewNav',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data() {
        return {
            selected: null
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiNav, {
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
    <div class="view-nav">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="nav in examples"
                    :key="`nav-${nav.props.id}`"
                >
                    <component
                        :is="nav.component"
                        v-bind="nav.props"
                        v-model="selected"
                    />
                    <div
                        class="highlighted-code"
                        v-html="nav.highlighted"
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

.view-nav {

}
</style>
