<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiTooltip from '@/components/ui/tooltip/tooltip.vue'
import langs from '@/doc/views/component/ui/tooltip/translate/index.mjs'
import doc from '@/doc/views/component/ui/tooltip/tooltip.doc.mjs'

export default {
    name: 'ViewTooltip',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data () {
        return {
            tooltips: []
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiTooltip, {
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
    mounted () {
        this.tooltips = doc.examples.map(() => false)
    },
    methods: {
        onClick (id) {
            const tooltip = this.tooltips[id]
            this.tooltips[id] = !tooltip
        }
    }
}
</script>

<template>
    <div class="view-tooltip">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="tooltip in examples"
                    :key="`tooltip-${tooltip.props.id}`"
                >
                    <vui-button
                        :id="`button-tooltip-${tooltip.props.id}`"
                        :text="$t(tooltip.button)"
                        @click="() => onClick(tooltip.props.id)"
                    >
                        <template #prepend>
                            <component
                                :is="tooltip.component"
                                v-model="tooltips[tooltip.props.id]"
                                v-bind="tooltip.props"
                            />
                        </template>
                    </vui-button>
                    <div
                        class="highlighted-code"
                        v-html="tooltip.highlighted"
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

.view-tooltip {

}
</style>
