export default {
    attrs: [
        {
            tag: 'headers',
            type: 'Array',
            text: 'page.component.table.doc.tag.headers'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.table.doc.tag.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.table.doc.tag.item-value'
        },
        {
            tag: 'items',
            type: 'Array',
            text: 'page.component.table.doc.tag.items'
        }
    ],
    examples: [
        {
            markup: `
                <vui-table
                    id="example-table-2"
                    itemLabel="label",
                    itemValue="value"
                    headers="[
                        { label: 'Start date', value: 'startDate' },
                        { label: 'Quantity', value: 'quantity' },
                        { label: 'End date', value: 'endDate' },
                        { label: 'Quantity', value: 'quantity' },
                    ]",
                    items="[
                        {
                            startDate: '2022-01-01',
                            quantity: '2 187',
                            endDate: '2022-12-01',
                            quantity: '1 239'
                        },
                        {
                            startDate: '2021-01-01',
                            quantity: '2 037',
                            endDate: '2021-12-01',
                            quantity: '1 448'
                        }
                    ]"
                />
            `,
            props: {
                id: 'example-table-2',
                headers: [
                    { label: 'Start date', value: 'startDate' },
                    { label: 'Quantity', value: 'quantity' },
                    { label: 'End date', value: 'endDate' },
                    { label: 'Quantity', value: 'quantity' },
                ],
                items: [
                    {
                        startDate: '2022-01-01',
                        quantity: '2 187',
                        endDate: '2022-12-01',
                        quantity: '1 239'
                    },
                    {
                        startDate: '2021-01-01',
                        quantity: '2 037',
                        endDate: '2021-12-01',
                        quantity: '1 448'
                    }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            }
        }
    ]
}
