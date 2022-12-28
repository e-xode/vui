const examples = [
    {
        title: 'page.component.input.example-1',
        attrs: {
            'id': 'input-1',
            'type': 'text',
            'placeholder': 'Type a value',
            ':disabled': 'disabled'
        },
        props: {
            placeholder: 'Type a value',
            type: 'text',
            modelValue: 'form.text',
            onClick: () => {
                console.log('click')
            }
        },
        slot: null,
        tag: 'vui-input'
    },
    {
        title: 'page.component.input.example-2',
        attrs: {
            'id': 'button-1',
            'type': 'email',
            'placeholder': 'Type a value',
            ':disabled': 'disabled'
        },
        props: {
            placeholder: 'Type a value',
            type: 'email',
            modelValue: 'form.email',
            onClick: () => {
                console.log('click')
            }
        },
        slot: null,
        tag: 'vui-input'
    }
]
export {
    examples
}
