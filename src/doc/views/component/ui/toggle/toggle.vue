<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiToggle from '@/components/ui/toggle/toggle.vue'
import langs from '@/doc/views/component/ui/toggle/translate/index.mjs'
import doc from '@/doc/views/component/ui/toggle/toggle.doc.mjs'

export default {
    name: 'ViewToggle',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data() {
        return {
            states: {}
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiToggle, {
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
    },
    mounted() {
        this.states = this.examples.reduce((obj, example) => ({
            ...obj,
            [example.props.id]: false
        }), {})
    }
}
</script>

<template>
    <div class="view-toggle">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`toggle-${example.props.id}`"
                >
                    <template v-if="example.props.id === 'vui-toggle-1'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            v-model="states[example.props.id]"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                        &nbsp;
                        <vui-tag>
                            {{ $t('page.component.toggle.label') }}:
                            {{ states[example.props.id] }}
                        </vui-tag>
                    </template>
                    <template v-if="example.props.id === 'vui-toggle-2'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            :checked="states['vui-toggle-1']"
                            disabled
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                    </template>
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

.view-tag {

}
</style>
