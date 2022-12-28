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
            modelValue: 'form.text',
            placeholder: 'Type a value',
            type: 'text'
        },
        slot: null,
        tag: 'vui-input'
    },
    {
        title: 'page.component.input.example-2',
        attrs: {
            'id': 'input-1',
            'type': 'email',
            'placeholder': 'Type a value',
            ':disabled': 'disabled'
        },
        props: {
            modelValue: 'form.email',
            placeholder: 'Type a value',
            type: 'email'
        },
        slot: null,
        tag: 'vui-input'
    }
]
export {
    examples
}
