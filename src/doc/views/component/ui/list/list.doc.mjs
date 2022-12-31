export default {
    examples: [
        {
            markup: `
                <vui-list
                id="example-list-1"
                :loading="isLoading"
                :items=[1,2,3,4]
            />
            `,
            props: {
                id: 'example-list-1',
                items: [1,2,3,4]
            },
            title: 'page.component.list.example-1'
        },
        {
            markup: `
                <vui-list
                    id="example-list-2"
                    :loading="isLoading"
                    :items=[
                        { label: "label 1", value: "value 1" },
                        { label: "label 2", value: "value 2" }
                    ]
                    item-label="label"
                    item-value="value"
                />
            `,
            props: {
                id: 'example-list-2',
                items: [
                    { label: 'Label 1', value: 'value 1' },
                    { label: 'Label 2', value: 'value 2' }
                ],
                itemLabel: "label",
                itemValue: "value"
            },
            title: 'page.component.list.example-2'
        }
    ]
}
