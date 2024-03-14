<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiModal from '@/components/ui/modal/modal.vue'
import langs from '@/doc/views/component/ui/modal/translate/index.mjs'
import doc from '@/doc/views/component/ui/modal/modal.doc.mjs'

export default {
    name: 'ViewModal',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {}
    },
    data() {
        return {
            isVisible: false
        }
    },
    computed: {
        doc () {
            return doc
        },
        examples () {
            return this.docExamples(VuiModal, doc)
        }
    },
    methods: {
        onClick () {
            this.isVisible = true
        }
    }
}
</script>

<template>
    <div class="view-modal">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`modal-${example.props.id}`"
                >
                    <vui-card>
                        <template #header>
                            {{ $t('page.component.modal.example-1') }}
                        </template>
                        <template #body>
                            <vui-modal
                                v-model="isVisible"
                                v-bind="example.props"
                                :title="$t('page.component.modal.title')"
                            >
                                <template #body>
                                    <p>
                                        {{ $t('page.component.modal.content') }}
                                    </p>
                                </template>
                            </vui-modal>
                            <vui-button
                                :text="$t('page.component.modal.click-to-open')"
                                @click="onClick"
                            />
                        </template>
                    </vui-card>
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

.view-modal {

}
</style>
