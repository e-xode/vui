const examples = [
    {
        title: 'page.component.button.example-1',
        attrs: {
            'id': 'button-1',
            'type': 'button',
            '@click': '() => onClick',
            ':disabled': 'disabled'
        },
        props: {
            onClick: () => {
                console.log('click')
            }
        },
        slot: 'click me',
        tag: 'vui-button'
    },
    {
        title: 'page.component.button.example-2',
        attrs: {
            'id': 'button-1',
            'type': 'button',
            '@click': '() => onClick',
            ':disabled': 'disabled'
        },
        props: {
            onClick: () => {
                console.log('click')
            }
        },
        slot: 'click me',
        tag: 'vui-button'
    }
]
export {
    examples
}
