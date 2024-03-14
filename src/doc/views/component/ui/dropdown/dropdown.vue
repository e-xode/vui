<script>
import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiDropdown from '@/components/ui/dropdown/dropdown.vue'
import langs from '@/doc/views/component/ui/dropdown/translate/index.mjs'
import doc from '@/doc/views/component/ui/dropdown/dropdown.doc.mjs'

export default {
    name: 'ViewDropdown',
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
            return this.docExamples(VuiDropdown, doc)
        }
    }
}
</script>

<template>
    <div class="view-dropdown">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit class="examples">
                <template
                    v-for="example in examples"
                    :key="`dropdown-${example.props.id}`"
                >
                    <component
                        :is="example.component"
                        v-bind="example.props"
                        :placeholder="$t(example.title)"
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

.view-dropdown {
    .vui-grid {
        .vui-grid-unit.examples {
            .vui-dropdown {
                min-width: 400px;
            }

            .highlighted-code {
                margin-bottom: 2.5rem;
            }
        }
    }
}
</style>
