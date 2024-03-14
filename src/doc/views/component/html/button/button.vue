<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiButton from '@/components/html/button/button.vue'
import langs from '@/doc/views/component/html/button/translate/index.mjs'
import doc from '@/doc/views/component/html/button/button.doc.mjs'

export default {
    name: 'ViewButton',
    mixins: [
        demonstrable
    ],
    setup () {
        translatable(langs)
        return {
        }
    },
    data () {
        return {
            buttons: []
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiButton, {
                attrs: doc.attrs,
                examples: doc.examples.map((example) => ({
                    ...example,
                    props: {
                        ...example.props,
                        text: example.props.text
                            ? this.$t(example.props.text)
                            : undefined
                    }
                }))
            })
        }
    },
    mounted () {
        this.buttons = doc.examples.map((button) => ({
            id: button.props.id
        }))
    },
    methods: {
        isLoading (id) {
            const button = this.buttons.find((button) => button.id === id )
            return button?.loading
        },
        onClick (id) {
            const { buttons } = this
            this.buttons = buttons.map((button) => {
                return button.id === id
                    ? { ...button, loading: !button.loading }
                    : button
            })
        }
    }
}

</script>
<template>
    <div class="view-button">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`button-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        :loading="isLoading(example.props.id)"
                        v-bind="example.props"
                        @click="() => onClick(example.props.id)"
                    >
                        <template v-if="example.text">
                            {{ $t(example.text) }}
                        </template>
                    </component>
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

.view-button {
}
</style>
