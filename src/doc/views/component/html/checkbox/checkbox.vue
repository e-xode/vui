<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiCheckbox from '@/components/html/checkbox/checkbox.vue'
import langs from '@/doc/views/component/html/checkbox/translate/index.mjs'
import doc from '@/doc/views/component/html/checkbox/checkbox.doc.mjs'

export default {
    name: 'ViewCheckbox',
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
            return this.docExamples(VuiCheckbox, {
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
    },
    methods: {
    }
}
</script>
<template>
    <div class="view-checkbox">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`checkbox-${example.props.id}`"
                >
                    <template v-if="example.props.id === 'vui-checkbox-1'">
                        <component
                            :is="example.component"
                            v-bind="example.props"
                            :value="states[example.props.id]"
                            @update:model-value="(value) => states[example.props.id] = value"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                        &nbsp;
                        <vui-tag>
                            {{ $t('page.component.checkbox.label') }}:
                            {{ states[example.props.id] }}
                        </vui-tag>
                    </template>
                    <template v-if="example.props.id === 'vui-checkbox-2'">
                        <component
                            :is="example.component"
                            disabled
                            v-bind="example.props"
                            :checked="states['vui-checkbox-1']"
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

.view-tag {

}
</style>
