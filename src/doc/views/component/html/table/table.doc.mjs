export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-table
                    itemLabel="label",
                    itemValue="value"
                    headers="[
                        { class: 'text-center', label: 'Start date', value: 'startDate' },
                        { class: 'text-center', label: 'Start Quantity', value: 'startQuantity' },
                        { class: 'text-center', label: 'End date', value: 'endDate' },
                        { class: 'text-center', label: 'End Quantity', value: 'endQuantity' },
                    ]",
                    items="[
                        {
                            class: 'text-center,
                            startDate: '2022-01-01',
                            startQuantity: '2 187',
                            endDate: '2022-12-01',
                            endQuantity: '1 239'
                        },
                        {
                            class: 'text-center,
                            startDate: '2021-01-01',
                            startQuantity: '2 037',
                            endDate: '2021-12-01',
                            endQuantity: '1 448'
                        }
                    ]"
                >
                    <template #item.endQuantity="{ item }">
                        <td>{{ item.endQuantity }} units</td>
                    </template>
                </vui-table>
            `,
            props: {
                id: 'vui-table-1',
                headers: [
                    {
                        class: 'text-center',
                        label: 'Start date',
                        value: 'startDate'
                    },
                    {
                        class: 'text-center',
                        label: 'Start Quantity',
                        value: 'startQuantity'
                    },
                    {
                        class: 'text-center',
                        label: 'End date',
                        value: 'endDate'
                    },
                    {
                        class: 'text-center',
                        label: 'End Quantity',
                        value: 'endQuantity'
                    }
                ],
                items: [
                    {
                        startDate: '2022-01-01',
                        startQuantity: '723',
                        endDate: '2022-12-01',
                        endQuantity: '1 239'
                    },
                    {
                        startDate: '2021-01-01',
                        startQuantity: '819',
                        endDate: '2021-12-01',
                        endQuantity: '1 448'
                    }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            }
        }
    ],
    props: [
        {
            tag: 'headers',
            type: 'Array',
            text: 'page.component.table.doc.prop.headers'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.table.doc.prop.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.table.doc.prop.item-value'
        },
        {
            tag: 'items',
            type: 'Array',
            text: 'page.component.table.doc.prop.items'
        }
    ],
    slots: [
        {
            name: 'header',
            text: 'page.component.table.doc.slot.header'
        },
        {
            name: 'item',
            text: 'page.component.table.doc.slot.item'
        }
    ]
}
