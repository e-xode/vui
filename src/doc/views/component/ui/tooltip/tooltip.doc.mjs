export default {
    attrs: [
        {
            tag: 'holder',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.holder'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.icon'
        },
        {
            tag: 'position',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.position'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.text'
        },
        {
            tag: 'visible',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.visible'
        }
    ],
    examples: [
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-1"
                    icon="fa-solid fa-message"
                >
                    <span>My content tooltip</span>
                </vui-tooltip>
            `,
            props: {
                id: 'example-tooltip-1',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'right'
            },
            button: 'page.component.tooltip.button.show-right'
        },
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-2",
                    icon="fa-solid fa-message"
                    text="My content tooltip"
                />
            `,
            props: {
                id: 'example-tooltip-2',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'top'
            },
            button: 'page.component.tooltip.button.show-top'
        },
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-3",
                    icon="fa-solid fa-message"
                    text="My content tooltip"
                />
            `,
            props: {
                id: 'example-tooltip-3',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'bottom'
            },
            button: 'page.component.tooltip.button.show-bottom'
        },
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-4",
                    icon="fa-solid fa-message"
                    text="My content tooltip"
                />
            `,
            props: {
                id: 'example-tooltip-4',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'left'
            },
            button: 'page.component.tooltip.button.show-left'
        }
    ]
}
