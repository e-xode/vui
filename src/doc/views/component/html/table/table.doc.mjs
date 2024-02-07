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
                        {
                            label: 'Start date',
                            value: 'startDate'
                        },
                        {
                            label: 'Start Quantity',
                            value: 'startQuantity'
                        },
                        {
                            label: 'End date',
                            value: 'endDate'
                        },
                        {
                            label: 'End Quantity',
                            value: 'endQuantity'
                        }
                    ]",
                    items="[
                        {
                            startDate: '2022-01-01',
                            startQuantity: '2 187',
                            endDate: '2022-12-01',
                            endQuantity: '1 239'
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
                        label: 'Start date',
                        value: 'startDate'
                    },
                    {
                        label: 'Start Quantity',
                        value: 'startQuantity'
                    },
                    {
                        label: 'End date',
                        value: 'endDate'
                    },
                    {
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
                    }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            }
        },
        {
            markup: `
                <vui-table
                    itemLabel="label",
                    itemValue="value"
                    headers="[
                        {
                            label: 'Id',
                            value: 'id'
                        },
                        {
                            label: 'City Name',
                            value: 'city.name'
                        },
                        {
                            label: 'Population',
                            value: 'city.population'
                        }
                    ]"
                    items="[
                        {
                            id: 1,
                            city: {
                                name: 'Paris',
                                population: 2161000
                            }
                        },
                        {
                            id: 1,
                            city: {
                                name: 'Mexico',
                                population: 126700000
                            }
                        }
                    ]"
                >
                    <template #item.endQuantity="{ item }">
                        <td>{{ item.endQuantity }} units</td>
                    </template>
                </vui-table>
            `,
            props: {
                id: 'vui-table-2',
                headers: [
                    {
                        label: 'Id',
                        value: 'id',
                        class: 'text-center'
                    },
                    {
                        label: 'City Name',
                        value: 'city.name'
                    },
                    {
                        label: 'Population',
                        value: 'city.population'
                    }
                ],
                items: [
                    {
                        id: 1,
                        city: {
                            name: 'Paris',
                            population: 2161000
                        }
                    },
                    {
                        id: 2,
                        city: {
                            name: 'Mexico',
                            population: 126700000
                        }
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
