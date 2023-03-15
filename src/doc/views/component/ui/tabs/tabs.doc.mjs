export default {
    examples: [
        {
            markup: `
                <vui-tabs
                    items="[
                        { 'label': 'Tab 1', 'value': 'tab1' },
                        { 'label': 'Tab 2', 'value': 'tab2' },
                    ]"
                >
                    <template #tab1>Tab 1</template>
                    <template #tab2>Tab 2</template>
                </vui-tabs>
            `,
            props: {
                id: 'vui-tabs-1',
                items: [
                    { label: 'Tab 1', value: 'tab1' },
                    { label: 'Tab 2', value: 'tab2' }
                ]
            },
            text: 'page.component.tabs.default'
        }
    ],
    props: [
        {
            tag: 'items',
            type: 'Array',
            text: 'page.component.modal.doc.prop.items'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.modal.doc.prop.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.modal.doc.prop.item-value'
        },
        {
            tag: 'v-model',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.vmodel'
        },
        {
            tag: 'value',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.value'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.card.doc.slot.default'
        }
    ]
}
