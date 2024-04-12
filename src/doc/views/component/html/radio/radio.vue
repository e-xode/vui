<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import ViewRadio from '@/components/html/radio/radio.vue'
import langs from '@/doc/views/component/html/radio/translate/index.mjs'
import doc from '@/doc/views/component/html/radio/radio.doc.mjs'

export default {
    name: 'ViewRadio',
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
            return this.docExamples(ViewRadio, {
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
    <div class="view-radio">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`radio-${example.props.id}`"
                >
                    <template v-if="example.props.id === 'vui-radio-2'">
                        <component
                            :is="example.component"
                            disabled
                            v-bind="example.props"
                            :checked="states['vui-radio-1']"
                        >
                            <template v-if="example.text">
                                {{ $t(example.text) }}
                            </template>
                        </component>
                    </template>
                    <template v-if="example.props.id !== 'vui-radio-2'">
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
                        <vui-tag v-if="example.props.id === 'vui-radio-1'">
                            {{ $t('page.component.radio.label') }}:
                            {{ states[example.props.id] }}
                        </vui-tag>
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
