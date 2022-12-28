const examples = [
    {
        title: 'page.component.dropdown.example-1',
        attrs: {
            'id': 'dropdown-1',
            ':disabled': 'disabled'
        },
        props: {
            items: [1, 2, 3, 4]
        },
        slot: null,
        tag: 'vui-dropdown'
    },
    {
        title: 'page.component.dropdown.example-2',
        attrs: {
            'id': 'button-1',
            ':disabled': 'disabled'
        },
        props: {
            items: [
                { key: 'key 1', value: 'value 1' },
                { key: 'key 2', value: 'value 2' }
            ],
            itemLabel: 'key',
            itemValue: 'value'
        },
        slot: null,
        tag: 'vui-dropdown'
    }
]
export {
    examples
}
